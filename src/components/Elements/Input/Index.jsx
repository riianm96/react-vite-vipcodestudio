import Label from "./Label"
import Input from "./Input";
const InputForm = (props)=>{
    const {label,type,placeholder,name,id} = props;
    return (
        <label className="block text-sm mt-4">
            <Label>{label}</Label>
            <Input name={name} id={id} type={type} placeholder={placeholder} />
        </label>
    )
}

export default InputForm;