import { useMediaQuery } from "react-responsive";
import { createContext, ReactNode, useContext } from "react";

interface ScreenState {
    isScreenMobile: boolean;
    isScreenDesktop: boolean;
}

interface Props {
    children: ReactNode;
}

const ScreenContext = createContext<ScreenState>({} as ScreenState);

export const ScreenProvider = ({ children }: Props) => {
    const isScreenMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isScreenDesktop = useMediaQuery({ minWidth: 769, maxWidth: 9999 });

    return (
        <ScreenContext.Provider value={{ isScreenMobile, isScreenDesktop }}>
            {children}
        </ScreenContext.Provider>
    );
};

export const useScreen = (): ScreenState => useContext(ScreenContext);