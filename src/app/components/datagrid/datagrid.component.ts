import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductTableComponent } from '../product-table/product-table.component';

@Component({
  standalone: true,
  selector: 'datagrid-component',
  imports: [CommonModule, ProductTableComponent],
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent {


  products$: Observable<Product[]> = this.productsService.getRandomProducts(100);

  constructor(private productsService: ProductsService){
  }



}
