import axios from 'axios';

export const baseUrl = 'http://localhost:3010/staff/';

export const getAll = () => {
    return getStaff();
}

const getStaff = async() => {
    const response = await axios.get(baseUrl+'all');
    const data = response.data
    return data;
}