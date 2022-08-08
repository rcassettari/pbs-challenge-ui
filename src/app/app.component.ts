import { Component } from '@angular/core';
import { ManualMovementOutput } from './interfaces/manualmovementoutput.interface';
import { ManualMovementInput } from './interfaces/manualmovementinput.interface';
import { ManualMovementService } from 'src/app/services/manual-movement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pbs-challenge-ui';

  manualMovementsMainList: ManualMovementOutput[] = [];

  constructor(private manualMovementService:ManualMovementService) {
  }

  ngOnInit(): void {
    this.getManualMovements();    
  }

  whenManualMovementAdded(manualMovementInput:ManualMovementInput)
  {
    this.manualMovementService.add(manualMovementInput)
      .then(  manualMovementInserted => {
        alert(`Manual Movement added !`);
        this.getManualMovements();        
      })

  }

  getManualMovements()
  {
    this.manualMovementService.getAll()
    .then(data => {
      this.manualMovementsMainList = data;
    })
  }

}
