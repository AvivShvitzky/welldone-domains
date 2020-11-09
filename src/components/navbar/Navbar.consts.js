import {
  ICON_NEW, ICON_VIEW, ICON_EDIT, ICON_DELETE, ICON_HOME
} from '../../consts'

// determans if an icon would be available on a certain page
export const ICONS_AVAILABILITY = {
  NOT_MOUNTED: [],
  CATEGORIES: [ICON_NEW], 
  CATEGORIES_CHECKED: [ICON_NEW, ICON_VIEW, ICON_EDIT, ICON_DELETE], 
  NEW_CATEGORY: [ICON_HOME], 
  EDIT_CATEGORY: [ICON_NEW, ICON_DELETE, ICON_HOME],
  VIEW_CATEGORY: [ICON_NEW, ICON_EDIT, ICON_DELETE, ICON_HOME]
}

export const TITLE_OPTIONS = {
  NOT_MOUNTED: '',
  CATEGORIES: 'Categories', 
  CATEGORIES_CHECKED: 'Categories', 
  NEW_CATEGORY: 'New Category', 
  EDIT_CATEGORY: 'Edit Category',
  VIEW_CATEGORY: 'View Category'
}