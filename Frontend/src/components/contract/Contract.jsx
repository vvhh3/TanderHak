import "./Contract.css";
export function Contract(){

    return(
    <>
   
    <div className="blockContractConteiner">
        <div className="blockContract"> 
            <div className="hContract">
                <header>Создание контракта</header>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Наименование контракта</label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ID контракта</label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Сумма контракта</label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Дата заключения контракта </label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Категория ПП первой позиции спецификации </label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ИНН заказчика   </label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Наименование поставщика </label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ИНН поставщика </label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Закон-основание </label>
                <input className='searchInput'></input>
            </div>
            <div className="buttonBlock">
                <button className="buttonCancel">Отмена</button>
                <button className="buttonAccept">Создать</button>
            </div>
        </div>
    </div>
    </>
    )
}
export default Contract;