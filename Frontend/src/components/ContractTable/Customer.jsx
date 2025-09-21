import "./ContractTable.css"
import { useOutletContext } from "react-router-dom";
export function Customer(){
      const { contract } = useOutletContext();
    return(
         <div className="blockTabelSpecifications">
                    <div className="blockSpecifications">                  
                        <header className="headerBlockSpecifications" >Наименование заказчика: {contract.Customer}</header>
                        <div className="blockLabelBlockSpecifications">
                            
                            <label className="labelBlockSpecifications">ИНН заказчика: {contract.CustomerINN}</label>
                        </div>
                    </div>
                </div>
    )
}
export default Customer;