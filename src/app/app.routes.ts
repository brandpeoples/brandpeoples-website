import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomizerComponent } from './pages/customizer/customizer.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { GiftKitsComponent } from './pages/gift-kits/gift-kits.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Brand Peoples | Custom T-Shirt Manufacturer & Apparel Printing | Tiruppur & Coimbatore' },
  { path: 'catalog', component: CatalogComponent, title: 'Blank Apparel Catalog & Bulk Wholesale | Tiruppur Factory | brandpeoples' },
  { path: 'catalogs', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'products', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'customize', component: CustomizerComponent, title: '3D T-Shirt Studio & Garment Customizer | brandpeoples' },
  { path: 'customizer', redirectTo: 'customize', pathMatch: 'full' },
  { path: 'gift-kits', component: GiftKitsComponent, title: 'Corporate Gift Kits & Onboarding Packs | Coimbatore & Tamil Nadu | brandpeoples' },
  { path: 'projects', redirectTo: 'gift-kits', pathMatch: 'full' },
  { path: 'capabilities', component: CapabilitiesComponent, title: '3D Silicone & 2400 DPI DTF Printing Hub | Tiruppur Manufacturing | brandpeoples' },
  { path: 'quality', component: QualityComponent, title: 'Bio-Washed Combed Cotton Quality & Lab Testing | brandpeoples' },
  { path: 'contact-us', component: ContactComponent, title: 'Factory Direct Quotes & Factory Visits | Tiruppur Desk | brandpeoples' },
  { path: '**', redirectTo: '' }
];
