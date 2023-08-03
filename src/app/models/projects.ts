export interface Project {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  progress: number;
}

export const projectTableColumns: string[] = [
  'id',
  'title',
  'description',
  'startDate',
  'endDate',
  'progress',
];

//TODO: Mock data, to be replaced with IndexedDBService call
//TODO: Transform dates into manageable formats, so that it can be used by chart.js
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'New Website',
    description: 'Build a new company website',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-04-30'),
    progress: 25,
  },
  {
    id: 2,
    title: 'Mobile App',
    description: 'Build a cross-platform mobile app',
    startDate: new Date('2023-03-15'),
    endDate: new Date('2023-08-30'),
    progress: 10,
  },
  {
    id: 3,
    title: 'CRM System',
    description: 'Implement a new CRM system',
    startDate: new Date('2023-04-01'),
    endDate: new Date('2023-12-01'),
    progress: 50,
  },
];
