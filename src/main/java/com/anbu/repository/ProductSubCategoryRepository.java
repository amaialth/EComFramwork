package com.anbu.repository;

import com.anbu.domain.ProductSubCategory;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ProductSubCategory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Long> {

}
