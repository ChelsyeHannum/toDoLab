 "use strict";

 function TodoController() {
     const vm = this;
     vm.list = [{
             task: "Walk the dog",
             completed: true
         },
         {
             task: "Pick up groceries",
             completed: false
         },
         {
             task: "Do the dishes",
             completed: true

         },
         {
             task: "Wash the car",
             completed: false
         },
     ]

     vm.addItem = (newItem) => {
         vm.list.push({
             task: newItem.task
         });
     };
 };

 angular
     .module("todoApp")
     .controller("TodoController", TodoController);