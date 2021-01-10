import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee, employeeObject } from './employee';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  loading: boolean = false;
  form: FormGroup;
  employees: Array<Employee> = new Array();

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe((model: any) => {
      model.data.map((object: employeeObject) => {
          let employee: Employee = new Employee(
            object.id, 
            object.first_name+" "+object.last_name, 
            object.email, 
            object.avatar
            );
            console.log(employee);
        return this.employees.push(employee);
      });
    })
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*')]),
      email: new FormControl('', [
        Validators.required, 
        Validators.email, 
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')
      ]),
      avatar: new FormControl('', [Validators.required])
    });
  }

  get id(){return this.form.get('id');}

  get name(){return this.form.get('name');}

  get email(){return this.form.get('email');}
  
  get avatar(){return this.form.get('avatar');}

  addEmployee(): void {
    const newEmployee: Employee = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      avatar: this.form.get('avatar').value
    };
    console.log(newEmployee);
    this.employees.push(newEmployee);
    this.initForm();
  }

  deleteEmployee(employeeId): void {
    this.employees.splice(employeeId, 1);
    this.initForm();
  }
}
