angular.module('templateApp').controller('TemplateController', ['$scope', templateController]);

function templateController($scope) {
  $(document).ready(function() {
    $.material.init();
    $('.dropdown-toggle').dropdown();
  });
  var vm = this;
}
