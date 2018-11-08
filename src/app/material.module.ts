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
    MatExpansionModule
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
    MatExpansionModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule {}
