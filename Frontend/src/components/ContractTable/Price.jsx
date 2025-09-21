"./ContractTable.css"

import { useOutletContext } from "react-router-dom";

export function Price(){
    const {contract} = useOutletContext
    return(
    <div className="blockTabelSpecifications">
        <div className="blockSpecifications">                  
            <header className="headerBlockSpecifications" >Сумма контракта:{contract.Amount}</header>
    
        </div>
    </div>
    )

}
export default Price;