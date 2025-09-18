const user = localStorage.getItem("udata")
    ? JSON.parse(atob(localStorage.getItem("udata")))
    : {};

export const getUserRoles = () => {
    const user = localStorage.getItem("udata")
    ? JSON.parse(atob(localStorage.getItem("udata")))
    : {};
    return user?.roles || [];
}

export const getUserToken = () => {
    return user?.token;
};

export const getUserName = () => {
    return user?.name;
};

export const getUserPermissions = () => {
    return user?.permissions;
};