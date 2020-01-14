import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCopies]'
})
export class CopiesDirective implements OnInit{
  private _copies = 0;
  private hasView = false;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  @Input() set appCopies(copies: number) {
    if(this._copies != copies) {
      this._copies = copies;
    }
    this.updateView();
  }

  ngOnInit() {
    this.updateView();
  }

  private updateView() {
    if(this.hasView) {
      this.container.clear();
      this.hasView = false;
    }
    for(let i: number = 0; i < this._copies; i++) {
      this.hasView = true;
      this.container.createEmbeddedView(this.template);
    }
  }
}
