const serverPosts = [
    {profile: {name: "rio.de.janeiro", image: "Rio de Janeiro.jpeg", alt:"Rio Profile Pic", reference: ""},
    media: {type: "image",  main: "Maracana Lotado.jpg", alt: "Macarana Lotado", text: "Que saudade desse maracanã lotado!!"},
    likes: [
        {name: "berlim", image: "Berlin.jpg", alt: "Berlim Profile Pic", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"}
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

    {profile: {name: "pisa", image: "Pisa.jpg",  alt:"Pisa Profile Pic", reference: ""},
    media: {type: "image",  main:  "Torre de Pisa.jpg", alt:"Torre de Pisa",text: "Minha maravilha da Idade Média! #NewProfilePic"},
    likes: [
        {name: "roma", image: "Roma.jpg", alt: "Roma Profile Pic", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"}
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

    {profile: {name: "moscou", image: "Moscou.jpg", alt:"Moscow Profile Pic", reference: ""},
    media: {type: "video",  main: "Moscow Snow", text: "Que frio!!"},
    likes: [
        {name: "vancouver", image: "Vancouver.jpg", alt: "Vancouver Profile Pic", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"},
        {name: "example", image: "example", alt: "example", reference: "#"}
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
];

export default serverPosts;