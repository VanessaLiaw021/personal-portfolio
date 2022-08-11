//Import images
import BlastOff from '../assets/blastoff.png';
import EFit from '../assets/e-fit.png';
import Somewhere from '../assets/somewhere.png';
import PasswordGenerator from '../assets/passwordGenerator.png';
import Game from '../assets/game.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { DiJqueryLogo, DiMongodb, DiNodejsSmall } from 'react-icons/di';

//List of my projects
const projects = [
    {
        id: 1, 
        image: Game,
        imageAlt: "Rock Paper Scissor Game Image",
        title: "Rock Paper Scissor Game",
        tools: [
            <FontAwesomeIcon icon={ faHtml5 } />,
            <FontAwesomeIcon icon={ faCss3Alt } />,
            <FontAwesomeIcon icon= { faJsSquare } />
        ],
        description: "A mini game that a user can play against a computer",
        liveSite: "https://vanessaliaw021.github.io/rock-paper-scissor-game/",
        gitHub: "https://github.com/VanessaLiaw021/rock-paper-scissor-game"
    },
    {
        id: 2, 
        image: PasswordGenerator,
        imageAlt: "Password Generator Image",
        title: "Password Generator",
        tools: [
            <FontAwesomeIcon icon={ faHtml5 } />,
            <FontAwesomeIcon icon={ faCss3Alt } />,
            <FontAwesomeIcon icon= { faJsSquare } />
        ],
        liveSite: "https://vanessaliaw021.github.io/password-generator/",
        gitHub: "https://github.com/VanessaLiaw021/password-generator-app"
    },
    {
        id: 3, 
        image: Somewhere,
        imageAlt: "Somewhere image",
        title: "Somewhere",
        tools: [
            <FontAwesomeIcon icon={ faHtml5 } />,
            <FontAwesomeIcon icon={ faCss3Alt } />,
            <FontAwesomeIcon icon={ faBootstrap } />,
            <DiJqueryLogo />
        ],
        liveSite: "https://jthefox.github.io/somewhere-project/",
        gitHub: "https://github.com/JtheFox/somewhere-project"
    },
    {
        id: 4, 
        image: BlastOff,
        imageAlt: "BlastOff Image",
        title: "BlastOff",
        tools: [
            <FontAwesomeIcon icon={ faHtml5 } />,
            <FontAwesomeIcon icon={ faCss3Alt } />,
            <DiNodejsSmall />,
            <FontAwesomeIcon icon={ faDatabase } />
        ],
        liveSite: "https://blastoff2.herokuapp.com/",
        gitHub: "https://github.com/JtheFox/blastoff"
    },
    {
        id: 5,
        image: EFit,
        imageAlt: "E-Fit E-Commerce Image",
        title: "E-Fit",
        tools: [
            <DiMongodb />,
            <DiNodejsSmall />,
            <FontAwesomeIcon icon={ faReact }/>,
            <FontAwesomeIcon icon={ faNode } />
        ],
        liveSite: "https://polar-shelf-24197.herokuapp.com/",
        gitHub: "https://github.com/VanessaLiaw021/E-Fit"
    }
];

//Export list of projects
export default projects;