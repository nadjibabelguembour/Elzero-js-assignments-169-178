let myRequest = new XMLHttpRequest();
myRequest.open("GET", "task_one_articles.json");
myRequest.send();

myRequest.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(myRequest.readyState);
    console.log(myRequest.status);
    console.log(this.responseText)
    let mainData = JSON.parse(this.responseText);
    let div = document.createElement("div");
    div.style.cssText=`height: 100%;
                        width: 80%;
                        border: 1px solid purple;
                        background: #eee;
                        display: flex;
                        flex-direction: column;
                        padding: 4rem;
                        justify-content:center;
                        `
    div.id = "data";
    for (let i = 0; i < mainData.length; i++) {
        console.log(mainData.length)
        let obj=mainData[i];
      let title = document.createElement("h2");
      let titleText = document.createTextNode(obj.Title);
      title.appendChild(titleText);

      let content = document.createElement("p");
      let contentText = document.createTextNode(mainData[i].Body);
      content.appendChild(contentText);

      let author = document.createElement("p");
      let authorText = document.createTextNode(`Author: ${mainData[i].Author}`);
      author.appendChild(authorText);

      let section = document.createElement("p");
      let sectionText = document.createTextNode(
        `Section: ${mainData[i].Category}`
      );
      section.appendChild(sectionText);

      let data = document.createElement("div");
      data.appendChild(title);
      data.appendChild(content);
      data.appendChild(author);
      data.appendChild(section);

      div.appendChild(data);
      document.body.appendChild(div);
    }
  }
};