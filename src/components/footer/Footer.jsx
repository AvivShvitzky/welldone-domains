// libraries and css
import React from 'react';

// components
import RouterLink from '../router-link/RouterLink'

// consts
import { 
  CATEGORIES, LOCATIONS,
  PATH_CATEGORY, PATH_LOCATIONS
} from '../../consts'

// store
import { useDispatch } from 'react-redux';
import { setCurrentEntity } from '../../store/features/context'
// import { useRecoilState } from "recoil";
// import { currentEntity as currentEntityAtom } from '../../store/atoms'

function Footer() {
  const dispatch = useDispatch()

  const handleNavigate = currentEntity => {
    dispatch(setCurrentEntity(currentEntity))
  }

  return (
    <div className="footer">
      <RouterLink 
        onClickHandler={handleNavigate}
        entity={LOCATIONS}
        path={PATH_LOCATIONS}
      >
        Locations
      </RouterLink>
      <RouterLink 
        onClickHandler={handleNavigate}
        entity={CATEGORIES}
        path={PATH_CATEGORY}
      >
        Categories
      </RouterLink>
    </div>
  );
};

export default Footer;
