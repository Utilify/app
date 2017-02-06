interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'XwUqqB15kXrjnK4HbApJ8A3g1U3hPKNb',
  domain: 'luap.eu.auth0.com',
  callbackURL: 'http://localhost:4200/'
};
