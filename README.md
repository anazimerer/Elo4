### Organização:

📂src
&nbsp;&nbsp;🔌 routes.js <br/>
&nbsp;&nbsp;📂components<br/>
&nbsp;&nbsp;📂 styles(estilo global da aplicação)<br/>
&nbsp;&nbsp;📂 pages<br/>
&nbsp;&nbsp;📂 services (arquivo de api)<br/>
&nbsp;&nbsp;📂 assets / 📂images (arquivos de imagens)<br/>

## 📂 Components

Criar um pasta com o nome do componente e chamar arquivo do componente de index.js e o style component de style.js exemplo:
📂Header
index.js
style.js

### 📂 styles

**Fica toda a estização global da aplicação, como reset do css, fontes e tudo mais que toda a aplicação irá usar**

### 📂 pages

**Fica toda as paginas que não são components, como home, login, cadastro**

**Ficando na url assim: localhost:3000/login**

### 📂 services (arquivo de api)

**Arquivo da api, onde fica a url que não muda**
**Dessa forma na hora de chamar ela usa-se apenas api.get, api.post,etc**

### assets / 📂images (arquivos de imagens)

**Onde ficam todas as imagens da aplicação, como fotos dos produtos, avatares,etc**

### 🔌 routes.js

**Arquivo que fica todas as rotas da aplicação**

[Materia Ui Icons](https://material-ui.com/)
Biblioteca para icones, como temos que usar o Material UI então para padronizar tudo e deixar a aplicação mais leve, coloquei o material UI Icons

```lang-js
import MenuIcon from '@material-ui/icons/Menu';
```

**/fa -> Foi pego o ícone Menu dos icons**

depois de importado só usar

exemplo:

```lang-js
<MenuIcon />
```
