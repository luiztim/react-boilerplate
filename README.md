# Descrição
Boiler Plate para aplicações React (usando react-dom)

## Instalação

- [Node-JS](https://www.notion.so/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f)
- [Yarn](https://www.notion.so/Instalando-o-Yarn-eca6a13be5b3467d8d2f7be15c60f322)

Após instalar os pacotes acima, pelo terminal vá até a pasta do projeto 
e execute o comando abaixo para instalar as dependências:

```
yarn
``` 

## Executando o projeto em dev

Pelo terminal, na pasta do projeto digite

```
yarn dev
```

O webpack vai subir um server e, a aplicação ficará disponível no localhost com live-reload (geralmente é no localhost:8080 - porém, atente-se às mensagens do webpack no terminal)

## Build para produção

Pelo terminal, na pasta do projeto digite

```
yarn build
```

O webpack vai gerar uma pasta <b>dist</b>, com todos os componentes da aplicação para instalar em produção