import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../classes/tutorial';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  newTutorial: Tutorial = new Tutorial();
  idToSearch: string = "";

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
  }
  
  createTutorial(){
    this.tutorialService.createTutorial(this.newTutorial);
    location.reload();
  }
}
