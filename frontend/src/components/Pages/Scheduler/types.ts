import { Dayjs } from 'dayjs';

export const taskTypes = ['Code', 'Research', 'Chore', 'Message', 'Marketing', 'Learn', 'Design', 'Sales'] as const;
export const priorityLevels = ['Low', 'Medium', 'High'] as const;

export type TaskType = typeof taskTypes[number];
export type PriorityLevel = typeof priorityLevels[number];

export interface Event {
    id: number;
    duration: number;
    priority: PriorityLevel;
    name: string;
    type: TaskType;
    due_date: Dayjs;
}