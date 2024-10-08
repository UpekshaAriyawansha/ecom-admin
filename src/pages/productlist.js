import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Color",
      dataIndex: "color",      
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

const Productlist = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i +1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      // price: `LKR ${productState[i].price}`,
      price: `${productState[i].price}`,
      action: 
        <>
        <Link className="fs-5 text-danger"
          to="/">
          <FaEdit />
        </Link>

        <Link className="ms-3 fs-5 text-danger"
          to="/">
          <MdDelete />
        </Link>
        </>
    });
  }
  console.log(data1);

    return(
        <>
           <div>
                <h3 className="mb-4 title">
                    Product List
                </h3>
                <div>
                    <Table 
                        columns={columns} 
                        dataSource={data1} 
                    />
                </div>
           </div>

        </>
    )
};

export default Productlist;