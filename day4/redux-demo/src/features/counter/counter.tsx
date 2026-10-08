import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement,reset } from './counterSlice';
import type { AppDispatch, RootState } from '../../app/store';

export default function Counter() {
    const dispatch = useDispatch<AppDispatch>();    
 const count = useSelector((state: RootState) => state.counter.value);
    
    return (
        <div>
    
    <h1>Redux Demo</h1>
      <h1>Count: {count}</h1>

            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button onClick={() => dispatch(reset())}>
                Reset
            </button>
        </div>
    );
}
