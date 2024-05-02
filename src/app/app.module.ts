import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { MatDivider } from '@angular/material/divider';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    EtudiantComponent,
    EnseignantComponent,
    DashboardComponent,
    LoginComponent,
    AddEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,MatIconModule,MatListModule,MatButtonModule,MatMenuModule,
    MatDrawerContainer,MatDivider,MatToolbarModule,CommonModule,MatSidenavModule,MatTableModule,
    MatCardModule,MatFormFieldModule,MatPaginatorModule,HttpClientModule,MatDialogModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
