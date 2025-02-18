export default function Exercice1() {
    return <BienvenueAventurier
        titre="Boutique d'Archibald le Sorcier 🧙‍♂️"
        texte="Bienvenue Aventurier, ici vous pouvez acheter diverses potions pour vos aventures !"/>;
}

function BienvenueAventurier(props) {
    return (
        <>
            <section id="exercice1" className="my-5">
            <h1>{props.titre}</h1>
            <p>{props.texte}</p>
            </section>
        </>
    );
}
