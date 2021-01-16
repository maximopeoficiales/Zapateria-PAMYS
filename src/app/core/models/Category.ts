export class Category {
  // active?: number;
  // description?: string;
  // idCategory?: number;
  // name?: string;
  constructor(
    public idCategory: number = 0,
    public name?: string,
    public description?: string,
    public active: number = 1
  ) {}
}
