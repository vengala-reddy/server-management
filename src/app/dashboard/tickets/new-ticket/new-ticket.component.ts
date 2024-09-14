import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  private form = viewChild?.required<ElementRef<HTMLFormElement>>('form');
  public add = output<{title: string, text: string}>();
  ngOnInit() {
    console.log('onInit')
    console.log(this.form().nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log(this.form().nativeElement);
  }
  public onSubmit(title: string, ticketText: string) {
    this.add.emit({title, text: ticketText});
    this.form().nativeElement.reset();
  }
}
