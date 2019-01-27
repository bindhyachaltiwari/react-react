import React,{Component} from 'react';
import Adult from './Adult';
import Child from './Child';
import Checkbox from './Checkbox';
export default class RoomOne extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'fromRoomOne',
            checkedBool: false,
            checkState:false
        }
        this.handleChecked = this.handleChecked.bind(this);
        
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.enableOne !==nextProps.enableOne) {
            this.setState({checkedBool: true,checkState:true});
        }
    }
    
    handleChecked () {
        this.setState({checkedBool: !this.state.checkedBool,checkState:!this.state.checkState});
      }    
    render() {
        return(
            <div className="container">
            RoomOne
                <Checkbox onChangeCall={ this.handleChecked} value={this.state.checkState}/>
                {(this.state.checkedBool) && <Adult myProp={this.state.name}/>}
            {(this.state.checkedBool) && <Child myProp={this.state.name}/>}
            </div>
        );
    }
}