import { CharactersProvider } from "@/contexts/characters.context";

const RootLayout = ({ children }: any) => {
    return (
        <CharactersProvider>
            {children}
        </CharactersProvider>
    );
};

export default RootLayout;