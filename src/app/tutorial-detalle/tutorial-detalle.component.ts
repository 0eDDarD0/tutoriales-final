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

  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService, private ruta: ActivatedRoute) {
      tutorialService.getTutorial(Number(ruta.snapshot.paramMap.get('id'))).subscribe(data=>{
        this.tutorial = data;
      });
  }

  ngOnInit(): void {
  }

  actualizarTutorial(){
    this.tutorialService.putTutorial(this.tutorial);
    location.reload();
  }

  eliminarTutorial(){
    this.tutorialService.deleteTutorial(this.tutorial.id);
  }
}
