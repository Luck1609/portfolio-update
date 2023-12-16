// import { forwardRef, useState } from "react";
// import useSWR from "swr";
import MaterialTable from "@material-table/core";
// import Btn from "@/components/Btn";
import { useSearchParams } from "react-router-dom";
import ToolBar from "./widgets/Toolbar";
// import PaginationComponent from "./widgets/PaginationComponent";
import { IBaseTableProps } from "@/interface";
import TableActionsComponent from "./widgets/TableActionComponent";

const actionCls = "px-3 text-sm p-2 text-slate-400 flex items-center";

export default function BaseTable({
  title,
  TableActions,
  columns,
  tableData = [],
  options = {
    actionsColumnIndex: -1,
    pageSize: 10,
    showDetailPanelIcon: false
  },
  showActions = false,
  ...props
}: IBaseTableProps) {
  const [params, setParams] = useSearchParams();
  const page = params.get("page");


  return (
    <>
      <MaterialTable
        title=""
        options={{
          ...options,
          showTextRowsSelected: false,
        }}
        columns={columns}
        data={tableData}
        actions={[
          {
            icon: "",
            onClick: () => {}
          }
        ]}
        {...props}
        components={{
          Toolbar: (props) => <ToolBar {...props} title={title ?? "Project"} />,

          Action: ({ data }) => <>
            {
              showActions && <TableActionsComponent data={data} />
            }
          </>,

          // Pagination: (post) => (
          //   data?.pageCount 
          //     ?  <PaginationComponent
          //       page={page ?? 1}
          //       goto={changePage}
          //       pageCount={data?.pageCount}
          //     />
          //     : <></>
          // ),
        }}
      />

      {/* {deletePost && (
        <div className="z-50 w-full fixed top-0 left-0 h-full bg-black bg-opacity-50 flex items-center justify-center">
          <form className="p-10 rounded-md bg-white text-center text-red-500 relative">
            <Close
              className="absolute right-3 top-4 cursor-pointer"
              onClick={trash()}
            />
            <h4 className="text-center font-semibold text-2xl">
              Delete {title}
            </h4>
            <div className="p-5 text-lg">
              Are you sure you want to delete this {title.toLowerCase()}?
            </div>
            <Btn 
              className="bg-red-400 hover:bg-red-500 text-white p-2"click={publish(deletePost, "delete", "?force=true")}
            >
              Continue
            </Btn>
          </form>
        </div>
      )} */}
    </>
  );
}
