import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
    endpoint: string = '192.168.1.160:8080/';

    constructor(private http: HttpClient){}

    getTutoriales(){
        let tutoriales: Array<Tutorial> = [];
        this.http.get<any>(this.endpoint + 'tutorials').subscribe(data=>{
            tutoriales = data;
        });

        return tutoriales;
    }

    getTutorial(id: number){
        let tutorial: Tutorial = new Tutorial();
        this.http.get<any>(this.endpoint + 'tutorials/' + id).subscribe(data=>{
            tutorial = data;
        });

        return tutorial;
    }

    postTutorial(tutorial: Tutorial){
        this.http.post(this.endpoint + 'tutorials', tutorial).subscribe(data=>{});
    }

    putTutorial(tutorial: Tutorial){
        this.http.put(this.endpoint + 'tutorials/' + tutorial.id, tutorial).subscribe(data=>{});
    }

    deleteTutorial(id: number){
        this.http.delete(this.endpoint + 'tutorials/' + id).subscribe(data=>{});
    }
}
