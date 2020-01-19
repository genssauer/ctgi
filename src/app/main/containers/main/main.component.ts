import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';

export interface Dessert {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  desserts: Dessert[] = [
    {id: 1, name: 'Frozen', description: 'Frozen yogurt'},
    {id: 2, name: 'Ice cream', description: 'Ice cream sandwich'},
    {id: 3, name: 'Eclair', description: 'Eclair'}
  ];

  sortedData: Dessert[];

  public result: string;

  public order = ['primeiro', 'segundo', 'terceiro'];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'description':
          return this.compare(a.description, b.description, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onClickProcess() {
    this.result = '';

    this.sortedData.map((res, index) => {
      this.result += (index + 1) === this.sortedData.length ?
        `O ${this.order[index]} item é ${res.name}.` :
        `O ${this.order[index]} item é ${res.name}, `;
    });
  }

}
