import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPosts: any

  constructor(
    // Api Service 
    private api: ApiService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('posts')) {
      this.getLocalStorage();
    } else {
      this.getPosts();
    }
    console.log(this.allPosts);

  }
  // Get Posts from API
  getPosts() {
    this.api.getData('https://jsonplaceholder.typicode.com/posts').subscribe((res: any) => {
      console.log(res);
      this.allPosts = res
      this.setLocalStorage()
    })
  }
  // Set Data to LocalStorage
  setLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(this.allPosts))
  }
  // get Data from LocalStorage
  getLocalStorage() {
    this.allPosts = JSON.parse(localStorage.getItem('posts') || '')
  }
}
