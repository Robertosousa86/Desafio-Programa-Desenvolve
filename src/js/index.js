const validation = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const textArea = document.getElementById('text-area');

  if (name.value === '') {
    alert('Por favor digite seu Nome');

    return name.focus();
  }

  if (email.value === '') {
    alert('Insira um email');

    return email.focus();
  }

  if (textArea.value === '') {
    alert('Erro no envio: Insira uma mensagem');

    return textArea.focus();
  }

  const regex = /^[A-Za-z0-9.]{1,32}@[A-Za-z0-9.-]{1,16}$/;

  const emailTest = regex.test(email.value);

  if (!emailTest) {
    alert('Erro no envio: Endereço de email inválido');

    return email.focus();
  }

  const user = name.value.split('@');
  return alert(`Obrigado pelo contato, ${user}! 😍`);
};
