import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-death-count-by-character',
  templateUrl: './death-count-by-character.page.html',
  styleUrls: ['./death-count-by-character.page.scss'],
})
export class DeathCountByCharacterPage implements OnInit {

  name : string;
 
  characterdeathCount: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {

      this.name = params.name;

    });

    //In terms of the queryParams property, please see the link provided in my README.md re the use of query parameters

    this.http.get(`https://breakingbadapi.com/api/death-count?name=${this.name}`).subscribe((res) => {
          
      this.characterdeathCount = res;
          
    });
    }
  

}
