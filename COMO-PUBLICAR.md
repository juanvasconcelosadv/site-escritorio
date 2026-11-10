# Site Els Cordeiro & Juan Vasconcelos Advogados · Guia de publicação

## 1. Colocar o site no ar (uma única vez, cerca de 30 minutos)

1. Crie uma conta gratuita em **github.com**.
2. Clique em **New repository**, dê o nome `site-escritorio` e crie.
3. Na página do repositório, clique em **uploading an existing file** e arraste **todo o conteúdo desta pasta** (menos `node_modules` e `_site`, se existirem). Clique em **Commit changes**.
4. Crie uma conta gratuita em **netlify.com** usando o login do GitHub.
5. Clique em **Add new project > Import an existing project > GitHub** e escolha `site-escritorio`. As configurações já vêm prontas (arquivo `netlify.toml`). Clique em **Deploy**.
6. Em 1 a 2 minutos o site estará no ar em um endereço provisório (ex.: `site-escritorio.netlify.app`).

## 2. Domínio próprio (recomendado)

1. Registre o domínio em **registro.br**. Sugestão: `elscordeirovasconcelos.adv.br` (o `.adv.br` é exclusivo para advogados e exige a inscrição na OAB).
2. No Netlify: **Domain management > Add a domain** e siga as instruções (o HTTPS é ativado automaticamente).
3. Se escolher outro domínio, troque o endereço em `src/_data/site.json` (campo `url`), em `src/robots.txt` e em `src/admin/config.yml`.

## 3. Como postar artigos (dia a dia)

**Opção mais simples: Pages CMS**
1. Acesse **app.pagescms.org** e entre com sua conta do GitHub.
2. Escolha o repositório `site-escritorio`.
3. Clique em **Artigos > Add an entry**, preencha título, resumo, data, área, imagem (opcional) e o texto.
4. Clique em **Save**. Em cerca de 1 minuto o artigo aparece no site, na página Artigos, na página da área correspondente, no sitemap e no feed.

**Opção pelo próprio site: seusite/admin**
1. Em `src/admin/config.yml`, troque `SEU-USUARIO` pelo seu usuário do GitHub.
2. Acesse `seusite.com.br/admin` e entre com um token do GitHub (GitHub > Settings > Developer settings > Fine-grained tokens, com permissão de leitura e escrita em *Contents* do repositório).

Pelo painel também é possível editar telefones, endereços, Instagram, fotos e apresentações dos advogados (em **Contatos e equipe**).

## 4. Para ser encontrado no Google (fazer logo após publicar)

1. **Google Search Console** (search.google.com/search-console): adicione o domínio e envie o sitemap `https://seudominio/sitemap.xml`.
2. **Perfil da Empresa no Google** (business.google.com): crie um perfil para **cada unidade** (Serra Talhada e Tabira), categoria *Advogado* ou *Escritório de advocacia*, e coloque o link do site. É o que faz o escritório aparecer no Google Maps e em buscas como "advogado previdenciário Serra Talhada".
3. Coloque o link do site na bio do Instagram, no Facebook, no LinkedIn e na assinatura do e-mail.
4. **Bing Webmaster Tools**: importe direto do Search Console.
5. Publique com regularidade (ideal: 1 a 2 artigos por semana). Reaproveite os temas do boletim jurídico e dos carrosséis.

## 5. Dicas de redação para o Google

- Título com a dúvida real do cidadão ("Quem tem direito ao BPC?", "O INSS negou meu auxílio, e agora?").
- Resumo de 120 a 160 caracteres.
- Subtítulos claros, parágrafos curtos, citação do artigo de lei ou da decisão.
- Sempre informativo, sem promessa de resultado e sem valores de honorários (Provimento 205/2021).

## Estrutura

- `src/artigos/` artigos (um arquivo `.md` por artigo)
- `src/_data/site.json` contatos, endereços, equipe
- `src/_data/areas.json` textos das 9 áreas de atuação e perguntas frequentes
- `src/assets/` estilos, scripts, logotipo e imagens
- Para testar no computador: `npm install` e depois `npm start`
