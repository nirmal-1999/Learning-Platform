import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8081/',
    realm: 'master',
    clientId: 'learningPlatform'
});

const initKeycloak = (onAuthenticated) => {
    keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false })
        .then((authenticated) => {
            if (authenticated) {
                console.log("Keycloak authenticated successfully");
                onAuthenticated();

                const userInfo = keycloak.tokenParsed;
                console.log(JSON.stringify(userInfo));
                fetch('http://localhost:5000/api/userInfo/save', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${keycloak.token}`
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => console.log("User data saved to database"))
                .catch(err => console.error(err));
            } else {
                console.warn("Keycloak not authenticated");
            }
        })
        .catch((error) => {
            console.log('Failed to initialize Keycloak', error);
        });
}


const logOut = () => {
    keycloak.logout();
}

const login = () => {
    keycloak.login();
}

export {initKeycloak, logOut, login}