pure-webapp-seed
================

My own starting point for writing pure-webapp(runs on browser/front-end/client-side).

Please, feel free to raise issues or pull requests.

Ingredients
-----------

* [angular](http://angularjs.org) 1.0.5
* [bootstrap](http://getbootstrap.com) 2.3.1
* [fontawesome](http://fortawesome.github.com/Font-Awesome/) 3.0.2
* [google-code-prettify](http://code.google.com/p/google-code-prettify/) 4-Mar-2013 with [custom themes](http://jmblog.github.com/color-themes-for-google-code-prettify/)
* [html5shiv](https://github.com/aFarkas/html5shiv) 3.6.2
* [ace](http://ace.ajax.org)
* [showdown](https://github.com/coreyti/showdown)
* [jquery](http://jquery.com) 1.9.1 with plugins
* and ...

Run Webapp
----------

```
$ git clone git://github.com/iolo/pure-webapp-seed.git
$ cd public
$ python -m SimpleHTTPServer
$ open http://localhost:8000
```

Run Test
--------

* TBW

Apply to Your Project
---------------------

* TBW

Update Libraries
----------------

* TBW

Directory Layout
----------------

```
.
|-- README.md
`-- public
    |-- css
    |   `-- app.css
    |-- img
    |-- index.html
    |-- js
    |   |-- app.js
    |   |-- controllers.js
    |   |-- directives.js
    |   |-- filters.js
    |   `-- services.js
    |-- lib
    |   |-- ace
    |   |   |-- ace.js
    |   |   |-- ext-elastic_tabstops_lite.js
    |   |   |-- ext-searchbox.js
    |   |   |-- ext-spellcheck.js
    |   |   |-- ext-static_highlight.js
    |   |   |-- ext-textarea.js
    |   |   |-- keybinding-emacs.js
    |   |   |-- keybinding-vim.js
    |   |   |-- mode-abap.js
    |   |   |-- mode-asciidoc.js
    |   |   |-- mode-c9search.js
    |   |   |-- mode-c_cpp.js
    |   |   |-- mode-clojure.js
    |   |   |-- mode-coffee.js
    |   |   |-- mode-coldfusion.js
    |   |   |-- mode-csharp.js
    |   |   |-- mode-css.js
    |   |   |-- mode-curly.js
    |   |   |-- mode-dart.js
    |   |   |-- mode-diff.js
    |   |   |-- mode-django.js
    |   |   |-- mode-dot.js
    |   |   |-- mode-ftl.js
    |   |   |-- mode-glsl.js
    |   |   |-- mode-golang.js
    |   |   |-- mode-groovy.js
    |   |   |-- mode-haml.js
    |   |   |-- mode-haxe.js
    |   |   |-- mode-html.js
    |   |   |-- mode-jade.js
    |   |   |-- mode-java.js
    |   |   |-- mode-javascript.js
    |   |   |-- mode-json.js
    |   |   |-- mode-jsp.js
    |   |   |-- mode-jsx.js
    |   |   |-- mode-latex.js
    |   |   |-- mode-less.js
    |   |   |-- mode-liquid.js
    |   |   |-- mode-lisp.js
    |   |   |-- mode-livescript.js
    |   |   |-- mode-logiql.js
    |   |   |-- mode-lsl.js
    |   |   |-- mode-lua.js
    |   |   |-- mode-luapage.js
    |   |   |-- mode-lucene.js
    |   |   |-- mode-makefile.js
    |   |   |-- mode-markdown.js
    |   |   |-- mode-objectivec.js
    |   |   |-- mode-ocaml.js
    |   |   |-- mode-pascal.js
    |   |   |-- mode-perl.js
    |   |   |-- mode-pgsql.js
    |   |   |-- mode-php.js
    |   |   |-- mode-powershell.js
    |   |   |-- mode-python.js
    |   |   |-- mode-r.js
    |   |   |-- mode-rdoc.js
    |   |   |-- mode-rhtml.js
    |   |   |-- mode-ruby.js
    |   |   |-- mode-sass.js
    |   |   |-- mode-scad.js
    |   |   |-- mode-scala.js
    |   |   |-- mode-scheme.js
    |   |   |-- mode-scss.js
    |   |   |-- mode-sh.js
    |   |   |-- mode-sql.js
    |   |   |-- mode-stylus.js
    |   |   |-- mode-svg.js
    |   |   |-- mode-tcl.js
    |   |   |-- mode-tex.js
    |   |   |-- mode-text.js
    |   |   |-- mode-textile.js
    |   |   |-- mode-tm_snippet.js
    |   |   |-- mode-tmsnippet.js
    |   |   |-- mode-toml.js
    |   |   |-- mode-typescript.js
    |   |   |-- mode-vbscript.js
    |   |   |-- mode-xml.js
    |   |   |-- mode-xquery.js
    |   |   |-- mode-yaml.js
    |   |   |-- theme-ambiance.js
    |   |   |-- theme-chaos.js
    |   |   |-- theme-chrome.js
    |   |   |-- theme-clouds.js
    |   |   |-- theme-clouds_midnight.js
    |   |   |-- theme-cobalt.js
    |   |   |-- theme-crimson_editor.js
    |   |   |-- theme-dawn.js
    |   |   |-- theme-dreamweaver.js
    |   |   |-- theme-eclipse.js
    |   |   |-- theme-github.js
    |   |   |-- theme-idle_fingers.js
    |   |   |-- theme-kr.js
    |   |   |-- theme-merbivore.js
    |   |   |-- theme-merbivore_soft.js
    |   |   |-- theme-mono_industrial.js
    |   |   |-- theme-monokai.js
    |   |   |-- theme-pastel_on_dark.js
    |   |   |-- theme-solarized_dark.js
    |   |   |-- theme-solarized_light.js
    |   |   |-- theme-textmate.js
    |   |   |-- theme-tomorrow.js
    |   |   |-- theme-tomorrow_night.js
    |   |   |-- theme-tomorrow_night_blue.js
    |   |   |-- theme-tomorrow_night_bright.js
    |   |   |-- theme-tomorrow_night_eighties.js
    |   |   |-- theme-twilight.js
    |   |   |-- theme-vibrant_ink.js
    |   |   |-- theme-xcode.js
    |   |   |-- worker-coffee.js
    |   |   |-- worker-css.js
    |   |   |-- worker-javascript.js
    |   |   |-- worker-json.js
    |   |   |-- worker-php.js
    |   |   `-- worker-xquery.js
    |   |-- angular
    |   |   |-- angular-bootstrap-prettify.js
    |   |   |-- angular-bootstrap-prettify.min.js
    |   |   |-- angular-bootstrap.js
    |   |   |-- angular-bootstrap.min.js
    |   |   |-- angular-cookies.js
    |   |   |-- angular-cookies.min.js
    |   |   |-- angular-loader.js
    |   |   |-- angular-loader.min.js
    |   |   |-- angular-mocks.js
    |   |   |-- angular-resource.js
    |   |   |-- angular-resource.min.js
    |   |   |-- angular-sanitize.js
    |   |   |-- angular-sanitize.min.js
    |   |   |-- angular-scenario.js
    |   |   |-- angular.js
    |   |   |-- angular.min.js
    |   |   |-- i18n
    |   |   |   |-- angular-locale_am-et.js
    |   |   |   |-- angular-locale_am.js
    |   |   |   |-- ...
    |   |   |   |-- angular-locale_zh-hk.js
    |   |   |   |-- angular-locale_zh-tw.js
    |   |   |   `-- angular-locale_zh.js
    |   |   |-- jstd-scenario-adapter-config.js
    |   |   |-- jstd-scenario-adapter.js
    |   |   |-- version.json
    |   |   `-- version.txt
    |   |-- bootstrap
    |   |   |-- css
    |   |   |   |-- bootstrap-responsive.css
    |   |   |   |-- bootstrap-responsive.min.css
    |   |   |   |-- bootstrap.css
    |   |   |   `-- bootstrap.min.css
    |   |   |-- img
    |   |   |   |-- glyphicons-halflings-white.png
    |   |   |   `-- glyphicons-halflings.png
    |   |   `-- js
    |   |       |-- bootstrap.js
    |   |       `-- bootstrap.min.js
    |   |-- fontawesome
    |   |   |-- css
    |   |   |   |-- font-awesome-ie7.min.css
    |   |   |   |-- font-awesome.css
    |   |   |   `-- font-awesome.min.css
    |   |   `-- font
    |   |       |-- fontawesome-webfont.eot
    |   |       |-- fontawesome-webfont.svg
    |   |       |-- fontawesome-webfont.ttf
    |   |       |-- fontawesome-webfont.woff
    |   |       `-- fontawesome.otf
    |   |-- html5shiv.js
    |   |-- jquery
    |   |   |-- jquery.js
    |   |   `-- jquery.min.js
    |   |-- prettify
    |   |   |-- lang-apollo.js
    |   |   |-- lang-basic.js
    |   |   |-- ...
    |   |   |-- lang-xq.js
    |   |   |-- lang-yaml.js
    |   |   |-- prettify.css
    |   |   |-- prettify.js
    |   |   |-- run_prettify.js
    |   |   `-- themes
    |   |       |-- github.css
    |   |       |-- hemisu-dark.css
    |   |       |-- hemisu-light.css
    |   |       |-- solarized-dark.css
    |   |       |-- solarized-light.css
    |   |       |-- tomorrow-night-blue.css
    |   |       |-- tomorrow-night-bright.css
    |   |       |-- tomorrow-night-eighties.css
    |   |       |-- tomorrow-night.css
    |   |       |-- tomorrow.css
    |   |       `-- vibrant-ink.css
    |   `-- showdown
    |       |-- extensions
    |       |   |-- github.js
    |       |   |-- prettify.js
    |       |   |-- table.js
    |       |   `-- twitter.js
    |       |-- showdown.js
    |       `-- showdown.min.js
    `-- partials
        `-- home.html
```

21 directories, 366 files
