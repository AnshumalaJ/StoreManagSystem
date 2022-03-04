package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="product_table")
public class Product  extends BaseEntity{
	@Column(length = 100)
	private String prodDesc;
	private int prodPrice;
	private int prodQty;
	@Column(length = 20)
	private String productName;
	private int discount;
	private double finalPrice;
	private int grams;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", nullable = false)
	private Category productCategory;
	
	@ManyToMany
	@JoinTable(name="salesman_product",joinColumns=@JoinColumn(name="product_id"),inverseJoinColumns=@JoinColumn(name="salesman_id"))
	private Set<Salesman> salesman=new HashSet<>();
	
	@ManyToMany
	@JoinTable(name="supplier_product",joinColumns=@JoinColumn(name="product_id"),inverseJoinColumns=@JoinColumn(name="supplier_id"))
	private Set<Supplier> supplier=new HashSet<>();
}
