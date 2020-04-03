import React from 'react';
import './App.css';
import TableMUI from "./components/Table";
import CustomTabs from "./components/Tabs";
import {AccountDetails} from "./components/AccountDetails";
import {StreamLog} from "./components/StreamLog";
import ChatContainer from "./components/Chat";

function App() {
    return (
        <div className="container">
            <CustomTabs
                tab1={<AccountDetails/>}
                tab2={<TableMUI />}
                tab3={<StreamLog />}

            />
        </div>
    );
}

export default App;
