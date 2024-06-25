// src/utils/auth.js
import Cookies from "js-cookie";

export function getAuthToken() {
  return Cookies.get("token");
}

export function makeAuthenticatedRequest(url, options = {}) {
  const token = getAuthToken();

  const headers = new Headers(options.headers || {});
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  return fetch(url, { ...options, headers });
}
