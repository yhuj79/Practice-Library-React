import styled from 'styled-components';
import React from "react";
import { AppBar, Tabs, Tab, Box } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import NewspaperIcon from '@material-ui/icons/Assignment';
import AppleIcon from '@material-ui/icons/Apple';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import Home from './Home';
import News from './News';
import Apple from './Apple';
import Photo from './Photo';
import FullCal from './FullCal';

const StyledAppBar = styled(AppBar)`
    &&{
        background: #B2CCFF; color: white;
        box-shadow: none;
    }
    & .MuiTabs-indicator {
        background: #1890ff; height: 5px; border-radius: 3px;
    }
    & .MuiTabs-flexContainer {
        display: flex; justify-content: space-between;
    }
    & .MuiSvgIcon-root, .MuiButtonBase-root {
        font-size: 1.5rem;
        font-weight: 550;
    }
    & .MuiButtonBase-root:hover {
        opacity: 1;
    }
`;
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}
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
                    <Tab icon={<NewspaperIcon />} label="News" {...a11yProps(1)} />
                    <Tab icon={<AppleIcon />} label="Apple" {...a11yProps(2)} />
                    <Tab icon={<InsertPhotoIcon />} label="Photo" {...a11yProps(3)} />
                    <Tab icon={<CalendarTodayIcon />} label="Calendar" {...a11yProps(4)} />
                </Tabs>
            </StyledAppBar>
            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <News />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Apple />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Photo />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <FullCal />
            </TabPanel>
        </Box>
    );
};
export default BasicTab;