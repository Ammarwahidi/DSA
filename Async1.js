function user(id,name, callback) {
    setTimeout(() => {
        console.log("hello world");
        callback({
            id:id,
            githubuser:name
        })
    }, 1000);

}
setTimeout(() => {
  user(101,"mohit",(emp1)=>{
        console.log(emp1);
    })
}, 1000);
setTimeout(() => {
 user(102,"Ammar",(emp2)=>{
        console.log(emp2);
    })
},2000);
