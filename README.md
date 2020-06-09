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

[React Icons](https://react-icons.github.io/react-icons/)
Biblioteca para icones, dessa forma podemos deixar a aplicação mais leve
para usa-la é bem simples

Entre no site do React Icons olhe qual icone quer, depois só dar um:

```lang-js
import { FaBeer } from 'react-icons/fa';
```

**/fa -> foi pego da pasta fa, existe inumeras pastas, basta olha a doc deles.**

depois de importado só usar

exemplo:

```lang-js
<h3> Lets go for a <FaBeer />? </h3>
```
