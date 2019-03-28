import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Homepage',
        children: [
          {
            path: '',
            loadChildren: '../Homepage/Homepage.module#HomepagePageModule'
          }
        ]
      },
      {
        path: 'Order',
        children: [
          {
            path: '',
            loadChildren: '../Order/Order.module#OrderPageModule'
          }
        ]
      },
      {
        path: 'Glossary',
        children: [
          {
            path: '',
            loadChildren: '../Glossary/Glossary.module#GlossaryPageModule'
          }
        ]
      },
      {
        path: 'Contact',
        children: [
          {
            path: '',
            loadChildren: '../Contact/Contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: 'About',
        children: [
          {
            path: '',
            loadChildren: '../About/About.module#AboutPageModule'
          }
        ]
      },
      {
        path: 'Feedback',
        children: [
          {
            path: '',
            loadChildren: '../Feedback/Feedback.module#FeedbackPageModule'
          }
        ]
      },
      {
        path: 'Rate',
        children: [
          {
            path: '',
            loadChildren: '../Rate/Rate.module#RatePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Homepage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
