
document.addEventListener('DOMContentLoaded', fetchUserData);

async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        console.log(users)
        dataContainer.innerHTML = '';
        // console.log(users.length);

        const userList = document.createElement("ul");

        // for(let i = 0; i <= users.length; i++){
        //     console.log(i);
        // }
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
        dataContainer.append(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}
