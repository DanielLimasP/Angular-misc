import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">This is nothing but a label</p>
    <button class="btn btn-primary m-1" (click)="size = size + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary m-1" (click)="size = size - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  size: number = 20;

  constructor() {}

  ngOnInit(): void {}
}
