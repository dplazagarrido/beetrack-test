import apiBeetrack  from './api';

export const userServices = {

    getListOfUsers(page = 0, limit = 0) {
        return apiBeetrack.get(`/api/users?_page=${page}&_limit=${limit}`);
    },
    addUser(data) {
        return apiBeetrack.post(`/api/users`, data);
    },
    deleteUser(id) {
        return apiBeetrack.delete(`/api/users/${id}`);
    },
}

export default userServices;