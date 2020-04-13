import React from 'react';
import './App.css';
import TableMUI from "./components/Table";
import CustomTabs from "./components/Tabs";
import {AccountDetails} from "./components/AccountDetails";
import {StreamLog} from "./components/StreamLog";
import ChatContainer from "./components/Chat";

function App() {
    const proxyUrl = process.env.REACT_APP_API_URL;

    console.log(proxyUrl);

    return (
        <div className="container">
            <CustomTabs
                tab1={<AccountDetails url={proxyUrl}/>}
                tab2={<TableMUI url={proxyUrl}/>}
                tab3={<StreamLog url={proxyUrl}/>}
                tab4={<ChatContainer url={proxyUrl}/>}
            />
        </div>
    );
}

export default App;
