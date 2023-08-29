function ready() {
    home()
    document.getElementById("home").addEventListener("click", home)
    document.getElementById("sobre").addEventListener("click", sobre)
    document.getElementById("contato").addEventListener("click", contato)
}

function home(){
    const section = document.getElementById("sessao")
    section.innerHTML = `<h1>Pagina home</h1>`
    
}
function sobre(){
    const section = document.getElementById("sessao")
    section.innerHTML = `<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet nibh non placerat sagittis. Aliquam ante nisl, blandit sit amet tellus gravida, tincidunt viverra felis. Suspendisse pharetra quam at dapibus laoreet. In luctus, risus in ultrices finibus, risus nulla malesuada ipsum, at vehicula nunc lorem imperdiet est. Praesent a maximus lacus, eu egestas risus. Phasellus vulputate congue consectetur. Etiam convallis auctor ultricies. Nam consequat, nunc in imperdiet vestibulum, ex erat facilisis tellus, a ornare purus lorem in lacus. Sed mollis, lectus nec rhoncus semper, tortor odio consequat felis, ut eleifend quam nisl sed lorem.

    Nulla vitae volutpat augue. Aliquam ac metus in purus porta consectetur in in massa. Sed tincidunt fringilla sollicitudin. In lobortis aliquam ornare. Etiam dignissim commodo orci, non malesuada massa scelerisque nec. Duis facilisis sodales enim eu rhoncus. Aliquam ut lectus nunc. Duis dapibus congue iaculis. Suspendisse ultrices iaculis dictum. Maecenas tincidunt ligula vel purus ornare viverra.
    
    Cras commodo dignissim nibh sit amet tristique. Vivamus sodales congue lacus, sit amet pharetra felis auctor eu. Nunc metus est, interdum ac dapibus eget, rutrum nec nisl. Aliquam orci ex, lacinia id venenatis vel, rutrum eget mi. Etiam hendrerit finibus eros, nec fringilla augue. Nunc ultricies blandit suscipit. Proin eleifend eros nec condimentum placerat. Donec lobortis tincidunt nulla quis interdum. Nunc elit ipsum, commodo sed sapien sed, gravida posuere felis. Integer nec euismod nisl.
    
    Duis pharetra non purus non imperdiet. Morbi rutrum, velit at blandit cursus, tellus mi aliquam lacus, quis luctus libero leo vel ipsum. Mauris efficitur magna massa, quis finibus nunc pulvinar vitae. Suspendisse potenti. In ut arcu in nulla viverra ullamcorper quis non lectus. Donec commodo arcu aliquet arcu pellentesque, sit amet cursus nunc eleifend. Sed ut venenatis lectus, a feugiat ante. Nam eu ornare justo.
    
    Nam eu enim non eros luctus pulvinar in vel sem. Nullam venenatis vel augue quis consectetur. Morbi at vestibulum dolor. Phasellus ut tortor vitae lorem semper posuere. Donec dignissim bibendum lorem, ac consequat felis vehicula in. Etiam iaculis, leo quis volutpat ultrices, nisl quam tincidunt sem, vitae blandit elit elit vitae erat. Duis consequat nunc nisi, sed porta arcu consequat sed. Praesent quis enim eget erat convallis tincidunt eu quis nibh.
    
    Cras tristique sagittis semper. Suspendisse vitae tortor non ipsum placerat porta et eu nisi. Ut aliquam posuere magna ut facilisis. Sed sed ullamcorper ipsum. Vestibulum rhoncus, quam id tristique faucibus, risus orci ultrices lacus, non ornare libero nulla ut nibh.</h6>`
}

function contato(){
    const section = document.getElementById("sessao")
    section.innerHTML = `
        <form>
            <br>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required><br><br>

            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required><br><br>

            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" required><br><br>

            <button class ="bg-dark text-success" type="button" id="submitButton">Enviar</button>
        </form>
    `
    const button = document.getElementById("submitButton").addEventListener("click", submitForms)
}

function submitForms(){
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const telefone = document.getElementById("telefone") 

    const contato = {nome: nome.value, email:email.value, telefone: telefone.value}
   
    console.log(contato)

    const section = document.getElementById("sessao")
    section.innerHTML = `
        <table class="text-center">
            
                <div>
                    <tr>
                        <th>Nome</th>
                        <td>${contato.nome}</td>
                    </tr>
                </div>
                <div>
                    <tr>
                        <th>Email</th>
                        <td>${contato.email}</td>
                    </tr>
                </div>
                <div>
                <tr>
                    <th>Telefone</th>
                    <td>${contato.telefone}</td>
                </tr>
            </div>
        </table>`


}