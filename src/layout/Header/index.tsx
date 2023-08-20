'use client'
import { AvatarIcon } from '@/common'
import { Search } from '@/lib/Icon'
import Image from 'next/image'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    return (
        <header>
            <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 ">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                    alt="Trello logo"
                    width={300}
                    height={100}
                    className='w-44 md:w-56 md:pb-0 object-contain'
                    priority={false}
                />

                <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                    <form action="" className='flex space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                        <Search className='w-6 h-6 gray-400 self-center' />
                        <input type="text" placeholder='search' className='flex-1 outline-none p-2' />
                        <button hidden >Search</button>
                    </form>
                    <AvatarIcon name='Mohammed shurafa' size='40' />
                </div>
            </div>
        </header>
    )
}

export default Header
