const FEED_URL = "https://blogs.tamilctf.com/feed.xml"

fetch(FEED_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("entry");
    var title = typeof(items.item(0).querySelector("id").innerHTML)
    document.getElementById("blog1-title").innerHTML = "<a href='"+items.item(0).querySelector("id").innerHTML.toString()+"'>"+items.item(0).querySelector("title").innerHTML.toString()+"</a>"
    //document.getElementById("blog1-description").innerHTML = items.item(0).querySelector("summary").innerHTML.toString()
    //document.getElementById("blog1-author").innerHTML = "Blog by "+items.item(0).querySelector("updated").innerHTML
    document.getElementById("blog1-date").innerHTML = "Posted on "+items.item(0).querySelector("updated").innerHTML.slice(0,10)

    document.getElementById("blog2-title").innerHTML = "<a href='"+items.item(1).querySelector("id").innerHTML.toString()+"'>"+items.item(1).querySelector("title").innerHTML.toString()+"</a>"
    //document.getElementById("blog2-description").innerHTML = items.item(1).querySelector("summary").innerHTML.toString()
    //document.getElementById("blog2-author").innerHTML = "Blog by "+items.item(1).querySelector("author").innerHTML
    document.getElementById("blog2-date").innerHTML = "Posted on "+items.item(1).querySelector("updated").innerHTML.slice(0,10)

    document.getElementById("blog3-title").innerHTML = "<a href='"+items.item(2).querySelector("id").innerHTML.toString()+"'>"+items.item(2).querySelector("title").innerHTML.toString()+"</a>"
    //document.getElementById("blog3-description").innerHTML = items.item(2).querySelector("summary").innerHTML.toString()
    //document.getElementById("blog3-author").innerHTML = "Blog by "+items.item(2).querySelector("author").innerHTML
    document.getElementById("blog3-date").innerHTML = "Posted on "+items.item(2).querySelector("updated").innerHTML.slice(0,10)

});