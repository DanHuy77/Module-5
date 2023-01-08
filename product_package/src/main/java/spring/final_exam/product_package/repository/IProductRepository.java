package spring.final_exam.product_package.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.final_exam.product_package.model.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
}
