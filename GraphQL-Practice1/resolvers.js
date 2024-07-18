export const resolvers = {
    Query:{
        authors:()=>{
            return [{
                id:1,
                name:'Adarsh Patel'
            }]
        },
        books:()=>{
           return [{
            id:1,
            title:'Namaste Bhaarat',
            publishedYear:'2024'
           }]
        }
    }
}