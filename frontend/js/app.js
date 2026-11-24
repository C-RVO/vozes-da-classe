// =========================================================
// VOZES DA CLASSE - site.js
// =========================================================


// ---------- Dados do site ----------
const SITE = {
  nome: 'Vozes da Classe',
  lema: 'A informação nasce onde a vida acontece.',
  sub: 'A notícia que dá voz à sociedade',
  cidade: 'Fazenda Rio Grande',
  // ícone da foice e martelo, que aparece ao lado esquerdo do título
  logo: 'img/Nova pasta/Icones do Site/01 Icone_Foice_e_Martelo.png'
};

// ---------- Redes sociais (ícones do rodapé) ----------
// para trocar um link, é só mexer na linha "link" da rede
const PASTA_ICONES = 'img/Nova pasta/Icones do Site/';

const REDES = [
  {
    nome: 'Instagram',
    link: 'https://www.instagram.com/vozesdaclasse/',
    icone: PASTA_ICONES + '02 Icone_Instagram.png'
  },
  {
    nome: 'Twitter',
    link: 'https://x.com/VozesdaClasse',
    icone: PASTA_ICONES + '03 Icone_Twitter.png'
  },
  {
    nome: 'TikTok',
    link: 'https://www.tiktok.com/@jornalvozesdaclasse',
    icone: PASTA_ICONES + '04 Icone_TikTok.png'
  }
];

const CATS = {
  'cultura': 'Cultura',
  'batalha-htc': 'Batalha HTC'

  // Seções ocultas temporariamente (sem conteúdo por enquanto).
  // Para trazer de volta, é só mover a linha para cima da lista acima
  // (sem as barras //) e colocar uma vírgula na linha anterior.
  //   'politica': 'Política',
  //   'cidades': 'Cidades',
  //   'trabalho': 'Trabalho',
  //   'direitos-sociais': 'Direitos Sociais',
  //   'economia': 'Economia',
  //   'educacao': 'Educação',
  //   'meio-ambiente': 'Meio Ambiente'
};


