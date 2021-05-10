import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

const stateValidator = ({ getState }) => next => action => {
  next(action);

  //this code snippet will run after the state is updated
  if(!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};

export default stateValidator;