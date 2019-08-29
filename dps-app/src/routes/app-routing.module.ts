import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/Home/Home.component';
import { WorkComponent } from 'src/components/Work/Work.component';
import { PageNotFoundComponent } from 'src/components/PageNotFound/PageNotFound.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'work', component: WorkComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
