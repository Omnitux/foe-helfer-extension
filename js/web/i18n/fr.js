/*
 * **************************************************************************************
 *
 * Dateiname:                 fr.js
 * Projekt:                   foe-chrome
 *
 * erstellt von:              Daniel Siekiera <daniel.siekiera@gmail.com>
 * erstellt am:	              17.12.19, 22:44 Uhr
 * zuletzt bearbeitet:       17.12.19, 22:19 Uhr
 *
 * Copyright © 2019
 *
 * **************************************************************************************
 */

let i18n = {
	"Local" : "fr-FR",
	"DateTime" : "DD.MM.YYYY HH:mm",

	"Boxes" : {
		"OwnpartCalculator" : {
			"Title": "Calcul de PFs pour mes GMs",
			"HelpLink": "https://foe-rechner.de/extension/index#Eigenanteilsrechner",
            "Step": "Niveau",
            "OldLevel": "Ancien niveau", //Todo: Translate
			"PatronPart": "Contribution externe",
			"OwnPart": "Contribution personnelle",
			"LGTotalFP": "Total PFs",
            "OwnPartRemaining": "Remaining",
			"Done": "Fini",
			"BPs": "Plan", //Todo: Translate
			"Meds": "Méds", //Todo: Translate
			"Ext": "Ext", //Todo: Translate
			"Arc": "Arche", //Todo: Translate
			"Order": "Séquence",
            "Deposit": "A poser",
			"CopyValues": "Copier les valeurs",
			"Note": "Ne pas oublier",
			"YourName": "Votre nom",
			"IndividualName": "Nom individuel",
			"OutputScheme": "Schéma de sortie",
            "Auto": "Automatique",
            "Place": "Place",
            "Levels": "niveaux",
            "NoPlaceSafe": "Pas de place à coup sûr"
		},

		"Calculator": {
			"Title": "Calcul de PFs pour les GMs des autres",
			"HelpLink": "https://foe-rechner.de/extension/index#Kostenrechner",
			"Step": "Niveau ",
			"AvailableFP": "PFs disponibles",
			"ArcBonus": "Bonus d'arche",
            "Earnings": "Bénéfices",
            "Rate": "Cours",
			"Up2LevelUp": "Jusqu'au nivellement",
			"FP": "PF",
			"Save": "Sauver",
			"Commitment": "PFs posés",
			"Profit": "Profit",
			"LevelWarning": "ATTENTION: nivelez le bâtiment légendaire!", //Todo: Translate
			"NoFPorMedsAvailable": "Pas de PFs ou plans disponible",
			"LGNotOpen": "Le niveau suivant n'est pas déverrouillé",
			"LGNotConnected": "Le bâtiment n'est pas relié à une rue",
		},

		"LGOverviewBox": {
			"Title": "Dépôts possibles",
			"Tooltip": {
				"FoundNew": "trouvé nouveau",
				"FoundAgain": "reconnu",
				"NoPayment": "jusqu'ici aucun dépôt",
			},
			"Building": "Bâtiment",
			"Level": "Niveau",
			"PayedTotal": "Payé / Total",
			"Rate": "Cours",
			"NothingToGet": "<strong>__player__</strong> n'a rien à récupérer"
		},

		"StrategyPoints" : {
			"Title" : "PFs - Productions",
			"TotalFPs": "Total PFs pour tous les batiments: ",
			"Amount": "Nombre",
			"FPBar" : "PFs en stock: "
		},

		"Productions" : {
			"Title" : "Vue d'ensemble des productions",
			"SearchInput": "Chercher un batiment...",
			"Total" : "Total: ",
			"ModeGroups": "Grouper",
			"ModeSingle": "Individuel",
			"Happiness": "satisfaction",
			"AdjacentBuildings": "bâtiment adjacent",
			"Headings" : {
				"number" : "Occurences",
				"amount" : "Nombre",
				"earning" : "Récolte",
				"greatbuilding" : "Grand monument",
				"production" : "Bâtiment de production",
				"random_production" : "Productions aléatoires",
				"residential" : "Bâtiments événementiels",
				"decoration": "décorations", //Todo: Translate
				"street": "Rues", //Todo: Translate
				"goods": "Bâtiment fret", //Todo: Translate
				"culture": "Bâtiments culturels", //Todo: Translate
				"main_building": "Hôtel de ville",
				"boost": "Augmentation", //Todo: Translate
				"all" : "Tout"
			}
		},

		"Neighbors" : {
			"Title" : "Production de ",
			"ReadyProductions" : "Productions terminée*s",
			"OngoingProductions" : "Productions en cours"
		},

		"Outpost" : {
			"Title" : "Ressources de la colonie",
			"TitleShort" : "Vue des ressources - ",
			"TitleBuildings" : "Bâtiment",
			"TitleFree" : "Gratuit",
			"DescRequired" : "Requis",
			"DescInStock" : "Disponible",
			"DescStillMissing" : "<span style='color:#29b206'>Excès</span> / <span style='color:#ef1616'>Manquant</span>",
        },

        "Technologies": {
            "Title": "Les coûts de la recherche pour", //Todo: Translate
            "Resource": "Ressources", //Todo: Translate
            "DescRequired": "Requis",
            "DescInStock": "Disponible",
            "DescStillMissing": "<span style='color:#29b206'>Excès</span> / <span style='color:#ef1616'>Manquant</span>",
            "Eras": {
                1: "Âge de Pierre",
                2: "Âge du Bronze",
                3: "Âge du Fer",
                4: "Haut Moyen Âge",
                5: "Moyen Âge Classique",
                6: "Renaissance",
                7: "Âge Colonial",
                8: "Âge Industriel",
                9: "Ère Progressiste",
                10: "Ère Moderne",
                11: "Ère Postmoderne",
                12: "Ère Contemporaine",
                13: "Ère de Demain",
                14: "Ère du Futur",
                15: "Futur Arctique",
                16: "Futur Océanique",
                17: "Futur Virtuel",
                18: "Ère Spatiale - Mars",
                19: "Ère Spatiale - Ceres"
            }
        },

        "Campagne": {
            "Title": "Coûts de conquête pour",
            "Reward": "Récompense totale ",
            "AlreadyDone": " déjà conquis!",
            "Resource": "Ressources",
            "DescRequired": "Requis",
            "DescInStock": "Disponible",
            "DescStillMissing": "<span style='color:#29b206'>Excès</span> / <span style='color:#ef1616'>Manquant</span>",
        },

        "Negotiation": {
            "Title": "Assistant de négociation",
            "WrongGoods": "Mauvais produits sélectionnés, veuillez terminer manuellement",
            "TryEnd": "Essayer de finir",
            "Canceled": "La négociation a été annulée", //Todo: Translate
            "Success": "Succès",
            "Chance": "Chance",
			"Person": "Personne",
			"Average": "Ø Coûts", //Todo: Translate
			"Costs": "Moyens:",
			"Round": "Rond",
			"Stock": "Stock:",
			"GoodsLow": "ATTENTION: Un bon stock est faible", //Todo: Translate
			"GoodsCritical": "ATTENTION: le stock de marchandises est critique",
			"DragDrop": "Vous pouvez réorganiser vous-même les icônes de l'affichage moyen en utilisant le glisser-déposer pour déterminer l'ordre dès la première tentative."
        },
        
		"Settings" : {
			"Title" : "Paramètres",
			"Active" : "Actif",
			"Inactive" : "Inactif",
		},

		"Infobox" : {
			"Title" : "Infobox",
			"Filter" : "Filtre",
			"FilterGex" : "GEX",
			"FilterAuction" : "Enchères",
			"FilterLevel" : "Niveau supérieur",
			"FilterMessage" : "Message",
			"FilterTrade" : "Commerce",
			"ResetBox" : "Vider la boîte",
			"Messages" : {
				"GEX" : "<strong>__player__</strong> vient de recevoir __points__ Punkte points au GEX.",
				"LevelUp" : "Le __building__ de __player__'s vient juste d'atteindre le niveau __level__.<br>Tu as pris la <strong>__rank__</strong>ème place",
				"Auction" : "<strong>__player__</strong> vient d'offrir __amount__ pièces.",
				"Trade" : "<strong>__player__</strong> a accepté votre offre.<br>Vous avez __needValue__ __need__ pour __offerValue__ __offer__",
				"MsgBuilding" : "__building__ - Niveau __level__"
			}
		},

		"Units" : {
			"Title": "Army overview",
			"NextUnitsIn": "Les __count__ prochaines unités arriveront dans <span class=\"alca-countdown\"></span> à __harvest__",
			"ReadyToLoot": "Prêt à récolter!",
			"Proportionally": "En proportion",
			"Quantity": "Nombre",
			"Unit": "Unité",
			"Status": "Status",
			"Attack": "Attaque",
			"Defend": "Défense",
			"NotFilled": "non rempli",
			"Bind": "Liè",
			"Unbind": "Non liè"
		}
	},

	"Menu" : {
		"Productions" : {
			"Title" : "Vue d'ensemble des productions",
			"Desc" : "Affiche le nombre en cours de toutes les productions."
		},
		"Calculator" : {
			"Title" : "Calculatrice des coûts",
			"Desc" : "Calcule toutes les places pour vous et les PFs pour sniper",
			"Warning": "Désactivé: Ouvre d'abord un GM d'un autre joueur !"
		},
		"OwnpartCalculator" : {
			"Title" : "Calculatrice de up à plusieurs",
			"Desc" : "Crée un plan de pose de PFs, calcul les coûts et copies les valeurs",
			"Warning": "Désactivé: Ouvre d'abord un de tes GM !"
        },
        "Technologies": {
            "Title": "Technologies", //Todo: Translate
            "Desc": "Calculer le coût de la recherche", //Todo: Translate
            "Warning": "Désactivé: ouvrez d'abord le menu de recherche!" //Todo: Translate
        },
        "Campagne": {
            "Title": "Kampagne",
            "Desc": "Übersicht über die benötigten Ressourcen",
        	"Warning" : "Deaktiviert: Besuche zuerst eine Provinz!"
		},
        "Negotiation": {
            "Title": "Assistant de négociation",
			"Desc": "Faire des propositions de négociations précises",
			"Warning": "Désactivé: commencez une négociation en premier!"
        },
		"Settings" : {
			"Title" : "Paramètres",
			"Desc" : "Ici il y a quelques éléments à configurer"
		},
		"Chat" : {
			"Title" : "Chat de guilde",
			"Desc" : "Discute en temps réel avec tout le monde"
		},
		"Unit" : {
			"Title" : "Armées",
			"Desc": "Toutes vos armées en un coup d'œil",
			"Warning": "Ouvrez 1x votre \"Organisation de l'Armée\" <br>Bouton \"U\""
		},
		"Forum" : {
			"Title" : "Forum",
			"Desc" : "Vous avez une question? Quelque chose à proposer ? Ou juste pour parler..."
		},
		"Ask" : {
			"Title" : "Question / Réponse",
			"Desc" : "Vous ne savez pas comment utiliser une fonctionnalité ?<br>Jetez un oeil ici !"
		},
		"Bugs" : {
			"Title" : "Erreurs / Envies",
			"Desc" : "Quelque chose n'est pas comme il devrait où vous avez une idéée ?"
		},
		"OutP" : {
			"Title" : "Colonie",
            "Desc": "Vue d'ensemble des ressources nécessaires",
            "DescWarningOutpostData": "<em id='outPW' class='tooltip-error'>Désactivé: Démarrer un avant-poste et recharger le jeu (F5)", //Todo: Translate
			"DescWarningBuildings" : "<em id='outPW' class='tooltip-error'>Désactivé: Allez d'abord dans la colonie !<br></em>Vue d'ensemble des ressources nécessaires"
		},
		"Info" : {
			"Title" : "Info techniques",
			"Desc" : "Affiche tous les éléments qui se déroulent en 'arrière plan'<br><em>Cela se remplit avec les infos ...</em>"
		}
	},

	"Settings" : {
		"Version": {
			"Title" : "Version",
			"DescDebug" : "Version de l'extension Chrome <strong class='text-danger'>BETA</strong>",
			"Desc" : "Version de l'extension Chrome"
		},
		"GlobalSend": {
			"Title" : "Envoi à foe-rechner.de",
			"Desc" : "Si vous voulez suivre les données avec votre guilde, activez cet élément. <br> Pour une utilisation personnelle, désactivez le."
		},
		"SendTavernInfo": {
			"Title" : "Activité PO/MO",
			"Desc" : "Est-ce que les activités de PO/MO doivent être transférer quand les événements ont lieu ?"
		},
		"SendGEXInfo": {
			"Title" : "Evaluations des expéditions de guildes",
			"Desc" : "Quand vous cliquez sur l'emplacement des expéditions de guildes ou sur le classement, les infos sont envoyées"
		},
		"SendGildMemberLGInfo": {
			"Title" : "Info GM des membres de la guilde",
			"Desc" : "En visitant les autres membres de la guilde, les données des GM seront envoyées à foe-rechner.de quand l'option d'envoi est activé."
		},
		"ShowNeighborsGoods": {
			"Title" : "Récolte des voisins",
			"Desc" : "Pendant la visite, montre ce qui est en cours de production"
		},
		"SendInvestigations": {
			"Title" : "Investissements des PFs",
			"Desc" : "Ouvrir l'hôtel de ville> Nouvelles > Grand monuments ; cela enverra l'info des PFs investit"
		},
		"ShowTavernBadge": {
			"Title" : "Affiche un compteur sur la taverne",
			"Desc" : "Dès qu'un placement dans la taverne est effectué, un compteur global apparaît."
		},
		"ShowOutpost": {
			"Title" : "Ressources de la colonie",
			"Desc" : "Affiche un menu pour les ressources de la colonie<br><u>Note:</u> Un rechargement du jeu est requis."
		},
		"PreScanLGList": {
			"Title" : "Analyse préliminaire de la vue d'ensemble de LG",
			"Desc" : "Parcourt la liste générale du voisin à l’ouverture lors de l’ouverture et détermine les LG éventuellement remplissables. <br> <u> Remarque: </u> Les dernières places étant uniquement transmises lors de l’ouverture d’un LG, le résultat peut être différent. L'analyse est enregistrée, cependant."
		},
		"CalculatorShowNegativ": {
			"Title" : "Bénéfice négatif dans le calculateur de coûts",
			"Desc" : "Voulez-vous voir le bénéfice négatif affiché?"
		},
		"AutomaticNegotiation": {
			"Title" : "Assistant de négociation",
			"Desc" : "L'assistant doit-il s'ouvrir automatiquement avec une négociation et fermer en cas d'annulation?"
		},
		"ResetBoxPositions": {
			"Title" : "Coordonnées de la boîte",
			"Desc" : "Toutes les coordonnées de la boîte doivent-elles être réinitialisées?",
			"Button" : "Supprimer!"
		},
		"ChangeLanguage": {
			"Title" : "Changer de langue",
			"Desc" : "Quelle langue, au lieu de la langue reconnue, devrait être utilisée?",
			"Dropdown": {
				"de" : "Allemand",
				"en" : "Anglaise",
				"fr" : "Français",
				"es" : "Espagnol"
			}
		}
	},

	"Eras": {
		"NoAge": "Sans âge",
		"StoneAge": "Age de Pierre",
		"BronzeAge": "l'âge du bronze",
		"IronAge": "Age du fer",
		"EarlyMiddleAge": "Early Middle Age",
		"HighMiddleAge": "Haut Moyen Âge",
		"LateMiddleAge": "Late Middle Age",
		"ColonialAge": "l'ère coloniale",
		"IndustrialAge": "âge industriel",
		"ProgressiveEra": "tournant du siècle",
		"ModernEra": "Modernity",
		"PostModernEra": "Postmodernism",
		"ContemporaryEra": "Présent",
		"TomorrowEra": "Demain",
		"FutureEra": "Future",
		"ArcticFuture": "Future Arctic",
		"OceanicFuture": "Oceanic Future",
		"VirtualFuture": "Virtual Future",
		"SpaceAgeMars": "Space: Mars"
	},

	"API" : {
		"UpdateSuccess" : "Mise à jour effectuée",
		"GEXPlayer" : "Les stages GEX des membres ont été mis à jour",
		"GEXChampionship" : "Le placement de guilde GEX a été mis à jour",
		"LGInvest" : "Vos investissements LG ont été transférés",
		"LGGildMember" : "__player__'s bâtiments légendaires ont été soumis"
	}
};
