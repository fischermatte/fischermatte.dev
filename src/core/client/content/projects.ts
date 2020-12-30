import {Project} from '../../shared/project.types'

export const projects: Project[] = [
  {
    title: 'CarCheck',
    url: 'https://www.checkyourcar.ch',
    customer: {
      name: 'die Mobiliar',
      url: 'https://www.mobiliar.ch',
    },
    period: {
      from: '2020-12-01',
    },
    tags: ['GoogleCloud', 'Firebase', 'Angular', 'Serverless', 'Node.js', 'NoSQL', 'TailwindCSS'],
  },
  {
    title: 'fischermatte.dev',
    url: 'https://github.com/fischermatte/fischermatte-next',
    customer: {
      name: 'Myself',
      url: 'https://fischermatte.dev',
    },
    period: {
      from: '2020-12-01',
    },
    tags: ['Next.js', 'React', 'Typescript', 'Netlify', 'TailwindCSS', 'FaunaDB'],
  },
  {
    title: 'Buildigo.ch',
    url: 'https://www.buildigo.ch/',
    customer: {
      name: 'Buildigo AG',
      url: 'https://www.buildigo.ch',
    },
    period: {
      from: '2020-06-01',
      to: '2020-12-22',
    },
    tags: ['AWS', 'Angular', 'Serverless', 'Node.js', 'GraphQL', 'PostgreSQL', 'TailwindCSS'],
  },
  {
    title: 'Handwerkerplatform',
    url: 'https://www.handwerker.mobiliar.ch/',
    customer: {
      name: 'die Mobiliar',
      url: 'https://www.mobiliar.ch',
    },
    period: {
      from: '2019-08-01',
      to: '2020-05-01',
    },
    tags: ['GoogleCloud', 'Firebase', 'Angular', 'Serverless', 'Node.js', 'NoSQL'],
  },
  {
    title: 'Mobiliar Claim System (MCS)',
    customer: {
      name: 'die Mobiliar',
      url: 'https://www.mobiliar.ch',
    },
    period: {
      from: '2018-03-01',
      to: '2018-03-01',
    },
    tags: ['Kubernetes', 'Microservices', 'JavaEE', 'Angular', 'Typescript'],
  },
  {
    title: 'PostAuto - Integrated System Architecture (PA-ISA)',
    url: 'https://www.youtube.com/watch?v=FXHKO_ux4jI&feature=emb_title',
    customer: {
      name: 'PostAuto Schweiz AG',
      url: 'https://www.postauto.ch',
    },
    period: {
      from: '2016-01-01',
      to: '2018-02-28',
    },
    tags: ['Microservices', 'Java', 'Spring', 'Angular', 'Docker', 'Vert.x'],
  },
  {
    title: 'Post - Metering',
    customer: {
      name: 'Post CH AG',
      url: 'https://www.post.ch',
    },
    period: {
      from: '2017-01-01',
      to: '2017-01-01',
    },
    tags: ['Angular', 'Java', 'Bootstrap', 'Spring', 'IAM'],
  },
  {
    title: 'Swiss Voting and Election Administration System (SyVOTE)',
    url: 'https://www.unisys.ch/about-us/local-solutions/syvote',
    customer: {
      name: 'Unisys Switzerland',
      url: 'http://www.unisys.ch/index.htm',
    },
    period: {
      from: '2014-01-01',
      to: '2015-01-01',
    },
    tags: ['AngularJS', 'Java', 'Bootstrap', 'Spring', 'Spring Security'],
  },
  {
    title: 'Swiss Online Voting System (e-Voting)',
    customer: {
      name: 'Unisys Switzerland',
      url: 'http://www.unisys.ch/index.htm',
    },
    period: {
      from: '2014-01-01',
      to: '2014-01-01',
    },
    tags: ['AngularJS', 'Bootstrap', 'Spring', 'Spring Security'],
  },
  {
    title: 'Mehrwertsteuer Online Einreichen',
    url: 'https://www.estv.admin.ch/estv/de/home/mehrwertsteuer/dienstleistungen/mwst-online-abrechnen.html',
    customer: {
      name: 'Swiss Federal Tax Administration FTA',
      url: 'http://www.estv.admin.ch/index.html?lang=en',
    },
    period: {
      from: '2014-01-01',
      to: '2014-01-01',
    },
    tags: ['AngularJS', 'Bootstrap', 'Javascript', 'Java', 'Primefaces'],
    description:
      'Technologies: AngularJS, Bootstrap, HTML 5, Javascript, CSS, Java, Spring, Spring Security, JPA/Hibernate, JSF/Primefaces, Maven, Jenkins, Sonar, Nexus',
  },
  {
    title: 'Applikationsplattform Verbraucherschutz',
    customer: {
      name: 'Swiss Federal Office of Public Health FOPH',
      url: 'http://www.bag.admin.ch/index.html?lang=en',
    },
    period: {
      from: '2013-01-01',
      to: '2014-01-01',
    },
    tags: ['Java', 'Spring', 'SpringSecurity', 'JPA', 'Primefaces', 'Tomcat'],
    description:
      'Technologies: Java, Spring, Spring Security, JPA/Hibernate, JSF/Primefaces, HTML/JS/CSS, Maven, Jenkins, Sonar, Nexus.',
  },
  {
    title: 'Country of Origin Information System',
    customer: {
      name: 'Swiss Federal Office of Migration FOM',
      url: 'https://www.bfm.admin.ch/bfm/en/home.html',
    },
    period: {
      from: '2012-01-01',
      to: '2013-01-01',
    },
    tags: ['Java', 'Spring', 'JPA', 'Primefaces', 'Tomcat'],
    description:
      'Technologies: Java, Spring, Hibernate, JPA, JSF, Primefaces, Oracle, Tomcat, CI (Maven, Hudson, Sonar, Nexus, Team Foundation Server) ',
  },
  {
    title: 'Interpreter Administration System (DOPO)',
    customer: {
      name: 'Swiss Federal Office of Migration FOM',
      url: 'https://www.bfm.admin.ch/bfm/en/home.html',
    },
    period: {
      from: '2013-01-01',
      to: '2013-01-01',
    },
    tags: ['Java', 'Spring', 'JPA', 'JSF', 'Hibernate'],
  },
  {
    title: 'Digital Archive of the Swiss National Library (e-Helvetica)',
    url: 'https://www.e-helvetica.nb.admin.ch/',
    customer: {
      name: 'Swiss National Library',
      url: 'https://www.nb.admin.ch/?lang=en',
    },
    period: {
      from: '2011-01-01',
      to: '2012-01-01',
    },
    tags: ['Java', 'Solr', 'Luscene', 'Spring', 'JPA', 'JSF', 'Hibernate', 'Weblogic'],
  },
  {
    title: 'Application for Environmental Budgeting',
    customer: {
      name: 'Federal Office for the Environment FOEN',
      url: 'http://www.bafu.admin.ch/?lang=en',
    },
    period: {
      from: '2011-01-01',
      to: '2017-01-01',
    },
    tags: ['C#', '.NET', 'MSSqlServer', 'ASP.NET', 'WPF'],
    description:
      'Technologies: C#, .NET, MS SQL Server, Entity Framework, Ext.NET, ASP.NET, WPF, Team Foundation Server ',
  },
  {
    title: 'Inventory Solution for the Swiss Army Museum',
    customer: {
      name: 'Stiftung HAM',
      url: 'http://www.stiftung-ham.ch/',
    },
    period: {
      from: '2011-01-01',
      to: '2011-01-01',
    },
    tags: ['C#', '.NET', 'MSSqlServer', 'ASP.NET', 'WPF'],
    description: 'Technologies: C#, .NET, MS SQL Server, Entity Framework, Ext.NET, ASP.NET, WPF ',
  },
  {
    title: 'Swiss Environmental Monitoring Platform',
    customer: {
      name: 'Unisys Switzerland',
      url: 'http://www.unisys.ch/index.htm',
    },
    period: {
      from: '2009-01-01',
      to: '2010-01-01',
    },
    tags: ['Java', 'Spring', 'Oracle', 'BPM'],
    description:
      'Development of a distributed multi-tiered platform for automatic acquisition, conversion and monitoring of environmental data of Switzerland. The platform is based on Java/Spring/JPA/Hibernate running on WebLogic Application Server and Oracle Database. ',
  },
  {
    title: 'Drive and Walk Navigation Solutions',
    customer: {
      name: 'Nokia Gate 5 GmbH (now HERE)',
      url: 'https://here.com',
    },
    period: {
      from: '2008-01-01',
      to: '2009-01-01',
    },
    tags: ['Mobile', 'Javascript', 'HTML'],
    description:
      'Development of mobile and web applications for Nokia Maps with a strong focus on drive and walk navigation. Implementation of Rich Internet Applications (RIA) using Web 2.0 technologies (AJAX/JavaScript/XHTML).',
  },
  {
    title: 'Platform for Mobile Location-based Advertising',
    customer: {
      name: 'Tieto International',
      url: 'http://www.tieto.com/',
    },
    period: {
      from: '2008-01-01',
      to: '2009-01-01',
    },
    tags: ['Java', 'LocationBasedServices', 'GIS', 'PostgreSQL'],
    description:
      'Design and implementation of a platform for mobile location-based advertisement services, which enables the delivery of location-relevant advertisements in real time. The platform is a SOA-based enterprise application using Java EE 5 (JPA, JTA, EJB 3, JSF, JMS) and various Open Source Software (CentOS Linux, PosgreSQL/Postgis, GlassFish, Hibernate, Geoserver, OpenLayers). The project was also part of my Master Thesis (final grade: A).',
  },
  {
    title: 'Atomica Game',
    url: 'https://github.com/fischermatte/atomica',
    customer: {
      name: 'Hagen University',
      url: 'http://www.fernuni-hagen.de/english',
    },
    period: {
      from: '2008-01-01',
      to: '2008-01-01',
    },
    tags: ['Java', 'Game'],
    description:
      'A multi-level board game based on Java Swing. Result of a programming course during summer semester of 2008 (Kurs 01580 Programmierpraktikum).',
    links: [
      {
        title: 'run',
        url: 'assets/projects/atomica/webstart/launch.jnlp',
      },
      {
        title: 'source',
        url: 'https://github.com/fischermatte/atomica/',
      },
      {
        title: 'javadoc',
        url: 'assets/projects/atomica/javadoc/index.html',
      },
      {
        title: 'documentation',
        url: 'assets/projects/atomica/atomica_documentation_ludewig.pdf',
      },
    ],
  },
  {
    title: 'Cadastral Surveying and Mapping Application',
    customer: {
      name: 'ARC-GREENLAB GmbH ',
      url: 'http://www.arc-greenlab.de/',
    },
    period: {
      from: '2006-01-01',
      to: '2008-01-01',
    },
    tags: ['C++'],
    description:
      'Integration of a cadastral surveying and mapping application into the ALKIS compliant (German Authoritative Real Estate Information System) land management platform of AED-SICAD. Used technologies were C++, COM, .NET and various DBMS (Oracle, MS SQL Server, MS Access).',
  },
  {
    title: 'Application for Spatial Data Acquisition and Management',
    customer: {
      name: 'ARC-GREENLAB GmbH ',
      url: 'http://www.arc-greenlab.de/',
    },
    period: {
      from: '2005-01-01',
      to: '2008-01-01',
    },
    tags: ['C++'],
    description:
      'Development of an application that allows users to define their own domain specific geographical data model including management and editing functionality. It is closely integrated into ArcGIS via COM technology. Used technologies were C++, MFC and ATL.',
  },
  {
    title: 'True Type Font Converter',
    customer: {
      name: 'DHI-WASY GmbH ',
      url: 'http://www.wasy.de/',
    },
    period: {
      from: '2006-01-01',
      to: '2006-01-01',
    },
    tags: ['C++'],
    description:
      'Development of a dynamic link library (dll) that provides functionality for true type font conversion into vector geometries. Used technologies were C++, COM and Win32 API. ',
  },
  {
    title: 'Application for Geological Map Generation and Data Export',
    customer: {
      name: 'Thuringia State Authority for Environment and Geology (TLUG)',
      url: 'http://www.tlug-jena.de/',
    },
    period: {
      from: '2006-01-01',
      to: '2006-01-01',
    },
    tags: ['C++', 'GIS'],
    description:
      'An application for automatic generation of geological maps based on ESRI s ArcGIS platform. Every step of the software development process was entirely completed by me in direct contact with the TLUG. The application was developed in C++/COM. ',
  },
  {
    title: 'CAD Export Tool (DWG, DXF, DGN)',
    customer: {
      name: 'ARC-GREENLAB GmbH ',
      url: 'http://www.arc-greenlab.de/',
    },
    period: {
      from: '2006-01-01',
      to: '2006-01-01',
    },
    tags: ['C++', 'GIS'],
    description:
      'The CAD Export Tool is an extension for ESRI s ArcGIS Desktop product family. The tool allows a user to export a map into the most common CAD file formats (DWG, DXF and DGN). The Export Tool relies on libraries of the Open Design Alliance and is written in C and C++. I was responsible for the whole development process of the product. ',
  },
  {
    title: 'Efficient Data Acquisition and Mapping Strategies',
    customer: {
      name: 'ARC-GREENLAB GmbH ',
      url: 'http://www.arc-greenlab.de/',
    },
    period: {
      from: '2005-01-01',
      to: '2005-01-01',
    },
    tags: ['C++', 'GIS'],
    description:
      'Diploma thesis in cooperation with the ARC-GREENLAB GmbH. Various improvements on GIS applications for spatial data acquisition and mapping. Used technologies were C++/COM.',
  },
  {
    title: 'Online XML/Flash-based map for www.russlandpartner.de',
    customer: {
      name: 'Deutsch-Russische Forum e.V.',
      url: 'http://www.deutsch-russisches-forum.de/',
    },
    period: {
      from: '2004-01-01',
      to: '2004-01-01',
    },
    tags: ['Flash', 'Maps'],
    description:
      'A Flash-based map with information about Russian-German town twinning. Used technologies: XML, Adobe Flash, ActionScript.',
    images: [
      {
        title: 'screenshot 1',
        url: '/images/russlandpartner/screenshot_germany.png',
        width: 405,
        height: 329,
      },
      {
        title: 'screenshot 2',
        url: '/images/russlandpartner/screenshot_russia.png',
        width: 406,
        height: 330,
      },
    ],
  },
  {
    title: 'trampstop.de',
    url: 'https://github.com/fischermatte/trampstop',
    customer: {
      name: 'Myself',
      url: 'https://github.com/fischermatte',
    },
    period: {
      from: '2002-01-01',
      to: '2004-01-01',
    },
    tags: ['PHP', 'MySQL'],
  },
  {
    title: 'Live Ticker Tour de France 2001',
    customer: {
      name: 'SPIEGEL ONLINE',
      url: 'http://www.spiegel.de/',
    },
    period: {
      from: '2001-01-01',
      to: '2001-01-01',
    },
    tags: ['Flash'],
    description:
      'Flash-based Live Ticker for the Tour de France 2001. Real time stage tracking with maps and profiles.',
    images: [
      {
        title: 'screenshot 1',
        url: '/images/tour/tour_screenshot_overview.png',
        width: 662,
        height: 425,
      },
      {
        title: 'screenshot 2',
        url: '/images/tour/tour_screenshot_etappe.png',
        width: 629,
        height: 428,
      },
    ],
  },
]
