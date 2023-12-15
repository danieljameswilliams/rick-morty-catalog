import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { ScreenProvider } from "./contexts/useScreen.tsx";
import { CharactersProvider } from "./contexts/useCharacters.tsx";

import { App } from "./app/App.tsx";
import "./styles/global.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ScreenProvider>
            <CharactersProvider>
                <App />
            </CharactersProvider>
        </ScreenProvider>
    </BrowserRouter>
);
