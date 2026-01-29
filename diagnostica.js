/* BANCO DE QUESTÕES (CRIPTOGRAFADO) - GERADO PELO EDITOR SEGURO */

const examConfig = {
    title: "Avaliação Diagnóstica 3º Semestre",
    maxPenalties: 10,
    timeLimitMinutes: 60,
    lockoutDurationMinutes: 5,
    questionsQty: 50,
    showAnswers: true,
    difficultyDistribution: {
        easy: 30,
        medium: 40,
        hard: 30
    },
    studyLinks: []
};

// Chave criptografada (Base64 XOR)
const _k = "MVAAEVEXPChRGz4jQEE9NyYvICo9UFNQVzBRARBRFjwpVxs+I0NAOzEmLSMrPlFTU1cxUAIQURY8KlAbPSNCQTwwJy0gKz1QUlFXMVEBEFEWPClRGD0jQ0E9MSctIis9UVJTVg==";

const fullQuestionBank = [
    {
        "id": 0,
        "difficulty": "easy",
        "q": "(Eletricidade Geral) Qual é a unidade de medida da diferença de potencial elétrico (tensão), corrente elétrica e resistência elétrica no Sistema Internacional, respectivamente?",
        "options": [
            "Watt, Volt, Ohm",
            "Volt, Ampere, Ohm",
            "Ampere, Volt, Watt",
            "Joule, Coulomb, Siemens"
        ]
    },
    {
        "id": 1,
        "difficulty": "easy",
        "q": "(Capacitores) O que acontece com a capacitância equivalente se associarmos dois capacitores de mesmo valor em paralelo?",
        "options": [
            "A capacitância reduz à metade.",
            "A capacitância permanece a mesma.",
            "A capacitância dobra de valor.",
            "A capacitância torna-se nula."
        ]
    },
    {
        "id": 2,
        "difficulty": "easy",
        "q": "(Diodo Semicondutor) Qual a principal característica de um diodo ideal quando polarizado inversamente?",
        "options": [
            "Conduz corrente livremente.",
            "Funciona como um amplificador de sinal.",
            "Comporta-se como uma chave aberta (não conduz corrente).",
            "Gera uma tensão de 0,7V em seus terminais."
        ]
    },
    {
        "id": 3,
        "difficulty": "easy",
        "q": "(Sistemas de Numeração) Convertendo o número binário 1010 para a base decimal, obtemos:",
        "options": [
            "5",
            "8",
            "10",
            "12"
        ]
    },
    {
        "id": 4,
        "difficulty": "easy",
        "q": "(Portas Lógicas) Qual porta lógica apresenta saída em nível alto (1) apenas quando todas as suas entradas forem nível alto (1)?",
        "options": [
            "OR",
            "AND",
            "XOR",
            "NOT"
        ]
    },
    {
        "id": 5,
        "difficulty": "easy",
        "q": "(Motores Elétricos) Qual componente é essencial para criar o campo magnético girante em um motor de indução trifásico?",
        "options": [
            "O comutador.",
            "As escovas.",
            "A defasagem das fases no estator.",
            "O ímã permanente no rotor."
        ]
    },
    {
        "id": 6,
        "difficulty": "easy",
        "q": "(Pneumática) Qual é a função de uma válvula direcional 3/2 vias em um circuito pneumático simples com cilindro de simplis ação?",
        "options": [
            "Controlar a velocidade do ar.",
            "Filtrar o ar comprimido.",
            "Controlar o avanço e o retorno do cilindro.",
            "Aumentar a pressão do sistema."
        ]
    },
    {
        "id": 7,
        "difficulty": "easy",
        "q": "(Arduino/C++) Na linguagem C++ do Arduino, qual função é executada apenas uma vez quando a placa é ligada ou reiniciada?",
        "options": [
            "loop()",
            "start()",
            "setup()",
            "main()"
        ]
    },
    {
        "id": 8,
        "difficulty": "easy",
        "q": "(Eletromagnetismo) O que afirma a Lei de Faraday sobre indução eletromagnética?",
        "options": [
            "A corrente é diretamente proporcional à tensão.",
            "A variação de um fluxo magnético através de uma espira induz nela uma força eletromotriz.",
            "Cargas elétricas de mesmo sinal se repelem.",
            "A soma das correntes em um nó é zero."
        ]
    },
    {
        "id": 9,
        "difficulty": "easy",
        "q": "(Transistor Bipolar) Quais são os três terminais de um transistor bipolar de junção (TBJ)?",
        "options": [
            "Gate, Drain, Source",
            "Base, Coletor, Emissor",
            "Anodo, Catodo, Gate",
            "Entrada, Saída, Terra"
        ]
    },
    {
        "id": 10,
        "difficulty": "medium",
        "q": "(Circuitos Misto) Em um circuito com dois resistores de 10Ω em paralelo, conectados em série com um resistor de 5Ω, qual é a resistência total equivalente?",
        "options": [
            "10Ω",
            "15Ω",
            "25Ω",
            "5Ω"
        ]
    },
    {
        "id": 11,
        "difficulty": "medium",
        "q": "(Diodo Zener) Um diodo Zener de 5,1V é utilizado em um circuito regulador. Se a tensão de entrada variar entre 8V e 12V, qual será a tensão na carga conectada em paralelo ao Zener?",
        "options": [
            "Variará entre 8V e 12V.",
            "Fixa em aproximadamente 0,7V.",
            "Fixa em aproximadamente 5,1V.",
            "Média de 10V."
        ]
    },
    {
        "id": 12,
        "difficulty": "medium",
        "q": "(Transistor como Chave) Para saturar um transistor NPN e acionar um relé, como deve estar a junção Base-Emissor?",
        "options": [
            "Diretamente polarizada com tensão suficiente (Vbe > 0,7V).",
            "Inversamente polarizada.",
            "A base deve estar flutuando.",
            "A tensão no coletor deve ser menor que na base."
        ]
    },
    {
        "id": 13,
        "difficulty": "medium",
        "q": "(Amplificador Operacional) Em uma configuração de amplificador inversor com Rf = 10kΩ e Rin = 1kΩ, qual é o ganho de tensão do circuito?",
        "options": [
            "10",
            "-10",
            "11",
            "-1"
        ]
    },
    {
        "id": 14,
        "difficulty": "medium",
        "q": "(Mapa de Karnaugh) O Mapa de Karnaugh é uma ferramenta utilizada principalmente para:",
        "options": [
            "Desenhar esquemas elétricos.",
            "Simplificar expressões booleanas e circuitos lógicos.",
            "Converter decimal para hexadecimal.",
            "Mapear a memória do Arduino."
        ]
    },
    {
        "id": 15,
        "difficulty": "medium",
        "q": "(Flip-Flops) Em um Flip-Flop tipo JK, o que acontece com a saída Q se as entradas J e K forem ambas iguais a 1 (nível alto) na borda de clock?",
        "options": [
            "A saída vai para 0.",
            "A saída vai para 1.",
            "A saída mantém o estado anterior (memória).",
            "A saída inverte o estado anterior (toggle)."
        ]
    },
    {
        "id": 16,
        "difficulty": "medium",
        "q": "(Comandos Elétricos) Em um diagrama de partida direta, qual é a função do contato selo (normalmente um contato auxiliar NA do contator em paralelo com o botão de liga)?",
        "options": [
            "Proteger o motor contra curto-circuito.",
            "Desligar o motor em caso de sobrecarga.",
            "Manter o contator energizado após soltar o botão de pulso.",
            "Inverter a rotação do motor."
        ]
    },
    {
        "id": 17,
        "difficulty": "medium",
        "q": "(Hidráulica) A Lei de Pascal é o princípio fundamental da hidráulica. Ela estabelece que:",
        "options": [
            "A pressão em um fluido confinado se transmite integralmente em todas as direções.",
            "A vazão é constante em qualquer ponto da tubulação.",
            "A velocidade do fluido aumenta quando a área diminui.",
            "A pressão diminui com a altura."
        ]
    },
    {
        "id": 18,
        "difficulty": "medium",
        "q": "(Arduino/C++) Observe o trecho de código: if (digitalRead(2) == HIGH) { digitalWrite(13, HIGH); }. O que esse código faz?",
        "options": [
            "Acende o LED no pino 13 se o pino 2 estiver recebendo 5V.",
            "Lê o pino 13 e escreve no pino 2.",
            "Apaga o LED no pino 13 se o pino 2 for GND.",
            "Configura o pino 2 como saída."
        ]
    },
    {
        "id": 19,
        "difficulty": "medium",
        "q": "(Retificadores) Qual a frequência da componente ondulada (ripple) na saída de um retificador de onda completa em ponte, sabendo que a frequência da rede é 60Hz?",
        "options": [
            "30 Hz",
            "60 Hz",
            "120 Hz",
            "0 Hz (corrente contínua pura)"
        ]
    },
    {
        "id": 20,
        "difficulty": "hard",
        "q": "(Corrente Alternada/Fator de Potência) Para corrigir um baixo fator de potência indutivo e evitar multas, qual componente deve ser instalado na rede elétrica e em qual configuração?",
        "options": [
            "Indutores em série.",
            "Capacitores em paralelo.",
            "Resistores em série.",
            "Diodos em paralelo."
        ]
    },
    {
        "id": 21,
        "difficulty": "hard",
        "q": "(Transistor MOSFET) Diferente do Transistor Bipolar (TBJ) que é controlado por corrente, o MOSFET é um dispositivo controlado por:",
        "options": [
            "Corrente de Gate.",
            "Tensão entre Gate e Source (Vgs).",
            "Fluxo magnético.",
            "Temperatura."
        ]
    },
    {
        "id": 22,
        "difficulty": "hard",
        "q": "(Contadores Síncronos) Deseja-se projetar um contador síncrono MOD-10 (conta de 0 a 9) utilizando Flip-Flops. Qual é o número mínimo de Flip-Flops necessários?",
        "options": [
            "2",
            "3",
            "4",
            "10"
        ]
    },
    {
        "id": 23,
        "difficulty": "hard",
        "q": "(Circuitos RLC) Em um circuito RLC série alimentado por tensão alternada, o que ocorre na condição de ressonância?",
        "options": [
            "A impedância é máxima e a corrente é mínima.",
            "A reatância indutiva anula a reatância capacitiva, tornando a impedância puramente resistiva e mínima.",
            "A tensão no indutor é sempre igual à tensão da fonte.",
            "O circuito consome apenas potência reativa."
        ]
    },
    {
        "id": 24,
        "difficulty": "hard",
        "q": "(Fechamento de Motores) Um motor trifásico de 6 pontas possui tensão nominal de 220V/380V. Se a rede de alimentação disponível é de 380V trifásica, qual deve ser o fechamento do motor?",
        "options": [
            "Triângulo (Delta).",
            "Estrela (Y).",
            "Série.",
            "Duplo Triângulo."
        ]
    },
    {
        "id": 25,
        "difficulty": "hard",
        "q": "(Automação/Lógica) 'O pistão só deve avançar se o botão A for pressionado OU se o sensor B detectar peça, E o sistema de segurança C estiver ativado'. Qual expressão booleana representa a saída Y?",
        "options": [
            "Y = A + B + C",
            "Y = (A . B) + C",
            "Y = (A + B) . C",
            "Y = A . (B + C)"
        ]
    },
    {
        "id": 26,
        "difficulty": "hard",
        "q": "(Amplificador Operacional) Em um circuito comparador com histerese (Schmitt Trigger), a realimentação utilizada é:",
        "options": [
            "Negativa, no terminal inversor.",
            "Positiva, no terminal não-inversor.",
            "Não existe realimentação.",
            "Capacitiva, para filtrar ruído."
        ]
    },
    {
        "id": 27,
        "difficulty": "hard",
        "q": "(Pneumática) O que diferencia uma válvula de memória (biestável) de uma válvula com retorno por mola (monoestável)?",
        "options": [
            "A biestável precisa de sinal constante; a monoestável basta um pulso.",
            "A biestável mantém a posição com apenas um pulso; a monoestável retorna assim que o sinal elétrico é retirado.",
            "A biestável opera apenas com ar; a monoestável apenas com eletricidade.",
            "Não há diferença prática."
        ]
    },
    {
        "id": 28,
        "difficulty": "hard",
        "q": "(Hexadecimal e Binário) Qual é a representação em Hexadecimal do número binário 1101 1011?",
        "options": [
            "AB",
            "DB",
            "13 11",
            "D11"
        ]
    },
    {
        "id": 29,
        "difficulty": "hard",
        "q": "(Arduino C++ Lógica) Você precisa ler um sensor analógico no pino A0 e acionar um motor (pino 9) via PWM proporcionalmente (0-1023 para 0-255). Qual comando realiza a conversão?",
        "options": [
            "analogWrite(9, analogRead(A0));",
            "analogWrite(9, map(analogRead(A0), 0, 1023, 0, 255));",
            "digitalWrite(9, analogRead(A0) / 4);",
            "analogWrite(9, 255);"
        ]
    },
    {
        "id": 30,
        "difficulty": "easy",
        "q": "(Componentes Passivos) Qual a função principal de um resistor em um circuito eletrônico básico?",
        "options": [
            "Armazenar carga elétrica.",
            "Limitar a corrente elétrica e dividir tensão.",
            "Amplificar o sinal de entrada.",
            "Retificar a corrente alternada."
        ]
    },
    {
        "id": 31,
        "difficulty": "easy",
        "q": "(Corrente Alternada) Se uma tensão alternada possui uma frequência de 60Hz, qual é o seu período (tempo de um ciclo completo)?",
        "options": [
            "1 segundo.",
            "0,5 segundos.",
            "Aproximadamente 16,6 milissegundos.",
            "60 segundos."
        ]
    },
    {
        "id": 32,
        "difficulty": "easy",
        "q": "(Comandos Elétricos) Nos diagramas elétricos, as siglas NA (ou NO) e NF (ou NC) referem-se a:",
        "options": [
            "Nível Alto e Nível Forte.",
            "Normal Aberto e Normal Fechado.",
            "Não Alimentado e Não Funcional.",
            "Neutro Azul e Neutro Fase."
        ]
    },
    {
        "id": 33,
        "difficulty": "easy",
        "q": "(Portas Lógicas) A porta lógica que inverte o sinal de entrada (se entra 0, sai 1; se entra 1, sai 0) é chamada de:",
        "options": [
            "AND",
            "OR",
            "BUFFER",
            "NOT (Inversora)"
        ]
    },
    {
        "id": 34,
        "difficulty": "easy",
        "q": "(Arduino/C++) Qual comando é utilizado para configurar um pino específico do Arduino como entrada ou saída?",
        "options": [
            "digitalWrite()",
            "pinMode()",
            "analogRead()",
            "serialBegin()"
        ]
    },
    {
        "id": 35,
        "difficulty": "easy",
        "q": "(Transistor) Em um transistor NPN, a seta no símbolo esquemático está localizada no emissor e aponta para:",
        "options": [
            "Fora do componente.",
            "Dentro do componente.",
            "A base.",
            "O coletor."
        ]
    },
    {
        "id": 36,
        "difficulty": "easy",
        "q": "(Pneumática) O 'Elemento de Trabalho' em um sistema pneumático é geralmente representado por:",
        "options": [
            "O compressor.",
            "A unidade de conservação (FRL).",
            "O cilindro (atuador).",
            "A tubulação."
        ]
    },
    {
        "id": 37,
        "difficulty": "easy",
        "q": "(Lei de Ohm) De acordo com a Lei de Ohm, se aumentarmos a resistência mantendo a tensão constante, o que acontece com a corrente?",
        "options": [
            "Aumenta.",
            "Diminui.",
            "Permanece a mesma.",
            "Oscila."
        ]
    },
    {
        "id": 38,
        "difficulty": "easy",
        "q": "(Indutores) O indutor é um componente que se opõe a variações bruscas de:",
        "options": [
            "Tensão.",
            "Resistência.",
            "Corrente.",
            "Temperatura."
        ]
    },
    {
        "id": 39,
        "difficulty": "easy",
        "q": "(Sistemas Numéricos) O sistema binário utiliza apenas dois dígitos. Quais são eles?",
        "options": [
            "1 e 2",
            "0 e 1",
            "0 e 9",
            "F e V"
        ]
    },
    {
        "id": 40,
        "difficulty": "medium",
        "q": "(Circuitos Série) Três resistores de 100Ω, 200Ω e 300Ω estão em série alimentados por 12V. Qual é a queda de tensão sobre o resistor de 200Ω?",
        "options": [
            "2V",
            "4V",
            "6V",
            "12V"
        ]
    },
    {
        "id": 41,
        "difficulty": "medium",
        "q": "(Retificadores) A adição de um capacitor eletrolítico em paralelo com a saída de um circuito retificador tem a função de:",
        "options": [
            "Aumentar a frequência do sinal.",
            "Transformar corrente contínua em alternada.",
            "Filtrar o sinal, reduzindo o ripple (ondulação).",
            "Proteger os diodos contra sobrecorrente."
        ]
    },
    {
        "id": 42,
        "difficulty": "medium",
        "q": "(Transistor Bipolar) Se um transistor possui um ganho de corrente (beta) de 100 e a corrente de base é 2mA, qual será a corrente de coletor?",
        "options": [
            "50 mA",
            "0,02 mA",
            "200 mA",
            "102 mA"
        ]
    },
    {
        "id": 43,
        "difficulty": "medium",
        "q": "(Amplificador Operacional) Qual é a principal característica do circuito 'Seguidor de Tensão' (Buffer) com AmpOp?",
        "options": [
            "O ganho de tensão é infinito.",
            "O ganho de tensão é unitário (Av = 1) e serve para casar impedâncias.",
            "Ele inverte o sinal de entrada.",
            "Ele soma as tensões de entrada."
        ]
    },
    {
        "id": 44,
        "difficulty": "medium",
        "q": "(Motores Elétricos) O relé térmico (ou de sobrecarga) atua protegendo o motor contra:",
        "options": [
            "Curtos-circuitos na rede.",
            "Aquecimento excessivo causado por sobrecorrente prolongada.",
            "Falta de fase instantânea.",
            "Sobretensão atmosférica (raios)."
        ]
    },
    {
        "id": 45,
        "difficulty": "medium",
        "q": "(Contadores Síncronos vs Assíncronos) Qual a principal diferença construtiva entre contadores síncronos e assíncronos (Ripple)?",
        "options": [
            "Nos síncronos, todos os Flip-Flops recebem o mesmo sinal de Clock simultaneamente.",
            "Nos síncronos, a saída de um Flip-Flop é o Clock do próximo.",
            "Contadores síncronos são mais lentos que os assíncronos.",
            "Contadores síncronos não usam Flip-Flops."
        ]
    },
    {
        "id": 46,
        "difficulty": "medium",
        "q": "(Hidráulica) Qual componente hidráulico limita a pressão máxima do sistema, desviando o fluido para o tanque quando essa pressão é atingida?",
        "options": [
            "Válvula direcional.",
            "Válvula de retenção.",
            "Válvula limitadora de pressão (Alívio).",
            "Filtro de sucção."
        ]
    },
    {
        "id": 47,
        "difficulty": "medium",
        "q": "(Arduino/C++) O que a função delay(1000); faz no código do Arduino?",
        "options": [
            "Pausa a execução do programa por 1000 microssegundos.",
            "Pausa a execução do programa por 1000 segundos.",
            "Pausa a execução do programa por 1000 milissegundos (1 segundo).",
            "Reinicia o Arduino após 1000 ciclos."
        ]
    },
    {
        "id": 48,
        "difficulty": "medium",
        "q": "(Lógica Combinacional) Dada a expressão booleana S = A . B + C(barrado), qual é o circuito equivalente?",
        "options": [
            "Uma porta AND entre A e B, somada (OR) com C invertido.",
            "Uma porta OR entre A e B, multiplicada (AND) por C.",
            "Uma porta NOR de três entradas.",
            "Uma porta XOR entre A e B."
        ]
    },
    {
        "id": 49,
        "difficulty": "medium",
        "q": "(Fechamento Motor) Para inverter o sentido de rotação de um motor trifásico de indução, deve-se:",
        "options": [
            "Inverter as conexões do rotor.",
            "Trocar duas das três fases de alimentação entre si.",
            "Aumentar a tensão da fonte.",
            "Diminuir a frequência da fonte."
        ]
    },
    {
        "id": 50,
        "difficulty": "medium",
        "q": "(Potência Elétrica) Um chuveiro elétrico tem resistência de 10Ω e é ligado em 220V. Qual a potência dissipada?",
        "options": [
            "2200 W",
            "4840 W",
            "4400 W",
            "220 W"
        ]
    },
    {
        "id": 51,
        "difficulty": "medium",
        "q": "(Mapa de Karnaugh) Ao agrupar '1s' no Mapa de Karnaugh, qual destas opções NÃO é um agrupamento válido?",
        "options": [
            "Grupo de 4 elementos.",
            "Grupo de 8 elementos.",
            "Grupo de 6 elementos.",
            "Grupo de 2 elementos."
        ]
    },
    {
        "id": 52,
        "difficulty": "hard",
        "q": "(Transistor MOSFET) Em um MOSFET tipo N (Canal N), para permitir a condução entre Dreno e Fonte, deve-se aplicar:",
        "options": [
            "Uma tensão positiva no Gate em relação ao Source.",
            "Uma tensão negativa no Gate.",
            "Uma corrente alta na base.",
            "Tensão zero no Gate."
        ]
    },
    {
        "id": 53,
        "difficulty": "hard",
        "q": "(Amplificador Operacional) Em um Amplificador Somador Inversor com três entradas (V1, V2, V3) e todos os resistores iguais, a tensão de saída Vout será:",
        "options": [
            "Vout = V1 + V2 + V3",
            "Vout = -(V1 + V2 + V3)",
            "Vout = (V1 + V2 + V3) / 3",
            "Vout = V1 . V2 . V3"
        ]
    },
    {
        "id": 54,
        "difficulty": "hard",
        "q": "(Comandos Elétricos - Estrela-Triângulo) Qual é o objetivo principal do sistema de partida Estrela-Triângulo?",
        "options": [
            "Aumentar o torque de partida do motor.",
            "Reduzir a corrente de partida, aplicando inicialmente uma tensão menor nas bobinas.",
            "Controlar a velocidade do motor.",
            "Permitir a reversão rápida do motor."
        ]
    },
    {
        "id": 55,
        "difficulty": "hard",
        "q": "(Conversão de Bases) Qual é o valor decimal do número hexadecimal 1F?",
        "options": [
            "15",
            "31",
            "32",
            "16"
        ]
    },
    {
        "id": 56,
        "difficulty": "hard",
        "q": "(Flip-Flops e Frequência) Se aplicarmos um sinal de clock de 100 Hz na entrada de um Flip-Flop tipo T (Toggle) configurado para comutar, qual será a frequência na saída Q?",
        "options": [
            "200 Hz",
            "100 Hz",
            "50 Hz",
            "10 Hz"
        ]
    },
    {
        "id": 57,
        "difficulty": "hard",
        "q": "(Pneumática - Controle) Para controlar a velocidade de avanço de um cilindro de dupla ação, mas manter o retorno em velocidade máxima, deve-se utilizar:",
        "options": [
            "Uma válvula reguladora de fluxo unidirecional instalada na saída de ar do avanço.",
            "Uma válvula de escape rápido.",
            "Aumentar a pressão do compressor.",
            "Uma válvula alternadora (elemento OU)."
        ]
    },
    {
        "id": 58,
        "difficulty": "hard",
        "q": "(Arduino - Lógica de Programação) Analise o laço: for (int i = 0; i < 5; i++) { Serial.print(i); }. O que será impresso no monitor serial?",
        "options": [
            "012345",
            "12345",
            "01234",
            "55555"
        ]
    },
    {
        "id": 59,
        "difficulty": "hard",
        "q": "(Diodo Zener) Um regulador Zener alimenta uma carga. Se a carga for desconectada (circuito aberto), o que acontece com a corrente que passa pelo Diodo Zener?",
        "options": [
            "Diminui para zero.",
            "Aumenta, pois ele absorve a corrente que antes ia para a carga.",
            "Permanece constante.",
            "O diodo queima instantaneamente."
        ]
    },
    {
        "id": 60,
        "difficulty": "hard",
        "q": "(Eletromagnetismo) A 'Regra da Mão Direita' (para condutores retilíneos) relaciona:",
        "options": [
            "A força, o campo e a velocidade.",
            "O sentido da corrente elétrica e o sentido das linhas de campo magnético criadas ao redor do fio.",
            "A tensão e a resistência.",
            "O polo norte e sul de um ímã permanente."
        ]
    },
    {
        "id": 61,
        "difficulty": "hard",
        "q": "(Circuitos RLC) O que é a impedância (Z) em um circuito de corrente alternada?",
        "options": [
            "É a soma aritmética da resistência e da reatância (R + X).",
            "É a resistência pura do fio.",
            "É a oposição total à passagem de corrente, sendo a soma vetorial da resistência (R) e das reatâncias.",
            "É o inverso da condutância."
        ]
    },
    {
        "id": 62,
        "difficulty": "hard",
        "q": "(Transistor - Regiões de Operação) Para um transistor funcionar como um amplificador linear de sinais, ele deve operar em qual região da curva característica?",
        "options": [
            "Região de Corte.",
            "Região de Saturação.",
            "Região Ativa.",
            "Região de Ruptura."
        ]
    },
    {
        "id": 63,
        "difficulty": "hard",
        "q": "(Portas Lógicas - Universalidade) Quais portas lógicas são consideradas 'universais', ou seja, é possível montar qualquer circuito lógico usando apenas elas?",
        "options": [
            "AND e OR",
            "NAND e NOR",
            "XOR e XNOR",
            "NOT e BUFFER"
        ]
    },
    {
        "id": 64,
        "difficulty": "hard",
        "q": "(C++ Operadores) No Arduino, qual é a diferença entre = e ==?",
        "options": [
            "Não há diferença.",
            "= compara valores, == atribui valores.",
            "= atribui valor a uma variável, == compara se dois valores são iguais.",
            "= é usado para texto, == para números."
        ]
    },
    {
        "id": 65,
        "difficulty": "easy",
        "q": "(Eletricidade - Potência) Em circuitos de Corrente Alternada (CA), a potência que realmente realiza trabalho útil (transforma-se em calor, luz ou movimento) é chamada de:",
        "options": [
            "Potência Aparente (VA).",
            "Potência Reativa (VAR).",
            "Potência Ativa (W).",
            "Potência Complexa."
        ]
    },
    {
        "id": 66,
        "difficulty": "easy",
        "q": "(Lógica Digital) Qual é o valor em decimal do bit menos significativo (LSB) de um número binário?",
        "options": [
            "0",
            "1",
            "2",
            "Depende do tamanho da palavra."
        ]
    },
    {
        "id": 67,
        "difficulty": "easy",
        "q": "(Arduino/C++) Qual tipo de variável deve ser usado para armazenar números com casas decimais (ponto flutuante) no Arduino?",
        "options": [
            "int",
            "boolean",
            "float",
            "char"
        ]
    },
    {
        "id": 68,
        "difficulty": "easy",
        "q": "(Pneumática) O que representa o símbolo de um triângulo equilátero preenchido (sólido) apontando para fora em um componente pneumático?",
        "options": [
            "Direção do fluxo de escape de ar.",
            "Direção do fluxo hidráulico.",
            "Sentido de rotação do motor.",
            "Conexão elétrica."
        ]
    },
    {
        "id": 69,
        "difficulty": "easy",
        "q": "(Diodo LED) Para ligar um LED comum (tensão de queda aprox. 2V) em uma fonte de 12V, é obrigatório o uso de um resistor em série para:",
        "options": [
            "Aumentar o brilho do LED.",
            "Limitar a corrente e evitar a queima do LED.",
            "Transformar a corrente em alternada.",
            "Filtrar ruídos da fonte."
        ]
    },
    {
        "id": 70,
        "difficulty": "easy",
        "q": "(Transistores) No transistor MOS-FET, o terminal que controla a passagem de corrente entre Dreno e Fonte é isolado eletricamente do canal. Esse terminal chama-se:",
        "options": [
            "Base.",
            "Gate (Porta).",
            "Emitter.",
            "Shield."
        ]
    },
    {
        "id": 71,
        "difficulty": "easy",
        "q": "(Motores) A velocidade síncrona de um motor de indução depende fundamentalmente de dois fatores. Quais são?",
        "options": [
            "Tensão e Corrente.",
            "Frequência da rede e número de polos do motor.",
            "Potência do motor e carga no eixo.",
            "Capacitância e indutância."
        ]
    },
    {
        "id": 72,
        "difficulty": "easy",
        "q": "(Hidráulica) Qual é a função de um filtro de sucção em um sistema hidráulico?",
        "options": [
            "Resfriar o óleo.",
            "Reter impurezas antes que o fluido entre na bomba.",
            "Aumentar a pressão da bomba.",
            "Misturar ar ao óleo."
        ]
    },
    {
        "id": 73,
        "difficulty": "easy",
        "q": "(Comandos Elétricos) O componente utilizado para sinalização visual em painéis elétricos (indicar motor ligado, falha, etc.) é:",
        "options": [
            "A botoeira de emergência.",
            "O contator.",
            "O sinaleiro (lâmpada piloto).",
            "O fusível."
        ]
    },
    {
        "id": 74,
        "difficulty": "easy",
        "q": "(Flip-Flops) Um circuito 'Latch' (trava) difere de um Flip-Flop convencional principalmente porque:",
        "options": [
            "O Latch não armazena dados.",
            "O Latch é sensível ao nível do sinal de habilitação, enquanto o Flip-Flop é sensível à borda do clock.",
            "O Latch usa mais transistores.",
            "O Latch só funciona com tensão negativa."
        ]
    },
    {
        "id": 75,
        "difficulty": "medium",
        "q": "(Lei de Kirchhoff) A Lei de Kirchhoff para as tensões (LKT) afirma que, em uma malha fechada:",
        "options": [
            "A soma das correntes que entram é igual à soma das que saem.",
            "A soma algébrica das tensões (elevações e quedas) é igual a zero.",
            "A potência dissipada é nula.",
            "A resistência total é a soma das condutâncias."
        ]
    },
    {
        "id": 76,
        "difficulty": "medium",
        "q": "(Capacitores em CA) A reatância capacitiva (Xc) varia de forma inversamente proporcional à frequência. Isso significa que, para frequências muito altas, o capacitor se comporta idealmente como:",
        "options": [
            "Um circuito aberto.",
            "Um curto-circuito.",
            "Um resistor de valor fixo.",
            "Uma fonte de tensão."
        ]
    },
    {
        "id": 77,
        "difficulty": "medium",
        "q": "(Amplificador Operacional) Qual a função de um circuito comparador de tensão utilizando um Amplificador Operacional sem realimentação?",
        "options": [
            "Amplificar linearmente pequenos sinais de áudio.",
            "Indicar se a tensão em uma entrada é maior ou menor que uma tensão de referência na outra entrada.",
            "Filtrar frequências altas.",
            "Somar dois sinais analógicos."
        ]
    },
    {
        "id": 78,
        "difficulty": "medium",
        "q": "(Lógica - De Morgan) Aplicando o Teorema de De Morgan na expressão (A . B) barrado, obtemos:",
        "options": [
            "A barrado . B barrado",
            "A barrado + B barrado",
            "A + B",
            "A . B"
        ]
    },
    {
        "id": 79,
        "difficulty": "medium",
        "q": "(Arduino - Estrutura de Controle) O comando else em programação C++ é executado quando:",
        "options": [
            "A condição do if anterior for verdadeira.",
            "A condição do if anterior for falsa.",
            "O programa é iniciado.",
            "Ocorre um erro de compilação."
        ]
    },
    {
        "id": 80,
        "difficulty": "medium",
        "q": "(Pneumática - Atuadores) Um cilindro pneumático de dupla ação possui duas conexões de ar. Isso permite que ele:",
        "options": [
            "Tenha força apenas no avanço (retorno por mola).",
            "Realize força tanto no avanço quanto no retorno através do ar comprimido.",
            "Funcione como um compressor.",
            "Gire indefinidamente."
        ]
    },
    {
        "id": 81,
        "difficulty": "medium",
        "q": "(Transistor Bipolar - Saturação) Para garantir saturação firme (hard saturation), costuma-se aplicar uma corrente de base:",
        "options": [
            "Menor que a mínima teórica (ex: 0,5mA).",
            "Exatamente igual à mínima teórica.",
            "Maior que a mínima teórica (ex: 10mA ou fator de sobressaturação).",
            "Nula."
        ]
    },
    {
        "id": 82,
        "difficulty": "medium",
        "q": "(Motores - Escorregamento) Se a velocidade síncrona de um campo magnético é 1800 RPM e o rotor gira a 1750 RPM, a diferença de 50 RPM é chamada de:",
        "options": [
            "Frequência.",
            "Escorregamento.",
            "Torque de partida.",
            "Rendimento."
        ]
    },
    {
        "id": 83,
        "difficulty": "medium",
        "q": "(Sistemas Numéricos) A conversão do número decimal 12 para binário resulta em:",
        "options": [
            "1010",
            "1100",
            "1110",
            "1001"
        ]
    },
    {
        "id": 84,
        "difficulty": "medium",
        "q": "(Comandos Elétricos - Intertravamento) Em uma reversão de motor trifásico com contatores, o 'intertravamento elétrico' serve para:",
        "options": [
            "Impedir que os dois contatores (horário e anti-horário) entrem ao mesmo tempo, causando curto entre fases.",
            "Frear o motor instantaneamente.",
            "Aumentar a velocidade da reversão.",
            "Economizar energia."
        ]
    },
    {
        "id": 85,
        "difficulty": "hard",
        "q": "(Eletricidade - Fator de Potência) Um motor tem Potência Ativa de 3 kW e Potência Aparente de 5 kVA. Qual é o Fator de Potência?",
        "options": [
            "0,8",
            "0,6",
            "1,66",
            "0,5"
        ]
    },
    {
        "id": 86,
        "difficulty": "hard",
        "q": "(Amplificador Operacional - Integrador) Se aplicarmos uma onda quadrada simétrica (níveis positivo e negativo) na entrada de um circuito Integrador ideal com AmpOp, qual será a forma de onda na saída?",
        "options": [
            "Onda quadrada.",
            "Onda senoidal.",
            "Onda triangular.",
            "Tensão contínua constante."
        ]
    },
    {
        "id": 87,
        "difficulty": "hard",
        "q": "(Lógica Sequencial) Você precisa criar um divisor de frequência por 4 usando Flip-Flops tipo T ou JK. Quantos Flip-Flops você deve conectar em cascata?",
        "options": [
            "1",
            "2",
            "4",
            "8"
        ]
    },
    {
        "id": 88,
        "difficulty": "hard",
        "q": "(C++ Arduino - Arrays) Dado o vetor int valores[5] = {10, 20, 30, 40, 50};, qual valor é acessado pelo comando valores[3]?",
        "options": [
            "30",
            "40",
            "50",
            "O comando dará erro, pois o índice vai até 2."
        ]
    },
    {
        "id": 89,
        "difficulty": "hard",
        "q": "(Hidráulica - Princípios) Em um sistema hidráulico, se usarmos um óleo com viscosidade muito baixa (muito fino) em um equipamento projetado para óleo mais viscoso, o provável efeito será:",
        "options": [
            "Aumento da eficiência volumétrica.",
            "Aumento de vazamentos internos e perda de pressão/força.",
            "Travamento da bomba por falta de lubrificação.",
            "Redução da temperatura de operação."
        ]
    },
    {
        "id": 90,
        "difficulty": "hard",
        "q": "(Transistor MOSFET - Comutação) Ao utilizar um MOSFET de potência para comutar cargas indutivas em alta frequência (PWM), um fator crítico de aquecimento é a 'perda por comutação'. Isso ocorre principalmente porque:",
        "options": [
            "O MOSFET tem resistência interna infinita.",
            "Durante a transição (ligar/desligar), o componente passa por uma região onde há simultaneamente tensão e corrente significativas.",
            "O Gate consome muita corrente.",
            "A carga indutiva gera frio."
        ]
    },
    {
        "id": 91,
        "difficulty": "hard",
        "q": "(Circuitos Combinacionais) Um decodificador BCD para 7 segmentos é um circuito que:",
        "options": [
            "Converte um sinal analógico em digital.",
            "Recebe um código binário de 4 bits e ativa as saídas correspondentes para formar números em um display.",
            "Armazena a contagem de peças.",
            "Multiplexa vários sensores em um só fio."
        ]
    },
    {
        "id": 92,
        "difficulty": "hard",
        "q": "(Comandos Elétricos - Partida Suave) Diferente da partida Estrela-Triângulo, o Soft-Starter eletrônico permite:",
        "options": [
            "Controlar a frequência da rede.",
            "Aumentar o torque acima do nominal na partida.",
            "Ajustar a rampa de aceleração da tensão, eliminando trancos mecânicos e picos abruptos de corrente.",
            "Gerar energia para a rede."
        ]
    },
    {
        "id": 93,
        "difficulty": "hard",
        "q": "(Mapa de Karnaugh) Se em um mapa de Karnaugh de 4 variáveis todas as 16 células estiverem preenchidas com '1', a expressão simplificada da saída é:",
        "options": [
            "S = A . B . C . D",
            "S = 0",
            "S = 1 (Nível lógico alto constante)",
            "S = A + B + C + D"
        ]
    },
    {
        "id": 94,
        "difficulty": "hard",
        "q": "(Pneumática - Eletroválvulas) O que acontece se a bobina (solenoide) de uma válvula direcional não estiver devidamente fixada ao núcleo ou se houver um entreferro (gap) no fechamento magnético em corrente alternada?",
        "options": [
            "A válvula funciona melhor.",
            "A bobina pode queimar por sobreaquecimento devido à alta corrente de inrush.",
            "A pressão do ar aumenta.",
            "O sistema vira hidráulico."
        ]
    },
    {
        "id": 95,
        "difficulty": "hard",
        "q": "(Arduino - Interrupções) A principal vantagem de usar uma interrupção externa (attachInterrupt) para ler um botão ou sensor, em vez de ler no loop principal (polling), é:",
        "options": [
            "O código fica mais simples.",
            "O processador não precisa verificar constantemente o pino; ele atende o evento imediatamente.",
            "Economiza memória RAM.",
            "Permite usar tensões maiores no pino."
        ]
    },
    {
        "id": 96,
        "difficulty": "hard",
        "q": "(Retificadores Trifásicos) Em um retificador trifásico de onda completa (ponte de Graetz com 6 diodos), a tensão média de saída é:",
        "options": [
            "Menor que em um retificador monofásico.",
            "Igual à tensão de pico de uma fase.",
            "Maior e com menos ondulação (ripple) do que em retificadores monofásicos.",
            "Nula."
        ]
    },
    {
        "id": 97,
        "difficulty": "hard",
        "q": "(Associação de Fontes) Se conectarmos duas baterias de 12V em paralelo (considerando que são idênticas), o resultado disponível nos terminais será:",
        "options": [
            "24V com a mesma capacidade de corrente.",
            "12V com o dobro da capacidade de corrente (Ah).",
            "0V (curto-circuito).",
            "6V."
        ]
    },
    {
        "id": 98,
        "difficulty": "hard",
        "q": "(Eletromagnetismo) As correntes circulantes no núcleo de ferro de transformadores e motores, que causam aquecimento, são chamadas de:",
        "options": [
            "Correntes de Foucault (ou parasitas).",
            "Corrente Contínua.",
            "Corrente de Biot-Savart.",
            "Corrente de Deslocamento."
        ]
    },
    {
        "id": 99,
        "difficulty": "hard",
        "q": "(Projeto Integrador) Em um projeto de automação, você precisa acionar um motor DC de 24V/3A usando um Arduino (5V). Qual a interface mais adequada?",
        "options": [
            "Ligar o motor diretamente no pino do Arduino.",
            "Usar um Amplificador Operacional.",
            "Usar um driver com Transistor (MOSFET ou Bipolar de potência) e diodo de roda livre.",
            "Usar um resistor de 1kΩ em série."
        ]
    }
];
