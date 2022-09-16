import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
  }
  
  createTutorial(){
    this.tutorialService.postTutorial(this.tutorial);
  }
}
