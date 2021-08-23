import { DIRECTORIES_PAGE } from "@/constants/routes";
import { Pagination } from "antd";
import Item from "antd/lib/list/Item";
import { CategoriesCard } from "./CardComponent";

const BusinessCategories = (props) => {
  return (
    <>
      <div className="categories-list">
        {props.businessList.map((list, i) => (
          <CategoriesCard
            key={i}
            category={list.category}
            logo={list.icon}
            location={list.formatted_address}
            name={list.name}
            business_status={list.business_status}
            phone={list.formatted_phone_number}
            email={list.emails}
            url={DIRECTORIES_PAGE + '/' + list.place_id}
            rating={list.rating}
            img_url={list.image}
          />
        ))}
      </div>
      <div className="text-center py-5">
        <Pagination
          current={props.currentPage}
          onChange={props.onPageChange}
          pageSize={props.pageSize}
          showSizeChanger={false}
          size="small"
          total={props.list.length}
          defaultPageSize="10"
          hideOnSinglePage={true}
          defaultCurrent="1"
        />
      </div>
    </>
  );
};

export default BusinessCategories;
