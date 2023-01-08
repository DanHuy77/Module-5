package spring.final_exam.product_package.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import spring.final_exam.product_package.model.Package;
import spring.final_exam.product_package.service.IPackageService;
import spring.final_exam.product_package.service.IProductService;


@RestController
@CrossOrigin("*")
@RequestMapping("/package")
public class PackageRestController {

    @Autowired
    private IPackageService packageService;
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<Page<Package>> getPackageList(
            @RequestParam(defaultValue = "") String productName,

            @RequestParam(defaultValue = "") String importDate,

            @RequestParam(defaultValue = "2100-01-01") String startDate,

            @RequestParam(defaultValue = "1900-01-01") String endDate,

            @RequestParam(defaultValue = "0") int page,

            @RequestParam() int size) {
        Pageable pageable = Pageable.ofSize(size);
        Page<Package> packagePage = packageService.getPackageListByAll(productName, importDate, startDate, endDate, pageable.withPage(page));
        packagePage.hasNext();
        if (packagePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(packagePage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Package> findPackageById(@PathVariable("id") Integer id) {
        Package aPackage = packageService.findById(id);
        if (aPackage == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(aPackage, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<HttpStatus> addNewPackage(@Validated @RequestBody Package aPackage, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
        aPackage.setProduct(productService.findById(aPackage.getProduct().getId()));
        packageService.save(aPackage);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePackage(@PathVariable("id") Integer id) {
        Package aPackage = packageService.findById(id);
        if (aPackage == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        packageService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<HttpStatus> editPackageInformation(@Validated @PathVariable("id") Integer id, @RequestBody Package aPackage, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
        Package aPackage1 = packageService.findById(id);
        System.out.println(aPackage.toString());
        if (aPackage1 == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        packageService.save(aPackage);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
