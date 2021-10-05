import { Fragment } from "react";

const Form = ({
  handleOnChange,
  handleSubmit,
  currentBeneficiary,
  isVisible,
  handleClose,
}) => {
  const formClassName = `cypoc__form ${
    isVisible ? "cypoc__form--visible" : ""
  }`;

  const overlayClassName = `cypoc__overlay ${
    isVisible ? "cypoc__overlay--visible" : ""
  }`;

  return (
    <Fragment>
      <div className={overlayClassName} onClick={handleClose} />
      <form onSubmit={handleSubmit} className={formClassName}>
        <div className="cypoc__form-row">
          <label className="cypoc__form-label">Full name:</label>
          <input
            className="cypoc__form-input"
            onChange={handleOnChange}
            type="text"
            placeholder="Full name"
            value={currentBeneficiary?.name}
            field="name"
          />
        </div>
        <div className="cypoc__form-row">
          <label className="cypoc__form-label">Percentage:</label>
          <input
            className="cypoc__form-input"
            onChange={handleOnChange}
            type="number"
            placeholder="100%"
            value={currentBeneficiary?.percentage}
            field="percentage"
          />
        </div>
        <button
          className="cypoc__form-button cypoc__form-button--text"
          type="button"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button className="cypoc__form-button" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
