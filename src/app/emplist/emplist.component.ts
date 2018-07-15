import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service'
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  providers:[EmpService]
})
export class EmplistComponent implements OnInit {
  empDetails=[]
  constructor(private emp :EmpService) { }

  ngOnInit() {
  }
getEmpList()
{

  this.empDetails =this.emp.getEmpData()
}
}
