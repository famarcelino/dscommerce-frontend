import { createContext } from "react";

export type ContextCartCountType = {
    contextCartCount: number;
    setContextCartCount: (ContextCartCountType: number) => void;
}

export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount: 0,
    setContextCartCount: () => {}
})