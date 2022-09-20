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

  tutorialToShow: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService, private urlRoute: ActivatedRoute) {
      tutorialService.getTutorial(Number(urlRoute.snapshot.paramMap.get('id'))).subscribe(tutorialResponse=>{
        this.tutorialToShow = tutorialResponse;
      });
  }

  ngOnInit(): void {
  }

  sendModifyTutorial(){
    this.tutorialService.modifyTutorial(this.tutorialToShow);
    location.reload();
  }

  confirmDeleteTutorial(){
    this.tutorialService.deleteTutorial(this.tutorialToShow.id);
  }
}
