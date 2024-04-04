import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { PostComponent } from './shared/components/post/post.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './shared/components/posts/posts.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabForComponent } from './shared/components/tab-for/tab-for.component';
import { TabSwitchComponent } from './shared/components/tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    PostComponent,
    PostsComponent,
    MobileComponent,
    TabComponent,
    TabForComponent,
    TabSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
