package spring.final_exam.product_package.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import spring.final_exam.product_package.model.Package;
import spring.final_exam.product_package.service.IGeneralService;

public interface IPackageService extends IGeneralService<Package> {
    Page<Package> getPackageListByAll(@Param("productName") String productName, @Param("importDate") String importDate, @Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);
//    Page<Package> getPackageListIncludeImportDate(@Param("importDate") String importDate, @Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);
//    Page<Package> getPackageListIncludeProductName(@Param("productName") String productName, @Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);
//    Page<Package> getPackageList(@Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);
}
