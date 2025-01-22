import React from 'react'
import { cn } from '@/lib/utils'

export const Wrapper = ({
	children,
	className = '',
}: Readonly<{
	children: React.ReactNode
	className?: string
}>) => {
	return <div className={cn('max-w-6xl mx-auto', className)}>{children}</div>
}
