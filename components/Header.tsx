'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { navigations } from '@/data'

import Logo from '@/public/images/logo.svg'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className='px-6 py-5 md:px-40 md:py-7'>
			<nav className='flex justify-between items-center md:border-[#E4E9F2] md:border-b-[1px] md:pb-8'>
				<div className='flex gap-4 items-center md:gap-14 '>
					<button className='block md:hidden' onClick={() => setIsOpen(true)}>
						<Bars3Icon className='h-6 w-6 text-darkGrayishBlue ' />
						<span className='sr-only'>Open Mobile Menu</span>
					</button>
					<Link href={'#'}>
						<Image
							src={Logo}
							alt='Logo'
							className='w-auto h-auto object-contain'
						/>
					</Link>
					<ul className='hidden md:flex items-center gap-8'>
						{navigations.map((item) => (
							<li key={item.name}>
								<Link
									className='text-[15px]/[26px] text-darkGrayishBlue hover:text-veryDarkBlue hover:pb-11 hover:border-orange hover:border-b-4'
									href={item.href}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='flex items-center gap-5 md:gap-12'>
					<button>
						<ShoppingCartIcon className='h-6 w-6 text-darkGrayishBlue hover:text-veryDarkBlue' />
						<span className='sr-only'>Open Shopping Cart</span>
					</button>
					<Link href={'#'}>
						<Image
							src={'/images/image-avatar.png'}
							alt='Avatar'
							width={24}
							height={24}
							className='rounded-full w-auto object-contain md:hidden border-2 hover:border-orange'
						/>
						<Image
							src={'/images/image-avatar.png'}
							alt='Avatar'
							width={50}
							height={50}
							className='hidden rounded-full w-auto object-contain md:block border-2 hover:border-orange'
						/>
					</Link>
				</div>
			</nav>
			<Dialog
				as='div'
				className='md:hidden'
				open={isOpen}
				onClose={() => setIsOpen(false)}>
				<div
					className='fixed inset-0 z-10 shadow-2xl bg-black/75'
					aria-hidden='true'
				/>
				<Dialog.Panel className='fixed inset-y-0 left-0 z-10 w-2/3 overflow-hidden bg-white p-8'>
					<div className='flex pb-14'>
						<button type='button' onClick={() => setIsOpen(false)}>
							<span className='sr-only'>Close Menu</span>
							<XMarkIcon
								className='h-6 w-6 text-darkGrayishBlue'
								aria-hidden='true'
							/>
						</button>
					</div>
					<ul className='flex flex-col gap-6'>
						{navigations.map((item) => (
							<li key={item.name}>
								<Link
									className='text-lg text-veryDarkBlue font-bold'
									href={item.href}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
export default Header
