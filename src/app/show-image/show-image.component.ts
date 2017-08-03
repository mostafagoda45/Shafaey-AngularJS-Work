import { Component, Directive, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent {
  

  public name: string;
  public fullpath: string;
 
  constructor(private route: ActivatedRoute) { 

    this.name = this.route.snapshot.params['name'];
    
    this.fullpath = "../../assets/images/" + this.name +".jpg";
  }

  @HostListener('onload') onLoad(){
    alert(this.name)
  }

}

