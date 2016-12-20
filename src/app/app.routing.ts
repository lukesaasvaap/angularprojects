import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {ViewComponent} from './view/view.component';
import {DataDrivenComponent} from './add/datadriven.component';

export const APP_ROUTES: Routes = [
    {path: 'add',component: AddComponent},
       {path: 'datadriven',component: DataDrivenComponent},
    {path: 'view',component: ViewComponent},
    {path: '',component: HomeComponent}
    ];
//  {path: 'add/:id',component: AddComponent}, used for segment the url path
    //export const routing = RouterModule.forRoot(APP_ROUTES);