 "use strict";

 function TodoController() {
     const vm = this;
     vm.list = [{
             task: "Walk the dog",
             completed: false
         },
         {
             task: "Pick up groceries",
             completed: false
         },
         {
             task: "Do the dishes",
             completed: false

         },
         {
             task: "Wash the car",
             completed: false
         },
     ]

     vm.addTask = (newTask) => {
         vm.list.push({
             task: newTask,
             completed: false
         });
     };

     vm.completeTask = (index) => {
         vm.list[index].completed = true
     };

     vm.removeTask = (index) => {
         vm.list.splice(index, 1);
     };
 };

 angular
     .module("todoApp")
     .controller("TodoController", TodoController);