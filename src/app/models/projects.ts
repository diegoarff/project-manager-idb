
import { Notifications, Resources } from "./Resources";
export interface Project {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  resourcesId: number[];
  notifications: Notifications[];
}




export const projectTableColumns: string[] = [
  'id',
  'title',
  'description',
  'startDate',
  'endDate',
  'progress',
];


