
export class Productsnew {
  constructor(
    public idProduct?: number,
    public dateCreated?:string,
    public description? :string,
    public idCategory?:number,
    public idVendor?:number,
    public name? : string,
    public price?: number,    
    public  salePrice?:number ,
    public stock?:number,
    public thumbnailUrl?:string
  ){}

}
