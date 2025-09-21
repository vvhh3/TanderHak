import { useState } from "react";
import "./AddProduct.css"
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
export function AddProduct(){
    const [product,setProduct] = useState({name:'',price:'',category:'',description:''})

    const saveProduct = async () =>{
        try{
            const payload = {
                name:product.name,
                price:Number(product.price),
                category:product.category,
                description:product.description
            }
            // const res =  await axios.post("http://45.150.8.176:8080/api/chat", payload)
            setProduct({name:'',price:'',category:'',description:''})
        }catch(error){
            console.log(error)
        }
    }
  const navigate = useNavigate();
    const handleClose = () =>{
        navigate('/')
    }
    return(
 <div className="blockProductaConteiner">
        <div className="blockProducta"> 
            <div className="hContract">
                <header>Добавление продукта</header>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Название продукта</label>
                <input className='searchInput' placeholder="Название" value={product.name} onChange={(e) => setProduct({...product,name:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Цена</label>
                <input className='searchInput' placeholder="Цена" value={product.name} onChange={(e) => setProduct({...product,price:e.target.value})} ></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Категория</label>
                <input className='searchInput'placeholder="категория" value={product.category} onChange={(e) => setProduct({...product,category:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Описание</label>
                <input className='searchInput' placeholder="Цена" value={product.description} onChange={(e) => setProduct({...product,description:e.target.value})}></input>
            </div>
           <div className="buttonBlock">
                <button className="buttonCancel" onClick={handleClose}>Отмена</button>
                <button className="buttonAccept" onClick={saveProduct}>Добавить</button>
            </div>
        </div>
    </div>
    )
}
export default AddProduct;