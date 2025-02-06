import { Input } from "../ui/input";
import { Label } from "../ui/label";


type FormInputProps ={
    name:string;
    type?:string;
    label?:string;
    placeholder?:string;
}

const FormInput = ({name, type='text', label, placeholder}:FormInputProps) => {
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize">
            {label || name}
        </Label>
        <Input id={name} name={name} type={type} placeholder={placeholder} required/>
    </div>
  )
}

export default FormInput
