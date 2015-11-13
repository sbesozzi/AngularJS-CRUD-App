let FindService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/finds';

  this.getFinds = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });

  };

  this.getFind = function (id) {
    return $http({
      method: 'GET',
      url: url + '/' + id,
      headers: PARSE.CONFIG.headers,
      cache: true
    });
  };

  let Find = function (obj) {
    this.find = obj.find;
    this.material = obj.material;
  };

  this.addFind = function (obj) {
    let f = new Find(obj);
    return $http.post(url, f, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};


FindService.$inject = ['$http', 'PARSE'];

export default FindService;