import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pt-pockets-list',
  templateUrl: 'pockets-list.component.html',
  styles: [],
})
export class PocketsListComponent implements OnInit {
  @Output() navigateToPocket = new EventEmitter();
  @Input() pockets: any;

  pocketDetails = (id: string) => this.navigateToPocket.emit(id);

  constructor() {}

  getProgress(id: string) {
    const pocket = this.pockets.find((el: any) => el.id === id);
    //@ts-ignore
    const progress = Math.ceil((pocket.funds / pocket.goal) * 100);
    return progress > 100 ? 100 : progress;
  }

  ngOnInit(): void {}
}
