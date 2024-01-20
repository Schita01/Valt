import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionsComponent } from './pages/Connections/connections.component';
import {rewardsComponent} from "./pages/rewards/rewards.component";
import {SharedModule} from "./pages/shared/shared.module";
import {HomeComponent} from "./pages/home/home.component";
import { AboutComponent } from './pages/About/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent,
    AboutComponent,
    rewardsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
