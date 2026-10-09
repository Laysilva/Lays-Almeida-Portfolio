import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const content = {
  "pt-BR": {
    nav: ["Sobre", "Experiência", "Projetos", "Competências"],
    eyebrow: "PORTFÓLIO PROFISSIONAL · TECNOLOGIA",
    title: <>Tecnologia que conecta<br /><span>pessoas, processos e soluções.</span></>,
    intro: "Sou profissional de tecnologia com experiência multidisciplinar em desenvolvimento de sistemas, qualidade de software, automação de processos e análise de dados.",
    primary: "Explorar projetos", secondary: "Ver LinkedIn",
    location: "Brasil · Aberta a oportunidades internacionais",
    aboutTitle: "Uma trajetória entre desenvolvimento, qualidade e dados.",
    about: "Minha trajetória combina desenvolvimento web e de sistemas, qualidade de software, automação e análise de dados. Já contribuí para serviços digitais no setor público, soluções operacionais ligadas à logística marítima e produtos próprios. Essa visão multidisciplinar permite conectar necessidades de negócio, implementação técnica, validação e melhoria contínua.",
    experienceTitle: "Experiência profissional",
    experienceSub: "Uma visão geral da minha trajetória em tecnologia.",
    projectsTitle: "Projetos em destaque",
    projectsSub: "Experiências e produtos apresentados com foco no problema, na contribuição e nas tecnologias confirmadas.",
    skillsTitle: "Competências e tecnologias",
    skillsSub: "Ferramentas e áreas de atuação mencionadas na minha experiência profissional e nos meus projetos.",
    contactTitle: "Vamos conversar?",
    contact: "Estou aberta a conversar sobre oportunidades em desenvolvimento, QA, automação e dados.",
    email: "Enviar e-mail",
    footer: "Feito com cuidado por Lays Almeida.",
    contactEyebrow: "05 / CONTATO",
    footerBrand: "PORTFÓLIO PROFISSIONAL",
    backTop: "Voltar ao topo ↑",
    facts: ["Áreas de atuação", "Idiomas no portfólio", "Trajetória multidisciplinar"],
    ticker: ["DESENVOLVIMENTO DE SOFTWARE", "QUALIDADE DE SOFTWARE", "AUTOMAÇÃO", "DADOS & BI"],
    roles: [
      { org: "Vivo / Vita", period: "11/2025 — atual", role: "Analista de Qualidade e Processos Jr.", desc: "Atuação em qualidade de software e processos: execução de testes funcionais, validação de requisitos e funcionalidades, testes de APIs com Postman, testes de aplicações front-end, execução de testes automatizados e organização de evidências para rastreabilidade. Também desenvolvo automações com Java e Python e trabalho com comunicação entre páginas web e bases de dados utilizando Spring.", },
      { org: "Open Labs", period: "06/2024", role: "Análise de dados e bancos de dados", desc: "Análise e consulta de dados em ambiente Oracle, utilização de PL/SQL para apoiar e otimizar processos de telecomunicações e investigação de incidentes relacionados com infraestrutura de cabo e fibra óptica. Experiência que combina análise de dados, bases de dados e resolução técnica de problemas.", },
      { org: "Ablank IT · contrato Petrobras", period: "09/2022 — 07/2023", role: "BI e desenvolvimento de soluções", desc: "Desenvolvimento de dashboards em Power BI para análise de navios e combustíveis — incluindo indicadores relacionados com OCM, MF e VLSFO/Bunker. Criação de uma aplicação interna para facilitar a comunicação operacional entre a base, plataformas e navios, com cálculo de autonomia ou distância estimada a partir do combustível disponível; utilização de Power Apps e Power Automate. Também desenvolvi um site interno para apoiar rotinas operacionais.", },
      { org: "Secretaria de Cultura e Economia Criativa do Estado do Rio de Janeiro", period: "02/2019 — 09/2022", role: "Dados, sistemas e tecnologia", desc: "Atuação multidisciplinar com bases MySQL e SQL Server, desenvolvimento, análise e suporte de sistemas, integração e manutenção de sites, criação de formulários, dashboards Power BI e soluções avançadas em Excel. Desenvolvimento de páginas e formulários com HTML, CSS, Java, JavaScript e PHP, além de utilização de Python com SQL Server e suporte de infraestrutura. Integrei a equipe no período de implementação do Desenvolve Cultura RJ.", }
    ],
    projects: [
      { n: "01", title: "Site do Theatro Municipal do Rio de Janeiro", category: "DESENVOLVIMENTO WEB", desc: "Desenvolvi o site institucional do Theatro Municipal do Rio de Janeiro, contribuindo para a presença digital de uma instituição cultural de referência. Após a publicação, o conteúdo segue ativo sendo modificadas apenas atualizações rotineiras, incluindo a agenda de espetáculos e informações institucionais. O trabalho combinou entrega do site e continuidade do suporte editorial, garantindo que o público tivesse acesso às informações atualizadas.", tags: ["Desenvolvimento web", "Site institucional", "Atualização de conteúdo"], status: "Experiência profissional", visual: "theatre" },
      { n: "02", title: "Desenvolve Cultura RJ", category: "SISTEMA PÚBLICO", desc: "Em 2020, integrei a equipe de implementação do Desenvolve Cultura RJ como desenvolvedora Full-Stack. A plataforma digital apoia a gestão do fomento cultural público, organizando etapas como submissão de propostas, seleção, acompanhamento dos projetos e prestação de contas. No contexto da Secretaria, trabalhei com desenvolvimento web e integração de sistemas, bases MySQL e SQL Server e tecnologias como TypeScript, HTML, CSS, JavaScript, Java e PHP.", tags: ["Desenvolvimento Full-Stack", "Serviço público digital"], status: "Experiência profissional", visual: "culture" },
      { n: "03", title: "Aplicação operacional · Ablank IT / Petrobras", category: "POWER PLATFORM", desc: "Criei uma aplicação interna em Power Apps para melhorar a comunicação operacional entre a base, as plataformas e os navios. A solução apoiava a troca de informações entre as equipes e calculava a autonomia ou a distância estimada que uma embarcação poderia percorrer com o combustível disponível. O Power Automate foi utilizado para apoiar a automatização dos fluxos operacionais. O projeto integrou uma frente mais ampla de BI e tecnologia que também incluía dashboards Power BI sobre navios e combustíveis e um site interno.", tags: ["Power Apps", "Power Automate", "Operações"], status: "Experiência profissional", visual: "marine" },
      { n: "04", title: "LadySafe", category: "PRODUTO PRÓPRIO", desc: "Produto próprio de segurança digital concebido para ajudar mulheres e comunidades vulneráveis a reconhecer sinais de risco em ambientes online. A proposta analisa informações de perfis e conteúdos públicos de redes sociais para identificar linguagem potencialmente misógina, racista, transfóbica, homofóbica, abusiva ou agressiva e apresentar uma avaliação orientativa de risco. A arquitetura inclui backend em Python com FastAPI e aplicação mobile em Flutter/Dart, com autenticação e serviços Firebase. O projeto também conta com site institucional próprio.", tags: ["Python", "FastAPI", "Flutter", "Firebase"], link: "https://ladysafe.com.br", status: "Produto em desenvolvimento", visual: "ladysafe" },
      { n: "05", title: "Meu Bebê ReLove", category: "APLICAÇÃO MOBILE", desc: "Aplicação móvel concebida e desenvolvida com React Native e Expo, com múltiplos ecrãs, navegação dinâmica, gestão de dados locais, lógica de negócio, persistência de dados e formulários. O projeto dá destaque à experiência de utilização e à organização dos fluxos da aplicação. Foi distinguido com o 3.º lugar no MVP Conf Challenge da Microsoft.", tags: ["React Native", "Expo", "UX/UI"], status: "Projeto reconhecido", visual: "relove" },
      { n: "06", title: "QA, automação e dados", category: "LABORATÓRIO TÉCNICO", desc: "Seleção de competências aplicadas em cenários de qualidade e dados: desenho e execução de testes funcionais, validação de APIs com Postman, testes de interfaces, automação com Java e Python, documentação de evidências e consultas SQL. A vertente de dados inclui Oracle, PL/SQL, MySQL, SQL Server, Power BI e Excel. Demonstrações públicas devem utilizar dados fictícios e exemplos independentes, preservando informações e sistemas de empregadores.", tags: ["Postman", "Python", "SQL", "Power BI"], status: "Competências aplicadas", visual: "qa" }
    ],
    skills: [
      { title: "Qualidade de software", items: "Testes funcionais · Testes de API com Postman · Testes de front-end · Testes automatizados · Evidências e documentação · Validação de funcionalidades" },
      { title: "Desenvolvimento", items: "Python · FastAPI · Java · Spring · TypeScript · JavaScript · React · HTML · CSS · PHP · Flutter/Dart · React Native · Expo" },
      { title: "Dados e BI", items: "Power BI · SQL · MySQL · SQL Server · Oracle · PL/SQL · Excel" },
      { title: "Automação e plataformas", items: "Power Apps · Power Automate · Postman · Spring · React Native · Expo" }
    ],
    note: "As experiências são descritas a partir das atividades, projetos e tecnologias do meu percurso profissional."
  },
  "pt-PT": {
    nav: ["Sobre mim", "Experiência", "Projetos", "Competências"],
    eyebrow: "PORTFÓLIO PROFISSIONAL · TECNOLOGIA",
    title: <>Tecnologia que liga<br /><span>pessoas, processos e soluções.</span></>,
    intro: "Sou profissional de tecnologia com experiência multidisciplinar no desenvolvimento de sistemas, qualidade de software, automatização de processos e análise de dados, com participação em projetos do setor público, soluções operacionais e produtos digitais próprios.",
    primary: "Explorar projetos", secondary: "Ver LinkedIn",
    location: "Brasil · Disponível para oportunidades internacionais",
    aboutTitle: "Um percurso entre desenvolvimento, qualidade e dados.",
    about: "O meu percurso combina desenvolvimento web e de sistemas, qualidade de software, automatização e análise de dados. Participei em serviços digitais do setor público, soluções operacionais ligadas à logística marítima e produtos próprios, articulando necessidades de negócio, implementação técnica, validação e melhoria contínua.",
    experienceTitle: "Experiência profissional",
    experienceSub: "Uma visão geral do meu percurso na área tecnológica.",
    projectsTitle: "Projetos em destaque",
    projectsSub: "Experiências e produtos apresentados com foco no problema, na contribuição e nas tecnologias confirmadas.",
    skillsTitle: "Competências e tecnologias",
    skillsSub: "Ferramentas e áreas de atuação presentes na minha experiência profissional e nos meus projetos.",
    contactTitle: "Vamos conversar?",
    contact: "Estou disponível para conversar sobre oportunidades em desenvolvimento, QA, automatização e dados.",
    email: "Enviar e-mail",
    footer: "Desenvolvido com cuidado por Lays Almeida.",
    contactEyebrow: "05 / CONTACTO",
    footerBrand: "PORTFÓLIO PROFISSIONAL",
    backTop: "Voltar ao topo ↑",
    facts: ["Áreas de atuação", "Idiomas no portefólio", "Percurso multidisciplinar"],
    ticker: ["DESENVOLVIMENTO DE SOFTWARE", "QUALIDADE DE SOFTWARE", "AUTOMATIZAÇÃO", "DADOS & BI"],
    roles: [
      { org: "Vivo / Vita", period: "11/2025 — atual", role: "Analista de Qualidade e Processos Júnior", desc: "Atuação em qualidade de software e processos: testes funcionais, validação de requisitos e funcionalidades, testes de APIs com Postman, testes de frontend, execução de testes automatizados e organização de evidências. Inclui automação com Java e Python e comunicação entre páginas web e bases de dados com Spring.", },
      { org: "Open Labs", period: "06/2024", role: "Análise de dados e bases de dados", desc: "Análise e consulta de dados em ambiente Oracle, utilização de PL/SQL no apoio e otimização de processos de telecomunicações e investigação de incidentes em infraestruturas de cabo e fibra ótica. Uma função que combinou bases de dados, análise e resolução técnica de problemas.", },
      { org: "Ablank IT · contrato Petrobras", period: "09/2022 — 07/2023", role: "BI e desenvolvimento de soluções", desc: "Desenvolvimento de dashboards em Power BI para análise de navios e combustíveis — incluindo indicadores relacionados com OCM, MF e VLSFO/Bunker. Criação de uma aplicação interna para facilitar a comunicação operacional entre a base, plataformas e navios, com cálculo de autonomia ou distância estimada a partir do combustível disponível; utilização de Power Apps e Power Automate. Também desenvolvi um site interno para apoiar rotinas operacionais.", },
      { org: "Secretaria de Cultura e Economia Criativa do Estado do Rio de Janeiro", period: "02/2019 — 09/2022", role: "Dados, sistemas e tecnologia", desc: "Atuação multidisciplinar com bases de dados MySQL e SQL Server, desenvolvimento, análise e suporte de sistemas, integração e manutenção de sites, criação de formulários, dashboards em Power BI e soluções avançadas em Excel. Desenvolvimento web com HTML, CSS, Java, JavaScript e PHP, utilização de Python com SQL Server e suporte de infraestrutura. Integrei a equipa durante a implementação do Desenvolve Cultura RJ e desenvolvi o respetivo site com TypeScript.", }
    ],
    projects: [
      { n: "01", title: "Site do Theatro Municipal do Rio de Janeiro", category: "DESENVOLVIMENTO WEB", desc: "Desenvolvi o site institucional do Theatro Municipal do Rio de Janeiro, contribuindo para a presença digital de uma instituição cultural de referência. Após a publicação, mantive o conteúdo atualizado por meio de atualizações rotineiras, incluindo a agenda de espetáculos e informações institucionais. O trabalho combinou entrega do site e continuidade do suporte editorial, garantindo que o público tivesse acesso às informações atualizadas.", tags: ["Desenvolvimento web", "Site institucional", "Atualização de conteúdo"], status: "Experiência profissional", visual: "theatre" },
      { n: "02", title: "Desenvolve Cultura RJ", category: "SISTEMA PÚBLICO", desc: "Em 2020, integrei a equipa de implementação do Desenvolve Cultura RJ como programadora Full-Stack. A plataforma digital apoia a gestão do financiamento público à cultura, organizando candidaturas, seleção, acompanhamento dos projetos e prestação de contas. No âmbito da Secretaria, trabalhei com desenvolvimento web e integração de sistemas, bases de dados MySQL e SQL Server e tecnologias como TypeScript, HTML, CSS, JavaScript, Java e PHP. O site do Desenvolve Cultura RJ foi desenvolvido com TypeScript.", tags: ["Desenvolvimento Full-Stack", "Serviço público digital"], status: "Experiência profissional", visual: "culture" },
      { n: "03", title: "Aplicação operacional · Ablank IT / Petrobras", category: "POWER PLATFORM", desc: "Aplicação em Power Apps para apoiar a comunicação entre a base, a plataforma e os navios, com cálculos da autonomia ou distância possível com o combustível disponível. Foi também utilizado Power Automate.", tags: ["Power Apps", "Power Automate", "Operações"], status: "Experiência profissional", visual: "marine" },
      { n: "04", title: "LadySafe", category: "PRODUTO PRÓPRIO", desc: "Projeto de segurança digital orientado para a análise de perfis e conteúdos de redes sociais, procurando identificar sinais de linguagem potencialmente abusiva ou discriminatória. Backend em Python/FastAPI e frontend mobile em Flutter/Dart.", tags: ["Python", "FastAPI", "Flutter", "Firebase"], link: "https://ladysafe.com.br", status: "Produto em desenvolvimento", visual: "ladysafe" },
      { n: "05", title: "Meu Bebê ReLove", category: "APLICAÇÃO MÓVEL", desc: "Aplicação móvel desenvolvida com React Native e Expo, incluindo ecrãs, navegação, dados locais, lógica de negócio, persistência e formulários. O currículo regista o 3.º lugar no MVP Conf Challenge da Microsoft.", tags: ["React Native", "Expo", "UX/UI"], status: "Projeto reconhecido", visual: "relove" },
      { n: "06", title: "QA, automatização e dados", category: "LABORATÓRIO TÉCNICO", desc: "Conjunto de competências aplicadas a cenários de qualidade e dados: desenho e execução de testes funcionais, validação de APIs com Postman, testes de interfaces, automatização com Java e Python, documentação de evidências e consultas SQL. A vertente de dados inclui Oracle, PL/SQL, MySQL, SQL Server, Power BI e Excel. As demonstrações públicas utilizam dados fictícios e exemplos independentes, protegendo informações e sistemas de empregadores.", tags: ["Postman", "Python", "SQL", "Power BI"], status: "Competências aplicadas", visual: "qa" }
    ],
    skills: [
      { title: "Qualidade de software", items: "Testes funcionais · Testes de API · Testes de frontend · Automatização · Evidências e documentação" },
      { title: "Desenvolvimento", items: "Python · FastAPI · Java · Spring · TypeScript · JavaScript · React · HTML · CSS · PHP · Flutter/Dart · React Native · Expo" },
      { title: "Dados e BI", items: "Power BI · SQL · MySQL · SQL Server · Oracle · PL/SQL · Excel" },
      { title: "Automatização e plataformas", items: "Power Apps · Power Automate · Postman · Spring · React Native · Expo" }
    ],
    note: "As experiências são descritas a partir das atividades, projetos e tecnologias do meu percurso profissional."
  },
  es: {
    nav: ["Perfil", "Experiencia", "Proyectos", "Competencias"],
    eyebrow: "PORTAFOLIO PROFESIONAL · TECNOLOGÍA",
    title: <>Tecnología que conecta<br /><span>personas, procesos y soluciones.</span></>,
    intro: "Soy profesional de tecnología con experiencia multidisciplinar en desarrollo de sistemas, calidad de software, automatización de procesos y análisis de datos.",
    primary: "Explorar proyectos", secondary: "Ver LinkedIn",
    location: "Brasil · Abierta a oportunidades internacionales",
    aboutTitle: "Una trayectoria entre desarrollo, calidad y datos.",
    about: "Mi experiencia incluye proyectos tecnológicos en el sector público, soluciones operativas, desarrollo web, pruebas de software y análisis de datos. Me gusta comprender el problema, estructurar la solución y contribuir a que los sistemas y procesos funcionen mejor.",
    experienceTitle: "Experiencia profesional",
    experienceSub: "Una visión general de mi trayectoria en tecnología.",
    projectsTitle: "Proyectos destacados",
    projectsSub: "Experiencias y productos presentados a partir del problema, la contribución y las tecnologías confirmadas.",
    skillsTitle: "Competencias y tecnologías",
    skillsSub: "Herramientas y áreas de trabajo presentes en mi experiencia profesional y en mis proyectos.",
    contactTitle: "¿Hablamos?",
    contact: "Estoy abierta a conversar sobre oportunidades en desarrollo, QA, automatización y datos.",
    email: "Enviar correo",
    footer: "Creado con cuidado por Lays Almeida.",
    contactEyebrow: "05 / CONTACTO",
    footerBrand: "PORTAFOLIO PROFESIONAL",
    backTop: "Volver arriba ↑",
    facts: ["Áreas de trabajo", "Idiomas en el portafolio", "Trayectoria multidisciplinar"],
    ticker: ["DESARROLLO DE SOFTWARE", "CALIDAD DE SOFTWARE", "AUTOMATIZACIÓN", "DATOS & BI"],
    roles: [
      { org: "Vivo / Vita", period: "11/2025 — actualidad", role: "Analista Jr. de Calidad y Procesos", desc: "Trabajo en calidad de software y procesos: pruebas funcionales, validación de requisitos y funcionalidades, pruebas de API con Postman, pruebas de frontend, ejecución de pruebas automatizadas y organización de evidencias trazables. También desarrollo automatizaciones con Java y Python y trabajo con comunicación entre páginas web y bases de datos mediante Spring.", },
      { org: "Open Labs", period: "06/2024", role: "Análisis de datos y bases de datos", desc: "Análisis y consulta de datos en Oracle, uso de PL/SQL para apoyar y optimizar procesos de telecomunicaciones e investigación de incidencias en infraestructura de cable y fibra óptica. Una experiencia que combinó bases de datos, análisis y resolución técnica de problemas.", },
      { org: "Ablank IT · contrato Petrobras", period: "09/2022 — 07/2023", role: "BI y desarrollo de soluciones", desc: "Desarrollo de dashboards en Power BI para analizar barcos y combustibles, incluidos indicadores relacionados con OCM, MF y VLSFO/Bunker. Creación de una aplicación interna para facilitar la comunicación operativa entre la base, las plataformas y los barcos, con cálculo de autonomía o distancia estimada a partir del combustible disponible mediante Power Apps y Power Automate. También desarrollé un sitio interno para apoyar las operaciones." },
      { org: "Secretaría de Cultura y Economía Creativa del Estado de Río de Janeiro", period: "02/2019 — 09/2022", role: "Datos, sistemas y tecnología", desc: "Trabajo multidisciplinar con bases de datos MySQL y SQL Server, desarrollo, análisis y soporte de sistemas, integración y mantenimiento de sitios web, formularios, dashboards de Power BI y soluciones avanzadas en Excel. Desarrollo web con HTML, CSS, Java, JavaScript y PHP, uso de Python con SQL Server y soporte de infraestructura. Formé parte del equipo durante la implementación de Desenvolve Cultura RJ y desarrollé su sitio con TypeScript." }
    ],
    projects: [
      { n: "01", title: "Sitio del Theatro Municipal de Río de Janeiro", category: "DESARROLLO WEB", desc: "Desarrollé el sitio institucional del Theatro Municipal de Río de Janeiro. Después de su publicación, también realicé actualizaciones rutinarias de contenido, incluida la agenda.", tags: ["Desarrollo web", "Sitio institucional", "Actualización de contenido"], status: "Experiencia profesional", visual: "theatre" },
      { n: "02", title: "Desenvolve Cultura RJ", category: "SISTEMA PÚBLICO", desc: "En 2020, formé parte del equipo que implementó Desenvolve Cultura RJ como desarrolladora Full-Stack. La plataforma digital apoya la gestión de las ayudas públicas a la cultura y organiza etapas como la presentación de propuestas, la selección, el seguimiento de proyectos y la rendición de cuentas. En la Secretaría también trabajé con desarrollo web e integración de sistemas, bases de datos MySQL y SQL Server y tecnologías como TypeScript, HTML, CSS, JavaScript, Java y PHP. El sitio de Desenvolve Cultura RJ se desarrolló con TypeScript.", tags: ["Desarrollo Full-Stack", "Servicios públicos digitales"], status: "Experiencia profesional", visual: "culture" },
      { n: "03", title: "Aplicación operativa · Ablank IT / Petrobras", category: "POWER PLATFORM", desc: "Creé una aplicación interna en Power Apps para mejorar la comunicación operativa entre la base, las plataformas y los barcos. La solución facilitaba el intercambio de información entre equipos y calculaba la autonomía o la distancia estimada que una embarcación podía recorrer con el combustible disponible. Power Automate apoyaba la automatización de flujos operativos. El proyecto formó parte de un trabajo más amplio de BI y tecnología que también incluía dashboards de Power BI sobre barcos y combustibles y un sitio interno.", tags: ["Power Apps", "Power Automate", "Operaciones"], status: "Experiencia profesional", visual: "marine" },
      { n: "04", title: "LadySafe", category: "PRODUCTO PROPIO", desc: "Producto propio de seguridad digital creado para ayudar a mujeres y comunidades vulnerables a reconocer señales de riesgo en entornos online. Analiza información de perfiles y contenido público de redes sociales para identificar lenguaje potencialmente misógino, racista, transfóbico, homófobo, abusivo o agresivo y ofrecer una evaluación orientativa del riesgo. La arquitectura incluye backend en Python con FastAPI y aplicación móvil en Flutter/Dart, con autenticación y servicios de Firebase. El proyecto también cuenta con sitio web propio.", tags: ["Python", "FastAPI", "Flutter", "Firebase"], link: "https://ladysafe.com.br", status: "Producto en desarrollo", visual: "ladysafe" },
      { n: "05", title: "Meu Bebê ReLove", category: "APLICACIÓN MÓVIL", desc: "Aplicación móvil diseñada y desarrollada con React Native y Expo, con múltiples pantallas, navegación dinámica, gestión de datos locales, lógica de negocio, persistencia y formularios. El proyecto pone el foco en la experiencia de usuario y en la organización de los flujos de la aplicación. Obtuvo el tercer puesto en el MVP Conf Challenge de Microsoft.", tags: ["React Native", "Expo", "UX/UI"], status: "Proyecto reconocido", visual: "relove" },
      { n: "06", title: "QA, automatización y datos", category: "LABORATORIO TÉCNICO", desc: "Selección de competencias aplicadas en escenarios de calidad y datos: diseño y ejecución de pruebas funcionales, validación de API con Postman, pruebas de interfaz, automatización con Java y Python, documentación de evidencias y consultas SQL. El área de datos incluye Oracle, PL/SQL, MySQL, SQL Server, Power BI y Excel. Las demostraciones públicas deben usar datos ficticios y ejemplos independientes para proteger la información y los sistemas de empleadores.", tags: ["Postman", "Python", "SQL", "Power BI"], status: "Competencias aplicadas", visual: "qa" }
    ],
    skills: [
      { title: "Calidad de software", items: "Pruebas funcionales · Pruebas de API · Pruebas de frontend · Automatización · Evidencias y documentación" },
      { title: "Desarrollo", items: "Python · FastAPI · Java · Spring · TypeScript · JavaScript · React · HTML · CSS · PHP · Flutter/Dart · React Native · Expo" },
      { title: "Datos y BI", items: "Power BI · SQL · MySQL · SQL Server · Oracle · PL/SQL · Excel" },
      { title: "Automatización y plataformas", items: "Power Apps · Power Automate · Postman · Spring · React Native · Expo" }
    ],
    note: "Las experiencias se describen a partir de las actividades, proyectos y tecnologías de mi trayectoria profesional."
  },
  en: {
    nav: ["About", "Experience", "Projects", "Skills"],
    eyebrow: "PROFESSIONAL PORTFOLIO · TECHNOLOGY",
    title: <>Technology that connects<br /><span>people, processes and solutions.</span></>,
    intro: "I am a technology professional with multidisciplinary experience in software development, software quality assurance, process automation and data analysis.",
    primary: "Explore projects", secondary: "View LinkedIn",
    location: "Brazil · Open to international opportunities",
    aboutTitle: "A career across development, quality and data.",
    about: "My background combines web and software development, quality assurance, process automation and data analysis. I have contributed to public-sector digital services, operational solutions related to maritime logistics, and independent digital products—connecting business needs, technical implementation, validation and continuous improvement.",
    experienceTitle: "Professional experience",
    experienceSub: "An overview of my professional journey in technology.",
    projectsTitle: "Featured projects",
    projectsSub: "Selected experiences and products, focusing on the problem, my contribution and confirmed technologies.",
    skillsTitle: "Skills and technologies",
    skillsSub: "Tools and areas of expertise reflected in my professional experience and projects.",
    contactTitle: "Let's talk",
    contact: "I am open to opportunities in software development, QA, automation and data.",
    email: "Send an email",
    footer: "Made with care by Lays Almeida.",
    contactEyebrow: "05 / CONTACT",
    footerBrand: "PROFESSIONAL PORTFOLIO",
    backTop: "Back to top ↑",
    facts: ["Areas of expertise", "Languages on this portfolio", "Multidisciplinary career"],
    ticker: ["SOFTWARE DEVELOPMENT", "QUALITY ASSURANCE", "AUTOMATION", "DATA & BI"],
    roles: [
      { org: "Vivo / Vita", period: "11/2025 — present", role: "Junior Quality and Processes Analyst", desc: "Software quality and process assurance, including functional testing, requirement and feature validation, API testing with Postman, front-end testing, automated test execution, and structured test evidence. Also develops automations with Java and Python and works on web-to-database communication using Spring.", },
      { org: "Open Labs", period: "06/2024", role: "Data and database analysis", desc: "Oracle data analysis and querying, use of PL/SQL to support and optimise telecommunications processes, and troubleshooting issues involving cable and fibre-optic infrastructure. This role combined database work, analysis and technical problem-solving.", },
      { org: "Ablank IT · Petrobras contract", period: "09/2022 — 07/2023", role: "BI and solutions development", desc: "Built Power BI dashboards to analyse vessels and fuels, including OCM, MF and VLSFO/Bunker indicators. Developed an internal application to support operational communication between the base, offshore platforms and vessels, including range or distance estimates based on available fuel, using Power Apps and Power Automate. Also created an internal website for operational workflows.", },
      { org: "Rio de Janeiro State Secretariat for Culture and Creative Economy", period: "02/2019 — 09/2022", role: "Data, systems and technology", desc: "Worked across MySQL and SQL Server databases, system development and support, website integration and maintenance, forms, Power BI dashboards, advanced Excel solutions and infrastructure support. Built web pages and forms with HTML, CSS, Java, JavaScript and PHP, and used Python with SQL Server. Joined the team during the implementation of Desenvolve Cultura RJ and developed its website with TypeScript.", }
    ],
    projects: [
      { n: "01", title: "Theatro Municipal do Rio de Janeiro website", category: "WEB DEVELOPMENT", desc: "Developed the institutional website for Theatro Municipal do Rio de Janeiro, supporting the digital presence of a major cultural institution. After launch, I maintained the site through routine content updates, including the performance schedule and institutional information. The work combined website delivery with ongoing editorial maintenance so visitors could access current information.", tags: ["Web development", "Institutional website", "Content updates"], status: "Professional experience", visual: "theatre" },
      { n: "02", title: "Desenvolve Cultura RJ", category: "PUBLIC-SECTOR SYSTEM", desc: "In 2020, I joined the implementation team for Desenvolve Cultura RJ as a Full-Stack developer. The public cultural-funding platform supports the administration of cultural grants, organising proposal submissions, selection, project monitoring and accountability. Within the Secretariat, I also worked on web development and system integration, MySQL and SQL Server databases, and technologies including TypeScript, HTML, CSS, JavaScript, Java and PHP. The Desenvolve Cultura RJ website was built with TypeScript.", tags: ["Full-Stack development", "Digital public services"], status: "Professional experience", visual: "culture" },
      { n: "03", title: "Operational application · Ablank IT / Petrobras", category: "POWER PLATFORM", desc: "Developed an internal Power Apps application to improve operational communication between the base, offshore platforms and vessels. The solution supported information exchange between teams and calculated estimated vessel range or distance based on available fuel. Power Automate was used to support operational workflow automation. This work sat within a broader BI and technology scope that also included Power BI dashboards for vessels and fuels and an internal website.", tags: ["Power Apps", "Power Automate", "Operations"], status: "Professional experience", visual: "marine" },
      { n: "04", title: "LadySafe", category: "PERSONAL PRODUCT", desc: "An independent digital-safety product designed to help women and vulnerable communities recognise risk signals in online spaces. It analyses profile information and public social-media content to identify potentially misogynistic, racist, transphobic, homophobic, abusive or aggressive language and provide an indicative risk assessment. The architecture includes a Python/FastAPI backend and a Flutter/Dart mobile app, with Firebase authentication and services. The project also has its own website.", tags: ["Python", "FastAPI", "Flutter", "Firebase"], link: "https://ladysafe.com.br", status: "Product in development", visual: "ladysafe" },
      { n: "05", title: "Meu Bebê ReLove", category: "MOBILE APPLICATION", desc: "Designed and developed a mobile application with React Native and Expo, including multiple screens, dynamic navigation, local data management, business logic, data persistence and forms. The project emphasises user experience and clear application flows. It placed third in the Microsoft MVP Conf Challenge.", tags: ["React Native", "Expo", "UX/UI"], status: "Award-winning project", visual: "relove" },
      { n: "06", title: "QA, automation and data", category: "TECHNICAL LAB", desc: "A portfolio of practical skills across software quality and data: functional test design and execution, API validation with Postman, interface testing, automation with Java and Python, test-evidence documentation and SQL queries. The data toolkit includes Oracle, PL/SQL, MySQL, SQL Server, Power BI and Excel. Any public demonstrations should use synthetic data and independent examples to protect employers' information and systems.", tags: ["Postman", "Python", "SQL", "Power BI"], status: "Applied skills", visual: "qa" }
    ],
    skills: [
      { title: "Software quality assurance", items: "Functional testing · API testing with Postman · Front-end testing · Automated tests · Test evidence and documentation · Feature validation" },
      { title: "Development", items: "Python · FastAPI · Java · Spring · TypeScript · JavaScript · React · HTML · CSS · PHP · Flutter/Dart · React Native · Expo" },
      { title: "Data and BI", items: "Power BI · SQL · MySQL · SQL Server · Oracle · PL/SQL · Excel" },
      { title: "Automation and platforms", items: "Power Apps · Power Automate · Postman · Spring · React Native · Expo" }
    ],
    note: "Experience summaries are based on the activities, projects and technologies from my professional background."
  }
};

