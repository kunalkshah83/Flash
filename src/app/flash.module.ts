import {NgModule} from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

//Components
import {FlashComponent} from './flash.component';
import {FlashDetailComponent} from './flash.detail.component';

//Decorator
@NgModule({
  
    imports:[
        BrowserModule
    ],

    //all components & pipe
    declarations:[
        FlashComponent,
        FlashDetailComponent
    ],

    //first component
    bootstrap:[
            FlashComponent
    ],

    //all the services
    providers:[

    ]
})


export class FlashModule{

}