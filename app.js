const app = new Vue({
  
    el: '#appLicacion',
    data: {
        titulo : "CRUD",
        tareas:[],
        nuevaTarea:'',
        
    },

    methods: {
        agregarTarea: function(){
           this.tareas.push({
               nombre : this.nuevaTarea,
               estado: false
           });

           this.nuevaTarea ="";
           
           localStorage.setItem('datos', JSON.stringify(this.tareas));
           
           
        },
        editarTarea: function(index){
           
            this.tareas[index].estado= true;
            localStorage.setItem('datos', JSON.stringify(this.tareas));

        },
        eliminarTarea: function(index){
            
            this.tareas.splice(index, 1)
            localStorage.setItem('datos', JSON.stringify(this.tareas));
        }
    },
    created : function(){
        var datoDB = JSON.parse(localStorage.getItem('datos'));
            if(datoDB === null){
                this.tareas = [];
            }else{
                this.tareas= datoDB;
            }

    }

});