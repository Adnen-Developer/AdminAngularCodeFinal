import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Membre } from '../model/membre';
import { AdminService } from '../services/admin.service';
import { MembreService } from '../services/membre.service';


@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
  title: string;
  list: Membre[];
  constructor(private membreService: MembreService) { 
  }

  ngOnInit(): void {
    this.title = "test";

    this.membreService.getList().subscribe(
      (data:Membre[])=> this.list=data
    );
  }


  delete(_id: string): void {

     this.membreService.deleteMembre(_id).subscribe();

     this.membreService.getList().subscribe(
      (data:Membre[])=> this.list=data
    );

  }

  }




