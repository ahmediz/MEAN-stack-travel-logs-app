import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  logsChanged = new BehaviorSubject<boolean>(true);
  constructor() {}
}
