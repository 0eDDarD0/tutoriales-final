import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-lista-tutoriales',
  templateUrl: './lista-tutoriales.component.html',
  styleUrls: ['./lista-tutoriales.component.scss']
})
export class ListaTutorialesComponent implements OnInit {

  tutorials: Array<Tutorial> = [];
  tutorial: Tutorial = new Tutorial();

    constructor(private tutorialService: TutorialService) {
        tutorialService.getTutoriales().subscribe(data=>{
            this.tutorials = data;
        });
    }

  ngOnInit(): void {
  }

  createTutorial(){
    this.tutorialService.postTutorial(this.tutorial);
  }

}
