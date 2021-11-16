import { Pipe, PipeTransform } from '@angular/core';
import {IAnnouncement} from "./annoucement.model";

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(users: IAnnouncement[], search: string = ''): IAnnouncement[] {
    if (!search.trim()) {
      return users
    }
    return users.filter(user => {
      return user.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
