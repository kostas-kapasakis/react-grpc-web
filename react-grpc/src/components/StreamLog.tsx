import React, {useEffect, useState} from 'react';
import {AccountServiceClient} from "../proto/accounts_pb_service";
import {AppRegistrationForAccounts} from "../proto/accounts_pb";
import {Button, Card, CardContent, Grid, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {makeStyles} from "@material-ui/core/styles";

export type StreamLogProps = {
    message:any;
}

const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth:800,
        maxHeight:600

    },
    table: {
        minWidth: 650,
        maxHeight:600

    },

    button:{
        marginBottom: "20px",
    },

    cardRoot: {
        minWidth: 275,
        maxWidth:350
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export const StreamLog = () => {
    const [accounts , setAccounts] = useState<any[]>([]);
    const [streamStatus, setStreamStatus] = useState<any>({});
    let client:AccountServiceClient;
    const classes = useStyles();

    useEffect(()=>{
        client = new AccountServiceClient("http://localhost:8080");
    },[accounts]);


    const handleServerStreaming = () => {

        const appId = 'aaskldfjalsdf-asdfasdfas-asdfasdf';

        const request = new AppRegistrationForAccounts();
        request.setId(appId);

        const stream = client.registerForAccountsChanges(request);

        stream.on('data', (response) => {
            const msg = response.toObject().account;

            setAccounts(prevState => prevState.concat(msg));

        });

        stream.on('status',  (status) => {
            setStreamStatus( { code: status.code , details:status.details , metadata: status.metadata});
        });

        stream.on('end', function (end) {
            alert("End of stream");
        });
    };

    return (
        <>
            <Button onClick={handleServerStreaming}
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                Get account details
            </Button>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <TableContainer className={classes.container} component={Paper}>
                                <Table  className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Number</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {accounts?.map(((row: any) => (
                                            <TableRow key={Math.floor(Math.random() * 1000000) + 1  }>
                                                <TableCell component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.number}</TableCell>
                                            </TableRow>
                                        )))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper className={classes.paper}>
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Stream Details
                                    </Typography>
                                    <Typography variant="h5" component="h2">Received {accounts.length}</Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Stream Status
                                    </Typography>
                                    <Typography variant="body2" component="ul">
                                        <List>
                                            <ListItem>
                                                <ListItemText>
                                                    code: {streamStatus?.code}
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>
                                                    details: {JSON.stringify(streamStatus?.details)}
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText>
                                                    metadata: {JSON.stringify(streamStatus?.metadata)}
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        </>
    );
};