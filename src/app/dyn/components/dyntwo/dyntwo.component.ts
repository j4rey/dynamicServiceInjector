import { Component, Injector, Input, OnInit } from '@angular/core';

import { ServiceTwo } from './../../../services/servicetwo.service';

@Component({
  selector: 'app-dyntwo',
  templateUrl: './dyntwo.component.html',
  styleUrls: ['./dyntwo.component.css'],
  providers: [ServiceTwo]
})
export class DyntwoComponent implements OnInit, iDynamicComponent {
  @Input() customProvider: any;
  customService: iCustomService;
  constructor() {
  }

  ngOnInit() {
    console.log(this.customProvider);
    const i = Injector.create(this.customProvider.provide);
      console.log('i');
      const thisService = i.get(this.customProvider.name);
      console.log('thisService.prototype.get()');
      console.log(thisService.prototype.get());
      this.customService = thisService.prototype;
  }

}
