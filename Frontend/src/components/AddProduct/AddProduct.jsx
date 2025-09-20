import "./AddProduct.css"
export function AddProduct(){

    return(
 <div className="blockProductaConteiner">
        <div className="blockProducta"> 
            <div className="hContract">
                <header>Добавление продукта</header>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Название продукта</label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Цена</label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Категория</label>
                <input className='searchInput'></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Описание</label>
                <input className='searchInput'></input>
            </div>
           <div className="buttonBlock">
                <button className="buttonCancel">Отмена</button>
                <button className="buttonAccept">Добавить</button>
            </div>
        </div>
    </div>
    )
}
export default AddProduct;