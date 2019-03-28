import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomepagePage } from './Homepage.page';
var HomepagePageModule = /** @class */ (function () {
    function HomepagePageModule() {
    }
    HomepagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: HomepagePage }])
            ],
            declarations: [HomepagePage]
        })
    ], HomepagePageModule);
    return HomepagePageModule;
}());
export { HomepagePageModule };
//# sourceMappingURL=Homepage.module.js.map