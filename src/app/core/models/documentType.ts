import { DocumentType } from '../api/models/document-type';

export class documentTypeClass implements DocumentType {
  constructor(public idDcoumentType?: number, public doctype?: string) {}
}
