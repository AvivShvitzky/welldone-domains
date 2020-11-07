import {
  ICON_NEW, ICON_VIEW, ICON_EDIT, ICON_DELETE
} from '../../consts'

// determans if an icon would be available on a certain page
export const ICONS_AVAILABILITY = {
  CATEGORIES: [ICON_NEW], 
  CATEGORIES_CHECKED: [ICON_NEW, ICON_VIEW, ICON_EDIT, ICON_DELETE], 
  NEW_CATEGORY: [], 
  EDIT_CATEGORY: [ICON_NEW, ICON_DELETE],
  VIEW_CATEGORY: [ICON_NEW, ICON_EDIT, ICON_DELETE]
}

export const TITLE_OPTIONS = {
  CATEGORIES: 'Categories', 
  CATEGORIES_CHECKED: 'Categories', 
  NEW_CATEGORY: 'New Category', 
  EDIT_CATEGORY: 'Edit Category',
  VIEW_CATEGORY: 'View Category'
}