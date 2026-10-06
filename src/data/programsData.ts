export interface CourseModule {
  name: string;
  code: string;
  credits: number;
  description: string;
}

export interface ProgramSemester {
  semesterNumber: number;
  label: string;
  modules: CourseModule[];
}

export interface ProgramDetails {
  id: string;
  name: string;
  shortName: string;
  cycle: 'Licence (Bac+3)' | 'Master (Bac+5)';
  description: string;
  tagline: string;
  color: string;
  bgLight: string;
  borderColor: string;
  iconName: string;
  badge: string;
  duration: string;
  careerOutcomes: string[];
  keyCompetencies: string[];
  admissionPrerequisites: string[];
  labs: string[];
  semesters: ProgramSemester[];
}

export const FASI_PROGRAMS: ProgramDetails[] = [
  {
    id: 'genie-logiciel',
    name: 'Génie Logiciel & Systèmes d\'Information',
    shortName: 'Génie Logiciel (GL)',
    cycle: 'Licence (Bac+3)',
    tagline: 'Concevez les architectures logicielles, applications mobiles, web et plateformes d\'entreprise modernes.',
    description: 'La filière Génie Logiciel prépare les ingénieurs concepteurs de solutions logicielles de haute volée. Vous maîtriserez l\'intégralité du cycle de développement : de la conception UML et modélisation Agile jusqu\'au déploiement Cloud, DevOps et microservices.',
    color: 'text-blue-600',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconName: 'Code2',
    badge: 'Filière Phare',
    duration: '3 ans (6 Semestres LMD)',
    careerOutcomes: [
      'Ingénieur Concepteur / Développeur Full-Stack (Web & Mobile)',
      'Architecte Logiciel d\'Entreprise & Systèmes d\'Information',
      'Ingénieur DevOps & Intégration Continue (CI/CD)',
      'Chef de Projet Informatique & Scrum Master',
      'Lead Developer & Consultant ERP / CRM'
    ],
    keyCompetencies: [
      'Maîtrise des langages Java, Python, TypeScript, C#, Go',
      'Frameworks modernes (React, Next.js, Spring Boot, FastAPI, Node.js)',
      'Architectures Microservices, Docker, Kubernetes & Cloud (AWS/Azure)',
      'Bases de données SQL complexes (PostgreSQL) et NoSQL (MongoDB, Redis)',
      'Génie logiciel avancé : Design Patterns, TDD, Clean Code, CI/CD'
    ],
    admissionPrerequisites: [
      'Diplôme d\'État (Baccalauréat) Section Scientifique, Commerciale & Gestion, ou Technique',
      'Minimum 50% aux épreuves de l\'Examen d\'État (test d\'admission requis pour < 60%)',
      'Aptitude au raisonnement logique, à l\'abstraction et aux mathématiques'
    ],
    labs: [
      'Laboratoire de Développement Logiciel Avancé FASI',
      'Hub Microsoft & GitHub Campus Club UPC',
      'Incubateur d\'Applications & Hackathons UPC Innov'
    ],
    semesters: [
      {
        semesterNumber: 1,
        label: 'Semestre 1 (L1 - Tronc Commun)',
        modules: [
          { name: 'Algorithmique & Structures de Données I', code: 'INF101', credits: 6, description: 'Principes fondamentaux de la programmation impérative et pseudo-code.' },
          { name: 'Architecture des Ordinateurs & Logique Numérique', code: 'INF102', credits: 5, description: 'Circuits logiques, processeur, assembleur et fonctionnement du CPU.' },
          { name: 'Mathématiques pour l\'Informatique (Algèbre Linéaire)', code: 'MAT101', credits: 5, description: 'Espaces vectoriels, matrices et transformations linéaires.' },
          { name: 'Anglais Technique & Communication Professionnelle', code: 'LNG101', credits: 4, description: 'Vocabulaire informatique international et rédaction technique.' }
        ]
      },
      {
        semesterNumber: 2,
        label: 'Semestre 2 (L1 - Fondamentaux)',
        modules: [
          { name: 'Programmation Orientée Objet (Java & C++)', code: 'INF103', credits: 6, description: 'Classes, héritage, polymorphisme, interfaces et exceptions.' },
          { name: 'Bases de Données Relationnelles & SQL', code: 'INF104', credits: 6, description: 'Modèle entité-association, algèbre relationnelle et requêtes SQL avancées.' },
          { name: 'Analyse & Calcul Différentiel', code: 'MAT102', credits: 4, description: 'Dérivées, intégrales et modélisation mathématique discrète.' },
          { name: 'Méthodologie de Recherche & Éthique Chrétienne UPC', code: 'ETH101', credits: 4, description: 'Déontologie professionnelle, intégrité académique et impact sociétal.' }
        ]
      },
      {
        semesterNumber: 3,
        label: 'Semestre 3 (L2 - Spécialisation)',
        modules: [
          { name: 'Développement Web Moderne (TypeScript, React, Node.js)', code: 'INF201', credits: 6, description: 'Applications SPA, API RESTful et state management.' },
          { name: 'Génie Logiciel & Modélisation UML', code: 'INF202', credits: 5, description: 'Diagrammes UML2, Design Patterns du GoF et cahier des charges.' },
          { name: 'Systèmes d\'Exploitation & Scripting Shell', code: 'INF203', credits: 5, description: 'Gestion mémoire, processus, threads et administration Linux.' }
        ]
      },
      {
        semesterNumber: 4,
        label: 'Semestre 4 (L2 - Applications Mobiles & Cloud)',
        modules: [
          { name: 'Développement Mobile (Flutter & Android natif)', code: 'INF204', credits: 6, description: 'Conception UI mobile réactive, synchronisation locale et cloud.' },
          { name: 'Architectures Logicielles & DevOps (Docker, CI/CD)', code: 'INF205', credits: 5, description: 'Conteneurisation, pipelines d\'intégration et déploiement continu.' },
          { name: 'Bases de Données NoSQL & Big Data Basics', code: 'INF206', credits: 5, description: 'MongoDB, Redis et architectures distribuées haute disponibilité.' }
        ]
      },
      {
        semesterNumber: 5,
        label: 'Semestre 5 (L3 - Ingénierie Complexe)',
        modules: [
          { name: 'Architectures Microservices & Cloud Computing', code: 'INF301', credits: 6, description: 'Event-driven, Kafka, Kubernetes et hébergement sur le Cloud.' },
          { name: 'Sécurité Applicative & Tests Logiciels (QA)', code: 'INF302', credits: 5, description: 'Tests unitaires, tests E2E, audit de failles OWASP Top 10.' },
          { name: 'Gestion de Projet Agile (Scrum / Kanban)', code: 'MGT301', credits: 4, description: 'Conduite de projet informatique en entreprise et sprints réels.' }
        ]
      },
      {
        semesterNumber: 6,
        label: 'Semestre 6 (L3 - Professionnalisation)',
        modules: [
          { name: 'Stage Professionnel en Entreprise (12 semaines)', code: 'STG301', credits: 12, description: 'Immersion en entreprise de télécom, banque, fintech ou start-up locale.' },
          { name: 'Mémoire de Fin d\'Études & Projet Capstone FASI', code: 'MEM301', credits: 12, description: 'Conception et soutenance publique d\'une solution logicielle complète.' }
        ]
      }
    ]
  },
  {
    id: 'intelligence-artificielle',
    name: 'Intelligence Artificielle & Science des Données',
    shortName: 'IA & Data Science',
    cycle: 'Licence (Bac+3)',
    tagline: 'Façonnez le futur avec le Machine Learning, le Deep Learning, les LLMs et l\'analyse prédictive.',
    description: 'Face à la révolution de l\'IA générative et de la valorisation des données d\'entreprise, cette filière forme des experts capables de concevoir des modèles d\'apprentissage automatique, d\'analyser les mégadonnées (Big Data) et d\'implémenter des solutions intelligentes adaptées aux défis de l\'Afrique.',
    color: 'text-purple-600',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconName: 'Cpu',
    badge: 'Haute Demande',
    duration: '3 ans (6 Semestres LMD)',
    careerOutcomes: [
      'Ingénieur en Intelligence Artificielle & Machine Learning',
      'Data Scientist & Analyste de Mégadonnées (Big Data)',
      'Ingénieur MLOps (Déploiement et maintien de modèles)',
      'Développeur de Solutions IA Générative (LLMs, RAG, Agents)',
      'Consultant en Transformation Décisionnelle & Business Intelligence'
    ],
    keyCompetencies: [
      'Mathématiques avancées : Statistiques inférentielles, Probabilités, Optimisation',
      'Python scientifique (NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow)',
      'Vision par Ordinateur (Computer Vision) et Traitement du Langage (NLP)',
      'Techniques d\'IA Générative : Embeddings, Vector Databases, RAG, fine-tuning',
      'Pipelines de données (ETL, Apache Spark, Airflow) et Dashboarding (PowerBI, Tableau)'
    ],
    admissionPrerequisites: [
      'Diplôme d\'État avec forte dominante mathématique (Scientifique, Math-Physique, Commerciale)',
      'Curiosité intellectuelle pour la modélisation statistique et la programmation'
    ],
    labs: [
      'Laboratoire d\'Intelligence Artificielle & Calcul Haute Performance UPC',
      'Google Developer Student Club (GDSC) UPC & AWS Academy',
      'Observatoire des Données Socio-Économiques de la RDC'
    ],
    semesters: [
      {
        semesterNumber: 1,
        label: 'Semestre 1 (L1 - Socle Math & Info)',
        modules: [
          { name: 'Algorithmique & Programmation Python', code: 'INF111', credits: 6, description: 'Structures de données en Python et pensée computationnelle.' },
          { name: 'Algèbre Linéaire & Calcul Matriciel Avancé', code: 'MAT111', credits: 6, description: 'Valeurs propres, vecteurs propres et décompositions matricielles.' },
          { name: 'Introduction aux Systèmes Informatiques', code: 'INF112', credits: 4, description: 'Architecture, mémoire et environnements Linux.' }
        ]
      },
      {
        semesterNumber: 2,
        label: 'Semestre 2 (L1 - Données & Probabilités)',
        modules: [
          { name: 'Probabilités & Statistiques Descriptives', code: 'MAT112', credits: 6, description: 'Distributions, variables aléatoires et théorèmes limites.' },
          { name: 'Structures de Données & Programmation Avancée', code: 'INF113', credits: 5, description: 'Arbres, graphes, tables de hachage et complexité algorithmique.' },
          { name: 'Systèmes de Gestion de Bases de Données (SGBDR)', code: 'INF114', credits: 5, description: 'Modélisation relationnelle et requêtes analytiques SQL.' }
        ]
      },
      {
        semesterNumber: 3,
        label: 'Semestre 3 (L2 - Machine Learning)',
        modules: [
          { name: 'Apprentissage Automatique Supervisé & Non-Supervisé', code: 'DAT201', credits: 6, description: 'Régression, arbres de décision, SVM, clustering (K-Means).' },
          { name: 'Nettoyage & Manipulation de Données (Pandas, NumPy)', code: 'DAT202', credits: 5, description: 'Data wrangling, gestion des valeurs manquantes et visualisations Seaborn.' },
          { name: 'Statistiques Inférentielles & Tests d\'Hypothèses', code: 'MAT201', credits: 5, description: 'Intervalles de confiance, tests A/B et validation expérimentale.' }
        ]
      },
      {
        semesterNumber: 4,
        label: 'Semestre 4 (L2 - Deep Learning & NLP)',
        modules: [
          { name: 'Réseaux de Neurones & Deep Learning (PyTorch)', code: 'DAT203', credits: 6, description: 'Perceptrons multicouches, CNNs, RNNs et rétropropagation.' },
          { name: 'Traitement Automatique du Langage Naturel (NLP)', code: 'DAT204', credits: 5, description: 'Tokenisation, word embeddings, transformers et analyse de sentiment.' },
          { name: 'Bases de Données NoSQL & Vector Databases (Milvus, Pinecone)', code: 'INF215', credits: 5, description: 'Stockage vectoriel pour systèmes RAG et recherche sémantique.' }
        ]
      },
      {
        semesterNumber: 5,
        label: 'Semestre 5 (L3 - Big Data & MLOps)',
        modules: [
          { name: 'Écosystème Big Data & Traitement Distribué (Spark, Hadoop)', code: 'DAT301', credits: 6, description: 'Traitement de données massives en temps réel et batch.' },
          { name: 'MLOps : Déploiement et Monitoring de Modèles IA', code: 'DAT302', credits: 5, description: 'Docker, FastAPI, MLflow et monitoring de dérive (data drift).' },
          { name: 'Éthique de l\'IA, Biais & Protection des Données en RDC', code: 'ETH301', credits: 4, description: 'Réglementations, RGPD, législation locale et équité algorithmique.' }
        ]
      },
      {
        semesterNumber: 6,
        label: 'Semestre 6 (L3 - Projet Professionnel & Soutenance)',
        modules: [
          { name: 'Stage Pratique en Entreprise (Fintech, Télécom, Santé)', code: 'STG302', credits: 12, description: 'Stage obligatoire dans un service data ou cellule d\'innovation.' },
          { name: 'Travail de Fin de Cycle (TFC) / Capstone IA', code: 'MEM302', credits: 12, description: 'Projet de recherche appliquée résolvant un problème d\'intérêt national.' }
        ]
      }
    ]
  },
  {
    id: 'reseaux-cybersecurite',
    name: 'Réseaux, Télécommunications & Cybersécurité',
    shortName: 'Réseaux & Cybersécurité',
    cycle: 'Licence (Bac+3)',
    tagline: 'Protégez les infrastructures critiques, configurez les réseaux télécoms et défendez contre les cyberattaques.',
    description: 'La digitalisation fulgurante des banques, administrations et télécoms en RDC crée un besoin critique d\'experts en cybersécurité et en ingénierie des réseaux. Les étudiants sont certifiés Cisco CCNA et formés à la défense opérationnelle des systèmes (SOC, Pentest, Firewalls).',
    color: 'text-emerald-600',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconName: 'ShieldCheck',
    badge: 'Certifications Cisco & Huawei',
    duration: '3 ans (6 Semestres LMD)',
    careerOutcomes: [
      'Ingénieur Cybersécurité / Analyste SOC (Security Operations Center)',
      'Administrateur Réseaux & Systèmes (Linux / Windows Server)',
      'Ingénieur Télécommunications & Infrastructures Sans-Fil',
      'Pentester / Consultant en Tests d\'Intrusion Éthique',
      'Architecte Sécurité Cloud (AWS, Azure, Huawei Cloud)'
    ],
    keyCompetencies: [
      'Protocoles TCP/IP, Routage dynamique (OSPF, BGP) et Commutation (VLAN, STP)',
      'Préparation aux certifications Cisco CCNA et CyberOps',
      'Sécurité périmétrique : Pare-feu de nouvelle génération (Fortinet, pfSense), IDS/IPS',
      'Tests d\'intrusion (Kali Linux, Metasploit, Wireshark, Burp Suite)',
      'Cryptographie appliquée, PKI, VPN et authentification multi-facteurs'
    ],
    admissionPrerequisites: [
      'Diplôme d\'État toutes sections scientifiques ou techniques',
      'Intérêt prononcé pour le matériel, les protocoles et la sécurité défensive'
    ],
    labs: [
      'Académie Régionale Cisco NetAcad UPC (Routeurs & Switchs réels)',
      'Huawei ICT Academy Lab (Équipements 4G/5G et Cloud)',
      'Cyber-Range & Salle de Simulation d\'Attaques / Défense FASI'
    ],
    semesters: [
      {
        semesterNumber: 1,
        label: 'Semestre 1 (L1 - Fondations Réseaux)',
        modules: [
          { name: 'Principes Fondamentaux des Réseaux & Modèle OSI', code: 'RES101', credits: 6, description: 'Couches physiques, adressage IPv4/IPv6 et câblage structuré.' },
          { name: 'Architecture des Ordinateurs & Périphériques', code: 'INF121', credits: 5, description: 'Microprocesseurs, cartes d\'interface et bus informatiques.' },
          { name: 'Algorithmique & Introduction au Scripting Python', code: 'INF122', credits: 5, description: 'Scripts d\'automatisation et manipulation de fichiers.' }
        ]
      },
      {
        semesterNumber: 2,
        label: 'Semestre 2 (L1 - Administration Systèmes)',
        modules: [
          { name: 'Administration des Systèmes Linux (Debian / RedHat)', code: 'SYS101', credits: 6, description: 'Gestion des droits, services systemd, SSH et serveurs web Apache/Nginx.' },
          { name: 'Administration Windows Server & Active Directory', code: 'SYS102', credits: 5, description: 'Gestion des domaines, GPO, DNS et DHCP d\'entreprise.' },
          { name: 'Télécommunications Fondamentales & Propagation du Signal', code: 'TEL101', credits: 5, description: 'Modulations analogiques et numériques, ondes radio et fibre optique.' }
        ]
      },
      {
        semesterNumber: 3,
        label: 'Semestre 3 (L2 - Routage & Commutation Avancés)',
        modules: [
          { name: 'Routage & Commutation d\'Entreprise (Cisco CCNA 2&3)', code: 'RES201', credits: 6, description: 'VLANs, Trunking 802.1Q, EtherChannel, OSPFv2/v3 et ACLs.' },
          { name: 'Cryptographie & Sécurité de l\'Information', code: 'SEC201', credits: 5, description: 'Chiffrement symétrique/asymétrique, RSA, AES, signatures et PKI.' },
          { name: 'Réseaux Sans Fil (Wi-Fi 6, 4G/5G, IoT LoRaWAN)', code: 'TEL201', credits: 5, description: 'Normes 802.11, contrôleurs Wi-Fi et réseaux cellulaires mobiles.' }
        ]
      },
      {
        semesterNumber: 4,
        label: 'Semestre 4 (L2 - Sécurité Opérationnelle)',
        modules: [
          { name: 'Sécurité Périmétrique, Firewalls & VPN (IPsec/WireGuard)', code: 'SEC202', credits: 6, description: 'Configuration de pare-feu d\'entreprise et tunnels sécurisés.' },
          { name: 'Analyse de Trames & Détection d\'Intrusions (Snort, Suricata)', code: 'SEC203', credits: 5, description: 'Surveillance du trafic réseau et signatures d\'attaques.' },
          { name: 'Virtualisation & Infrastructures Cloud (VMware, Proxmox)', code: 'SYS201', credits: 5, description: 'Hyperviseurs de type 1 et 2, stockage SAN/NAS et haute disponibilité.' }
        ]
      },
      {
        semesterNumber: 5,
        label: 'Semestre 5 (L3 - Cybersécurité Défensive & Offensive)',
        modules: [
          { name: 'Hacking Éthique & Tests d\'Intrusion (Pentesting)', code: 'SEC301', credits: 6, description: 'Méthodologie PTES, reconnaissance, exploitation et reporting d\'audit.' },
          { name: 'SOC, SIEM & Gestion des Incidents (Wazuh, Splunk)', code: 'SEC302', credits: 5, description: 'Centralisation des logs, alertes de sécurité et réponse aux incidents.' },
          { name: 'Gouvernance, Normes ISO 27001 & Réglementation RDC', code: 'SEC303', credits: 4, description: 'Politique de sécurité (PSSI), analyse des risques EBIOS/MEHARI.' }
        ]
      },
      {
        semesterNumber: 6,
        label: 'Semestre 6 (L3 - Stage Professionnel & Travail de Fin de Cycle)',
        modules: [
          { name: 'Stage en Environnement Réseau / Télécom / SOC', code: 'STG303', credits: 12, description: 'Immersion pratique chez un opérateur (Vodacom, Airtel, Orange) ou banque.' },
          { name: 'Mémoire de Fin d\'Études FASI UPC', code: 'MEM303', credits: 12, description: 'Conception, déploiement et défense orale d\'une architecture sécurisée.' }
        ]
      }
    ]
  },
  {
    id: 'systemes-embarques-iot',
    name: 'Systèmes Embarqués & Internet des Objets (IoT)',
    shortName: 'Systèmes Embarqués & IoT',
    cycle: 'Licence (Bac+3)',
    tagline: 'Connectez le monde physique au numérique : microcontrôleurs, capteurs intelligents, robotique et domotique.',
    description: 'Une formation à la croisée de l\'informatique et de l\'électronique appliquée, essentielle pour l\'automatisation agricole, la gestion intelligente de l\'énergie en RDC, la santé connectée et les villes intelligentes (Smart Cities).',
    color: 'text-amber-600',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconName: 'Cpu',
    badge: 'Innovation & FabLab',
    duration: '3 ans (6 Semestres LMD)',
    careerOutcomes: [
      'Ingénieur Systèmes Embarqués (Firmware C/C++, Rust)',
      'Architecte Solutions Internet des Objets (IoT)',
      'Développeur Robotique & Automatisation Industrielle',
      'Ingénieur Hardware & Conception de Cartes Électroniques (PCB)',
      'Consultant en Smart Energy & Agritech'
    ],
    keyCompetencies: [
      'Programmation C/C++ bas niveau pour ARM Cortex, ESP32, Arduino, Raspberry Pi',
      'Protocoles IoT : MQTT, CoAP, Zigbee, LoRaWAN, BLE',
      'Systèmes temps réel (FreeRTOS, Embedded Linux)',
      'Conception et routage de circuits imprimés (KiCad, Altium)',
      'Intégration capteurs/actionneurs et passerelles Cloud (AWS IoT Core)'
    ],
    admissionPrerequisites: [
      'Diplôme d\'État Scientifique ou Technique (Électronique, Mécanique)',
      'Goût pour le bricolage technologique, l\'électronique et l\'expérimentation matérielle'
    ],
    labs: [
      'FabLab & Laboratoire de Prototypage Électronique FASI UPC',
      'Atelier d\'Impression 3D & Fraisage Numérique',
      'Banc d\'essais Capteurs Solaires & Énergie Intelligente'
    ],
    semesters: [
      {
        semesterNumber: 1,
        label: 'Semestre 1 (L1 - Électronique Fondamentale)',
        modules: [
          { name: 'Électronique Numérique & Composants Discrets', code: 'ELE101', credits: 6, description: 'Diodes, transistors, portes logiques et analyse de circuits.' },
          { name: 'Algorithmique & Programmation en Langage C', code: 'INF131', credits: 6, description: 'Pointeurs, gestion manuelle de la mémoire et structures de données.' },
          { name: 'Mathématiques Appliquées & Signaux', code: 'MAT131', credits: 4, description: 'Transformée de Fourier, analyse fréquentielle et filtres.' }
        ]
      },
      {
        semesterNumber: 2,
        label: 'Semestre 2 (L1 - Microcontrôleurs Débutant)',
        modules: [
          { name: 'Architecture des Microcontrôleurs (AVR / ARM)', code: 'ELE102', credits: 6, description: 'Registres, interruptions, timers, bus I2C, SPI et UART.' },
          { name: 'Programmation Bas Niveau & Assembleur', code: 'INF132', credits: 5, description: 'Instructions machine et optimisation temporelle.' },
          { name: 'Physique des Capteurs & Conditionnement du Signal', code: 'ELE103', credits: 5, description: 'Capteurs de température, pression, humidité et lumière.' }
        ]
      },
      {
        semesterNumber: 3,
        label: 'Semestre 3 (L2 - Systèmes Temps Réel)',
        modules: [
          { name: 'Systèmes d\'Exploitation Temps Réel (FreeRTOS)', code: 'SYS211', credits: 6, description: 'Ordonnancement préemptif, sémaphores, files de messages et mutex.' },
          { name: 'Conception Assistée par Ordinateur de Circuits (KiCad)', code: 'ELE201', credits: 5, description: 'Schématique, routage multi-couches et règles de fabrication industrielle.' },
          { name: 'Réseaux Sans Fil Industriels & LoRaWAN', code: 'TEL211', credits: 5, description: 'Transmissions longue portée et basse consommation pour l\'IoT.' }
        ]
      },
      {
        semesterNumber: 4,
        label: 'Semestre 4 (L2 - Passerelles & Cloud IoT)',
        modules: [
          { name: 'Linux Embarqué & Yocto Project', code: 'SYS212', credits: 6, description: 'Compilation de noyaux légers, bootloaders U-Boot et drivers.' },
          { name: 'Protocoles de Communication IoT & Sécurité Matérielle', code: 'IOT201', credits: 5, description: 'MQTT over TLS, cryptographie sur microcontrôleurs (Hardware Crypto).' },
          { name: 'Plateformes Cloud IoT (AWS IoT Core & ThingsBoard)', code: 'IOT202', credits: 5, description: 'Ingestion de télémétrie, règles d\'alertes et dashboards en temps réel.' }
        ]
      },
      {
        semesterNumber: 5,
        label: 'Semestre 5 (L3 - Robotique & Projets Connectés)',
        modules: [
          { name: 'Robotique Mobile & Systèmes Autonomes (ROS basics)', code: 'ROB301', credits: 6, description: 'Cinématique des robots mobiles, odométrie et asservissement PID.' },
          { name: 'Intelligence Artificielle Embarquée (TinyML)', code: 'IA301', credits: 5, description: 'Inférence de modèles de Deep Learning sur puces ESP32 et Cortex-M.' },
          { name: 'Projet Intégrateur FabLab : Objet Connecté Autonome', code: 'PRJ301', credits: 4, description: 'Prototypage complet du boîtier (3D) au cloud en passant par le PCB.' }
        ]
      },
      {
        semesterNumber: 6,
        label: 'Semestre 6 (L3 - Stage & Mémoire d\'Ingénierie)',
        modules: [
          { name: 'Stage Pratique en Entreprise (Énergie, Industrie, Agritech)', code: 'STG304', credits: 12, description: 'Projet terrain d\'ingénierie embarquée.' },
          { name: 'Soutenance Publique du Travail de Fin de Cycle', code: 'MEM304', credits: 12, description: 'Démonstration matérielle en direct devant le jury académique.' }
        ]
      }
    ]
  }
];

