import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeServiceService } from '../programme-service.service';

@Component({
  selector: 'app-list-programme',
  templateUrl: './list-programme.component.html',
  styleUrls: ['./list-programme.component.css']
})
export class ListProgrammeComponent implements OnInit {
  programmeList:any;
  searchText:any;

  constructor(private programmeService: ProgrammeServiceService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.programmeService.getprogrammes().subscribe((data:any) => this.programmeList = data);

  }
  

  delete(_id: string): void {

    this.programmeService.deleteProgramme(_id).subscribe();
    const item = this.programmeList.find((item :any) => item._id === _id);
    this.programmeList.splice(this.programmeList.indexOf(item));
    this.programmeService.getprogrammes().subscribe(
     (data:any)=> this.programmeList=data
   );
   console.log("here")

 }


}
