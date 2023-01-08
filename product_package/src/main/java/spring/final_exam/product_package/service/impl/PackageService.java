package spring.final_exam.product_package.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import spring.final_exam.product_package.model.Package;
import spring.final_exam.product_package.repository.IPackageRepository;
import spring.final_exam.product_package.service.IPackageService;

@Service
public class PackageService implements IPackageService {

    @Autowired
    private IPackageRepository packageRepository;

    @Override
    public Page<Package> findAll(Pageable pageable) {
        return packageRepository.findAll(pageable);
    }

    @Override
    public Package findById(Integer id) {
        return packageRepository.findById(id).get();
    }

    @Override
    public void save(Package aPackage) {
        packageRepository.save(aPackage);
    }

    @Override
    public void delete(Integer id) {
        packageRepository.deleteById(id);
    }

    @Override
    public Page<Package> getPackageListByAll(String productName, String importDate, String startDate, String endDate, Pageable pageable) {
        return packageRepository.getPackageListByAll(productName, importDate, startDate, endDate, pageable);
    }
}

//    @Override
//    public Page<Package> getPackageListIncludeImportDate(String importDate, String startDate, String endDate, Pageable pageable) {
//        return packageRepository.getPackageListIncludeImportDate(importDate, startDate, endDate, pageable);
//    }
//
//    @Override
//    public Page<Package> getPackageListIncludeProductName(String productName, String startDate, String endDate, Pageable pageable) {
//        return packageRepository.getPackageListIncludeProductName(productName, startDate, endDate, pageable);
//    }
//
//    public Page<Package> getPackageList(@Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable) {
//        return packageRepository.getPackageListByAll(startDate, endDate, pageable);
//    }
