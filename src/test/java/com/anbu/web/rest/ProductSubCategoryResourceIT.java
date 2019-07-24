package com.anbu.web.rest;

import com.anbu.EcommmerceFrameworkApp;
import com.anbu.domain.ProductSubCategory;
import com.anbu.repository.ProductSubCategoryRepository;
import com.anbu.service.ProductSubCategoryService;
import com.anbu.service.dto.ProductSubCategoryDTO;
import com.anbu.service.mapper.ProductSubCategoryMapper;
import com.anbu.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static com.anbu.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@Link ProductSubCategoryResource} REST controller.
 */
@SpringBootTest(classes = EcommmerceFrameworkApp.class)
public class ProductSubCategoryResourceIT {

    private static final Long DEFAULT_SUB_CATEGORY_ID = 1L;
    private static final Long UPDATED_SUB_CATEGORY_ID = 2L;

    private static final Long DEFAULT_CATEGORY_ID = 1L;
    private static final Long UPDATED_CATEGORY_ID = 2L;

    private static final String DEFAULT_SUB_CATEGORY = "AAAAAAAAAA";
    private static final String UPDATED_SUB_CATEGORY = "BBBBBBBBBB";

    private static final String DEFAULT_ACTIVE = "AAAAAAAAAA";
    private static final String UPDATED_ACTIVE = "BBBBBBBBBB";

    @Autowired
    private ProductSubCategoryRepository productSubCategoryRepository;

    @Autowired
    private ProductSubCategoryMapper productSubCategoryMapper;

    @Autowired
    private ProductSubCategoryService productSubCategoryService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restProductSubCategoryMockMvc;

