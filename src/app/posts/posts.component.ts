import { Component } from '@angular/core';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: Post[] = [];

  createPost(post): void {
    this.posts.push(post);
  }
}
