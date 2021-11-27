import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {ViewGridIcon,MicrophoneIcon, SearchIcon} from '@heroicons/react/solid'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-8 w-8 p-1 rounded-full hover:bg-gray-100 cursor-pointer"/>
          <Avatar url='images/myFace.jpeg'/>
        </div>
      </header>
      <form>
        <Image
          src="https://www.reviewpro.com/wp-content/uploads/2019/06/Google-logo.jpg"
          height={300}
          width={600}/>
          <div className="flex w-full mt-5 
          hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center">
            <SearchIcon className="h-5 mr-3 text-gray-500"/>
            <input type="text" className=" flex-grow focus:outline-none"/> 
            <MicrophoneIcon className="h-5"/>
          </div>
      </form>
    </div>
  )
}
