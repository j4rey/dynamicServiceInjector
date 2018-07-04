import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  OnInit,
  ReflectiveInjector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { DynoneComponent } from './components/dynone/dynone.component';
import { DyntwoComponent } from './components/dyntwo/dyntwo.component';
import { ServiceOne } from './../services/serviceone.service';
import { ServiceTwo } from './../services/servicetwo.service';

@Component({
  selector: 'app-dyn',
  templateUrl: './dyn.component.html',
  styleUrls: ['./dyn.component.css'],
  entryComponents: [
    DynoneComponent,
    DyntwoComponent
  ]
})
export class DynComponent implements OnChanges, OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() dyntype = 'one';

  componentList = {
    'one': DynoneComponent,
    'two': DyntwoComponent
  };

  serviceList = {
    'one': ServiceOne,
    'two': ServiceTwo
  };

  _component: any;
  constructor(private resolver: ComponentFactoryResolver) { }
  // ngOnChanges() {
  //   console.log('ngOnChanges');
  //   this.container.clear();

  //   // Inputs need to be in the following format to be resolved properly
  //   const inputProviders = [{provide: this.serviceList[this.dyntype], useValue: this.serviceList[this.dyntype]}];
  //   const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

  //   // We create an injector out of the data we want to pass down and this components injector
  //   const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.container.parentInjector);
  //   // const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this._injector);

  //   // We create a factory out of the component we want to create
  //   const factory = this.resolver.resolveComponentFactory(this.componentList[this.dyntype]);

  //   // this._component = this.container.createComponent(factory);
  //   // We create the component using the factory and the injector
  //   const component = factory.create(injector);
  //   console.log('s');
  //   const _service = injector.get(this.serviceList[this.dyntype]);
  //   console.log(_service);
  //   console.log(_service.prototype.get());

  //   // We insert the component into the dom container
  //   this.container.insert(component.hostView);

  //   // Destroy the previously created component
  //   if (this._component) {
  //     this._component.destroy();
  //   }

  //   this._component = component;

  // }


  ngOnChanges() {
    console.log('ngOnChanges 2');
    this.container.clear();
    // We create a factory out of the component we want to create
    const factory = this.resolver.resolveComponentFactory(this.componentList[this.dyntype]);
    this._component = this.container.createComponent(factory);

    const p = {
      name: this.serviceList[this.dyntype],
      provide: [{provide: this.serviceList[this.dyntype], useValue: this.serviceList[this.dyntype]}]
    };

    (<iDynamicComponent>this._component.instance).customProvider = p;
  }
  ngOnInit() {
  }

}
