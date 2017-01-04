import React from "react";
import Footer from './Footer.jsx';

export default class App extends React.Component{


    render() {
        return (
            <div id="container">
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}