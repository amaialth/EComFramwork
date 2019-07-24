package com.anbu.service.mapper;

import com.anbu.domain.*;
import com.anbu.service.dto.ProductCategoryDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link ProductCategory} and its DTO {@link ProductCategoryDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ProductCategoryMapper extends EntityMapper<ProductCategoryDTO, ProductCategory> {



    default ProductCategory fromId(Long id) {
        if (id == null) {
            return null;
        }
        ProductCategory productCategory = new ProductCategory();
        productCategory.setCategory_id(id);
        return productCategory;
    }
}
