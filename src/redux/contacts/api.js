import request from '../../utils/requestConfig';

const api = {
    getList: ({ size }) => {
        return request({
            url: `api/?results=${size}&nat=us`,
        });
    },
};

export default api;
