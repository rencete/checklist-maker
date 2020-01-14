import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  items: string[] = ["a","b","c","d","e","f","g"];
  columns: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
