import axios from "axios";
import { baseUrl } from "../../../../Client/StaffList/service/getStaff.mjs";


export const getCreate = (staffData) => {
    return createProfessional(staffData);
}

const createProfessional = async(staffData) => {
    const response = await axios.post(baseUrl + 'add' , staffData);
    const data = response.data;
    return data
}

export const getUpdate = (professionalId, staffData) => {
    return updateProfessional(professionalId, staffData);
}

const updateProfessional= async(professionalId, staffData) => {
    const response = await axios.patch(baseUrl + `update/${professionalId}`, staffData);
    const data = response.data;
    return data
}

export const getDelete =(professionalId) => {
    return deleteProfessional(professionalId);
}
const deleteProfessional = async(professionalId) => {
    const response = await axios.delete(baseUrl + `delete/${professionalId}`);
    const data = response.data;
    return data
}