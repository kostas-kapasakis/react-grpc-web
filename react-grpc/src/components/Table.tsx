import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {AccountServiceClient} from "../proto/accounts_pb_service";
import {GetAllAccountRequest} from "../proto/accounts_pb";
import {Button} from "@material-ui/core";

const useStyles = makeStyles({
    container:{
        maxWidth:800

    },
    table: {
        minWidth: 650,
    },

    button:{
        marginBottom: "20px",
    }
});

export default function TableMUI() {
    const [accounts, setAccounts] = useState<any[] | undefined>([]);
    let client:AccountServiceClient;
    const classes = useStyles();

    useEffect(() => {
        client = new AccountServiceClient("http://localhost:8080");
    },[accounts]);

    const handleGetAllAccountsHandle = () => {
        client = new AccountServiceClient("http://localhost:8080");
        const request = new GetAllAccountRequest();
        client?.getAllAccounts(request, (err, accounts) => {
            setAccounts(accounts?.toObject().accountsList ?? []);
        });
    };

    return (
        <>
        <Button onClick={handleGetAllAccountsHandle}
                variant="contained"
                className={classes.button}
                color="primary">
            Get account details
        </Button>
        <TableContainer className={classes.container} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts?.map(((row: any) => (
                        <TableRow key={row.id}>
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
        </>
    );
}