import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jenny from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';


const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            image: green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            image: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Jenny Jack Farm",
        image: jenny,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Potager",
        image: potager,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
        nome: "Salad",
        image: salad,
        distancia: `${gerarNumeroAleatorio(1, 500)}m`,
        estrelas: gerarNumeroAleatorio(1, 5),
        },
    ]
}

export default produtores;