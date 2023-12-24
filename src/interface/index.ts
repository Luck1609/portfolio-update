import { Query, QueryResult } from "@material-table/core"
import {  ReactElement, ReactNode } from "react"

interface IBaseTableProps extends IToolBar {
  columns: [{
    field: string,
    title: string
  }],
  TableActions?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined,
  tableData: object[] | ((query: Query<object>) => Promise<QueryResult<object>>),
  options?: object[],
  showActions?: boolean,
}

interface IToolBar {
  title: string | ReactElement, 
  props: object[]
}

interface IBtn { 
  children: ReactNode, 
  className?: string, 
  type?: "button" | "submit" | "reset" | undefined,
  disabled?: boolean,
  click?: () => void
}

interface ITableColumns {
  title: string,
  field: string,
  render?: ({ stack }: {stack: string[]}) => JSX.Element
}

interface ITableData  {
  title: string,
  img: string,
  stack: string[]
}

interface IEditorProps {
  name: string,
  className?: string,
  label?: string,
  inline?: boolean
}

interface IAbout {
  [key: string]: string
}

interface IStringObj {
  [key: string]: string
}

interface IReducerActions {
  type: string,
  payload: object
}

interface IReducerState {
  forms: {
    title: string,
    values: object,
    field: string
  },
  user: {
    name: string,
    email: string
  } | null,
  notice: {
    title: string,
    id: string
  }
}

export type {
  IBaseTableProps,
  IToolBar,
  IBtn,
  ITableColumns,
  ITableData,
  IEditorProps,
  IAbout,
  IStringObj,
  IReducerActions,
  IReducerState
}