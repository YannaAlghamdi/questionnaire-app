import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'questionnaire',
    pathMatch: 'full'
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./pages/questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
