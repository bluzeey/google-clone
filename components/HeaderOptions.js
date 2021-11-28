import HeaderOption from "./HeaderOption"
import {DotsVerticalIcon,MapIcon,PhotographIcon,PlayIcon,SearchIcon} from '@heroicons/react/solid'
function HeaderOptions() {
    return (
        <div>
            <div className="flex space-x-6">
                <HeaderOption icon={SearchIcon} title="All" selected/>
                <HeaderOption icon={PhotographIcon} title="Images" selected/>
                
            </div>
            <div className="flex space-x-4 ">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
