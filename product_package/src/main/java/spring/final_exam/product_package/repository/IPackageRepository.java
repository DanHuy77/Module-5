package spring.final_exam.product_package.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import spring.final_exam.product_package.model.Package;

@Repository
public interface IPackageRepository extends JpaRepository<Package, Integer> {
    @Query(value = "select * from package join product on package.product_id = product.id where product.name like %:productName% and package.import_date like %:importDate% and date(package.produced_date) <= date(:startDate) and date(:endDate) <= date(package.expire_date)"
            , countQuery = "select * from package join product on package.product_id = product.id where product.name like %:productName% and package.import_date like %:importDate% and date(package.produced_date) <= date(:startDate) and date(:endDate) <= date(package.expire_date)"
            , nativeQuery = true)
    Page<Package> getPackageListByAll(@Param("productName") String productName, @Param("importDate") String importDate, @Param("startDate") String startDate, @Param("endDate") String endDate, Pageable pageable);
}
