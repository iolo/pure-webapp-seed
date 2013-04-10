pure-webapp-seed
================

My own starting point for writing pure-webapp(runs on browser/front-end/client-side).

Please, feel free to raise issues or pull requests.

Ingredients
-----------

* [angular](http://angularjs.org) 1.0.6
* [bootstrap](http://getbootstrap.com) 2.3.1 with plugins
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
    |   |   |-- ext-...
    |   |   |-- keybinding-...
    |   |   |-- mode-...
    |   |   |-- theme-...
    |   |   `-- worker-...
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
    |   |   |   `-- angular-locale...
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
    |   |   |-- js
    |   |   |   |-- bootstrap.js
    |   |   |   `-- bootstrap.min.js
    |   |   `-- plugins
    |   |       |-- bootstrap-tag.css
    |   |       `-- bootstrap-tag.js
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
    |   |   |-- jquery.min.js
    |   |   `-- plugins
    |   |-- prettify
    |   |   |-- lang-...
    |   |   |-- prettify.css
    |   |   |-- prettify.js
    |   |   |-- run_prettify.js
    |   |   `-- themes
    |   |       `-- ...
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
