import "./style.scss";
import { useState } from "react";

import Form from "./Form ";
import List from "./List";

import Condition from "../../helpers/Condition";

const beneficiaryInitialValue = {
  name: "",
  percentage: "",
};

const AlertCard = () => {
  return (
    <div className="cypoc__alert-card">
      <h4>Atention</h4>
      The percentage sum must be equal to 100%
    </div>
  );
};

const Beneficiary = () => {
  const [currentBeneficiary, setCurrentBeneficiary] = useState(
    beneficiaryInitialValue
  );
  const [beneficiaryList, setBeneficiaryList] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOnChange = (e) => {
    const { value } = e.target;
    const field = e.target.getAttribute("field");
    setCurrentBeneficiary({ ...currentBeneficiary, [field]: value });
  };

  const handleToggleModal = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBeneficiaryList([...beneficiaryList, currentBeneficiary]);
    setCurrentBeneficiary(beneficiaryInitialValue);
    handleToggleModal();
  };

  const handleDelete = (beneficiaryName) => () => {
    const newList = beneficiaryList.filter(
      (beneficiary) => beneficiary.name !== beneficiaryName
    );

    setBeneficiaryList(newList);
  };

  const percentageValue = beneficiaryList.reduce((acc, cur) => {
    return acc + parseInt(cur.percentage);
  }, 0);

  const isValidStep = percentageValue === 100;

  const buttonClassNamae = `cypoc__next ${
    !isValidStep ? "cypoc__next--disabled" : ""
  }`;
  return (
    <div className="cypoc">
      <h1 className="cypoc__title">New beneficiary</h1>

      <Form
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        currentBeneficiary={currentBeneficiary}
        isVisible={isFormVisible}
        handleClose={handleToggleModal}
      />

      <List beneficiaryList={beneficiaryList} handleDelete={handleDelete} />

      <Condition condition={!isValidStep}>
        <button className="cypoc__add" onClick={handleToggleModal}>
          Add beneficiary
        </button>

        <AlertCard />
      </Condition>

      <button className={buttonClassNamae}>Next</button>
    </div>
  );
};

export default Beneficiary;
