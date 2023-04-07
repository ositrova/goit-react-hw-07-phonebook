import axios from "axios";
// https://642fead9b289b1dec4bd0be4.mockapi.io/api/v1/:endpoint

axios.defaults.baseURL = 'https://642fead9b289b1dec4bd0be4.mockapi.io/api/v1/';

export async function getAllContacts() {
    try {
        const response = await axios.get('/contacts');
        if (response.status === 200) return response;
    } catch (error) {
        return error;
    }
};


export async function addContact(contact) {
    try {
        const response = await axios.post('/contacts', contact);
        if (response.status === 201) return response;
    } catch (error) {
        return error;
    }
};

export async function deleteContact(id) {
    try {
        const response = await axios.delete(`/contacts/${id}`);
        if (response.status === 200) return response;
    } catch (error) {
        return error;
    }
};
