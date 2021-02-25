<template>
    <div>
        <h2>コメント一覧</h2>

        <form v-on:submit.prevent>
          <input type="text" v-model="newItem">
          <button v-on:click="addItem">Add</button>
        </form>

        
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ index }} . {{todo.item}}
                
                
                <!-- <input type="text" v-model="todo.isDone">チェックボックス同期 -->
                <!-- <span v-bind:class="{done: todo.isDone}">{{todo.item}}</span>classの追加 -->
                <button v-on:click="deleteItem(index)" class="delete">Delete</button>
            </li> 
        </ul>        
    </div>
</template>

<script>
export default {
  data() {
    return {
    newItem:"",
    todos:[]
    }
  },
  methods:{
    addItem() {
    //   alert(event);
    if(this.newItem == '')return;
    var todo = {
    item: this.newItem,
    isDone:false
    };
    this.todos.push(todo);
    this.newItem = '' //タスク追加後に入力欄を空にする
    },
    deleteItem:function(index){ //indexを引数に指定
      this.todos.splice(index,1) //indexで指定された要素を1つ削除
    }
  }
}
    
</script>

<style scoped>
div {
    text-align: left;
    padding-left: 150px;
}

h2 {
    font-size: 36px;
}

ul {
    list-style:none;
    width: 400px;
}

li {
    font-size: 28px;
    margin-bottom: 1px;
    border: 1px solid;
    padding: 20px;
}

.delete {
    /* margin-left: 100px; */
    float: right;
    margin-top: 10px;
}

/* li > span.done{
  text-decoration:line-through;
} */
</style>