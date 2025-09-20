import "./Table.css"
export function Table(){
    return(
        <>
            <div className="blockTabl">
                <div className="blockTablCap">
                    <button className="buttonblockTablCap">Общие сведения</button>
                    <button className="buttonblockTablCap">предложение</button>
                    <button className="buttonblockTablCap">Характеристики</button>
                    <button className="buttonblockTablCap">Классификация </button>
                </div>
                <div className="blockTabelSpecifications">
                    <div className="blockSpecifications"> 
                        <header className="headerBlockSpecifications" >Название компании</header>
                        <div className="blockLabelBlockSpecifications">
                            <label className="labelBlockSpecifications">ID CTE:</label>
                            <label className="labelBlockSpecifications">Модель:</label>
                            <label className="labelBlockSpecifications">Производитель:</label>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Table;