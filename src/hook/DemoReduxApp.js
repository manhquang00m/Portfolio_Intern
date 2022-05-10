import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function DemoReduxApp() {

    // mapStateToProps
    let comments = useSelector(state => state.FakebookReducer.comments)
    // mapDispatchToProps
    let dispatch = useDispatch()

    const [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    })

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setUserComment({
            ...userComment,
            [name]: value
        })
    }
    const handleComment = (e) => {
        e.preventDefault(); //Chăn browser reload
        let usComment = { ...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}` }

        let action = {
            type: 'add_comment',
            userComment: usComment
        }
        dispatch(action)
    }
    return (
        <div className="container">
            <h3 className='mt-5'>Fakebook App!</h3>
            <div className="card text-left">
                <div className="card-header">
                    {
                        comments.map((item, index) => {
                            return (
                                <div key={index} className="row">
                                    <div className="col-1">
                                        <img src={item.avatar} style={{ height: 60 }} />
                                    </div>
                                    <div className="col-10">
                                        <h6 className="text-danger">{item.name}</h6>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <form className="card-body" onSubmit={handleComment}>
                    <div className="form-group">
                        <h4 className="card-title">Name</h4>
                        <input className="form-control" name="name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <h4 className="card-title">Content</h4>
                        <input className="form-control" name="content" onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-success">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
