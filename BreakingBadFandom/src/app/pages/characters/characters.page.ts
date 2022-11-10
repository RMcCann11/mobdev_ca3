import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

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
      ['tabs/characters/characters'],
      { queryParams: { name: firstName + '+' + lastName } }
    );
  }

}
