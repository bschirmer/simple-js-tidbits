import React, {Component} from 'react';


class Tidbit extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tidbit">
                {this.props.children}
            </div>
        );
    }
}

export default Tidbit;
