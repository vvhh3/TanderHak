import "./ContractTable.css"
import { useOutletContext } from "react-router-dom";
export function GeneralInformation(){
     const { contract } = useOutletContext();
    return(
        <>
       
                <div className="blockTabelSpecifications">
                    <div className="blockSpecifications">                  
                        <header className="headerBlockSpecifications" >ID контракта:{contract.ID}</header>
                        <div className="blockLabelBlockSpecifications">
                        
                            <label className="labelBlockSpecifications">Дата заключения контракта:{contract.Date}</label>
                            <label className="labelBlockSpecifications">Закон-основание:{contract.Law}</label>
                        </div>
                    </div>
                </div>
                
     
        </>

    )
}
export default GeneralInformation;