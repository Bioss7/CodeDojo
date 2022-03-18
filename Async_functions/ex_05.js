function getUser(id) {
    return Promise.resolve({id: 1});
}
// await ставиться перед вызовом любой функции которая возвращает promise (может быть не async)
async function main() {
    let user = await getUser(1);
    // Код выполниться только после того, как в переменной user будет значение 
    console.log(user);
}

main();
