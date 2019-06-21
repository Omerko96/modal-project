import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal: any;
  id: string;

  constructor() { }

  // Adding modal
  modalAdd(modal: any) {
    this.modal = modal;
  }

  // Opening modal
  open(id: string) {
    this.modal.open();
  }

  // Setting id
  setId(id) {
    this.id = id;
    this.open(id);
  }

  // Get modal id
  getId() {
    return this.id;
  }
}
