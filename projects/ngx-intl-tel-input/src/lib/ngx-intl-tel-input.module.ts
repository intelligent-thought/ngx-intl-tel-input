import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgxIntlTelInputComponent} from './ngx-intl-tel-input.component';
import {CommonModule} from '@angular/common';
import {BsDropdownModule, TooltipModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxIntlTelInputService} from './services/ngx-intl-tel-input.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {ComponentsModule} from './components/components.module';
import {NgxDropdownService} from './services/ngx-dropdown.service';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [NgxIntlTelInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    ComponentsModule,
    ScrollingModule
  ],
  exports: [NgxIntlTelInputComponent]
})
export class NgxIntlTelInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIntlTelInputModule,
      providers: [
        NgxIntlTelInputService,
        NgxDropdownService
      ]
    };
  }
}
