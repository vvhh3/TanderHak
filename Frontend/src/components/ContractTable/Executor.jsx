import Contract from "../contract/Contract";
import "./ContractTable.css";
import { useOutletContext } from "react-router-dom";
export function Executor(){
    const{contract} = useOutletContext()
    return(
     <div className="blockTabelSpecifications">
        <div className="blockSpecifications">                  
         <header className="headerBlockSpecifications" >Наименование поставщика:{contract.Supplier}</header>
            <div className="blockLabelBlockSpecifications">
                
                <label className="labelBlockSpecifications">ИНН поставщика:{contract.SupplierINN}</label>     
                {/* <label className="labelBlockSpecifications">Категория ПП первой позиции спецификации:</label>          */}
            </div>
        </div>
    </div>
    )
}
export default Executor;