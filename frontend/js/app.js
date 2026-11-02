const SITE={nome:'Vozes da Classe',lema:'A informação nasce onde a vida acontece.',sub:'A notícia que dá voz à sociedade',
 cidade:'Fazenda Rio Grande',logo:'img/logo.svg'};
const CATS={politica:'Política',cidades:'Cidades',trabalho:'Trabalho','direitos-sociais':'Direitos Sociais',
 economia:'Economia',cultura:'Cultura',educacao:'Educação','meio-ambiente':'Meio Ambiente'};

const el=(t,a={},...f)=>{const e=document.createElement(t);
 for(const[k,v]of Object.entries(a))k==='class'?e.className=v:e.setAttribute(k,v);
 f.flat().forEach(c=>e.append(c));return e};
const dataBR=iso=>new Date(iso+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
const params=new URLSearchParams(location.search);

function logo(tag='h1'){const h=el(tag);h.append(SITE.nome.toUpperCase(),el('span',{},'.'));return h}

const ICONES={
 menu:'<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
 busca:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>'};
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

function botao(icone,rotulo,alvo){
 const b=el('button',{type:'button','aria-label':rotulo,'aria-expanded':'false'});b.innerHTML=icone;
 b.onclick=()=>{const p=document.getElementById(alvo),abrir=p.hidden;
  document.querySelectorAll('.painel').forEach(x=>x.hidden=true);
  document.querySelectorAll('.barra-mobile button').forEach(x=>x.setAttribute('aria-expanded','false'));
  p.hidden=!abrir;b.setAttribute('aria-expanded',String(abrir));
  if(abrir&&alvo==='painel-busca')p.querySelector('input').focus()};
 return b}

function cabecalho(catAtual){
 const itens=[['index.html','Início',!catAtual&&document.body.dataset.page==='home'],
  ...Object.entries(CATS).map(([s,n])=>['categoria.html?c='+s,n,s===catAtual])];
 const nome=el('span',{class:'nome'});nome.append(SITE.nome.toUpperCase(),el('span',{},'.'));
 const slot=()=>el('img',{class:'logo-slot',src:SITE.logo,alt:'Logo '+SITE.nome});
 const topo=el('div',{},
  el('div',{class:'faixa'},el('div',{class:'wrap'},el('span',{},'Jornalismo independente • Informação e cidadania'),
   el('span',{},new Date().toLocaleDateString('pt-BR')))),
  el('div',{class:'wrap marca'},
   el('a',{href:'index.html',class:'esq'},slot(),el('span',{},logo(),el('small',{},SITE.sub.toUpperCase()))),
   el('p',{class:'lema'},SITE.lema)),
  el('div',{class:'barra-mobile'},botao(ICONES.menu,'Abrir menu','painel-menu'),
   el('a',{href:'index.html',class:'centro'},slot(),nome),botao(ICONES.busca,'Buscar','painel-busca')),
  el('div',{class:'painel',id:'painel-menu',hidden:''},el('ul',{},
   itens.map(([h,n])=>el('li',{},el('a',{href:h},n))))),
  el('form',{class:'painel',id:'painel-busca',hidden:'',action:'categoria.html',role:'search'},
   el('input',{type:'search',name:'q',placeholder:'Buscar notícias','aria-label':'Buscar notícias'})),
  el('nav',{'aria-label':'Seções'},el('div',{class:'wrap'},el('ul',{},
   itens.map(([h,n,at])=>el('li',{},el('a',{href:h,...(at?{'aria-current':'page'}:{})},n)))))));
 document.body.prepend(topo)}

function rodape(){
 const l=el('div',{class:'logo'});l.append(SITE.nome.toUpperCase(),el('span',{},'.'));
 document.body.append(el('footer',{},el('div',{class:'wrap'},
  el('div',{class:'cols'},
   el('div',{},l,el('p',{},`Jornal ${SITE.nome} — jornalismo independente, regional e comprometido com o interesse público. Informação, território e cidadania.`)),
   el('div',{},el('h4',{},'Expediente'),el('p',{},`Um espaço para informar, ouvir e dar visibilidade às histórias de ${SITE.cidade}.`))),
  el('div',{class:'copy'},`© ${new Date().getFullYear()} Jornal ${SITE.nome}. Todos os direitos reservados.`))))}

function card(n,destaque){
 return el('a',{class:'card'+(destaque?' destaque':''),href:'noticia.html?id='+encodeURIComponent(n.id)},
  n.imagem?el('img',{src:n.imagem,alt:n.legenda||'',loading:'lazy'}):'',
  el('span',{class:'cat'},CATS[n.categoria]||n.categoria),
  el('h3',{},n.titulo),el('p',{class:'meta resumo'},n.resumo),
  el('p',{class:'meta'},`${dataBR(n.data)} · ${n.autor||SITE.nome}`))}

function lista(titulo,noticias,verTodas,vazio){
 const s=el('section',{class:'secao'+(verTodas?' home':'')},el('header',{},el('h2',{},titulo),
  verTodas?el('a',{class:'ver',href:'categoria.html'},'Ver todas'):''));
 s.append(noticias.length?el('div',{class:'grade'},noticias.map((n,i)=>card(n,verTodas&&i===0)))
  :el('p',{class:'vazio'},vazio||'As primeiras reportagens serão publicadas em breve.'));
 if(verTodas&&noticias.length)s.append(el('a',{class:'ver mais-mobile',href:'categoria.html'},'Ver todas as notícias'));
 return s}

async function main(){
 let todas=[];
 try{todas=(await (await fetch('data/noticias.json')).json())
  .sort((a,b)=>b.data.localeCompare(a.data))}catch(e){console.error(e)}
 const page=document.body.dataset.page,app=document.getElementById('app');
 const wrap=el('main',{class:'wrap'});app.replaceWith(wrap);
 if(page==='home'){cabecalho();wrap.append(lista('Últimas notícias',todas.slice(0,9),true))}
 else if(page==='categoria'){const c=params.get('c');cabecalho(c);
  const q=params.get('q')||'';
  const t=q?'Busca: '+q:(CATS[c]||'Todas as notícias');document.title=t+' — '+SITE.nome;
  wrap.append(lista(t,todas.filter(n=>(!c||n.categoria===c)&&(!q||norm(n.titulo+' '+(n.resumo||'')).includes(norm(q)))),
   false,q?'Nenhuma notícia encontrada.':''))}
 else{const n=todas.find(x=>x.id===params.get('id'));cabecalho(n&&n.categoria);
  if(!n)wrap.append(el('p',{class:'vazio'},'Notícia não encontrada.'));
  else{document.title=n.titulo+' — '+SITE.nome;
   wrap.append(el('article',{class:'noticia'},el('span',{class:'cat'},CATS[n.categoria]||n.categoria),
    el('h1',{},n.titulo),el('p',{class:'meta'},`${dataBR(n.data)} · ${n.autor||SITE.nome}`),
    n.imagem?el('img',{src:n.imagem,alt:n.legenda||''}):'',
    (n.corpo||[]).map(p=>el('p',{},p))))}}
 rodape()}
main();