import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-marker-details',
  templateUrl: './marker-details.component.html',
  styleUrls: ['./marker-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkerDetailsComponent implements OnInit {
  @Input() item: any;
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  Arr = Array;

  constructor() {}

  ngOnInit(): void {}
}
