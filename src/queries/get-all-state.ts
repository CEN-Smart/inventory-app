import axios from 'axios';

import config from '@/config.json';

// get all states in Nigerian

const axiosInstance = axios.create({
	baseURL: config.API_STATE,
});

export async function getAllStates() {
	const { data } = await axiosInstance.get('/fetch');
	return data;
}

// https://nga-states-lga.onrender.com/?state=Anambra

interface QueryKey {
	queryKey: [
		{
			queryIdentifier: string;
			state: string;
		}
	];
}

export async function getAllLga({ queryKey }: QueryKey) {
	const { state } = queryKey[0];
	const { data } = await axiosInstance.get(`/?state=${state}`);
	return data;
}
