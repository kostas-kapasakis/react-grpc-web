import React, {ChangeEvent, useEffect, useState} from 'react';
import {Account, GetAccountRequest} from "../proto/accounts_pb";
import {AccountServiceClient} from "../proto/accounts_pb_service";
import {Button, Card, CardContent, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
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
    input:{
        marginBottom: "20px",
        marginTop:"20px"
    }
});

export type AccountDetailsProps = {
    account:Account | undefined
}

export const AccountDetails = () => {
    let client: AccountServiceClient;
    const classes = useStyles();
    const [account, setAccount] = useState<any>(null);
    const [accountIdInput, setAccountId] = useState<number | undefined>(1);


    useEffect(()=>{
        client = new AccountServiceClient("http://localhost:8080");
    },[accountIdInput]);


    const handleGetAccount = () => {
        // client = new AccountServiceClient("http://localhost:8080");

        console.log(accountIdInput);

        const request = new GetAccountRequest();
        request.setId(accountIdInput ?? 1);

        client?.getAccountById(request, (err, response) => {
            setAccount(response?.toObject().account ?? null);
        });
    };

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const id = +event.target.value;
        if(id === 0) setAccountId(undefined);
        else setAccountId(id);
    };

    return (
        <>
                <Button onClick={handleGetAccount}
                        variant="contained"
                        color="primary">
                        Get account details
                </Button>

            <br/>
                <TextField
                    className={classes.input}
                    id="filled-number"
                    label="Account id"
                    type="number"
                    value={accountIdInput}
                    onChange={handleChange}
                    variant="filled"
                 />

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                       Account Details
                    </Typography>
                    <Typography variant="h5" component="h2">{account?.name}</Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {account?.number}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {JSON.stringify(account)}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )

};