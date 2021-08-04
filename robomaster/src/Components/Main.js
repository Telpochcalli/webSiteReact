import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Team from './Team';
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
                    <Route path='/aboutUs' component={Home} />
                    <Route path='/team' component={Team} />
                    <Redirect to="/aboutUs" />
                </Switch>
                <Footer/>
            </React.Fragment>
            );

    }

}


export default Main;