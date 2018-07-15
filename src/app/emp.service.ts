import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  empdata=[{id:1,name:'ravi',address:'hinjewadi'},{id:2,name:'ramesh',address:'pimple saudagar'}]
  constructor() { }
  getEmpData()
  {

    return this.empdata
  }
}
