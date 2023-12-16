import { MTableToolbar } from "@material-table/core"
import { Add } from "@mui/icons-material"
import Btn from "@/components/Btn"
import { IToolBar } from "@/interface"


const ToolBar = ({title, ...props}: IToolBar) => {
  // console.log("Tool bar props", props)

  return (
    <div className="p-3 flex items-center justify-center flex-col md:flex-row">
      <h1 className="text-2xl font-semibold grow">{title}</h1>

      <MTableToolbar {...props} />

      <div className="">
        <Btn className="text-white bg-sky-500 p-3 text-sm rounded">
          <span className="flex items-center">
            <Add className="h-5" /> New {title}
          </span>
        </Btn>
      </div>
    </div>
  )
}

export default ToolBar