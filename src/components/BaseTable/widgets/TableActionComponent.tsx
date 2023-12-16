import { forwardRef } from "react";
import ClickAway from "@/components/ClickAway";
import Btn from "@/components/Btn";
import { Edit, Check, Delete, MoreVert } from "@mui/icons-material";
import { ITableData } from "@/interface";

const TableActionsComponent = ({ data }: ITableData) => {
  // console.log("Table actions data", data)

  return (
    <ClickAway
      Component={
        forwardRef<HTMLDivElement, {onClick: () => void, open: boolean}>(
          ({ onClick, open }, ref) => (
            <div className="relative" ref={ref}>
              <Btn className="bg-transparent p-2" click={onClick}>
                <MoreVert />
              </Btn>

              {open && (
                <ul className="absolute bg-white shadow-md z-20 w-32 right-0 rounded overflow-hidden border">

                  <li className="hover:bg-green-100 hover:text-green-500" role="button">
                    <Edit className="mr-1 text-sm" /> Edit
                  </li>
                  <li className="hover:bg-green-100 hover:text-green-500" role="button">
                    <Check className="mr-1 text-sm" /> Activate
                  </li>
                  <li className="hover:bg-green-100 hover:text-green-500" role="button">
                    <Delete className="mr-1 text-sm" /> Delete
                  </li>
                </ul>
              )}
            </div>
          )
        )
      }
    />
  )
}

export default TableActionsComponent;