// =============================================
// DATOS COMPLETOS DE FILOSOFÍA
// =============================================
const units = [
    {
        id: 'intro', title: 'Introducción a la Filosofía', icon: 'fa-scroll', color: '#00D4AA',
        lessons: [
            {
                id: 'que-es-filosofia', title: '¿Qué es la filosofía?',
                questions: [
                    { type: 'mc', q: '¿Qué significa la palabra "filosofía" en griego?', o: ['Amor a la sabiduría', 'Estudio de la naturaleza', 'Arte de debatir', 'Búsqueda de poder'] },
                    { type: 'tf', q: 'La filosofía como disciplina sistemática se originó en la antigua Roma.', a: false },
                    { type: 'mc', q: '¿Quién es considerado el primer filósofo de la tradición occidental?', o: ['Tales de Mileto', 'Sócrates', 'Platón', 'Aristóteles'] },
                    { type: 'mc', q: '¿Cuál de estas NO es una rama tradicional de la filosofía?', o: ['Astronomía', 'Ética', 'Metafísica', 'Lógica'] },
                    { type: 'match', i: 'Conecta cada filósofo con su idea', p: [['Tales de Mileto', 'El agua es el principio de todo'], ['Heráclito', 'Todo fluye, nada permanece'], ['Pitágoras', 'Los números rigen el universo'], ['Demócrito', 'Todo está compuesto de átomos']] }
                ]
            },
            {
                id: 'presocraticos', title: 'Los Presocráticos',
                questions: [
                    { type: 'mc', q: '¿Qué elemento consideraba Tales como principio fundamental (arjé)?', o: ['El agua', 'El fuego', 'El aire', 'La tierra'] },
                    { type: 'mc', q: '¿Quién afirmó que "Todo fluye" (Panta rhei)?', o: ['Heráclito', 'Parménides', 'Anaxímenes', 'Tales de Mileto'] },
                    { type: 'tf', q: 'Parménides defendía que el cambio y el movimiento son reales e indudables.', a: false },
                    { type: 'mc', q: '¿Qué buscaban fundamentalmente los filósofos presocráticos?', o: ['El arjé (principio primero)', 'La mejor forma de gobierno', 'El sentido de la vida', 'La existencia de los dioses'] },
                    { type: 'fill', q: 'Empédocles propuso que todo está compuesto por cuatro raíces: tierra, agua, aire y _____.', a: 'fuego' }
                ]
            }
        ]
    },
    {
        id: 'logica', title: 'Lógica', icon: 'fa-brain', color: '#818CF8',
        lessons: [
            {
                id: 'proposiciones', title: 'Proposiciones y Argumentos',
                questions: [
                    { type: 'mc', q: '¿Qué es una proposición en lógica?', o: ['Un enunciado que puede ser verdadero o falso', 'Una pregunta retórica', 'Una orden o mandato', 'Una exclamación emocional'] },
                    { type: 'tf', q: '"¡Abre la puerta de inmediato!" es una proposición lógica válida.', a: false },
                    { type: 'mc', q: '¿Cuántas premisas tiene un silogismo clásico?', o: ['Dos', 'Una', 'Tres', 'Ninguna'] },
                    { type: 'fill', q: 'En lógica, un _____ es un razonamiento que parte de premisas para llegar a una conclusión.', a: 'argumento' },
                    { type: 'mc', q: '¿Cuál es un ejemplo de falacia ad hominem?', o: ['Atacar a la persona en vez de su argumento', 'Cambiar de tema durante el debate', 'Usar estadísticas falsas', 'Repetir lo mismo sin pruebas'] }
                ]
            },
            {
                id: 'falacias', title: 'Falacias L
