import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { programme } from '../model/programme';
import { ProgrammeServiceService } from '../programme-service.service';
import { DatePipe } from '@angular/common'
declare const L:any;
@Component({
  selector: 'app-update-programme',
  templateUrl: './update-programme.component.html',
  styleUrls: ['./update-programme.component.css']
})
export class UpdateProgrammeComponent implements OnInit {
  programme: programme;
  _id: string;
  photoUrl:any;
  lat:any;
  today = new Date();
end:any;
long:any;
map:any;
markerIcon = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    // specify the path here
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
  })
};
  constructor( private programmeService : ProgrammeServiceService,
    private route: ActivatedRoute,
    public datepipe: DatePipe) { }

  ngOnInit(
   
  ): void {   
    var map = L.map("map").setView([  36.85984517196147, 10.3342466], 9);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

   // map.on("click", (e:any) => {
    //  console.log(e.latlng); // get the coordinates
      //L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon).addTo(map); // add the marker onclick
      
   // });
    var targetMarker = L.marker([36.85984517196147, 10.3342466], {
      draggable: true
  })
  .on("dragend", (e:any) => {
     let selectedPoint = e.target.getLatLng(); console.log(selectedPoint)
     this.getRoute(targetMarker);
  })
  .addTo(map); 

console.log("test")
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this._id = params["_id"];
     // this.adminCreateurId = "";
      console.log("this._id = " + this._id); // price
     // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
    }

    
  );


    this.programmeService.getProgrammeById(this._id).subscribe(
    (data:any)=> 
   { console.log(data);
    let Ov_date =this.datepipe.transform(data.dateOuverture, 'yyyy-MM-dd');

    let fer_date =this.datepipe.transform(data.dateFermeture, 'yyyy-MM-dd');
    data.dateOuverture=Ov_date
    data.dateFermeture=fer_date
    this.programme=data
    console.log("get",this.programme);
  }
  
  );





    


  var map = L.map("map").setView([  36.85984517196147, 10.3342466], 9);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

 // map.on("click", (e:any) => {
  //  console.log(e.latlng); // get the coordinates
    //L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon).addTo(map); // add the marker onclick
    
 // });
 var coord=this.programme.geolocation
 console.log(this.programme.geolocation)
  var targetMarker = L.marker([coord[1], coord[0]], {
    draggable: true
})
.on("dragend", (e:any) => {
   let selectedPoint = e.target.getLatLng(); console.log(selectedPoint)
   this.getRoute(targetMarker);
})
.addTo(map); 

console.log("test")
  this.route.queryParams
  .subscribe(params => {
    console.log(params); // { orderby: "price" }
    this._id = params["_id"];
   // this.adminCreateurId = "";
    console.log("this._id = " + this._id); // price
   // console.log("this.adminCreateurId = " + this.adminCreateurId); // price
  }

  
);


  console.log(this.programme);
  }
  getRoute(t:any)
  {
     this.end = t.getLatLng(); 
    console.log("in route",this.end);
  }
  onFileSelect(input:any) {
    this.photoUrl =document.getElementById('file');
  

    }

  updateProgramme(){
    //
 //   this.book.nbrLike=0;
 console.log("update"+this.programme)
 console.log('update')
 var ph= this.photoUrl.value.replace("C:\\fakepath\\", "")
 this.programme.image=ph
 console.log(this.programme.image)
 console.log("update"+this.programme)
 this.programme.geolocation={
	
  "type":"point", "coordinates":[this.end.lng,this.end.lat]
 }
 console.log("updateb4",this.programme);
    this.programmeService.updateProgramme(this.programme).subscribe();
    //notify

  }

  isExpirationExpired() {
  
    // or without using moment.js:
    console.log("test de date", this.programme.dateOuverture < new Date())
    return this.programme.dateOuverture < new Date();
    
  }

}
