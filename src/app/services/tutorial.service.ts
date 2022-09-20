import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../classes/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
    endpoint: string = 'http://192.168.1.160:8080/';

    constructor(private http: HttpClient){}

    getTutorials(): Observable<Array<Tutorial>>{
        return this.http.get<any>(this.endpoint + 'tutorials');
    }

    getTutorial(id: number): Observable<Tutorial>{
        return this.http.get<any>(this.endpoint + 'tutorials/' + id);
    }

    createTutorial(tutorial: Tutorial){
        this.http.post(this.endpoint + 'tutorials', tutorial).subscribe();
    }

    modifyTutorial(tutorial: Tutorial){
        this.http.put(this.endpoint + 'tutorials/' + tutorial.id, tutorial).subscribe();
    }

    deleteTutorial(id: number){
        this.http.delete(this.endpoint + 'tutorials/' + id).subscribe();
    }
}
