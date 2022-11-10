import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  name: string;
 
  character: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {

      this.name = params.name;

    });

    this.http.get(`https://breakingbadapi.com/api/characters?name=${this.name}`).subscribe((res) => {
          this.character = res;

    });
  }

}
