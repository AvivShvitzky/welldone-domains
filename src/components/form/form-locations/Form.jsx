// libraries and css
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Form.css'

// components
import Input from '../../input/Input'
import Select from '../../select/Select'

// consts
import { 
  TOAST_SUCCESS, 
  EDIT_CATEGORY_SUCCESS,
  CREATE_TOAST,
  DELETE_TOAST
} from '../../toast/Toast.consts'

import useToast from '../../toast/Toast'

function Form({ clickHandler, categories = [], location = {} }) {
  const [locationName, setLocationName] = useState(location.name)
  const [categoryName, setCategoryName] = useState(location.category)
  const [address, setAddress] = useState(location.address)
  const [longitude, setLongitude] = useState(location.longitude)
  const [latitude, setLatitude] = useState(location.latitude)

  const toast = useToast()

  // clean up
  useEffect(() => {
    return () => {
      toast(DELETE_TOAST)
    };
  }, []);

  const onSubmitHandler = e => {
    e.preventDefault();
    clickHandler({
      ...location,
      name: locationName,
      category: categoryName,
      address,
      longitude,
      latitude
    });
    toast(CREATE_TOAST, TOAST_SUCCESS, EDIT_CATEGORY_SUCCESS)
  }
 
  return (
    <form>
      <div className="form-group">
        <Input 
          value={locationName}
          label="Location Name"
          onChangeHandler={setLocationName}
        />

        <fieldset>
        <label>Category Name</label>
          <Select 
            data={categories}
            value={categoryName}
            onChangeHandler={setCategoryName}
          />
        </fieldset>

        <Input 
          value={address}
          label="Address"
          onChangeHandler={setAddress}
        />

        <Input 
          value={longitude}
          label="Longitude"
          onChangeHandler={setLongitude}
        />

        <Input 
          value={latitude}
          label="Latitude"
          onChangeHandler={setLatitude}
        />
      </div>
      <button onClick={onSubmitHandler} type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

Form.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}

export default Form;

