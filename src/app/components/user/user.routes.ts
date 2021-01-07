import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';

export const USER_ROUTES: Routes = [
  { path: 'new', component: NewUserComponent },
  { path: 'edit', component: UserEditComponent },
  { path: 'detail', component: UserDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'new' },
];
