export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// const CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const MENU_API = "https://foody-pearl-three.vercel.app/api/menu"; // Assuming your proxy server runs on localhost:3001 and has a route for menu data


export let CORS_PROXY_URL_ = "https://foody-pearl-three.vercel.app";
export const getListAPI = (latitude, longitude) => {
//   const timestamp = Date.now();
  return `${CORS_PROXY_URL_}/api/res?lat=${latitude}&lng=${longitude}`;
};
