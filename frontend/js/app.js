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
    ...Object.entries(CATS).map(([slug, nome]) => ['categoria.html?c=' + slug, nome, slug === catAtual])
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