import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Post } from './post';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getAllPosts(): Observable<Array<Post[]>> {
    return this.http.get('/api/posts')
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPostDetail(id): Observable<Post[]> {
    return this.http.get('/api/posts/'+id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
