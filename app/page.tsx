'use client'

import { product } from '@/data'
import { getDiscountedPrice } from '@/lib/helper'
import {
	ShoppingCartIcon,
	PlusSmallIcon,
	MinusSmallIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [quantity, setQuantity] = useState(0)

	const previous = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? product.images.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const next = () => {
		const isLastSlide = currentIndex === product.images.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex)
	}

	const increase = () => {
		setQuantity((prev) => prev + 1)
	}

	const decrease = () => {
		setQuantity((prev) => prev && prev - 1)
	}

	return (
		<main className='grid grid-cols-1 md:grid-cols-2 md:px-40 md:py-24'>
			<div className='md:flex md:flex-col md:gap-10'>
				<div className='relative h-[300px] w-full md:h-[445px] md:w-[445px] '>
					<Image
						src={`/images/${product.images[currentIndex].fullImage}`}
						alt='Product'
						fill
						className='object-cover object-center md:rounded-2xl'
					/>
					<button
						onClick={previous}
						className='group absolute h-8 w-8 flex items-center justify-center rounded-full bg-white z-10 left-4 top-32 md:hidden'>
						{' '}
						<ChevronLeftIcon className='h-4 w-4 text-veryDarkBlue group-hover:text-orange' />
						<span className='sr-only'>Previous Button</span>
					</button>
					<button
						onClick={next}
						className='group absolute h-8 w-8 flex items-center justify-center rounded-full bg-white z-10 right-4 top-32 md:hidden'>
						{' '}
						<ChevronRightIcon className='h-4 w-4 text-veryDarkBlue group-hover:text-orange' />
						<span className='sr-only'>Previous Button</span>
					</button>
				</div>
				<ul className='hidden md:flex items-center gap-7 z-50'>
					{product.images.map((item, index) => (
						<li key={index}>
							<button
								onClick={() => goToSlide(index)}
								className={clsx(
									'rounded-2xl overflow-hidden border-2 hover:bg-white hover:opacity-50',
									index === currentIndex && ' border-orange bg-white opacity-50'
								)}>
								<Image
									src={`/images/${item.thumbnail}`}
									alt='Thumbnail'
									width={88}
									height={88}
									className='object-contain'
								/>
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className='p-6 flex flex-col gap-6'>
				<div className='flex flex-col gap-4 md:gap-6'>
					<p className='text-orange text-xs uppercase font-bold tracking-[1.85px] md:text-sm md:tracking-[2px]'>
						{product.company}
					</p>
					<h1 className='text-veryDarkBlue text-3xl font-bold max-w-sm md:text-5xl md:max-w-md'>
						{product.name}
					</h1>
					<p className='text-[15px]/[25px] text-darkGrayishBlue max-w-md md:text-base/7 md:pt-2'>
						{product.description}
					</p>
				</div>
				<div className='flex items-center justify-between md:flex-col md:items-start md:gap-3'>
					<div className='flex items-center gap-6 md:gap-4'>
						<h2 className='text-veryDarkBlue font-bold text-3xl'>{`$${getDiscountedPrice(
							product.price,
							product.offer
						).toFixed(2)}`}</h2>
						<span className='bg-paleOrange rounded-lg p-2 text-orange font-bold'>
							{`${product.offer}%`}
						</span>
					</div>
					<h3 className='text-grayishBlue font-bold line-through'>{`$${product.price.toFixed(
						2
					)}`}</h3>
				</div>
				<div className='flex flex-col gap-4 md:flex-row'>
					<div className='flex justify-between items-center bg-[#F6F8FD] px-6 py-5 rounded-xl font-bold md:w-1/3'>
						<button
							onClick={decrease}
							className={clsx(
								!quantity ? 'cursor-not-allowed' : 'cursor-pointer'
							)}>
							<MinusSmallIcon className='h-6 w-6 text-orange' />
							<span className='sr-only'>Decrease Quantity</span>
						</button>
						<span className='text-veryDarkBlue'>{quantity}</span>
						<button onClick={increase}>
							<PlusSmallIcon className='h-6 w-6 text-orange' />
							<span className='sr-only'>Increase Quantity</span>
						</button>
					</div>
					<button className='flex items-center gap-4 justify-center text-white bg-orange py-5 rounded-xl font-bold hover:opacity-50 md:w-2/3'>
						<span>
							<ShoppingCartIcon className='h-5 w-5' />
						</span>
						Add to cart
					</button>
				</div>
			</div>
		</main>
	)
}
