import Dexie, { Table } from 'dexie';
import { Project } from '../models/projects';
import { Resources, Notifications } from '../models/Resources';

export interface TodoList {
  id?: number;
  title: string;
}
export interface TodoItem {
  id?: number;
  todoListId: number;
  title: string;
  done?: boolean;
}

export class AppDB extends Dexie {
  projects!: Table<Project, number>;
  resources!: Table<Resources, number>;

  constructor() {
    super('myProjectDB');
    this.version(3).stores({
      projects: '++id',
      resources: '++id',
      notifications: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.projects.bulkAdd([
      {
        title: 'New Website',
        description: 'Build a new company website',
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-04-30'),
        progress: 25,
        resourcesId: [],
        notifications: [],
    
      },
      {
        title: 'Mobile App',
        description: 'Build a cross-platform mobile app',
        startDate: new Date('2023-03-15'),
        endDate: new Date('2023-08-30'),
        progress: 10,
        resourcesId: [],
        notifications: [],
      },
      {
        title: 'CRM System',
        description: 'Implement a new CRM system',
        startDate: new Date('2023-04-01'),
        endDate: new Date('2023-12-01'),
        progress: 50,
        resourcesId: [],
        notifications: [],
      },
    ]);
  }

  async getProjects(): Promise<Project[]> {
    return await db.projects.toArray();
  }


  async addProject(project: Project): Promise<number> {
    return await db.projects.add(project);
  }

  async deleteProject(id: number): Promise<void> {
    await db.projects.delete(id);
  }


  async getResources(): Promise<Resources[]> {
    return await db.resources.toArray();
  }

  async addResource(resource: Resources): Promise<number> {
    return await db.resources.add(resource);
  }

  async deleteResource(id: number): Promise<void> {
    await db.resources.delete(id);

    // Eliminar el recurso de todos los proyectos
    let projects = await db.projects.toArray();
    for(let project of projects){
      if(project.resourcesId.includes(id)){
        project.resourcesId = project.resourcesId.filter(idResource => idResource != id);
        await db.projects.put(project);
      }
    }
  }

  async isResourceInProject(idProject:number, idResource:number){
    let project = await db.projects.get(idProject);

    if(!project) return false;

    if(project.resourcesId.includes(idResource)){
      return true;
    }
    return false;
  }

  async addResourceToProject(idProject:number, idResource:number){
    let project = await db.projects.get(idProject);

    if(!project) return false;

    project.resourcesId.push(idResource);
    await db.projects.put(project);
    return true;
  }

  async getProjectResources(idProject:number){
    let project = await db.projects.get(idProject);

    if(!project) return [];

    let resources: Resources[] = [];
    for(let id of project.resourcesId){
      let resource = await db.resources.get(id);
      if(resource){
        resources.push(resource);
      }
    }
    return resources;
  }

  async deleteResourceFromProject(idProject:number, idResource:number){
    let project = await db.projects.get(idProject);

    if(!project) return false;

    project.resourcesId = project.resourcesId.filter(id => id != idResource);
    await db.projects.put(project);
    return true;
  }

  async addNotificationToProject(idProject:number, notification:Notifications){
    let project = await db.projects.get(idProject);

    if(!project) return false;

    project.notifications.push(notification);
    project.progress += notification.progression;
    await db.projects.put(project);
    return true;
  }

  async isProjectCompleted(idProject:number){
    let project = await db.projects.get(idProject);

    if(!project) return false;

    if(project.progress == 100){
      return true;
    }
    return false;
  }




}

export const db = new AppDB();
