import { ColumnFilter } from './Table'

export const columns = [
  {
  Header: 'Locations List',
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
      },
      {
        Header: 'Category',
        accessor: 'category',
        Filter: ColumnFilter
      },
      {
        Header: 'Address',
        accessor: 'address',
        Filter: ColumnFilter
      },
      {
        Header: 'Longitude',
        accessor: 'longitude',
        Filter: ColumnFilter
      },
      {
        Header: 'Latitude',
        accessor: 'latitude',
        Filter: ColumnFilter
      },
    ],
  },
]
