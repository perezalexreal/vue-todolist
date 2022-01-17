new Vue({
    el: "#app",
    data: {
        newItemString: '',
        list: [
        {
            text: 'Fare la spesa',
            done: false
        },
        {
            text: 'Fare il bucato',
            done: false
        },
        {
            text: 'Fare da mangiare',
            done: false
        }
        ]
    },
    methods: {
        addItem: function () {
            if(this.newItemString != ''){
                this.list.push({ text: this.newItemString, done: false})
                this.newItemString = ''
            }
        },
        removeItem: function(index) {
            this.list.splice(index, 1)
        },
        toDoDone: function(index){
            this.list[index].done = !this.list[index].done;
        }
    }
});