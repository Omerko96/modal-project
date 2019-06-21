import { Component, OnInit } from '@angular/core';

// Services
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  // Setting id and oppening modal
  openModal(id: string) {
    this.modalService.setId(id);
  }

}
