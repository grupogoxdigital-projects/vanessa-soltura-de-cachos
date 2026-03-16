# Layout - Workshop Soltura de Cachos (Vanessa Barreto)

## Sistema de Design Global

### Paleta de Cores
- `--rosa-claro: #FFF0F2` → Fundo de secoes claras
- `--rosa-medio: #F5B8C4` → Destaques, ornamentos, badges
- `--rosa-forte: #D65D7A` → Hover em elementos rosa
- `--vermelho: #91091E` → CTA, fundo escuro, acentos fortes
- `--vermelho-prof: #5D0613` → Hover escuro, sombras profundas
- `--texto-escuro: #2A0A10` → Texto sobre fundo claro
- `--texto-claro: #FFF0F2` → Texto sobre fundo escuro
- `--branco: #FFFFFF` → Badges, cards sobre escuro

### Fontes
- **Heading:** Fraunces (opsz 9..144, weight 300/600/700/900) — serifada vintage, feminina, emotiva
- **Body:** Outfit (weight 300/400/500/600/700) — sans-serif limpa, legivel, moderna
- Google Fonts: `?family=Fraunces:opsz,wght@9..144,300;9..144,600;9..144,700;9..144,900&family=Outfit:wght@300;400;500;600;700&display=swap`

### Espacamento Base
- Container max-width: 1200px, padding-inline: clamp(20px, 5vw, 60px)
- Section padding vertical: clamp(60px, 8vw, 110px)

