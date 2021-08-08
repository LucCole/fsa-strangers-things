export const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
export const COHORT_NAME = '2104-ECE-RM-WEB-PT/';
export const API_URL = BASE_URL + COHORT_NAME;

export const callApi = async ({ url, method, token, body }) => {
  
    try {
        const options = {
            method: method ? method.toUpperCase() : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(API_URL + url, options);
        const data = await response.json();

        if (data.error) {
            throw data.error;
        }

        return data;
    } catch (error) {
        return error;
    }
};

export const fetchUserData = async (token) => {
    const { data } = await callApi({
        url: '/users/me',
        token,
    });

    return data;
};

export const fetchPosts = async (token) => {
    const {
        data: { posts },
    } = await callApi({
        url: '/posts',
        token,
    });

    return posts;
};