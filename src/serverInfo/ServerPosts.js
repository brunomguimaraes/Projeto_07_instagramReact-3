const serverPosts = [
    {profile: {name: "rio.de.janeiro", image: "Rio de Janeiro.jpeg", reference: ""},
    media: {type: "image",  main: "Maracana Lotado.jpg", text: "Que saudade desse maracanã lotado!!"},
    likes: [
        {name: "berlim", image: "Berlin.jpg", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"}
    ],
    comments: [
        {name: "berlim", reference: "#", text: "Nem me fala, cara! Boas memórias! @buenos.aires lembra?"},
        {name: "buenos.aires", reference: "#", text: "@berlim Eu não quero falar sobre isso...."},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"}
    ],
    timeSinceSent: "3 horas"
    },

    {profile: {name: "pisa", image: "Pisa.jpg", reference: ""},
    media: {type: "image",  main:  "Torre de Pisa.jpg", text: "Minha maravilha da Idade Média! #NewProfilePic"},
    likes: [
        {name: "roma", image: "Roma.jpg", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"}
    ],
    comments: [
        {name: "agra", reference: "#", text: "Sobre essa lista, algum adm pode adicionar o Taj Mahal no grupo?"},
        {name: "santos", reference: "#", text: "E desde quando prédio torto é maravilha?!"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
    ],
    timeSinceSent: "6 horas"
    },   

    {profile: {name: "moscou", image: "Moscou.jpg", reference: ""},
    media: {type: "video",  main: "Moscou Snow", text: "Que frio!!"},
    likes: [
        {name: "vancouver", image: "Vancouver.jpg", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"},
        {name: "example", image: "example", reference: "#"}
    ],
    comments: [
        {name: "rio.de.janeiro", reference: "#", text: "O que é esse negócio branco?"},
        {name: "curitiba", reference: "#", text: "Frio?? Isso é porque você não viu aqui!"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"},
        {name: "example", reference: "#", text: "example"}
    ],
    timeSinceSent: "12 horas"
    }
]

export default serverPosts