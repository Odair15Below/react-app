import { Box, Grid, Radio, Typography } from '@material-ui/core';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { getSelectedOptions, selectOption } from '../store/app';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={0}>{children}</Box>}
        </Typography>
    );
}

const Option = ({ opt, cat }) => {
    const dispatch = useDispatch();
    const handleOptionChange = (option) => {
        dispatch(selectOption(option));
    };

    const selectedOptions = useSelector(getSelectedOptions);

    const checked = selectedOptions !== undefined
        && selectedOptions[cat] !== undefined
        && selectedOptions[cat].option === opt.description;

    return (
        <Grid container direction='row' justifyContent="flex-start" alignItems="center"
            onClick={() => handleOptionChange({ category: cat, option: opt.description, points: opt.points })}
            sx={{ paddingBottom: '20px', cursor: 'pointer' }}>
            <Grid item> 
                <Radio checked={checked} size="small" />
            </Grid>
            <Grid item xs={10}> 
                <Typography variant='body1' component='span'>{opt.description} </Typography>
                <Typography variant='body1' component='span' fontWeight='fontWeightLight'>({opt.points} points)</Typography>
            </Grid>
        </Grid>
    )
}



export default function CategoryTabContent({ category, value, index }) {

    return (
        <TabPanel key={uuid()} value={value} index={index} p={2}>
            <Typography variant='subtitle1' 
                fontWeight='fontWeightMedium'
                color="text.secondary"
                sx={{ padding: '20px 0' }}>
                {category.headLineQuestion}
            </Typography>
            <Typography component='div'>
                {category.options.map((opt) => <Option key={uuid()} cat={category.category} opt={opt} />)}
            </Typography>
        </TabPanel>)
}