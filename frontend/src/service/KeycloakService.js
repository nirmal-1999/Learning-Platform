import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'learningManagement'
});

const initKeycloak = (onAuthenticated) => {
    keycloak.init({onLoad: 'login-required'})
    .then((authenticate) => {
        if(authenticate) {
            console.log("Keycloak authenticated successfully");
            onAuthenticated();
        }
        else {
            console.warn("Keycloak not authenticated");
        }
    })
    .catch((error) => {
        console.log('Failed to initialize Keycloak', error)
    });
}

const logOut = () => {
    keycloak.logout();
}

export {initKeycloak,logOut}