    private ProductSubCategory productSubCategory;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final ProductSubCategoryResource productSubCategoryResource = new ProductSubCategoryResource(productSubCategoryService);
        this.restProductSubCategoryMockMvc = MockMvcBuilders.standaloneSetup(productSubCategoryResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ProductSubCategory createEntity(EntityManager em) {
        ProductSubCategory productSubCategory = new ProductSubCategory()
            .sub_category_id(DEFAULT_SUB_CATEGORY_ID)
            .category_id(DEFAULT_CATEGORY_ID)
            .sub_category(DEFAULT_SUB_CATEGORY)
            .active(DEFAULT_ACTIVE);
        return productSubCategory;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ProductSubCategory createUpdatedEntity(EntityManager em) {
        ProductSubCategory productSubCategory = new ProductSubCategory()
            .sub_category_id(UPDATED_SUB_CATEGORY_ID)
            .category_id(UPDATED_CATEGORY_ID)
            .sub_category(UPDATED_SUB_CATEGORY)
            .active(UPDATED_ACTIVE);
        return productSubCategory;
    }

    @BeforeEach
    public void initTest() {
        productSubCategory = createEntity(em);
    }

    @Test
    @Transactional
    public void createProductSubCategory() throws Exception {
        int databaseSizeBeforeCreate = productSubCategoryRepository.findAll().size();

        // Create the ProductSubCategory
        ProductSubCategoryDTO productSubCategoryDTO = productSubCategoryMapper.toDto(productSubCategory);
        restProductSubCategoryMockMvc.perform(post("/api/product-sub-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productSubCategoryDTO)))
            .andExpect(status().isCreated());

        // Validate the ProductSubCategory in the database
        List<ProductSubCategory> productSubCategoryList = productSubCategoryRepository.findAll();
        assertThat(productSubCategoryList).hasSize(databaseSizeBeforeCreate + 1);
        ProductSubCategory testProductSubCategory = productSubCategoryList.get(productSubCategoryList.size() - 1);
        assertThat(testProductSubCategory.getSub_category_id()).isEqualTo(DEFAULT_SUB_CATEGORY_ID);
        assertThat(testProductSubCategory.getCategory_id()).isEqualTo(DEFAULT_CATEGORY_ID);
        assertThat(testProductSubCategory.getSub_category()).isEqualTo(DEFAULT_SUB_CATEGORY);
        assertThat(testProductSubCategory.getActive()).isEqualTo(DEFAULT_ACTIVE);
    }

    @Test
    @Transactional
    public void createProductSubCategoryWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = productSubCategoryRepository.findAll().size();

        // Create the ProductSubCategory with an existing ID
        productSubCategory.setId(1L);
        ProductSubCategoryDTO productSubCategoryDTO = productSubCategoryMapper.toDto(productSubCategory);

        // An entity with an existing ID cannot be created, so this API call must fail
        restProductSubCategoryMockMvc.perform(post("/api/product-sub-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productSubCategoryDTO)))
            .andExpect(status().isBadRequest());

        // Validate the ProductSubCategory in the database
        List<ProductSubCategory> productSubCategoryList = productSubCategoryRepository.findAll();
        assertThat(productSubCategoryList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkSub_category_idIsRequired() throws Exception {
        int databaseSizeBeforeTest = productSubCategoryRepository.findAll().size();
        // set the field null
        productSubCategory.setSub_category_id(null);

        // Create the ProductSubCategory, which fails.
        ProductSubCategoryDTO productSubCategoryDTO = productSubCategoryMapper.toDto(productSubCategory);

        restProductSubCategoryMockMvc.perform(post("/api/product-sub-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productSubCategoryDTO)))
            .andExpect(status().isBadRequest());

        List<ProductSubCategory> productSubCategoryList = productSubCategoryRepository.findAll();
        assertThat(productSubCategoryList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllProductSubCategories() throws Exception {
        // Initialize the database
        productSubCategoryRepository.saveAndFlush(productSubCategory);

        // Get all the productSubCategoryList
        restProductSubCategoryMockMvc.perform(get("/api/product-sub-categories?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(productSubCategory.getId().intValue())))
            .andExpect(jsonPath("$.[*].sub_category_id").value(hasItem(DEFAULT_SUB_CATEGORY_ID.intValue())))
            .andExpect(jsonPath("$.[*].category_id").value(hasItem(DEFAULT_CATEGORY_ID.intValue())))
            .andExpect(jsonPath("$.[*].sub_category").value(hasItem(DEFAULT_SUB_CATEGORY.toString())))
            .andExpect(jsonPath("$.[*].active").value(hasItem(DEFAULT_ACTIVE.toString())));
    }
    
    @Test
    @Transactional
    public void getProductSubCategory() throws Exception {
        // Initialize the database
        productSubCategoryRepository.saveAndFlush(productSubCategory);

        // Get the productSubCategory
        restProductSubCategoryMockMvc.perform(get("/api/product-sub-categories/{id}", productSubCategory.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(productSubCategory.getId().intValue()))
            .andExpect(jsonPath("$.sub_category_id").value(DEFAULT_SUB_CATEGORY_ID.intValue()))
            .andExpect(jsonPath("$.category_id").value(DEFAULT_CATEGORY_ID.intValue()))
            .andExpect(jsonPath("$.sub_category").value(DEFAULT_SUB_CATEGORY.toString()))
            .andExpect(jsonPath("$.active").value(DEFAULT_ACTIVE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingProductSubCategory() throws Exception {
        // Get the productSubCategory
        restProductSubCategoryMockMvc.perform(get("/api/product-sub-categories/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateProductSubCategory() throws Exception {
        // Initialize the database
        productSubCategoryRepository.saveAndFlush(productSubCategory);

        int databaseSizeBeforeUpdate = productSubCategoryRepository.findAll().size();

        // Update the productSubCategory
        ProductSubCategory updatedProductSubCategory = productSubCategoryRepository.findById(productSubCategory.getId()).get();
        // Disconnect from session so that the updates on updatedProductSubCategory are not directly saved in db
        em.detach(updatedProductSubCategory);
        updatedProductSubCategory
            .sub_category_id(UPDATED_SUB_CATEGORY_ID)
            .category_id(UPDATED_CATEGORY_ID)
            .sub_category(UPDATED_SUB_CATEGORY)
            .active(UPDATED_ACTIVE);
        ProductSubCategoryDTO productSubCategoryDTO = productSubCategoryMapper.toDto(updatedProductSubCategory);

        restProductSubCategoryMockMvc.perform(put("/api/product-sub-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productSubCategoryDTO)))
            .andExpect(status().isOk());

        // Validate the ProductSubCategory in the database
        List<ProductSubCategory> productSubCategoryList = productSubCategoryRepository.findAll();
        assertThat(productSubCategoryList).hasSize(databaseSizeBeforeUpdate);
        ProductSubCategory testProductSubCategory = productSubCategoryList.get(productSubCategoryList.size() - 1);
        assertThat(testProductSubCategory.getSub_category_id()).isEqualTo(UPDATED_SUB_CATEGORY_ID);
        assertThat(testProductSubCategory.getCategory_id()).isEqualTo(UPDATED_CATEGORY_ID);
        assertThat(testProductSubCategory.getSub_category()).isEqualTo(UPDATED_SUB_CATEGORY);
        assertThat(testProductSubCategory.getActive()).isEqualTo(UPDATED_ACTIVE);
    }

    @Test
    @Transactional
    public void updateNonExistingProductSubCategory() throws Exception {
        int databaseSizeBeforeUpdate = productSubCategoryRepository.findAll().size();

        // Create the ProductSubCategory
        ProductSubCategoryDTO productSubCategoryDTO = productSubCategoryMapper.toDto(productSubCategory);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restProductSubCategoryMockMvc.perform(put("/api/product-sub-categories")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productSubCategoryDTO)))
            .andExpect(status().isBadRequest());

        // Validate the ProductSubCategory in the database
        List<ProductSubCategory> productSubCategoryList = productSubCategoryRepository.findAll();
        assertThat(productSubCategoryList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteProductSubCategory() throws Exception {
        // Initialize the database
        productSubCategoryRepository.saveAndFlush(productSubCategory);

        int databaseSizeBeforeDelete = productSubCategoryRepository.findAll().size();

        // Delete the productSubCategory
        restProductSubCategoryMockMvc.perform(delete("/api/product-sub-categories/{id}", productSubCategory.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<ProductSubCategory> productSubCategoryList = productSubCategoryRepository.findAll();
        assertThat(productSubCategoryList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProductSubCategory.class);
        ProductSubCategory productSubCategory1 = new ProductSubCategory();
        productSubCategory1.setId(1L);
        ProductSubCategory productSubCategory2 = new ProductSubCategory();
        productSubCategory2.setId(productSubCategory1.getId());
        assertThat(productSubCategory1).isEqualTo(productSubCategory2);
        productSubCategory2.setId(2L);
        assertThat(productSubCategory1).isNotEqualTo(productSubCategory2);
        productSubCategory1.setId(null);
        assertThat(productSubCategory1).isNotEqualTo(productSubCategory2);
    }

    @Test
    @Transactional
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProductSubCategoryDTO.class);
        ProductSubCategoryDTO productSubCategoryDTO1 = new ProductSubCategoryDTO();
        productSubCategoryDTO1.setId(1L);
        ProductSubCategoryDTO productSubCategoryDTO2 = new ProductSubCategoryDTO();
        assertThat(productSubCategoryDTO1).isNotEqualTo(productSubCategoryDTO2);
        productSubCategoryDTO2.setId(productSubCategoryDTO1.getId());
        assertThat(productSubCategoryDTO1).isEqualTo(productSubCategoryDTO2);
        productSubCategoryDTO2.setId(2L);
        assertThat(productSubCategoryDTO1).isNotEqualTo(productSubCategoryDTO2);
        productSubCategoryDTO1.setId(null);
        assertThat(productSubCategoryDTO1).isNotEqualTo(productSubCategoryDTO2);
    }

    @Test
    @Transactional
    public void testEntityFromId() {
        assertThat(productSubCategoryMapper.fromId(42L).getId()).isEqualTo(42);
        assertThat(productSubCategoryMapper.fromId(null)).isNull();
    }
}
