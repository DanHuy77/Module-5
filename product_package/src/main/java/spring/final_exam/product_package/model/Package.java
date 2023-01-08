package spring.final_exam.product_package.model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Entity
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Pattern(regexp = "[L][H][-][0-9]{4}", message = "Mã lô hàng sai định dạng")
    private String packageCode;
    @OneToOne
    private Product product;
    @Min(value = 1, message = "Số lượng phải là số nguyên dương và lớn hơn không")
    private Integer quantity;
    private String importDate;
    private String producedDate;
    private String expireDate;

    public Package() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPackageCode() {
        return packageCode;
    }

    public void setPackageCode(String packageCode) {
        this.packageCode = packageCode;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getImportDate() {
        return importDate;
    }

    public void setImportDate(String importDate) {
        this.importDate = importDate;
    }

    public String getProducedDate() {
        return producedDate;
    }

    public void setProducedDate(String producedDate) {
        this.producedDate = producedDate;
    }

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

}
//    product?: Product;
//    quantity?: number;
//    importDate?: string;
//    producedDate?: string;
//    expireDate?: string;