import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {
  }

  users = [
    {name: 'Ryu', img: {url: 'https://img00.deviantart.net/b6bd/i/2016/066/5/1/sfv__ryu_by_anubisdhl-d9ub64x.jpg'}},
    {name: 'Ken', img: {url: 'https://vignette.wikia.nocookie.net/streetfighter/images/b/b4/Kenrender.png/revision/latest/scale-to-width-down/350?cb=20170728171332'}},
    {name: 'Chun-Li', img: {url: 'https://i.kinja-img.com/gawker-media/image/upload/s--b_HbiJxa--/c_scale,fl_progressive,q_80,w_800/eec1fnvluhc0b5lugorm.jpg'}},
  ];

}
