import { NgModule } from '@angular/core';
import {
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule {}
