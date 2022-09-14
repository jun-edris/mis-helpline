import axios from 'axios';

const baseURL =
	process.env.NODE_ENV === 'production'
		? process.env.REACT_APP_API_URL
		: 'http://localhost:3001/api';

const publicFetch = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export default publicFetch;
