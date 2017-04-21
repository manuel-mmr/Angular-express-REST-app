import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [ PostsService ],
      imports: [
        CommonModule,
        HttpModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(component).toBeTruthy();
  });
});
