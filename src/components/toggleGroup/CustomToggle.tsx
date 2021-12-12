import React, {FC, useCallback} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Typography} from "@material-ui/core";

interface CustomToggleProps {
    elements: Array<{value: string, id: string}>
    setButton?: (data: string) => void
    style?: Record<string, unknown>
    toggleStyle?: {active: string, secondary: string}
}

const CustomToggle: FC<CustomToggleProps> = (props) => {
    const {elements, setButton, style, toggleStyle} = props

    const [alignment, setAlignment] = React.useState(elements[0].value);

    const handleChange = useCallback ((event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        console.log(newAlignment)
        newAlignment && setAlignment(newAlignment);
        newAlignment && setButton && setButton(newAlignment)
    }, [setButton, setAlignment]);
    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            size='small'
            onChange={handleChange}
            aria-label="text alignment"
        >
            {
                elements.map(element => (
                <ToggleButton key={element.id}
                              style={{...style,
                                  width: element.value === alignment ? 135 : 100,
                                  background: element.value === alignment ? toggleStyle?.active
                                      : toggleStyle?.secondary}}
                              value={element.value} aria-label="right aligned">
                    <Typography style={{fontSize: 12}} variant='subtitle1'>
                        {element.value}
                    </Typography>
                </ToggleButton>
                ))
            }
        </ToggleButtonGroup>
    );
};

export default CustomToggle;