'use client'

import { useEffect, useState } from 'react'
import { TableList } from './table/table-list'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { columns } from '../dashboard/table/data-table/columns'
import { getClientAPI } from '@/apis/client'
import { UserData } from '@/types'

export default function DashboardPage () {
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.userData)
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    getClientList('1')
  }, [])

  function getClientList (page: string) {
    dispatch(
      getClientAPI({
        page: page
      })
    ).then(res => {})
  }

  useEffect(() => {
    if(userData.userList){
      setData(userData.userList);
    }
  }, [userData])

  // console.log('data', userData)
  return (
    <>
      <div className=''>
        <TableList data={data? data : []} columns={columns} getClientList={getClientList}></TableList>
      </div>
    </>
  )
}
