import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NytService } from 'src/app/services/nyt.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';



@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title: string = ''
  results
  detail: any

  constructor(
    private _nytService: NytService,
    private _route: ActivatedRoute,
    private _router: Router,
    private store: Store<any>) { }

  ngOnInit() {
    this.detail = this._route.snapshot.params
    let title = this._route.snapshot.paramMap.get('title')
    this.title = ` ${title}`
    console.log('this.title', title);
    
    
    this._route.params.subscribe(
      (params: Params) => {
        this._nytService.getMovie(title).subscribe(res => {
          this.results = res['results']         
        })
      }
    )
  }



 onBack(){
    this._router.navigate['/']
 }

}


