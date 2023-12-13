import { useCharacters } from "@/contexts/characters.context";

const Home = () => {
    const { characters, viewState, paginate } = useCharacters();

    const onButtonClicked = () => {
        paginate();
    };

    return (
        <div>
            {/* Success */}
            {viewState === "SUCCESS" || "PAGINATING" ? (
                <div>
                    {JSON.stringify(characters)}
                    <button onClick={onButtonClicked} disabled={viewState === "PAGINATING"}>Fetch more</button>
                </div>
            ) : null}
            
            {/* Loading */}
            {viewState === "LOADING" ? (
                <div>TODO: Loading</div>
            ) : null}

            {/* Error */}
            {["NOT_FOUND", "INTERNAL_ERROR"].includes(viewState) ? (
                <div>TODO: Error</div>
            ) : null}
        </div>
    );
};

export default Home;