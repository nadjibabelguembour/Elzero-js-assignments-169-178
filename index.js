//task one
console.log(`%cTask 1---------------------------------`,`color:red; font-size:24px;`)
console.log(`Our JSON file 's name is: "task_one_articles.json"`)
//tasks Two  and three
console.log(`%cTask 2 + task 3---------------------------------`,`color:red; font-size:24px;`)
let requete= new XMLHttpRequest();
requete.open("Get","task_one_articles.json", true);
requete.send();
console.log(requete);
requete.onload=function(){
    if(this.readyState===4 && this.status===200){
        // console.log(requete.readyState);
        // console.log(requete.status);
        // //console.log(this.responseText)
        // console.log("Data Loaded") 
        // this is for thask 3:
        let mainData=JSON.parse(this.responseText);
        for(let i=0; i< mainData.length; i++){
             mainData[i].Category="All";
        }
        console.log(mainData);
        let updatedData=JSON.stringify(mainData);
        console.log(updatedData)
        
    }
}

