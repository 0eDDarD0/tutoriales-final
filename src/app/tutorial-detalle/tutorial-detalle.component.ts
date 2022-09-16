import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-detalle',
  templateUrl: './tutorial-detalle.component.html',
  styleUrls: ['./tutorial-detalle.component.scss'],
  providers: [TutorialService]
})
export class TutorialDetalleComponent implements OnInit {

  tutorial: Tutorial;

  constructor(private tutorialService: TutorialService) {
    this.tutorial = tutorialService.getTutorial(this.tutorial.id);
  }

  ngOnInit(): void {
  }

  actualizarTutorial(){
    this.tutorialService.putTutorial(this.tutorial);
  }

}
