import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CareerComponent } from './career/career.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service-detail/:id', component: ServiceDetailComponent },
  { path: 'contact', component: ContactComponent },  
  { path: 'technologies', component: TechnologiesComponent },  
  { path: 'career', component: CareerComponent },  
  { path: 'portfolio', component: PortfolioComponent },  
  { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
