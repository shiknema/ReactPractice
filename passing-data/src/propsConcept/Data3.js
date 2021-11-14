import React from "react";
import Data2 from './Data2'

class Data3 extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "Component 3"
        }
    }

    render() {
        return (
            <div>
                <h3> Data3 components direct message through Props = {this.props.directMsg}</h3>

                <h3>
                    Message from Data3 through state={this.state.text}
                    <hr />
                    Data From Data2 via component3
                    <Data2 msg={this.state.title2} />
                </h3>
            </div>
        )
    }
}
export default Data3;