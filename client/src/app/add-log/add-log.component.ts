import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { LogsService } from '../logs.service';
import { apiUrl } from '../api.constants';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLogComponent implements OnInit {
  @Input() clickedCords: any;
  @Output() cordsCleared: EventEmitter<boolean> = new EventEmitter<boolean>();
  logForm: FormGroup;
  constructor(private http: HttpClient, private logsService: LogsService) {
    this.logForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      rating: new FormControl(null, [Validators.min(0), Validators.max(10)]),
      comments: new FormControl(''),
      image: new FormControl(''),
      longitude: new FormControl(null, Validators.required),
      latitude: new FormControl(null, Validators.required),
      visitDate: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.logForm.controls.longitude.patchValue(this.clickedCords.lng);
    this.logForm.controls.latitude.patchValue(this.clickedCords.lat);
  }

  submit(): void {
    this.http
      .post(`${apiUrl}/api/logs`, this.logForm.value)
      .pipe(
        tap({
          next: () => {
            this.logsService.logsChanged.next(true);
            this.cordsCleared.next(true);
          },
        })
      )
      .toPromise();
  }
}
