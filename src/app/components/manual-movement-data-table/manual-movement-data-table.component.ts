import { Component, OnInit , Input } from '@angular/core';
import { ManualMovementOutput } from '../../interfaces/manualmovementoutput.interface';

@Component({
  selector: 'app-manual-movement-data-table',
  templateUrl: './manual-movement-data-table.component.html',
  styleUrls: ['./manual-movement-data-table.component.css']
})
export class ManualMovementDataTableComponent implements OnInit {

  colors = ['white','lightgray'];

  @Input() manualMovementsList: ManualMovementOutput[] = [];;

  constructor() { }

  ngOnInit(): void {
  }

  getTableLineColor()
  {
    return {
      backGroundColor: 'red'
    }

  }
}
