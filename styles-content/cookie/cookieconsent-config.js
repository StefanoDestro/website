import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

CookieConsent.run({
    onAccept: (cookie) => {
        // Check if analytics cookies are accepted
        if (cookie.categories.analytics) {
            loadGoogleAnalytics();
        }
    },
    cookie: {
        expiresAfterDays: acceptType => {
            return acceptType === 'all'
                ? 365.25
                : 5;
        }
    },
    mode: 'opt-in',
    autorun: true,
    hide_from_bots: true,
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {
            readOnly: false,
            autoClear: {
                cookies: [
                    {
                        name: /^(_ga)/      //regex
                    },
                    {
                        name: '_gid'        //string
                    }
                ]
            }
        }
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. By clicking 'Accept all', you consent to our use of cookies.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"https://stefanodestro.com/privacypolicy/\">Privacy Policy</a>\n<a href=\"https://stefanodestro.com/privacypolicy/\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Cookies are small text files used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function properly. This category only includes cookies that ensure basic functionalities and security features of the website. They do not store any personal information.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any queries in relation to our policy on cookies and your choices, please <a class=\"cc__link\" href=\"https://stefanodestro.com/contact/\">contact us</a>."
                        }
                    ]
                }
            },
            
            it: {
                consentModal: {
                    title: "Ciao viaggiatore, è tempo di biscotti!",
                    description: "Utilizziamo i cookie per personalizzare contenuti e annunci, fornire funzionalità di social media e analizzare il nostro traffico. Condividiamo anche informazioni sul tuo utilizzo del nostro sito con i nostri partner di social media, pubblicità e analisi, che possono combinarle con altre informazioni che hai fornito loro o che hanno raccolto dal tuo utilizzo dei loro servizi. Cliccando su 'Accetta tutto', acconsenti all'uso dei cookie.",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    showPreferencesBtn: "Gestisci preferenze",
                    footer: "<a href=\"https://stefanodestro.com/privacypolicy/\">Informativa sulla privacy</a>\n<a href=\"https://stefanodestro.com/privacypolicy/\">Termini e condizioni</a>"
                },
                preferencesModal: {
                    title: "Centro preferenze per il consenso",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    savePreferencesBtn: "Salva le preferenze",
                    closeIconLabel: "Chiudi la finestra",
                    serviceCounterLabel: "Servizi",
                    sections: [
                        {
                            title: "Utilizzo dei Cookie",
                            description: "I cookie sono piccoli file di testo utilizzati per memorizzare piccole informazioni. Vengono memorizzati sul tuo dispositivo quando il sito web viene caricato sul tuo browser. Questi cookie ci aiutano a far funzionare correttamente il sito web, a renderlo più sicuro, a fornire una migliore esperienza utente e a capire come il sito web si comporta e analizzare cosa funziona e dove necessita di miglioramenti."
                        },
                        {
                            title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                            description: "Questi cookie sono essenziali per il corretto funzionamento del sito web. Questa categoria include solo i cookie che garantiscono funzionalità di base e caratteristiche di sicurezza del sito web. Non memorizzano alcuna informazione personale.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookie Analitici",
                            description: "Questi cookie memorizzano informazioni come il numero di visitatori del sito web, il numero di visitatori unici, quali pagine del sito web sono state visitate, la fonte della visita, ecc. Questi dati ci aiutano a capire e analizzare quanto bene il sito web si comporta e dove necessita di miglioramenti.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Ulteriori informazioni",
                            description: "Per qualsiasi domanda relativa alla nostra politica sui cookie e alle tue scelte, per favore <a class=\"cc__link\" href=\"https://stefanodestro.com/contact/\">contattaci</a>."
                        }
                    ]
                }
            },
            
            de: {
                consentModal: {
                    title: "Hallo Reisende, es ist Kekszeit!",
                    description: "Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien bereitzustellen und unseren Traffic zu analysieren. Wir teilen auch Informationen über Ihre Nutzung unserer Website mit unseren Partnern für soziale Medien, Werbung und Analysen, die diese mit anderen Informationen kombinieren können, die Sie ihnen bereitgestellt haben oder die sie durch Ihre Nutzung ihrer Dienste gesammelt haben. Durch Klicken auf 'Alle akzeptieren' stimmen Sie der Verwendung von Cookies zu.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"https://stefanodestro.com/privacypolicy/\">Datenschutz</a>\n<a href=\"https://stefanodestro.com/privacypolicy/\">Bedingungen und Konditionen</a>"
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modal schließen",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Cookies sind kleine Textdateien, die verwendet werden, um kleine Informationen zu speichern. Sie werden auf Ihrem Gerät gespeichert, wenn die Website in Ihrem Browser geladen wird. Diese Cookies helfen uns, die Website ordnungsgemäß funktionieren zu lassen, sie sicherer zu machen, eine bessere Benutzererfahrung zu bieten und zu verstehen, wie die Website funktioniert und um zu analysieren, was funktioniert und wo Verbesserungen benötigt werden."
                        },
                        {
                            title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Diese Cookies sind für das Funktionieren der Website unerlässlich. Diese Kategorie umfasst nur Cookies, die grundlegende Funktionalitäten und Sicherheitsmerkmale der Website gewährleisten. Sie speichern keine persönlichen Informationen.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytische Cookies",
                            description: "Diese Cookies speichern Informationen wie die Anzahl der Besucher der Website, die Anzahl der einzigartigen Besucher, welche Seiten der Website besucht wurden, die Quelle des Besuchs usw. Diese Daten helfen uns zu verstehen und zu analysieren, wie gut die Website funktioniert und wo sie Verbesserungen benötigt.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Für alle Anfragen in Bezug auf unsere Cookie-Richtlinien und Ihre Wahlmöglichkeiten, bitte <a class=\"cc__link\" href=\"https://stefanodestro.com/contact/\">kontaktieren Sie uns</a>."
                        }
                    ]
                }
            },            
            es: {
                consentModal: {
                    title: "Hola viajero, es la hora de las galletas!",
                    description: "Usamos cookies para personalizar contenido y anuncios, proporcionar funciones de redes sociales y analizar nuestro tráfico. También compartimos información sobre su uso de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, quienes pueden combinarla con otra información que usted les haya proporcionado o que hayan recopilado de su uso de sus servicios. Al hacer clic en 'Aceptar todo', usted consiente el uso de cookies.",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"https://stefanodestro.com/privacypolicy/\">Política de privacidad</a>\n<a href=\"https://stefanodestro.com/privacypolicy/\">Términos y condiciones</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar modal",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Las cookies son pequeños archivos de texto utilizados para almacenar pequeñas piezas de información. Se almacenan en su dispositivo cuando el sitio web se carga en su navegador. Estas cookies nos ayudan a hacer que el sitio web funcione correctamente, a hacerlo más seguro, proporcionar una mejor experiencia de usuario, y entender cómo se desempeña el sitio web y analizar qué funciona y dónde necesita mejoras."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Estas cookies son esenciales para que el sitio web funcione correctamente. Esta categoría solo incluye cookies que garantizan funcionalidades básicas y características de seguridad del sitio web. No almacenan ninguna información personal.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analíticas",
                            description: "Estas cookies almacenan información como el número de visitantes del sitio, el número de visitantes únicos, qué páginas del sitio han sido visitadas, la fuente de la visita, etc. Estos datos nos ayudan a comprender y analizar el rendimiento del sitio web y dónde necesita mejoras.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Más información",
                            description: "Para cualquier consulta relacionada con nuestra política de cookies y sus opciones, por favor <a class=\"cc__link\" href=\"https://stefanodestro.com/contact/\">contáctenos</a>."
                        }
                    ]
                }
            },            
            fr: {
                consentModal: {
                    title: "Bonjour voyageur, c'est l'heure des cookies!",
                    description: "Nous utilisons des cookies pour personnaliser le contenu et les annonces, fournir des fonctionnalités de médias sociaux et analyser notre trafic. Nous partageons également des informations sur votre utilisation de notre site avec nos partenaires de médias sociaux, de publicité et d'analyse, qui peuvent les combiner avec d'autres informations que vous leur avez fournies ou qu'ils ont collectées lors de votre utilisation de leurs services. En cliquant sur 'Accepter tout', vous consentez à l'utilisation de cookies.",
                    acceptAllBtn: "Accepter tout",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: "<a href=\"https://stefanodestro.com/privacypolicy/\">Politique de confidentialité</a>\n<a href=\"https://stefanodestro.com/privacypolicy/\">Termes et conditions</a>"
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    acceptAllBtn: "Accepter tout",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauver les préférences",
                    closeIconLabel: "Fermer la modale",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation de Cookies",
                            description: "Les cookies sont de petits fichiers texte utilisés pour stocker de petites informations. Ils sont stockés sur votre appareil lorsque le site Web est chargé sur votre navigateur. Ces cookies nous aident à faire fonctionner le site Web correctement, à le rendre plus sûr, à fournir une meilleure expérience utilisateur, et à comprendre comment le site Web fonctionne et à analyser ce qui fonctionne et où il a besoin d'amélioration."
                        },
                        {
                            title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "Ces cookies sont essentiels pour le fonctionnement du site Web. Cette catégorie comprend uniquement les cookies qui garantissent les fonctionnalités de base et les caractéristiques de sécurité du site Web. Ils ne stockent aucune information personnelle.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analytiques",
                            description: "Ces cookies stockent des informations telles que le nombre de visiteurs du site, le nombre de visiteurs uniques, les pages du site qui ont été visitées, la source de la visite, etc. Ces données nous aident à comprendre et à analyser la performance du site Web et où il a besoin d'amélioration.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Plus d'informations",
                            description: "Pour toute question relative à notre politique sur les cookies et vos choix, veuillez <a class=\"cc__link\" href=\"https://stefanodestro.com/contact/\">nous contacter</a>."
                        }
                    ]
                }
            },
            
        }
    }
});



function loadGoogleAnalytics() {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FMSMK4VRMT';
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-FMSMK4VRMT');
}