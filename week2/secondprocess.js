var param={
    method:'GET',
    // body:{"value":10}
}
fetch('http://localhost:3000/reqsum?value=10',param).then((result)=>{
    result.text().then((txt)=>{
        console.log(txt)
    })
})