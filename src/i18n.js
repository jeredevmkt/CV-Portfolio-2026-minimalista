import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "navbar.home": "Home",
      "navbar.about": "About",
      "navbar.projects": "Projects",
      "navbar.resume": "Resume",
      "home.hello": "Hello Dear!",
      "home.iam": "I'm ",
      "home.find": "Social Media",
      "home.connect":
        'Feel free to <span className="purple">connect </span>with me',
      "footer.dev": "Developed by",
      "home2.letme":
        'LET ME <span className="purple"> INTRODUCE </span> MYSELF',
      "home2.iam":
        'I’m a Hi world, I’m Jere — a <i> <b className="purple"> Creative Developer and Content Specialist.</b></i><br />I help businesses and creators build high-quality digital experiences through a combination of<i><b className="purple"> web development, video editing, and AI-powered content. </b></i><br /><br />💻 <b className="purple">Web Development</b><br />I build modern, fast, and scalable websites and applications usingtechnologies like React, Next.js, and Node.js. Clean code,responsive design, and performance are always a priority.<br /><br />🎬 <b className="purple">Video Editing & Content Creation</b><br />I create engaging video content with a strong focus onstorytelling, clean edits, colour grading, and professional presentation — ideal for courses, social media, and branded content.<br /><br />🎨 <b className="purple">Design & AI Content</b><br />From graphic design to AI-generated visuals, I develop modern,consistent assets that align with your brand and stand out intoday’s digital space.<br /><br />📈 <b className="purple">Marketing & eCommerce</b><br />I also bring experience in social media marketing and eCommerce, helping projects not only look good, but perform.',
      "type.1": "Full Stack Web Developer",
      "type.2": "Social Media Marketing Ads Management",
      "type.3": "Wordpress, GHL, eCommerce, AI Specialist",
      "type.4": "MERN & Python Stack Developer",
      "about.iam": 'Know Who <strong className="purple">I am</strong>',
      "about.professional":
        'Professional <strong className="purple">Skillset </strong>',
      "about.tools": '<strong className="purple">Tools</strong> I use',
      "about.text":
        'Hello dear! I’m <span className="purple">Jere</span>  from <span className="purple">Buenos Aires, Argentina</span>.<br />I’m currently working as a <span className="purple">Web App Developer, AI Automation, Wordpress, GHL</span> as <span className="purple">Freelancer</span>.<br />I hold an Integrated  <span className="purple">Full Stack Web Development (MERN, PERN, Python)</span> from <span className="purple">Henry Bootcamp and Highschool</span>.<br /><br />Outside of coding, I love engaging in activities that keep me creative and inspired:',
      "about.1": "Traveling and Exploring New Places",
      "about.2": "Singing, Playing Guitar and Piano",
      "about.3": "Learning Courses and Reading Bible",
      "about.final": "Strive to build things that make a difference!",
      "github.days": 'Days I <strong className="purple">Code</strong>',
      "projects.recent": 'My Recent <strong className="purple">Works </strong>',
      "projects.here": "Here are a few projects I've worked on recently.",
      "projects.dc1":
        "Sass & CRM solutions, Designs, Developent and Management on GoHighLevel, Chatbots and Automations",
      "projects.dc2": "Funnel website for travel agency",
      "projects.dc3":
        "Portfolio Business Website for share services, online presence and obtain new clients",
      "projects.dc4":
        "Wordpress + WooCommerce website for a Croatian company that sells and rents boats.",
      "projects.dc5":
        "Modernization of 2 Mexican university websites that are used for their management and organization..",
      "projects.dc6":
        "This is the final Project of Soy Henry's graduation and 1st Team Project",
      "resume.download": "Download CV",
    },
  },
  es: {
    translation: {
      "navbar.home": "Inicio",
      "navbar.about": "Sobre mí",
      "navbar.projects": "Proyectos",
      "navbar.resume": "Currículum",
      "home.hello": "Saludos Cordiales,",
      "home.iam": "Soy",
      "home.find": "Redes",
      "home.connect":
        'Siéntete libre de <span className="purple">conectar </span>conmigo',
      "footer.dev": "Desarrollado por",
      "home2.letme": 'PERMÍTEME <span className="purple"> PRESENTARME </span>',
      "home2.iam":
        'Hola mundo, soy Jere — un <i> <b className="purple">   Desarrollador Creativo y Especialista en Contenido.</b></i><br />Ayudo a empresas y creadores a construir experiencias digitales de alta calidad combinando<i><b className="purple"> desarrollo web, edición de video y contenido impulsado por IA. </b></i><br /><br />💻 <b className="purple">Desarrollo Web</b><br />Construyo sitios web y aplicaciones modernas, rápidas y escalables utilizando tecnologías como React, Next.js y Node.js. El código limpio, el diseño responsivo y el rendimiento son siempre una prioridad.<br /><br />🎬 <b className="purple">Edición de Video y Creación de Contenido</b><br />Creo contenido audiovisual atractivo con un fuerte enfoque en el storytelling, edición fluida, corrección de color y presentación profesional — ideal para cursos, redes sociales y contenido de marca.<br /><br />🎨 <b className="purple">Diseño y Contenido con IA</b><br />Desde diseño gráfico hasta elementos visuales generados por IA, desarrollo recursos modernos y consistentes que se alinean con tu marca y destacan en el espacio digital actual.<br /><br />📈 <b className="purple">Marketing y Comercio Electrónico</b><br />También aporto experiencia en marketing de redes sociales y comercio electrónico (eCommerce), ayudando a que los proyectos no solo se vean bien, sino que den resultados.',
      "type.1": "Desarrollador Web Full Stack",
      "type.2": "Marketing en Redes Sociales y Gestión de Anuncios",
      "type.3": "Especialista en WordPress, GHL, eCommerce e IA",
      "type.4": "Desarrollador de Stack MERN y Python",
      "about.iam": 'Descubre quién <strong className="purple">soy</strong>',
      "about.professional":
        'Habilidades <strong className="purple">Profesionales </strong>',
      "about.tools":
        '<strong className="purple">Herramientas</strong> que utilizo',
      "about.text":
        '¡Hola! Soy <span className="purple">Jere</span>  de <span className="purple">Buenos Aires, Argentina</span>.<br />Actualmente trabajo de forma <span className="purple">Freelance</span> como <span className="purple">Desarrollador de Aplicaciones Web, Automatizaciones con IA, WordPress y GHL</span>.<br />Tengo una formación integral en  <span className="purple">Desarrollo Web Full Stack (MERN, PERN, Python)</span> de <span className="purple">Henry Bootcamp y la escuela secundaria</span>.<br /><br />Fuera de la programación, me encanta realizar actividades que me mantienen creativo e inspirado:',
      "about.1": "Viajar y explorar nuevos lugares",
      "about.2": "Cantar, tocar la guitarra y el piano",
      "about.3": "Aprender con cursos y leer la Biblia",
      "about.final":
        "¡Esfuérzate por construir cosas que marquen la diferencia!",
      "github.days": 'Días que <strong className="purple">programo</strong>',
      "projects.recent":
        'Mis trabajos <strong className="purple">recientes </strong>',
      "projects.here":
        "Aquí tienes algunos proyectos en los que he trabajado recientemente.",
      "projects.dc1":
        "Soluciones SaaS y CRM, diseño, desarrollo y gestión en GoHighLevel, chatbots y automatizaciones.",
      "projects.dc2": "Sitio web de embudo para una agencia de viajes.",
      "projects.dc3":
        "Sitio web corporativo tipo portafolio para compartir servicios, tener presencia en línea y captar nuevos clientes.",
      "projects.dc4":
        "Sitio web en WordPress + WooCommerce para una empresa croata que vende y alquila barcos.",
      "projects.dc5":
        "Modernización de 2 sitios web de universidades mexicanas utilizados para su gestión y organización.",
      "projects.dc6":
        "Este es el proyecto final de graduación de Soy Henry y mi primer proyecto en equipo.",
      "resume.download": "Descargar CV",
    },
  },
  pt: {
    translation: {
      "navbar.home": "Início",
      "navbar.about": "Sobre mim",
      "navbar.projects": "Projetos",
      "navbar.resume": "Currículo",
      "home.hello": "Olá!",
      "home.iam": "Eu sou ",
      "home.find": "Redes Sociais",
      "home.connect":
        'Sinta-se à vontade para <span className="purple">conectar-se </span>comigo',
      "footer.dev": "Desenvolvido por",
      "home2.letme": 'DEIXE-ME <span className="purple"> APRESENTAR-ME </span>',
      "home2.iam":
        'Olá mundo, sou o Jere — um <i> <b className="purple">  Desenvolvedor Criativo e Especialista em Conteúdo.</b></i><br />Ajudo empresas e criadores a construir experiências digitais de alta qualidade combinando<i><b className="purple"> desenvolvimento web, edição de vídeo e conteúdo impulsionado por IA. </b></i><br /><br />💻 <b className="purple">Desenvolvimento Web</b><br />Construo sites e aplicativos modernos, rápidos e escaláveis utilizando tecnologias como React, Next.js e Node.js. Código limpo, design responsivo e desempenho são sempre uma prioridade.<br /><br />🎬 <b className="purple">Edição de Vídeo e Criação de Conteúdo</b><br />Crio conteúdo em vídeo atraente com um forte foco em storytelling, edições fluidas, correção de cor e apresentação profissional — ideal para cursos, redes sociais e conteúdo de marca.<br /><br />🎨 <b className="purple">Design e Conteúdo com IA</b><br />Desde design gráfico até elements visuais gerados por IA, desenvolvo recursos modernos e consistentes que se alinham com a sua marca e se destacam no espaço digital atual.<br /><br />📈 <b className="purple">Marketing e E-commerce</b><br />Também trago experiência em marketing de redes sociais e e-commerce, ajudando os projetos não apenas a terem uma boa aparência, mas também a darem resultados.',
      "type.1": "Desenvolvedor Web Full Stack",
      "type.2": "Marketing de Redes Sociais e Gestão de Anúncios",
      "type.3": "Especialista em WordPress, GHL, E-commerce e IA",
      "type.4": "Desenvolvedor de Stack MERN e Python",
      "about.iam": 'Descubra quem <strong className="purple">eu sou</strong>',
      "about.professional":
        'Habilidades <strong className="purple">Profissionais </strong>',
      "about.tools":
        '<strong className="purple">Ferramentas</strong> que utilizo',
      "about.text":
        'Olá! Sou o <span className="purple">Jere</span>  de <span className="purple">Buenos Aires, Argentina</span>.<br />Atualmente trabalho como <span className="purple">Freelancer</span> atuando no <span className="purple">Desenvolvimento de Web Apps, Automações de IA, WordPress e GHL</span>.<br />Tenho uma formação integral em  <span className="purple">Desenvolvimento Web Full Stack (MERN, PERN, Python)</span> pelo <span className="purple">Henry Bootcamp e ensino médio</span>.<br /><br />Fora da programação, adoro realizar atividades que me mantêm criativo e inspirado:',
      "about.1": "Viajar e explorar novos lugares",
      "about.2": "Cantar, tocar guitarra e piano",
      "about.3": "Aprender com cursos e ler a Bíblia",
      "about.final": "Esforce-se para construir coisas que façam a diferença!",
      "github.days": 'Dias que <strong className="purple">programo</strong>',
      "projects.recent":
        'Meus trabalhos <strong className="purple">recentes </strong>',
      "projects.here":
        "Aqui estão alguns projetos em que trabalhei recentemente.",
      "projects.dc1":
        "Soluções SaaS e CRM, design, desenvolvimento e gestão em GoHighLevel, chatbots e automações.",
      "projects.dc2": "Site de funil para uma agência de viagens.",
      "projects.dc3":
        "Site corporativo tipo portafolio para compartilhar serviços, marcar presença online e captar novos clientes.",
      "projects.dc4":
        "Site em WordPress + WooCommerce para uma empresa croata que vende e aluga barcos.",
      "projects.dc5":
        "Modernização de 2 sites de universidades mexicanas utilizados para sua gestão e organização.",
      "projects.dc6":
        "Este é o projeto final de graduação da Soy Henry e meu primeiro projeto em equipe.",
      "resume.download": "Baixar CV",
    },
  },
  de: {
    translation: {
      "navbar.home": "Startseite",
      "navbar.about": "Über mich",
      "navbar.projects": "Projekte",
      "navbar.resume": "Lebenslauf",
      "home.hello": "Hallo!",
      "home.iam": "Ich bin ",
      "home.find": "Soziale Medien",
      "home.connect":
        'Zögern Sie nicht, sich mit mir zu <span className="purple">verbinden</span>',
      "footer.dev": "Entwickelt von",
      "home2.letme":
        'LASSEN SIE MICH <span className="purple"> MICH VORSTELLEN </span>',
      "home2.iam":
        'Hallo Welt, ich bin Jere — ein <i> <b className="purple">   kreativer Entwickler und Inhaltsspezialist.</b></i><br />Ich helfe Unternehmen und Kreativen, hochwertige digitale Erlebnisse durch eine Kombination aus<i><b className="purple"> Webentwicklung, Videobearbeitung und KI-gestützten Inhalten </b></i> zu erstellen.<br /><br />💻 <b className="purple">Webentwicklung</b><br />Ich erstelle moderne, schnelle und skalierbare Websites und Anwendungen mit Technologien wie React, Next.js und Node.js. Sauberer Code, responsives Design und Performance haben immer Priorität.<br /><br />🎬 <b className="purple">Videobearbeitung & Inhaltserstellung</b><br />Ich erstelle ansprechende Videoinhalte mit starkem Fokus auf Storytelling, saubere Schnitte, Farbkorrektur und professionelle Präsentation — ideal für Kurse, soziale Medien und Markeninhalte.<br /><br />🎨 <b className="purple">Design & KI-Inhalte</b><br />Von Grafikdesign bis hin zu KI-generierten visuellen Effekten entwickle ich moderne, konsistente Assets, die zu Ihrer Marke passen und im heutigen digitalen Raum auffallen.<br /><br />📈 <b className="purple">Marketing & E-Commerce</b><br />Ich bringe auch Erfahrung im Social-Media-Marketing und E-Commerce mit, um Projekten zu helfen, nicht nur gut auszusehen, sondern auch Leistung zu erbringen.',
      "type.1": "Full-Stack-Webentwickler",
      "type.2": "Social Media Marketing & Anzeigenverwaltung",
      "type.3": "Spezialist für WordPress, GHL, E-Commerce & KI",
      "type.4": "MERN- & Python-Stack-Entwickler",
      "about.iam":
        'Erfahren Sie, wer <strong className="purple">ich bin</strong>',
      "about.professional":
        'Professionelle <strong className="purple">Fähigkeiten </strong>',
      "about.tools":
        '<strong className="purple">Werkzeuge</strong>, die ich benutze',
      "about.text":
        'Hallo! Ich bin <span className="purple">Jere</span>  aus <span className="purple">Buenos Aires, Argentinien</span>.<br />Derzeit arbeite ich als <span className="purple">Freelancer</span> im Bereich <span className="purple">Web-App-Entwicklung, KI-Automatisierung, WordPress und GHL</span>.<br />Ich habe eine umfassende Ausbildung im  <span className="purple">Full-Stack-Webentwicklung (MERN, PERN, Python)</span> vom<span className="purple">Henry Bootcamp und der Oberschule</span> absolviert.<br /><br />Abseits des Codierens liebe ich Aktivitäten, die mich kreativ halten und inspirieren:',
      "about.1": "Reisen und neue Orte erkunden",
      "about.2": "Singen, Gitarre und Klavier spielen",
      "about.3": "Kurse belegen und in der Bibel lesen",
      "about.final":
        "Streben Sie danach, Dinge zu bauen, die einen Unterschied machen!",
      "github.days":
        'Tage, an denen ich <strong className="purple">code</strong>',
      "projects.recent":
        'Meine aktuellen <strong className="purple">Arbeiten </strong>',
      "projects.here":
        "Hier sind ein paar Projekte, an denen ich kürzlich gearbeitet habe.",
      "projects.dc1":
        "SaaS- und CRM-Lösungen, Design, Entwicklung und Verwaltung auf GoHighLevel, Chatbots und Automatisierungen.",
      "projects.dc2": "Funnel-Website für ein Reisebüro.",
      "projects.dc3":
        "Portfolio-Business-Website zur Präsentation von Dienstleistungen, Online-Präsenz und Neukundengewinnung.",
      "projects.dc4":
        "WordPress + WooCommerce Website für ein kroatisches Unternehmen, das Boote verkauft und vermietet.",
      "projects.dc5":
        "Modernisierung von 2 mexikanischen Universitäts-Websites, die für deren Verwaltung und Organisation genutzt werden.",
      "projects.dc6":
        "Dies ist das abschließende Abschlussprojekt von Soy Henry und mein erstes Teamprojekt.",
      "resume.download": "Lebenslauf herunterladen",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma inicial por defecto
  fallbackLng: "en", // Si falta una traducción en ES, usa EN
  interpolation: {
    escapeValue: false, // React ya protege contra ataques XSS
  },
});

export default i18n;
