import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomizerComponent } from './pages/customizer/customizer.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { GiftKitsComponent } from './pages/gift-kits/gift-kits.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'brandpeoples — Custom Merchandise & Brand Kits' },
  { path: 'catalog', component: CatalogComponent, title: 'Catalogs | brandpeoples' },
  { path: 'catalogs', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'products', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'customize', component: CustomizerComponent, title: 'Product Studio & 3D Customizer | brandpeoples' },
  { path: 'customizer', redirectTo: 'customize', pathMatch: 'full' },
  { path: 'gift-kits', component: GiftKitsComponent, title: 'Gift Kits & Welcome Packages | brandpeoples' },
  { path: 'projects', redirectTo: 'gift-kits', pathMatch: 'full' },
  { path: 'capabilities', component: CapabilitiesComponent, title: 'Manufacturing Capabilities | brandpeoples' },
  { path: 'quality', component: QualityComponent, title: 'Quality Standards & Fabric Testing | brandpeoples' },
  { path: 'contact-us', component: ContactComponent, title: 'Contact & Factory Bulk Inquiries | brandpeoples' },
  { path: '**', redirectTo: '' }
];
