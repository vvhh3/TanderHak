import "./QuotationSessiTable.css"
import { Link, Outlet } from "react-router-dom";
export function QuotationSessiTable(){

    return(
    <>
        <div className="blockTabl">
                <div className="blockTablCap">
                    <Link className="buttonblockTablCap" to="/QuotationSessiTable/GeneralInformation">
                      <p className="pButtonblockTablCap">Общие сведения</p>
                    </Link>
                    <Link className="buttonblockTablCap" to="/QuotationSessiTable/Customer" > 
                      <p>Заказчик</p>
                    </Link>
                    <Link className="buttonblockTablCap" to="/QuotationSessiTable/Executor" > 
                    <p>Исполнитель</p>
                    </Link>
                    <Link className="buttonblockTablCap" to="/QuotationSessiTable/Price">
                    <p>Цена</p>
                    </Link>
                </div>
             <Outlet ></Outlet>
            </div>
    </>
    )
}
export default QuotationSessiTable;