import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<Post[]> = [];
  selectedPost: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  selectElement(element) {
    this.postsService.getPostDetail(element.id).subscribe(post => {
      this.selectedPost = post;
    });
  }

}