### Alternancia de Secoes
1. Hero → Rosa claro (#FFF0F2)
2. Problema → Vermelho vinho (#91091E)
3. Solucao → Rosa claro (#FFF0F2)
4. O Que Vai Aprender → Vermelho vinho (#91091E)
5. Para Quem E → Rosa claro (#FFF0F2)
6. Quem e Vanessa → Vermelho vinho (#91091E)
7. Oferta → Rosa claro (#FFF0F2)
8. CTA Final → Vermelho vinho (#91091E)
9. Rodape → Vermelho profundo (#5D0613)

### Transicoes Entre Secoes
- Da clara para escura: Wave Divider SVG fill `#91091E`, curva suave
- Da escura para clara: Wave Divider SVG fill `#FFF0F2`, curva invertida
- Altura do wave: 80px em desktop, 50px em mobile
- SVG `preserveAspectRatio="none"`, position absolute bottom-0, width 100%

### Botoes
**Primary (sobre fundo claro):**
- background: `linear-gradient(135deg, #91091E 0%, #5D0613 100%)`
- color: #FFFFFF
- border-radius: 60px
- padding: 16px 38px
- font: Outfit 700 clamp(15px, 1.8vw, 18px)
- box-shadow: `0 6px 28px rgba(145, 9, 30, 0.38)`
- hover: `translateY(-3px) scale(1.02)`, shadow `0 12px 36px rgba(145, 9, 30, 0.48)`
- transition: 0.18s ease

**Secondary (sobre fundo escuro):**
- background: #FFFFFF
- color: #91091E
- border: 2px solid rgba(255,255,255,0.5)
- border-radius: 60px
- padding: 16px 38px
- font: Outfit 700 clamp(15px, 1.8vw, 18px)
- box-shadow: `0 4px 20px rgba(255,255,255,0.18)`
- hover: background `#FFF0F2`, `translateY(-3px)`, shadow `0 8px 28px rgba(255,255,255,0.28)`
- transition: 0.18s ease

### AOS (Scroll Animations)
- `AOS.init({ duration: 700, once: true, offset: 60, disableMutationObserver: true })`
- NUNCA usar AOS no hero
- Resto das secoes: `data-aos="fade-up"` com delays de 100ms em 100ms

---

## Secao 1: Hero

### Arquetipo e Constraints
- **Arquetipo:** Split Assimetrico (60/40)
- **Constraints:** Color Blocking (Cor), Wave Divider (Layout), Hover Lift (Interacao), Texto com Gradiente (Tipografia), Float Loop (Movimento)
- **Justificativa:** O split assimetrico 60/40 coloca a headline em destaque total enquanto o placeholder da foto ancora a especialista visualmente. O badge flutuante cria urgencia imediata.

### Conteudo
- **Eyebrow:** "Workshop ao Vivo • R$47,00"
- **Headline:**
  ```
  Aprenda a
  Soltura de Cachos [em gradiente vinho]
  Profissional e
  Aumente Seu
  Faturamento
  ```
- **Subheadline:** "Participe do Workshop ao Vivo com **Vanessa Barreto** e domine a tecnica mais procurada pelas clientes que sofrem com o fator de encolhimento."
- **Bullets:**
  - Aula ao vivo sem cortes
  - Tecnica pratica e rapida de aplicar
  - Certificado de participacao
- **CTA:** "Quero Garantir Minha Vaga"
- **Badge flutuante:** "R$47 / Workshop ao Vivo"

### Layout
- `min-height: 100vh`, display flex column, justify-content center
- Grid: `grid-template-columns: 60fr 40fr`, gap clamp(24px, 4vw, 48px)
- Padding block: clamp(60px, 8vw, 100px) top, clamp(80px, 10vw, 120px) bottom
- Ornamento de fundo: circulo radial gradient posicionado `top: -80px, right: -80px`, 480x480px, `rgba(245, 184, 196, 0.35)` → transparent

### Tipografia
- **Eyebrow:** Outfit 600, 13px, letter-spacing 0.14em, uppercase, cor `#91091E`
  - Container: background `rgba(145, 9, 30, 0.08)`, padding 5px 14px, border-radius 30px, border `1px solid rgba(145, 9, 30, 0.18)`
- **Headline:** Fraunces 900, clamp(36px, 5vw, 72px), line-height 1.05, cor `#2A0A10`
  - "Soltura de Cachos" → `background: linear-gradient(135deg, #91091E 0%, #5D0613 100%)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`, `font-style: italic`
- **Subheadline:** Outfit 400, clamp(16px, 1.7vw, 18px), line-height 1.7, cor `rgba(42, 10, 16, 0.75)`
  - "Vanessa Barreto" → Outfit 700, cor `#91091E`
- **Trust bullets:** Outfit 500, clamp(14px, 1.5vw, 16px), cor `#2A0A10`

### Cores
- Fundo secao: `#FFF0F2`
- Eyebrow badge bg: `rgba(145, 9, 30, 0.08)`, border: `rgba(145, 9, 30, 0.18)`
- Icones check: circulo fill `#91091E`, check path stroke `#FFFFFF`

### Elementos Visuais
**Foto placeholder (lado direito):**
- width 100%, max-width 380px, aspect-ratio 3/4
- border-radius: 40px 40px 20px 20px
- background: `linear-gradient(160deg, #F5B8C4 0%, #d4748a 60%, rgba(200,16,46,0.13) 100%)`
- Overlay interno: `linear-gradient(to bottom, transparent 50%, rgba(145,9,30,0.12) 100%)`
- Label "Foto da Especialista": Outfit 600 15px, rgba(255,255,255,0.7), italic, centralizado

**Badge flutuante:**
- Posicao: `position: absolute`, left -20px, bottom 60px
- background: #FFFFFF, border-radius 18px, padding 14px 20px
- box-shadow: `0 8px 32px rgba(0,0,0,0.14)`
- border-left: 4px solid `#91091E`
- "R$47": Fraunces 900, 28px, cor `#91091E`, line-height 1
- "Workshop ao Vivo": Outfit 600 11px, uppercase, letter-spacing 0.06em, cor rgba(42,10,16,0.6)

### Animacoes
- Badge: `animation: float 3.5s ease-in-out infinite` → keyframes: 0%/100% translateY(0), 50% translateY(-8px)
- SEM animacao de entrada no hero (regra absoluta)
- Ornamento de fundo: estatico

### Interatividade
- CTA hover: `translateY(-3px) scale(1.02)`, shadow intensifica, 0.18s ease
- Badge hover: sem animacao adicional

### Wave Divisor
- SVG curva: `M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z`
- fill: `#91091E`
- height: 80px, position absolute bottom-0 left-0, width 100%

### Responsividade
- **≤900px:** Grid muda para 1 coluna. Foto sobe (order -1 implicito via order:1 no content). Headline e sub centralizados. Bullets centralizados. Badge fixed na largura, position absolute bottom -20px left 50% translateX(-50%), animation none
- **≤540px:** Botao full-width. Badge position relative, margin-top 16px, animation retorna

---

## Secao 2: Problema

### Arquetipo e Constraints
- **Arquetipo:** Grid Assimetrico (texto esquerda 55%, imagem direita 45%)
- **Constraints:** Color Blocking escuro (Cor), Wave Divider invertido (Layout), Fade Right (Movimento), Clip-path decorativo (Layout)
- **Justificativa:** O fundo escuro logo apos o hero claro cria impacto imediato. A imagem do lado direito ancora o problema visualmente.

### Conteudo
- **Eyebrow:** "Voce reconhece esse cenario?"
- **Titulo:** "Suas clientes reclamam que o cabelo *encolhe demais?*"
  - "encolhe demais?" em italico, cor rosa medio `#F5B8C4`
- **Intro:** "O fator de encolhimento e um dos maiores problemas para quem tem cabelo cacheado. Muitas clientes saem do salao frustradas porque:"
- **Lista de problemas (icone X vermelho-rosado):**
  - Os cachos ficam encolhidos demais
  - O cabelo perde definicao
  - Ou pior... fica esticado e sem forma
- **Agravante (italico):** "E isso acontece porque muitos profissionais ainda nao dominam a tecnica correta de soltura de cachos."
- **Virada (destaque rosa):** "A boa noticia e que isso tem solucao."
- **CTA:** "Quero Garantir Minha Vaga" (botao secondary)

### Layout
- Fundo: `#91091E`
- padding-block: clamp(60px, 8vw, 110px)
- Grid: `grid-template-columns: 55fr 45fr`, gap clamp(40px, 6vw, 80px), align-items center
- Fade right na coluna de texto: `data-aos="fade-right"`
- Fade left na imagem: `data-aos="fade-left"`

### Tipografia
- **Eyebrow:** Outfit 600 13px, letter-spacing 0.14em, uppercase, cor `#F5B8C4`
- **Titulo:** Fraunces 700, clamp(28px, 4vw, 52px), line-height 1.15, cor `#FFF0F2`
  - "encolhe demais?" → Fraunces 700 italic, cor `#F5B8C4`
- **Intro:** Outfit 400, clamp(16px, 1.6vw, 18px), cor `rgba(255, 240, 242, 0.88)`, max-width 540px
- **Lista:** Outfit 400, clamp(15px, 1.5vw, 17px), cor `#FFF0F2`
- **Agravante:** Outfit 400 italic, clamp(15px, 1.5vw, 17px), cor `rgba(255, 240, 242, 0.8)`
- **Virada:** Fraunces 700, clamp(22px, 2.5vw, 30px), cor `#F5B8C4`, margin-bottom 32px

### Cores
- Fundo: `#91091E`
- Icone X: circulo background `rgba(255, 240, 242, 0.15)`, X cor `#F5B8C4`, 26x26px, border-radius 50%, font-size 13px
- Placeholder imagem: border `2px dashed rgba(245, 184, 196, 0.4)`, border-radius 24px, background `rgba(255,255,255,0.08)`

### Elementos Visuais
**Imagem placeholder (lado direito):**
- width 100%, max-width 400px, aspect-ratio 4/5
- border: `2px dashed rgba(245, 184, 196, 0.4)`, border-radius 24px
- background: `rgba(255,255,255,0.08)`
- Label: Outfit 500 14px, cor `rgba(245, 184, 196, 0.6)`, centralizado

### Animacoes
- `data-aos="fade-right"` na coluna de texto
- `data-aos="fade-right" data-aos-delay="100"` na lista de problemas
- `data-aos="fade-right" data-aos-delay="200"` no agravante
- `data-aos="fade-right" data-aos-delay="300"` na virada
- `data-aos="fade-up" data-aos-delay="400"` no CTA
- `data-aos="fade-left"` na imagem

### Wave Divisor (inferior — clara)
- SVG curva invertida: `M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z`
- fill: `#FFF0F2`
- height: 80px, position absolute bottom-0, width 100%
- Secao com padding-bottom extra de 80px para nao cobrir conteudo

### Responsividade
- **≤900px:** Grid 1 coluna. Imagem sobe (order -1). Texto centralizado.
- **≤540px:** Botao full-width.

---

## Secao 3: Solucao

### Arquetipo e Constraints
- **Arquetipo:** Contained Center (container estreito, max-width 720px, margens generosas)
- **Constraints:** Gradiente Mesh (Cor), Overlap Elements (Layout), Stagger (Movimento), Glassmorphism (Efeitos), Hover Scale (Interacao)
- **Justificativa:** Apos a densidade emocional da secao de problema, um respiro com layout centralizado e cards glassmorphism cria alivio visual e foca na solucao.

### Conteudo
- **Eyebrow:** "A virada começa aqui"
- **Titulo:** "Uma tecnica simples que pode transformar seus resultados"
- **Intro:** "Neste workshop voce vai aprender uma tecnica profissional de soltura de cachos que:"
- **4 bullets em cards (stagger):**
  1. Reduz o fator de encolhimento
  2. Mantem os cachos definidos
  3. Valoriza o resultado final do cabelo
  4. Aumenta a satisfacao das suas clientes
- **Contexto:** "Esse e um servico muito procurado nos saloes atualmente. E quem domina essa tecnica consegue se destacar e faturar mais."
- **CTA:** "Quero Garantir Minha Vaga"

### Layout
- Fundo: `#FFF0F2`
- container max-width 720px, centralizado
- padding-block: clamp(60px, 8vw, 110px)
- Titulo e intro centralizados, text-align center
- Cards: display grid, `grid-template-columns: 1fr 1fr`, gap 16px
- Contexto: centralizado, max-width 600px, margin-inline auto, margin-top 32px

### Tipografia
- **Eyebrow:** Outfit 600 13px, letter-spacing 0.14em, uppercase, cor `#91091E`
- **Titulo:** Fraunces 700, clamp(28px, 4vw, 48px), line-height 1.15, cor `#2A0A10`, text-align center
- **Intro:** Outfit 400, clamp(16px, 1.6vw, 18px), cor `rgba(42, 10, 16, 0.7)`, text-align center, margin-bottom 32px
- **Cards texto:** Outfit 600, clamp(15px, 1.5vw, 17px), cor `#2A0A10`
- **Numero do card:** Fraunces 900, 48px, cor `rgba(145, 9, 30, 0.08)`, position absolute, top -10px, left 16px (decorativo)
- **Contexto:** Outfit 400, clamp(15px, 1.5vw, 17px), cor `rgba(42, 10, 16, 0.7)`, text-align center

### Cores
- Fundo: `#FFF0F2`
- Cards: background `rgba(255,255,255,0.7)`, backdrop-filter `blur(12px)`, border `1px solid rgba(145, 9, 30, 0.08)`, border-radius 20px, padding 24px
- Cards hover: background `rgba(255,255,255,0.95)`, transform `scale(1.02)`, shadow `0 8px 32px rgba(145,9,30,0.10)`
- Icone check antes do texto: `#91091E`, 18px (SVG circulo preenchido com check)

### Elementos Visuais
- Ornamento de fundo: dois circulos radiais, um no canto sup esq (`rgba(245, 184, 196, 0.2)`), um no inf dir (`rgba(145, 9, 30, 0.05)`), pointer-events none

### Animacoes
- Titulo: `data-aos="fade-up"`
- Cards: `data-aos="fade-up"` em cada card com delay 0, 100, 200, 300ms
- Contexto: `data-aos="fade-up" data-aos-delay="400"`
- CTA: `data-aos="fade-up" data-aos-delay="500"`

### Interatividade
- Cards hover: `transform: scale(1.02)`, shadow, background, transition 0.25s ease
- CTA hover: translateY(-3px) scale(1.02), shadow

### Wave Divisor (inferior → escuro)
- fill: `#91091E`
- curva: `M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z`

### Responsividade
- **≤600px:** Cards grid 1 coluna. Centralizado.

---

## Secao 4: O Que Vai Aprender

### Arquetipo e Constraints
- **Arquetipo:** Bento Box (celulas de tamanhos variados)
- **Constraints:** Color Blocking escuro (Cor), Numbered Steps (Estrutura), Hover Lift (Interacao), Texto com Gradiente (Tipografia), Wave Divider (Layout)
- **Justificativa:** O Bento Box cria variedade visual rompendo com o grid uniforme. Numeracao em Fraunces cria ritmo e hierarquia clara.

### Conteudo
- **Eyebrow:** "O que voce vai aprender"
- **Titulo:** "No workshop voce vai aprender:"
- **4 aprendizados (bento cells):**
  1. Como realizar soltura de cachos da forma correta
  2. O erro que faz o cabelo ficar liso ao inves de cacheado
  3. Como entregar um resultado seguro e profissional
  4. Como transformar esse servico em uma nova fonte de faturamento no seu salao
- **Fechamento:** "Tudo isso em uma aula completa ao vivo, sem cortes e sem pausas."
- **CTA:** "Quero Garantir Minha Vaga"

### Layout
- Fundo: `#91091E`
- Container: max-width 1200px, padding-inline clamp(20px, 5vw, 60px)
- Titulo centralizado, margin-bottom 48px
- **Bento Grid:**
  - `display: grid`
  - `grid-template-columns: repeat(6, 1fr)`
  - `grid-template-rows: auto auto`
  - `gap: 16px`
  - Cell 1: `grid-column: span 4` → Item 1 (maior, destaque)
  - Cell 2: `grid-column: span 2` → Item 2
  - Cell 3: `grid-column: span 2` → Item 3
  - Cell 4: `grid-column: span 4` → Item 4 (maior, destaque)
- Fechamento: texto centralizado, max-width 600px, margin-inline auto, margin-top 40px
- CTA: centralizado, margin-top 32px

### Tipografia
- **Eyebrow:** Outfit 600 13px, letter-spacing 0.14em, uppercase, cor `#F5B8C4`, text-align center
- **Titulo:** Fraunces 700, clamp(28px, 4vw, 48px), cor `#FFF0F2`, text-align center
- **Numero da cell:** Fraunces 900, clamp(64px, 6vw, 96px), cor `rgba(255,240,242,0.08)`, line-height 0.9, display block, margin-bottom 12px
- **Texto da cell:** Outfit 600, clamp(16px, 1.6vw, 20px), cor `#FFF0F2`, line-height 1.4
- **Fechamento:** Outfit 400 italic, clamp(16px, 1.6vw, 18px), cor `rgba(255,240,242,0.8)`, text-align center

### Cores
- Fundo: `#91091E`
- Cells (item 1 e 4 — grandes): background `rgba(255,255,255,0.12)`, border-radius 20px, padding 32px, border `1px solid rgba(255,240,242,0.12)`
- Cells (item 2 e 3 — pequenas): background `rgba(93, 6, 19, 0.5)`, border-radius 20px, padding 24px, border `1px solid rgba(255,240,242,0.08)`
- Cells hover: background levanta 8px, shadow `0 16px 40px rgba(0,0,0,0.2)`, transition 0.25s ease

### Animacoes
- Titulo: `data-aos="fade-up"`
- Cell 1: `data-aos="fade-up" data-aos-delay="0"`
- Cell 2: `data-aos="fade-up" data-aos-delay="100"`
- Cell 3: `data-aos="fade-up" data-aos-delay="200"`
- Cell 4: `data-aos="fade-up" data-aos-delay="300"`
- Fechamento: `data-aos="fade-up" data-aos-delay="400"`

### Wave Divisor (inferior → claro)
- fill: `#FFF0F2`
- curva invertida

### Responsividade
- **≤768px:** Grid muda para 2 colunas `repeat(2, 1fr)`. Todas as cells span 1. Cells grandes ficam com padding 24px, texto menor.
- **≤480px:** Grid 1 coluna. Todas cells empilhadas.

---

## Secao 5: Para Quem E

### Arquetipo e Constraints
- **Arquetipo:** Split Horizontal (topo: titulo e intro | base: cards lado a lado com decorativo)
- **Constraints:** Pastel Colors (Cor), Hover Lift (Interacao), Overlap Elements (Layout), Fade Up Stagger (Movimento)
- **Justificativa:** Apos duas secoes escuras, o claro e o split horizontal criam respiro. Os cards com borda rosa destacam cada perfil de forma elegante.

### Conteudo
- **Eyebrow:** "Esse workshop e para voce se..."
- **Titulo:** "Esse workshop e ideal para:"
- **4 perfis em cards:**
  1. Profissionais que trabalham com cabelos cacheados
  2. Cabeleireiras que querem aprender uma tecnica nova
  3. Quem quer aumentar o faturamento do salao
  4. Profissionais que querem mais seguranca na soltura de cachos
- **Fechamento:** "Se voce quer melhorar seus resultados e se destacar, esse workshop e para voce."
- **CTA:** "Quero Garantir Minha Vaga"

### Layout
- Fundo: `#FFF0F2`
- padding-block: clamp(60px, 8vw, 110px)
- Topo (titulo + eyebrow): centralizado, max-width 680px, margin-inline auto, margin-bottom 48px
- Cards: `display: grid`, `grid-template-columns: repeat(2, 1fr)`, gap 20px, max-width 900px, margin-inline auto
- Fechamento e CTA: centralizados, margin-top 40px

### Tipografia
- **Eyebrow:** Outfit 600 13px, uppercase, letter-spacing 0.14em, cor `#91091E`, text-align center
- **Titulo:** Fraunces 700, clamp(28px, 4vw, 48px), cor `#2A0A10`, text-align center
- **Numero do card:** Fraunces 900, 40px, cor `rgba(145, 9, 30, 0.12)`, margin-bottom 8px
- **Texto do card:** Outfit 500, clamp(15px, 1.5vw, 17px), cor `#2A0A10`, line-height 1.5
- **Fechamento:** Outfit 400 italic, clamp(15px, 1.5vw, 17px), cor `rgba(42, 10, 16, 0.75)`, text-align center

### Cores
- Fundo: `#FFF0F2`
- Cards: background `#FFFFFF`, border-radius 20px, padding 28px 28px 28px 24px, border-left `4px solid #91091E`, box-shadow `0 4px 20px rgba(145, 9, 30, 0.08)`
- Cards hover: box-shadow `0 12px 36px rgba(145, 9, 30, 0.14)`, `translateY(-4px)`, transition 0.2s ease

### Elementos Visuais
- Ornamento decorativo: linha horizontal de pontos `rgba(245, 184, 196, 0.5)` entre titulo e cards
  - `border-top: 2px dashed rgba(245, 184, 196, 0.5)`, max-width 200px, margin-inline auto, margin-bottom 40px

### Animacoes
- cards: `data-aos="fade-up"` com delay 0, 100, 200, 300ms
- Fechamento: `data-aos="fade-up" data-aos-delay="400"`
- CTA: `data-aos="fade-up" data-aos-delay="500"`

### Wave Divisor (inferior → escuro)
- fill: `#91091E`

### Responsividade
- **≤600px:** Cards grid 1 coluna.

---

## Secao 6: Quem e Vanessa Barreto

### Arquetipo e Constraints
- **Arquetipo:** Split Assimetrico invertido (imagem 40% esquerda, credenciais 60% direita)
- **Constraints:** Color Blocking escuro (Cor), Hover Glow (Interacao), Glassmorphism em badges de credencial (Efeitos), Stagger (Movimento)
- **Justificativa:** Posicionar a imagem antes do bio segue o padrao de apresentacao humana — rosto primeiro, autoridade depois. O glassmorphism nos badges de credenciais cria sofisticacao.

### Conteudo
- **Eyebrow:** "Quem vai te ensinar"
- **Titulo:** "Sua mentora neste workshop"
- **Bio:** "Vanessa Barreto e cabeleireira com mais de 15 anos de experiencia e uma das maiores referencias do Brasil em cabelos cacheados, desprogressiva e permanente afro. Fundadora do grupo Vanessa Hair, ela ja formou centenas de cabeleireiras, muitas saindo do zero para se tornarem referencia na propria cidade."
- **4 credenciais em badges:**
  1. Vencedora do Premio Tesoura de Ouro
  2. Eleita a profissional mais lembrada do Piaui
  3. Salao mais premiado e respeitado da regiao
  4. Tecnicas replicadas com sucesso em varios paises
- **Fechamento:** "Agora, Vanessa quer te ensinar na pratica como dominar a tecnica de soltura de cachos e transformar esse conhecimento em faturamento real no seu salao."
- **CTA:** "Quero Garantir Minha Vaga"

### Layout
- Fundo: `#91091E`
- padding-block: clamp(60px, 8vw, 110px)
- Grid: `grid-template-columns: 40fr 60fr`, gap clamp(40px, 6vw, 80px), align-items center
- Imagem: coluna esquerda
- Conteudo textual: coluna direita
- Badges credenciais: `display: flex`, `flex-direction: column`, gap 12px, margin-top 24px

### Tipografia
- **Eyebrow:** Outfit 600 13px, uppercase, letter-spacing 0.14em, cor `#F5B8C4`
- **Titulo:** Fraunces 700, clamp(28px, 4vw, 48px), cor `#FFF0F2`, margin-bottom 20px
- **Bio:** Outfit 400, clamp(15px, 1.5vw, 17px), cor `rgba(255,240,242,0.88)`, line-height 1.7, margin-bottom 24px
- **Badge texto:** Outfit 600, clamp(14px, 1.4vw, 16px), cor `#FFF0F2`
- **Fechamento:** Outfit 400 italic, clamp(15px, 1.5vw, 17px), cor `rgba(255,240,242,0.80)`, margin-top 24px, margin-bottom 32px

### Cores
- Fundo: `#91091E`
- Badge: background `rgba(255,255,255,0.12)`, backdrop-filter `blur(8px)`, border-radius 12px, padding 14px 20px, border-left `3px solid #F5B8C4`, border `1px solid rgba(255,240,242,0.15)`
- Badge hover: background `rgba(255,255,255,0.20)`, glow `0 0 20px rgba(245,184,196,0.15)`, transition 0.2s ease
- Icone badge: pequena estrela SVG (★) cor `#F5B8C4`, 16px, margin-right 10px

### Elementos Visuais
**Foto placeholder (lado esquerdo):**
- width 100%, max-width 360px, aspect-ratio 3/4
- border-radius: 24px
- background: `linear-gradient(160deg, rgba(255,240,242,0.15) 0%, rgba(93,6,19,0.3) 100%)`
- border: `2px dashed rgba(245, 184, 196, 0.4)`
- Label: "Foto Vanessa Barreto", Outfit 500 14px, cor `rgba(245,184,196,0.6)`, centralizado

### Animacoes
- Imagem: `data-aos="fade-right"`
- Eyebrow: `data-aos="fade-left"`
- Titulo: `data-aos="fade-left" data-aos-delay="100"`
- Bio: `data-aos="fade-left" data-aos-delay="200"`
- Badge 1: `data-aos="fade-left" data-aos-delay="300"`
- Badge 2: `data-aos="fade-left" data-aos-delay="350"`
- Badge 3: `data-aos="fade-left" data-aos-delay="400"`
- Badge 4: `data-aos="fade-left" data-aos-delay="450"`
- Fechamento: `data-aos="fade-up" data-aos-delay="500"`

### Wave Divisor (inferior → claro)
- fill: `#FFF0F2`

### Responsividade
- **≤900px:** Grid 1 coluna. Imagem centralizada, max-width 260px.
- **≤540px:** Badges padding 12px 16px.

---

## Secao 7: Oferta / Investimento

### Arquetipo e Constraints
- **Arquetipo:** Spotlight (elemento central com tudo ao redor diluido)
- **Constraints:** Glassmorphism (Efeitos), Pulse Loop no preco (Movimento), Color Overlay (Cor), Hover Lift (Interacao), Floating Cards (Camadas)
- **Justificativa:** O ponto central de conversao. O card de oferta centra toda a atencao visualmente. O preco em destaque maximo com pulso sutil cria urgencia emocional sem agressividade.

### Conteudo
- **Eyebrow:** "Investimento"
- **Titulo:** "Participe do Workshop por apenas"
- **Preco:** R$47,00
- **Subpreco:** "pagamento unico"
- **Lista de inclui:**
  - Workshop completo ao vivo
  - Tecnica profissional de soltura de cachos
  - Conteudo pratico e direto ao ponto
  - Certificado de participacao
- **Escassez:** "As vagas sao limitadas."
- **CTA:** "Quero Participar do Workshop"

### Layout
- Fundo: `#FFF0F2`
- Ornamento radial de fundo: `radial-gradient(ellipse at center, rgba(145,9,30,0.06) 0%, transparent 70%)`, fullwidth
- Container: max-width 600px, centralizado, text-align center
- Card de oferta: width 100%, border-radius 32px, overflow hidden
  - Faixa superior (header do card): background `#91091E`, padding 32px 40px, text-align center
  - Corpo do card: background `#FFFFFF`, padding 36px 40px
- CTA: abaixo do card, margin-top 24px, centralizado

### Tipografia
- **Eyebrow:** Outfit 600 13px, uppercase, letter-spacing 0.14em, cor `#91091E`, text-align center, margin-bottom 12px
- **Titulo (acima do card):** Fraunces 700, clamp(26px, 3.5vw, 42px), cor `#2A0A10`, text-align center, margin-bottom 32px
- **Preco (header do card):** Fraunces 900, clamp(64px, 8vw, 96px), cor `#FFF0F2`, line-height 1
- **Subpreco:** Outfit 400, 15px, cor `rgba(255,240,242,0.7)`, margin-top 4px, letter-spacing 0.04em
- **"Voce tera acesso a:":** Outfit 600, 14px, uppercase, letter-spacing 0.1em, cor `rgba(42,10,16,0.5)`, margin-bottom 16px
- **Items lista:** Outfit 500, clamp(15px, 1.5vw, 17px), cor `#2A0A10`, line-height 1.6
- **Escassez:** Outfit 700, clamp(15px, 1.5vw, 17px), cor `#91091E`, margin-top 20px, text-align center

### Cores
- Card shadow: `0 24px 64px rgba(145, 9, 30, 0.18)`
- Header do card: background `linear-gradient(135deg, #91091E 0%, #5D0613 100%)`
- Corpo card: background `#FFFFFF`
- Icone check na lista: SVG circulo fill `#91091E`, check branco, 20px

### Elementos Visuais
- Preco com animacao pulse: `animation: pricePulse 3s ease-in-out infinite`
  - keyframes: 0%/100% opacity 1, scale(1) | 50% opacity 0.92, scale(0.98)
- Linha divisora entre header e corpo do card: nenhuma — transicao abrupta e limpa

### Animacoes
- Card de oferta inteiro: `data-aos="fade-up"`
- Escassez: `data-aos="fade-up" data-aos-delay="200"`
- CTA: `data-aos="fade-up" data-aos-delay="300"`

### Interatividade
- CTA hover: translateY(-3px) scale(1.02), shadow, 0.18s ease

### Wave Divisor (inferior → escuro)
- fill: `#91091E`

### Responsividade
- **≤480px:** Card padding 24px. Preco clamp(52px, 14vw, 72px).

---

## Secao 8: CTA Final

### Arquetipo e Constraints
- **Arquetipo:** Single Focus (uma unica mensagem, espaco negativo proposital)
- **Constraints:** Color Blocking escuro (Cor), Texto com Gradiente (Tipografia), Breathe Loop (Movimento no CTA), Wave Header (Layout)
- **Justificativa:** A ultima seccao deve ser a mais contida e a mais direta. Sem distracao, sem imagem, apenas a promessa e o botao. O espaco negativo direciona o olhar para o CTA.

### Conteudo
- **Eyebrow:** "Nao perca essa chance"
- **Texto principal:** "Essa pode ser a oportunidade que voce precisava para aprender uma tecnica muito procurada e aumentar o faturamento do seu salao."
- **Chamada:** "Clique no botao abaixo e garanta sua vaga agora."
- **CTA:** "Quero Garantir Minha Vaga"

### Layout
- Fundo: `#91091E`
- padding-block: clamp(80px, 10vw, 140px)
- Tudo centralizado, max-width 660px, margin-inline auto, text-align center

### Tipografia
- **Eyebrow:** Outfit 600 13px, uppercase, letter-spacing 0.14em, cor `#F5B8C4`, margin-bottom 24px
- **Texto principal:** Fraunces 700, clamp(24px, 3.5vw, 44px), cor `#FFF0F2`, line-height 1.25, margin-bottom 20px
- **Chamada:** Outfit 400, clamp(15px, 1.5vw, 18px), cor `rgba(255,240,242,0.80)`, margin-bottom 36px

### Cores
- Fundo: `#91091E`
- CTA botao: Secondary (branco sobre escuro)
- CTA hover: rosa claro `#FFF0F2`

### Animacoes
- Eyebrow: `data-aos="fade-up"`
- Texto: `data-aos="fade-up" data-aos-delay="100"`
- Chamada: `data-aos="fade-up" data-aos-delay="200"`
- CTA: `data-aos="fade-up" data-aos-delay="300"`
- CTA decorativo: `animation: breathe 2.8s ease-in-out infinite`
  - keyframes: 0%/100% box-shadow `0 0 0 0 rgba(255,240,242,0)` | 50% box-shadow `0 0 0 12px rgba(255,240,242,0.15)`

### Sem wave divisor inferior (o rodape e diretamente adjacente)

### Responsividade
- **≤540px:** Botao full-width.

---

## Secao 9: Rodape

### Arquetipo e Constraints
- **Arquetipo:** Minimal (linhas simples, apenas o essencial)
- **Constraints:** Color Blocking muito escuro (Cor), High Contrast (Cor)

### Conteudo
- **Texto:** "© 2026 Vanessa Barreto - Soltura de Cachos. Todos os direitos reservados."

### Layout
- Fundo: `#5D0613` (vermelho ainda mais escuro, distingue do CTA)
- padding-block: 24px 28px
- text-align: center

### Tipografia
- Outfit 400, 13px, cor `rgba(255,240,242,0.5)`, letter-spacing 0.02em

### Responsividade
- Layout mantido em todos os breakpoints.

---

## Regras de Implementacao

1. **NUNCA** usar animacao de entrada no hero (sem opacity:0, data-aos, transform inicial)
2. **Hero** deve ter container com min-height fixo para evitar CLS
3. **Imagens** com `loading="eager"` no hero, `loading="lazy"` no resto
4. **AOS:** sempre com `disableMutationObserver: true` na inicializacao
5. **Scripts pesados** (se houver): Dynamic Import + IntersectionObserver
6. **Fontes:** preconnect + display=swap, NUNCA media="print" onload
7. **Caminhos de imagens:** formato `/.netlify/images?url=/images/foto.jpg&w=800&q=80`
8. **Caminhos absolutos** em todos os arquivos: comecam com `/`
9. **Formulario:** usar o padrao existente com Netlify Forms
