async function getUser(id) {
    throw new Error('Oops');
}

getUser(1).catch(error => console.log(error));

// async возвращает обещание promise 