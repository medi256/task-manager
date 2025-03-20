// const API_URL = "http://localhost:5000/api/task";
const API_URL = "https://task-manager-five-peach.vercel.app/api/task";

document.addEventListener("DOMContentLoaded", fetchDataToTheServer);

let postData = document.querySelector("#input-type");
let btn = document.querySelector("#btn");
let ul = document.querySelector("#display-tasks");

async function addDataToTheServer() {
  let inputValue = postData.value;
  if (!inputValue) {
    return;
  }

  try {
    const data = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: inputValue }),
    });
    postData.value = "";
    const response = await data.json();
    console.log(response);
    fetchDataToTheServer();
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", addDataToTheServer);

async function fetchDataToTheServer() {
  try {
    let data = await fetch(API_URL);
    ul.innerHTML = "";

    let recievedData = await data.json();
    let arr = await recievedData.data;

    arr.map((task) => {
      let li = document.createElement("li");
      let span = document.createElement("span");
      let btn = document.createElement("button");
      btn.innerHTML = "delete";
      btn.onclick = () => {
        deleteTask(task._id);
      };
      span.textContent = task.title;
      li.appendChild(span);
      li.append(btn);
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchDataToTheServer();
  } catch (error) {
    console.log(error);
  }
}

// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "server.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "server.js"
//     }
//   ]
// }
