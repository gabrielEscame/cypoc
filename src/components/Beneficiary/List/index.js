import Condition from "../../../helpers/Condition";

const List = ({ beneficiaryList, handleDelete }) => {
  const hasBeneficiaries = beneficiaryList.length > 0;
  return (
    <Condition
      condition={hasBeneficiaries}
      elseChildren={
        <p className="cypoc__no-beneficiary">No beneficiaries included.</p>
      }
    >
      <div className="cypoc__beneficiaries-list">
        {beneficiaryList &&
          beneficiaryList.map((beneficiary) => {
            return (
              <div
                className="cypoc__beneficiary"
                onClick={handleDelete(beneficiary?.name)}
              >
                <p>{beneficiary?.name}</p>
                <p>{beneficiary?.percentage}%</p>
              </div>
            );
          })}
      </div>
    </Condition>
  );
};

export default List;
