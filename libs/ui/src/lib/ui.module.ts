import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';


import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@NgModule({
  imports: [CommonModule, MatAutocompleteModule, MatInputModule, MatBottomSheetModule, MatBottomSheet, MatBottomSheetRef],
  declarations: [
    AutocompleteComponent,
  ],
  exports: [
    AutocompleteComponent,
  ],
  entryComponents: [],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ]
})
export class UiModule {}
