
// export interface ISkills {label: string, img: string}[]
export interface ISkills {
  label: string, 
  img: string
}


export interface IKeyValue {
  [key: string]: string | number | boolean | undefined,
}

export interface IFormInput {
  name: string,
  label?: Element | string | undefined,
  placeholder?: string,
  className?: string,
  containerClassName?: string,
  type?: string,
  disabled?: boolean
}

export interface IHookFormProps {

}