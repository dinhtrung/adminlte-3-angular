export interface IProject {
  id?: string;
  name?: string;
  description?: any;
  gitlabUrl?: string;
  state?: number;
  tags?: string;
}

export class Project implements IProject {
  constructor(
    public id?: string,
    public name?: string,
    public description?: any,
    public gitlabUrl?: string,
    public state?: number,
    public tags?: string
  ) {}
}
