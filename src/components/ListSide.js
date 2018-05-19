import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, getPersonalData} from '../AC';

class ListSide extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getData();
    }

    getPersonInformation=(item)=>{
        this.props.getPersonalData(item)
    }

    render(){
        const {data, loaded, loading}=this.props;
        if(loading) return;
        const createDataList=data.map((item, i)=>
            <li key={i} className="listItem" onClick={this.getPersonInformation.bind(this, item)}>
                <img src={item.general.avatar} className="itemElement"/>
                <div className="itemElement">
                    <h5>{item.general.firstName}</h5>
                    <h6>{item.job.title}</h6>
                </div>
            </li>
        );

        return(
            <div className="side listSide">
                <input type="text" placeholder="Search..." />
                <ul>{createDataList}</ul>
            </div>
        )
    }
};

const mapStateToProps=(state)=>{
    return {
        data: state.getData.data,
        loaded: state.getData.loaded,
        loading: state.getData.data.loading
    }
};

export default connect(mapStateToProps, {getData, getPersonalData})(ListSide)