package com.anbu.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A ProductSubCategory.
 */
@Entity
@Table(name = "sub_category")
public class ProductSubCategory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "sub_category_id", nullable = false, unique = true)
    private Long sub_category_id;

    @Column(name = "category_id")
    private Long category_id;

    @Column(name = "sub_category")
    private String sub_category;

    @Column(name = "active")
    private String active;

    @ManyToOne
    private ProductCategory product_category;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSub_category_id() {
        return sub_category_id;
    }

    public ProductSubCategory sub_category_id(Long sub_category_id) {
        this.sub_category_id = sub_category_id;
        return this;
    }

    public void setSub_category_id(Long sub_category_id) {
        this.sub_category_id = sub_category_id;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public ProductSubCategory category_id(Long category_id) {
        this.category_id = category_id;
        return this;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getSub_category() {
        return sub_category;
    }

    public ProductSubCategory sub_category(String sub_category) {
        this.sub_category = sub_category;
        return this;
    }

    public void setSub_category(String sub_category) {
        this.sub_category = sub_category;
    }

    public String getActive() {
        return active;
    }

    public ProductSubCategory active(String active) {
        this.active = active;
        return this;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public ProductCategory getProduct_category() {
        return product_category;
    }

    public ProductSubCategory product_category(ProductCategory productCategory) {
        this.product_category = productCategory;
        return this;
    }

    public void setProduct_category(ProductCategory productCategory) {
        this.product_category = productCategory;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ProductSubCategory)) {
            return false;
        }
        return id != null && id.equals(((ProductSubCategory) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "ProductSubCategory{" +
            "id=" + getId() +
            ", sub_category_id=" + getSub_category_id() +
            ", category_id=" + getCategory_id() +
            ", sub_category='" + getSub_category() + "'" +
            ", active='" + getActive() + "'" +
            "}";
    }
}
