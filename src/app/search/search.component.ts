import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onKey(event:any) {
    this.changed.emit(event.target.value);
  }

}
