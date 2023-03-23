import { Group, Label, InputContainer } from "./form-input.styles";


function FormInput ({ label, ...otherProps }) {
    return (
        <Group>
        <InputContainer {...otherProps}/>
        {label && (
            <Label shrink= {otherProps.value.length} > {label} </Label>
        )}
        
        
        </Group>
    )
}

export default FormInput;