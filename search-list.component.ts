import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit{

  search_var: string="";

  ngOnInit(){}

  @Output() childToPar = new EventEmitter<string> ();
    

  searchData(event: Event){

    this.search_var=(event.target as HTMLInputElement).value;
   
   /*  event.preventDefault(); */
    console.log(this.search_var);

    this.childToPar.emit(this.search_var);
    
    
  }

}
