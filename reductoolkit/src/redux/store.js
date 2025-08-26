import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import todoReducer from './slices/counter/todoSlice/todoSlice';


export const store = configureStore({
  reducer: {
    counter : counterSlice,
    todos : todoReducer
  },
}
);
