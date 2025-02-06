import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const TextAreaInput = ({ name, label, placeholder }: TextAreaInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
};

export default TextAreaInput;
