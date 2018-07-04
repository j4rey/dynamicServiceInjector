import { Component, Injector, Input, OnInit } from '@angular/core';

import { ServiceOne } from '../../../services/serviceone.service';

@Component({
  selector: 'app-dynone',
  templateUrl: './dynone.component.html',
  styleUrls: ['./dynone.component.css'],
  providers: [ServiceOne]
})
export class DynoneComponent implements OnInit, iDynamicComponent {
  @Input() customProvider: any;
  customService: iCustomService;
  constructor() {
  }

  ngOnInit() {
    console.log(this.customProvider);

    const i = Injector.create(this.customProvider.provide);
      // const a = i.get(A);
      console.log('i');
      const thisService = i.get(this.customProvider.name);
      console.log('thisService.prototype.get()');
      console.log(thisService.prototype.get());
      this.customService = thisService.prototype;
  }

}
