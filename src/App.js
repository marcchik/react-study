import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile'
                           element={ <Profile
                               state={ props.state.profilePage } /> } />
                    <Route path='/dialogs'
                           element={ <Dialogs
                               state={props.state.dialogsPage} /> } />
                </Routes>
            </div>
        </div>
    );
}

export default App;
