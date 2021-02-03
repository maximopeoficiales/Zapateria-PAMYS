import { Category } from '../api/models/category';
export class CategoryClass implements Category {
  // active?: number;
  // description?: string;
  // idCategory?: number;
  // name?: string;
  constructor(
    public idCategory?: number,
    public name?: string,
    public description?: string,
    public active?: boolean
  ) {}
}
