import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

const modules = [CommonModule, FormsModule, FlexLayoutModule, MaterialModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
