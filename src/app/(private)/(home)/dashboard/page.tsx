'use client'

import { useEffect, useState } from 'react'
import { TableList } from './table/table-list'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { columns } from '../dashboard/table/data-table/columns'
import { getClientAPI } from '@/apis/client'
import { UserData } from '@/types'
import { PAGE_ONE, USER_UNAUNTHETICATED } from '@/lib/constant'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function DashboardPage () {
  const dispatch = useAppDispatch()
  const userData = useAppSelector(state => state.userData)
  const [data, setData] = useState<UserData[]>([])
  const { data: session, status } = useSession()

  if (!session) {
    useRouter().push('/error')
  }

  useEffect(() => {
    getClientList(PAGE_ONE)
  }, [])

  function getClientList (page: string) {
    dispatch(
      getClientAPI({
        page: page
      })
    ).then(res => {})
  }

  useEffect(() => {
    if (userData.userList) {
      setData(userData.userList)
    }
  }, [userData])

  return (
    <>
      <div className=''>
        <TableList
          data={data ? data : []}
          columns={columns}
          getClientList={getClientList}
        ></TableList>
      </div>
    </>
  )
}
