import { authHeader } from '../_helpers';

const apiUrl = process.env.VUE_APP_API_URL;

export const userService = {
    login,
    logout,
    signup,
    forgetPassword
};

function login(email, password) {
    const requestOption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };
    
    return fetch(`${apiUrl}/login`, requestOption)
            .then(handleResponse)
            .then(response => {
                if (response.data.Token) {
                    var user = {
                        ID: response.data.ID,
                        Name: response.data.Name,
                        Email: response.data.Email
                    };
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', response.data.Token);
                }

                return response;
            });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('logout');
}

function signup(user) {
    const requestOption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };
    
    return fetch(`${apiUrl}/signup`, requestOption).then(handleResponse);
}

function forgetPassword(email) {
    const requestOption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    };
    
    return fetch(`${apiUrl}/forgetpassword`, requestOption).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok || (data && !data.success)) {
            // Unauthorized access
            if(response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}