import "./QuotationSessiTable.css"
export function GeneralInformationQuotationSessiTable(){
    
    return(
<>   
    <div className="blockTabelSpecifications">
        <div className="blockSpecifications">                  
            <header className="headerBlockSpecifications" >Наименование КС:</header>
            <div className="blockLabelBlockSpecifications">           
                <label className="labelBlockSpecifications">ID КС:</label>
                <label className="labelBlockSpecifications">Дата создания КС:</label>
                <label className="labelBlockSpecifications">Дата завершения КС:</label>
                <label className="labelBlockSpecifications">Закон-основание:</label>
            </div>
        </div>
    </div>
</>

    )
}
export default GeneralInformationQuotationSessiTable;