import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AssetsResolver, AssetsResolverConfig, AssetsService } from '@backbase/foundation-ang/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'zb-pockets-list',
  templateUrl: 'pockets-list.component.html',
  styles: [],
})
export class PocketsListComponent implements OnInit {
  
  @Output() navigateToPocket = new EventEmitter();
  @Input() pockets: any

  pocketDetails = (id: string) => this.navigateToPocket.emit(id)

  constructor(private assetsService: AssetsService) {}

  getProgress (id: string) {
    let pocket = this.pockets.find((el: any) => el.id == id)
    //@ts-ignore
    let progress = Math.ceil(pocket.funds / pocket.goal * 100)
    return progress > 100 ? 100 : progress
  }


  ngOnInit(): void {

  }

}
