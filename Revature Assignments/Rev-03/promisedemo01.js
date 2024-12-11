const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve("something");
        reject("super cool error");
    })
}

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})