'use client'

import { useEffect, useState } from 'react'
import { TableList } from './table/table-list'
import { useAppDispatch } from '@/lib/hook'
import {columns} from '../dashboard/table/data-table/columns'

const DATA = [
  {
    id: '7',
    email: 'Goro@gmail.com',
    first_name: 'Adam',
    Last_name: 'Walker',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  },
  {
    id: '7',
    email: 'Goro@gmail.com',
    first_name: 'Adam',
    Last_name: 'Walker',
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  }
]

export default function DashboardPage () {
  const dispatch = useAppDispatch()
  const [data, setData] = useState(DATA)

  useEffect(() => {
    getClientList()
  }, [])

  function getClientList () {}

  console.log('data', data)
  console.log('columns', columns)
  return (
    <>
      <div className=''>
        <TableList data={data} columns={columns}></TableList>
      </div>
    </>
  )
}
