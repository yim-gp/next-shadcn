'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from "@/components/ui/field";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Collapsible } from "@radix-ui/react-collapsible";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { IconCheck, IconFolderCode, IconInfoCircle, IconPlus } from "@tabler/icons-react";
import {
    AlertCircleIcon,
    ArchiveIcon,
    ArrowLeftIcon,
    ArrowUpIcon,
    ArrowUpRightIcon, BadgeCheckIcon, BookmarkIcon, Calculator, CalendarIcon, CalendarPlusIcon, Check, CheckCircle2Icon, ChevronDownIcon, ChevronRightIcon, ChevronsUpDown, ClockIcon, CreditCard, HeartIcon, ListFilterIcon, MailCheckIcon, Minus, MoreHorizontalIcon, Plus, PopcornIcon, Search, Settings, Smile, StarIcon, Table, TagIcon, Trash2Icon, User
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar";
import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"
import { Progress } from "@/components/ui/progress";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
export default function Page() {
    const [label, setLabel] = useState<string>("personal")
    const [dateCalender, setDateCalender] = useState<Date | undefined>(new Date())
    const [isOpenCollapsible, setIsOpenCollapsible] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")
    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)
    const [dateDatePicker, setDateDatePicker] = useState<Date | undefined>(undefined)
    const [goal, setGoal] = useState<number>(350)
    const [position, setPosition] = useState<string>("bottom")
    const [valueSlider, setValueSlider] = useState<number[]>([200, 800])
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ]
    const data = [
        {
            goal: 400,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 239,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 349,
        },
    ]
    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
    return (
        <>
            <b>
                Accordion
            </b>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Our flagship product combines cutting-edge technology with sleek
                            design. Built with premium materials, it offers unparalleled
                            performance and reliability.
                        </p>
                        <p>
                            Key features include advanced processing capabilities, and an
                            intuitive user interface designed for both beginners and experts.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Separator className="my-4" />
            <b>
                Alert Dialog
            </b>
            <div className="my-4">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <Separator className="my-4" />
            <b>
                Alert
            </b>
            <div className="grid w-full max-w-xl items-start gap-4 my-4">
                <Alert>
                    <CheckCircle2Icon />
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                        This is an alert with icon, title and description.
                    </AlertDescription>
                </Alert>
                <Alert>
                    <PopcornIcon />
                    <AlertTitle>
                        This Alert has a title and an icon. No description.
                    </AlertTitle>
                </Alert>
                <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>Unable to process your payment.</AlertTitle>
                    <AlertDescription>
                        <p>Please verify your billing information and try again.</p>
                        <ul className="list-inside list-disc text-sm">
                            <li>Check your card details</li>
                            <li>Ensure sufficient funds</li>
                            <li>Verify billing address</li>
                        </ul>
                    </AlertDescription>
                </Alert>
                <Alert variant="green">
                    <AlertCircleIcon />
                    <AlertTitle>Unable to process your payment.</AlertTitle>
                    <AlertDescription>
                        <p>Please verify your billing information and try again.</p>
                        <ul className="list-inside list-disc text-sm">
                            <li>Check your card details</li>
                            <li>Ensure sufficient funds</li>
                            <li>Verify billing address</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            </div>
            <Separator className="my-4" />
            <b>
                Badge
            </b>
            <div className="flex flex-col items-center gap-2 my-4">
                <div className="flex w-full flex-wrap gap-2">
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant={"green"}>Green</Badge>
                    <Badge variant={'yellow'}>Yellow</Badge>
                </div>
                <div className="flex w-full flex-wrap gap-2">
                    <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white dark:bg-blue-600"
                    >
                        <BadgeCheckIcon />
                        Verified
                    </Badge>
                    <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                        8
                    </Badge>
                    <Badge
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                        variant="destructive"
                    >
                        99
                    </Badge>
                    <Badge
                        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                        variant="outline"
                    >
                        20+
                    </Badge>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Breadcrumbs
            </b>
            <div className="mt-4">

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    <BreadcrumbEllipsis className="size-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                                    <DropdownMenuItem>Themes</DropdownMenuItem>
                                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/docs/components">Components</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <Separator className="my-4" />
            <b>
                Button Group
            </b>
            <div className="mt-4">
                <ButtonGroup>
                    <ButtonGroup className="hidden sm:flex">
                        <Button variant="outline" size="icon" aria-label="Go Back">
                            <ArrowLeftIcon />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button variant="outline">Archive</Button>
                        <Button variant="outline">Report</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button variant="outline">Snooze</Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" aria-label="More Options">
                                    <MoreHorizontalIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-52">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <MailCheckIcon />
                                        Mark as Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <ArchiveIcon />
                                        Archive
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <ClockIcon />
                                        Snooze
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CalendarPlusIcon />
                                        Add to Calendar
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <ListFilterIcon />
                                        Add to List
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <TagIcon />
                                            Label As...
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuRadioGroup
                                                value={label}
                                                onValueChange={setLabel}
                                            >
                                                <DropdownMenuRadioItem value="personal">
                                                    Personal
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="work">
                                                    Work
                                                </DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="other">
                                                    Other
                                                </DropdownMenuRadioItem>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem variant="destructive">
                                        <Trash2Icon />
                                        Trash
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
            <Separator className="my-4" />
            <b>
                Buttons
            </b>
            <div className="mt-4">
                <div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button variant="outline">Button</Button>
                    <Button variant="outline" size="icon" aria-label="Submit">
                        <ArrowUpIcon />
                    </Button>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Calendar
            </b>
            <div className="mt-4">
                <Calendar
                    mode="single"
                    selected={dateCalender}
                    onSelect={setDateCalender}
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                />
            </div>
            <Separator className="my-4" />
            <b>
                Card
            </b>
            <div className="mt-4">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                        <CardAction>
                            <Button variant="link">Sign Up</Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <Separator className="my-4" />
            <b>
                Carousel
            </b>
            <div className="mt-4">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-3">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div >
            <Separator className="my-4" />
            <b>
                Checkbox
            </b>
            <div className="mt-4">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <div className="flex items-start gap-3">
                        <Checkbox id="terms-2" defaultChecked />
                        <div className="grid gap-2">
                            <Label htmlFor="terms-2">Accept terms and conditions</Label>
                            <p className="text-muted-foreground text-sm">
                                By clicking this checkbox, you agree to the terms and conditions.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Checkbox id="toggle" disabled />
                        <Label htmlFor="toggle">Enable notifications</Label>
                    </div>
                    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-blue-600 has-aria-checked:bg-blue-50 dark:has-aria-checked:border-blue-900 dark:has-aria-checked:bg-blue-950">
                        <Checkbox
                            id="toggle-2"
                            defaultChecked
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        />
                        <div className="grid gap-1.5 font-normal">
                            <p className="text-sm leading-none font-medium">
                                Enable notifications
                            </p>
                            <p className="text-muted-foreground text-sm">
                                You can enable or disable notifications at any time.
                            </p>
                        </div>
                    </Label>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Collapsible
            </b>
            <div className="mt-4">
                <Collapsible
                    open={isOpenCollapsible}
                    onOpenChange={setIsOpenCollapsible}
                    className="flex w-87.5 flex-col gap-2"
                >
                    <div className="flex items-center justify-between gap-4 px-4">
                        <h4 className="text-sm font-semibold">
                            @peduarte starred 3 repositories
                        </h4>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8">
                                <ChevronsUpDown />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <div className="rounded-md border px-4 py-2 font-mono text-sm">
                        @radix-ui/primitives
                    </div>
                    <CollapsibleContent className="flex flex-col gap-2">
                        <div className="rounded-md border px-4 py-2 font-mono text-sm">
                            @radix-ui/colors
                        </div>
                        <div className="rounded-md border px-4 py-2 font-mono text-sm">
                            @stitches/react
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <Separator className="my-4" />
            <b>
                Combobox
            </b>
            <div className="mt-4">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-50 justify-between"
                        >
                            {value
                                ? frameworks.find((framework) => framework.value === value)?.label
                                : "Select framework..."}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-50 p-0">
                        <Command>
                            <CommandInput placeholder="Search framework..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {frameworks.map((framework) => (
                                        <CommandItem
                                            key={framework.value}
                                            value={framework.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            {framework.label}
                                            <Check
                                                className={cn(
                                                    "ml-auto",
                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <Separator className="my-4" />
            <b>
                Command
            </b>
            <div className="mt-4">
                <Command className="rounded-lg border shadow-md md:min-w-112.5">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <CalendarIcon />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <Smile />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem disabled>
                                <Calculator />
                                <span>Calculator</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Settings />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
            <Separator className="my-4" />
            <b>
                Context Menu
            </b>
            <div className="mt-4">
                <ContextMenu>
                    <ContextMenuTrigger className="flex h-37.5 w-75 items-center justify-center rounded-md border border-dashed text-sm">
                        Right click here
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-52">
                        <ContextMenuItem inset>
                            Back
                            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset disabled>
                            Forward
                            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset>
                            Reload
                            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuSub>
                            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                            <ContextMenuSubContent className="w-44">
                                <ContextMenuItem>Save Page...</ContextMenuItem>
                                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                                <ContextMenuItem>Name Window...</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>Developer Tools</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
                            </ContextMenuSubContent>
                        </ContextMenuSub>
                        <ContextMenuSeparator />
                        <ContextMenuCheckboxItem checked>
                            Show Bookmarks
                        </ContextMenuCheckboxItem>
                        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                        <ContextMenuSeparator />
                        <ContextMenuRadioGroup value="pedro">
                            <ContextMenuLabel inset>People</ContextMenuLabel>
                            <ContextMenuRadioItem value="pedro">
                                Pedro Duarte
                            </ContextMenuRadioItem>
                            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                        </ContextMenuRadioGroup>
                    </ContextMenuContent>
                </ContextMenu>
            </div>
            <Separator className="my-4" />
            <b>
                Date Picker
            </b>
            <div className="mt-4">
                <div className="flex flex-col gap-3">
                    <Label htmlFor="date" className="px-1">
                        Date of birth
                    </Label>
                    <Popover open={openDatePicker} onOpenChange={setOpenDatePicker}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="date"
                                className="w-48 justify-between font-normal"
                            >
                                {dateDatePicker ? dateDatePicker.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={dateDatePicker}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDateDatePicker(date)
                                    setOpenDatePicker(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="date-picker" className="px-1">
                            Date
                        </Label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="date-picker"
                                    className="w-32 justify-between font-normal"
                                >
                                    {dateDatePicker ? dateDatePicker.toLocaleDateString() : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={dateDatePicker}
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                        setDateDatePicker(date)
                                        setOpen(false)
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="time-picker" className="px-1">
                            Time
                        </Label>
                        <Input
                            type="time"
                            id="time-picker"
                            step="1"
                            defaultValue="10:30:00"
                            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                        />
                    </div>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Dialog
            </b>
            <div className="mt-4">
                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <Button variant="outline">Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-106.25">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you&apos;re
                                    done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>
            <Separator className="my-4" />
            <b>
                Drawer
            </b>
            <div className="mt-4">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="outline">Open Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Move Goal</DrawerTitle>
                                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                                <div className="flex items-center justify-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(-10)}
                                        disabled={goal <= 200}
                                    >
                                        <Minus />
                                        <span className="sr-only">Decrease</span>
                                    </Button>
                                    <div className="flex-1 text-center">
                                        <div className="text-7xl font-bold tracking-tighter">
                                            {goal}
                                        </div>
                                        <div className="text-muted-foreground text-[0.70rem] uppercase">
                                            Calories/day
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(10)}
                                        disabled={goal >= 400}
                                    >
                                        <Plus />
                                        <span className="sr-only">Increase</span>
                                    </Button>
                                </div>
                                <div className="mt-3 h-30">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={data}>
                                            <Bar
                                                dataKey="goal"
                                                style={
                                                    {
                                                        fill: "hsl(var(--foreground))",
                                                        opacity: 0.9,
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <DrawerFooter>
                                <Button>Submit</Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
            <Separator className="my-4" />
            <b>
                Dropdown Menu
            </b>
            <div className="mt-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Email</DropdownMenuItem>
                                        <DropdownMenuItem>Message</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>More...</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="mt-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Separator className="my-4" />
            <b>
                Empty
            </b>
            <div className="mt-4">
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                            <IconFolderCode />
                        </EmptyMedia>
                        <EmptyTitle>No Projects Yet</EmptyTitle>
                        <EmptyDescription>
                            You haven&apos;t created any projects yet. Get started by creating
                            your first project.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <div className="flex gap-2">
                            <Button>Create Project</Button>
                            <Button variant="outline">Import Project</Button>
                        </div>
                    </EmptyContent>
                    <Button
                        variant="link"
                        asChild
                        className="text-muted-foreground"
                        size="sm"
                    >
                        <a href="#">
                            Learn More <ArrowUpRightIcon />
                        </a>
                    </Button>
                </Empty>
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="default">
                            <Avatar className="size-12">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    className="grayscale"
                                />
                                <AvatarFallback>LR</AvatarFallback>
                            </Avatar>
                        </EmptyMedia>
                        <EmptyTitle>User Offline</EmptyTitle>
                        <EmptyDescription>
                            This user is currently offline. You can leave a message to notify them
                            or try again later.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button size="sm">Leave Message</Button>
                    </EmptyContent>
                </Empty>
            </div>
            <Separator className="my-4" />
            <b>
                Field
            </b>
            <div className="mt-4">
                <div className="w-full max-w-md">
                    <form>
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Payment Method</FieldLegend>
                                <FieldDescription>
                                    All transactions are secure and encrypted
                                </FieldDescription>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                            Name on Card
                                        </FieldLabel>
                                        <Input
                                            id="checkout-7j9-card-name-43j"
                                            placeholder="Evil Rabbit"
                                            required
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                            Card Number
                                        </FieldLabel>
                                        <Input
                                            id="checkout-7j9-card-number-uw1"
                                            placeholder="1234 5678 9012 3456"
                                            required
                                        />
                                        <FieldDescription>
                                            Enter your 16-digit card number
                                        </FieldDescription>
                                    </Field>
                                    <div className="grid grid-cols-3 gap-4">
                                        <Field>
                                            <FieldLabel htmlFor="checkout-exp-month-ts6">
                                                Month
                                            </FieldLabel>
                                            <Select defaultValue="">
                                                <SelectTrigger id="checkout-exp-month-ts6">
                                                    <SelectValue placeholder="MM" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="01">01</SelectItem>
                                                    <SelectItem value="02">02</SelectItem>
                                                    <SelectItem value="03">03</SelectItem>
                                                    <SelectItem value="04">04</SelectItem>
                                                    <SelectItem value="05">05</SelectItem>
                                                    <SelectItem value="06">06</SelectItem>
                                                    <SelectItem value="07">07</SelectItem>
                                                    <SelectItem value="08">08</SelectItem>
                                                    <SelectItem value="09">09</SelectItem>
                                                    <SelectItem value="10">10</SelectItem>
                                                    <SelectItem value="11">11</SelectItem>
                                                    <SelectItem value="12">12</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                                                Year
                                            </FieldLabel>
                                            <Select defaultValue="">
                                                <SelectTrigger id="checkout-7j9-exp-year-f59">
                                                    <SelectValue placeholder="YYYY" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="2024">2024</SelectItem>
                                                    <SelectItem value="2025">2025</SelectItem>
                                                    <SelectItem value="2026">2026</SelectItem>
                                                    <SelectItem value="2027">2027</SelectItem>
                                                    <SelectItem value="2028">2028</SelectItem>
                                                    <SelectItem value="2029">2029</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                                            <Input id="checkout-7j9-cvv" placeholder="123" required />
                                        </Field>
                                    </div>
                                </FieldGroup>
                            </FieldSet>
                            <FieldSeparator />
                            <FieldSet>
                                <FieldLegend>Billing Address</FieldLegend>
                                <FieldDescription>
                                    The billing address associated with your payment method
                                </FieldDescription>
                                <FieldGroup>
                                    <Field orientation="horizontal">
                                        <Checkbox
                                            id="checkout-7j9-same-as-shipping-wgm"
                                            defaultChecked
                                        />
                                        <FieldLabel
                                            htmlFor="checkout-7j9-same-as-shipping-wgm"
                                            className="font-normal"
                                        >
                                            Same as shipping address
                                        </FieldLabel>
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <FieldSet>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                            Comments
                                        </FieldLabel>
                                        <Textarea
                                            id="checkout-7j9-optional-comments"
                                            placeholder="Add any additional comments"
                                            className="resize-none"
                                        />
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <Field orientation="horizontal">
                                <Button type="submit">Submit</Button>
                                <Button variant="outline" type="button">
                                    Cancel
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-md mt-4">
                <Field>
                    <FieldTitle>Price Range</FieldTitle>
                    <FieldDescription>
                        Set your budget range ($
                        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
                        <span className="font-medium tabular-nums">{value[1]}</span>).
                    </FieldDescription>
                    <Slider
                        value={valueSlider}
                        onValueChange={setValueSlider}
                        max={1000}
                        min={0}
                        step={10}
                        className="mt-2 w-full"
                        aria-label="Price Range"
                    />
                </Field>
            </div>
            <div className="w-full max-w-md space-y-6 mt-4">
                <FieldSet>
                    <FieldLegend>Address Information</FieldLegend>
                    <FieldDescription>
                        We need your address to deliver your order.
                    </FieldDescription>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="street">Street Address</FieldLabel>
                            <Input id="street" type="text" placeholder="123 Main St" />
                        </Field>
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="city">City</FieldLabel>
                                <Input id="city" type="text" placeholder="New York" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
                                <Input id="zip" type="text" placeholder="90502" />
                            </Field>
                        </div>
                    </FieldGroup>
                </FieldSet>
            </div>
            <div className="w-full max-w-md mt-4">
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend variant="label">
                            Show these items on the desktop
                        </FieldLegend>
                        <FieldDescription>
                            Select the items you want to show on the desktop.
                        </FieldDescription>
                        <FieldGroup className="gap-3">
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-hard-disks-ljj"
                                    className="font-normal"
                                    defaultChecked
                                >
                                    Hard disks
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-external-disks-1yg" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-external-disks-1yg"
                                    className="font-normal"
                                >
                                    External disks
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-cds-dvds-fzt"
                                    className="font-normal"
                                >
                                    CDs, DVDs, and iPods
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
                                <FieldLabel
                                    htmlFor="finder-pref-9k2-connected-servers-6l2"
                                    className="font-normal"
                                >
                                    Connected servers
                                </FieldLabel>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <Field orientation="horizontal">
                        <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
                        <FieldContent>
                            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
                                Sync Desktop & Documents folders
                            </FieldLabel>
                            <FieldDescription>
                                Your Desktop & Documents folders are being synced with iCloud
                                Drive. You can access them from other devices.
                            </FieldDescription>
                        </FieldContent>
                    </Field>
                </FieldGroup>
            </div>
            <div className="w-full max-w-md mt-4">
                <FieldSet>
                    <FieldLabel>Subscription Plan</FieldLabel>
                    <FieldDescription>
                        Yearly and lifetime plans offer significant savings.
                    </FieldDescription>
                    <RadioGroup defaultValue="monthly">
                        <Field orientation="horizontal">
                            <RadioGroupItem value="monthly" id="plan-monthly" />
                            <FieldLabel htmlFor="plan-monthly" className="font-normal">
                                Monthly ($9.99/month)
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal">
                            <RadioGroupItem value="yearly" id="plan-yearly" />
                            <FieldLabel htmlFor="plan-yearly" className="font-normal">
                                Yearly ($99.99/year)
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal">
                            <RadioGroupItem value="lifetime" id="plan-lifetime" />
                            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
                                Lifetime ($299.99)
                            </FieldLabel>
                        </Field>
                    </RadioGroup>
                </FieldSet>
            </div>
            <div className="w-full max-w-md mt-4">
                <Field orientation="horizontal">
                    <FieldContent>
                        <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
                        <FieldDescription>
                            Enable multi-factor authentication. If you do not have a two-factor
                            device, you can use a one-time code sent to your email.
                        </FieldDescription>
                    </FieldContent>
                    <Switch id="2fa" />
                </Field>
            </div>
            <div className="w-full max-w-md mt-4">
                <FieldGroup>
                    <FieldSet>
                        <FieldLabel htmlFor="compute-environment-p8w">
                            Compute Environment
                        </FieldLabel>
                        <FieldDescription>
                            Select the compute environment for your cluster.
                        </FieldDescription>
                        <RadioGroup defaultValue="kubernetes">
                            <FieldLabel htmlFor="kubernetes-r2h">
                                <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Kubernetes</FieldTitle>
                                        <FieldDescription>
                                            Run GPU workloads on a K8s configured cluster.
                                        </FieldDescription>
                                    </FieldContent>
                                    <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                                </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="vm-z4k">
                                <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Virtual Machine</FieldTitle>
                                        <FieldDescription>
                                            Access a VM configured cluster to run GPU workloads.
                                        </FieldDescription>
                                    </FieldContent>
                                    <RadioGroupItem value="vm" id="vm-z4k" />
                                </Field>
                            </FieldLabel>
                        </RadioGroup>
                    </FieldSet>
                </FieldGroup>
            </div>
            <Separator className="my-4" />
            <b>
                Hover Card
            </b>
            <div className="mt-4 border-2 text-center">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link">@nextjs</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between gap-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/vercel.png" />
                                <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">@nextjs</h4>
                                <p className="text-sm">
                                    The React Framework – created and maintained by @vercel.
                                </p>
                                <div className="text-muted-foreground text-xs">
                                    Joined December 2021
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <Separator className="my-4" />
            <b>
                Input Group
            </b>
            <div className="grid w-full max-w-sm gap-6 mt-4">
                <InputGroup>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupInput placeholder="example.com" className="pl-1!" />
                    <InputGroupAddon>
                        <InputGroupText>https://</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <InputGroupButton className="rounded-full" size="icon-xs">
                                    <IconInfoCircle />
                                </InputGroupButton>
                            </TooltipTrigger>
                            <TooltipContent>This is content in a tooltip.</TooltipContent>
                        </Tooltip>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupTextarea placeholder="Ask, Search or Chat..." />
                    <InputGroupAddon align="block-end">
                        <InputGroupButton
                            variant="outline"
                            className="rounded-full"
                            size="icon-xs"
                        >
                            <IconPlus />
                        </InputGroupButton>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <InputGroupButton variant="ghost">Auto</InputGroupButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                align="start"
                                className="[--radius:0.95rem]"
                            >
                                <DropdownMenuItem>Auto</DropdownMenuItem>
                                <DropdownMenuItem>Agent</DropdownMenuItem>
                                <DropdownMenuItem>Manual</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <InputGroupText className="ml-auto">52% used</InputGroupText>
                        <Separator orientation="vertical" className="h-4!" />
                        <InputGroupButton
                            variant="default"
                            className="rounded-full"
                            size="icon-xs"
                            disabled
                        >
                            <ArrowUpIcon />
                            <span className="sr-only">Send</span>
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupInput placeholder="@shadcn" />
                    <InputGroupAddon align="inline-end">
                        <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
                            <IconCheck className="size-3" />
                        </div>
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <Separator className="my-4" />
            <b>
                Input OTP
            </b>
            <div className="mt-4">
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div className="mt-4">
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <div className="mt-4">
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            <Separator className="my-4" />
            <b>
                Item
            </b>
            <div className="flex w-full max-w-md flex-col gap-6 mt-4">
                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                    </ItemActions>
                </Item>
                <Item variant="outline" size="sm" asChild>
                    <a href="#">
                        <ItemMedia>
                            <BadgeCheckIcon className="size-5" />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Your profile has been verified.</ItemTitle>
                        </ItemContent>
                        <ItemActions>
                            <ChevronRightIcon className="size-4" />
                        </ItemActions>
                    </a>
                </Item>
            </div>
            <Separator className="my-4" />
            <b>
                Kbd
            </b>
            <div className="flex flex-col gap-4 mt-4">
                <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>⇧</Kbd>
                    <Kbd>⌥</Kbd>
                    <Kbd>⌃</Kbd>
                </KbdGroup>
                <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <span>+</span>
                    <Kbd>B</Kbd>
                </KbdGroup>
            </div>
            <Separator className="my-4" />
            <b>
                Label
            </b>
            <div className="mt-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Menubar
            </b>
            <div className="mt-4">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>File</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled>New Incognito Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Email link</MenubarItem>
                                    <MenubarItem>Messages</MenubarItem>
                                    <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Edit</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>
                                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Find</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Search the web</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Find...</MenubarItem>
                                    <MenubarItem>Find Next</MenubarItem>
                                    <MenubarItem>Find Previous</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>Cut</MenubarItem>
                            <MenubarItem>Copy</MenubarItem>
                            <MenubarItem>Paste</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>View</MenubarTrigger>
                        <MenubarContent>
                            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                            <MenubarCheckboxItem checked>
                                Always Show Full URLs
                            </MenubarCheckboxItem>
                            <MenubarSeparator />
                            <MenubarItem inset>
                                Reload <MenubarShortcut>⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem disabled inset>
                                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Hide Sidebar</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Profiles</MenubarTrigger>
                        <MenubarContent>
                            <MenubarRadioGroup value="benoit">
                                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                            </MenubarRadioGroup>
                            <MenubarSeparator />
                            <MenubarItem inset>Edit...</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem inset>Add Profile...</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <Separator className="my-4" />
            <b>
                Native Select
            </b>
            <div className="mt-4">
                <NativeSelect>
                    <NativeSelectOption value="">Select status</NativeSelectOption>
                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                    <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
                    <NativeSelectOption value="done">Done</NativeSelectOption>
                    <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
                </NativeSelect>
            </div>
            <Separator className="my-4" />
            <b>
                Popover
            </b>
            <div className="mt-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">Open popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <h4 className="leading-none font-medium">Dimensions</h4>
                                <p className="text-muted-foreground text-sm">
                                    Set the dimensions for the layer.
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="width">Width</Label>
                                    <Input
                                        id="width"
                                        defaultValue="100%"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxWidth">Max. width</Label>
                                    <Input
                                        id="maxWidth"
                                        defaultValue="300px"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="height">Height</Label>
                                    <Input
                                        id="height"
                                        defaultValue="25px"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxHeight">Max. height</Label>
                                    <Input
                                        id="maxHeight"
                                        defaultValue="none"
                                        className="col-span-2 h-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <Separator className="my-4" />
            <b>
                Progress
            </b>
            <div className="mt-4">
                <Progress value={progress} className="w-[60%]" />
            </div>
            <Separator className="my-4" />
            <b>
                Resizable
            </b>
            <div className="mt-4">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="max-w-md rounded-lg border md:min-w-112.5"
                >
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-50 items-center justify-center p-6">
                            <span className="font-semibold">One</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={25}>
                                <div className="flex h-full items-center justify-center p-6">
                                    <span className="font-semibold">Two</span>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={75}>
                                <div className="flex h-full items-center justify-center p-6">
                                    <span className="font-semibold">Three</span>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <Separator className="my-4" />
            <b>
                Select
            </b>
            <div className="mt-4 ">
                <Select>
                    <SelectTrigger className="w-45">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Separator className="my-4" />
            <b>
                Sheet
            </b>
            <div className="mt-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid flex-1 auto-rows-min gap-6 px-4">
                            <div className="grid gap-3">
                                <Label htmlFor="sheet-demo-name">Name</Label>
                                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="sheet-demo-username">Username</Label>
                                <Input id="sheet-demo-username" defaultValue="@peduarte" />
                            </div>
                        </div>
                        <SheetFooter>
                            <Button type="submit">Save changes</Button>
                            <SheetClose asChild>
                                <Button variant="outline">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            <Separator className="my-4" />
            <b>
                Skeleton
            </b>
            <div className="flex items-center space-x-4 mt-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-62.5" />
                    <Skeleton className="h-4 w-50" />
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Slider
            </b>
            <div className="mt-4">
                <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className={cn("w-[60%]")}
                />
            </div>
            <Separator className="my-4" />
            <b>
                Spinner
            </b>
            <div className="mt-4">
                <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
                    <Item variant="muted">
                        <ItemMedia>
                            <Spinner />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
                        </ItemContent>
                        <ItemContent className="flex-none justify-end">
                            <span className="text-sm tabular-nums">$100.00</span>
                        </ItemContent>
                    </Item>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Switch
            </b>
            <div className="mt-4">
                <div className="mt-4 flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Tabs
            </b>
            <div className="mt-4">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click save when you&apos;re
                                        done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-name">Name</Label>
                                        <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-username">Username</Label>
                                        <Input id="tabs-demo-username" defaultValue="@peduarte" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you&apos;ll be logged
                                        out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-current">Current password</Label>
                                        <Input id="tabs-demo-current" type="password" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-new">New password</Label>
                                        <Input id="tabs-demo-new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <Separator className="my-4" />
            <b>
                Textarea
            </b>
            <div className="mt-4">
                <Textarea placeholder="Type your message here." />
            </div>
            <Separator className="my-4" />
            <b>
                Toggle Group
            </b>
            <div className="mt-4">
                <ToggleGroup type="multiple" variant="outline" spacing={2} size="sm">
                    <ToggleGroupItem
                        value="star"
                        aria-label="Toggle star"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
                    >
                        <StarIcon />
                        Star
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="heart"
                        aria-label="Toggle heart"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
                    >
                        <HeartIcon />
                        Heart
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="bookmark"
                        aria-label="Toggle bookmark"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                    >
                        <BookmarkIcon />
                        Bookmark
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <Separator className="my-4" />
            <b>
                Toggle
            </b>
            <div className="mt-4">
                <Toggle
                    aria-label="Toggle bookmark"
                    size="sm"
                    variant="outline"
                    className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                >
                    <BookmarkIcon />
                    Bookmark
                </Toggle>
            </div>
            <Separator className="my-4" />
            <b>
                Tooltip
            </b>
            <div className="mt-4">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </>
    )
}
