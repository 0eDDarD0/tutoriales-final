import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../classes/tutorial';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-lista-tutoriales',
  templateUrl: './lista-tutoriales.component.html',
  styleUrls: ['./lista-tutoriales.component.scss']
})
export class ListaTutorialesComponent implements OnInit {

  tutorialsList: Array<Tutorial> = [];

    constructor(private tutorialService: TutorialService) {
        tutorialService.getArrayTutorials().subscribe(tutorialsListResponse=>{
            this.tutorialsList = tutorialsListResponse;
        });
    }

  ngOnInit(): void {
  }
}
