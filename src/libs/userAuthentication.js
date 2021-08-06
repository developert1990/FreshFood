import axios from 'axios';
import { API } from '../config';

export const userAuthentication = async () => {
    return await axios.get(`${API}/api/user`, {
        withCredentials: true
    });
}