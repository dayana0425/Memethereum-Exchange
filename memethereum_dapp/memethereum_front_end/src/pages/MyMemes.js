import React, {Component} from "react";
import {Butotn, Header, Icon, Modal} from "semantic-ui-react";

export default class MyMemes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <hr />
                    This page shows all of the memes that you have created or obtained through trading.
                <hr />
                <main className="container">
                    {/* This is where we need to fetch the memes from the blockchain */}
                </main>
            </div>
        )
    }
}