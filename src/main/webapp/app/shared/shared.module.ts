import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {
  GreatBigExampleApplicationSharedLibsModule,
  GreatBigExampleApplicationSharedCommonModule,
  CSRFService,
  AuthService,
  AuthServerProvider,
  AccountService,
  StateStorageService,
  LoginService,
  LoginModalService,
  Principal,
  JhiTrackerService,
  HasAnyAuthorityDirective,
  JhiSocialComponent,
  SocialService,
  JhiLoginModalComponent
} from './';

import { DraggableDirective } from './draggable/draggable.directive';
// import { RioAlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
// import { RioInputComponent } from './input/input.component';
// import { RioFormComponent } from './form/form.component';
// import { RioFormErrorComponent } from './form-error/form-error.component';
// import { RioFormGroupComponent } from './form-group/form-group.component';
// import { RioLabelComponent } from './label/label.component';
import { AwesomePipe } from './awesome/awesome.pipe';
// import { HighlightDirective } from './highlight/highlight.directive';
// import { TitleCasePipe } from './title-case/title-case.pipe';
// import { TwainComponent } from './twain/twain.component';
// import { TwainService } from './twain/twain.service';
import { WelcomeComponent } from './welcome/welcome.component';
// import { GameComponent } from '../features/game/game.component';
// import { TimerComponent } from '../features/game/timer/timer.component';

export const components = [
  DraggableDirective,
  // RioAlertComponent,
  ButtonComponent,
  ContainerComponent,
  // RioInputComponent,
  // RioFormComponent,
  // RioFormErrorComponent,
  // RioFormGroupComponent,
  // RioLabelComponent,
  AwesomePipe,
  // HighlightDirective,
  // TitleCasePipe,
  // TwainComponent,
  WelcomeComponent,
  // GameComponent,
  // TimerComponent
];

@NgModule({
  imports: [
    GreatBigExampleApplicationSharedLibsModule,
    GreatBigExampleApplicationSharedCommonModule
  ],
  declarations: [
    JhiSocialComponent,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective,
    ...components
  ],
  providers: [
    CookieService,
    LoginService,
    LoginModalService,
    AccountService,
    StateStorageService,
    Principal,
    CSRFService,
    JhiTrackerService,
    AuthServerProvider,
    SocialService,
    AuthService,
    DatePipe
  ],
  entryComponents: [JhiLoginModalComponent],
  exports: [
    GreatBigExampleApplicationSharedCommonModule,
    JhiSocialComponent,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective,
    DatePipe,
    ...components
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GreatBigExampleApplicationSharedModule { }
