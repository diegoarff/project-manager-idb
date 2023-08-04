export interface Resources {
    name: string;
    lastName: string;
    role: string;
  }
  
  export interface Notifications {
    resourceId: number;
    date: Date;
    progression: number;
    message: string;
    hoursSpent: number;
  }

export const resourceTableColumns = ['name', 'lastName', 'role'];

export const notificationTableColumns = ['resourceId', 'date', 'progression', 'message'];