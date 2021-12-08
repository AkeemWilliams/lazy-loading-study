import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load-elements',
  templateUrl: './lazy-load-elements.component.html',
  styleUrls: ['./lazy-load-elements.component.scss']
})
export class LazyLoadElementsComponent implements OnInit,AfterViewInit {
  observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

  }
  
 ngAfterViewInit():void{
  const targets = this.el.nativeElement.querySelectorAll('img');

  this.observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){

        const img = entry.target;
        const src = img.getAttribute('data-lazy') || "";
        
        img.setAttribute('src', src);
        img.classList.add('fade');

        obs.unobserve(entry.target)
      }
    })

  },{
  threshold:0
});
targets.forEach((target: Element) => {
  this.observer.observe(target)})
 }

}
