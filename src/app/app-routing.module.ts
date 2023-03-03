import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
// import { SignupLoginComponent } from './Components/signup-login/signup-login.component';
import { StudentSignupLoginComponent } from './Components/student-signup-login/student-signup-login.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { TeacherSignupLoginComponent } from './Components/teacher-signup-login/teacher-signup-login.component';



const routes: Routes = [
  // {path:'signup-login',component:SignupLoginComponent},
  // {path:'', redirectTo:'/signup-login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'student-login', component:StudentLoginComponent},
  {path:'teacher-login',component:TeacherLoginComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'student-signup-login',component:StudentSignupLoginComponent},
  {path:'teacher-signup-login',component:TeacherSignupLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin',loadChildren:()=>
  import('./modules/admin/admin.module').then((m)=>m.AdminModule),},
  {path:'teacher',loadChildren:()=>
  import('./modules/teacher/teacher.module').then((m)=>m.TeacherModule)},
  {path:'students',loadChildren:()=>
  import('./modules/students/students.module').then((m)=>m.StudentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
