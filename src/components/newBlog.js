import axios from "axios"
import React,{ useState, useEffect, setState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NewBlog(){
    const [postValue, setPostValue] = useState({
        postName:"",
        authorName:"",
        text:"",
    })

    const handleInput=(e)=>{
        const {name, value}=e.target
        setPostValue({...postValue, [name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const allInputValue={
            postName:postValue.postName,
            authorName:"Tejas Satish",
            text:postValue.text,
        }
        console.log(allInputValue)
        axios.post("http://localhost:3001/blogs",allInputValue,{
            'Content-Type': 'application/json'
        })
        setPostValue({
            postName:"",
            authorName:"",
            text:"",
        })
    }
    return(
        <div className="col-md-9">
            <div className="col-md-11">
                <form onSubmit={ handleSubmit }>
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Post Name" aria-label="Post Name" name="postName" aria-describedby="basic-addon1" value={postValue.postName} onChange={ handleInput }></input>
                    </div>
                    <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea" value={postValue.text} name="text" onChange={ handleInput }></textarea>
                    </div>
                    <button className="btn btn-outline-success" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}