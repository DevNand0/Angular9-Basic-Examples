import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You selected department with id is <strong>{{departmentId}}</strong>
    </h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        let id = parseInt(params.get('id'));
        this.departmentId = id;
      }
    );

    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  goPrevious(){
    let previousId = this.departmentId-1;
    this.router.navigate(['/departmentDetail',previousId]);
  }

  goNext(){
    let nextId = this.departmentId+1;
    this.router.navigate(['/departmentDetail',nextId]);
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
