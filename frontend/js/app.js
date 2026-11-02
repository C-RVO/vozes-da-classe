const SITE={nome:'Vozes da Classe',lema:'A informação nasce onde a vida acontece.',sub:'A notícia que dá voz à sociedade',
 cidade:'Fazenda Rio Grande'};
const CATS={politica:'Política',cidades:'Cidades',trabalho:'Trabalho','direitos-sociais':'Direitos Sociais',
 economia:'Economia',cultura:'Cultura',educacao:'Educação','meio-ambiente':'Meio Ambiente'};

const el=(t,a={},...f)=>{const e=document.createElement(t);
 for(const[k,v]of Object.entries(a))k==='class'?e.className=v:e.setAttribute(k,v);
 f.flat().forEach(c=>e.append(c));return e};
const dataBR=iso=>new Date(iso+'T12:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
const params=new URLSearchParams(location.search);

function logo(tag='h1'){const h=el(tag);h.append(SITE.nome.toUpperCase(),el('span',{},'.'));return h}

function cabecalho(catAtual){
 const itens=[['index.html','Início',!catAtual&&document.body.dataset.page==='home'],
  ...Object.entries(CATS).map(([s,n])=>['categoria.html?c='+s,n,s===catAtual])];
 const topo=el('div',{},
  el('div',{class:'faixa'},el('div',{class:'wrap'},el('span',{},'Jornalismo independente • Informação e cidadania'),
   el('span',{},new Date().toLocaleDateString('pt-BR')))),
  el('div',{class:'wrap marca'},el('a',{href:'index.html'},logo(),el('small',{},SITE.sub.toUpperCase())),
   el('p',{class:'lema'},SITE.lema)),
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
  el('h3',{},n.titulo),el('p',{class:'meta'},n.resumo),
  el('p',{class:'meta'},`${dataBR(n.data)} · ${n.autor||SITE.nome}`))}

function lista(titulo,noticias,verTodas){
 const s=el('section',{class:'secao'},el('header',{},el('h2',{},titulo),
  verTodas?el('a',{class:'ver',href:'categoria.html'},'Ver todas'):''));
 s.append(noticias.length?el('div',{class:'grade'},noticias.map((n,i)=>card(n,verTodas&&i===0)))
  :el('p',{class:'vazio'},'As primeiras reportagens serão publicadas em breve.'));
 return s}

async function main(){
 let todas=[];
 try{todas=(await (await fetch('data/noticias.json')).json())
  .sort((a,b)=>b.data.localeCompare(a.data))}catch(e){console.error(e)}
 const page=document.body.dataset.page,app=document.getElementById('app');
 const wrap=el('main',{class:'wrap'});app.replaceWith(wrap);
 if(page==='home'){cabecalho();wrap.append(lista('Últimas notícias',todas.slice(0,9),true))}
 else if(page==='categoria'){const c=params.get('c');cabecalho(c);
  document.title=(CATS[c]||'Todas as notícias')+' — '+SITE.nome;
  wrap.append(lista(CATS[c]||'Todas as notícias',c?todas.filter(n=>n.categoria===c):todas))}
 else{const n=todas.find(x=>x.id===params.get('id'));cabecalho(n&&n.categoria);
  if(!n)wrap.append(el('p',{class:'vazio'},'Notícia não encontrada.'));
  else{document.title=n.titulo+' — '+SITE.nome;
   wrap.append(el('article',{class:'noticia'},el('span',{class:'cat'},CATS[n.categoria]||n.categoria),
    el('h1',{},n.titulo),el('p',{class:'meta'},`${dataBR(n.data)} · ${n.autor||SITE.nome}`),
    n.imagem?el('img',{src:n.imagem,alt:n.legenda||''}):'',
    (n.corpo||[]).map(p=>el('p',{},p))))}}
 rodape()}
main();
