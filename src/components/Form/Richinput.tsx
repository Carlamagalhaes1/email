import JoditEditor from "jodit-react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
    name: string;
};

export function RichInput({ name }: Props) {
    
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
                <JoditEditor
                    value={value} 
                    config={{ readonly: false }}
                    onBlur={ (value:string) => {onBlur();  onChange (value)}}
                />
            )}
        />
    );
}
