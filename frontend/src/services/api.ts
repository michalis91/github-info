import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUserData = (username: string) =>
    axios.get(`${API_URL}/user/${username}`);
export const getUserGists = (username: string) =>
    axios.get(`${API_URL}/user/${username}/gists`);
export const getUserOrgs = (username: string) =>
    axios.get(`${API_URL}/user/${username}/orgs`);
