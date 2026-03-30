# Layout Specification - VSP 1 (vsp1.html)

Esta página é uma Video Sales Page (VSP) minimalista focada em conversão imediata, reaproveitando a identidade visual do workshop-cachos-v1.

---

## Estrutura Global
- **Pasta:** `workshop-cachos-v1/`
- **Arquivo:** `vsp1.html`
- **CSS:** Reutiliza `/style.css?v=1.1` e adiciona estilos específicos inline ou em bloco `<style>` para evitar conflitos.

---

## Seção Única: Hero / VSP
Foco total no vídeo e na oferta.

### Arquetipo e Constraints
- **Arquetipo:** Single Focus (Foco no vídeo) + Hero Dominante (100vh).
- **Constraints:** Full Height (100dvh), Contained Center, Video Immersive.
- **Justificativa:** Como o usuário quer o site "sem rolagem no mobile", precisamos de uma estrutura que se adapte perfeitamente à altura da tela, priorizando o vídeo e o botão de ação.

### Conteúdo
- **Top Bar:** 🔥 ÚLTIMAS VAGAS DO LOTE PROMOCIONAL
- **Headline:** Aprenda em 1 Dia a Técnica que Reduz o Encolhimento em até 70% e Aumente seu Faturamento em 3x
- **Subheadline:** Você vai dominar a Soltura de Cachos Profissional com Vanessa Barreto em um Workshop ao Vivo, prático e com certificado incluso.
- **Vídeo:** [Placeholder para o Player de Vídeo]
- **CTA Botão:** QUERO GARANTIR MINHA VAGA NO LOTE PROMOCIONAL (R$47)

### Layout
- **Container:** `display: flex; flex-direction: column; height: 100vh; height: 100dvh; overflow: hidden;`.
- **Top Bar:** Altura fixa (~40px).
- **Main Hero Body:** `flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; gap: 16px; text-align: center;`.
- **Headline:** Max-width 800px.
- **Vídeo Container:** Aspect-ratio 16/9, max-width 700px, width 100%. Sombra difusa `#91091E` (glow sutil).
- **CTA:** Botão largo em mobile, centrado em desktop.
- **Footer:** Simples e na base.

### Tipografia
- **Headline:** `clamp(1.5rem, 4vw, 2.8rem)`, `font-family: Fraunces`, `font-weight: 700`.
- **Subheadline:** `clamp(0.9rem, 2vw, 1.1rem)`, `font-family: Outfit`, `font-weight: 400`, `opacity: 0.9`.

### Cores
- **Fundo:** `#FFF0F2` (reutilizando a cor clara do site principal).
- **Texto:** `#2D1216` (escuro para contraste).
- **Acento (Botão/TopBar):** `#91091E` (vinho padrão).

### Responsividade (Mobile 100vh)
Para garantir "sem barra de rolagem":
1. Reduzir o tamanho da Headline em telas < 600px.
2. Diminuir gaps entre elementos.
3. Garantir que o conteúdo caiba verticalmente em telas pequenas (e.g. iPhone SE).

---

## Elementos Encantadores
- **Glow no Vídeo:** Um efeito de luz pulsante atrás do vídeo para dar foco.
- **Micro-animação no Botão:** Pulso sutil no botão CTA para indicar urgência.
- **Transition:** Carregamento instantâneo do vídeo.
