import { useState } from 'react';

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (val) => {
    if (val.target) {
      setValue(val.target.value);
    } else {
      setValue(val);
    }
  };
  return { value, onChange };
};
