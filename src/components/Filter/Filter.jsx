import { Contanier, Input } from './Filter.style';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <Contanier>
      <label htmlFor="">Find contacts by name</label>
      <Input
        name="filter"
        onChange={handleChange}
        value={filter}
        type="text"
        placeholder="Сontact search ..."
      />
    </Contanier>
  );
};



