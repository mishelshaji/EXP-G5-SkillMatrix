import { Navigate, useNavigate } from 'react-router-dom';
import httpClient from './httpClient';

const RequestInterceptor = (navigation) => {
    const navigate = useNavigate();
    httpClient.interceptors.request.use(
        function (request) {
            const token = localStorage.getItem('authToken');
            request.headers.Authorization = `Bearer ${token}`;
            request.headers.set('Authorization', `Bearer ${token}`);
            console.log(request);
            return request;
        },
        function (error) {
            if (!error.response) {
                return Promise.reject(error);
            }

            if (error.response.status === 401) {
                navigate('/');
            }
        }
    );

    httpClient.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (!error.response) {
                return Promise.reject(error);
            }

            if (error.response.status === 401) {
                navigate('/');
            }
        }
    );
};

export default RequestInterceptor;
