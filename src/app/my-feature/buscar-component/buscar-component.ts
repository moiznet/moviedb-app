import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 import { MatTableModule } from '@angular/material/table';
 import { MatTableDataSource } from '@angular/material/table';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
 
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

 
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
 
   
    import { Injectable } from '@angular/core';
    import { Observable } from 'rxjs';
  import { DataService } from '../../data-service'; // Import your service
    import { CommonModule } from '@angular/common'; // Example: if you need common directives like ngFor

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import the module

let ELEMENT_DATA: any[] = [
    {
     
    }
];



@Component({
  selector: 'app-buscar-component',
  imports: [   MatSlideToggleModule,MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    JsonPipe,
    HttpClientModule,
   MatProgressSpinnerModule,
     
  MatIconModule],
  templateUrl: './buscar-component.html',
  styleUrl: './buscar-component.css',
})


@Injectable({
       providedIn: 'root'  
    })

export class BuscarComponent implements OnInit {

 data: any[] = [];
result1:any[] = [];
isVisible: boolean = false;

  pageEvent: PageEvent = {
      pageIndex: 0,
      pageSize: 10,
      length: 0
  };

   length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [6];

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;
  
ngOnInit(): void {
        // this.dataService.getSomeData("hard",1).subscribe((data: any) => {
        //   let result = data.results;
          
        //   console.log(data);
        //   this.dataSource = new MatTableDataSource<any>(result);
        //   this.result1 = result;
          
        //   this.length = this.result1.length;
        //   this.pageSize = this.result1.length;
        //   this.pageIndex = data.page;
        
        // });
         
        setTimeout(() => {
                this.length = 0;
              });
      }
 
displayedColumns: string[] = ['original_title', 'poster_path','overview', 'release_date','vote_average']; // Define your column names

    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

     





   onPageChange(event: PageEvent) {
      // Handle page changes if you are implementing custom pagination logic
      // For MatTableDataSource, it's handled automatically after assigning `this.paginator`

this.isVisible = true;
console.log('Page event:', event);

let page = this.pageIndex +1;
this.applyFilter(this.searchTerm,page) ;

    }


change(){
    alert("update");

let page = this.pageIndex +1;
this.applyFilter(this.searchTerm,page) ;



  }





  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    
    
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


searchTerm: string = '';

changevalue(value:string){
console.log("bykeyup"+value);
this.searchTerm = value;

}
 

  applyFilter(value: string,pagina:number) {
    console.log("byfilter"+value);
    if(value == 'boton'){ value = this.searchTerm };
    console.log("buscando");
    this.searchTerm = value;
    // Implement your filtering logic here, e.g., filter a MatTableDataSource
    console.log('Filtering with:', this.searchTerm);
    this.dataService.getSomeData(this.searchTerm,pagina).subscribe((data: any) => {
         let result = data.results;
          
          console.log(data);
          this.dataSource = new MatTableDataSource<any>(result);
          this.result1 = result;
          
          this.length = data.total_results;
           this.pageSize = data.results.length;
          //this.pageIndex = data.page;
this.isVisible = false;
        });


       

  }

   constructor(private http: HttpClient,private dataService: DataService ) { 
    
  }

 
 


  clearSearch() {
    this.searchTerm = '';
    // Clear the input field and potentially re-apply the filter to show all data
   
  }

}
