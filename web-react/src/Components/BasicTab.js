import styled from 'styled-components';
import React from "react";
import { AppBar, Tabs, Tab, Box } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AppleIcon from '@material-ui/icons/Apple';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import FullCal from './FullCal'; import Home from './Home';
import Apple from './Apple'; import Photo from './Photo';

const StyledAppBar = styled(AppBar)`
    &&{
        background: #B2CCFF; color: white;
        box-shadow: none;
    }
    & .MuiTabs-indicator {
        background: #1890ff;
    }
    & .MuiTabs-flexContainer {
        display: flex; justify-content: space-between;
    }
    & .MuiSvgIcon-root, .MuiButtonBase-root {
        font-size: 2rem;
        font-weight: 550;
    }
    & .MuiButtonBase-root:hover {
        opacity: 1;
    }
`;
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const BasicTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <StyledAppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                    <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
                    <Tab icon={<AppleIcon />} label="Apple" {...a11yProps(1)} />
                    <Tab icon={<InsertPhotoIcon />} label="Photo" {...a11yProps(2)} />
                    <Tab icon={<CalendarTodayIcon />} label="CALENDAR" {...a11yProps(3)} />
                </Tabs>
            </StyledAppBar>
            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Apple />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Photo />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FullCal />
            </TabPanel>
        </Box>
    );
};
export default BasicTab;