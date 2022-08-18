<h3>Turls</h3>

> 🐢 A simple JavaScript utility for conditionally query string together.

---

![](https://img.shields.io/npm/v/turls?color=DAE2B6&label=version&style=for-the-badge)
![](https://img.shields.io/npm/l/turls?color=DAE2B6&style=for-the-badge)

---

<p align="center">
 <a href="#about">About</a> •
 <a href="#started">Getting started</a> •
 <a href="#authors">Authors</a> •
 <a href="#acknowledgement">Acknowledgements</a> •
 <a href="#todos">TODOs</a> •
 <a href="#license">License</a>
</p>

---

## 🧐 About <a name = "about"></a>
Turls is a simple, JavaScript utility for conditionally query string together. The idea behind Turls is to prevent developers from rewriting the same code in multiple places, while also making it easy to dynamically construct advanced queries that can be easily shared across multiple files.

Turls is perfect for applications that need to dynamically query an API or database, but it can also be used as a general purpose URL builder.

## 🏁 Getting Started <a name = "started"></a>

1. Install with npm, yarn or pnpm:
```bsh
npm install turls
```
```bsh
yarn add turls
```

```bsh
pnpm add turls
```

2. Use the library:
```js
import turls from 'turls';
turls("https://api.example.com/", "query", {
  "id=1": true,
  "name=John Doe": true,
  "age=30": true
})
// => "https://api.example.com/?id=1&name=John%20Doe&age=30"
```

## 🚀 Usage

```js
import turls from 'turls';
turls("https://api.example.com/", "query");
// => "https://api.example.com/query"

turls("https://api.example.com/", "query", "search");
// => "https://api.example.com/querysearch"

turls("https://api.example.com/", "query", {
  "id=1": true,
  "name=John Doe": true,
  "age=30": true
})
// => "https://api.example.com/query?id=1&name=John%20Doe&age=30"

turls("https://api.example.com/", "query", {
  "id=1": true,
  "name=John Doe": true,
  "age=30": false
})
// => "https://api.example.com/query?id=1&name=John%20Doe"

turls("https://api.example.com/", "query", {
  "id=1": false,
  "name=John Doe": true,
  "age=30": false,
})
// => "https://api.example.com/query?name=John%20Doe"
```

## ⚙️ TODO <a name = "todos"></a>
[ ] Make library support Node.js


## ✍️ Authors <a name = "authors"></a>
- [@Hiyudev](https://github.com/Hiyudev)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Inspired by [@JedWatson](https://github.com/JedWatson), creator of [classnames](https://github.com/JedWatson/classnames)

## © License <a name = "license"></a>
- MIT License