import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export const mockPockets = [
  {
    id: '1a',
    goal: 1500,
    goalDate: '2021-04-20',
    funds: 47.46,
    name: 'Travel',
    transactions: [
      {
        amount: '9.34',
        account: 'Saving',
        incoming: true,
        date: '2019-11-8'
      },
      {
        amount: '5.00',
        account: 'Current',
        date: '2019-07-12'
      },
      {
        amount: '43.12',
        account: 'Shared',
        incoming: true,
        date: '2019-07-12'
      }
    ]
  },
  {
    id: '2b',
    goal: null,
    funds: 0,
    name: 'Savings', 
    // img: 'https://img.icons8.com/ios/452/safe.png'
  },
  {
    id: '3c',
    goal: 500,
    goalDate: '2021-04-19',
    funds: 250,
    name: 'Transportation',
    transactions: [
      {
        amount: '250',
        account: 'Saving',
        incoming: true,
        date: '2020-09-11'
      }
    ]
  },
]

@Component({
  selector: 'zb-pockets',
  templateUrl: 'pockets.component.html',
  styles: [],
})
export class PocketsComponent implements OnInit {
  @Output() openPocketsForm = new EventEmitter();
  @Output() selectPocket = new EventEmitter();
  pockets = mockPockets
  constructor() {}

  ngOnInit(): void {}

  onOpenPocketsForm() {
    this.openPocketsForm.emit();
  }

  navigateToPocket (id: string) {
    this.selectPocket.emit(id)
  }
}
