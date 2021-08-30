import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post';

@Pipe({
  name: 'postsFilter'
})
export class PostsFilterPipe implements PipeTransform {

  transform(value: Post[], arg: string): Post[] {
    if(arg === '' || arg.length < 1) { return value }
    const resultsPosts = [];
    for(const post of value) {
      if(post.title.indexOf(arg.toLowerCase()) > -1) {
        resultsPosts.push(post);
      }
    }
    return resultsPosts;
  }

}
