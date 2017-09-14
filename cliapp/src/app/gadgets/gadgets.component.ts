import { Component, OnInit } from '@angular/core';
import { GadgetsService } from './gadgets.service';
import { Http, Headers } from '@angular/http';
import { DataResponse } from './gadget.typedef'

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html'
})
export class GadgetsComponent implements OnInit {

  dataResponse: DataResponse[] = [];

  constructor(private gadgetsService: GadgetsService, private http: Http) { }

  ngOnInit() {
    this.gadgetsService.getInitialData().subscribe(data => {
      this.dataResponse = [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "http://placehold.it/600/92c952",
          "thumbnailUrl": "http://placehold.it/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "http://placehold.it/600/771796",
          "thumbnailUrl": "http://placehold.it/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "http://placehold.it/600/24f355",
          "thumbnailUrl": "http://placehold.it/150/24f355"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          "url": "http://placehold.it/600/d32776",
          "thumbnailUrl": "http://placehold.it/150/d32776"
        }]

        this.dataResponse = this.dataResponse.filter(each => each.id < 3);
    })
  }

}
