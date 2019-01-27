import React,{Component} from 'react';
import Adult from './Adult';
import Child from './Child';
import Checkbox from './Checkbox';
export default class RoomThree extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:"this from Room therre",
            checkedBool: false
        }
        this.handleChecked = this.handleChecked.bind(this);
    }
    handleChecked () {
        this.setState({checkedBool: !this.state.checkedBool});
        this.props.selectSecFirst();
      }  
    render() {
        return(
            <div className="container">
            RoomThree
            <Checkbox onChangeCall={ this.handleChecked}/>
            {this.state.checkedBool && <Adult myProp={this.state.name}/>}
            {this.state.checkedBool && <Child myProp={this.state.name}/>}
            
            </div>
        );
    }
}