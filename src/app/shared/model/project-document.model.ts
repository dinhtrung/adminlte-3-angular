import { IProject } from 'app/shared/model/project.model';

export interface IProjectDocument {
  id?: string;
  name?: string;
  description?: any;
  state?: number;
  projects?: IProject[];
}

export class ProjectDocument implements IProjectDocument {
  constructor(public id?: string, public name?: string, public description?: any, public state?: number, public projects?: IProject[]) {}
}
