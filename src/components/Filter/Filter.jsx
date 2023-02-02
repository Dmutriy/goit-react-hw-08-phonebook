import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterChange } from '../../redux/filters/filtersSlice';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const onWrite = e => {
    dispatch(filterChange(e.currentTarget.value));
  };

  return (
    <TextField
      margin="normal"
      fullWidth
      id="name"
      label="Username"
      name="name"
      autoFocus
      onChange={onWrite}
      placeholder="Search"
    />
  );
};

Label.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
