import { UserAvatar } from "@/lib/Icon"

type Props = {}

export const Chat = (props: Props) => {
    return (
        <div className="flex justify-center p-3">
            <div className="flex items-center px-5 md:py-5 shadow-xl rounded-xl  bg-white max-w-3xl self-center space-x-2">
                <UserAvatar className="w-10 h-10 flex" />
                <p className="text-sm font-light pr-5 italic text-[#0055d1] w-fit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod laudantium voluptate, sequi ea hic, iste, totam quae cupiditate ipsum quam</p>
            </div>
        </div>
    )
}

export default Chat
