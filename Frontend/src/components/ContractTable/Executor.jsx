import "./ContractTable.css";
export function Executor(){
    return(
     <div className="blockTabelSpecifications">
        <div className="blockSpecifications">                  
         <header className="headerBlockSpecifications" >Наименование поставщика:</header>
            <div className="blockLabelBlockSpecifications">
                
                <label className="labelBlockSpecifications">ИНН поставщика:</label>     
                <label className="labelBlockSpecifications">Категория ПП первой позиции спецификации:</label>     
            </div>
        </div>
    </div>
    )
}
export default Executor;