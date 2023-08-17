import { Search } from '@/src/lib/Icon'
import Image from 'next/image'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    return (
        <header>
            <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                alt="Trello logo"
                width={300}
                height={100}
                className='w-44 md:w-56 md:pb-0 object-contain'
                priority={false}
            />
            <form action="">
                <input type="text" />
                <Search width={20} />
                <button hidden >Search</button>
            </form>
        </header>
    )
}

export default Header
