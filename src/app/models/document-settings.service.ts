import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentSettingsService {
  public title: string = "";
  public editable: boolean = false;
  public showPoints: boolean = true;

  constructor() { }
}
