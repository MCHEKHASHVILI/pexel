import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any;
  avatar_url: string;
  filteredVideos: any;

  constructor(protected v_service: VideoService) {
    this.avatar_url = "https://ui-avatars.com/api/?name=";
  }

  ngOnInit(): void {
    this.v_service.getVideos().subscribe(res => {
      this.videos = res.videos;
      this.filteredVideos = this.videos
      console.log(this.videos);
    });
  }
  getAvatar(name:string): string{
    return this.avatar_url + name.replace(/\s+/g, '+').toLowerCase();
  }
  filterVideos(searchKey:string){
    if(searchKey.length >= 1){
      this.filteredVideos = this.videos.filter((v:any) => {return v.user.name.toLowerCase().includes(searchKey.toLowerCase())});
    }else{
      this.filteredVideos = this.videos;
    }
  }


}

