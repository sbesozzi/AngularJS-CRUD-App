import angular from 'angular';
import 'angular-ui-router';
import config from './config';

import HomeController from './controllers/home.controller.js';
import ListController from './controllers/list.controller.js';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController')
  .controller('ListController')
;