// ---------- Texto da página do Coletivo RVO ----------
// o texto está dividido em duas partes: a imagem entra entre elas
const COLETIVO = {
  titulo: 'Sobre o Coletivo RVO (Revolução)',

  imagem: 'img/Nova pasta/Postagens do Coletivo/01_Post_Site_Coletivo.png',
  legenda: 'Arte do Coletivo RVO',

  // antes da imagem
  parte1: [
    'O Coletivo RVO tem como objetivo reunir pessoas com ideias, conhecimentos e vontade de contribuir para a construção de uma sociedade mais justa e consciente. Queremos ser um espaço onde diferentes pessoas possam compartilhar experiências, desenvolver iniciativas e transformar boas ideias em ações que tragam benefícios para a população, especialmente para as classes e grupos que historicamente enfrentam desigualdades, injustiças e opressões.',

    'Acreditamos que a transformação social acontece quando as pessoas se unem, participam e colocam suas ideias em prática. Por isso, o coletivo está sendo estruturado para atuar em diferentes frentes, abrangendo áreas como educação, cultura, arte, comunicação e ação social. Essas frentes representam diferentes possibilidades de participação e contribuição para a sociedade.',

    'Uma delas é o jornal “Vozes da Classe”, que tem como propósito dar visibilidade aos problemas e descasos de Fazenda Rio Grande, levar informação à população, abrir espaço para as demandas da comunidade e cobrar do poder público atenção e providências diante dos problemas que afetam a cidade.',

    'As demais frentes de atuação ainda estão em fase de estudo e planejamento. Estamos avaliando possibilidades, discutindo ideias e buscando caminhos para que cada iniciativa seja desenvolvida de forma responsável, organizada e alinhada aos princípios do coletivo. Queremos construir esse projeto aos poucos, respeitando nossas possibilidades e valorizando a participação de todos.'
  ],

  // depois da imagem
  parte2: [
    'Um dos nossos princípios fundamentais é o respeito a todas as pessoas, independentemente de sua origem, identidade, condição social, crença, orientação ou qualquer outra característica. Não abrimos espaço para preconceito, discriminação ou qualquer forma de desrespeito. Para nós, todas as pessoas merecem ser ouvidas, respeitadas e valorizadas. Esse é um princípio inegociável.',

    'Também somos um coletivo independente de partidos políticos. Isso significa que não temos compromisso com interesses partidários, mas com a população e com as causas que defendemos. Temos liberdade para reconhecer boas iniciativas, apoiar ações que tragam benefícios à sociedade e cobrar qualquer representante público quando suas atitudes não correspondem aos interesses da população, independentemente de seu partido ou posicionamento político.',

    'Acreditamos que uma sociedade melhor também se constrói por meio do conhecimento, do diálogo e do pensamento crítico. Por isso, valorizamos o estudo, o debate e a troca de ideias como ferramentas importantes para compreender a realidade, defender nossas causas e buscar mudanças com responsabilidade e consciência.',

    'Queremos ajudar a construir soluções. Acreditamos que ninguém precisa enfrentar as dificuldades sozinho e que a união de pessoas, ideias e esforços pode gerar mudanças reais. Queremos incentivar a participação popular e mostrar que todos podem contribuir, cada um à sua maneira, para transformar a realidade ao seu redor.',

    'O Coletivo RVO é um espaço para quem não quer apenas observar os problemas da sociedade, mas deseja participar, propor ideias e fazer parte das mudanças. Nosso propósito é contribuir para a construção de uma Fazenda Rio Grande mais justa, participativa, consciente e comprometida com o bem-estar de sua população.',

    'Se você se identifica com nossa proposta e gostaria de contribuir de alguma forma, será muito bem-vindo(a)! Entre em contato conosco por meio das redes sociais disponíveis nesta página. Será um prazer conhecer suas ideias, ouvir suas sugestões e contar com sua participação nessa construção coletiva.',

    'Toda contribuição é bem-vinda. Afinal, uma transformação começa quando decidimos fazer parte dela!'
  ],

  // frase final, em destaque
  fecho: 'Um abraço e seja bem-vindo(a) ao Coletivo RVO!',

  // perfil do coletivo no Instagram (links do destaque e do ícone final)
  instagram: 'https://www.instagram.com/coletivo.rvo/',
  iconeInstagram: PASTA_ICONES + '02 Icone_Instagram.png',

  // cartão da página inicial
  cartaoTitulo: 'Conheça o Coletivo RVO',
  cartaoResumo: 'Um espaço para reunir pessoas, ideias e ações por uma Fazenda Rio Grande mais justa.'
};


// ---------- Colunas ----------
// Cada coluna tem texto em blocos; a imagem N entra depois do bloco N.
// "categorias": a primeira é a principal (etiqueta e menu); a coluna
// aparece na lista de todas as categorias que estiverem aqui.
// Para uma nova coluna: copie um item, troque os dados e use
// coluna.html?id=NOME-DA-CHAVE como endereço.
const PASTA_BATALHA = 'img/Postagens_Batalha/';
const PASTA_20NOV = 'img/20_de_Novembro/';

