import Fetch from './fetch';
import _ from 'lodash';


export default class CreateActionCreator {

    static read = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.get(options), type);

    static clear = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.clear(options), `${type}_UPDATE`);


    static dispatch = (promise, type, id) => dispatch => {
        promise
            .then(response => dispatch({
                type,
                payload: _.isEmpty(response) ? {id} : response,
            }))
            .catch(error => dispatch({
                type: `${type}_FAILURE`,
                payload: error,
            }));

        return promise;
    };

};
