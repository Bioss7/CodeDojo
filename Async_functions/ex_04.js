async function getUser(id) {
    return {id: 1};
}

async function main() {
    let user = await getUser(1);
    // Код выполниться только после того, как в переменной user будет значение 
    console.log(user);
}

main();
