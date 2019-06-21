import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { SafeVideoPipe } from 'src/app/pipes/safe-video.pipe';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent, SafeVideoPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have captions', () => {
    expect(fixture.componentInstance.textCaption).toBeDefined();
    expect(fixture.componentInstance.imageCaption).toBeDefined();
    expect(fixture.componentInstance.videoCaption).toBeDefined();
  });

  it('should have paths', () => {
    expect(fixture.componentInstance.imagePath).toBeDefined();
    expect(fixture.componentInstance.videoPath).toBeDefined();
  });
});
