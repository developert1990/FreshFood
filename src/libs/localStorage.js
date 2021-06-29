export const saveStorage = (userData) => {
    console.log('userData스토리 :>> ', userData);
    sessionStorage.setItem('restaurant-user', JSON.stringify(userData));
};

export const removeStorage = () => {
    sessionStorage.removeItem('restaurant-user');
}