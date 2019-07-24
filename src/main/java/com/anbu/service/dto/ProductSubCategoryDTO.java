package com.anbu.service.dto;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.anbu.domain.ProductSubCategory} entity.
 */
public class ProductSubCategoryDTO implements Serializable {

    private Long id;

    @NotNull
    private Long sub_category_id;

    private Long category_id;

    private String sub_category;

    private String active;


    private Long product_categoryId;

    private String product_categoryProduct_category;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSub_category_id() {
        return sub_category_id;
    }

    public void setSub_category_id(Long sub_category_id) {
        this.sub_category_id = sub_category_id;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getSub_category() {
        return sub_category;
    }

    public void setSub_category(String sub_category) {
        this.sub_category = sub_category;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public Long getProduct_categoryId() {
        return product_categoryId;
    }

    public void setProduct_categoryId(Long productCategoryId) {
        this.product_categoryId = productCategoryId;
    }

    public String getProduct_categoryProduct_category() {
        return product_categoryProduct_category;
    }

    public void setProduct_categoryProduct_category(String productCategoryProduct_category) {
        this.product_categoryProduct_category = productCategoryProduct_category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProductSubCategoryDTO productSubCategoryDTO = (ProductSubCategoryDTO) o;
        if (productSubCategoryDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), productSubCategoryDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ProductSubCategoryDTO{" +
            "id=" + getId() +
            ", sub_category_id=" + getSub_category_id() +
            ", category_id=" + getCategory_id() +
            ", sub_category='" + getSub_category() + "'" +
            ", active='" + getActive() + "'" +
            ", product_category=" + getProduct_categoryId() +
            ", product_category='" + getProduct_categoryProduct_category() + "'" +
            "}";
    }
}
