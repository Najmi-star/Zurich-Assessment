'use client'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useAppSelector } from '@/lib/hook'
import {
  ColumnDef,
  RowModel,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>
  data: TData[]
  getClientList: (page: string) => void
}

export function TableList<TData, TValue> ({
  columns,
  data,
  getClientList
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })
  const userData = useAppSelector((state) => state.userData)

  // console.log('check', table.getRowModel())
  return (
    <>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py mt-8'>
        <div>
          Page {userData.page} of {userData.totalPage}
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            className='bg-sky-200'
            onClick={() => {
              getClientList((userData.page - 1).toString())
            }}
            disabled={userData.page == 1}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            className='bg-sky-200'
            onClick={() => {
              getClientList((userData.page + 1).toString())
            }}
            disabled={userData.page == userData.totalPage}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  )
}
