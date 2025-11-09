import React from "react";


export const Button = ({ breed, variant = "primary", ...props }) => {
  const base = "px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const styles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-white text-white hover:bg-white hover:text-primary",
  };
  return (
    <button className={clsx(base, styles[variant])} {...props}>
      {children}
    </button>
  );
};
