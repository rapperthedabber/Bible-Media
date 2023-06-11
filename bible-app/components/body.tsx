import {useRouter} from 'next/router'
import gitHub from '../Images/icons8-github-100.png'
export default function body(){
    const router = useRouter()
 function renderPage(){
    router.push('/Home/Home')
 }

return(
    <>
    
    <div className="bibleContainer">
    <div id ='introImage' ></div>
    <h1 id="Intro">Breath</h1>
    <h5 id ='Intro2'>Your personal bible study</h5>
    <button onClick={()=>renderPage()}>SignUp</button>
  <a href='https://github.com/rapperthedabber/Bible-Media'><img  id = 'github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img></a>

   </div>
   <div className='container'>
   <div id="About">
    <h1 id ='Intro'>What is Breath?</h1>
    
   
    <h5 id = 'Intro3'>This app is dedicated to Christians who would like to deepen their faith in Christ. Users are able to read the bible and journal their faith</h5>
    <h5 id = 'Intro4'> What is Breath?</h5>
    <h1 id ='Intro5'>User Story</h1>
    <h5 id = 'Intro6'>Users can read the bible while responding to the bible with prayer and can be used as part of their daily devotion</h5>
    </div>
    <div id='introImage'>
    <h2 id = 'Intro2'> “Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.” </h2>
       
    </div>
    </div>
   
   </>
    
)
}