const COLUNAS = {

  // ----- Batalha da Hortência -----
  'batalha-hortencia': {
    id: 'batalha-hortencia',
    url: 'coluna.html',
    categorias: ['batalha-htc', 'cultura'],
    titulo: 'Momento Conhecimento: a história do Hip Hop na Batalha da Hortência',
    data: '2026-11-19',
    autor: 'Batalha da Hortência',
    resumo: 'Antes das batalhas, a roda também é espaço de consciência histórica: conheça o Momento Conhecimento.',

    imagens: [
      { src: PASTA_BATALHA + '01_Hortencia_Post_Novembro_2026.png', legenda: 'Bandeira erguida durante a Batalha da Hortência' },
      { src: PASTA_BATALHA + '02_Hortencia_Post_Novembro_2026.png', legenda: 'Participantes da Batalha da Hortência reunidos diante do grafite' },
      { src: PASTA_BATALHA + '03_Hortencia_Post_Novembro_2026.png', legenda: 'Roda da Batalha da Hortência durante o Momento Conhecimento' }
    ],

    blocos: [
      [
        'O “Momento Conhecimento”, como o intitulamos, diz respeito a uma experiência cuja possibilidade e necessidade sempre estiveram em nossas discussões. Entretanto, como eu costumava ser cotado para assumir o papel de mestre de cerimônias desse momento, seu início dependia diretamente da minha disposição. Por alguma razão, não me sentia à altura da responsabilidade de conduzir algo que sempre enxerguei com tanto apreço.',

        'Foi somente a partir da compreensão pragmática — embora, do ponto de vista teórico, esse entendimento já me fosse claro havia bastante tempo — da dimensão coletiva daquele espaço que consegui ressignificar essa responsabilidade. Compreendi que o “Momento Conhecimento” não deveria girar em torno de mim, mas daquilo que eu poderia acrescentar ao coletivo. Não se tratava de uma contribuição individualizada, mas de me reconhecer como mais um participante disposto a agregar ao ritual da batalha. Foi justamente essa dissolução da responsabilidade individual que, para mim, tornou possível darmos início à experiência.'
      ],
      [
        'O “Momento Conhecimento” acontece alguns minutos antes do início das batalhas, enquanto ainda estamos coletando os nomes dos MCs para fazermos as chaves que comporão o momento principal. Assim como na batalha, os participantes se organizam em roda, criando um espaço de troca no qual é apresentada e discutida alguma temática relacionada à consciência histórica. Trata-se de uma abordagem profundamente vinculada à ideia de historicizar a cosmovisão daqueles que participam de um evento de Hip Hop.',

        'Para nós, abordar a história do Hip Hop dentro de um evento de Hip Hop é uma necessidade, afinal, essa cultura está intrinsecamente ligada à disputa pela consciência e pelo controle das narrativas históricas, ou seja, à disputa sobre quem conta, constrói e legitima a história.'
      ],
      [
        'Posto isso, acreditamos no senso crítico do público frequentador das batalhas e, justamente por isso, as discussões são pensadas com o propósito de estimular a ampliação do repertório de ferramentas e perspectivas dos participantes, contribuindo para que desenvolvam diferentes formas de interpretar, questionar e enxergar a realidade a partir das contribuições que a História, as Ciências Sociais, a Filosofia, a Educação e, sobretudo, o próprio Hip Hop têm a oferecer.'
      ]
    ],

    // indicativo final, com o ícone do Instagram
    fecho: { texto: 'Conheça a Batalha da Hortência', link: 'https://www.instagram.com/batalhadahortencia/' }
  },


  // ----- Dia da Consciência Negra (20 de novembro) -----
  '20-de-novembro': {
    id: '20-de-novembro',
    url: 'coluna.html?id=20-de-novembro',
    categorias: ['cultura'],
    titulo: 'Fazenda Rio Grande celebra o Dia da Consciência Negra com cultura, arte e resistência',
    data: '2026-11-21',
    resumo: 'Com roda de capoeira, batalha de rima e show de Marechal, a Secretaria Municipal de Cultura celebrou o Dia da Consciência Negra e a memória de Zumbi dos Palmares.',

    imagens: [
      { src: PASTA_20NOV + '20.jpg', legenda: 'Evento do Dia da Consciência Negra em Fazenda Rio Grande' },
      { src: PASTA_20NOV + 'vv_Fotograma 2026-11-21 000236_1.4.1.jpg', legenda: 'Show de Marechal no Dia da Consciência Negra em Fazenda Rio Grande' }
      // , { src: PASTA_20NOV + 'NOME_DA_TERCEIRA_IMAGEM.jpg', legenda: 'Descrição da imagem' }
    ],

    blocos: [
      [
        'No dia 20 de novembro de 2026, a Secretaria Municipal de Cultura de Fazenda Rio Grande promoveu um evento em comemoração ao Dia da Consciência Negra e à memória de Zumbi dos Palmares. A programação contou com roda de capoeira, batalha de rima e, para encerrar a noite, um show especial de Marechal, um dos grandes nomes do rap nacional, referência nas batalhas de MCs e criador da Batalha do Conhecimento.',

        'Apesar de ainda estar entre as primeiras edições de um evento com essa proposta em Fazenda Rio Grande, esta edição representou um momento muito importante para a cultura e para a história do nosso município. O Dia da Consciência Negra precisa ser reconhecido e valorizado não apenas como uma data comemorativa, mas como um momento de reflexão, memória e resistência.'
      ],
      [
        'Manter viva a lembrança desse dia é reconhecer a história daqueles que vieram antes de nós, recordar as lutas do povo negro contra a escravidão, o racismo e as desigualdades, além de homenagear os heróis que marcaram essa trajetória, como Zumbi dos Palmares. Valorizar essa data também significa conscientizar as novas gerações, para que as injustiças do passado não sejam naturalizadas no presente e, muito menos, se repitam no futuro.',

        'As fortes chuvas que atingiram a cidade naquela noite acabaram reduzindo o público presente. Ainda assim, quem compareceu fez a diferença. O evento mostrou que é possível promover atividades culturais importantes em nosso município, mesmo sem grandes estruturas ou investimentos milionários. Em uma cidade que frequentemente destina recursos a grandes eventos e atrações de alto custo, iniciativas como essa demonstram que a cultura também pode ser valorizada por meio de projetos que carregam significado, representatividade e compromisso com a população.'
      ],
      [
        'Fica aqui nosso agradecimento a todos os envolvidos que compreenderam a importância dessa data e contribuíram para tornar o evento possível. Com poucos recursos, mas com muita dedicação, foi construída uma noite que certamente ficará na memória de quem esteve presente. Aos artistas, nosso reconhecimento por compartilharem seu talento e manterem viva a cultura. E ao público que enfrentou a chuva e compareceu, nosso muito obrigado, pois cada pessoa presente ajudou a transformar essa celebração em realidade.'
      ],
      [
        'Que este seja apenas o começo de uma caminhada de valorização da cultura negra em Fazenda Rio Grande. Que o Dia da Consciência Negra tenha cada vez mais espaço, respeito e reconhecimento em nossa cidade, não apenas no calendário, mas também nas ações e nas políticas culturais do município.'
      ]
    ]
  }
};

