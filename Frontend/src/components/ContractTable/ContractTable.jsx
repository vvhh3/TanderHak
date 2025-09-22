import "./ContractTable.css";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ContractTable() {
  const [contract, setContract] = useState(null); // объект контракта
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams(); 
  const [inputs,setInputs]=useState()
  const input = 'найти контракты компании ип шкурко'
  // const contractName = searchParams.get("name"); // получаем имя из query (?name=...)

  useEffect(() => {
  const fetchContract = async () => {
    //  const inputUser = Cookies.get('response')
    console.log("Ищем контракт по имени:");
    try {
      const res = await axios.post("http://45.150.8.176:8080/api/chat", {
              user_id: 1,
              message: input});
      console.log("Ответ:", res);
      setContract(res.data.params.Contracts[0])
      console.log("ВЫВОД" + contract)

      // const contractsArray = res.data.params.Contracts[0];
      // console.log("Массив контрактов:", contractsArray);
          // setContract(contractsArray[0])
          // console.log("fsdf"+contract)
      // if (contractsArray && contractsArray.length > 0) {
      //   console.log("Выбираем первый контракт:", contractsArray[0]);
      //   setContract(contractsArray[0]);
      // } else {
      //   setContract(null);
      //   console.warn("Контракт не найден");
      // }
    } catch (err) {
      console.error("Ошибка загрузки контракта:", err);
      setContract(null);
    } finally {
      setLoading(false);
    }
  };

  fetchContract();
}, []);


  // if (loading) return ;
  // if (!contract) return <p>Контракт не найден</p>;

  return (
    <div className="blockTabl">
      <div className="blockTablCap">
        <Link className="buttonblockTablCap" to="GeneralInformation">
          <p className="pButtonblockTablCap">Общие сведения</p>
        </Link>
        <Link className="buttonblockTablCap" to="Customer">
          <p>Заказчик</p>
        </Link>
        <Link className="buttonblockTablCap" to="Executor">
          <p>Исполнитель</p>
        </Link>
      </div>

      {/* Передаём контракт дочерним компонентам через Outlet */}
      <Outlet context={{ contract }} />
    </div>
  );
}

export default ContractTable;