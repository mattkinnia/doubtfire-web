import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TeachingPeriod } from 'src/app/api/models/doubtfire-model';

@Component({
  selector: 'teaching-period-details-editor',
  templateUrl: 'teaching-period-details-editor.component.html',
  styleUrls: ['teaching-period-details-editor.component.scss'],
})
export class TeachingPeriodDetailsEditorComponent implements OnInit, OnDestroy {
  @Input() teachingperiod: TeachingPeriod;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
