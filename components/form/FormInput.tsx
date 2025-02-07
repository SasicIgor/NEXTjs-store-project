import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

const FormInput = ({
  name,
  type = "text",
  label,
  placeholder,
  defaultValue = undefined,
}: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormInput;
