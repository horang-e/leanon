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
const LOAD_TODO = "todo/LOAD";
const CREATE_TODO= "todo/CREATE";
const REMOVE_TODO = "todo/REMOVE";
const UPDATE_TODO = "todo/UPDATE"
/* ----------------- 액션 생성 함수 ------------------ */
export function loadTodo(payload) {
  return { type: LOAD_TODO, payload };
}
export function createTodo(payload) {
  console.log(payload)
  return { type: CREATE_TODO, payload:{id:nextId++, todo:payload} };
}
export function removeTodo(payload) {
  console.log(payload)
  return { type: REMOVE_TODO, payload };
}
export function updateTodo(payload) {
  return { type: UPDATE_TODO, payload };
}
/* ----------------- 리듀서 ------------------ */
export default function todoReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LOAD_TODO: {
      return { list: action.payload };
    }
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
      return { ...state, coffee: action.payload };
    }
    default:
      return state;
  }
}
// case UPDATE_COMMENT:
//       const updateCommentList = state.posts.map((value, id) => {
//         return value.id === Number(action.payload.id) ? action.payload : value;
//       });
//       return {
//         ...state,
//         posts: updateCommentList,
//       };
// case "bucket/UPDATE": {
//   console.log("이제값을 업뎃할거야!")
//   const new_bucket_list = state.list.map((l, idx) => {
//     console.log(l);
//     //위에서 업뎃해서 가져온 리스트를 map으로 돌려 여까지하면 db엔 true로 업데이트 되지만 콘솔찍어보면 아직 false로 표시됨 이걸 처리해주기 위해서 아래 돌려
//     if (action.bucket_index == idx) {
//       //위에 미들웨어 액션함수에서 버켓 인덱스로 정의된 인덱스값과 map돌릴때의 인덱스값이 같다면
//       return { ...l, completed: true }
//       //그 리스트의 컴플리트를 true로 바꿔라
//     } else {
//       return l
//       //아니면 그냥 원래대로둬
//     }
//   })
//   console.log({ list: new_bucket_list })
//   return { list: new_bucket_list };
//   // 그 고친애를 list에 추가추가
// }