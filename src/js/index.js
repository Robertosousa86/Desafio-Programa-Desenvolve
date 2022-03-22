/* **Ao clicar no botão de envio, a página deve exibir uma das seguintes mensagens:**

- [ ] "Erro no envio: Insira uma mensagem", caso o campo de texto esteja em branco.
- [ ] "Erro no envio: Endereço de email inválido", caso o email fornecido não siga o formato user@domain.com
- [ ] "Obrigado pelo contato, user!", para os demais casos.

**Para a validação de email, os critérios específicos de cada variável são:**

- [ ] user: 1 a 32 caracteres, incluindo letras maiúsculas e minúsculas, numerais e ponto final.
- [ ] domain: 1 a 16 caracteres, incluindo letras minúsculas e numerais. */

/* const validation = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');

  if (name.value === '') {
    alert('Por favor digite seu Nome');

    return name.focus();
  }

  if (email.valeu === '') {
    alert('Insira um email');

    return email.focus();
  }

  if (textArea.value === '') {
    alert('Erro no envio: Insira uma mensagem');

    return textArea.focus();
  }

  const regex = /^[A-Za-z0-9.]{1,32}+@[A-Za-z0-9.-]{1,16}$/;

  const emailTest = regex.test(email.value);

  if (!emailTest) {
    alert('Erro no envio: Endereço de email inválido');

    return email.focus();
  }
};
 */

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
