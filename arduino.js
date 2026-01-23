/* BANCO DE QUESTÕES - ARDUINO
   Este arquivo contém as perguntas, opções e a chave de respostas da avaliação.
*/

// CHAVE MESTRA DAS RESPOSTAS
// Mapeamento: a=0, b=1, c=2, d=3
const _k = "bcacbdccbcbbcbbcbcbccbccbbacbcbabcbcbbcbcbbbbbccbbcbbbccbbcacabcbcbbabcbcbbabbbabbaabbbcbbbbabbbbbba";

const fullQuestionBank = [
    {
        "id": 0,
        "q": "Qual função do Arduino roda apenas uma vez quando a placa é ligada?",
        "options": [
            "loop()",
            "setup()",
            "main()",
            "start()"
        ]
    },
    {
        "id": 1,
        "q": "Qual função do Arduino é executada repetidamente em ciclo infinito?",
        "options": [
            "setup()",
            "repeat()",
            "loop()",
            "cycle()"
        ]
    },
    {
        "id": 2,
        "q": "Para configurar um pino como saída digital, qual comando em linguagem C++ utilizamos?",
        "options": [
            "pinMode(pino, OUTPUT)",
            "pinMode(pino, INPUT)",
            "digitalWrite(pino, HIGH)",
            "analogWrite(pino, 255)"
        ]
    },
    {
        "id": 3,
        "q": "Qual comando em linguagem C++ é usado para ler o estado de um botão digital no Arduino?",
        "options": [
            "analogRead()",
            "digitalWrite()",
            "digitalRead()",
            "pinMode()"
        ]
    },
    {
        "id": 4,
        "q": "O que o comando \"delay(2000)\" faz no código do Arduino?",
        "options": [
            "Pausa por 2000s",
            "Pausa por 2 segundos",
            "Reinicia o Arduino",
            "Espera um botão"
        ]
    },
    {
        "id": 5,
        "q": "Em C++, como declaramos uma variável para números inteiros?",
        "options": [
            "float temperatura",
            "String senha",
            "boolean teste",
            "int contagem"
        ]
    },
    {
        "id": 6,
        "q": "Qual tipo de variável é ideal para um valor de temperatura de 25,5 graus?",
        "options": [
            "int",
            "char",
            "float",
            "long"
        ]
    },
    {
        "id": 7,
        "q": "O que significa o símbolo \"//\" no código?",
        "options": [
            "Início de função",
            "Divisão",
            "Comentário de uma linha",
            "Fim de instrução"
        ]
    },
    {
        "id": 8,
        "q": "Qual operador verifica igualdade no \"if\"?",
        "options": [
            "=",
            "==",
            "===",
            "!="
        ]
    },
    {
        "id": 9,
        "q": "Qual operador lógico representa \"E\" (AND)?",
        "options": [
            "||",
            "!",
            "&&",
            "**"
        ]
    },
    {
        "id": 10,
        "q": "Qual operador lógico representa \"OU\" (OR)?",
        "options": [
            "&&",
            "||",
            "??",
            "!"
        ]
    },
    {
        "id": 11,
        "q": "O símbolo \"!\" antes de uma variável booleana serve para:",
        "options": [
            "Confirmar",
            "Inverter (NÃO lógico)",
            "Transformar em int",
            "Apagar"
        ]
    },
    {
        "id": 12,
        "q": "Qual biblioteca é essencial para o Display LCD 16x2?",
        "options": [
            "<Keypad.h>",
            "<DHT.h>",
            "<LiquidCrystal.h>",
            "<Servo.h>"
        ]
    },
    {
        "id": 13,
        "q": "Para incluir uma biblioteca, usamos:",
        "options": [
            "#define",
            "#include",
            "import",
            "using"
        ]
    },
    {
        "id": 14,
        "q": "O comando \"Serial.begin(9600)\" serve para:",
        "options": [
            "Ligar o LCD",
            "Iniciar comunicação serial",
            "Definir motor",
            "Configurar PWM"
        ]
    },
    {
        "id": 15,
        "q": "Qual pontuação finaliza uma instrução em C++?",
        "options": [
            ":",
            ".",
            ";",
            ","
        ]
    },
    {
        "id": 16,
        "q": "O que acontece se esquecer de fechar uma chave '}'?",
        "options": [
            "Roda normal",
            "Erro de compilação",
            "Trava o Arduino",
            "Ignora a função"
        ]
    },
    {
        "id": 17,
        "q": "A função \"lcd.clear()\" serve para:",
        "options": [
            "Desligar LCD",
            "Luz de fundo",
            "Limpar a tela",
            "Reiniciar"
        ]
    },
    {
        "id": 18,
        "q": "O que \"lcd.setCursor(0, 1)\" faz?",
        "options": [
            "Vai p/ col 0, lin 0",
            "Vai p/ col 0, lin 1 (linha 2)",
            "Escreve 0 e 1",
            "Limpa linha 1"
        ]
    },
    {
        "id": 19,
        "q": "Para concatenar texto em uma String, usamos:",
        "options": [
            "*",
            "-",
            "+",
            "%"
        ]
    },
    {
        "id": 20,
        "q": "No projeto da Catraca, qual componente é usado para senha?",
        "options": [
            "LDR",
            "Ultrassônico",
            "Teclado 4x4",
            "Potenciômetro"
        ]
    },
    {
        "id": 21,
        "q": "Qual biblioteca facilita o uso do teclado matricial?",
        "options": [
            "Matrix.h",
            "Keypad.h",
            "Button.h",
            "Input.h"
        ]
    },
    {
        "id": 22,
        "q": "Como comparar se a senha digitada é igual à correta (String)?",
        "options": [
            "texto.compare()",
            "texto.check()",
            "texto.equals()",
            "texto.is()"
        ]
    },
    {
        "id": 23,
        "q": "Na Catraca, a tecla \"#\" foi usada para:",
        "options": [
            "Apagar",
            "Digitar zero",
            "Confirmar (Enter)",
            "Reiniciar"
        ]
    },
    {
        "id": 24,
        "q": "Na Catraca, a tecla \"*\" foi usada para:",
        "options": [
            "Confirmar",
            "Cancelar/Limpar",
            "Ligar LED",
            "Digitar letra"
        ]
    },
    {
        "id": 25,
        "q": "O que é um \"LCD Keypad Shield\"?",
        "options": [
            "Escudo físico",
            "Placa com LCD e botões acoplada",
            "Sensor térmico",
            "Software"
        ]
    },
    {
        "id": 26,
        "q": "Para exibir \"*\" no lugar da senha, usamos:",
        "options": [
            "lcd.print(\"*\")",
            "lcd.noDisplay()",
            "lcd.hide()",
            "Serial.print(\"*\")"
        ]
    },
    {
        "id": 27,
        "q": "Qual tipo da variável que armazenou a senha digitada?",
        "options": [
            "int",
            "float",
            "String",
            "char"
        ]
    },
    {
        "id": 28,
        "q": "O sistema da Trava é \"biestável\". Isso significa:",
        "options": [
            "Tem 2 Arduinos",
            "Alterna entre 2 estados estáveis",
            "Usa 2 baterias",
            "Funciona 2s"
        ]
    },
    {
        "id": 29,
        "q": "O operador ternário \"cond ? v1 : v2\" substitui:",
        "options": [
            "for",
            "while",
            "if...else simples",
            "switch"
        ]
    },
    {
        "id": 30,
        "q": "Se \"travado\" é false, o que \"!travado\" retorna?",
        "options": [
            "false",
            "true",
            "null",
            "erro"
        ]
    },
    {
        "id": 31,
        "q": "Para limpar a variável senha, atribuímos:",
        "options": [
            "0",
            "null",
            "\"\" (vazio)",
            "false"
        ]
    },
    {
        "id": 32,
        "q": "Quantos pinos digitais controlam as linhas do teclado 4x4?",
        "options": [
            "2",
            "4",
            "8",
            "16"
        ]
    },
    {
        "id": 33,
        "q": "O mapeamento das teclas usa:",
        "options": [
            "Matriz (Array 2D)",
            "Lista simples",
            "Variável int",
            "Sensor analógico"
        ]
    },
    {
        "id": 34,
        "q": "Na Trava, Relé em HIGH geralmente significa:",
        "options": [
            "Aberto",
            "Desligado",
            "Curto",
            "Queimado"
        ]
    },
    {
        "id": 35,
        "q": "Qual sensor foi usado no Alarme de Intrusão?",
        "options": [
            "DHT11",
            "LDR",
            "HC-SR04",
            "LM35"
        ]
    },
    {
        "id": 36,
        "q": "O pino \"Trig\" do ultrassônico serve para:",
        "options": [
            "Receber eco",
            "Enviar pulso",
            "Alimentar",
            "Aterrar"
        ]
    },
    {
        "id": 37,
        "q": "O pino \"Echo\" do ultrassônico serve para:",
        "options": [
            "Enviar som",
            "Receber eco",
            "Configurar",
            "Ligar LED"
        ]
    },
    {
        "id": 38,
        "q": "A velocidade do som usada no cálculo do sensor ultrassônico é aproximadamente:",
        "options": [
            "340 m/s",
            "100 km/h",
            "300.000 km/s",
            "10 m/s"
        ]
    },
    {
        "id": 39,
        "q": "Por que dividimos o tempo do som por 2?",
        "options": [
            "Converter metros",
            "Porque o som vai e volta",
            "Reduzir ruído",
            "Constante Arduino"
        ]
    },
    {
        "id": 40,
        "q": "Qual função mede a duração do pulso no Echo?",
        "options": [
            "digitalRead",
            "analogRead",
            "pulseIn()",
            "time"
        ]
    },
    {
        "id": 41,
        "q": "Para que serve \"delayMicroseconds(10)\" no Trig do sensor ultrassônico?",
        "options": [
            "Pausar 10s",
            "Gerar pulso curto de $10\\mu s$ de disparo",
            "Esperar LCD",
            "Reiniciar"
        ]
    },
    {
        "id": 42,
        "q": "Se a distância for menor que o limite, o alarme:",
        "options": [
            "Desliga",
            "Ativa (LED+Relé)",
            "Reinicia",
            "Para de ler"
        ]
    },
    {
        "id": 43,
        "q": "O sensor ultrassônico usa ondas de:",
        "options": [
            "Baixa freq",
            "Alta frequência (inaudíveis)",
            "Infravermelho",
            "Rádio"
        ]
    },
    {
        "id": 44,
        "q": "O Módulo de Relé serve para:",
        "options": [
            "Medir",
            "Controlar cargas de potência",
            "Armazenar",
            "Substituir Arduino"
        ]
    },
    {
        "id": 45,
        "q": "Em relés ativos em baixo, sinal LOW faz o quê?",
        "options": [
            "Desliga",
            "Liga (Ativa)",
            "Queima",
            "Nada"
        ]
    },
    {
        "id": 46,
        "q": "Por que usar \"long\" para a duração do pulso no sensor ultrassônico?",
        "options": [
            "É decimal",
            "É texto",
            "Pode ser número grande",
            "É negativo"
        ]
    },
    {
        "id": 47,
        "q": "Um LED RGB pode emitir:",
        "options": [
            "Só vermelho",
            "Só verde",
            "Várias cores misturadas",
            "Só azul"
        ]
    },
    {
        "id": 48,
        "q": "Para controlar intensidade do LED (PWM), usamos:",
        "options": [
            "digitalWrite",
            "analogWrite()",
            "digitalRead",
            "tone"
        ]
    },
    {
        "id": 49,
        "q": "Pinos PWM na placa do Arduino têm qual símbolo?",
        "options": [
            "A",
            "~",
            "V",
            "Nenhum"
        ]
    },
    {
        "id": 50,
        "q": "Amarelo no LED RGB é mistura de:",
        "options": [
            "Vermelho+Azul",
            "Verde+Azul",
            "Vermelho+Verde",
            "Só Verde"
        ]
    },
    {
        "id": 51,
        "q": "O que é \"Debounce\" em botões?",
        "options": [
            "Técnica para pular um trecho de código",
            "Técnica para evitar ruído/leituras falsas",
            "Ligar no 5V",
            "Queimar"
        ]
    },
    {
        "id": 52,
        "q": "INPUT_PULLUP faz o botão ler qual nível lógico ao pressionar?",
        "options": [
            "HIGH",
            "LOW (com resistor interno)",
            "Precisa resistor externo",
            "Saída"
        ]
    },
    {
        "id": 53,
        "q": "A estrutura \"enum\" serve para:",
        "options": [
            "Contar",
            "Definir estados nomeados",
            "Loop",
            "LCD"
        ]
    },
    {
        "id": 54,
        "q": "Valores de PWM variam de:",
        "options": [
            "0-1023",
            "0-100",
            "0-255",
            "-128 a 127"
        ]
    },
    {
        "id": 55,
        "q": "Se usarmos analogWrite(pino, 0), o LED:",
        "options": [
            "Brilha muito",
            "Pisca",
            "Apaga",
            "Muda cor"
        ]
    },
    {
        "id": 56,
        "q": "Vantagem de usar funções no código:",
        "options": [
            "Mais lento",
            "Organização e clareza",
            "Mais memória",
            "Nenhuma"
        ]
    },
    {
        "id": 57,
        "q": "O DHT11 mede:",
        "options": [
            "Luz",
            "Temperatura e Umidade",
            "Distância",
            "Pressão"
        ]
    },
    {
        "id": 58,
        "q": "Intervalo mínimo de leitura do DHT11:",
        "options": [
            "10ms",
            "500ms",
            "De 1 a 2 segundos",
            "1 min"
        ]
    },
    {
        "id": 59,
        "q": "A função \"isnan()\" verifica:",
        "options": [
            "Se é número inválido (erro)",
            "Se é zero",
            "Se desligado",
            "Se inteiro"
        ]
    },
    {
        "id": 60,
        "q": "Unidade de temperatura padrão do DHT11:",
        "options": [
            "Fahrenheit",
            "Kelvin",
            "Celsius",
            "Volts"
        ]
    },
    {
        "id": 61,
        "q": "Como exibir um valor float com 1 casa decimal no display LCD com Arduino:",
        "options": [
            "lcd.print(v, 1)",
            "lcd.print(v, 0)",
            "lcd.dec(v)",
            "lcd.one(v)"
        ]
    },
    {
        "id": 62,
        "q": "Em um dos projetos com o DHT11, quando a umidade estava acima do limite, o que acontecia?",
        "options": [
            "Desligamento do Arduino",
            "Acionamento de um exaustor (via Relé)",
            "Apaga LCD",
            "Música"
        ]
    },
    {
        "id": 63,
        "q": "Qual é a função no Arduino para ler temperatura do DHT11?",
        "options": [
            "dht.read()",
            "dht.get()",
            "dht.readTemperature()",
            "analogRead"
        ]
    },
    {
        "id": 64,
        "q": "O que é \"Histerese\"?",
        "options": [
            "Erro",
            "Faixa de tolerância p/ evitar oscilação",
            "Cabo",
            "Velocidade"
        ]
    },
    {
        "id": 65,
        "q": "O que o trecho de código está realizando: if(digitalRead(2) == HIGH) { digitalWrite(6, LOW);}",
        "options": [
            "Verifica se o pino 6 recebeu nível lógico LOW e, então, aciona o pino 2",
            "Este trecho nunca será executado pois o teste é sempre falso",
            "Verifica se o pino 2 recebeu nível lógico HIGH e, em caso afirmativo, envia nível lógico LOW para o pino 6",
            "Verifica se o pino 2 recebeu nível lógico LOW e, em caso afirmativo, envia nível lógico LOW para o pino 6"
        ]
    },
    {
        "id": 66,
        "q": "Se o sensor DHT11 falhar, o código foi configurado para:",
        "options": [
            "Travar",
            "Avisar 'Erro de Sensor'",
            "Reiniciar",
            "Ignorar"
        ]
    },
    {
        "id": 67,
        "q": "Biblioteca DHT.h serve para:",
        "options": [
            "Motores",
            "Comunicação com sensor",
            "Teclado",
            "Sons"
        ]
    },
    {
        "id": 68,
        "q": "Como foi definida a Umidade Crítica?",
        "options": [
            "Constante float",
            "Variável int",
            "String",
            "Pino"
        ]
    },
    {
        "id": 69,
        "q": "O comando 'dht.begin()' faz o quê?",
        "options": [
            "Lê",
            "Inicializa o sensor",
            "Para",
            "Calibra"
        ]
    },
    {
        "id": 70,
        "q": "O LDR é um resistor que varia sua resistência com:",
        "options": [
            "Calor",
            "Pressão",
            "Luz",
            "Som"
        ]
    },
    {
        "id": 71,
        "q": "Com mais luz, a resistência do LDR:",
        "options": [
            "Aumenta",
            "Diminui",
            "Igual",
            "Queima"
        ]
    },
    {
        "id": 72,
        "q": "Um LDR deve ser ligado em qual pino do Arduino se nosso objetivo é medir intensidade luminosa?",
        "options": [
            "Digital",
            "PWM",
            "Analógico",
            "VCC"
        ]
    },
    {
        "id": 73,
        "q": "analogRead() retorna valores entre:",
        "options": [
            "0-255",
            "0-1023",
            "0-1",
            "-5 a 5"
        ]
    },
    {
        "id": 74,
        "q": "Função para converter escalas (ex: 0-1023 p/ 0-100):",
        "options": [
            "convert",
            "map()",
            "pulseIn",
            "transform"
        ]
    },
    {
        "id": 75,
        "q": "Função 'constrain()' serve para:",
        "options": [
            "Limitar valor num intervalo",
            "Zerar",
            "Multiplicar",
            "Dividir"
        ]
    },
    {
        "id": 76,
        "q": "No projeto de iluminação, se escurecer:",
        "options": [
            "Relés desligam",
            "Relés ligam gradualmente",
            "LCD apaga",
            "Nada"
        ]
    },
    {
        "id": 77,
        "q": "Para controlar 4 relés, usamos:",
        "options": [
            "4 variáveis",
            "Array (vetor) e loop",
            "4 Arduinos",
            "Matriz"
        ]
    },
    {
        "id": 78,
        "q": "O que é divisor de tensão no LDR?",
        "options": [
            "Ferramenta",
            "Circuito com resistor p/ ler a tensão no LDR",
            "Software",
            "Bateria"
        ]
    },
    {
        "id": 79,
        "q": "Técnica para leitura estável do LDR:",
        "options": [
            "Média Móvel",
            "Trocar Arduino",
            "Cola",
            "Mais voltagem"
        ]
    },
    {
        "id": 80,
        "q": "map(valor, MIN, MAX, 0, 100) faz:",
        "options": [
            "Mapa",
            "Regra de 3 (escala)",
            "Procura",
            "Apaga"
        ]
    },
    {
        "id": 81,
        "q": "Em um projeto de programação, o ideal é iniciar fazendo:",
        "options": [
            "A configuração das variáveis de entrada e saída na função void setup()",
            "Uma descrição textual, contando o passo a passo que o programa deve executar",
            "Um fluxograma que mostra como o projeto funciona de maneira gráfica",
            "Pesquisar na internet um código pronto para copiar"
        ]
    },
    {
        "id": 82,
        "q": "Estruturas de repetição servem para:",
        "options": [
            "Repetir um certo trecho de código por um número fixo de vezes, uma condição bem definida ou infinitamente",
            "Repetir um certo trecho de código infinitamente",
            "Repetir um certo trecho de código por um número bem definido de vezes",
            "Repetir um certo trecho de código enquanto uma certa condição for verdadeira"
        ]
    },
    {
        "id": 83,
        "q": "Para inverter estado (Toggle) digital:",
        "options": [
            "!digitalRead(pino)",
            "write(0)",
            "analog(255)",
            "mode(OUTPUT)"
        ]
    },
    {
        "id": 84,
        "q": "No escuro total, o valor analógico do LDR tende a:",
        "options": [
            "Extremo (0 ou 1023)",
            "Zero fixo",
            "Aleatório",
            "512"
        ]
    },
    {
        "id": 85,
        "q": "O que é um Relé?",
        "options": [
            "Sensor",
            "Interruptor eletromecânico",
            "Gerador",
            "Memória"
        ]
    },
    {
        "id": 86,
        "q": "Por que usar resistor no LED?",
        "options": [
            "Brilho",
            "Limitar corrente (não queimar)",
            "Cor",
            "Polaridade"
        ]
    },
    {
        "id": 87,
        "q": "Linguagem base do Arduino:",
        "options": [
            "Python",
            "Java",
            "C++",
            "HTML"
        ]
    },
    {
        "id": 88,
        "q": "GND significa:",
        "options": [
            "Grande",
            "Terra (Ground/Negativo)",
            "Ganho",
            "Geral"
        ]
    },
    {
        "id": 89,
        "q": "VCC ou 5V é:",
        "options": [
            "Dados",
            "Alimentação Positiva",
            "Terra",
            "Entrada"
        ]
    },
    {
        "id": 90,
        "q": "Serial Monitor serve para:",
        "options": [
            "Vídeo",
            "Ver dados enviados ao PC",
            "Gráfico",
            "Compilar"
        ]
    },
    {
        "id": 91,
        "q": "Variável 'const int' muda no loop?",
        "options": [
            "Sim",
            "Não, pois é constante",
            "Às vezes",
            "Se reiniciar"
        ]
    },
    {
        "id": 92,
        "q": "Diferença Digital x Analógico:",
        "options": [
            "Digital (0/1) x Analógico (Contínuo)",
            "Nenhuma",
            "Analógico melhor",
            "Digital áudio"
        ]
    },
    {
        "id": 93,
        "q": "O que é Protoboard?",
        "options": [
            "Placa final",
            "Placa de ensaio",
            "Processador",
            "Bateria"
        ]
    },
    {
        "id": 94,
        "q": "Botão Reset serve para:",
        "options": [
            "Apagar",
            "Reiniciar programa",
            "Desligar",
            "Salvar"
        ]
    },
    {
        "id": 95,
        "q": "Serial.println() difere de print() pois:",
        "options": [
            "Cor",
            "Pula linha",
            "Rápido",
            "Números"
        ]
    },
    {
        "id": 96,
        "q": "Resolução do ADC do Arduino Mega:",
        "options": [
            "8 bits",
            "10 bits (0-1023)",
            "12 bits",
            "16 bits"
        ]
    },
    {
        "id": 97,
        "q": "DHT11 é digital ou analógico?",
        "options": [
            "Analógico",
            "Digital (envia dados codificados)",
            "Mecânico",
            "Nenhum"
        ]
    },
    {
        "id": 98,
        "q": "LED ligado invertido:",
        "options": [
            "Pisca",
            "Não acende",
            "Explode",
            "Muda cor"
        ]
    },
    {
        "id": 99,
        "q": "Quando conectamos a placa do Arduino no computador:",
        "options": [
            "Devemos configurar o modelo e a porta de comunicação no Arduino IDE",
            "Basta digitar o código que a programação é gravada automaticamente na placa",
            "Devemos clicar no botão que tem um símbolo de seta para gravar o programa na placa",
            "Não é necessário fazer nada, pois o computador já energiza a placa"
        ]
    }
];
