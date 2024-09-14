import { afterRender, afterNextRender,Component, ElementRef, input, inject, ViewEncapsulation, contentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  public label = input.required<string>();
  private el = inject(ElementRef);
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // afterRender(() => {
    //   console.log('afterRender');
    // });
    // afterNextRender(() => {
    //   console.log('afterNextRender');
    // });
  }

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
