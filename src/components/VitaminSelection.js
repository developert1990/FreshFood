import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from '../config/materialUIStyle';

export const VitaminSelection = ({ food, index, vitamin, setVitamin }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        setVitamin({
            ...vitamin,
            vitaminData: event.target.value,
        });
    };

    return (
        <>
            {
                food.title === "Vitamin A" &&
                <FormControl key={index} className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Choose One</InputLabel>
                    <Select
                        native
                        value={vitamin.value}
                        onChange={handleChange}
                        inputProps={{
                            name: vitamin.title,
                        }}
                    >
                        <option aria-label="None" value="" />
                        {
                            food.variants.map((variant) => {
                                return (
                                    <>
                                        <option value={`${variant.id}&${variant.title}&${variant.price}`} name={variant.title}>{variant.title} - {variant.price}</option>
                                    </>
                                )
                            })
                        }
                    </Select>
                </FormControl>
            }
        </>
    )
}
