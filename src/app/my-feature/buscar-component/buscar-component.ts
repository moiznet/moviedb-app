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



let ELEMENT_DATA: any[] = [
    {
        "adult": false,
        "backdrop_path": "/bfh9Z3Ghz4FOJAfLOAhmc3ccnHU.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 671,
        "original_language": "en",
        "original_title": "Harry Potter and the Philosopher's Stone",
        "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
        "popularity": 34.2589,
        "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        "release_date": "2001-11-16",
        "title": "Harry Potter and the Philosopher's Stone",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 28729
    },
    {
        "adult": false,
        "backdrop_path": "/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 672,
        "original_language": "en",
        "original_title": "Harry Potter and the Chamber of Secrets",
        "overview": "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
        "popularity": 24.4308,
        "poster_path": "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        "release_date": "2002-11-13",
        "title": "Harry Potter and the Chamber of Secrets",
        "video": false,
        "vote_average": 7.705,
        "vote_count": 22912
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
      }

displayedColumns: string[] = ['original_title', 'poster_path','overview', 'release_date','vote_average']; // Define your column names

    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

     



  pageEvent: PageEvent = {
      pageIndex: 0,
      pageSize: 10,
      length: 0
  };

   length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [6];

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

   onPageChange(event: PageEvent) {
      // Handle page changes if you are implementing custom pagination logic
      // For MatTableDataSource, it's handled automatically after assigning `this.paginator`

 alert("cambio"+this.pageIndex);
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


 

  applyFilter(value: string,pagina:number) {
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

        });


       

  }

   constructor(private http: HttpClient,private dataService: DataService ) { 
    
  }

 
 


  clearSearch() {
    this.searchTerm = '';
    // Clear the input field and potentially re-apply the filter to show all data
   
  }

}
