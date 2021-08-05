import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees$!: Observable<Employee[]>

  constructor() { }

  ngOnInit(): void {
    this.employees$ = of(employees);
  }

}

const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    email: 'johndoe@gmail.com',
    phoneNumber: '08095687112',
    jobTitle: 'Fronted Developer',
    employeeCode: '11221-112333',
    imageUrl: `./../../../assets/profile/john_doe.jpg`,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  },
  {
    id: 2,
    name: "Elon Musk",
    email: 'elonmusk@gmail.com',
    phoneNumber: '08095687112',
    jobTitle: 'CTO',
    employeeCode: '11221-112333',
    imageUrl: `./../../../assets/profile/elon_musk.jpg`,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  },

  {
    id: 3,
    name: "Bill Gates",
    email: 'billgates@gmail.com',
    phoneNumber: '08095687112',
    jobTitle: 'Business Manager',
    employeeCode: '11221-112333',
    imageUrl: `./../../../assets/profile/bill_gates.jpg`,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  },

  {
    id: 4,
    name: "Mark Zuckerberg",
    email: 'markzuckerberg@gmail.com',
    phoneNumber: '08095687112',
    jobTitle: 'Human Resourse',
    employeeCode: '11221-112333',
    imageUrl: `./../../../assets/profile/mark_zuckerberg.jpg`,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  }
]
