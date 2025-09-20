import "./ContractTable.css"
import { Link, Outlet } from "react-router-dom";

export function ContractTable(){
    return(
         <>
           <div className="blockTabl">
                <div className="blockTablCap">
                    <Link className="buttonblockTablCap" to="/ContractTable/GeneralInformation">
                      <p className="pButtonblockTablCap">Общие сведения</p>
                    </Link>
                    <Link className="buttonblockTablCap" to="/ContractTable/Customer"> 
                      <p>Заказчик</p>
                    </Link>
                    <Link className="buttonblockTablCap" to="/ContractTable/Executor"> 
                    <p>Исполнитель</p>
                    </Link>
                    <Link className="buttonblockTablCap" to="/ContractTable/Price">
                    <p>Цена</p>
                    </Link>
                </div>
             <Outlet ></Outlet>
            </div>

           
    </>
    )
}
export default ContractTable;