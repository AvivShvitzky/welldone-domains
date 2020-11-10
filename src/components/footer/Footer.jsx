// libraries and css
import React from 'react';

// components
import RouterLink from '../router-link/RouterLink'

// consts
import { 
  ENTITY_CATEGORIES, ENTITY_LOCATIONS,
  PATH_CATEGORY, PATH_LOCATIONS
} from '../../consts'

// store
import { useRecoilState } from "recoil";
import { currentEntity as currentEntityAtom } from '../../store/atoms'

function Footer() {
  const [currentEntity, setCurrentEntity] = useRecoilState(currentEntityAtom)

  const handleNavigate = newEntity => {
    setCurrentEntity(newEntity)
  }

  return (
    <div className="footer">
      <RouterLink 
        onClickHandler={handleNavigate}
        entity={ENTITY_LOCATIONS}
        path={PATH_LOCATIONS}
      >
        Locations
      </RouterLink>
      <RouterLink 
        onClickHandler={handleNavigate}
        entity={ENTITY_CATEGORIES}
        path={PATH_CATEGORY}
      >
        Categories
      </RouterLink>
    </div>
  );
};

export default Footer;
