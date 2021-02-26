<template>
    <div class="comments">
        <h2>コメント一覧</h2>
        <ul>
            <li v-for="(whisper, index) in whispers" :key="index">
              {{ index + 1 }}.{{whisper.content}}
                <button v-on:click="deleteItem(index)" class="delete">削除</button>
                <hr style="opacity: 0.2;">
            </li>
            <!-- <li v-for="(todo, index) in todos" :key="index">
                {{ index + 1 }} . {{todo.item}}               
            </li>  -->
        </ul> 

        <hr v-if="classList">
        <h2>新規投稿</h2>
        <form v-on:submit.prevent="addList" :class="classList">
        <!-- v-model.trim="message"の削除 -->
        <!-- maxlength="15"の削除 -->
          <input
            type="text"
            v-model.trim="newItem"
            placeholder="NEW COMMENT"
            required       
            class="text-input"
            style="opacity: 0.7;"
            @focusin="startEditing"
            @focusout="finishEditing"
            >
          <!-- type="button"でenterでの入力を拒否 -->
          <button
            type="button"
            v-on:click="addItem"
            class="add-button"
            v-if="titleExists && !over"
            >投稿</button>

          <div class="count">
            <p v-if="titleExists">{{ newItem.length }}/15</p>
            <p v-if="over" style="color: red; padding-left: 20px;">
              文字数制限オーバー
            </p> 
          </div>
        </form>

        

        
    </div>
</template>

<script>
import { db } from '../main'
import Vue2Filters from 'vue2-filters' 

export default {
  data() {
    return {
    newItem:"",
    todos:[],
    isEding: false,
    whispers: []
    }
  },
  firestore () {
    return {
      whispers: db.collection('whispers')
    }
  },
  mixins: [Vue2Filters.mixin],
  computed: {
    classList() {
    const classList = ['addlist']

      if (this.isEditing) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists() {
      return this.newItem.length > 0
    },
    over() {
        return this.newItem.length > 15
    }
  },
  methods:{
    addItem() {
        // 15文字以上0文字のとき送信できない
    //   if(this.newItem.length > 15 || this.newItem == '')return;
      var whisper = {
        content: this.newItem,
        isDone:false
      };
      this.whispers.push(whisper);
      this.newItem = '' //タスク追加後に入力欄を空にする
    },
    deleteItem:function(index){ //indexを引数に指定
      this.whispers.splice(index,1) //indexで指定された要素を1つ削除
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
    
  }
}
    
</script>

<style scoped>


.active .text-input {
  background-color: #fff;
}

.addable .add-button {
  background-color: #00d78f;
  pointer-events: auto;
  cursor: pointer;
  border: none;

}

.comments {
    text-align: left;
    padding-left: 120px;
}

h2 {
    font-size: 36px;
}

ul {
    list-style:none;
    width: 500px;
    margin-bottom: 60px;
}

li {
    font-size: 24px;
    margin-bottom: 1px;
    border: 1px solid;
    border: none;
    padding: 10px;
}

.delete {
    /* margin-left: 100px; */
    float: right;
    /* margin-top: 10px; */
    font-size: 16px;

}


form {
    padding-left: 40px;
}

input {
    font-size: 22px;
    width: 350px;
    height: 32px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    padding-left: 10px;
    background-color: #F2F2F2;
}

.text-input:focus {
    outline: 0;
    cursor: initial;
}

.add-button {
    /* padding: 6px 0; */
    font-size: 18px;
    margin-left: 10px;
    border: none;
    opacity: 0.7;
    color: white;
    border-radius: 8px;
    padding: 2px 10px;
}

.add-button:focus,
.add-button:hover {
    outline: 0;
    transform: scale(1.2);
  transition-duration: 0.3s;
    cursor: initial;
}

.count {
    display: flex;
}


/* li > span.done{
  text-decoration:line-through;
} */


</style>