import Fetch from './fetch';
import _ from 'lodash';


export default class CreateActionCreator {

    static read = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.get(options), type);

    static dispatch = (promise, type) => dispatch => {
        promise
            .then(response => dispatch({
                type,
                payload: _.isEmpty(response) ? [] : response,
            }))
            .catch(error => dispatch({
                type: `${type}_FAILURE`,
                payload: error,
            }));

        return promise;
    };

};
