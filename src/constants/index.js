import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Preços",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Como usar",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Nova conta",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Login",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Gerador de imagens",
  "Upscaler de imagens",
  "Integrações perfeitas",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Reconhecimento de voz",
    text: "Habilitar o chatbot para ouvir e reconhecer comandos `prompts` feitos por voz, tornando o uso ainda mais fácil até mesmo para quem quer ficar com as mãos livres.",
    date: "Maio 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamificação",
    text: "Adicione elementos semelhantes a jogos, como distintivos ou tabelas de classificação, para incentivar os usuários a interagir com o chatbot com mais frequência.",
    date: "Junho 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personalização do chatbot",
    text: "Permita que os usuários personalizem a aparência e o comportamento do chatbot, tornando-o mais envolvente e divertido de interagir.",
    date: "Abril 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integração com API's",
    text: "Permita que o chatbot acesse fontes de dados externas, como APIs de clima ou de notícias, para fornecer recomendações mais relevantes.",
    date: "Abril 2024",
    status: "done",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText =
  "Automação inteligente e segurança de alto nível, é a solução perfeita para equipes que desejam trabalhar de forma mais inteligente.";

export const collabContent = [
  {
    id: "0",
    title: "Integração Perfeita",
    text: collabText,
  },
  {
    id: "1",
    title: "Automação Inteligente",
  },
  {
    id: "2",
    title: "Segurança em uso",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, recomendações personalizadas",
    price: "Grátis",
    features: [
      "Um chatbot capaz de atender suas necessidades",
      "Recomendações personalizadas  com base em seus interesses",
      "Oportunidade de interagir e explorar as capacidades da I.A sem custo algum ",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Chatbot com IA avançada, suporte prioritário, painel de análises",
    price: "8.99",
    features: [
      "Um chatbot de IA avançado que pode entender consultas complexas",
      "Um painel de análise para rastrear suas conversas",
      "Suporte prioritário para resolver problemas rapidamente",
    ],
  },
  {
    id: "2",
    title: "Empresarial",
    description: "Chatbot de IA personalizado, análise avançada, conta dedicada",
    price: null,
    features: [
      "Um chatbot com IA que pode entender suas consultas",
      "Recomendações personalizadas com base em suas preferências",
      "Capacidade de explorar o aplicativo e seus recursos sem nenhum custo",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pergunte o que quiser",
    text: "Permite que os usuários encontrem rapidamente respostas para suas perguntas sem ter que pesquisar em várias fontes.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Todo dia, uma melhoria",
    text: "O aplicativo usa processamento de linguagem natural para entender as consultas do usuário e fornecer respostas precisas e relevantes.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Em qualquer lugar",
    text: "Conecte-se com o chatbot de IA de qualquer lugar, em qualquer dispositivo, tornando-o mais acessível e conveniente.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Resposta rápida",
    text: "Nosso tempo de resposta vem sendo testado e otimizado diariamente, o uso continuo nos ajuda a melhorar ainda mais o tempo.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Suporte acessível",
    text: "Lembrando que a acessibilidade não é apenas uma obrigação ética, mas também uma oportunidade de criar ambientes e serviços mais inclusivos e benéficos para todos.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Expanda os horizontes ",
    text: "A Arch-AI é uma excelente ferramenta para te ajudar em seus negócios, funções complexas e laboriosas, diminuindo em até 20x o tempo de conclusão de suas funções.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
