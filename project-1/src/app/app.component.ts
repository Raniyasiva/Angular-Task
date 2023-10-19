import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-1';
  name:string='Enter the name';
  id:number=1;  
  fname:string='Raniya';
  gender:string="Female";  
  designation:string="Angular  Developer";  
  location:string="Chennai";   
  imageHeight:number=100;  
  imageWidth:number=100;  
  imagePath:string="./../assets/image/HD-wallpaper-nature.jpg";  
  columnSpan:number=3;  
  text:string='world';
  Onclick(){
    console.log('submitted');   
  }
  keyUp(){
    console.log("key pressed");  
  }
  hover(){
    console.log("Mouse is hovered"); 
  }
  out(){
    console.log("Mouse is outted"); 
  }
  blur() {
    console.log('Input blurred');
  }
  focus(){
    console.log("Mail is focussed");   
  }
  click(){
    console.log("button is clicked");
    
  }
}
