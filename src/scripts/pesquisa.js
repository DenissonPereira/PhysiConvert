function pesquisar() {
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput.value.toLowerCase();
  
    const keywordMap = {
      google: 'https://www.google.com',
      github: 'https://www.github.com',

    };
  
    if (keywordMap[keyword]) {
        const newAba = window.open('', '_blank')
        newAba.location.href = keywordMap[keyword];
    } else {
        alert('Palavra-chave não encontrada');
    }
}
  
window.pesquisar = pesquisar;
  