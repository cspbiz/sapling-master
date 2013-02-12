'use strict';

/*
 * ds.stores.rest spec
 */

describe('ds::', function () {
  var $httpBackend;
  var config;
  var ds;

  beforeEach(module('ds.stores.rest'));

  describe('ds.stores.rest', function () {
    beforeEach(inject(function ($injector) {
      config = $injector.get('config');
      $httpBackend = $injector.get('$httpBackend');
      ds = $injector.get('dsRest');
    }));

    afterEach(inject(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    describe('read()', function () {

      it('should populate an object with data from the server', function () {
        var url = config.API_BASE_URL + '/users/1';
        var entityGroup = 'user';
        var key = '1';
        var obj = {
          // test attributes
          name: 'obj',
          // test methods
          printName: function () {
            return this.name;
          }
        };
        var resp = {
          serverValue: 'added by the server'
        };
        $httpBackend.expectGET(url).respond(resp);
        var p = ds.read(entityGroup, key, obj);
        p.success(function (obj, status) {
          expect(status).toBe(200);
          expect(obj.serverValue).toBe('added by the server');
        });
        p.error(function (data, status) {
          expect(data).toBe(null);
        });
        $httpBackend.flush();
        expect(obj.name).toBe('obj');
        expect(obj.printName()).toBe('obj');
        expect(obj.serverValue).toBe('added by the server');
      });

    });

    describe('readMulti()', function () {

      it('should populate an object with data from the server', function () {
        var url = config.API_BASE_URL + '/users/1';
        var entityGroup = 'user';
        var key = '1';
        var obj = {
          // test attributes
          name: 'obj',
          // test methods
          printName: function () {
            return this.name;
          }
        };
        var resp = {
          serverValue: 'added by the server'
        };
        $httpBackend.expectGET(url).respond(resp);
        var p = ds.read(entityGroup, key, obj);
        p.success(function (obj, status) {
          expect(status).toBe(200);
          expect(obj.serverValue).toBe('added by the server');
        });
        p.error(function (data, status) {
          expect(data).toBe(null);
        });
        $httpBackend.flush();
        expect(obj.name).toBe('obj');
        expect(obj.printName()).toBe('obj');
        expect(obj.serverValue).toBe('added by the server');
      });

    });
  });

});
