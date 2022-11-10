import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
    
  }

  openDetails(character){
    let split = character.name.split(' ');
    let firstName = split[0];
    let lastName = split[1];
    this.router.navigate(
      ['tabs/charactersForQuotes/quote'],
      { queryParams: { author: firstName + '+' + lastName } }
    );
  }

}
