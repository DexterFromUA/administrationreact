export const SERVER_IP = 'localhost';
// export const INSTAGRAM_AUTH = `http://${SERVER_IP}:8080/auth/instagram`;
export const INSTAGRAM_AUTH =
  'https://api.instagram.com/oauth/authorize/?client_id=2690149747939469&redirect_uri=https://about.instagram.com/&scope=user_profile,user_media&response_type=code';
export const INSTAGRAM_AUTH_WITH_CALLBACK = `http://${SERVER_IP}:8080/auth/instagram/callback?code=`;
export const INSTAGRAM_API = `https://api.instagram.com/oauth/access_token`;

export const NEWS_URI = `http://${SERVER_IP}:8080/news`;
