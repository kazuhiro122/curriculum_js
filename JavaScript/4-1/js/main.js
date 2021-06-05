Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        keyword: '', 
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
        checkitem: function(todo) {
            if(todo.indexOf(this.keyword) == -1){
                return false;
            }else{
                return true;
            }
        }
    },
    computed: {
        total: function() {
            return this.list.length;
        },
        remaining: function() {
            let count = 0;
            this.list.forEach((todo) => {
                if(!todo.isChecked) {
                    count++;
                }
            }); 
            return count;
        }/*,
        list: function() {
            var lists = [];
            for(var i in this.lists) {
                var list = this.lists[i];
                if(list.text.indexOf(this.keyword) !== -1) {
                    lists.push(list);
                }
            }
            return lists;
        }*/
    }
});