/* BANCO DE QUESTÕES - ARDUINO
   Este arquivo contém as perguntas e opções da avaliação.
   A ordem aqui deve corresponder à chave de respostas no arquivo HTML.
*/

// CHAVE MESTRA DAS RESPOSTAS
// Mapeamento: a=0, b=1, c=2, d=3
// Cada letra corresponde à resposta correta da questão de mesmo índice no array abaixo.
const _k = "bcacbdccbcbbcbbcbcbccbccbbacbcbabcbabccbbbbccbcbccbbbccbcbacabcbccbabcbcbabbbbabcaaabbcbbbbabbbbbbb";

const fullQuestionBank = [
    // --- Arduino Básico ---
    { id: 0, q: "Qual função do Arduino roda apenas uma vez quando a placa é ligada?", options: ["loop()", "setup()", "main()", "start()"] },
    { id: 1, q: "Qual função do Arduino é executada repetidamente em ciclo infinito?", options: ["setup()", "repeat()", "loop()", "cycle()"] },
    { id: 2, q: "Para configurar um pino como saída de energia, qual comando utilizamos?", options: ["pinMode(pino, OUTPUT)", "pinMode(pino, INPUT)", "digitalWrite(pino, HIGH)", "analogWrite(pino, 255)"] },
    { id: 3, q: "Qual comando é usado para ler o estado de um botão digital?", options: ["analogRead()", "digitalWrite()", "digitalRead()", "pinMode()"] },
    { id: 4, q: "O que o comando 'delay(2000)' faz no código?", options: ["Pausa por 2000s", "Pausa por 2 segundos", "Reinicia o Arduino", "Espera um botão"] },
    { id: 5, q: "Em C++, como declaramos uma variável para números inteiros?", options: ["float", "String", "boolean", "int"] },
    { id: 6, q: "Qual tipo de variável é ideal para temperatura '25.5'?", options: ["int", "char", "float", "long"] },
    { id: 7, q: "O que significa o símbolo '//' no código?", options: ["Início de função", "Divisão", "Comentário de uma linha", "Fim de instrução"] },
    { id: 8, q: "Qual operador verifica igualdade no 'if'?", options: ["=", "==", "===", "!="] },
    { id: 9, q: "Qual operador lógico representa 'E' (AND)?", options: ["||", "!", "&&", "**"] },
    { id: 10, q: "Qual operador lógico representa 'OU' (OR)?", options: ["&&", "||", "??", "!"] },
    { id: 11, q: "O símbolo '!' antes de uma variável booleana serve para:", options: ["Confirmar", "Inverter (NÃO lógico)", "Transformar em int", "Apagar"] },
    { id: 12, q: "Qual biblioteca é essencial para o Display LCD 16x2?", options: ["<Keypad.h>", "<DHT.h>", "<LiquidCrystal.h>", "<Servo.h>"] },
    { id: 13, q: "Para incluir uma biblioteca, usamos:", options: ["#define", "#include", "import", "using"] },
    { id: 14, q: "O comando 'Serial.begin(9600)' serve para:", options: ["Ligar o LCD", "Iniciar comunicação serial", "Definir motor", "Configurar PWM"] },
    { id: 15, q: "Qual pontuação finaliza uma instrução em C++?", options: [":", ".", ";", ","] },
    { id: 16, q: "O que acontece se esquecer de fechar uma chave '}'?", options: ["Roda normal", "Erro de compilação", "Trava o Arduino", "Ignora a função"] },
    { id: 17, q: "A função 'lcd.clear()' serve para:", options: ["Desligar LCD", "Luz de fundo", "Limpar a tela", "Reiniciar"] },
    { id: 18, q: "O que 'lcd.setCursor(0, 1)' faz?", options: ["Vai p/ col 0, lin 0", "Vai p/ col 0, lin 1 (linha 2)", "Escreve 0 e 1", "Limpa linha 1"] },
    { id: 19, q: "Para concatenar texto em uma String, usamos:", options: ["*", "-", "+", "%"] },

    // --- Catraca / Teclado ---
    { id: 20, q: "No projeto da Catraca, qual componente é usado para senha?", options: ["LDR", "Ultrassônico", "Teclado 4x4", "Potenciômetro"] },
    { id: 21, q: "Qual biblioteca facilita o uso do teclado matricial?", options: ["Matrix.h", "Keypad.h", "Button.h", "Input.h"] },
    { id: 22, q: "Como comparar se a senha digitada é igual à correta (String)?", options: ["texto.compare()", "texto.check()", "texto.equals()", "texto.is()"] },
    { id: 23, q: "Na Catraca, a tecla '#' foi usada para:", options: ["Apagar", "Digitar zero", "Confirmar (Enter)", "Reiniciar"] },
    { id: 24, q: "Na Catraca, a tecla '*' foi usada para:", options: ["Confirmar", "Cancelar/Limpar", "Ligar LED", "Digitar letra"] },
    { id: 25, q: "O que é um 'LCD Keypad Shield'?", options: ["Escudo físico", "Placa com LCD e botões acoplada", "Sensor térmico", "Software"] },
    { id: 26, q: "Para exibir '*' no lugar da senha, usamos:", options: ["lcd.print('*')", "lcd.noDisplay()", "lcd.hide()", "Serial.print('*')"] },
    { id: 27, q: "Qual variável armazenou a senha digitada?", options: ["int", "float", "String", "char"] },
    { id: 28, q: "O sistema da Trava é 'biestável'. Isso significa:", options: ["Tem 2 Arduinos", "Alterna entre 2 estados estáveis", "Usa 2 baterias", "Funciona 2s"] },
    { id: 29, q: "O operador ternário 'cond ? v1 : v2' substitui:", options: ["for", "while", "if...else simples", "switch"] },
    { id: 30, q: "Se 'travado' é false, o que '!travado' retorna?", options: ["false", "true", "null", "erro"] },
    { id: 31, q: "Para limpar a variável senha, atribuímos:", options: ["0", "null", "\"\" (vazio)", "false"] },
    { id: 32, q: "Quantos pinos digitais controlam as linhas do teclado 4x4?", options: ["2", "4", "8", "16"] },
    { id: 33, q: "O mapeamento das teclas usa:", options: ["Matriz (Array 2D)", "Lista simples", "Variável int", "Sensor analógico"] },
    { id: 34, q: "Na Trava, Relé em HIGH geralmente significa:", options: ["Aberto", "Desligado (Fechado)", "Curto", "Queimado"] },

    // --- Ultrassônico / Alarme ---
    { id: 35, q: "Qual sensor foi usado no Alarme de Intrusão?", options: ["DHT11", "LDR", "HC-SR04", "LM35"] },
    { id: 36, q: "O pino 'Trig' do ultrassônico serve para:", options: ["Receber eco", "Enviar pulso", "Alimentar", "Aterrar"] },
    { id: 37, q: "O pino 'Echo' do ultrassônico serve para:", options: ["Enviar som", "Receber eco", "Configurar", "Ligar LED"] },
    { id: 38, q: "A velocidade do som usada no cálculo é aprox.:", options: ["340 m/s", "100 km/h", "300.000 km/s", "10 m/s"] },
    { id: 39, q: "Por que dividimos o tempo do som por 2?", options: ["Converter metros", "Porque o som vai e volta", "Reduzir ruído", "Constante Arduino"] },
    { id: 40, q: "Qual função mede a duração do pulso no Echo?", options: ["digitalRead", "analogRead", "pulseIn()", "time"] },
    { id: 41, q: "Para que serve 'delayMicroseconds(10)' no Trig?", options: ["Pausar 10s", "Gerar pulso de disparo", "Esperar LCD", "Reiniciar"] },
    { id: 42, q: "Se a distância for menor que o limite, o alarme:", options: ["Desliga", "Ativa (LED+Relé)", "Reinicia", "Para de ler"] },
    { id: 43, q: "O sensor ultrassônico usa ondas de:", options: ["Baixa freq", "Alta frequência (inaudíveis)", "Infravermelho", "Rádio"] },
    { id: 44, q: "O Módulo de Relé serve para:", options: ["Medir", "Controlar cargas de potência", "Armazenar", "Substituir Arduino"] },
    { id: 45, q: "Em relés ativo-baixo, sinal LOW faz o quê?", options: ["Desliga", "Liga (Ativa)", "Queima", "Nada"] },
    { id: 46, q: "Por que usar 'long' para a duração do pulso?", options: ["É decimal", "É texto", "Pode ser número grande", "É negativo"] },

    // --- LED RGB ---
    { id: 47, q: "Um LED RGB emite:", options: ["Só vermelho", "Só branco", "Várias cores misturadas", "Som"] },
    { id: 48, q: "Para controlar intensidade do LED (PWM), usamos:", options: ["digitalWrite", "analogWrite()", "digitalRead", "tone"] },
    { id: 49, q: "Pinos PWM no Arduino têm qual símbolo?", options: ["A", "~", "V", "Nenhum"] },
    { id: 50, q: "Amarelo no RGB é mistura de:", options: ["Vermelho+Azul", "Verde+Azul", "Vermelho+Verde", "Só Verde"] },
    { id: 51, q: "O que é 'Debounce' em botões?", options: ["Pular", "Evitar ruído/leituras falsas", "Ligar no 5V", "Queimar"] },
    { id: 52, q: "INPUT_PULLUP faz o botão ler o quê ao pressionar?", options: ["HIGH", "LOW (com resistor interno)", "Precisa resistor externo", "Saída"] },
    { id: 53, q: "A estrutura 'enum' serve para:", options: ["Contar", "Definir estados nomeados", "Loop", "LCD"] },
    { id: 54, q: "Valores de PWM variam de:", options: ["0-1023", "0-100", "0-255", "-128 a 127"] },
    { id: 55, q: "Se usarmos analogWrite(pino, 0), o LED:", options: ["Brilha muito", "Pisca", "Apaga", "Muda cor"] },
    { id: 56, q: "Vantagem de usar funções no código:", options: ["Mais lento", "Organização e clareza", "Mais memória", "Nenhuma"] },

    // --- DHT11 ---
    { id: 57, q: "O DHT11 mede:", options: ["Luz", "Temp. e Umidade", "Distância", "Pressão"] },
    { id: 58, q: "Intervalo mínimo de leitura do DHT11:", options: ["10ms", "500ms", "2 segundos", "1 min"] },
    { id: 59, q: "A função 'isnan()' verifica:", options: ["Se é número inválido (erro)", "Se é zero", "Se desligado", "Se inteiro"] },
    { id: 60, q: "Unidade de temperatura padrão do DHT11:", options: ["Fahrenheit", "Kelvin", "Celsius", "Volts"] },
    { id: 61, q: "Exibir float com 1 casa decimal:", options: ["lcd.print(v, 1)", "lcd.print(v, 0)", "lcd.dec(v)", "lcd.one(v)"] },
    { id: 62, q: "Umidade acima do limite aciona:", options: ["Desligamento", "Exaustor (Relé)", "Apaga LCD", "Música"] },
    { id: 63, q: "Comando para ler temperatura:", options: ["dht.read()", "dht.get()", "dht.readTemperature()", "analogRead"] },
    { id: 64, q: "O que é 'Histerese'?", options: ["Erro", "Faixa de tolerância p/ evitar oscilação", "Cabo", "Velocidade"] },
    { id: 65, q: "Pino de dados do DHT11 no projeto:", options: ["0", "1", "40", "A0"] },
    { id: 66, q: "Se o sensor falhar, o código:", options: ["Trava", "Avisa 'Erro de Sensor'", "Reinicia", "Ignora"] },
    { id: 67, q: "Biblioteca DHT.h serve para:", options: ["Motores", "Comunicação com sensor", "Teclado", "Sons"] },
    { id: 68, q: "Como foi definida a Umidade Crítica?", options: ["Constante float", "Variável int", "String", "Pino"] },
    { id: 69, q: "O comando 'dht.begin()' faz o quê?", options: ["Lê", "Inicializa o sensor", "Para", "Calibra"] },

    // --- LDR ---
    { id: 70, q: "O LDR é um resistor que varia com:", options: ["Calor", "Pressão", "Luz", "Som"] },
    { id: 71, q: "Com mais luz, a resistência do LDR:", options: ["Aumenta", "Diminui", "Igual", "Queima"] },
    { id: 72, q: "LDR liga em qual pino para medir intensidade?", options: ["Digital", "PWM", "Analógico (A8)", "VCC"] },
    { id: 73, q: "analogRead() retorna valores entre:", options: ["0-255", "0-1023", "0-1", "-5 a 5"] },
    { id: 74, q: "Função para converter escalas (ex: 0-1023 p/ 0-100):", options: ["convert", "map()", "pulseIn", "transform"] },
    { id: 75, q: "Função 'constrain()' serve para:", options: ["Limitar valor num intervalo", "Zerar", "Multiplicar", "Dividir"] },
    { id: 76, q: "No projeto de iluminação, se escurecer:", options: ["Relés desligam", "Relés ligam gradualmente", "LCD apaga", "Nada"] },
    { id: 77, q: "Para controlar 4 relés, usamos:", options: ["4 variáveis", "Array (vetor) e loop", "4 Arduinos", "Matriz"] },
    { id: 78, q: "O que é divisor de tensão no LDR?", options: ["Ferramenta", "Circuito com resistor p/ ler voltagem", "Software", "Bateria"] },
    { id: 79, q: "Técnica para leitura estável do LDR:", options: ["Média Móvel", "Trocar Arduino", "Cola", "Mais voltagem"] },
    { id: 80, q: "map(valor, MIN, MAX, 0, 100) faz:", options: ["Mapa", "Regra de 3 (escala)", "Procura", "Apaga"] },
    { id: 81, q: "Feedback visual no projeto LDR:", options: ["Motor", "Sirene", "LED/LCD", "Calor"] },
    { id: 82, q: "Limites de luz para relés eram:", options: ["Percentuais fixos", "Aleatórios", "Texto", "Funções"] },
    { id: 83, q: "Para inverter estado (Toggle) digital:", options: ["!digitalRead(pino)", "write(0)", "analog(255)", "mode(OUTPUT)"] },
    { id: 84, q: "No escuro total, o valor analógico do LDR tende a:", options: ["Extremo (0 ou 1023)", "Zero fixo", "Aleatório", "512"] },

    // --- Geral ---
    { id: 85, q: "O que é um Relé?", options: ["Sensor", "Interruptor eletromecânico", "Gerador", "Memória"] },
    { id: 86, q: "Por que usar resistor no LED?", options: ["Brilho", "Limitar corrente (não queimar)", "Cor", "Polaridade"] },
    { id: 87, q: "Linguagem base do Arduino:", options: ["Python", "Java", "C++", "HTML"] },
    { id: 88, q: "GND significa:", options: ["Grande", "Terra (Ground/Negativo)", "Ganho", "Geral"] },
    { id: 89, q: "VCC ou 5V é:", options: ["Dados", "Alimentação Positiva", "Terra", "Entrada"] },
    { id: 90, q: "Serial Monitor serve para:", options: ["Vídeo", "Ver dados enviados ao PC", "Gráfico", "Compilar"] },
    { id: 91, q: "Variável 'const int' muda no loop?", options: ["Sim", "Não, é constante", "Às vezes", "Se reiniciar"] },
    { id: 92, q: "Diferença Digital x Analógico:", options: ["Digital (0/1) x Analógico (Contínuo)", "Nenhuma", "Analógico melhor", "Digital áudio"] },
    { id: 93, q: "O que é Protoboard?", options: ["Placa final", "Placa de ensaio (furos)", "Processador", "Bateria"] },
    { id: 94, q: "Botão Reset serve para:", options: ["Apagar", "Reiniciar programa", "Desligar", "Salvar"] },
    { id: 95, q: "Serial.println() difere de print() pois:", options: ["Cor", "Pula linha", "Rápido", "Números"] },
    { id: 96, q: "Resolução do ADC do Arduino Mega:", options: ["8 bits", "10 bits (0-1023)", "12 bits", "16 bits"] },
    { id: 97, q: "DHT11 é digital ou analógico?", options: ["Analógico", "Digital (envia dados codificados)", "Mecânico", "Nenhum"] },
    { id: 98, q: "LED ligado invertido:", options: ["Pisca", "Não acende", "Explode", "Muda cor"] },
    { id: 99, q: "Objetivo da Rotação por Estações:", options: ["Parado", "Passar por pontos com tarefas variadas", "Copiar", "Competir"] }
];
