

var Ford = window.Ford = window.Ford || {};

        Ford.MiniVan = function(eng){
            this.engine = eng;
        }

        Ford.MiniVan.prototype = (function(){
             
            var start = function(){    
                                 
                console.log("Minivan started " + this.engine);
            }, 

            stop = function(){
                console.log("Minivan Stopped " + this.engine);                
            },

            init = function(){
                this.started(); // is this correct way I am doing ?
                this.stopped();  
            }

            return {
                started: start,
                stopped: stop,
                init: init
            }

        })(); 


        Ford.Person = function(personName, occupation){
            this.name = personName || "Pravin";
            this.occupation = occupation || "UI Dev";
            this.sayHello = function(){ 
                console.log('Hey this ! I am ' + this.name);
            }
        }

        Ford.Person.prototype = (function(){

            var getDetails = function(){
                console.log( this.name + " is " + this.occupation);
            }

            return {
                getDetails: getDetails
            }


        })();

        Ford.Person.prototype.getAge = function(param){
            console.log('person name is ' + this.name + ' and he is ' + param + ' Years Old')
        }


        $(function(){
            Ford.MiniVan.prototype.drive = function(){
              console.log('I am vehicle.MiniVan cool ' + this.engine);
            }

            var mv = new Ford.MiniVan('V7');
            var pravin = new Ford.Person('Pravin Vaichal');

            //console.log(typeof mv)
            mv.init();
            //mv.start();
            mv.drive();

            pravin.name = "Praveeeeen";

            pravin.sayHello();
            pravin.getDetails();
            pravin.getAge(26);

            
        })
       