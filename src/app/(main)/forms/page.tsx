'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const reviewers = [
    'Eddie Lake',
    'Jamik Tashpulatov',
    'Sophia Martinez',
    'Raj Patel',
]

const types = ['Narrative', 'Technical content', 'Legal', 'Research', 'Visual']
const statuses = ['Done', 'In Process'] as const

const schema = z.object({
    title: z.string().min(3, 'กรอกชื่อหัวข้ออย่างน้อย 3 ตัวอักษร'),
    type: z.enum([
        'Narrative',
        'Technical content',
        'Legal',
        'Research',
        'Visual',
    ], { message: 'เลือกประเภทเอกสาร' }),
    status: z.enum(statuses, { message: 'เลือกสถานะ' }),
    target: z.number().min(0, 'ต้องมากกว่าหรือเท่ากับ 0'),
    limit: z.number().min(0, 'ต้องมากกว่าหรือเท่ากับ 0'),
    reviewer: z.string().min(1, 'เลือกผู้ตรวจ'),
    accept: z.boolean().refine((v) => v === true, 'กรุณายอมรับเงื่อนไข'),
})

type FormValues = z.infer<typeof schema>

export default function Page() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema) as any,
        defaultValues: {
            title: '',
            type: 'Narrative',
            status: 'Done',
            target: 0,
            limit: 0,
            reviewer: '',
            accept: false,
        },
        mode: 'onBlur',
    })

    const [result, setResult] = useState<FormValues | null>(null)

    function onSubmit(values: FormValues) {
        setResult(values)
    }

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>สร้างเอกสารใหม่ (Form + Validation)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>ชื่อหัวข้อ</FormLabel>
                                            <FormControl>
                                                <Input placeholder="เช่น Executive summary" {...field} />
                                            </FormControl>
                                            <FormDescription>กรอกชื่อหัวข้อเอกสาร</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ประเภท</FormLabel>
                                                <FormControl>
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger className="w-full"><SelectValue placeholder="เลือกประเภท" /></SelectTrigger>
                                                        <SelectContent>
                                                            {types.map((t) => (
                                                                <SelectItem key={t} value={t}>{t}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>สถานะ</FormLabel>
                                                <FormControl>
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger className="w-full"><SelectValue placeholder="เลือกสถานะ" /></SelectTrigger>
                                                        <SelectContent>
                                                            {statuses.map((s) => (
                                                                <SelectItem key={s} value={s}>{s}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="reviewer"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ผู้ตรวจ</FormLabel>
                                                <FormControl>
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger className="w-full"><SelectValue placeholder="เลือกผู้ตรวจ" /></SelectTrigger>
                                                        <SelectContent>
                                                            {reviewers.map((r) => (
                                                                <SelectItem key={r} value={r}>{r}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="target"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Target</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        inputMode="numeric"
                                                        placeholder="ตัวเลข"
                                                        value={field.value}
                                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="limit"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Limit</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        inputMode="numeric"
                                                        placeholder="ตัวเลข"
                                                        value={field.value}
                                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="accept"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex items-center gap-3">
                                                    <Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(Boolean(v))} />
                                                    <FormLabel className="m-0">ยอมรับเงื่อนไขการส่งข้อมูล</FormLabel>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex items-center gap-3">
                                    <Button type="submit">บันทึก</Button>
                                    <Button type="button" variant="outline" onClick={() => form.reset()}>ล้างค่า</Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>ผลลัพธ์</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {result ? (
                            <pre className="rounded-md border p-3 text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
                        ) : (
                            <div className="text-muted-foreground text-sm">กรอกฟอร์มแล้วกดบันทึกเพื่อดูผลลัพธ์ที่นี่</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
