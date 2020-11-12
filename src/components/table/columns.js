import { ColumnFilter } from './Table'

export const columns = [
  {
  Header: 'Locations List',
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
        Filter: ''
      },
      {
        Header: 'Category',
        accessor: 'category',
        Filter: ColumnFilter
      },
      {
        Header: 'Address',
        accessor: 'address',
        Filter: ''
      },
      {
        Header: 'Longitude',
        accessor: 'longitude',
        Filter: ''
      },
      {
        Header: 'Latitude',
        accessor: 'latitude',
        Filter: ''
      },
    ],
  },
]
