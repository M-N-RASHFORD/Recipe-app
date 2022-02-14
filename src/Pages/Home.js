import React from 'react';
import '../Styles/Home.css';

export default class Home extends React.Component {
    render = () => {
        return (
            <center>
                <h1>Welcome to ...MR10 Recipe-app</h1>
                <h2>Recipe app with all;</h2>
                <ul>
                    <li className="li-content">the food products</li>
                    <li className="li-content">the ingredients</li>
                    <li className="li-content">wines and dish combinations</li>
                </ul>
            </center>
        );
    }
}
