import React,{Component} from 'react';
import RoomOne from './RoomOne';
import RoomTwo from './RoomTwo';
import RoomThree from './RoomThree';
export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enableOne: false,
            enableTwo: false,
            disableThree: false
        }
        this.selectFist = this.selectFist.bind(this);
        this.selectSecFirst = this.selectSecFirst.bind(this);
    }
    selectFist() {
        console.log('seelect First');
        this.setState(
            {enableOne: true}
        )
    }
    selectSecFirst() {
        console.log('select secondFirst');
        this.setState({
                enableOne: true,
                enableTwo:true
            })
    }
    render() {
        return (
            <div>
            <RoomOne enableOne ={this.state.enableOne}/>
            <RoomTwo selectFist = {this.selectFist} enableTwo={this.state.enableTwo}/>
            <RoomThree selectSecFirst ={this.selectSecFirst}/>
            </div>
        );
    }
}