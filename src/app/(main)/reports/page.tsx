'use client'

import { useMemo, useState } from 'react'

import { SectionCards } from '@/components/section-cards'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import rawData from '../dashboard/data.json'

type Row = {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

const STATUS = ['All', 'Done', 'In Process'] as const

export default function Page() {
  const [status, setStatus] = useState<(typeof STATUS)[number]>('All')

  const tableData = useMemo(() => {
    const rows = (rawData as Row[])
    if (status === 'All') return rows
    return rows.filter((r) => r.status === status)
  }, [status])

  return (
    <div className="flex flex-col gap-6">
      <SectionCards />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartAreaInteractive />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>ตัวกรองข้อมูล</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">สถานะ</div>
              <Select value={status} onValueChange={(v) => setStatus(v as any)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="สถานะ" />
                </SelectTrigger>
                <SelectContent>
                  {STATUS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <div className="text-base font-semibold">รายการเอกสาร</div>
        <DataTable data={tableData} />
      </div>
    </div>
  )
}
