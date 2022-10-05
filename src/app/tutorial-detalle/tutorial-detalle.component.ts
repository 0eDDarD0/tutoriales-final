import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from '../classes/tutorial';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-tutorial-detalle',
  templateUrl: './tutorial-detalle.component.html',
  styleUrls: ['./tutorial-detalle.component.scss'],
  providers: [TutorialService]
})
export class TutorialDetalleComponent implements OnInit {

  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService, private routes: ActivatedRoute) {
      tutorialService.getTutorial(Number(routes.snapshot.paramMap.get('id'))).subscribe(tutorialResponse=>{
        this.tutorial = tutorialResponse;
      });
  }

  ngOnInit(): void {
  }

  modifyTutorial(){
    this.tutorialService.modifyTutorial(this.tutorial);
    location.reload();
  }

  deleteTutorial(){
    this.tutorialService.deleteTutorial(this.tutorial.id);
  }
}
