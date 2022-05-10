const initialState = {
    comments: [
        { name: 'Yone', content: 'Xin Chao', avatar: 'https://i.pravatar.cc/150?u=fake@pravatar.com' },
        { name: 'Quang', content: 'Hello', avatar: 'https://i.pravatar.cc/150?u=fasdsvatar.com' }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'add_comment': {
            state.comments = [...state.comments, action.userComment]
        }

        default:
            return state
    }
}
