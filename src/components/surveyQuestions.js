// 🚉 ENQUÊTE DE FLUX GARE DE DIEPPE
// Basé sur le questionnaire ARF-DE-GEN-NTE pour l'analyse d'accès et stationnement en gare

export const templateSurveyQuestions = [

    {
        id: "POSTE",
        text: "POSTE",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parvis", next: "QCo0" },
            { id: 2, text: "BV", next: "QCo0" },
            { id: 3, text: "Quais", next: "QCo0" }
        ]
    },
    // 🚉 Question de filtrage initial (peut être pré-remplie par l'enquêteur)
    {
        id: "QCo0",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je vais prendre un train", next: "QP1" },
            { id: 2, text: "Je descends d'un train", next: "end" }, // Non interrogé
            { id: 3, text: "Je suis en gare pour une autre raison", next: "QNV1" }
        ]
    },

    // 🎯 SECTION NON-VOYAGEURS
    {
        id: "QNV1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Vous venez attendre quelqu'un", next: "QNV2" },
            { id: 2, text: "Vous accompagnez quelqu'un", next: "QNV2" },
            { id: 3, text: "Renseignement / achat ou retrait de titre de transport", next: "QNV2" },
            { id: 4, text: "Autre", next: "QNV1_AUTRE" }
        ]
    },

    {
        id: "QNV1_AUTRE",
        text: "Veuillez préciser l'autre raison :",
        type: 'freeText',
        freeTextPlaceholder: "Précisez votre raison d'être en gare...",
        next: "QNV2"
    },

    {
        id: "QNV2",
        text: "Comment êtes-vous arrivé(e) en gare de Dieppe ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied exclusivement", next: "QNV3" },
            { id: 2, text: "Voiture conducteur", next: "QNV2A" },
            { id: 3, text: "Voiture passager", next: "QNV2A" },
            { id: 4, text: "Voiture de location", next: "QNV3" },
            { id: 5, text: "Bus ou Car", next: "QNV2B" },
            { id: 6, text: "En scooter/moto", next: "QNV2A" },
            { id: 7, text: "Taxis", next: "QNV3" },
            { id: 8, text: "Vélo", next: "QNV2C" },
            { id: 9, text: "Trottinette", next: "QNV2C" },
            { id: 10, text: "Autre", next: "QNV2_AUTRE" }
        ]
    },

    {
        id: "QNV2_AUTRE",
        text: "Veuillez préciser l'autre mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Précisez votre mode de transport...",
        next: "QNV3"
    },

    // 🚗 Détails stationnement non-voyageurs
    {
        id: "QNV2A",
        text: "Où avez-vous stationné votre véhicule ? Ou avez-vous été déposé ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parvis (je me suis fait déposer)", next: "QNV3" },
            { id: 2, text: "Parking de la gare", next: "QNV2A1" },
            { id: 3, text: "Parking de la Pointe", next: "QNV2A3" },
            { id: 4, text: "Parking de la médiathèque", next: "QNV2A3" },
            { id: 5, text: "Parkings de la mairie (indigo)", next: "QNV2A3" },
            { id: 6, text: "Voirie proche de la gare", next: "QNV2A3" },
            { id: 7, text: "Parking privé", next: "QNV2A3" },
            { id: 8, text: "Autre", next: "QNV2A_AUTRE" }
        ]
    },

    {
        id: "QNV2A_AUTRE",
        text: "Veuillez préciser le lieu de stationnement :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez où vous avez stationné...",
        next: "QNV2A3"
    },

    {
        id: "QNV2A1",
        text: "Comment évalueriez-vous la qualité du stationnement dans le parking de la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bonne", next: "QNV3" },
            { id: 2, text: "Mauvaise", next: "QNV2A2" }
        ]
    },

    {
        id: "QNV2A2",
        text: "Pour quelle(s) raison(s) trouvez-vous la qualité du parking de la gare mauvaise ?",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "Le parking n'est pas assez sécurisé" },
            { id: 2, text: "Le stationnement y est désorganisé (absence de marquage au sol)" },
            { id: 3, text: "L'accès au parking est difficile (étroit du fait des véhicules stationnés en particulier)" },
            { id: 4, text: "Les places sont éloignées de l'entrée de la gare (entrée par le BV nécessaire)" },
            { id: 5, text: "Autre", next_if_selected: "QNV2A2_AUTRE" }
        ],
        next: "QNV3"
    },

    {
        id: "QNV2A2_AUTRE",
        text: "Veuillez préciser les autres problèmes de parking :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez les autres problèmes du parking de la gare...",
        next: "QNV3"
    },

    {
        id: "QNV2A3",
        text: "Pourquoi ne pas avoir choisi de stationner dans le parking de la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Le parking que j'ai choisi est plus sécurisé", next: "QNV3" },
            { id: 2, text: "Celui de la gare était plein", next: "QNV3" },
            { id: 3, text: "Celui de la gare n'est pas bien organisé/peu confortable", next: "QNV3" },
            { id: 4, text: "Le stationnement est adapté à mon véhicule (moto, voiture électrique...)", next: "QNV3" },
            { id: 5, text: "Autre", next: "QNV2A3_AUTRE" }
        ]
    },

    {
        id: "QNV2A3_AUTRE",
        text: "Veuillez préciser les autres raisons :",
        type: 'freeText',
        freeTextPlaceholder: "Expliquez pourquoi vous n'avez pas utilisé le parking de la gare...",
        next: "QNV3"
    },

    // 🚌 Détails bus non-voyageurs
    {
        id: "QNV2B",
        text: "Avec quelle ligne de bus / car ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bus Ligne 1", next: "QNV3" },
            { id: 2, text: "Bus Ligne 2", next: "QNV3" },
            { id: 3, text: "Bus Ligne 3", next: "QNV3" },
            { id: 4, text: "Navettes électriques Ligne N", next: "QNV3" },
            { id: 5, text: "Bus 501", next: "QNV3" },
            { id: 6, text: "Bus 514", next: "QNV3" },
            { id: 7, text: "Bus 515", next: "QNV3" },
            { id: 8, text: "Bus 516", next: "QNV3" },
            { id: 9, text: "Bus 517", next: "QNV3" },
            { id: 10, text: "Bus 518", next: "QNV3" },
            { id: 11, text: "Bus 519", next: "QNV3" },
            { id: 12, text: "Bus 523", next: "QNV3" },
            { id: 13, text: "Bus 524", next: "QNV3" },
            { id: 14, text: "Car grandes lignes", next: "QNV3" },
            { id: 15, text: "Autre", next: "QNV2B_AUTRE" }
        ]
    },

    {
        id: "QNV2B_AUTRE",
        text: "Veuillez préciser la ligne de bus/car :",
        type: 'freeText',
        freeTextPlaceholder: "Précisez la ligne de bus ou car...",
        next: "QNV3"
    },

    // 🚲 Stationnement vélo non-voyageurs
    {
        id: "QNV2C",
        text: "Où avez-vous stationné votre vélo/Trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur les arceaux au niveau des quais", next: "QNV3" },
            { id: 2, text: "Autre", next: "QNV2C_AUTRE" }
        ]
    },

    {
        id: "QNV2C_AUTRE",
        text: "Veuillez préciser où vous avez stationné votre vélo/trottinette :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez où vous avez stationné...",
        next: "QNV3"
    },

    // 🗺️ Origine non-voyageurs
    {
        id: "QNV3",
        text: "Juste avant d'arriver en gare, êtes-vous parti(e) de la ville de Dieppe ou d'une autre commune ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dieppe", next: "QNV3A" },
            { id: 2, text: "Autre commune", next: "QNV3_AUTRE" }
        ]
    },

    {
        id: "QNV3A",
        text: "Précisez de quelle rue de Dieppe :",
        type: 'street',
        next: "end"
    },

    {
        id: "QNV3_AUTRE",
        text: "Veuillez préciser la commune :",
        type: 'commune',
        next: "end"
    },

    // 🚄 SECTION VOYAGEURS
    {
        id: "QP1",
        text: "Quelle sera votre gare de destination ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dieppe", next: "QP2" },
            { id: 2, text: "Saint-Aubin-sur-Scie", next: "QP2" },
            { id: 3, text: "Longueville-sur-Scie", next: "QP2" },
            { id: 4, text: "Auffay", next: "QP2" },
            { id: 5, text: "Saint-Victor l'Abbaye", next: "QP2" },
            { id: 6, text: "Saint-Maclou-de-Folleville", next: "QP2" },
            { id: 7, text: "Clères", next: "QP2" },
            { id: 8, text: "Montville", next: "QP2" },
            { id: 9, text: "Malaunay-Le Houlme", next: "QP2" },
            { id: 10, text: "Le Houlme", next: "QP2" },
            { id: 11, text: "Maromme", next: "QP2" },
            { id: 12, text: "Notre-Dame-de-Bondeville", next: "QP2" },
            { id: 13, text: "Rouen Rive-Droite", next: "QP2" },
            { id: 14, text: "Rouen", next: "QP2" },
            { id: 15, text: "Autre gare", next: "QP1_AUTRE" }
        ]
    },

    {
        id: "QP1_AUTRE",
        text: "Veuillez préciser votre gare de destination :",
        type: 'gare',
        next: "QP2"
    },

    {
        id: "QP2",
        text: "Comment êtes-vous arrivé(e) en gare de Dieppe ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied exclusivement", next: "QP4" },
            { id: 2, text: "Voiture conducteur", next: "QP3A" },
            { id: 3, text: "Voiture passager", next: "QP3A" },
            { id: 4, text: "Voiture de location", next: "QP4" },
            { id: 5, text: "Bus ou Car", next: "QP3B" },
            { id: 6, text: "En scooter/moto", next: "QP3A" },
            { id: 7, text: "Taxis", next: "QP4" },
            { id: 8, text: "Vélo", next: "QP3C" },
            { id: 9, text: "Trottinette", next: "QP3C" },
            { id: 10, text: "Autre", next: "QP2_AUTRE" }
        ]
    },

    {
        id: "QP2_AUTRE",
        text: "Veuillez préciser l'autre mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Précisez votre mode de transport...",
        next: "QP4"
    },

    // 🚗 Détails stationnement voyageurs
    {
        id: "QP3A",
        text: "Où avez-vous stationné votre véhicule / Où avez-vous été déposé ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parvis (je me suis fait déposer)", next: "QP4" },
            { id: 2, text: "Parking de la gare", next: "QP3A1" },
            { id: 3, text: "Parking de la Pointe", next: "QP3A3" },
            { id: 4, text: "Parking de la médiathèque", next: "QP3A3" },
            { id: 5, text: "Parkings de la mairie", next: "QP3A3" },
            { id: 6, text: "Voirie proche de la gare", next: "QP3A3" },
            { id: 7, text: "Parking privé", next: "QP3A3" },
            { id: 8, text: "Autre", next: "QP3A_AUTRE" }
        ]
    },

    {
        id: "QP3A_AUTRE",
        text: "Veuillez préciser le lieu de stationnement :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez où vous avez stationné...",
        next: "QP3A3"
    },

    {
        id: "QP3A1",
        text: "Comment évalueriez-vous la qualité du stationnement dans le parking de la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bonne", next: "QP4" },
            { id: 2, text: "Mauvaise", next: "QP3A2" }
        ]
    },

    {
        id: "QP3A2",
        text: "Pour quelle(s) raison(s) trouvez-vous la qualité du parking mauvaise ?",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "Le parking n'est pas assez sécurisé" },
            { id: 2, text: "Le stationnement y est désorganisé (absence de marquage au sol)" },
            { id: 3, text: "L'accès au parking est difficile (étroit du fait des véhicules stationnés en particulier)" },
            { id: 4, text: "Les places sont éloignées de l'entrée de la gare (entrée par le BV nécessaire)" },
            { id: 5, text: "Autre", next_if_selected: "QP3A2_AUTRE" }
        ],
        next: "QP4"
    },

    {
        id: "QP3A2_AUTRE",
        text: "Veuillez préciser les autres problèmes de parking :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez les autres problèmes du parking de la gare...",
        next: "QP4"
    },

    {
        id: "QP3A3",
        text: "Pourquoi ne pas avoir choisi de stationner dans le parking de la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Le parking que j'ai choisi est plus sécurisé", next: "QP4" },
            { id: 2, text: "Celui de la gare était plein", next: "QP4" },
            { id: 3, text: "Celui de la gare n'est pas bien organisé/peu confortable", next: "QP4" },
            { id: 4, text: "Le stationnement est adapté à mon véhicule (moto, voiture électrique...)", next: "QP4" },
            { id: 5, text: "Autre", next: "QP3A3_AUTRE" }
        ]
    },

    {
        id: "QP3A3_AUTRE",
        text: "Veuillez préciser les autres raisons :",
        type: 'freeText',
        freeTextPlaceholder: "Expliquez pourquoi vous n'avez pas utilisé le parking de la gare...",
        next: "QP4"
    },

    // 🚌 Détails bus voyageurs
    {
        id: "QP3B",
        text: "Avec quelle ligne de bus / car ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bus Ligne 1", next: "QP4" },
            { id: 2, text: "Bus Ligne 2", next: "QP4" },
            { id: 3, text: "Bus Ligne 3", next: "QP4" },
            { id: 4, text: "Navettes électriques Ligne N", next: "QP4" },
            { id: 5, text: "Bus 501", next: "QP4" },
            { id: 6, text: "Bus 514", next: "QP4" },
            { id: 7, text: "Bus 515", next: "QP4" },
            { id: 8, text: "Bus 516", next: "QP4" },
            { id: 9, text: "Bus 517", next: "QP4" },
            { id: 10, text: "Bus 518", next: "QP4" },
            { id: 11, text: "Bus 519", next: "QP4" },
            { id: 12, text: "Bus 523", next: "QP4" },
            { id: 13, text: "Bus 524", next: "QP4" },
            { id: 14, text: "Car grandes lignes", next: "QP4" },
            { id: 15, text: "Autre", next: "QP3B_AUTRE" }
        ]
    },

    {
        id: "QP3B_AUTRE",
        text: "Veuillez préciser la ligne de bus/car :",
        type: 'freeText',
        freeTextPlaceholder: "Précisez la ligne de bus ou car...",
        next: "QP4"
    },

    // 🚲 Stationnement vélo voyageurs
    {
        id: "QP3C",
        text: "Où stationnez-vous votre vélo / Trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur les arceaux au niveau des quais", next: "QP4" },
            { id: 2, text: "Je prends mon vélo / trottinette dans le train", next: "QP4" },
            { id: 3, text: "Autre", next: "QP3C_AUTRE" }
        ]
    },

    {
        id: "QP3C_AUTRE",
        text: "Veuillez préciser où vous stationnez votre vélo/trottinette :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez où vous stationnez...",
        next: "QP4"
    },

    // 🗺️ Origine voyageurs
    {
        id: "QP4",
        text: "Juste avant d'arriver en gare, êtes-vous parti(e) de la ville de Dieppe ou d'une autre commune ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dieppe", next: "QP4A" },
            { id: 2, text: "Autre commune", next: "QP4_AUTRE" }
        ]
    },

    {
        id: "QP4A",
        text: "Précisez de quelle rue de Dieppe :",
        type: 'street',
        next: "QP4B"
    },

    {
        id: "QP4_AUTRE",
        text: "Veuillez préciser la commune :",
        type: 'commune',
        next: "QP4B"
    },

    // ⏱️ Détails du voyage
    {
        id: "QP4B",
        text: "Quelle est la durée de votre déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Quelques heures", next: "QP5" },
            { id: 2, text: "Une demi-journée", next: "QP5" },
            { id: 3, text: "Une journée", next: "QP5" },
            { id: 4, text: "Plus d'une journée", next: "QP5" },
            { id: 5, text: "Aller-simple", next: "QP5" }
        ]
    },

    {
        id: "QP5",
        text: "À quelle fréquence venez-vous dans cette gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours de la semaine ou presque", next: "QP6" },
            { id: 2, text: "1 à 2 fois par semaine", next: "QP6" },
            { id: 3, text: "1 ou plusieurs fois par mois", next: "QP6" },
            { id: 4, text: "Moins d'une fois par mois", next: "QP6" },
            { id: 5, text: "Tous les ans", next: "QP6" },
            { id: 6, text: "C'est la première fois", next: "QP6" }
        ]
    },

    {
        id: "QP6",
        text: "Quel est le motif de votre voyage ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Déplacement Domicile-Travail habituel", next: "end" },
            { id: 2, text: "Déplacements professionnels occasionnel", next: "end" },
            { id: 3, text: "Loisirs, vacances, visite d'un proche ou ami", next: "end" },
            { id: 4, text: "Déplacement Domicile-Études (y compris stage)", next: "end" },
            { id: 5, text: "Démarches administratives, médicales ou achat", next: "end" },
            { id: 6, text: "Autres", next: "QP6_AUTRE" }
        ]
    },

    {
        id: "QP6_AUTRE",
        text: "Veuillez préciser l'autre motif :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez le motif de votre voyage...",
        next: "end"
    }
];

/*
🎯 ENQUÊTE AVEC NUMÉROTATION CONFORME AU DOCUMENT ORIGINAL

✅ CORRESPONDANCE AVEC LE QUESTIONNAIRE ORIGINAL :
- QCo0 : Question commune de filtrage initial
- QNV1, QNV2, QNV3... : Section Non-Voyageurs
- QP1, QP2, QP3A, QP4... : Section Voyageurs/Partants
- Sous-questions numérotées : QNV2A, QNV2B, QNV2C, QP3A1, QP3A2, etc.
- Questions "autre" : QNV1_AUTRE, QP2_AUTRE, etc.

📊 STRUCTURE DE NUMÉROTATION :
- QCo0 : Tronc commun (raison de présence)
- QNV : Partie Non-Voyageurs
- QP : Partie Voyageurs (Partants)
- Lettres A,B,C : Sous-sections par mode de transport
- Chiffres 1,2,3 : Questions de suivi
- _AUTRE : Questions de précision pour "Autre"

Cette numérotation suit exactement la logique du questionnaire original
et facilite la correspondance avec les données collectées.
*/