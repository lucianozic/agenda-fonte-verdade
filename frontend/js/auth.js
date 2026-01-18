const USERS_URL =
  "https://raw.githubusercontent.com/lucianozic/agenda-fonte-verdade/main/auth/users.json";

async function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  try {
    const response = await fetch(USERS_URL);
    const data = await response.json();

    const found = data.users.find(
      u => u.username === user && u.password === pass
    );

    if (found) {
      localStorage.setItem("user", JSON.stringify(found));
      msg.innerText = "Login realizado com sucesso!";
    } else {
      msg.innerText = "Usuário ou senha inválidos";
    }
  } catch (e) {
    msg.innerText = "Erro ao acessar o GitHub";
  }
}
