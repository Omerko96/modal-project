import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

// Pipes
import { SafeVideoPipe } from './pipes/safe-video.pipe';

// Services
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    FooterComponent,
    ModalComponent,
    SafeVideoPipe
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    SafeVideoPipe
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
