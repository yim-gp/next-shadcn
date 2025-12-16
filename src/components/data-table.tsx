"use client"

// ลบ TanStack Table ออก
import { z } from "zod"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "./ui/pagination"
import { useState } from "react"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "./ui/button"
import { IconDotsVertical } from "@tabler/icons-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})

export function DataTable({ data }: { data: z.infer<typeof schema>[] }) {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const pageCount = Math.ceil(data.length / pageSize);
  const pagedData = data.slice((page - 1) * pageSize, page * pageSize);
  if (pagedData.length < pageSize) {
    for (let i = pagedData.length; i < pageSize; i++) {
      const lastId = pagedData.length > 0 ? pagedData[pagedData.length - 1].id : (data.length > 0 ? data[data.length - 1].id : 0);
      pagedData.push({ id: lastId + (i - pagedData.length + 1), header: '', type: '', status: '', target: '', limit: '', reviewer: '' });
    }
  }
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow style={{ height: '48px' }}>
            <TableHead style={{ textAlign: 'center' }}>ID</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Section Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Limit</TableHead>
            <TableHead>Reviewer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">No results.</TableCell>
            </TableRow>
          ) : (
            pagedData.map((row, idx) => {
              const isLast = idx === pagedData.length - 1;
              const hasData = row.header !== '';
              return (
                <TableRow
                  key={row.id}
                  className={`min-h-12 h-12 align-middle${isLast && hasData ? ' border-b' : ''}`}
                >
                  <TableCell style={{ textAlign: 'center' }}>{hasData ? row.id : null}</TableCell>
                  <TableCell>{row.header}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.target}</TableCell>
                  <TableCell>{row.limit}</TableCell>
                  <TableCell>{row.reviewer === 'Assign reviewer' ? <>   <Select>
                    <SelectTrigger
                      className="w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
                      size="sm"
                      id={`${row.id}-reviewer`}
                    >
                      <SelectValue placeholder="Assign reviewer" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                      <SelectItem value="Jamik Tashpulatov">
                        Jamik Tashpulatov
                      </SelectItem>
                    </SelectContent>
                  </Select></> : row.reviewer}</TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
      <Pagination className="my-2">
        <PaginationContent>
          <PaginationItem isActive={page >= 2} onClick={() => setPage(prev => Math.max(prev - 1, 1))} aria-disabled={page <= 1}>
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem isActive>
            <p className="px-2">{page}</p>
          </PaginationItem>
          <PaginationItem isActive>
            <PaginationEllipsis />
          </PaginationItem>
          <p className="px-2">{pageCount}</p>
          <PaginationItem isActive={page < pageCount} onClick={() => setPage(prev => prev + 1)} aria-disabled={page >= pageCount}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div >
  )
}



