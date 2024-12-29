import { toast } from 'react-toastify';

export const API_URL = 'http://localhost:8080';

export const notify = (message, type) => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
};
