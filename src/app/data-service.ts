import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';
import {  HttpHeaders } from '@angular/common/http';

 @Injectable({
      providedIn: 'root' // Makes the service available application-wide
    })



export class DataService {
  

   constructor(private http: HttpClient) {}

   getSomeData(querys:string,pages:number): Observable<any> {
    

    let query:string;
    if(querys == ""){query = "hard"}else{ query = querys }
    

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjVkMjIyYWVhNDAwODQxYWRlMWUyNTQyMjNkMjJlZCIsIm5iZiI6MTc2MTI0OTIzNS41MzEwMDAxLCJzdWIiOiI2OGZhODdkMzI3NjkxYWNhZTU0MTdiZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i5HokRpiJda6oUmHl-6Hlcm97cxdTt84Q_EaBQx9A7g'; // Replace with your actual token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${pages}`,{responseType:'json', headers} ); 
    


        //return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
      }


}