// coluna que abre quando o endereço não diz qual
const COLUNA_PADRAO = 'batalha-hortencia';


// ---------- Funções de apoio ----------

// cria um elemento: el('div', {class:'x'}, filho1, filho2)
const el = (tag, atributos = {}, ...filhos) => {
  const e = document.createElement(tag);

  for (const [chave, valor] of Object.entries(atributos)) {
    if (chave === 'class') {
      e.className = valor;
    } else {
      e.setAttribute(chave, valor);
    }
  }

  filhos.flat().forEach(f => e.append(f));
  return e;
};

// formata a data: 2026-11-02 -> 02 de novembro de 2026
const dataBR = iso => {
  return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

// tira acento e deixa minúsculo (usado na busca)
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

// uma notícia pode estar em mais de uma categoria ("categorias");
// a primeira é a principal. Notícias antigas usam só "categoria".
const categoriasDe = n => n.categorias || [n.categoria];
const rotuloCat = n => CATS[categoriasDe(n)[0]] || categoriasDe(n)[0];

const params = new URLSearchParams(location.search);


// ---------- Ícones do mobile ----------
const ICONES = {
  menu: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  busca: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>'
};


// ---------- Nome do site com o ponto vermelho ----------
function logo(tag = 'h1') {
  const h = el(tag);
  h.append(SITE.nome.toUpperCase(), el('span', {}, '.'));
  return h;
}


// ---------- Espaço da logo (imagem) ----------
// se o arquivo img/logo.svg não existir, a imagem some sozinha
function slotLogo() {
  const img = el('img', {
    class: 'logo-slot',
    src: encodeURI(SITE.logo),
    alt: 'Logo ' + SITE.nome
  });

  img.onerror = () => img.remove();
  return img;
}


// ---------- Botão da barra mobile (menu e busca) ----------
function botao(icone, rotulo, alvo) {
  const b = el('button', {
    type: 'button',
    'aria-label': rotulo,
    'aria-expanded': 'false'
  });
  b.innerHTML = icone;

  b.onclick = () => {
    const painel = document.getElementById(alvo);
    const abrir = painel.hidden;

    // fecha todos os painéis antes de abrir o escolhido
    document.querySelectorAll('.painel').forEach(p => p.hidden = true);
    document.querySelectorAll('.barra-mobile button').forEach(x => x.setAttribute('aria-expanded', 'false'));

    painel.hidden = !abrir;
    b.setAttribute('aria-expanded', String(abrir));

    // ao abrir a busca, já deixa o cursor no campo
    if (abrir && alvo === 'painel-busca') {
      painel.querySelector('input').focus();
    }
  };

  return b;
}


// ---------- Cabeçalho ----------
function cabecalho(catAtual) {
  // lista de links: Início + uma por seção
  const itens = [
    ['index.html', 'Início', !catAtual && document.body.dataset.page === 'home'],
    ...Object.entries(CATS).map(([slug, nome]) => ['categoria.html?c=' + slug, nome, slug === catAtual]),
    // aba do coletivo, sempre por último no menu
    ['coletivo.html', 'Coletivo RVO', document.body.dataset.page === 'coletivo']
  ];

  // nome pequeno que aparece na barra mobile
  const nome = el('span', { class: 'nome' });
  nome.append(SITE.nome.toUpperCase(), el('span', {}, '.'));

  const topo = el('div', {},

    // faixa fina lá em cima (desktop)
    el('div', { class: 'faixa' },
      el('div', { class: 'wrap' },
        el('span', {}, 'Jornalismo independente • Informação e cidadania'),
        el('span', {}, new Date().toLocaleDateString('pt-BR'))
      )
    ),

    // marca grande (desktop): logo + nome + lema
    el('div', { class: 'wrap marca' },
      el('a', { href: 'index.html', class: 'esq' },
        slotLogo(),
        el('span', {}, logo(), el('small', {}, SITE.sub.toUpperCase()))
      ),
      el('p', { class: 'lema' }, SITE.lema)
    ),

    // barra mobile: menu | logo | busca
    el('div', { class: 'barra-mobile' },
      botao(ICONES.menu, 'Abrir menu', 'painel-menu'),
      el('a', { href: 'index.html', class: 'centro' }, slotLogo(), nome),
      botao(ICONES.busca, 'Buscar', 'painel-busca')
    ),

    // painel do menu (abre pelo botão)
    el('div', { class: 'painel', id: 'painel-menu', hidden: '' },
      el('ul', {},
        itens.map(([href, texto]) => el('li', {}, el('a', { href: href }, texto)))
      )
    ),

    // painel da busca (abre pelo botão)
    el('form', { class: 'painel', id: 'painel-busca', hidden: '', action: 'categoria.html', role: 'search' },
      el('input', {
        type: 'search',
        name: 'q',
        placeholder: 'Buscar notícias',
        'aria-label': 'Buscar notícias'
      })
    ),

    // menu de seções (no mobile vira linha rolável)
    el('nav', { 'aria-label': 'Seções' },
      el('div', { class: 'wrap' },
        el('ul', {},
          itens.map(([href, texto, atual]) =>
            el('li', {}, el('a', { href: href, ...(atual ? { 'aria-current': 'page' } : {}) }, texto))
          )
        )
      )
    )
  );

  document.body.prepend(topo);
}


// ---------- Ícones das redes sociais ----------
function redesSociais() {
  const caixa = el('div', { class: 'redes' });

  REDES.forEach(rede => {
    const link = el('a', {
      href: rede.link,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': rede.nome
    });

    link.append(el('img', {
      src: encodeURI(rede.icone),
      alt: rede.nome
    }));

    caixa.append(link);
  });

  return caixa;
}


// ---------- Rodapé ----------
function rodape() {
  const l = el('div', { class: 'logo' });
  l.append(SITE.nome.toUpperCase(), el('span', {}, '.'));

  document.body.append(
    el('footer', {},
      el('div', { class: 'wrap' },
        el('div', { class: 'cols' },
          el('div', {},
            l,
            el('p', {}, `Jornal ${SITE.nome} — jornalismo independente, regional e comprometido com o interesse público. Informação, território e cidadania.`)
          ),
          el('div', {},
            el('h4', {}, 'Expediente'),
            el('p', {}, `Um espaço para informar, ouvir e dar visibilidade às histórias de ${SITE.cidade}.`),
            el('h4', { class: 'titulo-redes' }, 'Redes sociais'),
            redesSociais()
          )
        ),
        el('div', { class: 'copy' }, `© ${new Date().getFullYear()} Jornal ${SITE.nome}. Todos os direitos reservados.`)
      )
    )
  );
}


// ---------- Card de notícia ----------
// a imagem fica dentro de uma moldura (.foto): bordas arredondadas
// e zoom suave ao passar o mouse, igual em todo o site.
// o texto fica dentro de uma div (.texto) para o mobile poder
// colocar título e categoria por cima da foto
function card(n, destaque) {
  let classes = 'card';
  if (destaque) classes += ' destaque';
  if (!n.imagem) classes += ' sem-img';

  const cartao = el('a', { class: classes, href: n.url || 'noticia.html?id=' + encodeURIComponent(n.id) });

  if (n.imagem) {
    const img = el('img', { src: n.imagem, alt: n.legenda || '', loading: 'lazy' });
    const foto = el('div', { class: 'foto' }, img);

    // se a imagem não existir, o card continua funcionando sem ela
    img.onerror = () => {
      foto.remove();
      cartao.classList.add('sem-img');
    };

    cartao.append(foto);
  }

  cartao.append(
    el('div', { class: 'texto' },
      el('span', { class: 'cat' }, rotuloCat(n)),
      el('h3', {}, n.titulo),
      el('p', { class: 'meta resumo' }, n.resumo),
      el('p', { class: 'meta' }, `${dataBR(n.data)} · ${n.autor || SITE.nome}`)
    )
  );

  return cartao;
}


// ---------- Seção com lista de notícias ----------
function lista(titulo, noticias, verTodas, vazio) {
  const s = el('section', { class: 'secao' + (verTodas ? ' home' : '') },
    el('header', {},
      el('h2', {}, titulo),
      verTodas ? el('a', { class: 'ver', href: 'categoria.html' }, 'Ver todas') : ''
    )
  );

  if (noticias.length) {
    // na home, a primeira notícia e as fixas (colunas) são destaque
    s.append(el('div', { class: 'grade' },
      noticias.map((n, i) => card(n, verTodas && (i === 0 || n.fixo)))
    ));
  } else {
    s.append(el('p', { class: 'vazio' }, vazio || 'As primeiras reportagens serão publicadas em breve.'));
  }

  // botão do fim da lista (só aparece no mobile)
  if (verTodas && noticias.length) {
    s.append(el('a', { class: 'ver mais-mobile', href: 'categoria.html' }, 'Ver todas as notícias'));
  }

  return s;
}


// ---------- Destaque das palavras "Coletivo RVO", "Coletivo" e "RVO" ----------
// só as versões com inicial maiúscula; "coletivo" minúsculo fica normal.
// "Coletivo RVO" vem primeiro na lista para virar um link só.
function comDestaque(texto) {
  return texto.split(/(Coletivo RVO|Coletivo|RVO)/).map((parte, i) => {
    // as posições ímpares do split são as palavras encontradas
    if (i % 2 === 0) return parte;

    return el('a', {
      class: 'dest-rvo',
      href: COLETIVO.instagram,
      target: '_blank',
      rel: 'noopener noreferrer'
    }, parte);
  });
}


// ---------- Cartão do Coletivo na página inicial ----------
function cartaoColetivo() {
  const cartao = el('a', { class: 'card', href: 'coletivo.html' });

  const img = el('img', {
    src: encodeURI(COLETIVO.imagem),
    alt: COLETIVO.legenda,
    loading: 'lazy'
  });

  // se a imagem não existir, o cartão continua funcionando sem ela
  const foto = el('div', { class: 'foto' }, img);

  img.onerror = () => {
    foto.remove();
    cartao.classList.add('sem-img');
  };

  cartao.append(
    foto,
    el('div', { class: 'texto' },
      el('span', { class: 'cat' }, 'Institucional'),
      el('h3', {}, COLETIVO.cartaoTitulo),
      el('p', { class: 'meta resumo' }, COLETIVO.cartaoResumo)
    )
  );

  return el('section', { class: 'secao coletivo-home' },
    el('header', {}, el('h2', {}, 'Coletivo RVO')),
    el('div', { class: 'grade' }, cartao)
  );
}


// ---------- Página do Coletivo RVO ----------
function paginaColetivo() {
  const artigo = el('article', { class: 'noticia coletivo' },
    el('span', { class: 'cat' }, 'Institucional'),
    el('h1', {}, COLETIVO.titulo)
  );

  // primeira metade do texto (o 1º parágrafo é o "lide", em destaque)
  COLETIVO.parte1.forEach((texto, i) => {
    artigo.append(el('p', { class: i === 0 ? 'lide' : '' }, comDestaque(texto)));
  });

  // arte do coletivo, no meio do texto
  const figura = el('figure', { class: 'arte' });
  figura.append(el('img', {
    src: encodeURI(COLETIVO.imagem),
    alt: COLETIVO.legenda
  }));
  artigo.append(figura);

  // segunda metade do texto
  COLETIVO.parte2.forEach(texto => {
    artigo.append(el('p', {}, comDestaque(texto)));
  });

  // frase final
  const icone = el('a', {
    class: 'ig-fecho',
    href: COLETIVO.instagram,
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Instagram do Coletivo RVO'
  }, el('img', { src: encodeURI(COLETIVO.iconeInstagram), alt: 'Instagram' }));

  artigo.append(el('p', { class: 'fecho' },
    el('span', {}, comDestaque(COLETIVO.fecho)),
    icone
  ));

  return artigo;
}


// ---------- Página de uma coluna ----------
function paginaColuna(col) {
  const artigo = el('article', { class: 'noticia coletivo coluna' },
    el('span', { class: 'cat' }, CATS[col.categorias[0]] || col.categorias[0]),
    el('h1', {}, col.titulo)
  );

  let primeiro = true;

  col.blocos.forEach((bloco, i) => {
    bloco.forEach(texto => {
      artigo.append(el('p', { class: primeiro ? 'lide' : '' }, texto));
      primeiro = false;
    });

    // imagem depois de cada bloco (se houver)
    const foto = col.imagens[i];
    if (foto) {
      const img = el('img', { src: encodeURI(foto.src), alt: foto.legenda });
      const figura = el('figure', { class: 'arte' }, img);

      // se o arquivo não existir, a moldura some em vez de mostrar imagem quebrada
      img.onerror = () => figura.remove();

      artigo.append(figura);
    }
  });

  // indicativo final: texto + ícone do Instagram, os dois com o link
  if (col.fecho) {
    const alvo = {
      href: col.fecho.link,
      target: '_blank',
      rel: 'noopener noreferrer'
    };

    artigo.append(el('p', { class: 'fecho' },
      el('a', { ...alvo, class: 'link-fecho' }, col.fecho.texto),
      el('a', { ...alvo, class: 'ig-fecho', 'aria-label': 'Instagram' },
        el('img', { src: encodeURI(COLETIVO.iconeInstagram), alt: 'Instagram' })
      )
    ));
  }

  return artigo;
}

// ---------- Monta a página ----------
async function main() {
  let todas = [];

  // carrega as notícias, da mais nova para a mais antiga
  try {
    const resposta = await fetch('data/noticias.json', { cache: 'no-cache' });
    todas = await resposta.json();
  } catch (erro) {
    console.error(erro);
  }

  // as colunas entram na lista como notícias fixas: ficam sempre em primeiro
  // (para tirar o destaque de uma coluna, é só apagar "fixo: true" abaixo)
  Object.values(COLUNAS).forEach(c => {
    todas.push({
      id: c.id,
      url: c.url,
      fixo: true,
      categorias: c.categorias,
      titulo: c.titulo,
      resumo: c.resumo,
      data: c.data,
      autor: c.autor,
      imagem: encodeURI(c.imagens[0].src),
      legenda: c.imagens[0].legenda
    });
  });

  // fixas primeiro; depois da mais nova para a mais antiga
  todas.sort((a, b) => (b.fixo ? 1 : 0) - (a.fixo ? 1 : 0) || b.data.localeCompare(a.data));

  const page = document.body.dataset.page;
  const app = document.getElementById('app');
  const wrap = el('main', { class: 'wrap' });
  app.replaceWith(wrap);

  if (page === 'home') {
    // página inicial
    cabecalho();
    wrap.append(lista('Últimas notícias', todas.slice(0, 9), true));
    wrap.append(cartaoColetivo());

  } else if (page === 'coluna') {
    // página de uma coluna (?id=nome); sem id, abre a coluna padrão
    const col = COLUNAS[params.get('id')] || COLUNAS[COLUNA_PADRAO];
    cabecalho(col.categorias[0]);
    document.title = col.titulo + ' — ' + SITE.nome;
    wrap.append(paginaColuna(col));

  } else if (page === 'categoria') {
    // página de seção ou resultado de busca
    const c = params.get('c');
    const q = params.get('q') || '';
    cabecalho(c);

    const titulo = q ? 'Busca: ' + q : (CATS[c] || 'Todas as notícias');
    document.title = titulo + ' — ' + SITE.nome;

    const filtradas = todas.filter(n => {
      const daCategoria = !c || categoriasDe(n).includes(c);
      const daBusca = !q || norm(n.titulo + ' ' + (n.resumo || '')).includes(norm(q));
      return daCategoria && daBusca;
    });

    wrap.append(lista(titulo, filtradas, false, q ? 'Nenhuma notícia encontrada.' : ''));

  } else {
    // página da notícia
    const n = todas.find(x => x.id === params.get('id'));
    cabecalho(n && categoriasDe(n)[0]);

    if (!n) {
      wrap.append(el('p', { class: 'vazio' }, 'Notícia não encontrada.'));
    } else {
      document.title = n.titulo + ' — ' + SITE.nome;

      wrap.append(
        el('article', { class: 'noticia' },
          el('span', { class: 'cat' }, rotuloCat(n)),
          el('h1', {}, n.titulo),
          el('p', { class: 'meta' }, `${dataBR(n.data)} · ${n.autor || SITE.nome}`),
          n.imagem ? el('figure', { class: 'arte foto-artigo' }, el('img', { src: n.imagem, alt: n.legenda || '' })) : '',
          (n.corpo || []).map(p => el('p', {}, p))
        )
      );
    }
  }

  rodape();
}

main();