import { SectionCards } from "@/components/section-cards"
import data from "./data.json"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"

export default function Page() {
    return (
        <>

            <SectionCards />
            <div className="px-4  lg:px-6">
                <ChartAreaInteractive />
                <div className="h-6" />
                <DataTable data={data} />
            </div>
        </>
    )
}
