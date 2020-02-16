export interface IDocumentSection {
  id?: string;
  title?: string;
  path?: string;
  summary?: string;
  content?: any;
  state?: number;
  weight?: number;
}

export class DocumentSection implements IDocumentSection {
  constructor(
    public id?: string,
    public title?: string,
    public path?: string,
    public summary?: string,
    public content?: any,
    public state?: number,
    public weight?: number
  ) {}
}
