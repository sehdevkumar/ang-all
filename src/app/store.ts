import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createActionGroup,
  createFeature,
  createReducer,
  emptyProps,
  on,
  props,
  Store,
} from '@ngrx/store';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { CustomDirectives, LoadImageLazy } from './custom-directive';

// create the states
export type Posts = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type StoreType = {
  posts: Posts[] | null;
};

export const initialStoreState: StoreType = {
  posts: null,
};

// Create the Action groups

export const StoreActionGroup = createActionGroup({
  source: 'source must be a string literal type',
  events: {
    'fetch posts': emptyProps(),
    'posts-success': props<{ posts: Posts[] }>(),
  },
});

@Injectable()
export class StoreEffects {
  actions = inject(Actions);
  http = inject(HttpClient);

  $fetchPostsAction = createEffect(() => {
    return this.actions.pipe(
      ofType(StoreActionGroup?.fetchPosts),
      switchMap(() => {
        return this.http
          .get('https://jsonplaceholder.typicode.com/photos')
          .pipe(
            map((d) => {
              return StoreActionGroup['posts-success']({ posts: d as any });
            }),
            catchError((d) => of(d))
          );
      })
    );
  });
}

// Create Store Reducers

export const storeReducer = createReducer(
  initialStoreState,

  on(StoreActionGroup.fetchPosts, (state) => {
    return {
      ...state,
    };
  }),
  on(StoreActionGroup['posts-success'], (state, { posts }) => {
    return {
      ...state,
      posts: posts,
    };
  })
);

// Create Selectors

export const { selectPosts } = createFeature({
  name: 'store-reducer-featurekey',
  reducer: storeReducer,
});

// Store Component

@Component({
  selector: 'app-store-component',
  standalone: true,
  imports: [CommonModule, LoadImageLazy],
  template: `

  <div class='grid w-full h-full grid-cols-4 gap-4'>
    @for (item of dataObserable$ | async ; track $index) {
      
    <section class='flex flex-col'>
      <p>{{ item.title }}</p>
      <img
        class="w-full h-full opacity-1 object-cover rounded-md shadow-slate-700 shadow-md bg-red-200 opacity-0 transition-opacity duration-300"
        loadImageLazy
        [imageSrc]="item.url"
        [attr.alt]="item.title"
      />

    </section>
    
  }@empty {
    <button class='bg-blue-400 p-3 rounded-lg hover:bg-blue-600' (click)="onFetchData()">Load Posts</button>
  }
  </div>
  `,
})
export class StoreComponent implements OnInit {
  store = inject(Store);
  dataObserable$!: Observable<Posts[]>;

  ngOnInit(): void {

    this.store.select(selectPosts).subscribe((d) => {
      if (d) {
        this.dataObserable$ = new Observable((ob) => {
          ob.next(d.slice(0, 1000));
          ob.complete();
        });
      }
    });
  }

  onFetchData() {
    this.store.dispatch(StoreActionGroup.fetchPosts());
     
  }
}
