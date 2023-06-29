import React from "react";

/*
    react hooks ile this.props vs gerek kalmadan obje şeklinde değerleri alıyoruz
*/

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "form-group"; // bootstrap ile alakalı
  if (error && error.length > 0) {
    // error varsa class olarak has-error ekle
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error&&<div className="alert alert-danger"> {error} </div>} {/* hata varsa yazdır */}
      </div>
    </div>
  );
};

export default TextInput;
