'use client'

import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { SearchIcon } from "lucide-react"
import MainLayout from "./(main)/layout"
import Link from "next/link"

function NotFoundPage() {
    return <>
        <MainLayout>
            <Empty>
                <EmptyHeader>
                    <EmptyTitle>404 - Not Found</EmptyTitle>
                    <EmptyDescription>
                        The page you&apos;re looking for doesn&apos;t exist. Try searching for
                        what you need below.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <InputGroup className="sm:w-3/4">
                        <InputGroupInput placeholder="Try searching for pages..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <Kbd>/</Kbd>
                        </InputGroupAddon>
                    </InputGroup>
                    <EmptyDescription>
                        Back to Homepage <Link href="/">Home</Link>
                    </EmptyDescription>
                </EmptyContent>
            </Empty>
        </MainLayout>
    </>
}

export default NotFoundPage