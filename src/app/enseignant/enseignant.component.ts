import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './enseignant.component.html',
  styleUrl: './enseignant.component.css'
})
export class EnseignantComponent implements OnInit,AfterViewInit  {

  public students:any;
  public dataSource: any=[];
  public displayedColumns = ["id", "nom", "prenom","Email","Last Connexion","action"];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private router:Router,private http: HttpClient) {
   
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    

    this.http.get<any>('http://127.0.0.1:8080/Enseignant/list').subscribe({
      next: (data) => {
        this.students = data; // Assuming your API response is an array of student objects
        this.dataSource = new MatTableDataSource(this.students);
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.error('Error fetching students:', error);
      }
    });
  }
  

  filterStudents($event: Event) {
    let value=(event?.target as HTMLInputElement).value;
    this.dataSource.filter=value;
    
  }


}