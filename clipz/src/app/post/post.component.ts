import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, 
AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('inside constructor', this.postImg);
  }

  ngOnInit() {
    console.log('inside init', this.postImg);
  }

  ngOnChanges() {
    console.log('on change');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentChecked(): void {
      console.log('content check');
  }
  ngAfterContentInit(): void {
      console.log('content init');
  }
  ngAfterViewChecked(): void {
      console.log('view checked');
  }
  ngAfterViewInit(): void {
      console.log('view init');
  }
}
