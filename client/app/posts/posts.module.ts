import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PostsService } from './posts.service';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    PostsComponent
  ],
  providers: [PostsService],
  exports: [PostsComponent]
})
export class PostsModule { }
