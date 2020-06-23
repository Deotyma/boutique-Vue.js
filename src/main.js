import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
    data: {
        products: [{
                id: '1',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.z7RykSvD8pkhhZR-HnKoWQHaHa%26pid%3DApi&f=1',
                title: 'Acer',
                description: 'Un ordinateur extraordinaire. le plus leger et le plus flexibe des ordinateurs portable disponible en ligne.',
                price: 1500
            },
            {
                id: '2',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J02JQF4hmDwAkgyt7qjmwwHaE6%26pid%3DApi&f=1',
                title: 'Asus',
                description: 'Un ordinateur extraordinaire d\'un couleur unique et coeur inter.',
                price: 1700
            },
            {
                id: '3',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.J02JQF4hmDwAkgyt7qjmwwHaE6%26pid%3DApi&f=1',
                title: 'ChromeBook',
                description: 'Un ordinateur qui s\'allume très vite avec un memoire hors de norme.',
                price: 700
            },
            {
                id: '4',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lnDEadjdw0W9U974cOoD6gHaE6%26pid%3DApi&f=1',
                title: 'HP',
                description: 'Un Ordinateur unique et extraordinaire. Un regal pour les joueurs.',
                price: 1000
            },
            {
                id: '5',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wksi2t5TBm7G7LAaStbtrwHaEK%26pid%3DApi&f=1',
                title: 'HP',
                description: 'Un ordinateur meilleur que MacBook. Oui c\'est possible. essayez par vous-mêmes.',
                price: 1200
            },
            {
                id: '6',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cVuGSRPksSj6wbN4fJRwJAHaEL%26pid%3DApi&f=1',
                title: 'MacBook',
                description: 'Le fruit de geni de Steve Jobs. Il faut l\'avoir ',
                price: 1600
            },
            {
                id: '7',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TQ8r9tNr4Q4F_7ULjR9zOwHaE6%26pid%3DApi&f=1',
                title: 'Lenovo',
                description: 'Prtit Pinky pour ta mère. Elle va être ravie.',
                price: 800
            },
            {
                id: '8',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DaJTtDdWsJ8OOpg-cL4JHQHaE7%26pid%3DApi&f=1',
                title: 'MacBook',
                description: 'Un ordinateur qu\'il faut  essayer ou moins une fois dans la vie. Ideal pour les programmmeurs.',
                price: 1700
            }
        ],
        cart: [{
                id: '7',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TQ8r9tNr4Q4F_7ULjR9zOwHaE6%26pid%3DApi&f=1',
                title: 'Lenovo',
                description: 'Prtit Pinky pour ta mère. Elle va être ravie.',
                price: 800
            },
            {
                id: '8',
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DaJTtDdWsJ8OOpg-cL4JHQHaE7%26pid%3DApi&f=1',
                title: 'MacBook',
                description: 'Un ordinateur qu\'il faut  essayer ou moins une fois dans la vie. Ideal pour les programmmeurs.',
                price: 1700
            }
        ]
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')