import { Component, OnInit, Input, ElementRef } from '@angular/core';

// Services
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  id: string;
  textCaption = 'A Custom Angular 8 Modal';
  imageCaption = 'A Custom Angular 8 Modal with Image';
  videoCaption = 'A Custom Angular 8 Modal with Video';
  imagePath = 'url(https://www.abigailborg.com/wp-content/uploads/2017/06/LR-coralline-midnight-gold-wallpaper-cut-out-Abigail-Borg.jpg)';
  videoPath = 'https://www.youtube.com/embed/1iYxuaKKvbI';

  ngOnInit(): void {
    const modal = this;

    this.modalService.modalAdd(modal);
  }

  // Open modal
  open(id: string): void {
    this.id = this.modalService.getId();
    const el = document.getElementById('modal_wrapper');
    el.style.opacity = '1';
    el.style.visibility = 'visible';
  }

  // Closing Modal
  close(): void {
    const el = document.getElementById('modal_wrapper');
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
  }

}
