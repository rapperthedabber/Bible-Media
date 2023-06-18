import {useRouter} from 'next/router'
export default function newNav(){
    const router = useRouter()
    function Bible(){
router.push('/Bible/Bible')
    }
    function Listen(){
        router.push('/Listen/Listen')
    }
    return(
        <nav>
              
                <a href = '#Intro5' onClick={()=>{Bible()}}>Read</a>
        </nav>
    )
}