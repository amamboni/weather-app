import { createAuth0 } from '@auth0/auth0-vue';

export default createAuth0({
  domain: "dev-ityy8a34.us.auth0.com",
  client_id: "vPav9F4ZRuBnaA1xM5dKcNsflbRx9OhR",
  redirect_uri: 'http://localhost:3000/home',
});
