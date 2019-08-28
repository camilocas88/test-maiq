import { Component, OnInit } from '@angular/core';
import { NytService } from 'src/app/services/nyt.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Link } from "../../models/link";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any[] = []


  constructor(private _nytService: NytService, private _route: ActivatedRoute, private _router: Router,) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies(){
    this._nytService.getMoviesService().subscribe(res => {
      this.results = res['results'];
      console.log('array ', this.results);
    })
  }

 

}