export const FASI_STATS = [
  { label: 'Taux d\'Insertion Professionnelle', value: '94%', subtext: 'Dans les 6 mois suivant l\'obtention du diplôme' },
  { label: 'Laboratoires & Équipements de Pointe', value: '5 Labs', subtext: 'Cisco, Huawei, Microsoft, AI & FabLab' },
  { label: 'Étudiants & Alumnis Actifs', value: '1,200+', subtext: 'Travaillant en RDC, Afrique et à l\'international' },
  { label: 'Partenariats Technologiques', value: '15+ Entreprises', subtext: 'Télécoms, banques, ministères et multinationales' }
];

export const CAMPUS_FACILITIES = [
  {
    title: 'Laboratoire Cisco & Huawei ICT Academy',
    description: 'Bancs d\'essais équipés de routeurs Cisco Catalyst 2960/3850, serveurs rack et racks de télécommunications pour la pratique directe des réseaux réels.',
    tag: 'Réseaux & Télécoms'
  },
  {
    title: 'FabLab FASI & Espace Prototypage',
    description: 'Imprimantes 3D haute précision, découpeuses laser, stations de soudure antistatiques et composants microcontrôleurs pour inventer des solutions IoT locales.',
    tag: 'Hardware & IoT'
  },
  {
    title: 'Hub de Calcul IA & Data Center UPC',
    description: 'Stations de travail équipées de GPU dédiés pour l\'entraînement des réseaux de neurones profonds et l\'expérimentation des modèles d\'IA générative.',
    tag: 'Intelligence Artificielle'
  },
  {
    title: 'Bibliothèque Numérique & Amphis Connectés',
    description: 'Accès illimité aux bases de données scientifiques internationales (IEEE Xplore, ACM Digital Library, SpringerLink) et connexion Internet haut débit par fibre optique.',
    tag: 'Ressources Numériques'
  }
];
