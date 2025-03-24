"use client";

import { createContext, useState, useContext } from "react";

const initialValues = {
    name: "",
    phone: "",
    birth_month: "",
    withdrawal_amount: 0
}

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [formData, setFormData] = useState(initialValues);

    // Atualiza o initialValues com base o fórmulario recebido na requisição
    const updateFormData = (newData) => {
        setFormData(prevState => ({
            ...prevState,
            ...newData
        }));
    }

    return (
        <AppContext.Provider value={{ formData, updateFormData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);