import "./ProductCard.css"
import image from"./image.png";
export function ProductCard(){

    return(
         <div className="blockTabl">
                <div className="blockTablCap">
                   <header className="hBlockTablCap">Название</header>
                </div>
                <div className="infoProduct">
                    <div className="blockImg"> 
                        <img src={image} className="img"></img>
                    </div>
                        <div className="info"> 
                            <label className="price">Цена:23312</label>
                            <div className="blockInfo"> 
                                <label className="id">Id:</label>
                                <label>Категория:</label>
                                <label>Описание:</label>
                            </div>
                        </div>
                
                </div>
            </div>

    )
}
export default ProductCard;