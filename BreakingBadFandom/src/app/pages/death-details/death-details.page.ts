import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-death-details',
  templateUrl: './death-details.page.html',
  styleUrls: ['./death-details.page.scss'],
})
export class DeathDetailsPage implements OnInit {

  name : string;
 
  deathDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {

      this.name = params.name;

    });

    //In terms of the queryParams property, please see the link provided in my README.md re the use of query parameters

    this.http.get(`https://breakingbadapi.com/api/death?name=${this.name}`).subscribe((res) => {
          
      this.deathDetails = res;
          
    });
  }

 

}
