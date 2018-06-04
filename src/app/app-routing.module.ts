import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartTaskComponent } from './start-task/start-task.component';
import { EndTaskComponent } from './end-task/end-task.component';

const routes: Routes = [{ path: 'start', component: StartTaskComponent },
{ path: 'end', component: EndTaskComponent },
{ path: '**', redirectTo: '/start' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
