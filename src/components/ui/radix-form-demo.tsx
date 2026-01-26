import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const schema = z.object({
  agree: z.boolean().refine(val => val, { message: "ต้องยอมรับเงื่อนไข" }),
  notifications: z.boolean(),
  gender: z.enum(["male", "female", "other"], { message: "กรุณาเลือกเพศ" }),
  country: z.string().min(1, "กรุณาเลือกประเทศ"),
});

type FormValues = z.infer<typeof schema>;

export function RadixFormDemo() {
  const [open, setOpen] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      agree: false,
      notifications: false,
      gender: undefined,
      country: "",
    },
  });

  function onSubmit(data: FormValues) {
    setOpen(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6 p-6 border rounded-lg shadow">
      <div>
        <Label htmlFor="agree">ยอมรับเงื่อนไข</Label>
        <Controller
          name="agree"
          control={control}
          render={({ field }) => (
            <Checkbox id="agree" checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
        {errors.agree && <div className="text-red-500 text-sm mt-1">{errors.agree.message}</div>}
      </div>
      <div>
        <Label htmlFor="notifications">เปิดแจ้งเตือน</Label>
        <Controller
          name="notifications"
          control={control}
          render={({ field }) => (
            <Switch id="notifications" checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>
      <div>
        <Label>เพศ</Label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-4 mt-2">
              <RadioGroupItem value="male" id="male" /> <Label htmlFor="male">ชาย</Label>
              <RadioGroupItem value="female" id="female" /> <Label htmlFor="female">หญิง</Label>
              <RadioGroupItem value="other" id="other" /> <Label htmlFor="other">อื่นๆ</Label>
            </RadioGroup>
          )}
        />
        {errors.gender && <div className="text-red-500 text-sm mt-1">{errors.gender.message}</div>}
      </div>
      <div>
        <Label>ประเทศ</Label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกประเทศ" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>ประเทศ</SelectLabel>
                  <SelectItem value="th">ไทย</SelectItem>
                  <SelectItem value="us">สหรัฐอเมริกา</SelectItem>
                  <SelectItem value="jp">ญี่ปุ่น</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.country && <div className="text-red-500 text-sm mt-1">{errors.country.message}</div>}
      </div>
      <div className="flex gap-2">
        <Button type="submit">ส่งข้อมูล</Button>
        <Button type="button" variant="outline" onClick={() => reset()}>ล้างฟอร์ม</Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>ส่งข้อมูลสำเร็จ</DialogTitle>
          <div className="mt-2">ขอบคุณสำหรับการกรอกข้อมูล!</div>
          <DialogClose asChild>
            <Button variant="outline">ปิด</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </form>
  );
}
