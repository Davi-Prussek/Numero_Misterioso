    //ENTRADA && PROCESSAMENTO && SAÍDA
    //Variáveis pra descobrir o histórico
    let exibir;
    let historico = [];
    //Variáveis pra mostrar a quantidade de tentativas
    let zerar;
    let tentativas = 0;
    let recomecar;
    //Variável pra descobrir o número correto
    let resposta = 0;
    //Variáveis pra ver se o usuário quer repetir o jogo ou não
    let repeticao;
    let acerto = 0;
    let resultado = 1;
    //Loop do começo ou fim de jogo
    function começarJogo(nivel) {
    while (acerto >= 0) {
        //Parte pra criar um número aleatório entre 1 e 30
        let indice = Math.floor(Math.random() * nivel);
        indice += 1;
        //Parte da conta pra ver se o código vai continuar ou não,
        resultado -= 1;
        //Loop principal
        while (resultado === 0) {
            //Pergunta do número que o usuário desejar
            resposta = Number(prompt("ACERTE O NÚMERO ESCONDIDO!\n\nDigite um número de 1 a "+nivel+" e tente acertar o valor\n\n(O programa irá dizer se você está mais pra baixo ou mais pra cima)"))
            //Loop pra verificar se a resposta do usuário contém uma string ou não
            while (isNaN(resposta) || resposta === 0 || resposta > nivel) {
                alert("Digite apenas valores numéricos dentro das condições!");
                resposta = Number(prompt("Digite um número de 1 a "+nivel+" e tente acertar o valor\n\n(O programa irá dizer se você está mais pra baixo ou mais pra cima) "))}
            //Parte direcionada pra dar as dicas ao usuário e registrar as tentativas e quantas foram}
            if (resposta !== indice) {
                if (resposta > indice) {
                    alert("O número escondido é menor");
                    historico.push(resposta);
                    tentativas += 1;}
                else if (resposta < indice) {
                    alert("O número escondido é maior");
                    historico.push(resposta);
                    tentativas += 1;}
                    //Respostas caso o usuário for muito ruim
                if (tentativas === 10) {alert("Tá difícil?")}
                if (tentativas === 15) {alert("Como você consegue?")}
                if (tentativas === 20) {alert("Só pode ser brincadeira, né?")}
                if (tentativas === 25) {alert("Você é a PIOR pessoa que eu já vi pra jogar esse jogo")}}
            //Caso o usuário acerte, registra a tentativa na quantidade e no registro, aí apresenta o resultado, além de contabilizar a sequência 
            else if (resposta === indice) {
                historico.push(resposta);
                tentativas += 1;
                alert("Parabéns! você acertou!\n\n(Número de tentativas: " + tentativas + ")");
                //Parte que mostra o histórico da partida se o usuário desejar
                exibir = prompt("Deseja ver seu histórico de tentativas?\n\n(S-Sim ou N-Não)").trim().charAt().toLowerCase();
                while (exibir !== "s" && exibir !== "n") {
                    alert("Responda com sim ou não!");
                    exibir = prompt("Deseja ver seu histórico de tentativas?\n\n(S-Sim ou N-Não)").trim().charAt().toLowerCase();}
                //Entrega das informações do histórico
                switch (exibir) {
                    case "s":
                        alert(historico.join(" - "));
                        historico = [];
                        break;
                    case "n":
                        historico = [];
                        break;}
                //Conta a quantidade de vezes que o usuário jogou
                acerto++;
                if (acerto > 1) {
                    alert("Sequência de acertos: " + acerto)}
                //Zera a quantidade de tentativas pra recomeçar o loop caso o usuário deseje recomeçar o jogo
                tentativas = 0;
                //Perguntar se o usuário deseja repetir o jogo, caso queira, vai configurar a variável do primeiro loop pra começar uma nova partida
                repeticao = prompt("Deseja jogar novamente?\n\n(S-Sim ou N-Não)").trim().charAt().toLowerCase();
                while (repeticao !== "s" && repeticao !== "n") {
                    alert("Responda com sim ou não!");
                    repeticao = prompt("Deseja jogar novamente?\n\n(S-Sim ou N-Não)").trim().charAt().toLowerCase();}
                switch (repeticao) {
                    case "s":
                        resultado += 1;
                        //O código vai perguntar se o usuário deseja jogar uma partida nova ou iniciar uma nova partida
                        recomecar = prompt("Deseja continuar na partida ou iniciar uma nova?\n\nResponda com C-Continuar ou R-Reiniciar\n\n(Iniciar uma nova partida zera a sua sequência de acertos)").trim().charAt().toLowerCase();
                        while (recomecar !== "i" && recomecar !== "c" && recomecar !== "n" && recomecar !== "q" && recomecar !== "r"){
                            alert("Responda se quer uma nova partida ou continuar!");
                            recomecar = prompt("Deseja continuar na partida ou iniciar uma nova?\n\n(iniciar ou recomeçar)\n\n(Iniciar uma nova partida zera a sua sequência de acertos)").trim().charAt().toLowerCase();}
                        switch (recomecar) {
                            case "i":
                            case "n":
                            case "q":
                            case "r":
                                document.getElementById("controleDeDificuldade").style.display = "block";
                                return;
                                acerto = 0;
                                break;
                            case "c":
                                break;}
                        break;
                    default:
                        alert("Tudo bem, obrigado por jogar!😁");
                        resultado -= 1;
                        break;}}}}}