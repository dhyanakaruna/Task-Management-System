import { toast } from 'react-toastify';

export const API_URL = 'http://localhost:8080';

export const notify = (message, type) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'info':
            toast.info(message);
            break;
        default:
            toast(message);
    }
};