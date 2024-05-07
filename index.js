const dictionary = [
    "abais", "abats", "abois", "abord", "abris", "abusa", "abuse", "abute", "acide", "acier", 
    "acres", "acris", "actes", "adage", "adieu", "admet", "adobe", "adoxa", "adore", "adule", 
    "adver", "aegir", "aerie", "aeros", "aider", "aides", "aigle", "aigre", "aigri", "ailes", 
    "aille", "aimer", "ainee", "aines", "ainsi", "airer", "aises", "aites", "ajout", "alain", 
    "alang", "alcee", "alcool", "aleas", "alert", "alese", "alevi", "alger", "algue", "alias", 
    "alios", "alite", "aloes", "alors", "alpes", "alter", "altru", "alune", "amant", "amena", 
    "amene", "amens", "amere", "amica", "amies", "amine", "amino", "amont", "amour", "ample", 
    "amuir", "amuse", "anais", "anars", "ancra", "andor", "anees", "anier", "anima", "anime", 
    "anise", "annex", "anode", "ansei", "antes", "anuit", "apele", "apide", "apres", "araks", 
    "arbre", "arcos", "arene", "argan", "argent", "argua", "argue", "aride", "aries", "arret", 
    "arsou", "artus", "arums", "aryen", "asile", "asper", "aspir", "assai", "assez", "astre", 
    "atlas", "atone", "atout", "atree", "attic", "auger", "auges", "aunes", "aupre", "aures", 
    "auroc", "autel", "autes", "auxis", "avais", "avait", "avant", "avecq", "avent", "avere", 
    "avert", "avide", "avoie", "avoir", "avois", "avons", "avoua", "avoue", "axait", "axant", 
    "axeit", "axera", "axiez", "ayant", "ayons",
"babel", "babou", "baclo", "badai", "badin", "bagel", "bagua", "baign", "baila", "baile", 
"bains", "baise", "baiso", "baiss", "balai", "balay", "balbo", "balda", "balec", "balis", 
"baliv", "balla", "balle", "baloo", "balza", "bamba", "bambi", "banal", "banco", "banda", 
"bande", "banjo", "banon", "bantu", "barbe", "barbu", "barda", "barde", "bardu", "barge", 
"barjo", "baron", "barra", "barre", "barus", "basal", "baser", "baset", "basil", "basin", 
"basis", "basit", "basse", "basto", "batar", "batel", "bates", "batho", "battu", "batuc", 
"baubi", "baume", "bauxi", "bavai", "baver", "baves", "bavez", "baveu", "bavon", "bazar", 
"beauf", "beaux", "becot", "beere", "beige", "beire", "belon", "bemol", "benga", "bengi", 
"bento", "benzo", "berca", "berce", "beret", "berge", "berne", "berot", "besac", "besas", 
"beser", "beses", "beter", "betes", "bette", "betty", "beure", "beuse", "bezot", "biage", 
"bible", "bides", "bield", "bienz", "biffe", "bigle", "bigor", "bijou", "biles", "bilge", 
"bilis", "bimbo", "binau", "biner", "bines", "binez", "bings", "binio", "binos", "biose", 
"birbe", "birse", "bisai", "bisas", "bises", "bisez", "bison", "bitch", "bitum", "biule", 
"bizar", "blain", "blanc", "blase", "blaye", "blida", "blond", "blues", "bluff", "bocky", 
"bogua", "boira", "boise", "boive", "bolos", "bombe", "bongo", "bonir", "bonos", "bonso", 
"boost", "boote", "booty", "boras", "borax", "borde", "borne", "boros", "borts", "bosse", 
"botas", "botte", "bouca", "bouet", "bouie", "bouin", "boule", "bours", "bouse", "bovin", 
"boxai", "boxas", "boxes", "boxez", "boxon", "boyau", "boyle", "brama", "brame", "brand", 
"brave", "brawn", "break", "breme", "brens", "brett", "breve", "brida", "bride", "brief", 
"briga", "brige", "brill", "brimb", "brinb", "brins", "brisa", "brise", "brits", "broda", 
"brode", "broie", "brois", "brome", "broue", "bruit", "brule", "bruni", "bruta", "brute", 
"bubon", "buche", "buisa", "buiso", "buisu", "bulbe", "bulbs", "buler", "bules", "bulez", 
"bulls", "bulot", "bumps", "bunch", "bunco", "bunge", "bunji", "bunke", "bunts", "buque", 
"bural", "burat", "burbs", "burin", "burka", "buros", "burqa", "burse", "busai", "busas", 
"buses", "busez", "butes", "butin", "butoi", "butor", "butte", "buvai", "buvat", "buvez", 
"buvon", "buzet", "byzus",
"cabas", "cacao", "cacha", "cache", "cacti", "cades", "cadet", "cadis", "cadre", "cafar", 
"cafes", "cagee", "cages", "cagez", "cahot", "caida", "caids", "caion", "caira", "caire", 
"cairs", "cajou", "calai", "calar", "calas", "calat", "calee", "caler", "cales", "calez", 
"calfe", "calif", "calin", "calot", "calva", "camai", "camas", "camel", "cameo", "cames", 
"camus", "canal", "cance", "canee", "caner", "canes", "canet", "canez", "canga", "canna", 
"canon", "canot", "canta", "cante", "cants", "canul", "caout", "capas", "capes", "capii", 
"capot", "capre", "capte", "capuc", "capus", "caque", "carat", "carbu", "carda", "carde", 
"cardo", "caria", "carie", "carne", "carpe", "carre", "carri", "carta", "carte", "casai", 
"casas", "casat", "casco", "cases", "casez", "casos", "cassa", "casse", "caste", "catai", 
"catas", "catet", "caths", "catie", "catir", "catit", "caton", "catte", "catys", "cauna", 
"cauri", "causa", "cause", "cauta", "caute", "cauve", "cavai", "cavas", "cavat", "cavee", 
"caver", "caves", "cavez", "cavie", "cavit", "cavum", "cayes", "cebil", "cecie", "cecle", 
"cedai", "cedas", "cedat", "cede", "cedee", "ceder", "cedes", "cedet", "cedez", "cedis", 
"cedra", "cedre", "ceins", "ceint", "celai", "celas", "celat", "celeb", "celer", "celes", 
"celet", "celez", "celle", "cemon", "cenet", "cense", "centa", "cente", "cents", "cepes", 
"cepie", "cerat", "cerce", "cerfs", "cerfs", "cerne", "ceros", "cerou", "certe", "cerum", 
"cerva", "cette", "ceuse", "chais", "champ", "chans", "chant", "chaos", "chape", "chaos", 
"chaud", "chefs", "chene", "chept", "cheva", "chefs", "chier", "chies", "chiez", "chiff", 
"chion", "chiot", "chira", "chire", "chocs", "choie", "choir", "chois", "choit", "choix", 
"chopai", "chopas", "chopat", "chopee", "choper", "chopes", "chopez", "chorda", "chouia", 
"chut", "ciens", "ciers", "cigue", "cilla", "cille", "cimee", "cimes", "cires", "ciron", 
"cirre", "cisal", "ciste", "cites", "civet", "civis", "civra", "civres", "civus", "clama", 
"clame", "clams", "clape", "claqua", "claqua", "claque", "claque", "clava", "clave", "clefs", 
"cleps", "clerc", "cleve", "clier", "clips", "clive", "clodo", "clope", "clora", "clore", 
"cloua", "cloue", "clown", "clubs",
"dadas", "dague", "daims", "daine", "daira", "daire", "daisa", "daise", "damee", "dames", 
"damna", "damne", "danse", "danss", "daris", "daron", "darts", "datai", "datas", "datee", 
"dater", "dates", "datez", "datif", "davai", "davas", "davat", "davee", "daver", "daves", 
"davez", "david", "davos", "dazes", "debil", "debit", "debou", "debut", "debve", "decai", 
"decan", "deces", "decid", "decit", "dechu", "decid", "decit", "declo", "decot", "decru", 
"decur", "dedie", "dedis", "dedos", "deets", "defet", "defia", "defie", "defis", "defit", 
"defle", "defli", "defri", "degat", "degre", "degue", "dejet", "delai", "delie", "delit", 
"deloi", "delut", "deman", "demes", "demie", "demis", "demit", "demi", "dence", "denia", 
"denie", "denis", "densi", "dents", "denue", "denut", "depas", "depeu", "depla", "deplo", 
"depot", "depou", "depui", "derby", "derie", "derme", "derni", "dessa", "desse", "desso", 
"dessu", "detel", "detia", "detie", "detox", "detru", "deuil", "deuse", "devai", "devas", 
"devat", "devee", "deven", "dever", "deves", "devet", "devia", "devie", "devin", "devit", 
"devon", "devou", "devra", "devre", "devus", "dexai", "dexee", "dexes", "dexte", "dexue", 
"dezam", "dezes", "diams", "diane", "diapo", "diene", "diesel", "diffu", "digne", "digue", 
"digue", "dilua", "dilue", "dimes", "dimis", "dimua", "dimue", "diner", "dines", "dinez", 
"dingo", "dions", "dires", "dirim", "disco", "dites", "dixie", "dizen", "dizen", "dizen", 
"dizen", "dizen", "dobla", "dobla", "dobla", "dobla", "dobla", "dobla", "docha", "docha", 
"docha", "docha", "docha", "dogma", "doigt", "doive", "dolai", "dolat", "dolby", "dolez", 
"dolie", "dolio", "dolma", "dolme", "dolos", "domain", "doles", "dolip", "dolos", "domal", 
"dompt", "donas", "dones", "donne", "donus", "dopas", "dopez", "dopit", "dora", "doree", 
"dorer", "dores", "doret", "dorez", "dorme", "dormi", "dorra", "dorse", "dorsu", "dortz", 
"dorai", "dorat", "doree", "dorer", "dorez", "dorit", "dormi", "dorne", "dorse", "dorsu", 
"dortz", "doser", "dosse", "dotal", "dotee", "doter", "dotes", "dotez", "dotis", "douai", 
"douan", "douas", "douat", "doubs", "doubs", "douce", "doues", "douez", "doufs", "douit",
"ebats", "ebele", "ebene", "eberl", "ecang", "ecart", "echee", "eches", "echez", "echot", 
"echue", "ecime", "eclee", "ecles", "eclet", "eclos", "ecole", "ecorn", "ecote", "ecots", 
"ecoul", "ecran", "ecris", "ecrou", "ecrit", "ecrou", "ecrus", "ecume", "ecure", "ecusa", 
"ecuse", "edene", "edita", "edite", "edite", "edite", "edits", "edite", "educa", "educa", 
"educe", "effet", "effeu", "effet", "egais", "egale", "egare", "egeri", "egerm", "egide", 
"egout", "eider", "eject", "elans", "elast", "elias", "elide", "eliez", "elima", "elite", 
"elles", "ellie", "eloge", "emane", "emanu", "embat", "embre", "embre", "embue", "emene", 
"emers", "emeti", "emets", "emetu", "emigre", "emine", "emise", "emite", "emolu", "emond", 
"empat", "empen", "empes", "empeu", "empli", "empois", "emule", "encre", "endos", "enfin", 
"enfon", "engin", "engue", "enjeu", "enlai", "enlev", "enlis", "enlum", "ennee", "ennes", 
"enoge", "enols", "enonc", "enorm", "enque", "enray", "enrol", "enrub", "ensie", "ensor", 
"ensua", "ensue", "entee", "entet", "entra", "entra", "entre", "envie", "envol", "envoi", 
"envoi", "envol", "envou", "eole", "epais", "epare", "epars", "epata", "epate", "epave", 
"epice", "epier", "epies", "epile", "epils", "epine", "eping", "epita", "epite", "epice", 
"epuis", "epris", "epris", "eprou", "epris", "epure", "equin", "erail", "erbia", "erbes", 
"erige", "erine", "ernes", "ernie", "eros", "errai", "erras", "errat", "erre", "erres", 
"erre", "erses", "erven", "esche", "escot", "espie", "esque", "essai", "essui", "estim", 
"estoc", "etage", "etaie", "etain", "etal", "etala", "etale", "etals", "etape", "etaye", 
"ete", "etend", "etero", "etes", "eteuf", "eteut", "ethos", "etiez", "etige", "etira", 
"etire", "etoi", "etole", "etond", "etons", "etoya", "etoye", "etrai", "etras", "etrat", 
"etres", "etre", "etriv", "etroc", "etude", "etuve", "eudes", "eumee", "eumer", "eumes", 
"eune", "eussu", "eutes", "eutre", "evase", "event", "evert", "evier", "evita", "evite", 
"evola", "evolu", "exacs", "exact", "exalt", "exces", "excis", "excit", "exclu", "excus", 
"exeat", "exhala", "exhala", "exhaler", "exhale", "exile", "exils", "exine", "exits", "exode", 
"expat", "expos", "extas", "exten", "extra", "exude", "exult", "eyais", "eyant", "eyres", 
"ezels",
"fabla", "fable", "fabri", "facha", "fache", "facho", "facto", "factu", "fadai", "fadas", 
"faday", "fadee", "fader", "fades", "fadez", "fagot", "faire", "fakir", "falun", "falze", 
"famee", "fames", "famil", "fanal", "fanes", "faner", "fanon", "fanum", "fares", "farci", 
"farde", "farin", "faros", "farsa", "farse", "farti", "fasci", "fasse", "faste", "fatal", 
"fates", "fatie", "fatig", "faute", "fauve", "favel", "favus", "fayot", "feins", "feint", 
"felix", "fella", "femme", "fenil", "fente", "ferai", "feral", "feras", "feret", "ferie", 
"ferme", "fesse", "festi", "fetal", "fetes", "feuil", "feurs", "feutr", "feves", "fevre", 
"fiage", "fiable", "fiche", "fiefs", "fieff", "fient", "fifre", "figue", "fiiez", "filai", 
"filao", "filas", "filat", "filee", "filer", "files", "filet", "filez", "filin", "filou", 
"fimas", "fions", "fiora", "fiore", "fique", "firma", "firme", "firme", "firne", "fisca", 
"gabar", "gaffe", "gafou", "gagea", "gagee", "gager", "gages", "gagez", "gaine", "gains", 
"gaite", "galbe", "galee", "galon", "galop", "galva", "gamba", "gamet", "gamex", "ganja", 
"gaols", "gapos", "gapot", "garae", "gares", "garou", "garum", "gaspi", "gasse", "gater", 
"gates", "gatez", "gauch", "gaude", "gauge", "gaula", "gaule", "gauni", "gauss", "gavai", 
"gavas", "gavat", "gavee", "gaver", "gaves", "gavez", "gazon", "geais", "geant", "geels", 
"geind", "geins", "geint", "gelee", "geles", "gelez", "gelos", "gemie", "gemir", "gemis", 
"gemme", "genai", "genal", "genas", "genat", "genee", "gener", "genes", "genet", "genez", 
"genie", "genio", "genou", "genta", "genti", "gento", "gents", "geole", "geoli", "gerai", 
"geras", "gerat", "geree", "gerer", "geres", "gereu", "gerey", "germe", "gersa", "gerse", 
"gesir", "gesta", "geste", "geste", "gibet", "gicle", "gicla", "gifle", "gigot", "gigot", 
"gilets", "gille",
"habit", "habla", "hache", "hache", "hachy", "hadji", "hafiz", "hagis", "haida", "haine", 
"haine", "hairs", "haiti", "haixa", "hajar", "hajji", "hakka", "hales", "halle", "halte", 
"hamac", "hampe", "hansa", "hardi", "haris", "harle", "harpe", "harpe", "harpe", "harpe", 
"harpe", "harry", "hasch", "hatee", "hater", "hates", "hatez", "hatra", "haute", "havas", 
"haver", "haves", "havez", "havre", "hayes", "hazan", "hazar", "hebra", "hecta", "heide", 
"heidi", "heidy", "heine", "helea", "helio", "helix", "helot", "hente", "herbe", "herbs", 
"heros", "herse", "hertz", "hesse", "heurt", "hexyl", "hibou", "hidal", "hiena", "hiera", 
"hieus", "hieut", "hieve", "higon", "hijra", "hilae", "hilai", "hilas", "hilat", "hile", 
"hilee", "hiler", "hiles", "hilet", "hilez", "hilum", "himba", "hindi", "hindi", "hipis", 
"hippo", "hippy", "hirax", "hissa", "hisso", "hivat", "hoche", "hodie", "hoirs", "hoise", 
"hojja", "hojja", "holer", "holle", "homos",
"ibere", "iboga", "icete", "icosa", "ictus", "idees", "idole", "idyll", "ignes", "igore", 
"igors", "iguane", "ilang", "ileon", "ilium", "illot", "ilote", "image", "images", "imago", 
"imams", "imans", "imbue", "imide", "imine", "imite", "imman", "immue", "immun", "impot", 
"impro", "impur", "imput", "inane", "inape", "inapa", "inapi", "inapt", "inbis", "incoy", 
"incru", "incus", "index",
"jachere", "jacobi", "jacobs", "jactas", "jactee", "jacter", "jactes", "jactez", "jadis", 
    "jaguar", "jahres", "jaille", "jaisse", "jalons", "jaloux", "jamais", "jambe", "jambon", 
    "japon", "japte", "jappe", "jaune", "jauni", "jazzs", "jeans", "jecas", "jeeps", "jeeta", 
    "jelut", "jerks", "jetas", "jetee", "jeter", "jetes", "jetez", "jeton",
    "kabig", "kacha", "kakis", "kanak", "kansa", "kaoli", "karat", "karma", "karts", "kawai", 
    "kayac", "kepis", "kermi", "khans", "kiefs", "kifai", "kifas", "kifat", "kifay", "kifee", 
    "kifer", "kifes", "kifez", "kifos", "kilot", "kilty", "kinas", "kinds", "kines", "kinsa", 
    "kiosc", "kippe", "kitty", "klaxo", "klein", "kneff", "kohol", "kokia", "koine", "kooka", 
    "korea", "kotai", "kotas", "kouas", "kouba", "kouff", "koums", "kraft", "kriss", "krona", 
    "krone", "kroum",
    "label", "lacet", "lache", "lacie", "lacis", "lacks", "lacra", "lacre", "lacte", "laded", 
    "ladre", "ladys", "laeti", "lagan", "lager", "lagna", "lagne", "lagun", "laics", "laide", 
    "laids", "laies", "laine", "laine",
    "maars", "mabel", "macau", "macis", "macon", "madre", "mafie", "mafis", "mafou", "magie", 
    "magma", "magna", "magot", "mahar", "maias", "maies", "maieu", "maigre", "maigri", "maill", 
    "maine",
    "nacre", "nagir", "naifs", "naive", "nairs", "naiss", "najas", "narth", "narre", "nasse",
    "natal", "natif", "naval", "navel", "navre", "nazar", "nazca", "nazes", "nazis", "neant",
    "nebar", "nebel", "nebes", "nebka", "neces", "neffe", "nefle", "neige", "neins", "neons",
    "neres", "nerfs", "nerit", "nerka", "nervi",
    "oasis", "objet", "oblats", "oblet", "obses", "obtem", "occis",
    "palet", "pales", "paleu", "palie", "palla", "palle", "palli", "palmi", "palpa", "palpe", 
    "palpi", "palud", "panel", "panes", "panga", "panne", "pansa", "panse", "panto", "papal", 
    "papas", "papel", "paper", "papes", "papez", "paras", "pardi", "paria", "parie", "paris", 
    "parti", "parus", "parut", "parve", "pasha", "passe", "pasta", "paste", "pasti", "patas", 
    "patel", "pater", "patin", "patte", "patty", "paula", "pause", "pavat", "pavel", "paver", 
    "paves", "pavez", "pavit", "pavot", "pawnee", "paxos", "peage", "peaua", "peaus", "pecha", 
    "peche", "pecke", "peder", "pedes", "pedis", "pedra", "peine", "peins", "peint", "pekin", 
    "pekoe", "peler", "pelez", "pelle", "penal", "penat", "penca", "pence", "penes", "pengo", 
    "penne", "pense", "penta", "pente", "penus", "penza", "peper", "pepin", "pepys", "pequa", 
    "peras", "perce", "perco", "perds", "perdu", "peres", "peril", "perit", "perla", "perle", 
    "peron", "perot", "perpe", "perre", "perri", "perro", "perso", "perus", "perut", "perven", 
    "pesai", "pesas", "pesat", "pesee", "peser", "peses", "peset", "pesos", "pesto", "petal", 
    "peter", "petit", "peton", "petra", "petre", "petri", "petun", "peuls", "peure", "pevez", 
    "pexes", "peyot", "peyre", "peyse", "pezes", "piano",
    "quais", "quart", "quasi", "quatu", "quels", "quene", "quere", "quest", "quete", "queue",
    "rabat", "rabbi", "rabes", "rabia", "rabot", "racas", "races", "rache", "rachi", "racin", 
    "radar", "radee", "rades", "radie", "radio", "radis", "radon", "rafal", "rafee", "rafer", 
    "rafes", "rafia", "rafle", "rafra", "rafte", "ragas", "ragaz", "ragot", "rague", "raide", 
    "raidi", "raids", "raies", "raire", "raisa", "raise", "raiti", "rajas", "rajat", "rajee", 
    "rajia", "rajon", "rajos", "rales", "ralli", "rallu", "ralon", "ramas", "ramat", "ramda", 
    "rames", "ramey", "ramie", "ramis", "ramme", "ramol", "rampe", "ramse", "ranch", "rands", 
    "rangs", "rangy", "ranis", "ranol", "ranta", "rante", "rapai", "rapas", "rapat", "rapee", 
    "rapes", "rapet", "rapex", "raphe", "rapie", "rapin", "rapis", "rappe", "rappa", "rapta", 
    "rapte", "rares", "raros", "rasai", "rasas", "rasat", "rasax", "rasco", "rasee", "raser", 
    "rases", "raset", "rasse", "rasta", "ratee", "rater", "rates", "ratex", "ratif", "raton",
    "sabir", "sable", "sabra", "sabre", "sache", "sacra", "sacre", "sadhu", "sages", "sagou", 
    "sahib", "sahui", "saied", "saies", "saill", "saine", "saint",
    "table", "tabou", "tache", "tacot", "taffe", "tafia", "taies", "taill", "taire", "taise", 
    "talai", "talas", "talat", "talcs", "taleh", "taler", "tales", "talez", "talon", "talus", 
    "tamar", "tambou", "tameh", "tamil", "tamis", "tamia", "tammie", "tamou", "tance", "tanche", 
    "tanga", "tange", "tango", "tangi", "tangs", "tangu", "tanin", "tanis", "tanka", "tanna", 
    "tanne", "tannu", "tanuk", "tanus", "taped", "taper", "tapes", "tapez", "tapis", "tapir",
    "ulcer", "unies", "union", "unira", "unisa", "unito", "unite", "units", "usage", "usais", 
    "usait", "usant", "usees", "usent", "usera", "usent", "usera", "usiez", "usina", "usine", 
    "usons",
    "vache", "vacua", "vague", "vapes", "vaper", "vapee",
    "wharf", "wagon", "wakas", "watts",
    "xyste", "xyloïde", "xénie",
    "yacht", "yacks", "yales", "yangs", "yarda", "yaros", "yassa", "yatou", "yatis", "yazid", 
    "yelks", "yelpe", "yelps", "yemen", "yenne", 
    "yeuse", "yille", "yogas", "yogin", "yogis", "yoles", "yoles", "yolos", "yomim", 
    "yomme", "yorki", "yotta", "youpi", "youts", "yoyos", 
    "zadig", "zaius", "zamia", "zappe", "zappy", "zazie", "zebre", "zebus", "zeida", "zelko", 
    "zenet", "zenon", "zeone", "zephs", "zeroe", "zeros", "zeroz", "zeule", "zezai", "zibet", 
    "zieut", "zigou", "zings", "zingy", "zinke", "zinks", "zinzin", "zirai", "zirez", "zizis", 
    "zodia", "zoide", "zoile", "zoise", "zolan", "zolis", "zombi", "zonal", "zones", "zonka", 
    "zooma", "zooms", "zoome", "zoons", "zouba", "zouke", "zouks", "zoups", "zours", "zouze", 
    "zoysia", "zozos"
];

