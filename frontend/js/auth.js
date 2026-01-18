const USERS_URL = "https://raw.githubusercontent.com/SEU_USUARIO/agenda-fonte-verdade/main/auth/users.json";

async function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  try {
    const res = await fetch(USERS_URL);
    const data = await res.json();

    const user = data.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      msg.innerText = "Login realizado com sucesso";
    } else {
      msg.innerText = "Usuário ou senha inválidos";
    }
  } catch (e) {
    msg.innerText = "Erro ao acessar fonte de dados";
  }
}
