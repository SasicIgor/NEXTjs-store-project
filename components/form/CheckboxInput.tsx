'use client'

import { Checkbox } from "../ui/checkbox";

type CheckboxInputProps={
    name:string;
    label:string;
    defaultValue?:boolean;
};


const CheckboxInput = ({name, label, defaultValue=false}:CheckboxInputProps) => {
  return (
    <div className="flex items-center space-x-2">
        <Checkbox id={name} name={name} defaultChecked={defaultValue}/>
        <label htmlFor={name} className="text-sm leading-none capitalize peer-disabled:opacity-70 peer-disabled:cursor-not-allowed">{label}</label>
    </div>
  )
}

export default CheckboxInput
