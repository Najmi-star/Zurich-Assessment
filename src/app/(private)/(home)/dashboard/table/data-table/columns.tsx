'use client'

import { User } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'

export const columns: Array<ColumnDef<User>> = [
  {
    accessorKey: 'id',
    header: 'User ID',
    cell: ({ row }) => <div className='w-36'>{row.getValue('id')}</div>
  },
  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className='w-36'>
        {row.getValue('first_name')} {row.getValue('last_name')}
      </div>
    )
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <div className='w-36'>{row.getValue('email')}</div>
  },
  {
    accessorKey: 'avatar',
    header: 'Profile Picture',
    cell: ({ row }) => (
      <div className='w-36'>
        <Image alt='profile picture' width={50} height={50} src={row.getValue('avatar')}></Image>
      </div>
    )
  }
]
