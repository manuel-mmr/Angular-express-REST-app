/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PostsModule } from '../posts/posts.module';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => {
    const ROUTES = [
      {
        path: '**',
        redirectTo: '/'
      }
    ];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule,
        BrowserModule,
        PostsModule,
        RouterModule.forRoot(ROUTES)
      ],
      providers:[{provide: APP_BASE_HREF, useValue: '/'}]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Test APP'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Test APP');
  }));
});
