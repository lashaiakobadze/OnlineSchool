import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() closeAlert: any = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseAlert() {
    this.closeAlert.emit();
  }
}
