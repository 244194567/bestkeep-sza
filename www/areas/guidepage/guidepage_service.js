/**
 * Created by Administrator on 2017/6/7.
 */
angular.module('guidepage.service', [])
  .factory('GuidePageFty', function() {
    var name = "悠唐UTOUU";
    return {
      getName:function () {
        return name;
      }
    };
  });
