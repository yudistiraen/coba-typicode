import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContentsService } from '../../services/contents.service';

interface PostsArr {
  id: number,
  userId: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() entry :any;

  totalComents = 0;
  coments= [];
  constructor(
    private contentsService: ContentsService,
    private router: Router
    // private stateService: StateService
  ) { }

  ngOnInit(): void {
    console.log('test entry', this.entry)
    this.contentsService.getTotalComents(this.entry.id).subscribe((result) => {
      console.log('result totalcoments', result)
      this.totalComents = result.length;
      this.coments = result;
    })
  }

  onDetailPost(entry: any){
    console.log('onDetailPost', entry)
    this.router.navigate(['/detail-post'], {state: {
      'data': entry,
      'coments': this.coments
    }})
  }

}
