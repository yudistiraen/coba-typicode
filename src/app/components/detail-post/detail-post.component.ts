import { Component, OnInit } from '@angular/core';


interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  detailPost:Post;
  coments: Comment[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('detail-post', history)
    this.detailPost = history.state.data;
    this.coments = history.state.coments;
  }

}
