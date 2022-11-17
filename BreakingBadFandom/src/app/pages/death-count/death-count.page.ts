import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-death-count',
  templateUrl: './death-count.page.html',
  styleUrls: ['./death-count.page.scss'],
})
export class DeathCountPage implements OnInit {

  characters: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
    console.log(this.characters);
  }

  openDetails(character){
    let split = character.name.split(' ');
    let firstName = split[0];
    let lastName = split[1];
    this.router.navigate(
      ['tabs/charactersForDeathCount/death-count'],
      { queryParams: { name: firstName + '+' + lastName } }
  );
  }

  //In terms of openDetails(), please see the link provided in my README.md re the use of query parameters


}
