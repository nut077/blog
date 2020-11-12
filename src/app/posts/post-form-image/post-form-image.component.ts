import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post-form-image',
  templateUrl: './post-form-image.component.html',
  styleUrls: ['./post-form-image.component.scss'],
})
export class PostFormImageComponent implements OnChanges {
  @Output() imageChange: EventEmitter<string> = new EventEmitter();
  @Input() image: string;

  uploadImage(event): void {
    const reader = new FileReader();
    const image = event.target.files[0];
    reader.readAsDataURL(image);
    reader.onload = () => {
      const result = reader.result as string;
      this.image = result;
      this.imageChange.emit(result);
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.image.currentValue) {
      this.image = '/assets/images/no-image.png';
    }
  }
}
