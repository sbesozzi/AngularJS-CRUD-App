import angular from 'angular';
import 'angular-ui-router';
import config from './config';

import ListController from './controllers/list.controller.js';
import SingleController from './controllers/single.controller.js';
import AddController from './controllers/add.controller.js';
import EditController from './controllers/edit.controller.js';
import AboutController from './controllers/about.controller.js';

import FindService from './services/find.service.js';


angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': '7wdbDOteArcCUZ0YahH3dPAAb2sJgw4cPfg5jrU7',
        'X-Parse-REST-API-Key': 'qCXIrZRyB3CDZ9Z4kuSZlBB2XImD1b5Zk1eEcCBc'
      }
    }
  })
  .config(config)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('AddController', AddController)
  .controller('EditController', EditController)
  .controller('AboutController', AboutController)
  .service('FindService', FindService)
;