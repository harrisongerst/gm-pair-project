export interface HabitInfo {
	habit_name: string;
	icon: string;
	start_date: string;
	end_date: string;
	description: string;
	completeAmount: number;
	count?: number;
	id?: number;
}
export interface HabitsUpdate {
	id: number;
	count: number;
}