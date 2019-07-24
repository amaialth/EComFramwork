import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IProductSubCategory, ProductSubCategory } from 'app/shared/model/product-sub-category.model';
import { ProductSubCategoryService } from './product-sub-category.service';
import { IProductCategory } from 'app/shared/model/product-category.model';
import { ProductCategoryService } from 'app/entities/product-category';

@Component({
  selector: 'jhi-product-sub-category-update',
  templateUrl: './product-sub-category-update.component.html'
})
export class ProductSubCategoryUpdateComponent implements OnInit {
  isSaving: boolean;

  productcategories: IProductCategory[];

  editForm = this.fb.group({
    id: [],
    sub_category_id: [null, [Validators.required]],
    category_id: [],
    sub_category: [],
    active: [],
    product_categoryId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected productSubCategoryService: ProductSubCategoryService,
    protected productCategoryService: ProductCategoryService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ productSubCategory }) => {
      this.updateForm(productSubCategory);
    });
    this.productCategoryService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IProductCategory[]>) => mayBeOk.ok),
        map((response: HttpResponse<IProductCategory[]>) => response.body)
      )
      .subscribe((res: IProductCategory[]) => (this.productcategories = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(productSubCategory: IProductSubCategory) {
    this.editForm.patchValue({
      id: productSubCategory.id,
      sub_category_id: productSubCategory.sub_category_id,
      category_id: productSubCategory.category_id,
      sub_category: productSubCategory.sub_category,
      active: productSubCategory.active,
      product_categoryId: productSubCategory.product_categoryId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const productSubCategory = this.createFromForm();
    if (productSubCategory.id !== undefined) {
      this.subscribeToSaveResponse(this.productSubCategoryService.update(productSubCategory));
    } else {
      this.subscribeToSaveResponse(this.productSubCategoryService.create(productSubCategory));
    }
  }

  private createFromForm(): IProductSubCategory {
    return {
      ...new ProductSubCategory(),
      id: this.editForm.get(['id']).value,
      sub_category_id: this.editForm.get(['sub_category_id']).value,
      category_id: this.editForm.get(['category_id']).value,
      sub_category: this.editForm.get(['sub_category']).value,
      active: this.editForm.get(['active']).value,
      product_categoryId: this.editForm.get(['product_categoryId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProductSubCategory>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackProductCategoryById(index: number, item: IProductCategory) {
    return item.id;
  }
}
