import { createStore, applyMiddleware } from "redux";
import rootreducer from '../redux-thunk/rootreducer';
// import logger from 'redux-logger';
// import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux-saga/rootsaga';



// const middlewares = [reduxThunk];

// if (process.env.NODE_ENV ==="development"){
//     middlewares.push(logger);
// }

// const store = createStore(rootreducer, applyMiddleware(...middlewares));



const sagamiddlware = createSagaMiddleware();
const store = createStore(rootreducer, applyMiddleware(sagamiddlware));
sagamiddlware.run(rootSaga);

export default store;