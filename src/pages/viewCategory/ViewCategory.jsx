// libraries and css
import React, { useEffect, useState } from 'react';
// import './Categories.css';

// components
import Form from '../../components/form/Form'

// consts
import { VIEW_CATEGORY } from '../../consts'

// store
import { useRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../store/atoms'
import { useFindCategory } from '../../store/getters'


function ViewCategory(props) {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [category, setCategory] = useState({ name: '' })
  const findCategory = useFindCategory()

  useEffect(() => {
    const categoryName = props.match.params.name
    setCurrentPage(VIEW_CATEGORY)
    setCategory(findCategory(categoryName))
  }, [])

  return (
    <div className="categories">
      <div className="page__content">
        <div className="card" style={{width: '18rem', display: 'inline-block'}}>
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
            <p className="card-text">This is a mock text for a category.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
