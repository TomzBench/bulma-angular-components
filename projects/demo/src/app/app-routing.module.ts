import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "demo", component: AppComponent },
  { path: "", redirectTo: "/demo", pathMatch: "full" },
  { path: "**", redirectTo: "/demo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
