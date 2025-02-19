(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   
    //preguntas
    const questions = [
            {//0
                text: "¿Cuál es tu nivel academico?",
                options: [
                    {text: "Educación Medía", next: 1},
                    {text: "Educación Básica", next: 2},
                ]
            },
            {//1
                text: "¿Cuál es tu promedio de notas?",
                options: [
                    {text: "8 a 10", next: 4},
                    {text: "Menor a 8", next: 3}
                ]
            },
            {//2
                text: "Lo sentimos, pero solo ofrecemos becas para universidades",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
            {//3
                text: "Lo sentimos, tus notas no estan bajo los estandares requeridos",
                options: [{text: "Regresar", next: 0}]
            },
            {//4
                text: "Eres mayor de edad",
                options: [
                    {text: "Sí", next: 5},
                    {text: "No", next: 12}
                ]
            },
            {//5
                text: "Trabajas actualmente",
                options: [
                    {text: "Sí", next: 6},
                    {text: "No", next: 9}
                ]
            },
            {//6
                text: "¿Tus ingresos son mayor que el minimo",
                options: [
                    {text: "Sí", next: 7},
                    {text: "No", next: 8}
                ]
            },
            {//7
                text: "Lo sentimos, tu salario excede la cantidad para obtener una beca",
                options: [
                {text: "Regresar", next: 0}
                ]
            } ,      
            {//8
                text: "¿Cuál es tu área de estudio?",
                options: [
                {text: "Ingenierias", next: 14},
                {text: "Salud", next: 34},
                {text: "Economia", next: 49},
                {text: "Humanistica", next: 57}
                ]
            },
            {//9
                text: "¿Dependes de tus padres?",
                options: [
                {text: "Sí", next: 10},
                {text: "No", next: 8}
                ]
            },
            {//10
                text: "El ingreso de tus padres es mayor que el minimo",
                options: [
                {text: "Sí", next: 11},
                {text: "No", next: 8}
                ]
            },
            {//11
                text: "Lo sentimos, por el momento no aplicas a nuestras becas",
                options: [
                {text: "Regresar", next: 0}
                ]
            },
        {//12
            text: "Dependes de tus padres",
                options: [
                {text: "Sí", next: 13},
                {text: "No", next: 8}
                ]
        },
        {//13
            text: "El ingreso de tus padres es mayor que el minimo",
                options: [
                {text: "Sí", next: 11},
                {text: "No", next: 8}
                ]
        },
        {//14
            text: "¿Te gusta la matemática y la resolución de problemas lógicos?",
                options: [
                {text: "Sí", next: 15},
                {text: "No", next: 23}
                ]
        },
        {//15
            text: " ¿Posee conocimientos de lenguajes de programación?",
                options: [
                {text: "Sí", next: 16},
                {text: "No", next: 19}
                ]
        },
        {//16
            text: "¿Posee conocimientos  de software hardware?",
                options: [
                {text: "Sí", next: 17},
                {text: "No", next: 18}
                ]
        },
        {//17
            text: "De acuerdo a tu perfil, identificamos que posee las siguientes cualidades cualidades de logica, analisis, conocimiento de equipos tecnologicos, por lo cual te recomendamos ING En sistema, Desarrollo de soft o ciencias de la computacion, Universidades Recomendadas:\n* Universidad de El Salvador UES\n* Universidad Dr. Andrés Bello UNAB\n* Universidad Don Bosco\n* Universidad de Sonsonate USO\n* Universidad Pedagógica de El Salvador\n* Universidad Tecnológica de El Salvador UTEC",
                options: [
                {text: "Regresar", next: 0}
                
                ]
        },
        {//18
            text: "Te recomendamos otra área de estudio",
                options: [
               {text: "Regresar", next: 8}
                ]
        },
        {//19
            text: "¿te gusta realizar proyectos electrónicos",
                options: [
                {text: "Sí", next: 20},
                {text: "No", next: 18}
                ]
        },
        {//20
            text: "¿Te resulta fácil comprender conceptos de física, como la electricidad, el magnetismo y las ondas electromagnéticas?",
                options: [
                {text: "Sí", next: 21},
                {text: "No", next: 18}
                ]
        },
        {//21
            text: "¿Te gustaría contribuir al desarrollo de soluciones que reduzcan el impacto ambiental de las tecnologías energéticas?",
                options: [
                {text: "Sí", next: 22},
                {text: "No", next: 18}
                ]
        },
        {//22
            text: "De acuerdo a tu perfil, identificamos que posee las siguientes cualidades cualidades de lógica, análisis, y habilidades para la física o conocimientos eléctricos por lo cual te recomendamos ING eléctrica, Universidades Recomendadas:\n* Universidad de Sonsonate USO\n* Universidad Centroamericana José Simeón Cañas\n* Universidad de El Salvador UES\n* Universidad Católica de El Salvador\n* Universidad Don Bosco",
                options: [
                {text: "Regresar", next: 0}
                ]
        },
        {//23-------------------------------------------------------------
            text: "¿Te gustaría trabajar en proyectos de construcción?",
                options: [
                {text: "Sí", next:24},
                {text: "No", next:30}
                ]
        },
    
    {//-------------------------------------------------------------
            text: "¿Tienes habilidades para el diseño gráfico o modelado 3D?",
                options: [
                {text: "Sí", next: 25},
                {text: "No", next: 28}
                ]
        },
    {//-------------------------------------------------------------
            text: "¿Te interesa la construcción de estructuras?",
                options: [
                {text: "Sí", next: 26},
                {text: "No", next: 18}
                ]
        },
      
    {//-------------------------------------------------------------
            text: "¿Te interesa la física, especialmente en temas de fuerzas y materiales?",
                options: [
                {text: "Sí", next:27},
                {text: "No", next: 18}
                ]
        },
     {//-------------------------------------------------------------
           text: "Te recomendamos la carrera de Ingeniería Civil, Universidades Recomendadas:\n* Universidad Centroamericana José Simeón Cañas\n* Universidad Católica de El Salvador\n* Universidad Gerardo Barrios\n* Universidad de El Salvador UES\n* Universidad Pedagógica de El Salvador",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
    {//-------------------------------------------------------------
            text: "¿Te llama la atención gestionar recursos, tiempos y presupuestos en obra?",
                options: [
                {text: "Sí", next: 29},
                {text: "No", next: 18}
                ]
        },
     {//-------------------------------------------------------------
           text: "Te recomendamos la carrera de Ingeniería en Construcciónl, Universidades Recomendadas:\n* Universidad Politécnica de El Salvador\n* Universidad Católica de El Salvador\n* Universidad Centroamericana José Simeón Cañas\n* Universidad Gerardo Barrios",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
        {//-------------------------------------------------------------
            text: "¿Prefieres trabajar en el campo o en una oficina?",
                options: [
                {text: "Sí", next: 31},
                {text: "No", next: 18}
                ]
        },
    
     {//-------------------------------------------------------------
            text: "¿Te interesa mejorar la productividad de un equipo o empresa mediante la gestión eficiente de recursos?",
                options: [
                {text: "Sí", next: 32},
                {text: "No", next: 18}
                ]
        },
     {//-------------------------------------------------------------
            text: "¿Te interesa la automatización de tareas repetitivas o peligrosas en entornos industriales?",
                options: [
                {text: "Sí", next: 33},
                {text: "No", next: 18}
                ]
        },
         {//33-------------------------------------------------------------
           text: "De acuerdo a tu perfil, identificamos que posee las siguientes cualidades cualidades como en trabajo en equipo, gestión de eficiente de recursos, trabajos de automatización y en el área industrial, por lo cual te recomendamos ING. Industrial, Universidades Recomendadas:\n* Universidad de Sonsonate USO\n* Universidad Tecnológica de El Salvador UTEC\n* Universidad Pedagógica de El Salvador\n* Universidad Politécnica de El Salvador\n* Universidad de El Salvador UES\n* Universidad Centroamericana José Simeón Cañas",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
            {//
        text: "¿Te atrae la idea de trabajar con diferentes enfoques y métodos terapéuticos para ayudar a una persona a superar sus desafíos? ❤️‍🩹",
        options: [
            {text: "Sí ✅", next: 35},
            {text: "No ❌", next: 40}
        ]
    },
    {//
        text: "¿Te gustaría investigar cómo los diferentes factores (biológicos, sociales, emocionales) afectan el comportamiento y la salud mental? 🧠💙",
        options: [
            {text: "Sí ✅", next: 36},
            {text: "No ❌", next: 18}
        ]
    },
    {//13
        text: "¿Te gustaría estudiar temas relacionados con el desarrollo humano, la cognición, la motivación y las emociones? 🌍🏥",
        options: [
            {text: "Sí ✅", next: 37},
            {text: "No ❌", next: 18}
        ]
    },
    {//2
        text: "✨ ¡Increíble! ✨ Veo que tienes vocación por la salud mental y ayudar a los demás. Basado en tus intereses, te recomiendo considerar la carrera de **Psicología** 🧠📚. Es una profesión hermosa donde podrás guiar y apoyar a muchas personas en su bienestar emocional. 💙 Universidades Recomendadas:\n* Universidad Dr. Andrés Bello UNAB\n* Universidad Pedagógica de El Salvador\n* Universidad Modular Abierta UMA\n* Universidad Tecnológica de El Salvador UTEC\n* Universidad de El Salvador UES\n* Universidad Dr. José Matías Delgado\n* Universidad Centroamericana José Simeón Cañas",
        options: [
            {text: "Regresar 🔄", next: 0}
        ]
    },
    {//13
        text: "¿Estarías dispuesto/a a estudiar en el área investigativa medica? 🎓📖",
        options: [
            {text: "Sí ✅", next: 39},
            {text: "No ❌", next: 18}
        ]
    },
    {//2
        text: "🔬✨ ¡Tu interés en la investigación médica es admirable! Basado en tus respuestas, te sugerimos explorar la carrera de **Investigación Médica**. Aquí podrás desarrollar nuevos tratamientos, analizar enfermedades y mejorar la calidad de vida de muchas personas. 🏥🔍",
        options: [
            {text: "Regresar 🔄", next: 0}
        ]
    },
    {//13
        text: "¿Te atrae la idea de diagnosticar y tratar enfermedades, así como ayudar en la prevención de problemas de salud?💉",
        options: [
            {text: "Sí ✅", next: 41},
            {text: "No ❌", next: 18}
        ]
    },
    {//13
        text: "¿¿Te sientes cómodo analizando síntomas, realizando diagnósticos y tomando decisiones sobre el tratamiento de los pacientes?? 🔪🩺",
        options: [
            {text: "Sí ✅", next: 42},
            {text: "No ❌", next: 45}
        ]
    },
    {//13
        text: "¿Te gustaría colaborar con otros especialistas para proporcionar el mejor tratamiento posible a los pacientes?🏥💙",
        options: [
            {text: "Sí ✅", next: 43},
            {text: "No ❌", next: 18}
        ]
    },
    {//2
        text: "✨ ¡Qué genial! ✨ Basado en tus respuestas, te recomendamos la carrera de **Medicina General**. 🏥💉 Esta profesión te permitirá atender pacientes, diagnosticar enfermedades y mejorar la calidad de vida de muchas personas. ¡Tu vocación por la salud es inspiradora! 💙👨‍⚕️👩‍⚕️ Universidades Recomendadas:\n* Universidad Católica de El Salvador\n* Universidad de El Salvador UES\n* Universidad Salvadoreña Alberto Masferrer\n* Universidad Evangélica de El Salvador\n* Universidad Gerardo Barrios",
        options: [
            {text: "Regresar 🔄", next: 0}
        ]
    },
    {//2 Este NOOOOOOOO
        text: "🌟 Veo que tienes un gran interés en el ámbito de la salud. Basado en tus respuestas, te recomendamos la **Licenciatura en Medicina**. 🏥💊 Con esta formación, podrás adquirir conocimientos generales y especializarte en diversas ramas médicas. ¡Tu dedicación será clave para salvar vidas! 💙✨",
        options: [
            {text: "Regresar 🔄", next: 0}
        ]
    },
    {//13
        text: "¿Te sientes capaz de mantener la calma y tomar decisiones bajo presión en situaciones de emergencia? 🚑🆘",
        options: [
            {text: "Sí ✅", next: 46},
            {text: "No ❌", next: 18}
        ]
    },
    {//13
        text: "¿Te gustaría llevar un control detallado de los tratamientos y evolución de los pacientes? 📋💙",
        options: [
            {text: "Sí ✅", next: 47},
            {text: "No ❌", next: 18}
        ]
    },
    {//13
        text: "¿Te interesa trabajar en distintos entornos, como hospitales, clínicas, comunidades rurales o en emergencias? 🏥🚑",
        options: [
            {text: "Sí ✅", next: 48},
            {text: "No ❌", next: 18}
        ]
    },
    {//48
        text: "🎉 ¡Tu perfil es increíble! 🎉 Según tus respuestas, tienes habilidades clave como la capacidad de actuar bajo presión, llevar control de procedimientos y adaptarte a distintos entornos de trabajo. Te sugerimos la **Licenciatura en Enfermería** 🩺💙, una profesión donde podrás brindar atención esencial y mejorar la vida de muchas personas. ¡Tu vocación es admirable!, Universidades Recomendadas:\n* Universidad Dr. Andrés Bello UNAB\n* Universidad Católica de El Salvador\n* Universidad Dr. José Matías Delgado\n* Universidad de El Salvador UES\n* Universidad Salvadoreña Alberto Masferrer\n* Instituto Especializado en Profesionales de la Salud ✨",
        options: [
            {text: "Regresar 🔄", next: 0}
        ]
    },
    //ECONOMIA
    //Contaduría pública
    {
        text: "¿Te gustaría ser responsable de mantener las finanzas de una empresa de manera organizada y clara? 💼💰",
        options: [
            {text: "Sí ✅", next: 50},
            {text: "No ❌", next: 54}
        ]
    },
    
    {
        text: "¿Te gustaría aplicar tus habilidades matemáticas y lógicas para ayudar a las empresas a gestionar sus recursos de manera eficiente? 📊🤔",
        options: [
            {text: "Sí ✅", next: 51},
            {text: "No ❌", next: 18}
        ]
    },
    
    {
        text: "¿Te interesa aprender sobre los principios económicos que afectan las decisiones financieras de una organización? 📚💡",
        options: [
            {text: "Sí ✅", next: 52},
            {text: "No ❌", next: 18}
        ]
    },
    
    {
        text: "¿Te gustaría trabajar en la planificación financiera a largo plazo para garantizar la estabilidad económica de una organización? 📈🛡️",
        options: [
            {text: "Sí ✅", next: 53},
            {text: "No ❌", next: 18}
        ]
    },
    
    {
        text: "Nuestra recomendación es: Licenciatura en Contaduría Pública 📜🎓 Universidades Recomendadas:\n* Universidad de Sonsonate USO\n* Universidad Tecnológica de El Salvador UTEC\n* Universidad Don Bosco\n* Universidad Dr. José Matías Delgado\n* Universidad de El Salvador UES\n* Universidad Pedagógica de El Salvador\n* Universidad Modular Abierta UMA\n* Universidad Dr. Andrés Bello UNAB",
        options: [
            {text: "Regresar 🔙", next: 0}
        ]
    },
    
    // Administración de empresas
    {
        text: "¿Tienes una visión a largo plazo y puedes tomar decisiones en beneficio del futuro de la organización? 🌅📆",
        options: [
            {text: "Sí ✅", next: 55},
            {text: "No ❌", next: 18}
        ]
    },
    
    {
        text: "¿Te atrae la idea de coordinar equipos de trabajo y asegurarte de que todos estén alineados con los objetivos organizacionales en el área empresarial? 👥🎯",
        options: [
            {text: "Sí ✅", next: 56},
            {text: "No ❌", next: 18}
        ]
    },
    
    {
        text: "De acuerdo a tu perfil, identificamos que posees cualidades de organización y administración de equipos de trabajo y toma de decisiones estratégicas en el desarrollo empresarial, por lo cual te recomendamos la LIC. en Administración de Empresas 📈🏢 Universidades Recomendadas:\n* Universidad de Sonsonate USO\n* Universidad Tecnológica de El Salvador UTEC\n* Universidad Don Bosco\n* Universidad Dr. José Matías Delgado\n* Universidad de El Salvador UES\n* Universidad Pedagógica de El Salvador\n* Universidad Modular Abierta UMA\n* Universidad Dr. Andrés Bello UNAB",
        options: [
            {text: "Regresar 🔙", next: 0}
        ]
    },//--------------------------------------------------------------------------------------
    //--------------------Parte Humanidades------------------------------Douglas
    
     {//57-------------------------------------------------------------
        text: "¿Te gustaría contribuir al desarrollo de una sociedad mejor a través de la educación?",
                options: [
                {text: "Sí", next: 58},
                {text: "No", next: 61}
                ]
        },
     {//58-------------------------------------------------------------
            text: "¿Te sientes motivado al ver el progreso de otros, incluso si ese progreso es pequeño o gradual?",
                options: [
                {text: "Sí", next: 59},
                {text: "No", next: 18}
                ]
        },
     {//59-------------------------------------------------------------
            text: "-¿Te atrae la idea de diseñar y presentar actividades que faciliten el aprendizaje de los estudiantes?",
                options: [
                {text: "Sí", next: 60},
                {text: "No", next: 18}
                ]
        },
     {//60-------------------------------------------------------------
           text: "Te recomendamos la carrera de Licenciatura en educacion, Universidades Recomendadas:\n* Universidad de El Salvador UES\n* Universidad Tecnológica de El Salvador UTEC\n* Universidad Pedagógica de El Salvador\n* Universidad Don Bosco\n* Universidad de Sonsonate USO",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
    
     {//-------------------------------------------------------------
            text: "¿Te gustaría ser parte del proceso de intervención para mejorar las condiciones de vida de personas vulnerables?",
                options: [
                {text: "Sí", next: 62},
                {text: "No", next: 65}
                ]
        },
     {//-------------------------------------------------------------
            text: "¿Te atrae la idea de trabajar con personas que enfrentan situaciones de estrés, ansiedad, o conflicto?",
                options: [
                {text: "Sí", next: 63},
                {text: "No", next: 18}
                ]
        },
    
     {//-------------------------------------------------------------
            text: "¿Te interesa mejorar el acceso a servicios básicos como salud, educación y vivienda para las comunidades más necesitadas?",
                options: [
                {text: "Sí", next: 64},
                {text: "No", next: 18}
                ]
        },
    
      {//-------------------------------------------------------------
           text: "Te recomendamos la carrera de Trabajo social, Universidades Recomendadas:\n* Universidad Pedagógica de El Salvador\n* Universidad de El Salvador UES\n* Universidad Dr. Andrés Bello UNAB\n* Universidad Tecnológica de El Salvador UTEC ",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
     {//-------------------------------------------------------------
            text: "¿Te interesa comprender cómo funcionan las leyes y cómo influyen en las relaciones entre las personas y las instituciones?",
                options: [
                {text: "Sí", next: 66},
                {text: "No", next: 18}
                ]
        },
    
         {//-------------------------------------------------------------
            text: "¿Te gustaría defender una causa, ya sea en tribunales o en otros ámbitos, usando tus habilidades de persuasión?",
                options: [
                {text: "Sí", next: 67},
                {text: "No", next: 18}
                ]
        },
    
       {//-------------------------------------------------------------
            text: "¿Te atrae la idea de estudiar la evolución de las leyes y cómo pueden adaptarse a los cambios sociales?",
                options: [
                {text: "Sí", next: 68},
                {text: "No", next: 18}
                ]
        },
    
     {//-------------------------------------------------------------
           text: "Te recomendamos la carrera de ciencias jurídicas, Universidades Recomendadas:\n* Universidad de Sonsonate USO\n* Universidad Modular Abierta UMA\n* Universidad de El Salvador UES\n* Universidad Tecnológica de El Salvador UTEC\n* Universidad Pedagógica de El Salvador\n* Universidad Centroamericana José Simeón Cañas\n* Universidad Dr. José Matías Delgado",
                options: [
                    {text: "Regresar", next: 0}
                ]
            },
    



    ];

    let currentQuestion = 0;

    function showQuestion() {
        const quizContainer = document.getElementById('quiz');
        quizContainer.innerHTML = '';

        const question = questions[currentQuestion];
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.textContent = question.text;

        quizContainer.appendChild(questionElement);

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = option.text;
            button.onclick = () => {
                currentQuestion = option.next;
                showQuestion();
            };
            quizContainer.appendChild(button);
        });
    }

    showQuestion();
    
})(jQuery);

