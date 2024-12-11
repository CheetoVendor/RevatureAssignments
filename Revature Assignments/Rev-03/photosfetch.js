const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await response.json();
    return data;
}


getPhotos().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


const displayPhotos = async () => {
    const list = document.getElementById("photoList");

    const photos = await getPhotos();

    for (i = 0; i < 10; i++) {
        const item = document.createElement("li");

        const img = document.createElement("img");
        img.src = photos[i].thumbnailUrl;

        const id = document.createElement("span");
        id.textContent = "ID: " + photos[i].id;

        const title = document.createElement("span");
        title.textContent = photos[i].title;
        title.style.fontStyle = "italic";
        //const divider = document.createElement("hr");

        //Append children to list item
        item.appendChild(img);
        item.appendChild(id);
        item.appendChild(title);
        //item.appendChild(divider);

        //append list item to list
        list.appendChild(item);
    }
}