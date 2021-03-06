import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AbouUs';
import Recruitment from './Recruitment';
import ContactPage from './ContactPage';
import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/aboutUs' component={AboutUs} />
                    <Route path = "/recruitment" component = {Recruitment}/>
                    <Route path = "/contactUs" component = {ContactPage}/>
                    <Redirect exact to="/home" />
                </Switch>
                <Footer/>
            </React.Fragment>
            );

    }

}


export default Main;