import {Component} from '@angular/core';

@Component({
    selector: 'app-component2',
    template:'<h4>This is component 2 created manually</h4> <h5>Framework:{{framework}}</h5>',
    styles:['h4{color:green}'],
})
export class Component2Component{
    framework='Angular';
}