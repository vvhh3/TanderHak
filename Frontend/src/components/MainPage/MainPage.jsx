import './MainPage.css';
import { BrowserRouter, Scripts } from "react-router-dom";
export function MainPage(){
    
    return(
        <>
           <div className='mainPage'>
                <div className='hearderMainPage'>
                    <header className='hManePage'>Привет</header>
                    <p className='pManePage'>Чем помочь сегодня?</p>
                </div>
                <div className='searchInputBlock'> 
                    <input className='searchInput'></input>
                </div>
           </div>
        </>
    )
}
export default MainPage;
