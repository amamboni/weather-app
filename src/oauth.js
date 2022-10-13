import { createAuth0 } from '@auth0/auth0-vue';

export default createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
});