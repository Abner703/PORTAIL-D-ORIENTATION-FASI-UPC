export interface QuizOption {
  text: string;
  subtext: string;
  points: {
    'genie-logiciel': number;
    'intelligence-artificielle': number;
    'reseaux-cybersecurite': number;
    'systemes-embarques-iot': number;
  };
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  explanation: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Passion & Centre d\'Intérêt',
    question: 'Face à un ordinateur ou un appareil technologique, qu\'est-ce qui vous fascine le plus ?',
    explanation: 'Identifier ce qui stimule naturellement votre curiosité intellectuelle est le meilleur indicateur de réussite académique.',
    options: [
      {
        text: 'Créer des applications, des sites web fluides ou des logiciels que des millions de gens utilisent.',
        subtext: 'L\'ergonomie, la conception logique de fonctionnalités et le code applicatif.',
        points: { 'genie-logiciel': 4, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 0 }
      },
      {
        text: 'Comprendre comment les machines prédisent l\'avenir, apprennent toutes seules ou reconnaissent des images.',
        subtext: 'Les algorithmes intelligents, les calculs mathématiques et la découverte de tendances cachées.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 5, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Comprendre comment Internet fonctionne, déjouer les cyberattaques et sécuriser les serveurs.',
        subtext: 'La défense contre les pirates, les pare-feux, les flux de paquets et la confidentialité.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 5, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Démonter des appareils, connecter des capteurs physiques, construire des robots ou des drones autonomes.',
        subtext: 'L\'alliance du fer à souder, des puces électroniques et du code bas niveau.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 5 }
      }
    ]
  },
  {
    id: 2,
    category: 'Résolution de Problème',
    question: 'Quel défi technologique concret au Congo ou en Afrique aimeriez-vous résoudre en priorité ?',
    explanation: 'Le choix de votre filière façonne le type d\'impact que vous apporterez à la société congolaise.',
    options: [
      {
        text: 'Créer une super-application de commerce en ligne et de paiement mobile ultra-rapide et intuitive.',
        subtext: 'Digitalisation des services bancaires, e-santé et gestion des entreprises.',
        points: { 'genie-logiciel': 4, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 0 }
      },
      {
        text: 'Analyser des millions de données médicales ou agricoles pour prédire les épidémies et rendements.',
        subtext: 'Exploitation des mégadonnées et modèles statistiques au service de la nation.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 5, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Construire une infrastructure réseau souveraine et impénétrable pour les banques et ministères.',
        subtext: 'Sécurité nationale, résilience des télécoms contre le cyberespionnage et continuité de service.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 5, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Déployer des capteurs intelligents à énergie solaire pour surveiller le niveau du fleuve ou les coupures de courant.',
        subtext: 'Systèmes autonomes d\'alerte précoce, domotique et gestion intelligente de l\'énergie.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 5 }
      }
    ]
  },
  {
    id: 3,
    category: 'Matières & Affinités Scolaires',
    question: 'Durant vos études secondaires, dans quels types de devoirs preniez-vous le plus de plaisir ?',
    explanation: 'Les forces académiques développées au secondaire constituent un levier majeur à l\'université.',
    options: [
      {
        text: 'La rédaction structurée, l\'organisation méthodique d\'un projet, la logique séquentielle.',
        subtext: 'Structurer un plan clair, vérifier les cas limites et assembler des briques logiques cohérentes.',
        points: { 'genie-logiciel': 4, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 2, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Les mathématiques pures, les statistiques, le calcul matriciel, les fonctions et probabilités.',
        subtext: 'Trouver des équations explicatives et comprendre les lois qui régissent les données.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 5, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 2 }
      },
      {
        text: 'Comprendre les schémas d\'interconnexion, la logique des règles, l\'investigation d\'anomalies.',
        subtext: 'Détecter ce qui cloche dans une chaîne, suivre les flux et appliquer des protocoles stricts.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 5, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'La physique appliquée, l\'électricité, le bricolage mécanique et l\'expérimentation pratique.',
        subtext: 'Toucher le matériel, manipuler des multimètres et observer des réactions physiques réelles.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 5 }
      }
    ]
  },
  {
    id: 4,
    category: 'Environnement de Travail Idéal',
    question: 'Où vous projetez-vous idéalement d\'ici 4 à 5 ans après votre diplôme FASI ?',
    explanation: 'Chaque filière débouche sur une culture de travail et des environnements distincts.',
    options: [
      {
        text: 'Dans un studio tech ou une scale-up, collaborant avec des designers pour livrer des produits logiciels.',
        subtext: 'Développeur Fullstack, Scrum, revues de code et déploiement d\'applications dynamiques.',
        points: { 'genie-logiciel': 5, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 0 }
      },
      {
        text: 'Dans un pôle R&D ou une banque de renom, à entraîner des modèles d\'IA et extraire de la valeur prédictive.',
        subtext: 'Data Scientist, chercheur en IA, optimisation de modèles de langage et pipelines de prédiction.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 5, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Dans une salle de contrôle sécurisée (SOC) ou un Data Center télécom, garant de la forteresse numérique.',
        subtext: 'Analyste en cyberdéfense, administrateur d\'infrastructures critiques et auditeur de sécurité.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 5, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Dans un laboratoire d\'innovation hardware, un atelier d\'ingénierie robotique ou une industrie connectée.',
        subtext: 'Ingénieur mécatronique/IoT, prototypage de cartes mères et déploiement sur le terrain.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 5 }
      }
    ]
  },
  {
    id: 5,
    category: 'Style de Défi Intellectuel',
    question: 'Quel genre de puzzle intellectuel vous procure la plus grande satisfaction ?',
    explanation: 'Le plaisir du travail quotidien provient de la résolution de votre type d\'énigme favori.',
    options: [
      {
        text: 'Résoudre un bug complexe dans un code pour que le programme s\'exécute parfaitement en un clin d\'œil.',
        subtext: 'Élégance du code, refactoring et modularité.',
        points: { 'genie-logiciel': 5, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Construire un modèle mathématique capable d\'identifier des régularités invisibles à l\'œil humain.',
        subtext: 'Précision statistique, classification fine et modélisation.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 5, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Trouver une faille cachée dans un système pour la colmater avant qu\'un pirate ne l\'exploite.',
        subtext: 'Pensée stratégique défensive, analyse de logs et durcissement des accès.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 5, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Faire en sorte qu\'un tout petit circuit électronique consomme si peu qu\'il fonctionne 5 ans sur une pile bouton.',
        subtext: 'Optimisation matérielle extrême, interruptions horloge et micro-puissance.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 5 }
      }
    ]
  },
  {
    id: 6,
    category: 'Outils & Technologies Rêvés',
    question: 'Parmi ces technologies célèbres, lesquelles avez-vous le plus hâte de maîtriser ?',
    explanation: 'Votre curiosité envers les outils du métier reflète votre destination naturelle.',
    options: [
      {
        text: 'React, Next.js, Node.js, TypeScript, Docker, Git, Spring Boot et Flutter.',
        subtext: 'L\'arsenal complet du concepteur logiciel moderne.',
        points: { 'genie-logiciel': 5, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 0 }
      },
      {
        text: 'PyTorch, TensorFlow, Hugging Face, Scikit-learn, OpenAI APIs, Apache Spark.',
        subtext: 'La boîte à outils mondiale de l\'intelligence artificielle et de la science des données.',
        points: { 'genie-logiciel': 1, 'intelligence-artificielle': 5, 'reseaux-cybersecurite': 0, 'systemes-embarques-iot': 0 }
      },
      {
        text: 'Cisco IOS, Wireshark, Kali Linux, pfSense, Fortinet, Metasploit, Splunk.',
        subtext: 'Les instruments phares de l\'ingénierie réseau et de la cybersécurité offensive/défensive.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 0, 'reseaux-cybersecurite': 5, 'systemes-embarques-iot': 1 }
      },
      {
        text: 'Arduino, ESP32, Raspberry Pi, FreeRTOS, KiCad, LoRaWAN, bus CAN, C/C++ embarqué.',
        subtext: 'Les technologies qui donnent vie aux machines et capteurs intelligents.',
        points: { 'genie-logiciel': 0, 'intelligence-artificielle': 1, 'reseaux-cybersecurite': 1, 'systemes-embarques-iot': 5 }
      }
    ]
  }
];