const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
    .fill()
    .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};
function updateGrid(){
    for(let i=0; i < state.grid.length; i++){
        for(let j=0; j< state.grid[i].length; j++){
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}
function drawBox(container, row, col, letter = ''){
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function drawGrid(container){
    const grid = document.createElement('div');
    grid.className = 'grid';
    for(let i=0; i<6; i++){
        for(let j = 0; j <5; j++){
            drawBox(grid, i, j);
        }
    }
    container.appendChild(grid);
}

function registerKeyboardEvents(){
    document.body.onkeydown = (e) => {
        const key = e.key;
        if(key === 'Enter'){
            if(state.currentCol === 5){
                const word = getCurrentWord();
                if(isWordValid(word)){
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;
                }else{
                    alert("Le mot existe pas ou n'est pas dans mon jeu, Tocard. ")
                }
            }

        }if(key === 'Backspace'){
            removeLetter();
        }if(isLetter(key)){
            addLetter(key);
        }
        updateGrid();
    };
}
function getCurrentWord(){
    return state.grid[state.currentRow].reduce((prev,curr) => prev + curr);
}
function isWordValid(word){
    return dictionary.includes(word);
}
function revealWord(guess){
    const row = state.currentRow;
    const animation_duration = 500;
    for(let i = 0; i <5; i++){
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
        setTimeout(()=> {
            if(letter === state.secret[i]){
            box.classList.add('right');
        }else if(state.secret.includes(letter)){
            box.classList.add('wrong');
        }else{
            box.classList.add('empty');
        }
    },((i + 1) * animation_duration) / 2);
        
        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;
    setTimeout(()=> {
        if(isWinner){
        alert('Bravo tu as gagné !');
    }else if(isGameOver){
        alert(`Looser ! Le mot était ${state.secret}`);
    }
    }, 3* animation_duration);
}

function isLetter(key){
    return key.length === 1 && key.match(/[a-z]/i);
}
function addLetter(letter){
    if(state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}
function removeLetter(){
    if(state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}
function startup(){
    const game = document.getElementById('game');
    drawGrid(game);

    registerKeyboardEvents();

}

startup();