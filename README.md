# Extrator de Reputação do Reclame Aqui

Esta aplicação bem simples que consiste em um webscrapping baseada em headless browsers para a extração da reputação do empresas do site ReclameAqui.

### Requerimentos

A única dependência que é o puppeteer só diz que requer Node 10.18.1+ na versão utilizada.

A versão usada em desenvolvimento foi Node 14.16.1 e Npm 6.14.12.

### Como usar

- Primeiramente abra o arquivo '/stores.json' e insira a lista de empresas que deja extrair os dados seguendo o exemplo presente no projeto.

- Após isso, rode dos seguintes comandos:

``` 
$ npm i
...
$ npm run app
```

Pronto! O arquivo '/extraction/extractionReclameAqui.json' terá sido gerado.

###### Obs.: Como a aplicação tem um forte acoplamento com o HTML, caso haja alguma alteração na estrutura do site do ReclameAqui, irá quebrar a aplicação e será necessário refazer os selectores no aquivo scrape.js.