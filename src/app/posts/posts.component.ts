import { Component } from '@angular/core';
import { Post } from './shared/post.model';
import { View } from './shared/view.enum';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts: Post[] = [];

  currentView: View = View.SHOW_ALL;
  View = View;

  createPost(post): void {
    this.changeCurrentView(View.SHOW_ALL);
    this.posts.push(post);
  }

  changeCurrentView(view: View): void {
    this.currentView = view;
  }
}
