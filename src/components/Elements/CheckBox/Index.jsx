import Label from "./Label";
import Checkbox from "./CheckBox";

const AgreeCheckBox = (props)=>{
    const {label,subLabel} = props;
    return (
        <div className="flex mt-6 text-sm">
                <label className="flex items-center dark:text-gray-400">
                    <Checkbox></Checkbox>
                    <Label label={label} subLabel={subLabel} />
                </label>
        </div>
    )
}

export default AgreeCheckBox;