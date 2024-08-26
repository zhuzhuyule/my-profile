import React from 'react';

const FormStatusContext = React.createContext({
  readonly: true,
  toggleReadonly: () => {},
});

export function FormStatusProvider({ children }: { children: React.ReactNode }) {
  const [readonly, setReadonly] = React.useState(true);
  const value = React.useMemo(
    () => ({ readonly, toggleReadonly: () => setReadonly((prev) => !prev) }),
    [readonly, setReadonly],
  );
  return <FormStatusContext.Provider value={value}>{children}</FormStatusContext.Provider>;
}

export const useFormStatus = () => {
  return React.useContext(FormStatusContext);
};
