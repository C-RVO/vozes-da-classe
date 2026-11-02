# backend

O GitHub Pages só hospeda arquivos estáticos: não executa servidor (PHP, Node, banco de dados).
Por isso, aqui o "backend" é o próprio repositório:

- Matérias ficam em `frontend/data/noticias.json`.
- O painel `admin/index.html` (uso local) gera esse JSON; o commit publica o site.
- Para login, comentários ou envio de pautas, use um serviço externo
  (Formspree, Supabase, Firebase ou um CMS como Decap CMS) chamado a partir do frontend.
