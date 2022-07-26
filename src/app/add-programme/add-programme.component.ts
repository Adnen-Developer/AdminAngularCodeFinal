import { Component, OnInit } from '@angular/core';
import { ProgrammeServiceService } from '../programme-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common'; 
import { Inject }  from '@angular/core';
declare const L:any;

@Component({
  selector: 'app-add-programme',
  templateUrl: './add-programme.component.html',
  styleUrls: ['./add-programme.component.css']
  
})
export class AddProgrammeComponent implements OnInit {
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
  constructor(private programmeService: ProgrammeServiceService,
    private router: Router,
    public fb: FormBuilder,
    @Inject(DOCUMENT) document: Document) { 
      this.programmeForm = this.fb.group({
        nomProg: ['',Validators.required],
        description: ['',Validators.required],
        saison: ['',Validators.required],
        regle: ['',Validators.required],
        image: ['',Validators.required],
       
        dateOuverture: ['',Validators.required],
        dateFermeture: ['',Validators.required],
        
        geolocation: [],
        
    
      })
    }
   programmeForm: FormGroup;
    
lat:any;
end:any;
imageData:any;

long:any;
public photoUrl:any;
  ngOnInit(): void {
    
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


  console.log(this.photoUrl);
  


  }


  getRoute(t:any)
  {
     this.end = t.getLatLng(); 
    console.log("in route",this.end);
  }
  submitForm() {
    console.log("in add",this.end.lat);

    const formData= new FormData();
  

    this.programmeForm.value.geolocation={
	
       "type":"point", "coordinates":[this.end.lng,this.end.lat]
      }
      console.log("in this"+this.photoUrl.value);
                        console.log(this.photoUrl.value.replace("C:\\fakepath\\", ""));//
                       var ph= this.photoUrl.value.replace("C:\\fakepath\\", "")
                      this.programmeForm.value.image=ph;
          console.log( this.programmeForm.value.image)
 
    this.programmeService.create(this.programmeForm.value).subscribe(res => {
      console.log('programme created!');
      this.router.navigateByUrl('/programme').then(success => console.log(`routing status: ${success}`));
    })

    }
    onFileSelect(input:any) {
      this.photoUrl =document.getElementById('file');
    
 
      }
    
    get f() {
      return this.programmeForm.controls;
    }
  
    onFileSelect1(event :Event){
      console.log("file selected");
      const testFile =(event.target as HTMLInputElement).files;
      if(testFile !=null){
        const file=testFile[0];
        this.programmeForm.patchValue({image:file});
        const allowedFileTypes=["image/png", "image/jpeg","image/jpg"];
        if(file && allowedFileTypes.includes(file.type)){
          const reader =new FileReader();
          reader.onload=()=>{
            this.imageData=reader.result as string;
          }
          reader.readAsDataURL(file);
        }
      }
    }
 
  
}
