import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
        date: '2019-11-8',
      },
      {
        amount: '5.00',
        account: 'Current',
        date: '2019-07-12',
      },
      {
        amount: '43.12',
        account: 'Shared',
        incoming: true,
        date: '2019-07-12',
      },
    ],
  },
  {
    id: '2b',
    goal: null,
    funds: 0,
    name: 'Savings',
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
        date: '2020-09-11',
      },
    ],
  },
];

@Component({
  selector: 'pt-individual-pocket',
  templateUrl: `./pockets-details.component.html`,
})
export class PocketsDetailsComponent implements OnInit {
  pockets: object[] = mockPockets;
  selectedPocket: any;
  pocket: any;
  loading: boolean = false;

  @Input() pocketId = '';

  @Output() goBack = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.pocket = this.pockets.filter((obj: any) => {
      return obj.id === this.pocketId;
    })[0];
  }

  goToPockets() {
    this.goBack.emit('');
  }

  getProgress(id: string) {
    //@ts-ignore
    let progress = Math.ceil((this.pocket.funds / this.pocket.goal) * 100);
    return progress > 100 ? 100 : progress;
  }

  groupTransactions() {
    if (!this.pocket.transactions) return false;
    return this.pocket.transactions.reduce((val: any, el: any) => {
      val[el.date] = (val[el.date] || []).concat(el);
      return val;
    }, {});
  }
}
