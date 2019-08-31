import { NgModule } from "@angular/core";
import { HomeComponent } from './Home/Home.component';
import { WorkComponent } from './Work/Work.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[HomeComponent,WorkComponent,PageNotFoundComponent],
    exports:[HomeComponent,WorkComponent,PageNotFoundComponent],
    imports:[CommonModule]
})

export class ComponentsModule { 

}