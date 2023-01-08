package spring.final_exam.product_package.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.final_exam.product_package.model.Package;
import spring.final_exam.product_package.model.Product;
import spring.final_exam.product_package.service.IProductService;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductRestController {

    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<List<Product>> getAllProduct(Pageable pageable) {
        List<Product> productList = productService.findAll(pageable).getContent();
        if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
