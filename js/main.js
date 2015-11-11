import angular from 'angular';
import 'angular-ui-router';
import configFunct from './config';

import PageController from './controllers/page.controller.js';




angular
  .module('app', ['ui.router'])
  .config(configFunct)
  .controller('PageController');