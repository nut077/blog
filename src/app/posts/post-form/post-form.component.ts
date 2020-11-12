import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  post: Post;

  @Output() formSubmit: EventEmitter<Post> = new EventEmitter();

  constructor() {
    this.resetPost();
  }

  createPost(): void {
    this.formSubmit.emit(this.post);
    this.resetPost();
  }

  private resetPost(): void {
    this.post = new Post();
  }

  changeImage(image): void {
    this.post.image = image;
  }
}
