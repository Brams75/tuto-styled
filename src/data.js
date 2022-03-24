import feature1 from './images/feature1.svg'
import feature2 from './images/feature2.svg'
import feature3 from './images/feature3.svg'

export default {
  plans: [
    {
      name: 'Mini',
      price: '2,95',
      features: [
        '<span class="bold accent">Un seul</span> domaine',
        'Installation en un click',
        'Bande passante <span class="bold accent">illimitée</span>',
        'Certificat SSL <span class="bold accent">gratuit</span>',
        'Inclus un domaine <span class="bold accent">gratuit</span>'

      ]
    },
    {
      name: 'Bébé',
      price: '3,95',
      features: [
        'Domaines<span class="bold accent"> illimités</span>',
        'Installation en un click',
        'Bande passante <span class="bold accent">illimitée</span>',
        'Certificat SSL <span class="bold accent">gratuit</span>',
        'Inclus un domaine <span class="bold accent">gratuit</span>'

      ]
    },
    {
      name: 'Pro',
      price: '5,95',
      features: [
        'Domaines<span class="bold accent"> illimités</span>',
        'Installation en un click',
        'Bande passante <span class="bold accent">illimitée</span>',
        'Certificat SSL <span class="bold accent">gratuit</span>',
        'IP dédié <span class="bold accent">gratuit</span>',
        'Outils SEO <span class="bold accent">gratuits</span>',
        'Support <span class="bold accent">prioritaire</span>',
        'Inclus un domaine <span class="bold accent">gratuit</span>'
      ]
    }
  ],
  features: [
    {
      title: "Lancez votre site web avec Hostcoders aujourd'hui !",
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita similique, illo modi vero harum eveniet, doloribus in corrupti id quis magnam tempora quibusdam blanditiis repellat! Veritatis rerum nulla beatae?',
      img: feature1
    },
    {
      title: 'Débutez rapidement & facilement',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita similique, illo modi vero harum eveniet, doloribus in corrupti id quis magnam tempora quibusdam blanditiis repellat! Veritatis rerum nulla beatae?',
      img: feature2
    },
    {
      title: 'Instalation en un click !',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita similique, illo modi vero harum eveniet, doloribus in corrupti id quis magnam tempora quibusdam blanditiis repellat! Veritatis rerum nulla beatae?',
      img: feature3
    }
  ]
}
