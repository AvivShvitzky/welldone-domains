// libraries and css
import React, { useEffect, useState } from 'react';

// components

// consts
import { VIEW_CATEGORY } from '../../../consts'

// store
import { useSetRecoilState } from "recoil";
import { currentPage as currentPageAtom } from '../../../store/atoms'

function ViewCategory(props) {
  const setCurrentPage = useSetRecoilState(currentPageAtom);
  const [category, setCategory] = useState({ name: '' })

  useEffect(() => {
    const categoryParam = props.match.params
    setCategory(categoryParam)
    setCurrentPage(VIEW_CATEGORY)
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
