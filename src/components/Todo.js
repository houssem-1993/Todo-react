import React, { Component } from 'react'

 class Todo extends Component {
     state={
         userInput:'',
         list:[{todo:'my first task',isComplete:true,id:0},{todo:'my second task',isComplete:false,id:1}],
     }
    
    //  change(key,value){
    //      this.setState({
    //          [key]:value
    //      })
    //  }
     change =(e)=>{
         this.setState({userInput:e.target.value})
     }
     
     addTodo= () =>{
        //  create a new todo
        if (this.state.userInput.trim()!==''){
         const newTodo={
             id:1 +Math.random(),
             todo: this.state.userInput.trim(),
             isComplete:false
         };
         // copy of current list
         const list =[...this.state.list];
         //add a new todo to the list
         list.push(newTodo);
         // update state with new list and reset ths input
         this.setState({
             list,
             userInput:''
         })}
         else 
            return alert('type a Todo!')
         
        }
    complete =(id) =>{
        this.setState({
            list:this.state.list.map(el =>el.id === id?{...el,isComplete:!el.isComplete}:el)
            
        })
    }
    
         
    deleteTodo = (id) =>{
        //copy of current list
        const list=[...this.state.list];
        //filter out todo being deleted
        const updateList =list.filter(el => el.id !== id)
        this.setState({list:updateList});
    }
        
        
    render() {
        return (
        <div className="head">
            <div className="first">
                <h1>To Do App</h1>
                <label>Add new To-Do</label>
                <input className="input1" type="text" placeholder="Enter new task" value={this.state.userInput} onChange={this.change}/>
                <input type="button" className="add"  onClick={() => this.addTodo()} value="Add!"/>

            </div>
            <div className="my-todo-list">
                
                {this.state.list.map((el, i) => (
                    <div className="my-todo" key={el.id}>
                   
                <button className="complete-btn" onClick={()=>this.complete(el.id)}>{el.isComplete?"undo":"Complete"}</button>
                    <button className="delete-btn" onClick={() => this.deleteTodo(el.id)}>delete</button>
                    <p className={el.isComplete?"todo-complete":''}>{el.todo}</p>
                </div>
                 
                )
                )} 


            </div>

        </div>
        )
    }
 }
export default Todo