// import "../core/button.scss";

import React, { useEffect } from "react";

interface IProps {
  label?: string;
}

export const PaymentButton = (props: IProps) => {
  const { label } = props;

  useEffect(() => {
    // Adding this useEffect causes errors in my other project.
  }, []);

  return <div className="">{label}</div>;
};
