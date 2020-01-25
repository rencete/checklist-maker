import { Routes, RouterModule } from "@angular/router";

import { DocumentsListViewComponent } from './document/documents-list-view/documents-list-view.component';
import { DocumentMainEditComponent } from './document/document-main-edit/document-main-edit.component';

const appRoutes: Routes = [    
    { path: "documents/:mode/:id", component: DocumentMainEditComponent },
    { path: "documents", component: DocumentsListViewComponent },
    { path: "**", redirectTo: "/documents", pathMatch: "full" }
]

export const routing = RouterModule.forRoot(appRoutes);