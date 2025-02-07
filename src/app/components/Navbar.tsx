import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">

            {/* SEARCH BAR */}
            <div className="hidden md:flex h-[40px] w-3/6 items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/deletar/search.png" alt="" width={14} height={14} />
                <input className="w-full h-full bg-transparent outline-none" type="text" placeholder="Procurar por um especialista, usuário ou paciente..." />
            </div>

            {/* USER ICONS */}
            <div className="flex items-center gap-6 w-full justify-end">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/deletar/message.png" alt="" width={20} height={20} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/deletar/announcement.png" alt="" width={20} height={20} />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">John Doe</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <Image src="/deletar/avatar.png" alt="" width={36} height={36} className="rounded-full" />
            </div>
        </div>
    )
}

export default Navbar