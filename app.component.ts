import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jehovah_SearchList';

  childToPar: string="";
  searchedData=[];

  constructor(private wikipedia: WikipediaService){

  }

  search(term: string){

    this.childToPar = term;
    /* console.log(this.childToPar); */

    const result = this.wikipedia.onSearch(term).subscribe((res:any) => {
        this.searchedData=res.query.srcsearch;

        console.log(res);
        
    });
    /* console.log($event); */

  }

 

 

}
