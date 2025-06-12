function alternarTema() {
  document.body.classList.toggle('tema-escuro');
 
  // Salvar preferência no navegador
  if (document.body.classList.contains('tema-escuro')) {
   localStorage.setItem('tema', 'escuro');
  } else {
   localStorage.setItem('tema', 'claro');
  }
 }
 
 // Manter tema após atualizar a página
 window.onload = () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'escuro') {
   document.body.classList.add('tema-escuro');
  }
 }
 
function mostrarMensagem() {
  const mensagem = document.getElementById('mensagemSecreta');
  if (mensagem.style.display === 'none') {
   mensagem.style.display = 'block';
  } else {
   mensagem.style.display = 'none';
  }
 }
 
