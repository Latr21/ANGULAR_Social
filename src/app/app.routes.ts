import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { LoginComponent } from './components/login/login.component';  
import { AuthGuard } from './guards/auth.guard';  

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },  
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },  
  { path: 'user/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },  
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard] },  
  { path: 'post/:id', component: PostDetailsComponent, canActivate: [AuthGuard] },  
];