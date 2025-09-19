import './MainPage.css';
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
