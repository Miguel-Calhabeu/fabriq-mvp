# Fabriq · MVP de percepção de valor

Site do projeto acadêmico Fabriq, desenvolvido na disciplina de Empreendedorismo do ICMC-USP.

**Site:** https://miguel-calhabeu.github.io/fabriq-mvp/

O cabeçalho permite selecionar três seções:

- **A Fabriq:** landing page com a proposta, o funcionamento conceitual, a equipe e a visão de tecnologia.
- **Entrevista síncrona:** gravação incorporada e análise exploratória de uma perspectiva industrial e acadêmica, com evidência, interpretação e questões abertas.
- **Entrevista assíncrona:** análise de um contexto de pesquisa em IA, com dor relatada, valor percebido e requisitos propostos.

## Conteúdo e limites

As análises derivam de registros fornecidos ao grupo:

- **ES-01:** entrevista síncrona, transcrição e anotações automáticas. Os achados indicam os trechos de referência por marca de tempo.
- **EA-01:** registro de perguntas e respostas da entrevista assíncrona. Os achados referenciam as perguntas de origem.

A síntese identifica os participantes por perfil e não inclui transcrições integrais, identificadores dos documentos de análise ou detalhes de infraestrutura de suas organizações. A gravação fornecida pelo grupo está incorporada na seção síncrona por meio do player do Google Drive, com um link para abrir o arquivo no serviço. O vídeo permanece hospedado no Drive e sua reprodução respeita as permissões de acesso desse arquivo. Com JavaScript, o player só carrega ao acessar essa seção, e sair dela interrompe a reprodução.

Relatos, interpretações da equipe e hipóteses a investigar aparecem separadamente. Há um participante em cada entrevista. Percepção de valor não equivale a desempenho medido, economia comprovada, intenção de compra ou aprovação institucional.

A hipótese de coordenação de licenças flutuantes, levantada na entrevista síncrona, permanece uma oportunidade adjacente em investigação.

## Identidade visual

Azul-marinho `#102C43`, marfim `#F5F2EA`, laranja `#F36A3D` e cinza-azulado `#7E929B`, com faixas entrelaçadas e ícones conectados. A composição segue os artefatos e o pitch anteriores da Fabriq.

## Executar localmente

O site usa HTML, CSS, JavaScript e SVG locais, sem etapa de compilação.

```sh
python3 -m http.server 8080
```

Abra `http://localhost:8080`.

## Publicação

GitHub Pages publica a raiz da branch `main`. O arquivo `.nojekyll` permite servir os arquivos estáticos diretamente. Cada atualização enviada a essa branch atualiza o site.

Os links de seção usam fragmentos (`#fabriq`, `#sincrona`, `#assincrona`), compatíveis com o caminho de projeto no GitHub Pages. Sem JavaScript, as três seções permanecem legíveis e os links do cabeçalho levam aos respectivos conteúdos.

O site não utiliza ferramentas de análise de visitas ou formulários de coleta. A reprodução da gravação utiliza o player externo do Google Drive.
