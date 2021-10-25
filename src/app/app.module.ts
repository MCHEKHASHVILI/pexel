import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoService } from './services/video.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    VideoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
