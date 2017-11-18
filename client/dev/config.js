System.config({
  defaultJSExtensions: true,
  paths: {
    // paths serve as alias
    'npm:': './'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    app: 'app',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    'angular2-recaptcha': 'node_modules/angular2-recaptcha',
    '@ngx-translate/core': 'node_modules/@ngx-translate/core/bundles/core.umd.js',
    '@ngx-translate/http-loader': 'node_modules/@ngx-translate/http-loader/bundles/http-loader.umd.js',

    // other libraries
    'rxjs': 'npm:rxjs'
  },
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
    'angular2-recaptcha': {
      defaultExtension: 'js',
      main: 'index'
    },
    '@ngx-translate/core': {
      defaultExtension: 'js'
    },
    '@ngx-translate/http-loader': {
      defaultExtension: 'js'
    }
  }
});
