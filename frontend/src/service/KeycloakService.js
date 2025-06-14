import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID
});

const initKeycloak = ({setAuthenticated, setName}) => {
    keycloak.init({ onLoad: 'check-sso', checkLoginIframe: false })
        .then((authenticated) => {
            if (authenticated) {
                console.log("Keycloak authenticated successfully");
                setAuthenticated(true);

                const userInfo = keycloak.tokenParsed;
                setName(userInfo.name);
                console.log(JSON.stringify(userInfo));

                const flag = localStorage.getItem("userRegister");
                if(!flag) {
                    const request = {
                        username: userInfo.preferred_username,
                        email: userInfo.email,
                        name: userInfo.name,
                        role: userInfo.userRole,
                        email_verified: userInfo.email_verified
                    };

                    console.log("request: ", JSON.stringify(request))

                    fetch(`${import.meta.env.VITE_BACKEND_URL}/users/save`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(request)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log("User data saved to database");
                            localStorage.setItem("userRegister", true);
                            localStorage.setItem("username", data.username);
                            localStorage.setItem("role", data.role);
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