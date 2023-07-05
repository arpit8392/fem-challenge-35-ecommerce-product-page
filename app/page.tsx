import {
	ShoppingCartIcon,
	PlusSmallIcon,
	MinusSmallIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='grid grid-cols-1 md:grid-cols-2 md:px-40'>
			<div className='relative h-[300px] w-full'>
				<Image
					src={'/images/image-product-1.jpg'}
					alt='Product 1'
					fill
					className='object-cover object-center w-full h-auto'
				/>
			</div>
			<div className='p-6 flex flex-col gap-6'>
				<div className='flex flex-col gap-4'>
					<p className='text-orange text-xs uppercase font-bold tracking-[1.85px]'>
						Sneaker Company
					</p>
					<h1 className='text-veryDarkBlue text-3xl font-bold '>
						Fall Limited Edition Sneakers
					</h1>
					<p className='text-[15px]/[25px] text-darkGrayishBlue'>
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything
						the weather can offer.
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-6'>
						<h2 className='text-veryDarkBlue font-bold text-3xl'>$125.00</h2>
						<span className='bg-paleOrange rounded-lg p-2 text-orange font-bold'>
							50%
						</span>
					</div>
					<h3 className='text-grayishBlue font-bold line-through'>$250.00</h3>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='flex justify-between items-center bg-[#F6F8FD] px-6 py-5 rounded-xl font-bold'>
						<button>
							<MinusSmallIcon className='h-6 w-6 text-orange' />
							<span className='sr-only'>Decrease Quantity</span>
						</button>
						<span className='text-veryDarkBlue'>0</span>
						<button>
							<PlusSmallIcon className='h-6 w-6 text-orange' />
							<span className='sr-only'>Increase Quantity</span>
						</button>
					</div>
					<button className='flex items-center gap-4 justify-center text-white bg-orange py-5 rounded-xl font-bold hover:opacity-50'>
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
