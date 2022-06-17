import { DIRECTORIES_PAGE } from "@/constants/routes";
import { Pagination } from "antd";
import Item from "antd/lib/list/Item";
import { useEffect, useState } from "react";
import { CategoriesCard } from "./CardComponent";



const BusinessCategories = (props) => {

  return (
    <>
      <div className="categories-list">
        {props?.businessList?.length > 0 ? props?.businessList?.map((list, i) => (
          <CategoriesCard
            key={i}
            category={list?.attributes?.category?.data?.attributes?.name}
            // logo={list.attributes.icon}
            location={list?.attributes?.address}
            name={list?.attributes?.name}
            business_status={list?.attributes?.business_status}
            phone={list?.attributes?.phone_number}
            email={list?.attributes?.email}
            url={DIRECTORIES_PAGE + '/' + list?.attributes?.place_id}
            rating={list?.attributes?.rate}
            img_url={list?.attributes?.image}
          />
        )) : ("No data")}
      </div>
      <div className="text-center py-5 pagination-btn">

        <button className={props?.currentPage === 1 && 'disabled-btn'} disabled={props?.currentPage === 1} onClick={() => props?.setcurrentPage(props?.currentPage - 1)}>Previous</button>
        <button className={props?.currentPage === props?.list?.pagination?.pageCount && 'disabled-btn'} disabled={props?.currentPage === props?.list?.pagination?.pageCount} onClick={() => props?.setcurrentPage(props?.currentPage + 1)}>Next</button>
        <span>{props?.currentPage} of {props?.list?.pagination?.pageCount}</span>
      </div>
    </>
  );
};

export default BusinessCategories;
