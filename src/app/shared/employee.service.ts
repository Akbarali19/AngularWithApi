import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Designation, Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myHttp:HttpClient) { }

  employeeUrl:string='';
  designationUrl:string='';
  listEmployee:Employee[]=[];
  listDesignation:Designation[]=[];
  employeeData:Employee=new Employee();

  saveEmployee()
  {
    return this.myHttp.post(this.employeeUrl,this.employeeData);
  }

  updateEmployee()
  {
    return this.myHttp.put(`${this.employeeUrl}/${this.employeeData}`,this.employeeData);
  }
  getEmployees():Observable<Employee[]>
  {
    return this.myHttp.get<Employee[]>(this.employeeUrl);
  }
  getDesignations():Observable<Designation[]>
  {
    return this.myHttp.get<Designation[]>(this.designationUrl);
  }
deleteEmployee(id:number)
{
  return this.myHttp.delete(`${this.employeeUrl}/${id}`);
}


}
