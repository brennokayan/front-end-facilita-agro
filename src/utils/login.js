const STORAGE_KEY = "accessToken";
const STORAGE_TYPE_USER = "typeUser";

const isLogged = () => sessionStorage.getItem(STORAGE_KEY) !== null;
const typeUser = () => sessionStorage.getItem(STORAGE_TYPE_USER) !== null;
const login = (token, typeUser, callback = () => {}) => {
    if (!token) {
      callback();
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, token);
    sessionStorage.setItem(STORAGE_TYPE_USER, typeUser);
    // window.location.href = "/dashboard";
  };

const getToken = () => {
    return sessionStorage.getItem(STORAGE_KEY);
}

const getTypeUser = () => {
    return sessionStorage.getItem(STORAGE_TYPE_USER);
}

const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_TYPE_USER);
    window.location.href = "/";
}


export { isLogged, login, getToken, logout, typeUser, getTypeUser }