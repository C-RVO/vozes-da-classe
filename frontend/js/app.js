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
  'politica': 'Política',
  'cidades': 'Cidades',
  'trabalho': 'Trabalho',
  'direitos-sociais': 'Direitos Sociais',
  'economia': 'Economia',
  'cultura': 'Cultura',
  'educacao': 'Educação',
  'meio-ambiente': 'Meio Ambiente'
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
  fecho: 'Um abraço e seja bem-vindo(a) ao Coletivo RVO!'
};


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
// o texto fica dentro de uma div (.texto) para o mobile poder
// colocar título e categoria por cima da foto
function card(n, destaque) {
  let classes = 'card';
  if (destaque) classes += ' destaque';
  if (!n.imagem) classes += ' sem-img';

  return el('a', { class: classes, href: 'noticia.html?id=' + encodeURIComponent(n.id) },

    n.imagem ? el('img', { src: n.imagem, alt: n.legenda || '', loading: 'lazy' }) : '',

    el('div', { class: 'texto' },
      el('span', { class: 'cat' }, CATS[n.categoria] || n.categoria),
      el('h3', {}, n.titulo),
      el('p', { class: 'meta resumo' }, n.resumo),
      el('p', { class: 'meta' }, `${dataBR(n.data)} · ${n.autor || SITE.nome}`)
    )
  );
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
    // na home, a primeira notícia é o destaque
    s.append(el('div', { class: 'grade' },
      noticias.map((n, i) => card(n, verTodas && i === 0))
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


// ---------- Página do Coletivo RVO ----------
function paginaColetivo() {
  const artigo = el('article', { class: 'noticia coletivo' },
    el('span', { class: 'cat' }, 'Institucional'),
    el('h1', {}, COLETIVO.titulo)
  );

  // primeira metade do texto (o 1º parágrafo é o "lide", em destaque)
  COLETIVO.parte1.forEach((texto, i) => {
    artigo.append(el('p', { class: i === 0 ? 'lide' : '' }, texto));
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
    artigo.append(el('p', {}, texto));
  });

  // frase final
  artigo.append(el('p', { class: 'fecho' }, COLETIVO.fecho));

  return artigo;
}


// ---------- Monta a página ----------
async function main() {
  let todas = [];

  // carrega as notícias, da mais nova para a mais antiga
  try {
    const resposta = await fetch('data/noticias.json');
    todas = (await resposta.json()).sort((a, b) => b.data.localeCompare(a.data));
  } catch (erro) {
    console.error(erro);
  }

  const page = document.body.dataset.page;
  const app = document.getElementById('app');
  const wrap = el('main', { class: 'wrap' });
  app.replaceWith(wrap);

  if (page === 'home') {
    // página inicial
    cabecalho();
    wrap.append(lista('Últimas notícias', todas.slice(0, 9), true));

  } else if (page === 'coletivo') {
    // página do Coletivo RVO
    cabecalho();
    document.title = 'Coletivo RVO — ' + SITE.nome;
    wrap.append(paginaColetivo());

  } else if (page === 'categoria') {
    // página de seção ou resultado de busca
    const c = params.get('c');
    const q = params.get('q') || '';
    cabecalho(c);

    const titulo = q ? 'Busca: ' + q : (CATS[c] || 'Todas as notícias');
    document.title = titulo + ' — ' + SITE.nome;

    const filtradas = todas.filter(n => {
      const daCategoria = !c || n.categoria === c;
      const daBusca = !q || norm(n.titulo + ' ' + (n.resumo || '')).includes(norm(q));
      return daCategoria && daBusca;
    });

    wrap.append(lista(titulo, filtradas, false, q ? 'Nenhuma notícia encontrada.' : ''));

  } else {
    // página da notícia
    const n = todas.find(x => x.id === params.get('id'));
    cabecalho(n && n.categoria);

    if (!n) {
      wrap.append(el('p', { class: 'vazio' }, 'Notícia não encontrada.'));
    } else {
      document.title = n.titulo + ' — ' + SITE.nome;

      wrap.append(
        el('article', { class: 'noticia' },
          el('span', { class: 'cat' }, CATS[n.categoria] || n.categoria),
          el('h1', {}, n.titulo),
          el('p', { class: 'meta' }, `${dataBR(n.data)} · ${n.autor || SITE.nome}`),
          n.imagem ? el('img', { src: n.imagem, alt: n.legenda || '' }) : '',
          (n.corpo || []).map(p => el('p', {}, p))
        )
      );
    }
  }

  rodape();
}

main();