const languageNames = ["pt-BR", "pt-PT", "es", "en"];

function App() {
  const [lang, setLang] = useState("pt-BR");
  const t = content[lang] || content["pt-BR"];
  const email = "lays.silva.almeida@gmail.com";
  const linkedin = "https://linkedin.com/in/laysilva/";

  function changeLanguage(code) {
    setLang(code);
    document.documentElement.lang = code;
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Lays Almeida home">
          <span className="brand-mark">LA</span>
          <span>Lays Almeida<small>SOFTWARE · QUALITY · DATA</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((label, i) => (
            <a key={label} href={["#sobre", "#experiencia", "#projetos", "#competencias"][i]}>{label}</a>
          ))}
        </nav>
        <div className="language-switch" aria-label="Select language">
          {languageNames.map(code => (
            <button type="button" key={code} className={lang === code ? "active" : ""} aria-pressed={lang === code} onClick={() => changeLanguage(code)}>
              {code}
            </button>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">{t.primary}<span>↗</span></a>
              <a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer">{t.secondary}<span>↗</span></a>
            </div>
            <p className="location-note"><span className="status-dot" />{t.location}</p>
          </div>
          <div className="hero-art" aria-label="Abstract graphic composition">
            <div className="art-grid" /><div className="art-ring ring-one" /><div className="art-ring ring-two" />
            <div className="art-card">
              <span className="art-card-label">BUILD · TEST · IMPROVE</span>
              <div className="art-monogram">LA<span>.</span></div>
              <div className="art-card-bottom"><span>DEVELOPMENT</span><span>QUALITY</span><span>DATA</span></div>
            </div>
            <div className="floating-tag tag-one">Python</div><div className="floating-tag tag-two">Quality assurance</div><div className="floating-tag tag-three">Data & BI</div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of expertise">
          <div>{t.ticker.map((item, i) => <React.Fragment key={item}>{i > 0 && <> <span>✳</span> </>}{item}</React.Fragment>)} <span>✳</span></div>
        </section>

        <section className="section-wrap about-section" id="sobre">
          <div className="section-heading"><p className="eyebrow">01 / {t.nav[0].toUpperCase()}</p><h2>{t.aboutTitle}</h2></div>
          <div className="about-body">
            <p>{t.about}</p>
            <div className="about-facts">
              <div><strong>4+</strong><span>{t.facts[0]}</span></div>
              <div><strong>4</strong><span>{t.facts[1]}</span></div>
              <div><strong>1</strong><span>{t.facts[2]}</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experiencia">
          <div className="section-heading"><p className="eyebrow">02 / {t.nav[1].toUpperCase()}</p><h2>{t.experienceTitle}</h2><p className="section-sub">{t.experienceSub}</p></div>
          <div className="timeline">
            {t.roles.map((role, i) => (
              <article className="timeline-item" key={role.org}>
                <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                <div className="timeline-main">
                  <div className="timeline-meta"><span>{role.period}</span><span className="timeline-dot" /></div>
                  <h3>{role.org}</h3><h4>{role.role}</h4><p>{role.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="section-wrap">
            <div className="section-heading"><p className="eyebrow">03 / {t.nav[2].toUpperCase()}</p><h2>{t.projectsTitle}</h2><p className="section-sub">{t.projectsSub}</p></div>
            <div className="project-grid">
              {t.projects.map(p => (
                <article className="project-card" key={p.n}>
                  <div className={`project-visual visual-${p.visual}`} aria-hidden="true">
                    <span className="visual-index">{p.n}</span>
                    <span className="visual-word">{({
                      theatre: "CULTURE", culture: "DIGITAL", marine: "OFFSHORE",
                      ladysafe: "LADYSAFE", relove: "RELOVE", qa: "QUALITY"
                    })[p.visual]}</span>
                    <span className="visual-orbit" />
                  </div>
                  <div className="project-top"><span className="project-number">{p.n}</span><span className="project-category">{p.category}</span></div>
                  <h3>{p.title}</h3><p>{p.desc}</p>
                  <div className="tag-list">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-bottom"><span>{p.status}</span>{p.link && <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>↗</a>}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="competencias">
          <div className="section-heading"><p className="eyebrow">04 / {t.nav[3].toUpperCase()}</p><h2>{t.skillsTitle}</h2><p className="section-sub">{t.skillsSub}</p></div>
          <div className="skills-grid">
            {t.skills.map((s, i) => <article className="skill-card" key={s.title}><span className="skill-index">0{i + 1}</span><h3>{s.title}</h3><p>{s.items}</p></article>)}
          </div>
        </section>

        <section className="contact-section">
          <div className="section-wrap contact-inner">
            <div><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contact}</p></div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>{t.email}<span>↗</span></a>
              <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">LA</span><span>Lays Almeida<small>{t.footerBrand}</small></span></a>
        <span>{t.footer}</span>
        <a href="#top">{t.backTop}</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
