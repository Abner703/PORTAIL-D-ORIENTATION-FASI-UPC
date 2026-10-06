export interface SectionCriteria {
  id: string;
  name: string;
  category: 'scientifique' | 'technique' | 'commerciale' | 'autre';
  minPercentageRecommended: number;
  testRequired: boolean;
  notes: string;
}

export const EXAT_SECTIONS: SectionCriteria[] = [
  {
    id: 'math-physique',
    name: 'Scientifique (Option Mathématiques-Physique)',
    category: 'scientifique',
    minPercentageRecommended: 50,
    testRequired: false,
    notes: 'Accès direct sans concours si résultat ≥ 60% à l\'Examen d\'État.'
  },
  {
    id: 'chimie-biologie',
    name: 'Scientifique (Option Chimie-Biologie)',
    category: 'scientifique',
    minPercentageRecommended: 52,
    testRequired: false,
    notes: 'Accès direct si ≥ 60%. Test d\'aptitude logique si entre 50% et 59%.'
  },
  {
    id: 'commerciale-gestion',
    name: 'Commerciale & Gestion / Informatique de Gestion',
    category: 'commerciale',
    minPercentageRecommended: 55,
    testRequired: false,
    notes: 'Excellente transition vers Génie Logiciel ou IA appliquée à la finance.'
  },
  {
    id: 'technique-electronique',
    name: 'Technique Industrielle (Électronique, Électricité, Mécanique)',
    category: 'technique',
    minPercentageRecommended: 50,
    testRequired: false,
    notes: 'Très forte affinité avec Systèmes Embarqués & Réseaux Télécoms.'
  },
  {
    id: 'pedagogique-litteraire',
    name: 'Pédagogique / Littéraire / Sciences Sociales',
    category: 'autre',
    minPercentageRecommended: 55,
    testRequired: true,
    notes: 'Test d\'aptitude en raisonnement logique et remise à niveau mathématique obligatoire.'
  }
];

export interface FeeBreakdown {
  level: string;
  registrationFeeUSD: number;
  annualTuitionUSD: number;
  labAndTechFeeUSD: number;
  installments: {
    firstInstallmentUSD: number;
    secondInstallmentUSD: number;
    thirdInstallmentUSD: number;
  };
  includedServices: string[];
}

export const TUITION_SCHEDULE: Record<string, FeeBreakdown> = {
  L1: {
    level: 'Licence 1 (L1 - Première Année LMD)',
    registrationFeeUSD: 50,
    annualTuitionUSD: 750,
    labAndTechFeeUSD: 100,
    installments: {
      firstInstallmentUSD: 350,
      secondInstallmentUSD: 250,
      thirdInstallmentUSD: 250
    },
    includedServices: [
      'Accès permanent aux 5 Laboratoires d\'Informatique & Réseaux FASI',
      'Compte académique Microsoft 365 Pro + GitHub Student Developer Pack',
      'Accès officiel aux cours Cisco Networking Academy et Huawei ICT',
      'Carte d\'étudiant biométrique UPC & Accès à la Bibliothèque Numérique',
      'Connexion Wi-Fi Campus haut débit illimitée sur tout le site de Lingwala'
    ]
  },
  L2: {
    level: 'Licence 2 (L2 - Deuxième Année LMD)',
    registrationFeeUSD: 30,
    annualTuitionUSD: 780,
    labAndTechFeeUSD: 120,
    installments: {
      firstInstallmentUSD: 370,
      secondInstallmentUSD: 265,
      thirdInstallmentUSD: 265
    },
    includedServices: [
      'Accès avancé au FabLab, kits microcontrôleurs ESP32 & serveurs GPU',
      'Préparation aux examens de certification industrielle Cisco CCNA',
      'Accompagnement de projets tuteurés et hackathons inter-universitaires'
    ]
  },
  L3: {
    level: 'Licence 3 (L3 - Troisième Année & Stage)',
    registrationFeeUSD: 30,
    annualTuitionUSD: 820,
    labAndTechFeeUSD: 130,
    installments: {
      firstInstallmentUSD: 390,
      secondInstallmentUSD: 280,
      thirdInstallmentUSD: 280
    },
    includedServices: [
      'Encadrement personnalisé du Mémoire / Travail de Fin de Cycle (TFC)',
      'Placement & Convention de stage professionnel en entreprise partenaire',
      'Frais de jury, soutenance publique officielle et délivrance du diplôme d\'État LMD'
    ]
  }
};

export const ADMISSION_CALENDAR = [
  {
    phase: 'Session Anticipée d\'Orientation & Dépôt des Dossiers',
    period: 'Du 15 Juillet au 31 Août',
    status: 'Terminée',
    description: 'Dépôt des dossiers anticipés avec attestation de réussite de l\'Examen d\'État.'
  },
  {
    phase: 'Session Principale d\'Admission & Tests d\'Aptitude',
    period: 'Du 1er Septembre au 15 Octobre',
    status: 'En cours',
    description: 'Enrôlement en ligne, entretiens d\'orientation pédagogique et validation des dossiers.'
  },
  {
    phase: 'Session de Clôture & Rentrée Académique Solennelle',
    period: 'Du 16 Octobre au 10 Novembre',
    status: 'À venir',
    description: 'Séance d\'intégration des nouveaux étudiants (Freshmen Week) et début des cours LMD.'
  }
];

export const REQUIRED_DOCUMENTS = [
  'Photocopie certifiée conforme du Diplôme d\'État ou Attestation de Réussite de l\'Examen d\'État',
  'Photocopie des bulletins des 5ème et 6ème années des Humanités (Secondaire)',
  'Extrait d\'acte de naissance ou certificat de naissance légalisé',
  'Certificat d\'aptitude physique et médicale récent délivré par un médecin agréé',
  'Quatre (4) photos passeport récentes identiques sur fond blanc',
  'Preuve de paiement des frais de dossier d\'admission à la banque partenaire'
];
