import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
    endpoint: string = 'http://192.168.1.160:8080/';

    constructor(private http: HttpClient){}

    getTutoriales(){
        return this.http.get<any>(this.endpoint + 'tutorials');
    }

    getTutorial(id: number){
        return this.http.get<any>(this.endpoint + 'tutorials/' + id);
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
