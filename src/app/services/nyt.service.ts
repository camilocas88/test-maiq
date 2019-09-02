import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NytService {
  constructor(
    private http: HttpClient
  ) { }

  /*
    @function: Get a products suggestion
    @returns: Product as JSON
  */ 
  getMoviesService(section: string, order: string = 'by-publication-date') {
    let params: HttpParams = new HttpParams();
    params = params.set('api-key', environment.apikey);
    return this.http.get(`${environment.apiUrl}/reviews/${section}.json?=${order}`, { params });
  } 
  
   /*
    @function: Retrieves  products based on a DATA
    @returns: Product as JSON
  */
  getMovie(data){
    let params: HttpParams = new HttpParams();
    params = params.set('api-key', environment.apikey);
    return this.http.get(`${environment.apiUrl}/reviews/search.json?query=`+ data, { params });
  }
} 



