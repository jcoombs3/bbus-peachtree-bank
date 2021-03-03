import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PocketsService } from '@peachtree/pt-openapi';

@Component({
  selector: 'pt-pockets',
  templateUrl: 'pockets.component.html',
  styles: [],
})
export class PocketsComponent implements OnInit {
  @Output() openPocketsForm = new EventEmitter();
  @Output() selectPocket = new EventEmitter();
  pockets$ = this.pocketsService.pocketsGet();
  constructor(private pocketsService: PocketsService) {}

  ngOnInit(): void {}

  onOpenPocketsForm() {
    this.openPocketsForm.emit();
  }

  navigateToPocket(id: string) {
    this.selectPocket.emit(id);
  }
}
