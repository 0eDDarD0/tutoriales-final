import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../classes/tutorial';
import { TutorialService } from '../services/tutorial.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  tutorialToCreate: Tutorial = new Tutorial();
  idToSearch: string = "";

  constructor(private tutorialService: TutorialService, urlRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }
  
  sendCreateTutorial(){
    this.tutorialService.createTutorial(this.tutorialToCreate);
    location.reload();
  }
}
