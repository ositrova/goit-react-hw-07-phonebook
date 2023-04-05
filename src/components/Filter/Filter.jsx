import { Contanier, Input } from './Filter.style';

import { useDispatch } from "react-redux";
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
      const filtered = event.target.value;
      dispatch(setFilter(filtered));
  };
  return (
    <Contanier>
      <label htmlFor="">Find contacts by name</label>
      <Input
        name="filter"
        onChange={onChange}
        type="text"
        placeholder="Сontact search ..."
      />
    </Contanier>
  );
};



