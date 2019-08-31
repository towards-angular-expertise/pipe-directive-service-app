import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkService } from './Work.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [WorkService],
})
export class CustomServiceModule {}