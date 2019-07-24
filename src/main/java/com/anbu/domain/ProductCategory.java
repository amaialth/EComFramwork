package com.anbu.domain;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A ProductCategory.
 */
@Entity
@Table(name = "product_category")
public class ProductCategory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "category_id", nullable = false, unique = true)
    private Long category_id;

    @NotNull
    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "active")
    private String active;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return this.category_id;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public ProductCategory category_id(Long category_id) {
        this.category_id = category_id;
        return this;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public String getCategory() {
        return category;
    }

    public ProductCategory category(String category) {
        this.category = category;
        return this;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getActive() {
        return active;
    }

    public ProductCategory active(String active) {
        this.active = active;
        return this;
    }

    public void setActive(String active) {
        this.active = active;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ProductCategory)) {
            return false;
        }
        return category_id != null && category_id.equals(((ProductCategory) o).category_id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "ProductCategory{" +
            "id=" + getId() +
            ", category_id=" + getCategory_id() +
            ", category='" + getCategory() + "'" +
            ", active='" + getActive() + "'" +
            "}";
    }
}
