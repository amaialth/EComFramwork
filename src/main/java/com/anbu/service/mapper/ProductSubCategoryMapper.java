package com.anbu.service.mapper;

import com.anbu.domain.*;
import com.anbu.service.dto.ProductSubCategoryDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link ProductSubCategory} and its DTO {@link ProductSubCategoryDTO}.
 */
@Mapper(componentModel = "spring", uses = {ProductCategoryMapper.class})
public interface ProductSubCategoryMapper extends EntityMapper<ProductSubCategoryDTO, ProductSubCategory> {

    @Mapping(source = "product_category.id", target = "product_categoryId")
    @Mapping(source = "product_category.category", target = "product_categoryProduct_category")
    ProductSubCategoryDTO toDto(ProductSubCategory productSubCategory);

    @Mapping(source = "product_categoryId", target = "product_category")
    ProductSubCategory toEntity(ProductSubCategoryDTO productSubCategoryDTO);

    default ProductSubCategory fromId(Long id) {
        if (id == null) {
            return null;
        }
        ProductSubCategory productSubCategory = new ProductSubCategory();
        productSubCategory.setId(id);
        return productSubCategory;
    }
}
