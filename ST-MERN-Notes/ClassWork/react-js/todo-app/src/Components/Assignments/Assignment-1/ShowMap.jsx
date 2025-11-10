function ShowMap({show}){
    const button = {
        true : "Hide",
        false : "Show"
    }
    return button[show] ?? null;
}

export default ShowMap