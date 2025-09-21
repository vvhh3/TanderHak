import "./ContractTable.css";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ContractTable() {
  const [contract, setContract] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams(); 
  const contractName = searchParams.get("name"); // получаем имя из query (?name=...)

  useEffect(() => {
    const fetchContract = async () => {
      try {
        const res = await axios.post("http://45.150.8.176:8080/api/searchContract", {
          name: contractName,
        });
        console.log(res.data)
        setContract(res.data); // например, { id, name, customer, executor, price }
      } catch (err) {
        console.error("Ошибка загрузки контракта:", err);
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

      {/* передаём контракт дочерним роутам */}
      <Outlet context={{ contract }} />
    </div>
  );
}

export default ContractTable;