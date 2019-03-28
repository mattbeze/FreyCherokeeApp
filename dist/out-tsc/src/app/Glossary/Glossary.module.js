import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlossaryPage } from './Glossary.page';
var GlossaryPageModule = /** @class */ (function () {
    function GlossaryPageModule() {
    }
    GlossaryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: GlossaryPage }])
            ],
            declarations: [GlossaryPage]
        })
    ], GlossaryPageModule);
    return GlossaryPageModule;
}());
export { GlossaryPageModule };
//# sourceMappingURL=Glossary.module.js.map