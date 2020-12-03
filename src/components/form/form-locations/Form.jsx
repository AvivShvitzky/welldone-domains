// libraries and css
import React, { useState, useEffect } from 'react';
import '../Form.css'

// components
import Input from '../../input/Input'
import Select from '../../select/Select'

// consts
import { 
  TOAST_SUCCESS, 
  TOAST_WARNING,
  NEW_CATEGORY_SUCCESS,
  NEW_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  CREATE_TOAST,
  DELETE_TOAST
} from '../../toast/Toast.consts'
import { NEW_CATEGORY, EDIT_CATEGORY } from '../../../consts'

import useToast from '../../toast/Toast'

function Form({ clickHandler, currentPage, categories, location }) {
  const [locationName, setLocationName] = useState('')
  const [categoryName, setCategoryName] = useState('playgrounds')
  const [address, setAddress] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')

  const toast = useToast()

  // initial
  useEffect(() => {
    if (location) {
      setLocationName(location.name)
      setCategoryName(location.category)
      setAddress(location.address)
      setLongitude(location.longitude)
      setLatitude(location.latitude)
    }
  },[location])

  // clean up
  useEffect(() => {
    return () => {
      toast(DELETE_TOAST)
    };
  }, []);

  const onSubmitHandler = e => {
    e.preventDefault();
    const success = clickHandler({
      name: locationName,
      category: categoryName,
      address,
      longitude,
      latitude
    });
    const toastTuple = () => {
      if (currentPage === NEW_CATEGORY) {
        return [NEW_CATEGORY_SUCCESS, NEW_CATEGORY_FAIL]
      } else if (EDIT_CATEGORY) {
        return [EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAIL]
      }
    }
    // trigger a toast
    if (success) {
      toast(CREATE_TOAST, TOAST_SUCCESS, toastTuple()[0])
    } else {
      toast(CREATE_TOAST, TOAST_WARNING, toastTuple()[1])
    }
    // clean data
    setLocationName('')
    setCategoryName('')
    setAddress('')
    setLongitude('')
    setLatitude('')
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

export default Form;
