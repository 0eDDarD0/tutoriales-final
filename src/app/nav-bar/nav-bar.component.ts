import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';
import { ActivatedRoute } from '@angular/router';
import { R3BoundTarget } from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService, ruta: ActivatedRoute) {}

  ngOnInit(): void {
  }
  
  createTutorial(){
    this.tutorialService.postTutorial(this.tutorial);
    location.reload();
  }
}
