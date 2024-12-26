import { inject, Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createActionGroup, createReducer, emptyProps, on, props } from '@ngrx/store';
import { mergeMap, of } from 'rxjs';

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
    'posts-success': props<{ posts: Posts[]}>(),
  },
});

@Injectable({
  providedIn: 'root',
})
export class StoreEffects {
  actions = inject(Actions);

  $fetchPostsAction = this.actions.pipe(
    ofType(StoreActionGroup.fetchPosts),
    mergeMap((d) => {
      console.log('This action has fired...');

      return of(d);
    })
  );
}



// Create Store Reducers 

export const storeReducer = createReducer(
  initialStoreState,

  on(StoreActionGroup.fetchPosts, (state) => {
    return {
      ...state,
    };
  }),
  on(StoreActionGroup['posts-success'], (state,{posts}) => {
    return {
      ...state,
      posts: posts
    };
  })
);


