import axios from 'axios';

import { HabitInfo, HabitsUpdate } from '../types';

const API_BASE_URL = 'http://localhost:8080/habit';

export async function getAllHabits() {
	return await axios.get(API_BASE_URL);
}

export async function getOneHabits(id: number) {
	return await axios.get(API_BASE_URL + id);
}

export async function createHabits(data: HabitInfo) {
	return await axios.post(API_BASE_URL, data);
}

export async function updateHabits(data: HabitsUpdate) {
	return await axios.patch(API_BASE_URL, data);
}
