import {START, SUCCESS, FAIL, GET_REQUEST} from '../constants';

const defData={
    data: [],
    loaded: false,   // in this assignment loaded/loading is not necessary but this will be good whith remote server work
    loading: false
};

export default (dataState=defData, action)=>{
    const {type, payload}=action;
    switch(type){
        case(GET_REQUEST+START):
            return Object.assign({},{...dataState, loading: true});

        case(GET_REQUEST+SUCCESS):
            return Object.assign({},{data: payload.response,
                loaded: true,
                loading: false
            })
    }
    return dataState
}