// import "./ContractTable.css";
// import { Link, Outlet, useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export function ContractTable() {
//   const [contract, setContract] = useState();
//   const [loading, setLoading] = useState(true);
//   const [searchParams] = useSearchParams(); 
//   const contractName = searchParams.get("name"); // получаем имя из query (?name=...)

// useEffect(() => {
//   const fetchContract = async () => {
//     try {
//       const res = await axios.post("http://45.150.8.176:8080/api/searchContract", {
//         name: contractName,
//       });

//       const contractsArray = res.data?.params?.Contracts;
//       if (contractsArray && contractsArray.length > 0) {
//         setContract(contractsArray[0]); // берём первый контракт
//       } else {
//         setContract(null);
//       }
//     } catch (err) {
//       console.error("Ошибка загрузки контракта:", err);
//       setContract(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (contractName) fetchContract();
// }, [contractName]);

//   if (loading) return <p>Загружаю контракт…</p>;
//   if (!contract) return <p>Контракт не найден</p>;

//   return (
//     <div className="blockTabl">
//       <div className="blockTablCap">
//         <Link className="buttonblockTablCap" to="GeneralInformation">
//           <p className="pButtonblockTablCap">Общие сведения</p>
//         </Link>
//         <Link className="buttonblockTablCap" to="Customer">
//           <p>Заказчик</p>
//         </Link>
//         <Link className="buttonblockTablCap" to="Executor">
//           <p>Исполнитель</p>
//         </Link>
//         <Link className="buttonblockTablCap" to="Price">
//           <p>Цена</p>
//         </Link>
//       </div>

//       {/* передаём контракт дочерним роутам */}
//       <Outlet context={{ contract }} />
//     </div>
//   );
// }

// export default ContractTable;
import "./ContractTable.css";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ContractTable() {
  const [contract, setContract] = useState(null); // объект контракта
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams(); 
  const contractName = searchParams.get("name"); // получаем имя из query (?name=...)

  useEffect(() => {
  const fetchContract = async () => {
    console.log("Ищем контракт по имени:", contractName);
    try {
      const res = await axios.post("http://45.150.8.176:8080/api/searchContract", {
        name: contractName,
      });
      console.log("Ответ бэка:", res.data);

      const contractsArray = res.data?.params?.Contracts;
      console.log("Массив контрактов:", contractsArray);

      if (contractsArray && contractsArray.length > 0) {
        console.log("Выбираем первый контракт:", contractsArray[0]);
        setContract(contractsArray[0]);
      } else {
        setContract(null);
        console.warn("Контракт не найден");
      }
    } catch (err) {
      console.error("Ошибка загрузки контракта:", err);
      setContract(null);
    } finally {
      setLoading(false);
    }
  };

  if (contractName) fetchContract();
}, [contractName]);


  if (loading) return <p>Загружаю контракт…</p>;
  if (!contract) return <p>Контракт не найден</p>;

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
        <Link className="buttonblockTablCap" to="Price">
          <p>Цена</p>
        </Link>
      </div>

      {/* Можно показать краткую информацию прямо здесь */}
      <div className="contractInfo">
        <h3>{contract.Name}</h3>
        <p><strong>Заказчик:</strong> {contract.Customer}</p>
        <p><strong>Поставщик:</strong> {contract.Supplier}</p>
        <p><strong>Сумма:</strong> {contract.Amount}</p>
        <p><strong>Дата заключения:</strong> {contract.Date}</p>
        <p><strong>Закон:</strong> {contract.Law}</p>
      </div>

      {/* Передаём контракт дочерним компонентам через Outlet */}
      <Outlet context={{ contract }} />
    </div>
  );
}

export default ContractTable;