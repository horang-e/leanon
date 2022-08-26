let nextId = 2;
let intialstate = {
  list:[
    {
    id:1,
    todo: "starting test"
    }
  ]
};
/* ----------------- 액션 타입 ------------------ */
const CREATE_TODO= "todo/CREATE";
const REMOVE_TODO = "todo/REMOVE";
const UPDATE_TODO = "todo/UPDATE";
/* ----------------- 액션 생성 함수 ------------------ */
export function createTodo(payload) {
  return { type: CREATE_TODO, payload:{id:nextId++, todo:payload} };
}
export function removeTodo(payload) {
  return { type: REMOVE_TODO, payload };
}
export function updateTodo(payload) {
  return { type: UPDATE_TODO, payload };
}
/* ----------------- 리듀서 ------------------ */
export default function todoReducer(state = intialstate, action) {
  switch (action.type) {
    case CREATE_TODO: {
      return { ...state, list: [action.payload, ...state.list]};
    }
    case REMOVE_TODO: {
      const new_list = state.list.filter((item, index) => {
        return action.payload !== item.id;
      });
      return { ...state, list: new_list };
    }
    case UPDATE_TODO: {
      const update_list = state.list.map((value, id) => {
                return value.id === Number(action.payload.id) ? {id:value.id, todo:action.payload.todo} : value;
              });
      return { ...state, list: update_list  };
    }
    default:
      return state;
  }
}
