'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { GitCommitVertical, Radar, TrendingUp } from "lucide-react"
import { useMemo, useState } from "react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Dot, Label, LabelList, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, RadialBar, RadialBarChart, Rectangle, Sector, XAxis, YAxis } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

export default function Page() {
    const chartData = [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 214 },
    ]
    const chartData2 = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartData3 = [
        { month: "January", desktop: 186, mobile: 80, other: 45 },
        { month: "February", desktop: 305, mobile: 200, other: 100 },
        { month: "March", desktop: 237, mobile: 120, other: 150 },
        { month: "April", desktop: 73, mobile: 190, other: 50 },
        { month: "May", desktop: 209, mobile: 130, other: 100 },
        { month: "June", desktop: 214, mobile: 140, other: 160 },
    ]
    const chartData4 = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ]
    const chartData5 = [
        { month: "January", visitors: 186 },
        { month: "February", visitors: 205 },
        { month: "March", visitors: -207 },
        { month: "April", visitors: 173 },
        { month: "May", visitors: -209 },
        { month: "June", visitors: 214 },
    ]
    const desktopData = [
        { month: "january", desktop: 186, fill: "var(--color-january)" },
        { month: "february", desktop: 305, fill: "var(--color-february)" },
        { month: "march", desktop: 237, fill: "var(--color-march)" },
        { month: "april", desktop: 173, fill: "var(--color-april)" },
        { month: "may", desktop: 209, fill: "var(--color-may)" },
    ]
    const mobileData = [
        { month: "january", mobile: 80, fill: "var(--color-january)" },
        { month: "february", mobile: 200, fill: "var(--color-february)" },
        { month: "march", mobile: 120, fill: "var(--color-march)" },
        { month: "april", mobile: 190, fill: "var(--color-april)" },
        { month: "may", mobile: 130, fill: "var(--color-may)" },
    ]
    const chartData6 = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ]
    const chartData7 = [
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    ]
    const chartData8 = [
        { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
    ]
    const chartData9 = [{ month: "january", desktop: 1260, mobile: 570 }]
    const chartData10 = [
        { date: "2024-07-15", running: 450, swimming: 300 },
        { date: "2024-07-16", running: 380, swimming: 420 },
        { date: "2024-07-17", running: 520, swimming: 120 },
        { date: "2024-07-18", running: 140, swimming: 550 },
        { date: "2024-07-19", running: 600, swimming: 350 },
        { date: "2024-07-20", running: 480, swimming: 400 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "var(--chart-1)",
        },
        mobile: {
            label: "Mobile",
            color: "var(--chart-2)",
        },
        other: {
            label: "Other",
            color: "var(--chart-3)",
        },
    } satisfies ChartConfig

    const chartConfig2 = {
        visitors: {
            label: "Visitors",
        },
        chrome: {
            label: "Chrome",
            color: "var(--chart-1)",
        },
        safari: {
            label: "Safari",
            color: "var(--chart-2)",
        },
        firefox: {
            label: "Firefox",
            color: "var(--chart-3)",
        },
        edge: {
            label: "Edge",
            color: "var(--chart-4)",
        },
        other: {
            label: "Other",
            color: "var(--chart-5)",
        },
    } satisfies ChartConfig
    const chartConfig3 = {
        visitors: {
            label: "Visitors",
        },
    } satisfies ChartConfig

    const chartConfig4 = {
        visitors: {
            label: "Visitors",
        },
        desktop: {
            label: "Desktop",
        },
        mobile: {
            label: "Mobile",
        },
        january: {
            label: "January",
            color: "var(--chart-1)",
        },
        february: {
            label: "February",
            color: "var(--chart-2)",
        },
        march: {
            label: "March",
            color: "var(--chart-3)",
        },
        april: {
            label: "April",
            color: "var(--chart-4)",
        },
        may: {
            label: "May",
            color: "var(--chart-5)",
        },
    } satisfies ChartConfig
    const chartConfig5 = {
        desktop: {
            label: "Desktop",
            color: "var(--chart-1)",
        },
        mobile: {
            label: "Mobile",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig
    const chartConfig6 = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig
    const chartConfig7 = {
        running: {
            label: "Running",
            color: "var(--chart-1)",
        },
        swimming: {
            label: "Swimming",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig
    const totalVisitorsRadial = chartData9[0].desktop + chartData9[0].mobile
    const totalVisitors = useMemo(() => {
        return chartData4.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])
    return (
        <>
            <b>
                Area Charts
            </b>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Linear</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" hideLabel />}
                                />
                                <Area
                                    dataKey="desktop"
                                    type="linear"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Step</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Area
                                    dataKey="desktop"
                                    type="step"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Legend</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData2}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="var(--color-mobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                                <ChartLegend content={<ChartLegendContent />} />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Stacked</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData2}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" />}
                                />
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="var(--color-mobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Stacked Expanded</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData3}
                                margin={{
                                    left: 12,
                                    right: 12,
                                    top: 12,
                                }}
                                stackOffset="expand"
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Area
                                    dataKey="other"
                                    type="natural"
                                    fill="var(--color-other)"
                                    fillOpacity={0.1}
                                    stroke="var(--color-other)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="var(--color-mobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Icons</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData2}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="var(--color-mobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                                <ChartLegend content={<ChartLegendContent />} />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Gradient</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData2}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                <defs>
                                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                        <stop
                                            offset="5%"
                                            stopColor="var(--color-desktop)"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="var(--color-desktop)"
                                            stopOpacity={0.1}
                                        />
                                    </linearGradient>
                                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                        <stop
                                            offset="5%"
                                            stopColor="var(--color-mobile)"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="var(--color-mobile)"
                                            stopOpacity={0.1}
                                        />
                                    </linearGradient>
                                </defs>
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="url(#fillMobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="url(#fillDesktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Axes</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={chartData2}
                                margin={{
                                    left: -20,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickCount={3}
                                />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                <Area
                                    dataKey="mobile"
                                    type="natural"
                                    fill="var(--color-mobile)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-mobile)"
                                    stackId="a"
                                />
                                <Area
                                    dataKey="desktop"
                                    type="natural"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                    stackId="a"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Separator className="my-4" />
            <b>
                Bar Charts
            </b>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Horizontal</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart
                                accessibilityLayer
                                data={chartData}
                                layout="vertical"
                                margin={{
                                    left: -20,
                                }}
                            >
                                <XAxis type="number" dataKey="desktop" hide />
                                <YAxis
                                    dataKey="month"
                                    type="category"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Multiple</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData2}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dashed" />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Stacked + Legend</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData2}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Bar
                                    dataKey="desktop"
                                    stackId="a"
                                    fill="var(--color-desktop)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="mobile"
                                    stackId="a"
                                    fill="var(--color-mobile)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    top: 20,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={12}
                                    />
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Custom Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart
                                accessibilityLayer
                                data={chartData}
                                layout="vertical"
                                margin={{
                                    right: 16,
                                }}
                            >
                                <CartesianGrid horizontal={false} />
                                <YAxis
                                    dataKey="month"
                                    type="category"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                    hide
                                />
                                <XAxis dataKey="desktop" type="number" hide />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Bar
                                    dataKey="desktop"
                                    layout="vertical"
                                    fill="var(--color-desktop)"
                                    radius={4}
                                >
                                    <LabelList
                                        dataKey="month"
                                        position="insideLeft"
                                        offset={8}
                                        className="fill-(--color-label)"
                                        fontSize={12}
                                    />
                                    <LabelList
                                        dataKey="desktop"
                                        position="right"
                                        offset={8}
                                        className="fill-foreground"
                                        fontSize={12}
                                    />
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Mixed</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig2}>
                            <BarChart
                                accessibilityLayer
                                data={chartData4}
                                layout="vertical"
                                margin={{
                                    left: 0,
                                }}
                            >
                                <YAxis
                                    dataKey="browser"
                                    type="category"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) =>
                                        chartConfig2[value as keyof typeof chartConfig2]?.label
                                    }
                                />
                                <XAxis dataKey="visitors" type="number" hide />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="visitors" layout="vertical" radius={5} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Active</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig2}>
                            <BarChart accessibilityLayer data={chartData4}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="browser"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) =>
                                        chartConfig2[value as keyof typeof chartConfig2]?.label
                                    }
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar
                                    dataKey="visitors"
                                    strokeWidth={2}
                                    radius={8}
                                    activeIndex={2}
                                    activeBar={({ ...props }) => {
                                        return (
                                            <Rectangle
                                                {...props}
                                                fillOpacity={0.8}
                                                stroke={props.payload.fill}
                                                strokeDasharray={4}
                                                strokeDashoffset={4}
                                            />
                                        )
                                    }}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Negative</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig3}>
                            <BarChart accessibilityLayer data={chartData5}>
                                <CartesianGrid vertical={false} />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel hideIndicator />}
                                />
                                <Bar dataKey="visitors">
                                    <LabelList position="top" dataKey="month" fillOpacity={1} />
                                    {chartData5.map((item) => (
                                        <Cell
                                            key={item.month}
                                            fill={item.visitors > 0 ? "var(--chart-1)" : "var(--chart-2)"}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Separator className="my-4" />
            <b>
                Line Charts
            </b>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="natural"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Linear</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="linear"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Step</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="step"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Multiple</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData2}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                <Line
                                    dataKey="desktop"
                                    type="monotone"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                                <Line
                                    dataKey="mobile"
                                    type="monotone"
                                    stroke="var(--color-mobile)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 leading-none font-medium">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                                    Showing total visitors for the last 6 months
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Dots</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="natural"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={{
                                        fill: "var(--color-desktop)",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Custom Dots</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="natural"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={({ cx, cy, payload }) => {
                                        const r = 24
                                        return (
                                            <GitCommitVertical
                                                key={payload.month}
                                                x={cx - r / 2}
                                                y={cy - r / 2}
                                                width={r}
                                                height={r}
                                                style={{ fill: "hsl(var(--background))", stroke: "var(--color-desktop)" }}
                                            />
                                        )
                                    }}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Dots Colors</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig2}>
                            <LineChart
                                accessibilityLayer
                                data={chartData4}
                                margin={{
                                    top: 24,
                                    left: 24,
                                    right: 24,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <ChartTooltip
                                    cursor={false}
                                    content={
                                        <ChartTooltipContent
                                            indicator="line"
                                            nameKey="visitors"
                                            hideLabel
                                        />
                                    }
                                />
                                <Line
                                    dataKey="visitors"
                                    type="natural"
                                    stroke="var(--sidebar-primary)"
                                    strokeWidth={2}
                                    dot={({ payload, ...props }) => {
                                        return (
                                            <Dot
                                                key={payload.browser}
                                                r={5}
                                                cx={props.cx}
                                                cy={props.cy}
                                                fill={payload.fill}
                                                stroke={payload.fill}
                                            />
                                        )
                                    }}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={chartData}
                                margin={{
                                    top: 20,
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="line" />}
                                />
                                <Line
                                    dataKey="desktop"
                                    type="natural"
                                    stroke="var(--sidebar-primary)"
                                    strokeWidth={2}
                                    dot={{
                                        fill: "var(--color-desktop)",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                >
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={12}
                                    />
                                </Line>
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Line Chart - Custom Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig2}>
                            <LineChart
                                accessibilityLayer
                                data={chartData4}
                                margin={{
                                    top: 24,
                                    left: 24,
                                    right: 24,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <ChartTooltip
                                    cursor={false}
                                    content={
                                        <ChartTooltipContent
                                            indicator="line"
                                            nameKey="visitors"
                                            hideLabel
                                        />
                                    }
                                />
                                <Line
                                    dataKey="visitors"
                                    type="natural"
                                    stroke="var(--sidebar-primary)"
                                    strokeWidth={2}
                                    dot={{
                                        fill: "var(--chart-3)",
                                    }}
                                    activeDot={{
                                        r: 6,
                                    }}
                                >
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={12}
                                        dataKey="browser"
                                        formatter={(value: keyof typeof chartConfig) =>
                                            chartConfig[value]?.label
                                        }
                                    />
                                </Line>
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Separator className="my-4" />
            <b>
                Pie Charts
            </b>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie data={chartData4} dataKey="visitors" nameKey="browser" />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Separator None</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData4}
                                    dataKey="visitors"
                                    nameKey="browser"
                                    stroke="0"
                                />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-62.5 pb-0"
                        >
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Pie data={chartData4} dataKey="visitors" label nameKey="browser" />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Custom Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5 px-0"
                        >
                            <PieChart>
                                <ChartTooltip
                                    content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                                />
                                <Pie
                                    data={chartData4}
                                    dataKey="visitors"
                                    labelLine={false}
                                    label={({ payload, ...props }) => {
                                        return (
                                            <text
                                                cx={props.cx}
                                                cy={props.cy}
                                                x={props.x}
                                                y={props.y}
                                                textAnchor={props.textAnchor}
                                                dominantBaseline={props.dominantBaseline}
                                                fill="hsla(var(--foreground))"
                                            >
                                                {payload.visitors}
                                            </text>
                                        )
                                    }}
                                    nameKey="browser"
                                />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Label List</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                                />
                                <Pie data={chartData4} dataKey="visitors">
                                    <LabelList
                                        dataKey="browser"
                                        className="fill-background"
                                        stroke="none"
                                        fontSize={12}
                                        formatter={(value: keyof typeof chartConfig2) =>
                                            chartConfig2[value]?.label
                                        }
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Legend</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-75"
                        >
                            <PieChart>
                                <Pie data={chartData4} dataKey="visitors" />
                                <ChartLegend
                                    content={<ChartLegendContent nameKey="browser" />}
                                    className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                                />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Donut</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData4}
                                    dataKey="visitors"
                                    nameKey="browser"
                                    innerRadius={60}
                                />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Donut Active</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData4}
                                    dataKey="visitors"
                                    nameKey="browser"
                                    innerRadius={60}
                                    strokeWidth={5}
                                    activeIndex={0}
                                    activeShape={({
                                        outerRadius = 0,
                                        ...props
                                    }: PieSectorDataItem) => (
                                        <Sector {...props} outerRadius={outerRadius + 10} />
                                    )}
                                />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Donut with Text</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData4}
                                    dataKey="visitors"
                                    nameKey="browser"
                                    innerRadius={60}
                                    strokeWidth={5}
                                >
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-3xl font-bold"
                                                        >
                                                            {totalVisitors.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Visitors
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Stacked</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig4}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <PieChart>
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent
                                            labelKey="visitors"
                                            nameKey="month"
                                            indicator="line"
                                            labelFormatter={(_, payload) => {
                                                return chartConfig4[
                                                    payload?.[0].dataKey as keyof typeof chartConfig4
                                                ].label
                                            }}
                                        />
                                    }
                                />
                                <Pie data={desktopData} dataKey="desktop" outerRadius={60} />
                                <Pie
                                    data={mobileData}
                                    dataKey="mobile"
                                    innerRadius={70}
                                    outerRadius={90}
                                />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Separator className="my-4" />
            <b>
                Radial Charts
            </b>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Radial Chart</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <RadialBarChart data={chartData6} innerRadius={30} outerRadius={110}>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel nameKey="browser" />}
                                />
                                <RadialBar dataKey="visitors" background />
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Radial Chart - Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <RadialBarChart
                                data={chartData6}
                                startAngle={-90}
                                endAngle={380}
                                innerRadius={30}
                                outerRadius={110}
                            >
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel nameKey="browser" />}
                                />
                                <RadialBar dataKey="visitors" background>
                                    <LabelList
                                        position="insideStart"
                                        dataKey="browser"
                                        className="fill-white capitalize mix-blend-luminosity"
                                        fontSize={11}
                                    />
                                </RadialBar>
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Radial Chart - Grid</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig2}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <RadialBarChart data={chartData6} innerRadius={30} outerRadius={100}>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel nameKey="browser" />}
                                />
                                <PolarGrid gridType="circle" />
                                <RadialBar dataKey="visitors" />
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Radial Chart - Text</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig6}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <RadialBarChart
                                data={chartData7}
                                startAngle={0}
                                endAngle={250}
                                innerRadius={80}
                                outerRadius={110}
                            >
                                <PolarGrid
                                    gridType="circle"
                                    radialLines={false}
                                    stroke="none"
                                    className="first:fill-muted last:fill-background"
                                    polarRadius={[86, 74]}
                                />
                                <RadialBar dataKey="visitors" background cornerRadius={10} />
                                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-4xl font-bold"
                                                        >
                                                            {chartData7[0].visitors.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Visitors
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </PolarRadiusAxis>
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Radial Chart - Shape</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig6}
                            className="mx-auto aspect-square max-h-62.5"
                        >
                            <RadialBarChart
                                data={chartData8}
                                endAngle={100}
                                innerRadius={80}
                                outerRadius={140}
                            >
                                <PolarGrid
                                    gridType="circle"
                                    radialLines={false}
                                    stroke="none"
                                    className="first:fill-muted last:fill-background"
                                    polarRadius={[86, 74]}
                                />
                                <RadialBar dataKey="visitors" background />
                                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-4xl font-bold"
                                                        >
                                                            {chartData8[0].visitors.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Visitors
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </PolarRadiusAxis>
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Radial Chart - Stacked</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 items-center pb-0">
                        <ChartContainer
                            config={chartConfig5}
                            className="mx-auto aspect-square w-full max-w-62.5"
                        >
                            <RadialBarChart
                                data={chartData9}
                                endAngle={180}
                                innerRadius={80}
                                outerRadius={130}
                            >
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) - 16}
                                                            className="fill-foreground text-2xl font-bold"
                                                        >
                                                            {totalVisitorsRadial.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 4}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Visitors
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </PolarRadiusAxis>
                                <RadialBar
                                    dataKey="desktop"
                                    stackId="a"
                                    cornerRadius={5}
                                    fill="var(--color-desktop)"
                                    className="stroke-transparent stroke-2"
                                />
                                <RadialBar
                                    dataKey="mobile"
                                    fill="var(--color-mobile)"
                                    stackId="a"
                                    cornerRadius={5}
                                    className="stroke-transparent stroke-2"
                                />
                            </RadialBarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Separator className="my-4" />
            <b>
                Tooltips
            </b>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Default</CardTitle>
                        <CardDescription>
                            Default tooltip with ChartTooltipContent.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Line Indicator</CardTitle>
                        <CardDescription>Tooltip with line indicator.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent indicator="line" />}
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - No Indicator</CardTitle>
                        <CardDescription>Tooltip with no indicator.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent hideIndicator />}
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Custom label</CardTitle>
                        <CardDescription>
                            Tooltip with custom label from chartConfig.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent labelKey="activities" indicator="line" />
                                    }
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Label Formatter</CardTitle>
                        <CardDescription>Tooltip with label formatter.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent
                                            labelFormatter={(value) => {
                                                return new Date(value).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })
                                            }}
                                        />
                                    }
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - No Label</CardTitle>
                        <CardDescription>Tooltip with no label.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent hideIndicator hideLabel />}
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Formatter</CardTitle>
                        <CardDescription>Tooltip with custom formatter .</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent
                                            hideLabel
                                            formatter={(value, name) => (
                                                <div className="text-muted-foreground flex min-w-32.5 items-center text-xs">
                                                    {chartConfig7[name as keyof typeof chartConfig7]?.label ||
                                                        name}
                                                    <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                                        {value}
                                                        <span className="text-muted-foreground font-normal">
                                                            kcal
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        />
                                    }
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Icons</CardTitle>
                        <CardDescription>Tooltip with icons.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent hideLabel />}
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tooltip - Advanced</CardTitle>
                        <CardDescription>
                            Tooltip with custom formatter and total.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig7}>
                            <BarChart accessibilityLayer data={chartData10}>
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })
                                    }}
                                />
                                <Bar
                                    dataKey="running"
                                    stackId="a"
                                    fill="var(--color-running)"
                                    radius={[0, 0, 4, 4]}
                                />
                                <Bar
                                    dataKey="swimming"
                                    stackId="a"
                                    fill="var(--color-swimming)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <ChartTooltip
                                    content={
                                        <ChartTooltipContent
                                            hideLabel
                                            className="w-45"
                                            formatter={(value, name, item, index) => (
                                                <>
                                                    <div
                                                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                                                        style={
                                                            {
                                                                "--color-bg": `var(--color-${name})`,
                                                            } as React.CSSProperties
                                                        }
                                                    />
                                                    {chartConfig7[name as keyof typeof chartConfig7]?.label ||
                                                        name}
                                                    <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                                        {value}
                                                        <span className="text-muted-foreground font-normal">
                                                            kcal
                                                        </span>
                                                    </div>
                                                    {/* Add this after the last item */}
                                                    {index === 1 && (
                                                        <div className="text-foreground mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium">
                                                            Total
                                                            <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                                                {item.payload.running + item.payload.swimming}
                                                                <span className="text-muted-foreground font-normal">
                                                                    kcal
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        />
                                    }
                                    cursor={false}
                                    defaultIndex={1}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
