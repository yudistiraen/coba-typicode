import { Component, OnInit } from '@angular/core';
import { ContentsService } from '../../services/contents.service';

interface PostsArr {
  id: number,
  userId: number,
  title: string,
  body: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  posts:PostsArr[] = [];
  showedPosts:PostsArr[] = [];
  page = 1;
  postLength = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private contentsService: ContentsService,
  ) { }

  ngOnInit(): void {
    this.contentsService.getPosts().subscribe((result: any) => {
      console.log('result post', result.length)
      if(result){
        this.posts = result;
        this.postLength = result.length;
        this.dataPerPage();
      }
    })
  }

  public handlePage(e: any) {
    this.page = e.pageIndex+1;
    this.pageSize = e.pageSize;
    this.dataPerPage();
  }

  public dataPerPage(){
    this.showedPosts = [];
    for (var i = (this.page-1) * this.pageSize; i < (this.page * this.pageSize) && i < this.posts.length; i++) {
      this.showedPosts.push(this.posts[i])
    }
  }

}
