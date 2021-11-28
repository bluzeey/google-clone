import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {XIcon,MicrophoneIcon,SearchIcon} from '@heroicons/react/solid'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
function Header() {
    const router=useRouter();
    const search=(e)=>{
        e.preventDefault()

        const term=searchInputRef.value

        if(!term) return;

        router.push(`/search?term=${term}`)
    }
    const searchInputRef=useRef(null)
    return (
        <>
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image
                src="https://www.reviewpro.com/wp-content/uploads/2019/06/Google-logo.jpg"
                height={90}
                width={180}
                onClick={()=> router.push('/')}
                className="cursor-pointer"/>
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow: ;
            shadow-lg max-w-3xl items-center">
                <input ref={searchInputRef} className="flex-grow focus:outline-none" type="text"/>
                <XIcon className="h-7 text-gray-500 cursor-pointer 
                transition duration-100 transform hover:scale-125"
                onClick={()=>(searchInputRef.current.value="")}/>
                <MicrophoneIcon className="mr-3 h-6 hidden 
                sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer "/>
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer "/>
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
                 <Avatar className="ml-auto" url='images/myFace.jpeg'/>
            </div>
        </header>

        <HeaderOptions/>
        </>
    )
}

export default Header
