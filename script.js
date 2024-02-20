async function calldata() {
  try {
    const response = await fetch("http://localhost:4000/todo");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    populateTable(data); // Call the function to populate the table with data
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function deleteNote(id) {
  try {
    const response = await fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    populateTable(data); // Call the function to populate the table with data
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function finishNote(id) {
  try {
    const response = await fetch(`http://localhost:4000/todo/${id}`, {
      method: "PUT",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    populateTable(data); // Call the function to populate the table with data
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function addNote() {
  try {
    const noteInput = document.getElementById("form1").value;
    const response = await fetch(`http://localhost:4000/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: noteInput }),
    });
    // var body = response.body;
    // console.log(body)
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    populateTable(data); // Call the function to populate the table with data
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function populateTable(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  data.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${task.note}</td>
            <td>${task.completed}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="deleteNote(${
                  task.id
                })">Delete</button>
                <button type="button" class="btn btn-success ms-1" onclick="finishNote(${
                  task.id
                })">Finished</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
}
