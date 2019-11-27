import { Component,Input } from "@angular/core";
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
 // posts= [
    //{title: "first post", Content:"this is my first post\'s content"},
   // {title: "second post", Content:"this is my second post\'s content"},
    //{title: "third post", Content:"this is my third post\'s content"}
  //];

  @Input() posts: Post[] = [];


  constructor(public postsService: PostsService){

  }
}


