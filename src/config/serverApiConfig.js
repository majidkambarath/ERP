export const API_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
    ? import.meta.env.VITE_BACKEND_SERVER + 'api/'
    : 'https://erp-node-ub9b.onrender.com/api/';
export const BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER
    : 'https://erp-node-ub9b.onrender.com/';

export const WEBSITE_URL = import.meta.env.PROD
  ? 'http://cloud.idurarapp.com/'
  : 'https://erp-mwl0.onrender.com/';
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : 'https://erp-node-ub9b.onrender.com/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';

export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;

//  console.log(
//    '🚀 Welcome to IDURAR ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
//  );
