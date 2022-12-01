function pesquisar() {
    let Number = document.getElementById('cepNumber').value
    
    var site = new XMLHttpRequest();
    site.open('GET', 'https://viacep.com.br/ws/' + Number + '/json/');
    site.send();
    site.onload = function(){
        document.getElementById('result').innerHTML = this.responseText;
        let obj = JSON.parse(this.responseText);
        let cep = (obj.cep)
        let cidade = (obj.localidade);
        let estado = (obj.uf)
        let bairro = (obj.bairro)
        document.getElementById('result').innerHTML = "Cep: " + cep + "<br> Cidade: " + cidade + "<br> Estado: " + estado + "<br> Bairro: " + bairro; 
    }
}