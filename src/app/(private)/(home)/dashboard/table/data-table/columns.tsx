'use client'

import { Button } from '@/components/ui/button'
import { User, UserData } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { useState } from 'react'; 

function maskedEmail(email:string) {
  const emailLength = email.length
  let masked = ''

  for (let i = 1; i < emailLength - 1; i++) {
    masked += "*";
  }

  return masked
}

export const columns: Array<ColumnDef<UserData>> = [
  {
    accessorKey: 'id',
    header: 'User ID',
    cell: ({ row }) => <div className='w-36'>{row.getValue('id')}</div>
  },
  {
    accessorKey: 'full_name',
    header: 'Full Name',
    cell: ({ row }) => (
      <div className='w-36'>
        {`${row.original.first_name} ${row.original.last_name}`}
      </div>
    )
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      const [isMasked, setIsMasked] = useState(true);

      const toggleMask = () => {
        setIsMasked(prevState => !prevState);
      };

      return (
        <div className='w-36 flex row items-center'>
          <div className='mr-4'>
            {isMasked ? maskedEmail(row.getValue('email')) : row.getValue('email')}
          </div>
          <Button onClick={toggleMask}>Toggle</Button>
        </div>
      );
    }
  },
  {
    accessorKey: 'avatar',
    header: 'Profile Picture',
    cell: ({ row }) => (
      <div className='w-36'>
        <Image
          alt='profile picture'
          width={50}
          height={50}
          src={row.getValue('avatar')}
        ></Image>
      </div>
    )
  }
]
