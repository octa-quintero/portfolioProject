import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors= [ "#cb1e1d, #c1ab4a"];

export const info = {
    firstName: "Octavio",
    lastName: "Quintero",
    initials: "Octa",
    position: " Full Stack Web Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
        emoji: '🌎',
        text: 'Soy de Argentina'
        },
        {
            emoji: '💻',
            text: 'Trabajo en proyectos de programación como freelancer.'
        },
        {
          emoji: '🥁',
          text: 'Baterista en tiempos libres.'
      },
        {
            emoji: "📧",
            text: "Mi contacto octa.quinteroo@gmail.com"
        }
    ],
    socials: [
      {
          link: "https://www.instagram.com/octa.quintero",
          icon: 'fa fa-instagram',  
          label: 'instagram',
          className: 'instagram-icon'
      },
      {
          link: "https://github.com/octa-quintero",
          icon: "fa fa-github",
          label: 'github',
          className: 'github-icon'
      },
      {
          link: "www.linkedin.com/in/octavio-quintero",
          icon: "fa fa-linkedin",
          label: 'linkedin',
          className: 'linkedin-icon'
      },

    ],
    bio: "Me considero activo, siempre buscando proyectos para seguir creciendo en lo que me gusta! Programar",
    skills:
        {
            proficientWith: ['JavaScript', 'React.JS', 'SQL','Node.JS', 'React.js', 'GitHub', 'HTML5', 'CSS3','Express','Redux','Postgres', 'Sequelize'],
            exposedTo: []
        }
    ,
    hobbies: [
        {
            label: 'Baterista en tiempo libre =)',
            emoji: '🥁'
        },
        {
            label: 'Me gusta viajar',
            emoji: '⛺'
        },
        {
            label: 'y escuchar Musica todo el dia!!',
            emoji: '🎼'
        }
    ],
    // portfolio: [
    //     {
    //         title: "Project 1",
    //         live: "https://paytonpierce.dev", 
    //         source: "https://github.com/paytonjewell",
    //         image: mock1
    //     },
    //     {
    //         title: "Project 2",
    //         live: "https://paytonpierce.dev",
    //         source: "https://github.com/paytonjewell",
    //         image: mock2
    //     },
    //     {
    //         title: "Project 3",
    //         live: "https://paytonpierce.dev",
    //         source: "https://github.com/paytonjewell",
    //         image: mock3
    //     },
    //     {
    //         title: "Project 4",
    //         live: "https://paytonpierce.dev",
    //         source: "https://github.com/paytonjewell",
    //         image: mock4
    //     },
    //     {
    //         title: "Project 5",
    //         live: "https://paytonpierce.dev",
    //         source: "https://github.com/paytonjewell",
    //         image: mock5
    //     }
    // ]
}