import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { CharactersProvider } from "./contexts/characters.context.tsx";
import { App } from "./app/App.tsx";

import "./styles/global.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <CharactersProvider>
            <App />
        </CharactersProvider>
    </BrowserRouter>
);
