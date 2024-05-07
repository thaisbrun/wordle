const dictionary = ['ABALE','ABATS','ABAYA','ABBES','ABCES','ABDOS','ABEES','ABERS','ABETI','ABIES','ABIMA',
'ABIME','ABLES','ABOIE','ABOIS','ABOLI','ABORD','ABOTS','ABOUT','ABOYA','ABOYE','ABRAS','ABRIA','ABRIE','ABRIS',
'ABUSA','ABUSE','ABUTA','ABUTE','ABYME','ACAIS','ACARE','ACCES', 'ACCON','ACCOT','ACCRO','ACCRU','ACCUL','ACCUS',
'ACERA', 'ACERE', 'ACHAR', 'ACHAT', 'ACHEB', 'ACHES', 'ACIDE', 'ACIER', 'ACINI', 'ACMES', 'ACNES', 'ACONS', 'ACORE', 
'ACRAS', 'ACRES', 'ACTAI', 'ACTAS', 'ACTAT', 'ACTEE', 'ACTER', 'ACTES', 'ACTEZ', 'ACTIF', 'ACTUS', 'ACULS', 'ACYLE', 
'ADACS', 'ADAGE', 'ADAVS', 'ADDAX', 'ADENT', 'ADIEU', 'ADIRE', 'ADJAR', 'ADMET', 'ADMIN', 'ADMIS', 'ADMIT', 'ADNEE', 
'ADNES', 'ADOBE', 'ADONC', 'ADONS', 'ADORA', 'ADORE', 'ADRAR', 'ADRET', 'ADULA', 'ADULE', 'AEDES', 'AERAI', 'AERAS', 
'AERAT', 'AEREE', 'AERER', 'AERES','AEREZ', 'AFARE', 'AFARS', 'AFATS', 'AFFIN', 'AFFUT', 'AFROS', 'AFTER', 'AGACA', 
'AGACE', 'AGADA', 'AGAME', 'AGAMI', 'AGAPE', 'AGATE', 'AGAVE', 'AGEES', 'AGENT', 'AGGLO', 'AGHAS', 'AGIES', 'AGILE', 
'AGIOS', 'AGIRA', 'AGITA', 'AGITE', 'AGNAT', 'AGNEL', 'AGNIE', 'AGNIS','AGONI', 'AGORA', 'AGREA', 'AGREE', 'AGREG', 
'AGRES', 'AGUIS', 'AHANA', 'AHANE', 'AHANS', 'AHURI', 'AICHA', 'AICHE', 'AIDAI', 'AIDAS', 'AIDAT', 'AIDEE', 'AIDER', 
'AIDES', 'AIDEZ', 'AIENT', 'AIEUL', 'AIEUX', 'AIGLE', 'AIGRE', 'AIGRI', 'AIGUE', 'AIGUS', 'AILEE', 'AILES', 'AILLA', 
'AILLE', 'AIMAI', 'AIMAS', 'AIMAT', 'AIMEE', 'AIMER', 'AIMES', 'AIMEZ', 'AINEE', 'AINES', 'AINOU', 'AINSI', 'AIOLI', 
'AIRAI', 'AIRAS', 'AIRAT', 'AIRCO', 'AIREE', 'AIRER','AIRES', 'AIREZ', 'AISEE', 'AISES', 'AISYS', 'AJONC', 'AJOUR', 
'AJOUT', 'AJUTS', 'AKANS', 'AKENE', 'AKITA', 'ALBUM', 'ALDIN', 'ALDOL', 'ALEAS', 'ALEMS', 'ALENE', 'ALEPH', 'ALESA', 
'ALESE', 'ALEVI', 'ALEZE', 'ALFAS', 'ALGAL', 'ALGIE', 'ALGOL', 'ALGUE', 'ALIAS', 'ALIBI', 'ALIEN', 'ALIOS', 'ALISE', 
'ALITA', 'ALITE', 'ALIZE', 'ALLAI', 'ALLAS', 'ALLAT', 'ALLEE', 'ALLER', 'ALLES', 'ALLEU', 'ALLEZ', 'ALLIA', 'ALLIE', 
'ALLOC', 'ALMEE', 'ALOCO', 'ALOES', 'ALOIS', 'ALOKO', 'ALORS', 'ALOSE','ALPAI', 'ALPAS', 'ALPAT', 'ALPAX', 'ALPEE', 
'ALPER', 'ALPES', 'ALPEZ', 'ALPHA', 'ALPIN', 'ALTEA', 'ALTER', 'ALTOS', 'ALULE', 'ALUNA', 'ALUNE', 'ALUNI', 'ALUNS', 
'ALVIN', 'ALYAS', 'ALYTE', 'AMANS', 'AMANT', 'AMATI', 'AMBLA', 'AMBLE', 'AMBON', 'AMBRA', 'AMBRE', 'AMENA', 'AMENE', 
'AMERE', 'AMERS', 'AMIBE', 'AMICT', 'AMIDE', 'AMIES', 'AMIGO', 'AMINE', 'AMISH', 'AMMAN', 'AMMIS', 'AMOKS', 'AMOME', 
'AMONT', 'AMOUR', 'AMPHI', 'AMPLE', 'AMPLI', 'AMUIE', 'AMUIR', 'AMUIS', 'AMUIT', 'AMURA', 'AMURE', 'AMUSA','AMUSE', 
'AMYLE', 'ANALE', 'ANARS', 'ANAUX', 'ANCHE', 'ANCRA', 'ANCRE', 'ANDIN', 'ANEES', 'ANELS', 'ANETH', 'ANGES', 'ANGLE', 
'ANGON', 'ANGOR', 'ANGUS', 'ANIER', 'ANILS', 'ANIMA', 'ANIME', 'ANION', 'ANISA', 'ANISE', 'ANITE', 'ANJOU', 'ANKHS', 
'ANNAL', 'ANNEE', 'ANNIF', 'ANNIV', 'ANODE', 'ANOLI', 'ANONA', 'ANONE', 'ANONS', 'ANSEE', 'ANSES', 'ANTAN', 'ANTES',
'ANTRE', 'AORTE', 'AOUTA', 'AOUTE', 'AOUTS', 'APERO', 'APHTE', 'APIDE', 'APIOL', 'APION', 'APLAT', 'APNEE', 'APODE', 
'APPAS', 'APPAT', 'APPEL', 'APPLI', 'APPUI', 'APREM', 'APRES', 'APTES', 'APURA', 'APURE', 'APYRE', 'ARABE', 'ARACK', 
'ARACS', 'ARAKS', 'ARASA', 'ARASE', 'ARBRE', 'ARCHE', 'ARCHI', 'ARCHS', 'ARCON', 'ARDUE', 'ARDUS', 'ARECS', 'ARENA', 
'ARENE', 'ARETE', 'ARGAN', 'ARGAS', 'ARGOL', 'ARGON', 'ARGOT', 'ARGUA', 'ARGUE', 'ARGUS', 'ARHAT', 'ARIAS', 'ARIDE', 
'ARIEN', 'ARISA','ARISE', 'ARMAI', 'ARMAS', 'ARMAT', 'ARMEE', 'ARMER', 'ARMES', 'ARMET', 'ARMEZ', 'ARMON', 'AROBE', 
'AROLE', 'AROLS', 'AROME', 'ARQUA', 'ARQUE', 'ARRET', 'ARROI', 'ARSIN', 'ARSIS', 'ARTEL', 'ARTYS', 'ARUMS', 'ARYEN', 
'ARYLE','ARZEL', 'ASADO', 'ASANA', 'ASDIC', 'ASICS', 'ASILE', 'ASINE', 'ASINS', 'ASPES', 'ASPIC', 'ASPIS', 'ASPLE', 
'ASPRE', 'ASQUE', 'ASRAM', 'ASSAI', 'ASSEC', 'ASSES', 'ASSEZ', 'ASSIS', 'ASSIT', 'ASSOS', 'ASTER', 'ASTES', 'ASTIC', 
'ASTIS', 'ASTRE', 'ATACA', 'ATELE', 'ATEMI', 'ATHEE', 'ATHLE', 'ATIPA', 'ATLAS', 'ATMAN', 'ATOCA', 'ATOLL', 'ATOME', 
'ATONE', 'ATOUR', 'ATOUT', 'ATRES', 'AUBES', 'AUBIN', 'AUCUN', 'AUDIO', 'AUDIT', 'AUGEE', 'AUGES', 'AUGET', 'AULAS', 
'AULNE', 'AUNAI', 'AUNAS', 'AUNAT','AUNEE','AUNER','AUNES','AUNEZ','AURAI','AURAS','AUREZ','AUSSI','AUTAN', 'AUTEL', 
'AUTOS', 'AUTRE', 'AVAHI', 'AVAIS', 'AVAIT', 'AVALA', 'AVALE', 'AVALS', 'AVANT', 'AVARE', 'AVENS', 'AVENT', 'AVENU', 
'AVERA', 'AVERE', 'AVERS', 'AVEUX', 'AVIDE', 'AVIEN', 'AVIEZ', 'AVILI', 'AVINA', 'AVINE', 'AVION', 'AVISA', 'AVISE', 
'AVISO','AVIVA','AVIVE','AVOIE', 'AVOIR', 'AVONS', 'AVOUA', 'AVOUE', 'AVOYA', 'AVOYE', 'AVRIL', 'AWACS', 'AWALE', 
'AWELE', 'AXAIS', 'AXAIT', 'AXANT', 'AXEES', 'AXELS', 'AXENE', 'AXENT', 'AXERA', 'AXIAL', 'AXIEZ', 'AXILE', 'AXOAS', 
'AXONE', 'AXONS', 'AYANT', 'AYONS', 'AZERI', 'AZOBE', 'AZORA', 'AZORE', 'AZOTA', 'AZOTE', 'AZUKI', 'AZURA', 'AZURE', 
'AZURS', 'AZYME', 'BABAS', 'BABEL', 'BABIL', 'BABYS', 'BACHA', 'BACHE', 'BACHI', 'BACLA', 'BACLE', 'BACON', 'BACUL', 
'BADAI', 'BADAS', 'BADAT', 'BADEE', 'BADER', 'BADES', 'BADEZ', 'BADGE', 'BADIN', 'BAFFA', 'BAFFE', 'BAFRA', 'BAFRE', 
'BAGAD', 'BAGEL', 'BAGGY', 'BAGNE', 'BAGOU', 'BAGUA', 'BAGUE', 'BAHAI', 'BAHTS', 'BAHUT', 'BAIES', 'BAILE', 'BAILS', 
'BAINE', 'BAINS', 'BAISA', 'BAISE', 'BALAI', 'BALAN', 'BALES', 'BALLA', 'BALLE', 'BALSA', 'BALTE', 'BAMBA', 'BANAL', 
'BANAT', 'BANCO', 'BANCS', 'BANDA', 'BANDE', 'BANGA', 'BANGS', 'BANJO', 'BANNE', 'BANNI', 'BANON', 'BANTU', 'BAOUS', 
'BAQUA', 'BAQUE', 'BARBA', 'BARBE', 'BARBU', 'BARDA', 'BARDE', 'BARDS', 'BARGE', 'BARIL', 'BARJO', 'BARNS', 'BARON', 
'BARRA', 'BARRE', 'BARRI', 'BARYE', 'BARZA', 'BASAI', 'BASAL', 'BASAS', 'BASAT', 'BASEE', 'BASER', 'BASES', 'BASEZ', 
'BASIC', 'BASIE', 'BASIN', 'BASIR', 'BASIS', 'BASIT', 'BASSA', 'BASSE', 'BASTA', 'BASTE', 'BATAI', 'BATAS', 'BATAT', 
'BATCH', 'BATEE', 'BATER', 'BATES', 'BATEZ', 'BATHS', 'BATIE', 'BATIK', 'BATIR', 'BATIS', 'BATIT', 'BATON', 'BATTE', 
'BATTU', 'BAUDS', 'BAUGE', 'BAUME', 'BAVAI', 'BAVAS', 'BAVAT', 'BAVEE', 'BAVER', 'BAVES', 'BAVEZ', 'BAYAI', 'BAYAS', 
'BAYAT', 'BAYER', 'BAYES', 'BAYEZ', 'BAYLE', 'BAYOU', 'BAZAR', 'BAZIN', 'BAZOU', 'BEAIS', 'BEAIT', 'BEANT', 'BEATE', 
'BEATS', 'BEAUF', 'BEAUX', 'BEBES', 'BEBOP', 'BECHA', 'BECHE', 'BECOT', 'BECTA', 'BECTE', 'BEDES', 'BEDON', 'BEENT', 
'BEERA', 'BEGUE', 'BEGUM', 'BEGUS', 'BEHAI', 'BEIEZ', 'BEIGE', 'BEKEE', 'BEKES', 'BELAI', 'BELAS', 'BELAT', 'BELEE', 
'BELER', 'BELES', 'BELEZ', 'BELGA', 'BELGE', 'BELLE', 'BELON', 'BEMBA', 'BEMOL', 'BENEF', 'BENET', 'BENIE', 'BENIN', 
'BENIR', 'BENIS', 'BENIT', 'BENJI', 'BENNA', 'BENNE', 'BENTO', 'BEONS', 'BERCA', 'BERCE', 'BERET', 'BERGE', 'BERME', 
'BERNA', 'BERNE', 'BEROT', 'BERYL', 'BERYX', 'BESAS', 'BESEF', 'BESET', 'BETAS', 'BETEE', 'BETEL', 'BETES', 'BETIE', 
'BETIS', 'BETON', 'BETTE', 'BEUHS', 'BEURE', 'BEURK', 'BEURS', 'BEUSE', 'BEVUE', 'BEZEF','BIAIS', 'BIAXE', 'BIBIS', 
'BIBLE', 'BIBLI', 'BIBUS', 'BICHA', 'BICHE', 'BICOL', 'BICOT', 'BIDES', 'BIDET', 'BIDON', 'BIDOU', 'BIEFS', 'BIENS', 
'BIERE', 'BIFFA', 'BIFFE', 'BIGES', 'BIGLA', 'BIGLE', 'BIGOR', 'BIGOS', 'BIGOT', 'BIGRE', 'BIGUE', 'BIJOU', 'BIKER', 
'BILAI', 'BILAN', 'BILAS', 'BILAT', 'BILEE', 'BILER', 'BILES', 'BILEZ', 'BILIE', 'BILLA', 'BILLE', 'BILLS', 'BIMBO', 
'BINAI', 'BINAS', 'BINAT', 'BINDI', 'BINEE', 'BINER', 'BINES', 'BINEZ', 'BINGO', 'BINON', 'BIOME', 'BIOTE', 'BIPAI', 
'BIPAS', 'BIPAT', 'BIPEE', 'BIPER', 'BIPES', 'BIPEZ', 'BIQUA', 'BIQUE', 'BIRBE', 'BIRRS', 'BISAI', 'BISAS', 'BISAT', 
'BISEE', 'BISER', 'BISES', 'BISET', 'BISEZ', 'BISOC', 'BISON', 'BISOU', 'BISSA', 'BISSE', 'BITAI', 'BITAS', 'BITAT', 
'BITEE', 'BITER', 'BITES', 'BITEZ', 'BITIS', 'BITOS', 'BITTA', 'BITTE', 'BITTU', 'BITUE', 'BITUS', 'BIWAS', 'BIZET', 
'BIZOU', 'BIZUT', 'BLACK', 'BLAFF', 'BLAIR', 'BLAMA', 'BLAME', 'BLANC', 'BLAPS', 'BLASA', 'BLASE', 'BLAST', 'BLAZE', 
'BLEDS', 'BLEME', 'BLEMI', 'BLESA', 'BLESE', 'BLETS', 'BLETZ', 'BLEUE', 'BLEUI', 'BLEUS', 'BLINI', 'BLITZ', 'BLOBS', 
'BLOCK','BLOCS', 'BLOGS', 'BLOND', 'BLOOM', 'BLOTS', 'BLUES', 'BLUET', 'BLUFF', 'BLUSH', 'BLUTA', 'BLUTE', 'BOBBY', 
'BOBET', 'BOBOS', 'BOBUN', 'BOCAL', 'BOCKS', 'BODHI', 'BODYS', 'BOERS', 'BOETE', 'BOEUF', 'BOGES', 'BOGEY', 'BOGIE', 
'BOGUA', 'BOGUE', 'BOIAR', 'BOIDE', 'BOIRA', 'BOIRE', 'BOISA', 'BOISE', 'BOITA', 'BOITE', 'BOIVE', 'BOKIT', 'BOLAS', 
'BOLDO', 'BOLEE', 'BOLET', 'BOLOS', 'BOLUS', 'BOMBA', 'BOMBE', 'BOMEE', 'BOMES', 'BOMME', 'BONDA', 'BONDE', 'BONDI', 
'BONDS', 'BONGO', 'BONIF', 'BONIS', 'BONNE', 'BONTE', 'BONUS', 'BONZE', 'BOOST', 'BOOTA', 'BOOTE', 'BOOTS', 'BORAS', 
'BORAX', 'BORDA', 'BORDE', 'BORDJ', 'BORDS', 'BOREE', 'BORES', 'BORIE', 'BORIN', 'BORNA', 'BORNE', 'BORTS', 'BOSCO', 
'BOSON', 'BOSSA', 'BOSSE', 'BOSSU', 'BOTES', 'BOTOS', 'BOTOX', 'BOTTA', 'BOTTE', 'BOUCS', 'BOUDA', 'BOUDE', 'BOUDI', 
'BOUDU', 'BOUEE', 'BOUES', 'BOUGE', 'BOUIF', 'BOULA', 'BOULE', 'BOUMA', 'BOUME', 'BOUMS', 'BOURE', 'BOURG', 'BOURS', 
'BOUSA', 'BOUSE', 'BOUTA', 'BOUTE', 'BOUTS', 'BOUZY', 'BOVIN', 'BOWAL', 'BOXAI', 'BOXAS', 'BOXAT', 'BOXEE', 'BOXER', 
'BOXES', 'BOXEZ', 'BOXON', 'BOYAU', 'BRADA', 'BRADE', 'BRAIE', 'BRAIS', 'BRAIT', 'BRAMA', 'BRAME', 'BRAND', 'BRANS', 
'BRASA', 'BRASE', 'BRAVA', 'BRAVE', 'BRAVI', 'BRAVO', 'BRAYA', 'BRAYE', 'BREAK', 'BREDE', 'BREFS', 'BRELA', 'BRELE', 
'BREME', 'BRENS', 'BRENT', 'BREVE', 'BRIBE', 'BRICK', 'BRIDA', 'BRIDE', 'BRIEE', 'BRIEF', 'BRIES', 'BRIKS', 'BRIMA', 
'BRIME', 'BRINS', 'BRION', 'BRIOS', 'BRISA', 'BRISE', 'BRIZE', 'BROCS', 'BRODA', 'BRODE', 'BROIE', 'BROLS', 'BROME', 
'BROOK', 'BROUE', 'BROUM', 'BROUS', 'BROUT', 'BROYA', 'BROYE', 'BRUIE', 'BRUIR', 'BRUIS', 'BRUIT', 'BRULA', 'BRULE', 
'BRUMA', 'BRUME', 'BRUNE', 'BRUNI', 'BRUNS', 'BRUTE', 'BRUTS', 'BUBON', 'BUCHA', 'BUCHE', 'BUEES', 'BUGGA', 'BUGGE', 
'BUGGY', 'BUGLE', 'BUGNA', 'BUGNE', 'BUGUA', 'BUGUE', 'BUIRE', 'BULBE', 'BULBS', 'BULGE', 'BULLA', 'BULLE', 'BULLS', 
'BULOT', 'BUMES', 'BUNAS', 'BUQUA', 'BUQUE', 'BURAT', 'BURES', 'BURGS', 'BURIN', 'BURKA', 'BURLE', 'BURNE', 'BURON', 
'BURQA', 'BUSAI', 'BUSAS', 'BUSAT', 'BUSCS', 'BUSEE', 'BUSER', 'BUSES', 'BUSEZ', 'BUSHS', 'BUSSE', 'BUSTE', 'BUTAI', 
'BUTAS', 'BUTAT', 'BUTEE', 'BUTER', 'BUTES', 'BUTEZ', 'BUTIN', 'BUTOR', 'BUTOS', 'BUTTA', 'BUTTE', 'BUVEE', 'BUVEZ', 
'BUZET', 'BUZZA', 'BUZZE', 'BYERI', 'BYTES', 'CABAN', 'CABAS', 'CABLA', 'CABLE', 'CABOT', 'CABRA', 'CABRE', 'CABRI', 
'CABUS', 'CACAO', 'CACAS', 'CACHA', 'CACHE', 'CACOU', 'CADDY', 'CADES', 'CADET', 'CADIS', 'CADOR', 'CADRA', 'CADRE', 
'CADUC', 'CAFES', 'CAFRE', 'CAFTA', 'CAFTE', 'CAGEE', 'CAGES', 'CAGET', 'CAGNA', 'CAGNE', 'CAGOT', 'CAGOU', 'CAGUA', 
'CAGUE', 'CAHOT', 'CAIDS', 'CAIEU', 'CAION', 'CAIRN', 'CAJAN', 'CAJET', 'CAJOU', 'CAJUN', 'CAKES', 'CAKTA', 'CAKTI', 
'CALAI', 'CALAO', 'CALAS', 'CALAT', 'CALEE', 'CALER', 'CALES', 'CALEZ', 'CALFS', 'CALIN', 'CALLA', 'CALLE', 'CALMA', 
'CALME', 'CALMI', 'CALOS', 'CALOT', 'CALTA', 'CALTE', 'CALUS', 'CALVA', 'CAMAI', 'CAMAS', 'CAMAT', 'CAMBA', 'CAMBE', 
'CAMEE', 'CAMEO', 'CAMER', 'CAMES', 'CAMEZ', 'CAMPA', 'CAMPE', 'CAMPO', 'CAMPS', 'CAMUS', 'CANAI', 'CANAL', 'CANAR', 
'CANAS', 'CANAT', 'CANDI', 'CANEE', 'CANER', 'CANES', 'CANEZ', 'CANGE', 'CANIF', 'CANIN', 'CANNA', 'CANNE', 'CANOE', 
'CANON', 'CANOT', 'CANTA', 'CANTE', 'CANTS', 'CANUS', 'CANUT', 'CAOUA', 'CAPAI', 'CAPAS', 'CAPAT', 'CAPEA', 'CAPEE', 
'CAPER', 'CAPES', 'CAPET', 'CAPEZ', 'CAPON', 'CAPOS', 'CAPOT', 'CAPPA', 'CAPRE', 'CAPTA', 'CAPTE', 'CAQUA', 'CAQUE', 
'CARAT', 'CARBO', 'CARDA', 'CARDE', 'CARET', 'CAREX', 'CARGO', 'CARIA', 'CARIE', 'CARIS', 'CARME', 'CARNE', 'CARPE', 
'CARRA', 'CARRE', 'CARRY', 'CARTA', 'CARTE', 'CARVA', 'CARVI', 'CARYS', 'CASAI', 'CASAS', 'CASAT', 'CASCO', 'CASEE', 
'CASER', 'CASES', 'CASEZ', 'CASHS', 'CASSA', 'CASSE', 'CASTA', 'CASTE', 'CATAS', 'CATCH', 'CATES', 'CATHO', 'CATIE', 
'CATIN', 'CATIR', 'CATIS', 'CATIT', 'CAUDE', 'CAURI', 'CAUSA', 'CAUSE', 'CAVAI', 'CAVAS', 'CAVAT', 'CAVEA', 'CAVEE',
'CAVER', 'CAVES', 'CAVET', 'CAVEZ', 'CAVUM', 'CAYES', 'CAYEU', 'CAYON', 'CEANS', 'CEBES', 'CEDAI', 'CEDAS', 'CEDAT', 
'CEDEE', 'CEDER', 'CEDES', 'CEDEX', 'CEDEZ', 'CEDIS', 'CEDRE', 'CEGEP', 'CEINS', 'CEINT', 'CELAI', 'CELAS', 'CELAT', 
'CELEE', 'CELER', 'CELES', 'CELEZ', 'CELLA', 'CELLE', 'CELTE', 'CELUI', 'CENES', 'CENNE', 'CENSE', 'CENTS', 'CEPEE', 
'CEPES', 'CERAT', 'CERCE', 'CERFS', 'CERNA', 'CERNE', 'CESAR', 'CESSA', 'CESSE', 'CESTE', 'CETOL', 'CETTE', 'CEZIG', 
'CHAHS', 'CHAIR', 'CHAIS', 'CHALE', 'CHAMP', 'CHANS', 'CHANT', 'CHAOS', 'CHAPE', 'CHAPO', 'CHARS', 'CHATS', 'CHAUD', 
'CHAUT', 'CHAUX', 'CHEAP', 'CHEBA', 'CHEBS', 'CHECK', 'CHEFS', 'CHEIK', 'CHENE', 'CHENI', 'CHENU', 'CHERA', 'CHERE', 
'CHERI', 'CHERS', 'CHEVA', 'CHEVE', 'CHIAC', 'CHIAI', 'CHIAS', 'CHIAT', 'CHICS', 'CHIEE', 'CHIEN', 'CHIER', 'CHIES', 
'CHIEZ', 'CHILE', 'CHILI', 'CHINA', 'CHINE', 'CHINO', 'CHIOT', 'CHIPA', 'CHIPE', 'CHIPO', 'CHIPS', 'CHARO', 'CHOCO', 
'CHOCS', 'CHOIE', 'CHOIR', 'CHOIS', 'CHOIT', 'CHOIX', 'CHOMA', 'CHOME', 'CHOPA', 'CHOPE', 'CHOPS', 'CHORE', 'CHOSE', 
'CHOTT', 'CHOUF', 'CHOUX', 'CHOYA', 'CHOYE', 'CHTIS', 'CHUES', 'CHUMS', 'CHUTA', 'CHUTE', 'CHUTS', 'CHVAS', 'CHYLE', 
'CHYME', 'CIBLA', 'CIBLE', 'CICLA', 'CICLE', 'CIDRE', 'CIELS', 'CIEUX', 'CIGUE', 'CILIE', 'CILLA', 'CILLE', 'CIMES', 
'CINES', 'CIPAL', 'CIPPE', 'CIPRE', 'CIRAI', 'CIRAS', 'CIRAT', 'CIRCA', 'CIREE', 'CIRER', 'CIRES', 'CIREZ', 'CIRON', 
'CIRRE', 'CIRSE', 'CISTE', 'CITAI', 'CITAS', 'CITAT', 'CITEE', 'CITER', 'CITES', 'CITEZ', 'CIVES', 'CIVET', 'CIVIL', 
'CLADE', 'CLAIE', 'CLAIM', 'CLAIR', 'CLAMA', 'CLAME', 'CLAMP', 'CLAMS', 'CLANS', 'CLAPA', 'CLASH', 'CLAVA', 'CLAVE', 
'CLEBS', 'CLEFS', 'CLERC', 'CLICK', 'CLICS', 'CLIMS', 'CLINS', 'CLIPS', 'CLIVA', 'CLIVE', 'CLODO', 'CLONA', 'CLONE', 
'CLOPA', 'CLOPE', 'CLORA', 'CLORE', 'CLOSE', 'CLOUA', 'CLOUD', 'CLOUE', 'CLOUP', 'CLOUS', 'CLOWN', 'CLUBS', 'CLUES', 
'CLUSE', 'COACH', 'COATI', 'COBEA', 'COBEE', 'COBES', 'COBOL', 'COBOT', 'COBRA', 'COBZA', 'COCAS', 'COCCI', 'COCHA', 
'COCHE', 'COCON', 'COCOS', 'COCUE', 'COCUS', 'CODAI', 'CODAS', 'CODAT', 'CODEC', 'CODEE', 'CODER', 'CODES', 'CODEX', 
'CODEZ', 'CODON', 'COEFS', 'COEUR', 'COGNA', 'COGNE', 'COHUE', 'COING', 'COINS', 'COIRS', 'COITA', 'COITE', 'COITS', 
'COKES', 'COLAS', 'COLEE', 'COLIN', 'COLIS', 'COLLA', 'COLLE', 'COLOC', 'COLON', 'COLOS', 'COLTS', 'COLZA', 'COMAS', 
'COMBE', 'COMBI', 'COMBO', 'COMMA', 'COMME', 'COMPO', 'COMTE', 'CONCU', 'CONDE', 'CONDO', 'CONES', 'CONGA', 'CONGE',
'CONNE', 'CONNU', 'CONSO', 'CONTA', 'CONTE', 'COOLS', 'COPAL', 'COPIA', 'COPIE', 'COPLA', 'COPPA', 'COPRA', 'COPTE', 
'COQUE', 'CORAN', 'CORBS', 'CORDA', 'CORDE', 'CORES', 'CORGI', 'CORME', 'CORNA', 'CORNE', 'CORNU', 'CORON', 'CORPO',
'CORPS', 'CORSA', 'CORSE', 'CORSO', 'COSSA', 'COSSE', 'COSSU', 'COSYS', 'COTAI', 'COTAS', 'COTAT', 'COTEE', 'COTER', 
'COTES', 'COTEZ', 'COTIE', 'COTIR', 'COTIS', 'COTIT', 'COTON', 'COTRE', 'COTTA', 'COTTE', 'COUAC', 'COUDA', 'COUDE', 
'COUDS', 'COUIC', 'COULA', 'COULE', 'COUPA', 'COUPE', 'COUPS', 'COURE', 'COURS', 'COURT', 'COURU', 'COUSE', 'COUSU', 
'COUTA', 'COUTE', 'COUTS', 'COUVA', 'COUVE', 'COUVI', 'COUVS', 'COVID', 'COXAI', 'COXAL', 'COXAS', 'COXAT', 'COXEE', 
'COXER', 'COXES', 'COXEZ', 'COYAU', 'COYER', 'CRABE', 'CRACK', 'CRACS', 'CRADE', 'CRADO', 'CRAIE', 'CRAMA', 'CRAME', 
'CRANA', 'CRANE', 'CRANS', 'CRAPS', 'CRASE', 'CRASH', 'CRAUS', 'CRAUX', 'CRAVE', 'CRAWL', 'CREAI', 'CREAS', 'CREAT', 
'CREDO', 'CREEE', 'CREEK', 'CREER', 'CREES', 'CREEZ', 'CREMA', 'CREME', 'CRENA', 'CRENE', 'CREPA', 'CREPE', 'CREPI', 
'CREPU', 'CRETA', 'CRETE', 'CRETS', 'CREUX', 'CREVA', 'CREVE', 'CRIAI', 'CRIAS', 'CRIAT', 'CRIBS', 'CRICS', 'CRIEE', 
'CRIER', 'CRIES', 'CRIEZ', 'CRIME', 'CRINS', 'CRISA', 'CRISE', 'CRISS', 'CROCO', 'CROCS', 'CROIE', 'CROIS', 'CROIT', 
'CROIX', 'CROLA', 'CROLE', 'CROSS', 'CROUP', 'CRUEL', 'CRUES', 'CRUOR', 'CUBAI', 'CUBAS', 'CUBAT', 'CUBEE', 'CUBER', 
'CUBES', 'CUBEZ', 'CUBIS', 'CUCUL', 'CUCUS', 'CUEVA', 'CUFAT', 'CUIRA', 'CUIRE', 'CUIRS', 'CUISE', 'CUITA', 'CUITE', 
'CUITS', 'CULAI', 'CULAS', 'CULAT', 'CULEE', 'CULER', 'CULES', 'CULEX', 'CULEZ', 'CULOT', 'CULTE', 'CUMIN', 'CUMUL', 
'CUPRO', 'CURAI', 'CURAS', 'CURAT', 'CUREE', 'CURER', 'CURES', 'CUREZ', 'CURIE', 'CURRY', 'CUTIS', 'CUVAI', 'CUVAS', 
'CUVAT', 'CUVEE', 'CUVER', 'CUVES', 'CUVEZ', 'CYANS', 'CYCAS', 'CYCLE', 'CYCLO', 'CYGNE', 'CYMES', 'CYONS', 'CZARS', 
'DABAS', 'DABES', 'DACES', 'DACHE', 'DAGUA', 'DAGUE', 'DAHIR', 'DAHLS', 'DAHUS', 'DAILS', 'DAIMS', 'DAINE', 'DAIRA', 
'DAKIN', 'DALIT', 'DALLA', 'DALLE', 'DALOT', 'DAMAI', 'DAMAN', 'DAMAS', 'DAMAT', 'DAMEE'];

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
                    alert('Le mot existe pas, Tocard. ')
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