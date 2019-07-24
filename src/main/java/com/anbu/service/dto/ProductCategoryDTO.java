package com.anbu.service.dto;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.anbu.domain.ProductCategory} entity.
 */
public class ProductCategoryDTO implements Serializable {

    private Long id;

    @NotNull
    private Long category_id;

    @NotNull
    private String category;

    private String active;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ProductCategoryDTO productCategoryDTO = (ProductCategoryDTO) o;
        if (productCategoryDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), productCategoryDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ProductCategoryDTO{" +
            "id=" + getId() +
            ", category_id=" + getCategory_id() +
            ", category='" + getCategory() + "'" +
            ", active='" + getActive() + "'" +
            "}";
    }
}
