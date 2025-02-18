export default function Exercice2() {
    function afficherAlerte(param) {
        alert(param);
    }

    return (
        <>
            <BoutonAppelArchibald quandSorcierRepond={afficherAlerte} />
        </>
    );
}

function BoutonAppelArchibald(props) {
    function handleClick() {
        props.quandSorcierRepond("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !");
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Appeler Archibald
        </button>
    );
}