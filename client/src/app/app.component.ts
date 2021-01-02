import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { MapMouseEvent } from 'mapbox-gl';
import { apiUrl } from './api.constants';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  logs$: Observable<any[]> = of([]);
  title = 'Travel Logs App';
  isAdding = false;
  selectedMarker = null;
  clickedCordinates: any;

  constructor(private http: HttpClient, private logsService: LogsService) {}

  ngOnInit(): void {
    this.logs$ = this.logsService.logsChanged.pipe(
      switchMap(() => {
        return this.http
          .get(`${apiUrl}/api/logs`)
          .pipe(map((logs: any) => logs));
      })
    );
  }

  trackBy(item: any): string {
    return item._id;
  }

  showDetails(id: any): void {
    this.selectedMarker = id;
    this.clickedCordinates = null;
  }

  addLog(event: MapMouseEvent): void {
    this.selectedMarker = null;
    this.logsService.logsChanged.next(true);
    if (event.lngLat && !this.selectedMarker) {
      this.clickedCordinates = { ...event.lngLat };
    }
  }
}
