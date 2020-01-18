import { Injectable } from '@angular/core';
import { SectionTypes } from './section-types';

@Injectable({
  providedIn: 'root'
})
export class DocumentModelService {
  public title: string = "";
  public editable: boolean = false;
  public showPoints: boolean = true;

  public sections: SectionTypes[] = [];

  constructor() { }
}
