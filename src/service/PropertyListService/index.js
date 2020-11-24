import axios from 'axios';
import { rentalnow_api_url } from '../../config';

export const getProptyList = async () => {
    try {
        const result = await axios.get(`${rentalnow_api_url}/houses?offset=1`);
        return result.data;
    } catch (error) {
        throw new Error(error.message);
    }
}