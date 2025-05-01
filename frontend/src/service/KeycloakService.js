import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'https://auth.sahe.li/',
    realm: 'master',
    clientId: 'learningPlatform'
});

const initKeycloak = ({setAuthenticated, setName}) => {
    keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false })
        .then((authenticated) => {
            if (authenticated) {
                console.log("Keycloak authenticated successfully");
                setAuthenticated(true);

                const userInfo = keycloak.tokenParsed;
                setName(userInfo.name);
                // console.log(JSON.stringify(userInfo));

                const flag = localStorage.getItem("userRegister");
                if(!flag) {
                    fetch('http://localhost:5000/userInfo/save', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${keycloak.token}`
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log("User data saved to database");
                            localStorage.setItem("userRegister", true);
                        })
                        .catch(err => console.error(err));
                }
                
            } else {
                console.warn("Keycloak not authenticated");
            }
        })
        .catch((error) => {
            console.log('Failed to initialize Keycloak', error);
        });
}


const logOut = () => {
    localStorage.clear()
    keycloak.logout();
}

const login = () => {
    keycloak.login();
}

export { initKeycloak, logOut, login }