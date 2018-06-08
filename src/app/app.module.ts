import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { StartTaskComponent } from './start-task/start-task.component';
import { EndTaskComponent } from './end-task/end-task.component';

// import { Angulartics2Module } from 'angulartics2';
// import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { GtagModule } from 'angular-gtag';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StartTaskComponent,
    EndTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('/EFlow/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    GtagModule.forRoot({ trackingId: 'UA-119885445-1', trackPageviews: true })
    // Angulartics2Module.forRoot([ Angulartics2GoogleTagManager ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
