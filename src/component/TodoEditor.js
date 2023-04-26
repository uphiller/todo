import { useContext, useState, useRef } from "react";
import "./TodoEditor.css"
import { TodoDispatchContext } from "../App";

const TodoEditor = () =>{
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const inputRef = useRef();
    const onSubmit = () =>{
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) =>{
        if(e.keyCode === 13){
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✍️</h4>
            <div className="editor_wrapper">
                <input 
                    ref={inputRef} 
                    value={content} 
                    onChange={onChangeContent} 
                    placeholder="새로운 Todo..." 
                    onKeyDown={onKeyDown}
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;