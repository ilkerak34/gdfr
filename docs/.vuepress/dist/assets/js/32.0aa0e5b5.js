(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{220:function(e,a,n){"use strict";n.r(a);var t=n(0),i=Object(t.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("Title"),e._v(" "),n("p",[e._v("Bazen kullandığımız komutları unutuyoruz ve her projede farklı farklı komutlar çalıştırmamız gerekebiliyor.. veya dosyaları başkalarına göndereceğimiz zaman hangi komutları kullanmaları gerektiğini tam olarak açıklayamıyabiliyoruz. İşte tam bu noktada projeye özel komutlat oluşturmak için "),n("code",[e._v("Makefile")]),e._v(" kullanabilirsiniz.")]),e._v(" "),n("p",[e._v("Klasörde oluşturacağınız "),n("code",[e._v("Makefile")]),e._v("(uzantısı yok, ilk harfi büyük) dosyasına "),n("code",[e._v("serve")]),e._v(" komutunu eklediğimizde artık altındaki satırı çalıştıracak.. alttaki satırda yazacağınız komutu başlatmadan önce "),n("code",[e._v("tab")]),e._v(" tuşuna basmanız gerekiyor.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("serve:\n  jekyll serve\n")])])]),n("h4",{attrs:{id:"makefile-dosyasini-nasil-calistiracagim"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#makefile-dosyasini-nasil-calistiracagim","aria-hidden":"true"}},[e._v("#")]),e._v(" Makefile Dosyasını Nasıl Çalıştıracağım ?")]),e._v(" "),n("p",[n("code",[e._v("make")]),e._v(" yazıp "),n("code",[e._v("tab")]),e._v(" tuşuna basarsanız "),n("code",[e._v("Makefile")]),e._v(" içerisinde hazırlanmış olan komutu görebilirsiniz. Bu örnekte olduğu gibi "),n("code",[e._v("make serve")]),e._v(" yazdığınızda serve içesidindeki işlemler gerçekleşecektir. Sadece "),n("code",[e._v("make")]),e._v(" yazıp "),n("code",[e._v("enter")]),e._v(" tuşuna bastığınızda ilk komut çalışacaktır. Yine yukardakı örnekte tek komut (serve) olduğu için "),n("code",[e._v("make serve")]),e._v(" komutunu çalıştırmış olacaksınız.")]),e._v(" "),n("h3",{attrs:{id:"projenizi-hazirlarken-uyguladiginiz-adimlari-makefile-ile-gosterin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#projenizi-hazirlarken-uyguladiginiz-adimlari-makefile-ile-gosterin","aria-hidden":"true"}},[e._v("#")]),e._v(" Projenizi Hazırlarken Uyguladığınız Adımları Makefile ile gösterin 😉")]),e._v(" "),n("p",[e._v("Paylaştığınız projenizle ilgili adımları Makefile ile oluşturduğunuzda projenin mantığını daha iyi anlatabileceğinizi düşünüyorum.")]),e._v(" "),n("h4",{attrs:{id:"ornek"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ornek","aria-hidden":"true"}},[e._v("#")]),e._v(" Örnek:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('1-npm-init:\n        npm init\n\n2-add-dependencies:\n        npm install webpack --save && npm install react --save && npm install react-dom --save && npm install babel-core --save &$\n\n3-create-index:\n        echo \'<!DOCTYPE html>\'  > index.html\n        echo \'<html lang = "en">\'  >> index.html\n        echo \'  <head>\'  >> index.html\n        echo \'    <meta charset = "UTF-8">\'  >> index.html\n        echo \'    <title>React App</title>\'  >> index.html\n        echo \'  </head>\'  >> index.html\n        echo \'<body>\'  >> index.html\n        echo \'  <div id = "app"></div>\'  >> index.html\n        echo \'  <script src = "index.js"><\/script>\'  >> index.html\n        echo \'</body>\'  >> index.html\n        echo \'</html>\'  >> index.html\n\n4-create-appjsx:\n        echo "import React from \'react\';" > App.jsx\n        echo "class App extends React.Component {" >> App.jsx\n        echo "   render() {" >> App.jsx\n        echo "" >> App.jsx\n        echo "  var i = 1;" >> App.jsx\n        echo "" >> App.jsx\n        echo "      return (" >> App.jsx\n        echo "         <div>" >> App.jsx\n        echo "            <h1>{i == 1 ? \'True!\' : \'False\'}</h1>" >> App.jsx\n        echo "            Hello World!!!" >> App.jsx\n        echo "         </div>" >> App.jsx\n        echo "      );" >> App.jsx\n        echo "   }" >> App.jsx\n        echo "}" >> App.jsx\n        echo "export default App;" >> App.jsx\n\n5-create-mainjs:\n        echo "import React from \'react\';" > main.js\n        echo "import ReactDOM from \'react-dom\';" >> main.js\n        echo "import App from \'./App.jsx\';" >> main.js\n        echo "ReactDOM.render(<App />, document.getElementById(\'app\'));" >> main.js\n\n6-OR-Create-All-Files: 3-create-index 4-create-appjsx 5-create-mainjs\n\n7-OR-Create-Empty-Files:\n        touch index.html && touch App.jsx && touch main.js && touch webpack.config.js\n\n10-start:\n        npm start\n\n')])])]),n("p",[e._v("Makefile oluşturmak için tutorial : "),n("a",{attrs:{href:"http://mrbook.org/blog/tutorials/make/",target:"_blank",rel:"noopener noreferrer"}},[e._v("makefile-tutorial"),n("OutboundLink")],1)])],1)},[],!1,null,null,null);a.default=i.exports}}]);