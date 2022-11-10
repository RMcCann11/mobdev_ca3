import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes-by-character',
  templateUrl: './quotes-by-character.page.html',
  styleUrls: ['./quotes-by-character.page.scss'],
})
export class QuotesByCharacterPage implements OnInit {

  author : string;
 
  quotes: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {

      this.author = params.author;

    });

    this.http.get(`https://breakingbadapi.com/api/quote?author=${this.author}`).subscribe((res) => {
            
      this.quotes = res;
          
    });
  }

}
