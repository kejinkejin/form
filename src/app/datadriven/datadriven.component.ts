import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import{HttpserviceService} from "../httpservice.service"
@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent implements OnInit {
  url:string = 'http://jsonplaceholder.typicode.com/users/1';
  myForm: FormGroup;
  constructor(formBuilder:FormBuilder, private httpServe:HttpserviceService) {
    this.myForm = formBuilder.group({
        'username':['', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
        'post':['', [Validators.required,Validators.minLength(10)]]
      
    });
  this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }


  ngOnInit() {
  }
  onSubmit() {
    console.log(this.myForm);
  }
  getdata(){
    this.httpServe.getdata(this.url).subscribe(
      response=>{
        let userdata = response.json();
        
        this.myForm.controls["username"].setValue(userdata.name);
        this.myForm.controls["email"].setValue(userdata.email);
        this.httpServe.getdata('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
          secondResponse =>{
            var post = secondResponse.json()[0];
            this.myForm.controls['post'].setValue(post.body);
          },
          secondError=>console.log(secondError)
        );
        error=>console.log(error)
      }
    );
  }//get data

}
