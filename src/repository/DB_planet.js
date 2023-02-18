// @coauthor {Eduardo, Henrique, João, Carolina}

let planet = [
  {
    id: 0,
    name: "Arcano",
    icon: "/img/planet/p1.png",
    background: "../../public/img/planet/p2.png",
    description: "esse planeta é só um teste!",
  },
  {
    id: 1,
    name: "Hyperion",
    icon: "/img/planet/p2.png",
    background: "/img/planet/p2.png",
    description: "esse planeta é só um outro teste!",
  },
  {
    id: 2,
    name: "Silfrena",
    icon: "/img/planet/p3.png",
    background: "/public/img/planet/p2.png",
    description: "esse planeta é só um outro teste!",
  },
  {
    id: 3,
    name: "Zephyrion",
    icon: "/img/planet/p4.png",
    background: "/img/planet/p2.png",
    description: "esse planeta é só um outro teste!",
  },
];
//  types:
//  Salada
//  Sobremesa
//  Prato principal
//  entrada
let recipe = [
  {
    id: 0,
    id_planet: 1,
    name: "Prato Cibernético com Nanofungos e Glóbulos de Carga",
    description: "Um prato eletrizante",
    type: "Prato principal",
    time: "10 min",
    ingredients: [
      "200g de nanofungos",
      "1 colher de sopa de bit-sal",
      "50g de aglomerato de chips",
      "10 glóbulos de carga"],
    instructions: [
      "Em uma panela, coloque água e deixe ferver. Adicione os nanofungos e cozinhe por 3 minutos. Escorra e reserve.",
      "Em um prato de apresentação, espalhe o aglomerato de chips e adicione os nanofungos por cima.",
      "Polvilhe o bit-sal sobre a mistura de chips e fungos.",
      "Coloque os glóbulos de carga sobre o prato, e sirva imediatamente para que os glóbulos liberem sua carga elétrica, dando um toque de energia ao prato."],
    image: "/img/recipe/p.png",
    delete: false,
    visit_count: 0,
  },
  {
    id: 1,
    id_planet: 1,
    name: "Arroz de Mariscos Intergaláctico",
    description: "O Arroz de Mariscos Intergaláctico é um prato sofisticado e elegante, que seria perfeito para ser servido em um banquete alienígena de gala",
    type: "Prato principal",
    time: "30 min",
    ingredients: [
      "500g de mariscos (mexilhões, vôngoles, lulas)",
      "1 xícara de arroz",
      "1 colher de sopa de manteiga alienígena",
      "1/2 xícara de vinho alienígena branco",
      "1 limão alienígena",
      "Sal e pimenta a gosto"],
    instructions: [
      "Comece limpando e preparando os mariscos, removendo a areia e retirando as conchas dos mexilhões e vôngoles. Reserve.",
      "Em uma panela, aqueça o azeite em fogo médio-alto. Adicione a cebola roxa e o alho picados e refogue até que fiquem macios.",
      "Adicione o arroz à panela e misture bem com a cebola e o alho. Cozinhe por cerca de 2 minutos.",
      "Adicione os mariscos ao arroz e misture delicadamente. Tampe a panela e deixe cozinhar por mais 10 minutos ou até que os mariscos estejam cozidos.",
      "Adicione a manteiga alienígena e misture bem. Tempere com sal e pimenta a gosto.",
      "Sirva o arroz de mariscos intergaláctico com uma fatia de limão alienígena."],
    image: "/img/recipe/prat1.png",
    delete: false,
    visit_count: 0,
  },
];

module.exports = { planet, recipe };
