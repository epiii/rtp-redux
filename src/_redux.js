import {createStore } from 'redux'

const initialState={
    todos:[
        {
            id:1,
            name:'annu',
            complete:false
        },
        {
            id:2,
            name:'annu xx',
            complete:true
        }
    ]
}


export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)

function reducer (state,{type, payload}){
    switch(type){
        case 'ADD_TODO':
            return {
                ...state,
                todos:[...state.todos,payload]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos:[...state.todos.map(todo=>(todo.id==payload)?),payload]
            };
    }
}