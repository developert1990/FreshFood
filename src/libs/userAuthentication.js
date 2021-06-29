import axios from 'axios';

export const userAuthentication = async () => {
    return await axios.get(`${process.env.REACT_APP_EXPRESS_LOCAL}/api/user`, {
        withCredentials: true
    });
}