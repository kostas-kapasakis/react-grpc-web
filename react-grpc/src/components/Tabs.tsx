import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export type TabsProps = {
    tab1:JSX.Element,
    tab2:JSX.Element,
    tab3:JSX.Element
    tab4:JSX.Element
}

export default function CustomTabs(props: TabsProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Unary Call Single Account" {...a11yProps(0)} />
                    <Tab label="Unary Call Accounts Array" {...a11yProps(1)} />
                    <Tab label="Server Stream Call" {...a11yProps(2)} />
                    <Tab label="Chat - Bidirectional Stream" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {props.tab1}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.tab2}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {props.tab3}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {props.tab4}
            </TabPanel>
        </div>
    );
}