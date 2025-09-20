const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  PROJECTS: `${API_BASE_URL}/api/projects`,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  AUTH_VERIFY: `${API_BASE_URL}/api/auth/verify`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  CLOUDINARY_SIGN: `${API_BASE_URL}/api/cloudinary/sign`,
};