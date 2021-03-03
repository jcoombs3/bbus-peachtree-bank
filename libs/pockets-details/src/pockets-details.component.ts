import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PocketsService } from '@peachtree/pt-openapi';

import { Pocket } from '@peachtree/pt-openapi/';
import { Observable } from 'rxjs';

@Component({
  selector: 'pt-individual-pocket',
  templateUrl: `./pockets-details.component.html`,
})
export class PocketsDetailsComponent implements OnInit {
  @Input() pocketId = '';
  @Output() goBack = new EventEmitter();

  pocket$!: Observable<Pocket>;
  loading = false;

  constructor(private pocketsService: PocketsService) {}

  ngOnInit(): void {
    this.pocket$ = this.pocketsService.pocketsIdGet(this.pocketId);
  }

  goToPockets() {
    this.goBack.emit('');
  }

  getProgress(pocket: Pocket) {
    if (pocket.funds?.amount && pocket.goal?.amount) {
      const progress = Math.ceil((pocket.funds.amount / pocket.goal.amount) * 100);
      console.log(progress);
      return progress > 100 ? 100 : progress;
    } else {
      return 0;
    }
  }

  groupTransactions(pocket: Pocket) {
    if (pocket.transactions)
      return pocket.transactions.reduce((val: any, el: any) => {
        val[el.date] = (val[el.date] || []).concat(el);
        return val;
      }, {});
  }
}
