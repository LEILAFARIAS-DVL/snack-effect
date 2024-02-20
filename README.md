# Nome do Projeto

Este é um projeto de demonstração que inclui uma animação de uma cobra (snake) feita com SVG.

## Descrição

Este projeto contém uma animação de uma cobra (snake) gerada dinamicamente com SVG. A animação é baseada nas contribuições do usuário em um determinado período de tempo.

## Como Usar

Para visualizar a animação, basta abrir o arquivo `snake.svg` neste repositório.

## Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

<svg width="400" height="400">
  <circle id="head" cx="200" cy="200" r="10" fill="red">
    <animate attributeName="cx" from="200" to="250" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle id="segment1" cx="190" cy="200" r="10" fill="green">
    <animate attributeName="cx" from="190" to="200" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle id="segment2" cx="180" cy="200" r="10" fill="green">
    <animate attributeName="cx" from="180" to="190" dur="2s" repeatCount="indefinite" />
  </circle>
  <circle id="segment3" cx="170" cy="200" r="10" fill="green">
    <animate attributeName="cx" from="170" to="180" dur="2s" repeatCount="indefinite" />
  </circle>
</svg>
