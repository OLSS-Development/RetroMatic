import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { UIErrorHandler, ModalContentComponent } from './error-handler';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RetroBoardComponent } from './retro-board/retro-board.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportingComponent } from './exporting/exporting.component';
import { TheHeaderComponent } from './the-header/the-header.component';

import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
  {
    path: 'retroboard/:id',
    canActivate: [AuthGuard],
    component: RetroBoardComponent,
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: UserDetailComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RetroBoardComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    ExportingComponent,
    ModalContentComponent,
    TheHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  entryComponents: [ModalContentComponent],
  providers: [
    AuthGuard,
    {
      provide: ErrorHandler,
      useClass: UIErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
