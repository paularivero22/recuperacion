
function Casilla({numCasilla, letra, comunicarPadre}) {
    const handleClick = () => {
        comunicarPadre(numCasilla);
    }   


    return (
        <div onClick={handleClick}>
            <h1>`${letra}`</h1>
        </div>
    );
}