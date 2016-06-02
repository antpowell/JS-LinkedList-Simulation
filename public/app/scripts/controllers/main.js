angular.module('app')
    .controller('LinkController', ['$scope', 'LinkedListFactory', function ($scope, LinkedListFactory) {
        var link = this;
        link.val = "";
        link.size = 0;
        link.show = '';

        link.append = function () {
            //            link.show = LinkedListFactory.append.display();
            LinkedListFactory.append(link.val);
            link.size = LinkedListFactory.size();
            link.show = LinkedListFactory.display();
        }
        link.prepend = function () {
            link.size = LinkedListFactory.prepend(link.val);
            link.size = LinkedListFactory.size();
            link.show = LinkedListFactory.display();
        }
        link.remove = function () {
                link.size = LinkedListFactory.remove(link.val);
                link.size = LinkedListFactory.size();
                link.show = LinkedListFactory.display();
            }
            //        link.size = function(){
            //            return LinkedListFactory.size();
            //        }
               }]);