(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(15),s=n.n(r),c=(n(22),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(23),n(2)),d=n.n(h),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("footer",null,a.a.createElement("p",null,"Copyright Jamie Yeung 2019 | Data taken from ",a.a.createElement("a",{href:"https://developer.nytimes.com/docs/books-product/1/overview"},"NY TImes Books API"))))}}]),t}(o.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).randomFiction=function(e){var t=[];return t.push(e[Math.floor(Math.random()*e.length)]),t},e.fiction=function(){d()({method:"GET",url:"https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Fiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX",dataResponse:"json"}).then(function(t){t=t.data.results.books,e.setState({allBooks:e.randomFiction(t)})})},e.randomNonFiction=function(e){var t=[];return t.push(e[Math.floor(Math.random()*e.length)]),t},e.nonFiction=function(){d()({method:"GET",url:"https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Nonfiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX",dataResponse:"json"}).then(function(t){t=t.data.results.books,e.setState({allBooks:e.randomNonFiction(t)})})},e.randomManga=function(e){var t=[];return t.push(e[Math.floor(Math.random()*e.length)]),t},e.manga=function(){d()({method:"GET",url:"https://api.nytimes.com/svc/books/v3/lists/current/Manga.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX",dataResponse:"json"}).then(function(t){t=t.data.results.books,e.setState({allBooks:e.randomManga(t)})})},e.randomPicture=function(e){var t=[];return t.push(e[Math.floor(Math.random()*e.length)]),t},e.pictureBook=function(){d()({method:"GET",url:"https://api.nytimes.com/svc/books/v3/lists/current/Picture%20Books.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX",dataResponse:"json"}).then(function(t){t=t.data.results.books,e.setState({allBooks:e.randomPicture(t)})})},e.state={allBooks:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"darkBack"},a.a.createElement("h1",null,"Book of the Week"),a.a.createElement("p",null,"Don't know what to read? No problem, just click one of the genres below for a book recommendation from the NY Times Best Sellers of the week!")),a.a.createElement("div",{className:"buttons wrapper"},a.a.createElement("button",{onClick:this.fiction,className:"button"},"Fiction"),a.a.createElement("button",{onClick:this.nonFiction,className:"button"},"Non Fiction"),a.a.createElement("button",{onClick:this.manga,className:"button"},"Manga"),a.a.createElement("button",{onClick:this.pictureBook,className:"button"},"Picture Book")),a.a.createElement("div",{className:"wrapper"},this.state.allBooks.map(function(e){return a.a.createElement("div",{className:"result"},a.a.createElement("div",{className:"imgContain"},a.a.createElement("img",{src:e.book_image,alt:e.title,className:"swirl-in-fwd"})),a.a.createElement("div",{className:"resultContent tracking-in-expand-fwd-top"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,a.a.createElement("span",null,"Author")," : ",e.author),a.a.createElement("p",null,a.a.createElement("span",null,"Synopsis")," : ",e.description),a.a.createElement("p",null," Click one of the options above again to get another result if you're not satisfied."),a.a.createElement("p",null,"Get your book here : ",a.a.createElement("a",{href:e.amazon_product_url}," Amazon ",a.a.createElement("i",{className:"fab fa-amazon","aria-hidden":"true",title:"Click to go to Amazon.com to purchase the book"})))))})),a.a.createElement(p,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.e926f741.chunk.js.map