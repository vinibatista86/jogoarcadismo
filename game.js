(function () {
  "use strict";

  const LEMAS = [
    "fugere urbem",
    "inutilia truncat",
    "carpe diem",
    "locus amoenus",
    "aurea mediocritas",
  ];

  const PATRONS = {
    "fugere urbem": {
      symbol: "🌿",
      name: "Sileno, o guardião dos campos",
      message:
        "Seu espírito poético busca afastar-se dos excessos e reencontrar a simplicidade da vida natural.",
      cssClass: "tarot-card--fugere-urbem",
      image: "Fugere Urbem.png",
    },
    "inutilia truncat": {
      symbol: "✂️",
      name: "Lísias, o escultor das palavras",
      message:
        "Seu espírito poético acredita que a beleza nasce quando retiramos aquilo que sobra.",
      cssClass: "tarot-card--inutilia-truncat",
      image: "Inutilia Truncat.png",
    },
    "carpe diem": {
      symbol: "☀️",
      name: "Dafne, a celebradora do instante",
      message:
        "Seu espírito poético transforma momentos passageiros em experiências eternas.",
      cssClass: "tarot-card--carpe-diem",
      image: "Carpe Diem.png",
    },
    "locus amoenus": {
      symbol: "🏡",
      name: "Amarílis, a pastora do vale perfeito",
      message:
        "Seu espírito poético encontra inspiração na harmonia da natureza.",
      cssClass: "tarot-card--locus-amoenus",
      image: "Locus Ameonus.png",
    },
    "aurea mediocritas": {
      symbol: "⚖️",
      name: "Tírio, o sábio do equilíbrio",
      message:
        "Seu espírito poético valoriza uma vida equilibrada, simples e sem excessos.",
      cssClass: "tarot-card--aurea-mediocritas",
      image: "Aurea Mediocritas.png",
    },
  };

  const POET_FIRST_NAMES = [
    "Glauceste",
    "Elmano",
    "Dirceu",
    "Tomásio",
    "Alceste",
    "Eurilo",
    "Lereno",
    "Filinto",
    "Alcino",
    "Amintas",
    "Melibeu",
    "Tirseu",
    "Corino",
    "Dáfnis",
    "Licidas",
    "Menalcas",
    "Tírsis",
    "Ormênio",
    "Fílades",
    "Eumelo",
    "Niseu",
    "Aristeu",
    "Cíntio",
    "Lísandro",
    "Faetonte",
    "Leandro",
    "Anfriso",
    "Silvano",
    "Alfeu",
    "Píndaro",
    "Evandro",
    "Calisto",
    "Arion",
    "Egeu",
    "Telêmaco",
    "Ítalo",
    "Adônis",
    "Febo",
    "Apolo",
    "Orfeu",
    "Laerte",
    "Hermínio",
    "Aquiles",
    "Teócrito",
    "Menandro",
  ];

  const POET_LAST_NAMES = [
    "Satúrnio",
    "Fenício",
    "Arcádio",
    "Montano",
    "Lusitano",
    "Mineiro",
    "Pastorino",
    "Aoniano",
    "Parnasiano",
    "Délfico",
    "Alfeu",
    "Ismênio",
    "Lírico",
    "Bucólico",
    "Campestre",
    "Silvestre",
    "Fluminense",
    "Egeu",
    "Helênico",
    "Árcade",
    "Teocríteo",
    "Virgiliano",
    "Homérico",
    "Olímpico",
    "Apolíneo",
    "Musageta",
    "Febeu",
    "Pastoral",
    "Sereno",
    "Rústico",
    "Verdejante",
    "Valino",
    "Galateu",
    "Lirídeo",
    "Menálio",
    "Dafníaco",
    "Erimante",
    "Peneu",
    "Citerônio",
    "Itálico",
    "Tírio",
    "Doriano",
    "Jônio",
    "Tessálio",
    "Deliano",
  ];

  const SCENES = [
    {
      chapter: "Capítulo I — O bilhete",
      paragraphs: [
        "Você é um jovem estudante na Universidade de Coimbra, em Portugal, e aspirante a poeta. Além dos estudos, aproveita os cafés da cidade, as óperas e teatros, e faz alguns poucos versos enquanto tenta encontrar seu estilo. Um dia, ao voltar para seu dormitório, encontra um bilhete por debaixo da porta.",
      ],
      quote:
        "Se tua alma de poeta é verdadeira, me encontre na Rua da Sofia no primeiro minuto da madrugada.",
      paragraphsAfter: [
        "A criminalidade em Coimbra vem sendo combatida nos últimos anos, mas você fica curioso pela misteriosa mensagem. Após pensar muito:",
      ],
      choices: [
        {
          text: "Você não sente muito receio de perder nada, a aventura parece mais interessante.",
          scores: { "aurea mediocritas": 1, "fugere urbem": 1 },
        },
        {
          text: "Apesar de um certo medo, você considera uma oportunidade que pode não se repetir.",
          scores: { "carpe diem": 1 },
        },
        {
          text: "A mensagem simples e direta mexe com você. Parece que algo importante te chama.",
          scores: { "locus amoenus": 1, "inutilia truncat": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo II — O encontro",
      paragraphs: [
        "Na importante Rua da Sofia, abaixo de uma lamparina apagada, uma figura estranha parece fazer um sinal, que logo você compreende e se aproxima. Ele afirma que basta mais um ímpeto de aceitação seu para que sua alma de poeta seja encontrada verdadeiramente.",
      ],
      dialogue:
        "Todos os poetas precisam encontrar algo que os leve adiante, e alguns patronos podem ser os guias dessa busca",
      paragraphsAfter: [
        "explica a figura estranha. Para isso, você deve seguir numa viagem imediatamente. O destino é o interior, o campo, uma paisagem que pode te levar ao encontro de si, ou melhor, de um outro eu, um poeta e pastor que você se tornará. Pronto?",
      ],
      choices: [
        {
          text: "Estou apenas com a roupa do corpo e o que tenho bolso. Enfim, justamente tudo que preciso.",
          scores: { "inutilia truncat": 1, "aurea mediocritas": 1 },
        },
        {
          text: "Estou precisando de umas férias dessa vida corrida na cidade. Aqui sinto que não vivo de verdade.",
          scores: { "carpe diem": 1, "fugere urbem": 1 },
        },
        {
          text: "O campo me parece um espaço interessante. Quem sabe lá eu me encontro.",
          scores: { "locus amoenus": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo III — O campo",
      paragraphs: [
        "Depois de uma longa viagem, você finalmente chega ao campo.",
        "O silêncio que encontra ali é diferente daquele que conhecia na cidade. Não é ausência de sons, mas uma mistura delicada: o vento passando pelas árvores, o movimento dos animais e o murmúrio distante da água.",
        "A pequena propriedade onde ficará durante alguns dias parece simples, mas cuidadosamente organizada. Há uma mesa de madeira próxima à janela, alguns livros antigos e um lugar onde poderá escrever seus versos.",
        "Na manhã seguinte, ao sair, você observa um pastor conduzindo seu rebanho e uma jovem colhendo flores perto de um riacho.",
        "Eles parecem não ter pressa.",
      ],
      dialogue:
        "Você veio da cidade, não veio? O que procuram tanto aqueles que vivem cercados de prédios e movimento?",
      paragraphsAfter: ["Você pensa antes de responder."],
      choices: [
        {
          text: "Talvez procurem viver experiências suficientes para terem algo verdadeiro para contar.",
          scores: { "carpe diem": 1 },
        },
        {
          text: "Talvez procurem coisas demais e esqueçam que uma vida simples também pode ser completa.",
          scores: { "aurea mediocritas": 1, "fugere urbem": 1 },
        },
        {
          text: "Talvez procurem inspiração, mas ela sempre esteve diante dos olhos, em lugares como este.",
          scores: { "locus amoenus": 1, "inutilia truncat": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo IV — Aprender a olhar",
      paragraphs: [
        "Depois da conversa, você passa o restante da manhã observando o trabalho das pessoas daquele lugar.",
        "Percebe que ninguém parece buscar grandes riquezas ou reconhecimento. Cada pessoa parece concentrada naquilo que está fazendo naquele momento.",
        "Ao retornar para a casa, encontra sobre a mesa um caderno deixado pela figura misteriosa.",
      ],
      quote:
        "Um poeta não começa encontrando palavras. Primeiro precisa aprender a olhar.",
      paragraphsAfter: [
        "Você abre o caderno e tenta escrever.",
        "Depois de alguns versos, percebe que suas frases parecem carregadas demais, cheias de enfeites e ideias que não combinam com aquilo que sentiu.",
        "Você decide:",
      ],
      choices: [
        {
          text: "Vou retirar aquilo que parece exagerado. Talvez o poema esteja escondido no que sobra.",
          scores: { "inutilia truncat": 1 },
        },
        {
          text: "Vou manter as imagens desse lugar, pois nunca vi tanta beleza em coisas tão simples.",
          scores: { "locus amoenus": 1 },
        },
        {
          text: "Vou escrever sobre este instante, pois talvez ele desapareça antes que eu perceba.",
          scores: { "carpe diem": 1, "aurea mediocritas": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo V — Ao alcance das mãos",
      paragraphs: [
        "Ao cair da tarde, você caminha até uma pequena área próxima ao riacho.",
        "Ali encontra um agricultor descansando após o trabalho. Ele convida você para sentar por alguns minutos e observa seus escritos.",
        "Depois de ler algumas linhas, ele comenta:",
      ],
      dialogue:
        "Na cidade, muitos passam a vida tentando alcançar algo que nem sabem explicar. Aqui, nós aprendemos a valorizar aquilo que está ao alcance das mãos.",
      paragraphsAfter: [
        "A frase fica em sua memória.",
        "Você responde:",
      ],
      choices: [
        {
          text: "Talvez a verdadeira felicidade esteja em não desejar mais do que aquilo que realmente precisamos.",
          scores: { "aurea mediocritas": 1 },
        },
        {
          text: "Talvez uma vida distante das disputas e ambições permita enxergar melhor o que importa.",
          scores: { "fugere urbem": 1, "locus amoenus": 1 },
        },
        {
          text: "Talvez cada pessoa precise aproveitar o próprio caminho antes que o tempo passe.",
          scores: { "carpe diem": 1, "inutilia truncat": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo VI — O que permanece",
      paragraphs: [
        "Naquela noite, você permanece por alguns minutos sentado perto do riacho.",
        "O céu está limpo e, pela primeira vez em muito tempo, você percebe que não sente necessidade de preencher o silêncio com alguma coisa.",
        "Apenas observa.",
        "Ao voltar para a casa, encontra sobre a mesa alguns papéis antigos. São versos escritos por outro poeta que passou por ali muitos anos antes.",
        "Alguns trechos chamam sua atenção pela beleza. Outros parecem querer impressionar mais do que transmitir algo verdadeiro.",
        "Você pensa sobre o que faz um verso permanecer.",
      ],
      choices: [
        {
          text: "Talvez apenas aquilo que é essencial consiga atravessar o tempo.",
          scores: { "inutilia truncat": 1 },
        },
        {
          text: "Mesmo um pequeno instante pode se tornar eterno quando transformado em poesia.",
          scores: { "carpe diem": 1, "locus amoenus": 1 },
        },
        {
          text: "Talvez aquele poeta tenha encontrado felicidade justamente por escolher uma vida simples e tranquila.",
          scores: { "fugere urbem": 1, "aurea mediocritas": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo VII — O que se busca",
      paragraphs: [
        "Na manhã seguinte, você acorda mais cedo do que o habitual.",
        "A paisagem parece diferente: ou talvez seja você quem tenha mudado a forma de enxergá-la.",
        "Enquanto escreve, a jovem que havia encontrado no primeiro dia se aproxima e pergunta sobre seus versos.",
        "Ela lê algumas linhas e diz:",
      ],
      dialogue:
        "Você chegou aqui procurando um lugar para escrever. Mas talvez estivesse procurando outra coisa.",
      paragraphsAfter: [
        "A pergunta fica suspensa no ar:",
        "O que você realmente busca ao criar poesia?",
      ],
      choices: [
        {
          text: "Quero encontrar beleza naquilo que parece simples e revelar aquilo que as pessoas não percebem.",
          scores: { "locus amoenus": 1, "aurea mediocritas": 1 },
        },
        {
          text: "Quero transformar sentimentos e momentos vividos em algo que permaneça.",
          scores: { "carpe diem": 1 },
        },
        {
          text: "Quero afastar das palavras tudo aquilo que parece falso ou desnecessário.",
          scores: { "inutilia truncat": 1, "fugere urbem": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo VIII — O retorno da figura",
      paragraphs: [
        "No último dia de sua permanência no campo, a figura misteriosa retorna.",
        "Ela observa os versos que você escreveu durante esses dias e sorri.",
      ],
      dialogue:
        "Quando chegou aqui, você procurava um estilo. Agora começa a descobrir uma identidade.",
      paragraphsAfter: [
        "Ela então mostra cinco pequenos símbolos antigos, cada um representando um caminho diferente para um poeta.",
        "Mas antes de receber seu patrono, você precisa responder uma última pergunta:",
        "Se amanhã retornasse à cidade, o que levaria desta experiência?",
      ],
      choices: [
        {
          text: "Levaria a lembrança de que a vida não precisa de excessos para ser completa.",
          scores: { "aurea mediocritas": 1, "fugere urbem": 1 },
        },
        {
          text: "Levaria a vontade de aproveitar cada momento, pois nenhum deles volta exatamente igual.",
          scores: { "carpe diem": 1, "locus amoenus": 1 },
        },
        {
          text: "Levaria a certeza de que a poesia nasce quando abandonamos aquilo que é artificial.",
          scores: { "inutilia truncat": 1 },
        },
      ],
    },
    {
      chapter: "Capítulo IX — O primeiro verso",
      paragraphs: [
        "A figura entrega um pergaminho.",
      ],
      dialogue:
        "Escreva agora o primeiro verso daquele que realmente se tornou um poeta.",
      paragraphsAfter: [
        "A pena toca o papel.",
        "Qual verso nasce naturalmente?",
      ],
      choices: [
  {
    text: "À sombra amena de frondoso louro,\nMurmura o rio por leito cristalino;\nDas aves soa o melodioso coro,\nQue faz do vale um templo peregrino.",
    scores: { "locus amoenus": 1 },
  },
  {
    text: "Da corte ingrata aparto o pensamento,\nE busco os prados de sereno encanto;\nTroco o rumor por brando acalento,\nE ao som das fontes entrego meu canto.",
    scores: { "fugere urbem": 1 },
  },
  {
    text: "Colhamos já da flor a formosura,\nAntes que o tempo lhe desfaça a graça;\nBreve declina a juvenil frescura,\nComo a alvorada que depressa passa.",
    scores: { "carpe diem": 1 },
  },
  {
    text: "Não busco os bens que a vã fortuna ordena,\nNem me seduz o fausto dos senhores;\nMais vale a vida simples, doce e amena,\nTecida em paz por campestres lavores.",
    scores: { "aurea mediocritas": 1 },
  },
  {
    text: "Fuja o meu verso da afeição pomposa,\nQue em vão procura ornato e galhardia;\nMais bela surge a expressão singela e airosa,\nQuando se alia à clara melodia.",
    scores: { "inutilia truncat": 1 },
  },
]
    },
  ];

  const screens = {
    intro: document.getElementById("screen-intro"),
    game: document.getElementById("screen-game"),
    result: document.getElementById("screen-result"),
  };

  const elements = {
    btnStart: document.getElementById("btn-start"),
    btnRestart: document.getElementById("btn-restart"),
    chapterLabel: document.getElementById("chapter-label"),
    progressFill: document.getElementById("progress-fill"),
    sceneText: document.getElementById("scene-text"),
    sceneChoices: document.getElementById("scene-choices"),
    narrative: document.getElementById("narrative"),
    tarotCard: document.getElementById("tarot-card"),
    patronImageSlot: document.getElementById("patron-image-slot"),
    patronImage: document.getElementById("patron-image"),
    patronSymbol: document.getElementById("patron-symbol"),
    patronImagePlaceholder: document.getElementById("patron-image-placeholder"),
    patronLema: document.getElementById("patron-lema"),
    patronName: document.getElementById("patron-name"),
    patronMessage: document.getElementById("patron-message"),
    poetName: document.getElementById("poet-name"),
  };

  let currentScene = 0;
  let scores = createEmptyScores();
  let isTransitioning = false;

  function createEmptyScores() {
    return LEMAS.reduce(function (acc, lema) {
      acc[lema] = 0;
      return acc;
    }, {});
  }

  function showScreen(name) {
    Object.keys(screens).forEach(function (key) {
      const screen = screens[key];
      const active = key === name;
      screen.hidden = !active;
      screen.classList.toggle("screen--active", active);
    });
  }

  function formatParagraphs(paragraphs) {
    return paragraphs.map(function (p) {
      return "<p>" + escapeHtml(p) + "</p>";
    }).join("");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function buildSceneHtml(scene) {
    let html = formatParagraphs(scene.paragraphs);

    if (scene.quote) {
      html += "<blockquote>" + escapeHtml(scene.quote) + "</blockquote>";
    }

    if (scene.dialogue) {
      html += '<p class="narrative__dialogue">"' + escapeHtml(scene.dialogue) + '"</p>';
    }

    if (scene.paragraphsAfter) {
      html += formatParagraphs(scene.paragraphsAfter);
    }

    return html;
  }

  function renderScene(index) {
    const scene = SCENES[index];
    elements.chapterLabel.textContent = scene.chapter;
    elements.progressFill.style.width =
      ((index + 1) / SCENES.length) * 100 + "%";
    elements.sceneText.innerHTML = buildSceneHtml(scene);

    elements.sceneChoices.innerHTML = "";
    scene.choices.forEach(function (choice, choiceIndex) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.textContent = choice.text;
      btn.addEventListener("click", function () {
        handleChoice(choice);
      });
      elements.sceneChoices.appendChild(btn);
    });

    elements.narrative.classList.remove("narrative--fade-out");
    elements.narrative.classList.add("narrative--fade-in");
  }

  function applyScores(choiceScores) {
    Object.keys(choiceScores).forEach(function (lema) {
      scores[lema] += choiceScores[lema];
    });
  }

  function getWinningLema() {
    let maxScore = -1;
    let winner = LEMAS[0];

    LEMAS.forEach(function (lema) {
      if (scores[lema] > maxScore) {
        maxScore = scores[lema];
        winner = lema;
      }
    });

    return winner;
  }

  function generatePoetName() {
    const first =
      POET_FIRST_NAMES[Math.floor(Math.random() * POET_FIRST_NAMES.length)];
    const last =
      POET_LAST_NAMES[Math.floor(Math.random() * POET_LAST_NAMES.length)];
    return first + " " + last;
  }

  function showResult() {
    const winningLema = getWinningLema();
    const patron = PATRONS[winningLema];

    elements.tarotCard.className = "tarot-card " + patron.cssClass;
    elements.patronImage.src = patron.image;
    elements.patronImage.alt = "Ilustração de " + patron.name;
    elements.patronImage.hidden = false;
    elements.patronImageSlot.classList.add("tarot-card__image-slot--has-image");
    elements.patronSymbol.hidden = true;
    elements.patronImagePlaceholder.hidden = true;
    elements.patronLema.textContent = winningLema;
    elements.patronName.textContent = patron.name;
    elements.patronMessage.textContent = '"' + patron.message + '"';
    elements.poetName.textContent = generatePoetName();

    showScreen("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleChoice(choice) {
    if (isTransitioning) return;
    isTransitioning = true;

    applyScores(choice.scores);

    elements.narrative.classList.remove("narrative--fade-in");
    elements.narrative.classList.add("narrative--fade-out");

    setTimeout(function () {
      currentScene += 1;

      if (currentScene >= SCENES.length) {
        showResult();
      } else {
        renderScene(currentScene);
      }

      isTransitioning = false;
    }, 380);
  }

  function startGame() {
    currentScene = 0;
    scores = createEmptyScores();
    isTransitioning = false;
    elements.patronImage.hidden = true;
    elements.patronImage.removeAttribute("src");
    elements.patronImageSlot.classList.remove("tarot-card__image-slot--has-image");
    elements.patronSymbol.hidden = false;
    elements.patronImagePlaceholder.hidden = false;
    showScreen("game");
    renderScene(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  elements.btnStart.addEventListener("click", startGame);
  elements.btnRestart.addEventListener("click", startGame);
})();
