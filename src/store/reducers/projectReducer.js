const initState = {
    projects: [
        {"id": 1,"title": "delectus aut autem", "content":"blah blah blah"},
        {"id": 2,"title": "athharintiki daredi", "content":"blah blah blah"},
        {"id": 3,"title": "power star powan", "content":"blah blah blah"}
    
    ]
}
const projectReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PORJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;