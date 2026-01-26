

<div align="center">
	<!-- <img src="/public/icon/app-icon.png" alt="App Icon" width="96" height="96" /> -->
  
	<h1>My App</h1>
	<p>✨ สร้าง Dashboard, ฟอร์ม, รายงาน และแผนภูมิแบบอินเทอร์แอคทีฟด้วย Next.js 16, React 19, Tailwind CSS และ UI Libraries ชั้นนำ ✨</p>
</div>

---

## 🚀 Features

✅ Next.js 16 (App Router)
✅ TypeScript
✅ Tailwind CSS 4
✅ Radix UI Components
✅ React Hook Form + Zod validation
✅ Recharts (charts & graphs)
✅ Modular UI components (Sidebar, Nav, Table, Card, ...)
✅ ตัวอย่างหน้า: Dashboard, Forms, Reports, Charts

---

## 🗂️ โครงสร้างโปรเจค

```text
src/
  app/                # โฟลเดอร์หลักของ Next.js app router
    (main)/           # รวมเพจหลัก: dashboard, forms, reports, charts, components
      charts/         # เพจแผนภูมิและ visualization
      components/     # เพจตัวอย่าง components
      dashboard/      # เพจ dashboard หลัก
      forms/          # เพจฟอร์มตัวอย่าง
      reports/        # เพจรายงาน
    globals.css       # CSS หลักของโปรเจค
    layout.tsx        # Layout หลักของแอป
  components/         # UI components ที่ใช้ซ้ำได้
    ui/               # กลุ่ม components UI (Button, Table, ...)
    shadcnblocks/     # Components จาก shadcn/ui blocks
  hooks/              # React custom hooks
  lib/                # ฟังก์ชัน utilities
public/               # ไฟล์ static assets (icon, รูปภาพ ฯลฯ)
```

---

## ⚡ การเริ่มต้นใช้งาน

1️⃣ ติดตั้ง dependencies

```bash
pnpm install
# หรือ npm install, yarn install
```

2️⃣ รัน development server

```bash
pnpm dev
# หรือ npm run dev, yarn dev
```

3️⃣ เปิด [http://localhost:3000](http://localhost:3000)

---

## 🛠️ คำสั่งที่ใช้บ่อย

- `pnpm dev` — รัน dev server
- `pnpm build` — สร้าง production build
- `pnpm start` — รัน production server
- `pnpm lint` — ตรวจสอบโค้ดด้วย ESLint

---

## 🎨 การปรับแต่ง

- เพิ่ม/แก้ไข UI ที่ `src/components/`
- เพิ่มเพจใหม่ใน `src/app/(main)/`
- ปรับแต่ง Tailwind ที่ `tailwind.config.ts`
- ปรับแต่ง ESLint ที่ `eslint.config.mjs`

---

## 📄 License

MIT
