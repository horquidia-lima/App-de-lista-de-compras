/*document.addEventListener('DOMContentLoaded', () => {
    const trashButton = document.querySelectorAll('.remove-item');
    const message = document.querySelector('.message');
    const closeButton = document.querySelector('.close');

    trashButton.forEach(button => { 
        button.addEventListener('click', () => {    
            message.style.display = 'flex';
        })
    })


    closeButton.addEventListener('click', () => {    
        message.style.display = 'none';
    })  
})*/
//document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.querySelector('.item-list'); // Lista de itens
    const message = document.querySelector('.message'); // Mensagem de feedback
    const closeButton = document.querySelector('.close'); // Botão para fechar a mensagem
    const form = document.querySelector('form');
    const input = document.querySelector('input');

    // Função para exibir a mensagem
    const showMessage = () => {
        message.style.display = 'flex';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000); // Esconde após 3 segundos
    };

    // Delegação de eventos para os botões de lixeira
    itemList.addEventListener('click', (event) => {
        if (event.target.closest('.remove-item')) {
            const item = event.target.closest('li'); // Encontra o <li> do botão clicado
            if (item) {
                item.remove(); // Remove o item da lista
                showMessage(); // Exibe a mensagem
            }
        }
    });

    // Evento para fechar a mensagem manualmente
    closeButton.addEventListener('click', () => {
        message.style.display = 'none';
    });

    form.onsubmit = (event) => {
        event.preventDefault();

        // Validação do campo de entrada
        if (input.value.trim() === '') {
            alert('Por favor, digite um item!');
            return;
        }
        
        
        const newItem = document.createElement('li');
        newItem.innerHTML = `<div class="flex item"><input type="checkbox"> <span>${input.value}</span></div> <button class="remove-item"><img src="./img/lixeira.svg" alt=""></button>`;
        itemList.appendChild(newItem);
        input.value = '';
    };  
//});
 