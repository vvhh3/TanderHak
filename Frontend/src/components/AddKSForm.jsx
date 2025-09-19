import React, { useState } from "react";
import axios from "axios";

const AddKSForm = () => {
  const [ksList, setKsList] = useState([]);

  const [ksForm, setKsForm] = useState({
    name: "",
    customerName: "",
    customerINN: "",
    supplierName: "",
    supplierINN: "",
    amount: "",
    startDate: "",
    endDate: "",
    category: "",
    legalBasis: ""
  });

  // ================================
  // Функции для будущего бэка
  // ================================

  const saveKS = async () => {
    try {
      const payload = { ...ksForm, amount: Number(ksForm.amount) || 0 };

      // ================================
      // В будущем здесь будет POST-запрос на создание КС
      // const res = await axios.post("http://backend-server/api/ks", payload);
      // setKsList([...ksList, res.data]);
      // ================================
      const newKS = { id: Date.now(), ...payload };
      setKsList([...ksList, newKS]);
      console.log("newKS:", newKS);
      console.log("ksList:", ksList);
      console.log("ksForm:", ksForm);
      // Сброс формы
      setKsForm({
        name: "",
        customerName: "",
        customerINN: "",
        supplierName: "",
        supplierINN: "",
        amount: 0,
        startDate: "",
        endDate: "",
        category: "",
        legalBasis: ""
      });
    } catch (err) {
      console.error("Ошибка при сохранении КС:", err);
      alert("Ошибка при сохранении КС");
    }
  };

  return (
    <div>
      <h2>КС</h2>
      <input placeholder="Название КС" value={ksForm.name} onChange={e => setKsForm({ ...ksForm, name: e.target.value })} />
      <input placeholder="Сумма КС" type="number" value={ksForm.amount} onChange={e => setKsForm({ ...ksForm, amount: e.target.value })} />
      <input placeholder="Категория ПП" value={ksForm.category} onChange={e => setKsForm({ ...ksForm, category: e.target.value })} />
      <input placeholder="Имя заказчика" value={ksForm.customerName} onChange={e => setKsForm({ ...ksForm, customerName: e.target.value })} />
      <input placeholder="ИНН заказчика" type="number" value={ksForm.customerINN} onChange={e => setKsForm({ ...ksForm, customerINN: e.target.value })} />
      <input placeholder="Имя поставщика" value={ksForm.supplierName} onChange={e => setKsForm({ ...ksForm, supplierName: e.target.value })} />
      <input placeholder="ИНН поставщика" type="number" value={ksForm.supplierINN} onChange={e => setKsForm({ ...ksForm, supplierINN: e.target.value })} />
      <input placeholder="Закон основание" value={ksForm.legalBasis} onChange={e => setKsForm({ ...ksForm, legalBasis: e.target.value })} />
      <button onClick={saveKS}>Добавить КС</button>
    </div>
  );
};

export default AddKSForm;