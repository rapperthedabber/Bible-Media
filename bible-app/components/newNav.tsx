import {useRouter} from 'next/router'
import godIcon from '../Images/JesusIcon.png'
import Image from 'next/image'
export default function newNav(){
    const router = useRouter()
    function Bible(){
router.push('/Bible/Bible')
    }
    function renderMusic(){
        router.push('/Music/Music')
    }
    function Listen(){
        router.push('/Listen/Listen')
    }
    return(
        <div className='navContainer'>
        <nav>
              <h1 id= 'Heading'>Let God Speak to You</h1>
                <h1 id='Listen'><a href = '#playImg'  onClick={()=>Listen()} id='listenLink'>Listen...</a></h1>
                <h1 id = 'Listen'><a onClick={()=>renderMusic()} id= "listenLink">Worship...</a> </h1>
                <Image src={godIcon} id='godIcon'></Image>
        </nav>
        </div>
    )
}