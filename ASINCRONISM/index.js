const somethingWillHappend = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve("heeey");
        } else {
            reject("sorry");
        }
    });
};

somethingWillHappend()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(()=> {
                resolve("true");
            },2000)
        } else {
            const error = new Error('whooops!');
            reject(error);
        }
    })
}

somethingWillHappend2()
    .then (response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(response => {
        console.log('array of results', response);
    })
    .catch(err => {
        console.log(err);
    })