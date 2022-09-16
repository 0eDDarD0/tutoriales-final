import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

<<<<<<< HEAD
  constructor(private tutorialService: TutorialService) {
  
=======
  constructor(private tutorialService: TutorialService, private ruta: ActivatedRoute) {
      this.tutorial = tutorialService.getTutorial(ruta.snapshot.paramMap.get('id'));
>>>>>>> 610a3d82c9b83ae0aa67e3a2723e7544a176947e
  }

  ngOnInit(): void {
  }

  actualizarTutorial(){
    this.tutorialService.putTutorial(this.tutorial);
  }

}
