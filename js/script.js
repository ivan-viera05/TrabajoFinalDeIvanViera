let libros = [
  {
    name: "Así comienza",
    genero: "policial",
    autor: "Rachel Abbot",
    id: 111,
    imagen: "policial/asicomienza-policial.jpg",
    price: 5000,
    descripcion: "La historia sigue los eventos que suceden después de que un asesinato impactante sacude a una comunidad aparentemente tranquila. La trama se desarrolla con giros inesperados y revelaciones que mantienen al lector en vilo, mientras se investiga el crimen y se revelan los oscuros secretos de los personajes involucrados."
  },
  {
    name: "Caso clinico",
    genero: "policial",
    id: 112,
    autor: "Alicia Frieyro",
    imagen: "policial/casoclinico.jpg",
    price: 85222,
    descripcion: "El caso de Alicia Frieyro ilustra el manejo de una paciente con colelitiasis sintomática, en la que el abordaje quirúrgico laparoscópico permitió resolver la patología de manera eficaz y con una adecuada recuperación de la paciente."
  },
  {
    name: "El cielo de tus dias",
    genero: " policial",
    id: 113,
    autor: "Greta Alonso",
    imagen: "policial/elciclodetusdias.jpg",
    price: 40000,
    descripcion: "La aparición de un mechón de pelo junto a un inquietante anónimo provoca la reapertura del «caso Alicia», la joven asesinada hace quince años en un monte de Cantabria; el hecho podría confirmar una terrible sospecha: ¿y si el autor del crimen no fuera el hombre encarcelado por ello hace más de una década? La eficiente y metódica inspectora Herreros se verá obligada a liderar la investigación entre un Bilbao opresivo y un Madrid frenético mientras seguimos los pasos en primera persona del inspector Brul, su jefe y mentor, el hombre que mantuvo una relación con la víctima meses antes del suceso."
  },
  {
    name: "El hombre perdido",
    genero: "policial",
    id: 114,
    autor: "Jane Harper",
    imagen: "policial/elhombreperdido-policial.jpg",
    price: 25200,
    descripcion: `Quemado por el implacable sol del verano austral, el cuerpo de Cameron Bright es hallado sin vida a varias horas en coche de cualquier lugar habitado. Y aunque la policía da por hecho que se trata de un suicidio, nadie se explica las razones que han llevado a cometer semejante acto a un hombre tan inteligente y encantador como Cam.`
  },
  {
    name: "La ladrona de huesos",
    genero: "policial",
    id: 115,
    autor: "Manel Loureiro",
    imagen: "policial/laladronadehuesos-policial.jpg",
    price: 42184,
    descripcion: "La prepararon para ser la agente perfecta, pero el destino la traicionó con un giro mortal. Manel Loureiro nos atrapa en este apasionante thriller de robos imposibles, reliquias y misterios en el Camino de Santiago. Tras ser víctima de un salvaje atentado, Laura pierde completamente la memoria. Solo el cariño de Carlos, el hombre del que se ha enamorado, le ayuda a percibir destellos de su misterioso pasado. Pero ¿quién es Laura? ¿Qué le sucedió? Durante una cena romántica, Carlos desaparece de forma inexplicable y sin dejar rastro. Una llamada al móvil de la joven le anuncia que, si quiere volver a ver con vida a su pareja, tendrá que aceptar un peligroso reto de insospechadas consecuencias: robar las reliquias del Apóstol en la catedral de Santiago."
  },
  {
    name: "La ultima sonrisa en sounder city",
    genero: "policial",
    id: 116,
    autor: "Luke Arnold",
    imagen: "policial/laultimaensundercity-policial.jpg",
    price: 62021,
    descripcion: "Fetch Phillips tiene mucho que expiar. Más de lo que la mayoría de la gente cree, o ya estaría muerto. Está en el fondo del pozo, y como último recurso acepta un trabajo para investigar la desaparición de un profesor vampiro en una escuela de barrio. Es esto o muere. La tentación de tirarse por la puerta de Ángel de su oficina se está volviendo demasiado difícil de resistir. Mientras, Sunder City esconde todo tipo de cosas en sus sombras y Fetch está a punto de encontrar un problema que podría ser demasiado grande para que él lo pueda manejar ... Sunder City, distópica, en posguerra y carente de magia, se encuentra devastada. ¿Qué pasa cuando la magia se va? Sólo lo peor: van desapareciendo las criaturas inmortales y abundan criaturas atrapadas en grotescas formas inacabadas, retorcidas; la sociedad, la industria, la política y la cultura se corrompen, las razas mágicas caen y los humanos ascienden... Un relato negro y cínico, en un lugar de imaginación asombrosa."
  },
  {
    name: "Lejos",
    genero: "policial",
    id: 117,
    autor: "Rosa Ribas",
    imagen: "policial/lejos-policial.jpg",
    price: 5511,
    descripcion: "La nueva novela de Rosa Ribas. En una urbanización a medio acabar, una historia de amor atmosférica, inquietante, y repleta de sorpresas. En una urbanización en medio de la nada, una de las muchas que se construyeron en España hace años, vive una pequeña comunidad de vecinos que procura llevar una vida normal, a pesar de vivir lejos de todo. Entre ellos, la protagonista de la novela, una mujer recién separada, volcada en el trabajo y en alejar el desánimo de su vida. Más allá de la urbanización que se prometía lujosa, entre calles asfaltadas y rotondas que no conducen a ninguna parte, se alzan viviendas sin acabar y sin vender, lugares amenazantes porque pueden estar ocupadas por personas que no se dejan ver. Precisamente a una de esas viviendas va a dar un hombre que parece arrastrar un secreto, y con él un miedo y una angustia. Con un planteamiento de una originalidad desarmante, y un escenario imposible de olvidar, esta nueva historia de Rosa Ribas, atmosférica, inquietante, adictiva, repleta de sorpresas, nos regala también una inesperada historia de amor."
  },
  {
    name: "Los solitarios",
    genero: "policial",
    id: 118,
    autor: "Alvaro Arbina",
    imagen: "policial/lossolitarios-policia.jpg",
    price: 9621,
    descripcion:"Un paisaje nevado en uno de los lugares más remotos del mundo. Un bosque  infinito de coníferas. Una casa solitaria que parece caída del cielo. En  ella, diez personas de diez rincones del mundo salvajemente asesinadas. ¿Cómo han acabado ahí? ¿Qué mente criminal y perversa ha podido planear una masacre así? Dirigen el caso Emeli Urquiza, una policía treintañera de origen vasco  con una complicada historia personal, y su ayudante Francis Thurmond, un  afroamericano alto y silencioso que dibuja la escena del crimen. Juntos  tendrán que adentrarse en las vidas de las víctimas para encontrar la  última verdad. Una trama prodigiosa, personajes cuyas historias esconden  turbios secretos y un final espectacular que dará que hablar y del que  ningún lector saldrá indemne: Álvaro Arbina nos invita a embarcarnos en unthrillersorprendente que rompe todos los límites del suspense."
  },
  {
    name: "Nuestra Casa",
    genero: "policial",
    id: 119,
    autor: "Louise Candilsh",
    imagen: "policial/nuestracasa-policial.jpg",
    price: 4512,
    descripcion: "Durante una luminosa mañana en un barrio acomodado del sur de Londres, una familia se muda a la casa que acaba de comprar en Trinity Avenue. Nada extraño en eso. Excepto que es tu casa. Y que no se la has vendido a nadie. Bram y Fiona Lawson se acaban de separar de forma civilizada y comparten, en turnos semanales, la custodia de los dos hijos que tienen en común, además de la gran casa que compraron tiempo atrás. Una mañana, Fiona se encuentra con un camión de mudanzas delante de su propiedad: al parecer, una pareja acaba de comprar su casa. Imposible, ella no la ha puesto a la venta. Al mismo tiempo, Bram y sus hijos han desaparecido sin dejar rastro y la única pregunta que obsesivamente repiquetea en la mente de Fiona es: ¿por qué?"
  },
  {
    name: "Pastores del mal",
    genero: "policial",
    id: 120,
    autor: "Felix Garcia Hernan",
    imagen: "policial/pastoresdelmal-policial.jpg",
    price: 5121,
    descripcion: "Cuando el padre Damián Isún cambió de postura para acomodarse en su cama, el corazón le dio un vuelco al palpar, bajo la colcha, el cuerpo desnudo y sin vida de uno de sus pupilos. ¿Cómo había llegado allí? El pánico se apoderó de él y acudió a su antiguo discípulo, mosén Estanis, en busca de ayuda y refugio. El mosén no dudó en contactar con el comisario Javier Gallardo, que aunque se había retirado hacía poco del servicio, nunca podría olvidar que le debía su vida al religioso. Así, junto al ahora inspector jefe Raúl Olaya, Gallardo intentará demostrar la inocencia del padre Damián.Juntos descubrirán una poderosa organización internacional cuya voracidad desmedida destroza y utiliza a cientos de niños y entre cuyos dirigentes se hallan destacados miembros de la banca, la política, las finanzas o la Iglesia.Con una prosa arrolladora, directa y sin artificios, pero absolutamente adictiva, Félix García Hernán maneja, con la precisión de un relojero, o mejor, de un cirujano, una trama que nos llevará, sin un respiro, de Barcelona a Roma, Nueva York, París o Wisconsin, y lo confirma como un narrador especialmente dotado para novelas donde lo social y la denuncia conviven con la acción más vertiginosa."
  },
  {
    name: "Sangre en la nieve",
    genero: "policial",
    id: 121,
    autor: "Jo Nesbø",
    imagen: "policial/sangreenlanieve-policial.jpg",
    price: 31220,
    descripcion: "Matar por encargo, ese es el oficio de Olav. Y lo hace bien, pues se gana el sueldo trabajando para uno de los grandes capos de la droga en Oslo, Daniel Hoffmann. Sin embargo, la vida de sicario tiene ciertas contrapartidas: nadie quiere tenerte cerca. Aficionado a filosofar sobre la muerte y el amor, Olav se ha resignado a una vida sin pasiones cuando de pronto conoce a la mujer de sus sueños. Pero hay dos problemas. El primero es que se trata de Corina Hoffmann, la esposa de su jefe. El segundo es que la nueva misión de Olav es matarla."
  },
  {
    name: "Silenciadas",
    genero: "policial",
    id: 122,
    autor: "Karin slaughter",
    imagen: "policial/silenciadas-policial.jpg",
    price: 12512,
    descripcion: "Will Trent se encuentra con una información perturbadora mientras investiga el asesinato de un prisionero durante un motín carcelario. Uno de los encarcelados asegura que es inocente del ataque brutal del que siempre fue el principal sospechoso. Insiste en que todo fue manipulado por un equipo de la policía corrupto, dirigido por Jeffrey Tolliver y que el verdadero culpable sigue en libertad: un asesino en serie que sistema-ticamente ataca a mujeres a lo largo y ancho del estado de Georgia desde hace años. Este convicto se ofrece, oportunamente, para dar información clave sobre el asesinato ocurrido durante el motín, pero para ello Will deberá comprometerse a reabrir un caso en el que tendrá que implicar a un oficial condecorado. "
  },
  {
    name: "tren bala",
    genero: "policial",
    id: 123,
    autor: "Kotaro Isaka",
    imagen: "policial/trenbala-policial.jpg",
    price: 51515,
    descripcion: "'Tren bala' sigue a cinco asesinos a sueldo que, por motivos diversos, viajan en el Shinkansen, el alta velocidad desde Tokio a Morioka: dos horas y media de viaje, el tiempo que tienen para hacerse con una maleta llena de dinero. Lo difícil: llegar a la última parada con vida."
  },
  {
    name: "Una tumba entre las rocas",
    genero: "policial",
    id: 124,
    autor: "Elly griffiths",
    imagen: "policial/unatumbaentrerocas.jpg",
    price: 6512,
    descripcion: "Un equipo de geólogos que investiga la erosión costera en la bahía norte de Norfolk se pone en contacto con la doctora Ruth Galloway al hallar seis cuerpos enterrados al pie de un acantilado. La arqueóloga y el inspector Harry Nelson se unen una vez más para desentrañar el pasado, aunque la situación es de lo más incómoda, pues Nelson debe evitar a toda costa que su esposa Michelle sospeche de la relación que hay entre ellos dos. Las pruebas revelan que los cadáveres corresponden a seis hombres jóvenes que fueron asesinados hace más de setenta años. El misterio de sus muertes parece remontarse a la Segunda Guerra Mundial, una época en la que Gran Bretaña vivía con inquietud una posible invasión de los alemanes."
  },
  {
    name: "Yo fumo para olvidar que tu bebes",
    genero: "policial",
    id: 125,
    autor: "Martin Casariego",
    imagen: "policial/yofumoparaolvidarquetubebes-policial.jpg",
    price: 6230,
    descripcion: "Martín Casariego inicia con este libro una serie negra con referencias literarias, cinematográficas, musicales y del mundo del cómic, con la que nos llevará por las cloacas de la política y los negocios, por las capas más altas y las más bajas de la socie"
  },
  {
    name: "Altar",
    genero: "terror",
    id: 127,
    autor: "Catherine Lacey",
    imagen: "terror/altar-terror.jpg",
    price: 6262,
    descripcion: "Una persona llega a un pequeño pueblo de Estados Unidos. Las gentes del lugar la encuentran durmiendo en un banco de la iglesia, donde se ha refugiado durante la noche. Es imposible discernir su raza, su edad o su sexo y, aunque entiende el idioma en el que le hablan, se niega a pronunciar palabra o a contar su historia. La comunidad local, unida por una fuerte fe religiosa, se muestra dispuesta a acogerla y le da el nombre de Altar, pero en los seis días siguientes, previos al misterioso Festival del Perdón, su presencia acaba exponiendo los miedos más profundos y las hipocresías de la congregación.Lacey ha creado una fábula hipnótica que nos plantea preguntas urgentes sobre nuestra identidad, nuestro cuerpo y nuestra capacidad de entendimiento: una novela perturbadora y esencial."
  },
  {
    name: "Carcoma",
    genero: "terror",
    id: 128,
    autor: "Layla Martinez",
    imagen: "terror/carcoma-terror.jpg",
    price: 51256,
    descripcion: "Todas las casas guardan la historia de quienes las han habitado. Las paredes de esta casa perdida en el páramo hablan de voces que surgen de debajo de las camas, de santas que se aparecen en el techo de la cocina, de desapariciones que nunca se resuelven. Los vecinos reniegan de sus dos habitantes a la luz del día, pero todos acuden a ellas cuando nadie los ve. La abuela se pasa los días hablando con las sombras que viven tras las paredes y dentro de los armarios. La nieta vuelve a la casa tras un incidente con la familia más rica del pueblo. Ahora, desenredando la historia de la casa, se han empezado a dar cuenta de que las sombras que la habitan estuvieron siempre de su lado."
  },
  {
    name: "dispersion",
    genero: "terror",
    id: 129,
    autor: "Iain Reid",
    imagen: "terror/dispercion-terror.jpg",
    price: 5202,
    descripcion: "Del autor de Estoy pensando en dejarlo, una novela de suspense filosófico sobre el arte y el paso del tiempo Penny es artista y lleva varias décadas viviendo en el mismo apartamento, rodeada de los objetos y los recuerdos de su larga vida. Resignada a los rituales triviales de la vejez, un día empieza a sufrir lapsus. Años atrás, antes de que falleciera el que había sido su pareja durante mucho tiempo, se hicieron preparativos, sin que ella lo supiera, para reservarle una habitación en una singular residencia en la que, tras sufrir demasiados «incidentes», acaba ingresando. Al principio, acompañada de personas como ella, conversando, contemplando los hermosos bosques que rodean la casa, todo va bien. Incluso empieza a pintar de nuevo. Pero a medida que los días comienzan a difuminarse, Penny, con una creciente sensación de inquietud y desconfianza, empieza a perder la noción del paso del tiempo y del lugar que ocupa ella en el mundo. ¿Está sucumbiendo a los efectos sutilmente destructivos del envejecimiento o está participando, sin saberlo, en algo más inquietante? Al mismo tiempo compasiva y extraña, narrada con una prosa austera e hipnótica, esta novela de Iain Reid, difícil de clasificar en un género concreto, explora las cuestiones de la conformidad, el arte, la productividad, las relaciones y lo que, en última instancia, significa hacerse viejo. Ver menos"
  },
  {
    name: "El gran libro de satan",
    genero: "terror",
    id: 130,
    autor: " satan",
    imagen: "terror/elgranlibrodesatan-terror.jpg",
    price: 65121,
    descripcion: "es la antología de literatura diabólica más completa que existe en el mundo. Este volumen recoge cincuenta y seis piezas largas y más de cuatrocientos pasajes breves de índole perniciosa: poemas, cuentos, ensayos y extractos de novelas con Satán como figura central o secundario imprescindible. Cada texto seleccionado es de un autor o autora distinto (nadie repite), y de toda clase de perversidad literaria: de Iris Murdoch a Sara Mesa, pasando por Clive Barker, Nathaniel Hawthorne, Sharon Olds, Dante Alighieri, Joan Aiken, Kelly Link, Charles Baudelaire, Irene Solà, Ambrose Bierce, Ursula K. Le Guin, Ana María Matute, John Milton, Samanta Schweblin, Ray Bradbury, Neil Gaiman, Elisa Victoria, Michael Chabon, Belén Gopegui, Mark Twain, Karen Russell, Shirley Jackson, Mijaíl Bulgákov y muchísimos más."
  },
  {
    name: "El hombre perdido",
    genero: "terror",
    id: 131,
    autor: "Jane Harper",
    imagen: "terror/elhombreperdido-terror.jpg",
    price: 4155,
    descripcion:"Quemado por el implacable sol del verano austral, el cuerpo de Cameron Bright es hallado sin vida a varias horas en coche de cualquier lugar habitado. Y aunque la policía da por hecho que se trata de un suicidio, nadie se explica las razones que han llevado a cometer semejante acto a un hombre tan inteligente y encantador como Cam. Al tiempo que toda la comunidad se prepara para un emotivo entierro la víspera de Navidad, Nathan, el mayor de los Bright, empeñado en aclarar los cabos sueltos de la muerte de Cam, se enfrenta a un abismo de silencios y mentiras que amenaza con destruir los delicados lazos familiares. La crítica ha dicho...Jane Harper se consolida como la reina de la novela negra australiana con este inquietante misterio familiar.The Sunday Times Su mejor libro hasta el momento.Evening Standard : Una obra maestra del crimen. El paisaje y la cultura de este territorio remoto de Australia son evocados de forma magnífica a medida que se revelan los secretos familiares. People Me encantó. Lo devore en un día. ¡Jane Harper se supera con esta obra!Liane Moriarty"
  },
  {
    name: "El regalo",
    genero: "terror",
    id: 132,
    autor: "Zoe Maeve",
    imagen: "terror/elregalo-terror.jpg",
    price: 4545,
    descripcion: "Villa de los Zares, Rusia, 1901... Revoloteando sobre los terrenos nevados del Palacio de Alejandro, una polilla presencia el nacimiento de la cuarta princesa Románov: Anastasia. Sus hermanas y ella crecen en una jaula de oro, aisladas de la sociedad que vive más allá de los muros del palacio a pesar de su dominio sobre ella. Tras recibir de forma misteriosa una cámara como regalo por su decimoquinto cumpleaños, empieza a documentar la realidad que la rodea, pero el regalo trae consigo una carga que aún no es capaz de comprender. Una criatura se mueve por los márgenes de su mirada y la acecha en sueños. A medida que la revolución avanza, las esquinas del mundo de Anastasia se van estrechando. Algo la persigue, una fuerza implacable."
  },
  {
    name: "historia de fantasmas",
    genero: "terror",
    id: 133,
    autor: "Laura freudenthaler",
    imagen: "terror/historiadefantasmas-terror.jpg",
    price: 21122,
    descripcion:"Anne pensaba dedicar su año sabático a tocar el piano y escribir libros, pero paulatinamente abandona sus hábitos. De día vaga por las calles de la ciudad; de noche escribe en su diario. Lleva veinte años viviendo con Thomas, pero se han distanciado. Él viaja constantemente por trabajo y el hogar conyugal se ha vuelto extraño para ella. Anne sospecha que la engaña, y la amante de su marido, a la que llama «la chica», se le aparece como un fantasma desconocido y, al mismo tiempo, muy familiar que le susurra y la atormenta con ruidos, alucinaciones y señales incomprensibles.Con el paso del tiempo, el ambiente de celos, lujuria y pasión en el que Anne se mueve se transforma en un peligroso mundo de espejismos, insinuaciones y misterios donde los límites entre lo real y lo imaginario se desdibujan y convierten la lectura en una cautivadora historia de terror sobre los fantasmas que habitan dentro de nosotros.Obra ganadora del Premio de Literatura de la Unión Europea «Una de las voces jóvenes más interesantes de la literatura austríaca.» Die Presse «Una lectura poética a la par que sumamente legible que ofrece un retrato imaginativo y detallado de la ansiedad de la mediana edad y los desafíos de la vida en pareja. […] Una representación original del clásico tema del triángulo amoroso que se lee de una sentada.»New Books in German «La novela de Laura Freudenthaler destaca de manera placentera entre la corriente dominante en la ficción contemporánea […]. Historia de fantasmas bebe de la fuente que es la literatura: lo fantástico y lo imaginario que no tiene por qué aceptar las reglas de la realidad.»Deutschlandfunk «Un libro que cumple una de las funciones más importantes de la literatura: en cada página descubrimos lo que la empatía significa en nuestras complejas relaciones.»  Wiener Zeitung «Una atmósfera calma y rígida poco a poco se vuelve vertiginosa y, finalmente, peligrosa. La intensidad de la prosa nace de su insistencia en los detalles.»Lecture-Écriture"
  },
  {
    name: "La casa de las sombras",
    genero: "terror",
    id: 134,
    autor: "adam nevill",
    imagen: "terror/LaCasaDelassombreas-terror.jpg",
    price: 12120,
    descripcion: "El último trabajo de Catherine terminó mal. El acoso corporativo en una de las principales cadenas de televisión hizo que la despidieran y la obligaran a abandonar Londres, pero estaba decidida a recuperar su vida. Un nuevo trabajo y algunos terapeutas más tarde, las cosas pintan mejor. Especialmente cuando se le presenta un proyecto desafiante: catalogar el alijo salvajemente excéntrico de muñecas y títeres antiguos del difunto M. H. Mason. Lo más raro de todo es que podrá examinar sus elaboradas exhibiciones de animales disecados y disfrazados, que representan escenas sangrientas de la Gran Guerra. Catherine no puede creerse su suerte cuando la anciana sobrina de Mason la invita a quedarse en Red House, donde mantiene la colección hasta que su sobrina la expone al oscuro mensaje de detrás del Arte de su tío. Catherine intenta concentrarse en el trabajo, pero las visiones de Mason comienzan a generar sombras oscuras de su propio pasado. Sombras que esperaba que la terapia finalmente hubiera borrado. Pronto, las barreras entre la realidad, la cordura y la memoria comienzan a fusionarse y algunas verdades parecen demasiado terribles para ser reales..."
  },
  {
    name: "la comemadre",
    genero: "terror",
    id: 135,
    autor: " roque larraquy",
    imagen: "terror/lacomemadre-terror.jpg",
    price: 12122,
    descripcion: "La comemadre ofrece dos relatos que hunden sus raíces en la misma materia y abrevan en las mismas obsesiones. De un lado, un médico que se ve envuelto en una iniciativa científica descabellada y cruel, en un sanatorio suburbano. Por otra parte, un célebre artista plástico que lleva al extremo su búsqueda estética y se transforma, él mismo, en objeto de experimentación. Por ambos hemisferios de este libro rondan la intervención sobre el cuerpo y la búsqueda de la trascendencia. Primero, presentadas como derivación de una contrahecha esperanza positivista, a comienzos de 1900. Luego, como resultado de una apuesta artística radical, exitosa y, finalmente, banal en los inicios del siglo XXI. En el centro de esta novela, puntuada por el humor y la velocidad de su cadencia narrativa, flota la idea de lo monstruoso. Roque Larraquy lo presenta no ya de un modo ajeno o repudiable, sino como el motor de un quimérico progreso colectivo o personal, como una de las absurdas secuelas del amor."
  },
  {
    name: "La invitada",
    genero: "terror",
    id: 136,
    autor: "Jennifer mcmahon",
    imagen: "terror/lainvitada-terror.jpg",
    price: 51200,
    descripcion: "Helen y Nate dejan atrás la ciudad para mudarse al campo. Quieren construir la casa de sus sueños en un terreno rural a las afueras de un bosque. Cuando descubren que su magnífica propiedad tiene un pasado violento y oscuro, Helen, que era profesora de historia, quedará fascinada por la leyenda local de Hattie Breckenridge, que fue acusada de brujería hace más de cien años. Cuando se sumerge en la historia de Hattie y sus descendientes, descubrirá que ese linaje llega hasta la actualidad. Conforme avance la construcción de la casa, un peligro inesperado acechará a sus dueños y al resto de habitantes del lugar."
  },
  {
    name: "la señora march",
    genero: "terror",
    id: 137,
    autor: "virginia feito",
    imagen: "terror/laseñoramarch-terror.jpg",
    price: 10000,
    descripcion: "La última novela de George March es un gran exito, y nadie se enorgullece tanto de ello como su devota esposa, la señora March, que lleva una vida exquisitamente ordenada en el Upper East Side. Una mañana cualquiera, mientras se dispone a comprar el pan de aceitunas en su pastelería favorita,"
  },
  {
    name: "los 13 exorcismos de salomon joch",
    genero: "terror",
    id: 138,
    autor: "paul arquier-parayre",
    imagen: "terror/los13exorcismosdesalomonjoch-terror.jpg",
    price: 12000,
    descripcion: "Acompaña al padre Solomon Joch en su lucha contra el mal en trece historias que culminan en una batalla legendaria. El padre Solomon Joch, exorcista al servicio del Vaticano bendecido (o maldecido quizás) con el don de la inmortalidad, ha vivido cosas que la mayoría no alcanza a imaginar. Después de milenios luchando contra las fuerzas del mal, nos relata sus aventuras por tierras francesas, donde librará trece combates contra las almas que ha poseído un tenebroso ejército comandado por Lucifer. En cada una de estas batallas, el padre Joch hará frente a demonios que tratan de corromper todo y a todos… Pero estos indicios del mal que el exorcista debe erradicar son solo la calma que precede a la tormenta, pues una maldición nacida en tiempos inmemoriales está a punto de desatar el Armagedón en una de las tierras más míticas y emblemáticas del paisaje del actual sur de Francia."
  },
  {
    name: "mi esposa y yo compramos un rancho",
    genero: "terror",
    id: 139,
    autor: "Matt y harrison query",
    imagen: "terror/miesposayyocompramosunrancho-terror.jpg",
    price: 4000,
    descripcion: "El exmarine Harry y su esposa Sasha han empacado todo y junto con Dash, su golden retriever, han dejado atrás los ajetreados días en la ciudad para vivir de la tierra en un rancho en Idaho. Su nuevo hogar se encuentra alrededor de cuarenta acres de campo, álamos y bosques de pinos en el imponente valle de Teton. Un paraíso. Aunque sus amigos y familiares piensan que es una elección extraña para una prometedora pareja de profesionistas, Harry y Sasha no pueden estar más emocionados acerca del futuro que están construyendo sin la ayuda de nadie. Pero su entusiasmo dará un giro cuando sus vecinos Dan y Lucy los alerten de un malvado espíritu que habita en el valle, uno que, dependiendo de la estación, acecha y cambia de aspecto de maneras cada vez más escalofriantes. Si bien al inicio lo ven como una vieja superstición, para Harry y Sasha ya nada será lo mismo cuando sean testigos de la primera diabólica aparición. Conforme las estaciones pasen, el espíritu se hace más fuerte, la tierra más siniestra y cada encuentro con el espectro más peligroso…"
  },
  {
    name: "tragedia en villa rosato",
    genero: "terror",
    id: 140,
    autor: "Rachel hawkins",
    imagen: "terror/tragediaenvillarosato-terror.jpg",
    price: 5000,
    descripcion: "Villa Aestas, en Orvieto, es ahora una casaávacacional de lujo, pero en 1974 era conocidaácomo Villa Rosato. Aquel verano fue alquiladaápor la infame estrella del rock Noel Gordon,áquien, desesperado por recuperar la chispaácreativa, invita al músico Pierce Sheldon, a suánovia y a su hermanastra a unirse a el. Pero elloádesencadena una serie de sucesos que llevan aáMari, la novia de Sheldon, a escribir una de lasámejores novelas de terror de todos los tiempos;áa Lara, su hermanastra, a componer un álbum,áy que acaban con el brutal asesinato de Pierce."
  },
  {
    name: "una ciudad entera bañada en sangre humana",
    genero: "terror",
    id: 141,
    autor: "jorge de cascante",
    imagen: "terror/unaciudadbañadaensangrehumana-terror.jpg",
    price: 90500,
    descripcion: "Las actrices y actores del Pasaje del Terror quieren mejorar sus condiciones laborales. La mejor dramaturga de España sufre una crisis de identidad. Una chica se cuela por un conducto de ventilación y descubre algo. Francisco Franco está recogiendo tu pedido. El aborto que acaba de sufrir su esposa provoca que un hombre se vuelque por completo en su colección de muñecos de Sylvanian Families. La señora Griselda está en contra de la policía. El Troll del Tesoro logra un ascenso en la correduría de seguros. Ochenta relatos acerca de personas y animales trabajando a la intemperie en un mundo en el que todo está permitido. Seres atravesados por la melancolía de sus oficios y sus vidas escuetas y las desquiciadas formas que tienen de relacionarse con la gente. Todos ellos abrazados con fuerza por el tenebroso humor de Jorge de Cascante.«Los cuentos de este libro dan un miedo frondoso y laborable, también ríen y muy a lo lejos dejan pasar el sol; son tan buenos que sales de ellos con las manos llenas de una energía extraña y adivina, y quieres más». BELÉN GOPEGUI"
  },
  {
    name: "1984",
    genero: "ciencia ficción",
    id: 141,
    autor: "george orwell",
    imagen: "cienciafic/1984.jpg",
    price: 14020,
    descripcion:"Escrita en 1948, esta obra denunciaba los totalitarismos de Hitler y de Stalin. Sin embargo, tanto la propaganda política de la mano de Gran Hermano —el ojo censurador— como la dominación de la población por parte del Partido poseen resonancias diacrónicas. Un clásico que percute, con fuerza renovada, en este presente en el que somos esclavos de la tecnología y de una élite sometedora. Luis Scafati se supera a sí mismo, para ofrecer uno de sus trabajos más lúcidos, críticos e impactantes de los últimos tiempos."
  },
  {
    name: "veinte mil leguas de viaje submarino",
    genero: "ciencia ficción",
    id: 142,
    autor: "",
    imagen: "cienciafic/20000leguasdeviajesubmarino.jpg",
    price: 6724,
    descripcion:"En la segunda mitad del siglo xix, los océanos y los mares ya no son seguros para la navegación. Se han perdido numerosos barcos, sin que exista una clara explicación. Muchos creen que se trata de un monstruo marino, una especie de ballena con un gran cuerno afilado en su frente. Finalmente, se organiza desde los Estados Unidos. Tiene que haber una explicación para todo eso, cuya misión consistirá en desvelar el secreto de estos hundimientos."
  },

  {
    name: "astro boy",
    genero: "ciencia ficción",
    id: 143,
    autor: "osamu tezuka",
    imagen: "cienciafic/astroboy.jpg",
    price: 65125,
    descripcion: "Astro Boy es un niño que ha sido creado para sustituir al hijo que ha perdido su padre, pero el padre se da cuenta de que su creación realmente no puede sustituir a su malogrado hijo"
  },
  {
    name: "cronicas marcianas",
    genero: "ciencia ficción",
    id: 144,
    autor: "ray bradbury",
    imagen: "cienciafic/cronicasmarcianas.jpg",
    price: 10088,
    descripcion: "Recopilación de relatos que recogen la crónica de la colonización de Marte por parte de una humanidad que huye de un mundo al borde de la destrucción. Los colonos llevan consigo sus deseos más íntimos y el sueño de reproducir en el Planeta Rojo una civilización de perritos calientes, cómodos sofás y limonada en el porche al atardecer. Pero su equipaje incluye también los miedos ancestrales, que se traducen en odio a lo diferente, y las enfermedades que diezmarán a los marcianos. "
  },
  {
    name: "done",
    genero: "ciencia ficción",
    id: 145,
    autor: "frank herbert",
    imagen: "cienciafic/dune.jpg",
    price: 7412,
    descripcion:"La historia comienza a más de diez mil años en el futuro, en nuestra galaxia, en un gran imperio galáctico de estructura feudal. El Imperio se divide en cuasi-feudos o señoríos planetarios que son controlados por familias nobles, conocidas como Las Grandes Casas, que se agrupan en un gran consejo, llamado Landsraad, y rinden tributo al Emperador Padishah Shaddam IV, de la Casa Corrino. Otra de las instituciones es la Combine Honnete Ober Advancer Mercantiles, o CHOAM, una corporación universal para el desarrollo comercial controlada por el Emperador y las Grandes Casas, con la Cofradía Espacial y la Hermandad Bene Gesserit como socios sin derecho a voto."
  },
  {
    name: "el cuento de la criada",
    genero: "ciencia ficción",
    id: 146,
    autor: "margaret atwood",
    imagen: "cienciafic/elcuartetodelacriada.jpg",
    price: 5412,
    descripcion: "Amparándose en la coartada del terrorismo islámico, unos políticos teócratas se hacen con el poder y, como primera medida, suprimen la libertad de prensa y los derechos de las mujeres. Esta trama, inquietante y oscura, que bien podría encontrarse en cualquier obra actual, pertenece en realidad a esta novela escrita por Margaret Atwood a principios de los ochenta, en la que la afamada autora canadiense anticipó con llamativa premonición una amenaza latente en el mundo de hoy."
  },
  {
    name: "el hombre en el castillo",
    genero: "ciencia ficción",
    id: 147,
    autor: "philip k. dick",
    imagen: "cienciafic/elhombreencastillo.jpg",
    price: 8412,
    descripcion: "El hombre en el castillo nos sumerge en un mundo alternativo en el cual el Eje ha derrotado a los Aliados en la segunda guerra mundial y los Estados Unidos han sido invadidos y divididos entre los vencedores. Mientras los nazis se han anexionado la costa atlántica, donde han instaurado un régimen de terror, la costa pacífica permanece en manos japonesas. En esta América invadida, los nativos son ciudadanos de segunda clase a pesar de que su cultura es admirada por los vencedores, hasta el punto de que uno de los mejores negocios es la venta de auténticas antigüedades americanas, como relojes de Mickey Mouse o chapas de Coca-Cola."
  },
  {
    name: "el invicible",
    genero: "ciencia ficción",
    id: 148,
    autor: "staniselaw lem",
    imagen: "cienciafic/Elinvencible.jpg",
    price: 8000,
    descripcion: "El Invencible es el nombre de la enorme nave interestelar que parte hacia el encuentro de su gemela, la impresionante y guerrera Cóndor. Esta última, perdida en Regis III, un aislado y deshabitado planeta, provocará oleadas de angustia vital tanto en los que sobrevivieron como en aquellos que acuden en su ayuda de manera abrupta, devastadora y violenta. Nanobots, viajes en el espacio, inteligencia de enjambres y evolución artificial se citan en este relato despiadado y atroz de supervivencia humana. El cosmos es en El Invencible el centro del pensamiento humano. La utopía del hombre, la búsqueda de la verdad y la importancia de diferenciarnos de los demás seres del universo son solo la punta del iceberg del gran desafío misterioso y cruel que nos proponen la existencia y nuestra incapacidad de no poder conquistarlo todo."
  },
  {
    name: "El marciano",
    genero: "ciencia ficción",
    id: 149,
    autor: "andy weir",
    imagen: "cienciafic/elmarciano.jpg",
    price: 9000,
    descripcion: "Seis días atrás el astronauta Mark Watney se convirtió en uno de los primeros hombres en caminar por la superficie de Marte. Ahora está seguro de que será el primer hombre en morir allí. La tripulación de la nave en que viajaba se ve obligada a evacuar el planeta a causa de una tormenta de polvo, dejando atrás a Mark tras darlo por muerto. Pero él está vivo, y atrapado a millones de kilómetros de cualquier ser humano, sin posibilidad de enviar señales a la Tierra."
  },
  {
    name: "fabulas de robots",
    genero: "ciencia ficción",
    id: 150,
    autor: "stainslaw lem",
    imagen: "cienciafic/fabulasderobots-cienciafic.jpg",
    price: 8800,
    descripcion:"Seres con circuitos, princesas autómatas, ladrones de guante eléctrico, sabios muy sabios, bestias de silicio y reyes del algoritmo. Artefactos mecánicos que se han expandido hasta colonizar el último rincón de la galaxia, y que a pesar de todas sus virtudes y bajezas, y de su proclividad a la locura y a la ambición, son incapaces de errar ni de desviarse de su programación. Fábulas de robots es uno de los títulos más míticos del maestro polaco Stanislaw Lem, una brillante antología de mitos y leyendas cibernéticas, que fluctúan de lo profético a lo surrealista, de lo filosófico a lo humorístico, en las que el hombre es el verdadero rival a batir: seres mitológicos, semilegendarios, con fama de blandos, de pusilánimes y de paliduchos, y con una fatal y peligrosa tendencia al crimen."
  },
  {
    name: "fahrenheit 451",
    genero: "ciencia ficción",
    id: 151,
    autor: " raybradury",
    imagen: "cienciafic/fahrenheit451.jpg",
    price: 8020,
    descripcion:"it is a good book, you need buy this book it changue your life"
  },
  {
    name: "Historias de taberna galactica",
    genero: "ciencia ficción",
    id: 152,
    autor: "josep maria bea",
    imagen: "cienciafic/historiasdelatabernagalactica.jpg",
    price: 54626,
    descripcion:"En un meteorito cercano a una vía espacial de fluido tránsito, se puede encontrar un tugurio con nombre propio: la Taberna Galáctica. En ella, se reúnen toda clase de chusma espacial para calmar sus necesidades de juerga, alcohol, drogas, sexo y relatos… unos relatos narrados por los distintos clientes de esta extravagante cantina de mala muerte y que nos mostrarán historias de toda casta que nos maravillarán o trastornarán con sus finales… ¿te hace un trago?"
  },
  {
    name: "la carretera",
    genero: "ciencia ficción",
    id: 153,
    autor: "cormac mccarthy",
    imagen: "cienciafic/La carretera.jpg",
    price: 5045,
    descripcion: "La carretera, novela galardonada con el premio Pulitzer 2007 y best seller literario del año en Estados Unidos, transcurre en la inmensidad del territorio norteamericano, un paisaje literalmente quemado por lo que parece haber sido un reciente holocausto nuclear."
  },
  {
    name: "la anomalia",
    genero: "ciencia ficción",
    id: 154,
    autor: "herve le tellier",
    imagen: "cienciafic/laanomalia-cienciafic.jpg",
    price: 4000,
    descripcion: "El 10 de marzo de 2021 los doscientos cuarenta y tres pasajeros de un avión procedente de Paris aterrizan en Nueva York después de pasar por una terrible tormenta. Ya en tierra, cada uno sigue con su vida. Tres meses más tarde, y contra toda lógica, un avión idéntico, con los mismos pasajeros y el mismo equipo a bordo, aparece en el cielo de Nueva York. Nadie se explica este increíble fenómeno que va a desatar una crisis política, mediática y científica sin precedentes en la que cada uno de los pasajeros acabará encontrándose cara a cara con una versión distinta de sí mismos. Hervé Le Tellier firma una novela brillante, inteligente y virtuosa en la que la lógica se funde con lo imposible."
  },
  {
    name: "guia del autoestopista galactico",
    genero: "ciencia ficción",
    id: 155,
    autor: " douglas adams",
    imagen: "cienciafic/laguiadelautoestopistagalactico.jpg",
    price: 15000,
    descripcion: "Un jueves a la hora de comer, la Tierra es inesperadamente demolida para poder construir una nueva autopista hiperespacial. Arthur Dent, un tipo de lo más corriente que esa misma mañana ha visto cómo echaban abajo su propia casa, considera que eso supera lo que una persona puede soportar. Pero, desgraciadamente, el fin de semana no ha hecho más que empezar, y la galaxia es un lugar extraño y sorprendente"
  },
  {
    name: "la mano izquierda de la oscuridad",
    genero: "ciencia ficción",
    id: 156,
    autor: " ursula k. le guin",
    imagen: "cienciafic/lamanoizquierda.jpg",
    price: 8000,
    descripcion: "Los guedenianos tienen una particularidad que los hace únicos: son hermafroditas, y adoptan uno u otro sexo exclusivamente en la época de celo, denominada kémmer. En Invierno, Ai contacta con Estraven, un alto cargo que le mostrará cuán diferente puede llegar a ser una sociedad donde no existe una diferenciación sexual."
  },
  {
    name: "la maquina del tiempo",
    genero: "ciencia ficción",
    id: 157,
    autor: "h. h. wells",
    imagen: "cienciafic/lamaquinadeltiempo.jpg",
    price: 64510,
    descripcion: "—Hace mucho tiempo tuve la idea de una máquina… —¡Para viajar en el tiempo! —exclamó el jovencito.—Y podría viajar absolutamente en cualquier dirección en el tiempo y en el espacio, dependiendo del gusto del piloto."
  },
  {
    name: "la parabola del sembrador",
    genero: "ciencia ficción",
    id: 158,
    autor: "octavia e. butler",
    imagen: "cienciafic/laparaboladelsembrador-cienciaficc.jpg",
    price: 8800,
    descripcion: "Esta aclamada novela posapocalíptica de esperanza y terror, de la galardonada escritora Octavia E. Butler, combina bien con otras obras distópicas como 1984 o El cuento de la criada. Cuando el cambio climático global y las crisis económicas conducen al caos social a principios de la década de 2020, California se llena de peligros, desde la escasez generalizada de agua hasta las masas de vagabundos que harán cualquier cosa para sobrevivir otro día más."
  },
  {
    name: "las estrellas son legion",
    genero: "ciencia ficción",
    id: 159,
    autor: " kameron hurley",
    imagen: "cienciafic/lasestrellassonlegion_.jpg",
    price: 8000,
    descripcion: "En los confines del universo, la Legión, un sistema de naves-mundo que se van pudriendo poco a poco, se desplaza por los intersticios de las estrellas. Parece que nada es capaz de detener la agonía de esos mundos, en los que durante siglos dos familias han estado luchando por la supremacía, y se pone en marcha un plan desesperado. Zan no recuerda quién es. Recupera la conciencia entre personas que dicen ser su familia y le aseguran que tiene en sus manos la salvación porque solo ella es capaz de abordar el Mokshi, esa misteriosa nave-mundo abandonada que puede sacarlas de la Legión. Zan tendrá que elegir de qué lado está en una campaña genocida que la llevará desde los límites de la Legión hasta el vientre mismo del mundo. Una  space opera  sobre un amor trágico, la venganza y la guerra."
  },
  {
    name: "lena y karl",
    genero: "ciencia ficción",
    id: 160,
    autor: "mo daviau",
    imagen: "cienciafic/lenaykarl.jpg",
    price: 40000,
    descripcion: "Los mejores años de Karl parecen lejos. En su día tocó con una banda de culto de indie-rock, pero hoy ve pasar la vida desde sus cuarenta años y desde detrás de la barra de su pub."
  },
  {
    name: "los libros de terramar",
    genero: "ciencia ficción",
    id: 161,
    autor: " ursula k. le guin",
    imagen: "cienciafic/loslibros-cienciaficc.jpg",
    price: 40662,
    descripcion: " En el archipiélago de Terramar hay dragones, magos y espectros, talismanes y poderes. Es un mundo gobernado por la magia y, ante todo, por las palabras: cada cosa posee su nombre verdadero, el designado durante la Creación, cuyo conocimiento otorga a los hechiceros el dominio sobre los elementos y los animales. Sus gentes, sencillas y tranquilas, tienen como único objetivo conseguir la paz y la sabiduría.Las obras completas de Terramar aparecen en un compendio completamente ilustrado por primera vez." 
  },
  {
    name: "transcrepuscular",
    genero: "ciencia ficción",
    id: 162,
    autor: "emilio bueso",
    imagen: "cienciafic/losojosbizcosdelsol.jpg",
    price: 10000,
    descripcion: "Esta es la historia de una búsqueda más allá del ocaso que arranca con el canto de los caracoles, entre huertos surcados por escarabajos de tiro, que deja atrás los establos de libélulas y los refugios de tormenta, los templos de los animistas y los círculos de dólmenes de los astrólogos, y que se adentra por los laberintos del hielo siete y por bosques de helechos plagados de arañas gigantes. "
  },
  {
    name: "los terranautas",
    genero: "ciencia ficción",
    id: 163,
    autor: "T.g boyle",
    imagen: "cienciafic/losterrenautas.jpg",
    price: 20000,
    descripcion: "Recién llegados al desierto de Arizona en 1994, «Los Terranautas», un grupo de ocho científicos (cuatro hombres y cuatro mujeres), se prestan voluntarios, en el marco de un exitoso reality show retransmitido a nivel planetario, para confinarse bajo una cúpula de cristal bautizada como «Ecosphere 2», que pretende ser un prototipo de una posible colonia extraterrestre, y que busca demostrar que pueden vivir aislados del resto del mundo durante meses y ser autosuficientes."
  },
  {
    name: "otras cronicas marcianas",
    genero: "ciencia ficción",
    id: 164,
    autor: "marcial souto",
    imagen: "cienciafic/otrascronicasmarcinas-cienciafic.jpg",
    price: 9462,
    descripcion:"Otras crónicas marcianas es un hallazgo editorial extraordinario y el resultado de una exhaustiva pesquisa por parte de Marcial Souto ?editor y traductor de la obra?, quien ha logrado reunir en esta antología excelentes relatos marcianos, algunos inéditos en castellano y otros publicados de forma dispersa, que quedaron fuera de la edición original de la obra cumbre de Ray Bradbury, Crónicas marcianas, en 1950."
  },
  {
    name: "rascacielos",
    genero: "ciencia ficción",
    id: 165,
    autor: "j.g ballard",
    imagen: "cienciafic/rascacielos.jpg",
    price: 30000,
    descripcion:"Cuando se instaló en el nuevo rascacielos, Laing creyó haber encontrado el retiro ideal. Nada le permitía adivinar la hostilidad que muy pronto dividiría a los ocupantes, mostrando el lado más sombrío y terrorífico de la civilización moderna."
  },
  {
    name: "un mundo feliz",
    genero: "ciencia ficción",
    id: 166,
    autor: "aldous huxley",
    imagen: "cienciafic/unmundofeliz.jpg",
    price: 8085,
    descripcion: "Los peores vaticinios del capitalismo se han cumplido: triunfan los dioses del consumo y la comodidad, y el orbe se divide en diez zonas en apariencia seguras y estables. Los humanos ya no procrean, el sexo se ha convertido solo en una diversión y las letras del alfabeto griego se han pervertido para clasificar a los seres humanos por castas."
  },
  {
    name: "watchmen",
    genero: "ciencia ficción",
    id: 167,
    autor: "alan more",
    imagen: "cienciafic/Watchmen.jpg",
    price: 5000,
    descripcion: "En un mundo alternativo donde la mera presencia de superhéroes estadounidenses cambió la historia, Estados Unidos ganó la guerra de Vietnam, Nixon sigue siendo presidente y la guerra fría está en pleno efecto.  Watchmen comienza como un misterio de asesinato, pero pronto se convierte en una conspiración que altera el planeta. A medida que la resolución llega a un punto crítico, el improbable grupo de héroes reunidos (Rorschach, Nite Owl, Silk Spectre, Dr. Manhattan y Ozymandias) tienen que poner a prueba los límites de sus convicciones y preguntarse dónde está la verdadera línea entre el bien y el mal. demonio."
  },
  {
    name: "yo robot",
    genero: "ciencia ficción",
    id: 168,
    autor: "isaac asimov",
    imagen: "cienciafic/yorobot.jpg",
    price: 7000,
    descripcion: "Publicada por primera vez en 1950, cuando la electrónica digital estaba en su infancia, Yo, robot resultó ciertamente visionaria y tendría una influencia enorme no sólo en toda la ciencia ficción posterior, sino incluso en la propia ciencia de la robótica."
  },
  {
    name: "9 de diciembre",
    genero: "romance",
    id: 169,
    autor: "collen hoover",
    imagen: "romance/9denoviembre.jpg",
    price: 97020,
    descripcion: "Fallon y Ben se encuentran por casualidad cuando sus vidas están cambiando. Ella está a punto de instalarse en Nueva York con la esperanza de cumplir su sueño y convertirse en actriz de teatro, y Ben quiere ser escritor. Se cruzan como dos estrellas fugaces pero la intensidad de lo que comparten les lleva a fijar una cita anual, el nueve de noviembre, para no olvidarse. Fallon se convierte entonces en la inspiración de Ben, en su musa. En cada encuentro anual obtiene material para continuar escribiendo, y los dos se explican sus vidas. Hasta que en una de las citas Fallon empieza a dudar de lo que Ben le cuenta, ¿es posible que se haya inventado una vida de novela? ¿Y por qué haría algo así?"
  },
  {
    name: "el color de las cosas invisimbles",
    genero: "romance",
    id: 170,
    autor: "andrea longarela",
    imagen: "romance/elcolordelascossinvisibles.jpg",
    price: 20500,
    descripcion: "Rain y Jack se odian.Rain y Jack pertenecen a planetas distintos. Rain y Jack no pueden tener menos cosas en común. Y, sin embargo, no dejan de cruzarse. Una y otra vez. Primero en el instituto, luego en un concierto e, inesperadamente, tambien unos años despues, cuando ya creían que no volverían a encontrarse. Incluso se ven empujados a compartir una noche en una casa perdida en mitad del bosque.  Rain piensa que las casualidades no existen. Jack, que las causalidades no lo explican todo. Los dos quieren tener razón. Y los dos saben que se equivocan.  Y ambos intuyen que, sea cual sea la verdad, cuando se trata de amor no hay teoría científica que haga entender el mecanismo de un corazón cuando otro lo sacude."
  },
  {
    name: "el dablo",
    genero: "romance",
    id: 171,
    autor: "florencia canale",
    imagen: "romance/eldiablo.jpg",
    price: 52052,
    descripcion: "Amado hasta la locura por las mujeres, mirado con recelo por los hombres, Bernardo de Monteagudo ocupó un lugar brumoso en el parnaso de los próceres americanos. Desde su cuna ilegítima –hijo, dicen, de un cura y de una mulata–, el tucumano supo abrirse camino para llegar a codearse con lo más selecto del poder en el Río de la Plata."
  },
  {
    name: "la casa neville",
    genero: "romance",
    id: 172,
    autor: "florencia bonelli",
    imagen: "romance/lacasaneville.jpg",
    price: 40000,
     descripcion: "Corre el año 1833 y la Casa Neville, situada en el corazón de la City de Londres, se destaca como el banco más relevante del Reino Unido, e incluso de Europa, con una influencia destacada sobre países y monarcas, empresarios y banqueros. Lo que sorprende al mundo es que esta potencia financiera esté dirigida por Manon, la hija menor de la familia Neville."
  },
  {
    name: "la melordia de la memoria",
    genero: "romance",
    id: 174,
    autor: "aliyson richman",
    imagen: "romance/lamelodiadelamemoria.jpg",
    price: 50550,
    descripcion:"Octavio Ribeiro es un soñador comprometido con la libertad, pero sobre todo es un fiel enamorado de su esposa Salomé. La cortejó con los versos de grandes poetas, pero fueron su inteligencia y su pasión para defender sus ideales lo que la cautivó. Cuando un golpe de Estado instaura una atroz dictadura en Chile, Salomé le ruega a Octavio que no exponga a su familia haciéndole frente al régimen, pero él no escucha y es ella quien termina pagando el precio."
  },
  {
    name: "las dos vidas de mina indigo",
    genero: "romance",
    id: 175,
    autor: "alaitz leceaga",
    imagen: "romance/lasdosvidasdemina.jpg",
    price: 74400,
    descripcion: "Mina Índigo es la médium más solicitada de Barcelona. En su palacete del céntrico Pasaje de Permanyer organiza sesiones espiritistas para ricas damas de la alta sociedad, pero, en realidad, es una experta investigadora que usa sus contactos para obtener información comprometedora de sus clientes."
  },
  {
    name: "las hijas de la criada",
    genero: "romance",
    id: 176,
    autor: "sonsoles onega",
    imagen: "romance/lashijasdelacriada.jpg",
    price: 25200,
    descripcion: "Una noche de febrero de 1900,recien estrenado el siglo XX, en el pazo de Espiritu Santo llegan al mundo dos nias,Clara y Catalina,cuyos destinos ya estaban escritos.Sin embargo,una venganza inesperada sacudira para siempre sus vidas y las de todos los Valdes.Doa Ines,matriarca de la saga y fiel esposa de Don Gustavo,debera sobrevivir al desamor,al dolor del abandono y a las luchas de poder hasta convertir a su verdadera hija en la heredera de todo un imperio,en una epoca enla que a las mujeres no se les permitia ser dueas de sus vidas."
  },
  {
    name: "lo que la nieve susurra al caer",
    genero: "romance",
    id: 177,
    autor: "maria martinez",
    imagen: "romance/loquelanievesusurraalcaer.jpg",
    price: 7052,
    descripcion: "Para Hunter, la música es mucho más que un conjunto de notas dando forma a una melodía. Las canciones que compone son un refugio. Acordes que hablan de sueños y miedos. De ganas y carencias. Compases que iluminan las sombras del frío y solitario mundo en el que ha crecido. Musas que han transformado su pasado en un presente brillante.Sin embargo, esa inspiración enmudece cuando encuentra una carta manuscrita en su buzón, que lo obliga a cuestionarse todo lo que sabe sobre sí mismo."
  },
  {
    name: "mirame y besame",
    genero: "romance",
    id: 178,
    autor: "megan maxwell",
    imagen: "romance/mirameybesame.jpg",
    price: 9000,
    descripcion: "Las gemelas Beth y Gladis Craig se vieron obligadas a abandonar Noruega dejando atrás a su familia. Las constantes amenazas de su tío Leiv hicieron que sus padres tomaran la dura decisión de ponerlas a cargo de sus tíos Sven y Ottilia en Elgin, Escocia."
  },
  {
    name: "no te olvidare",
    genero: "romance",
    id: 179,
    autor: "collen hoover",
    imagen: "romance/noteolvidare.jpg",
    price: 7360,
    descripcion: "Después de pasar cinco años en la cárcel por el trágico error que costó la vida de su gran amor Scott, Kenna Rowan regresa a casa con un único deseo: abrazar a su hija Diem, de cuatro años, que vive con los padres de Scott y a la que no ha visto desde que nació."
  },
  {
    name: "pideme cualquier cosa menos amor",
    genero: "romance",
    id: 180,
    autor: "collen hoover",
    imagen: "romance/pidemecualquiercosa.jpg",
    price: 8020,
    descripcion: "Cuando Tate Collins conoce al piloto Miles Archer, no cree que sea amor a primera vista. Ni siquiera irían tan lejos como para considerarse amigos. Lo único que Tate y Miles tienen en común es una innegable atracción mutua. Una vez que sus deseos salen a la luz, se dan cuenta de que tienen el acuerdo perfecto. "
  },
  {
    name: "te espero en el fin del mundo",
    genero: "romance",
    id: 181,
    autor: "andrea longarela",
    imagen: "romance/teesperoenelfindelmundo.jpg",
    price: 7000,
    descripcion: "Violet y Levi se conocen desde niños. Él sueña con crear un hogar. Ella, con escapar del suyo. Son mejores amigos, siempre están el uno para el otro y, cuando empiezan a crecer, se dan cuenta de que sus sentimientos también lo hacen. Intensos. Imparables. Únicos.  Pero Levi desea echar raíces entre montañas mientras que Violet quiere volar muy alto y comerse el mundo. Es posible que no existan dos personas más incompatibles que encajen mejor.  Una cabaña abandonada, una colección de figuras de madera y un amor de los que marcan toda una vida. El de Levi, el chico que hacía muchas preguntas, y el de Vi, la chica que tenía todas las respuestas."
  },
  {
    name: "todos los lugares que mantuvimos en secreto",
    genero: "romance",
    id: 182,
    autor: "inma rubiales",
    imagen: "romance/todosloslugares.jpg",
    price: 9800,
    descripcion: "Maeve no sabe mucho sobre sí misma. Solo que no deja de pensar en si su madre cumplió todos sus sueños antes de morir, que la relación con su novio va cada vez peor y que está cansada de que todos sus días sean iguales. Cuando, por un impulso, acaba comprando un billete solo de ida a la otra parte del mundo para volver al pueblo en el que vivió cuando era niña, lo que menos esperaba era reencontrarse allí con el que fue su mejor amigo de la infancia. Connor siempre supo que tarde o temprano Maeve regresaría. Lo que nunca pensó es que fuera a ser así."
  },
  {
    name: "¿Y a ti que te pica?",
    genero: "romance",
    id: 183,
    autor: "megan maxwell",
    imagen: "romance/yatiquetepica.jpg",
    price: 8745,
    descripcion: "Nacho Duarte es un reconocido director de cine mexicano que, tras la muerte de su esposa, cerró las puertas de su corazón a cal y canto. Le gusta disfrutar con las mujeres, pero no suele repetir con la misma porque no piensa volver a enamorarse. Su último trabajo lo traslada a España, donde va a rodar una película de acción cuya actriz principal es su amiga Estela Ponce. Sin embargo, para las escenas más peligrosas cuenta con la colaboración de Andrea Madoc, una militar estadounidense que, además, trabaja como especialista de cine."
  },
  {
    name: "asesinato en el orient Express",
    genero: "suspenso y drama",
    id: 184,
    autor: "hercules poirot",
    imagen: "suspensoydrama/asesinatoeneloriente.jpg",
    price: 8212,
    descripcion: "Un referente universal. Uno de los casos más famosos de Hércules Poirot. La novela más popular del mítico detective Hércules Poirot. En un lugar aislado de la antigua Yugoslavia, en plena madrugada, una fuerte tormenta de nieve obstaculiza la línea férrea por donde circula el Orient Express. "
  },

  {
    name: "catedrales",
    genero: "suspenso y drama",
    id: 185,
    autor: "claudia piñeiro",
    imagen: "suspensoydrama/catedrales.jpg",
    price: 70505,
    descripcion: "Hace treinta años, en un terreno baldío de un barrio tranquilo de Buenos Aires, apareció descuartizado y quemado el cadáver de una adolescente. La investigación se cerró sin culpables y su familia -de clase media educada, formal y católica— silenciosamente se fue resquebrajando. Pero, pasado ese largo tiempo, la verdad oculta saldrá a luz ..."
  },
  {
    name: "crimen y castigo",
    genero: "suspenso y drama",
    id: 186,
    autor: "fiodor m. dostoievski",
    imagen: "suspensoydrama/crimencastigo.jpg",
    price: 7622,
    descripcion: "Un pobre estudiante llamado Rodión Raskólnikov lucha por salir de su propia miseria. Decide matar a una anciana prestamista, pero luego sufre por el crimen que ha cometido. Finalmente, confiesa sinceramente y parte hacia la cárcel."
  },
  {
    name: "cuentos completos",
    genero: "suspenso y drama",
    id: 187,
    autor: "edgar allan poe",
    imagen: "suspensoydrama/cuentoscompletos.jpg",
    price: 15000,
    descripcion: "Edgar Allan Poe llevó a cabo lo que ningún escritor había logrado antes:  liberar las terribles imágenes que atesora el subconsciente para  dejarlas caminar entre sus páginas. Abanderado de la novela gótica y  precursor del relato detectivesco y de la ciencia ficción, sus historias  llevan el suspense y el desasosiego hasta una perfección nunca alcanzada y quizá jamás alcanzable de nuevo."
  },
  {
    name: "el espia que surgio del frio",
    genero: "suspenso y drama",
    id: 188,
    autor: "john le carre",
    imagen: "suspensoydrama/elespia.jpg",
    price: 16200,
    descripcion: "El espía que surgió del frío es una excepcional novela de espionaje que sentó un modelo nunca hasta ahora superado. A la sombra del reciente Muro de Berlín, Alec Leamas asiste al asesinato de su último agente, muerto de un disparo a manos de los guardias de la RDA"
  },
  {
    name: "el halcon maltes",
    genero: "suspenso y drama",
    id: 189,
    autor: "hammet",
    imagen: "suspensoydrama/elhalconmaltes.jpg",
    price: 14000,
    descripcion: "La audaz mezcla de realismo descarnado y de sentimientos románticos característica de Dashiell Hammett (1894-1961) alcanza en El halcón maltés (1930) su mejor expresión. Una estatuilla con figura de halcón que los caballeros de la Orden de Malta regalaron al emperador Carlos V en 1530 ha sido objeto, durante más de cuatro siglos, de robos y extravíos. Cuando tras mil peripecias llega a la ciudad de San Francisco, un grupo de delincuentes trata de apoderarse de ella, lo que da lugar a conflictos, asesinatos y pasiones exacerbadas."
  },
  {
    name: "el instinto",
    genero: "suspenso y drama",
    id: 190,
    autor: "ashley audrian",
    imagen: "suspensoydrama/elinstinto.jpg",
    price: 4790,
    descripcion: "Blythe ya no sabe que es verdad y que es mentira: ¿está viviendo la vida feliz que siempre deseó, con un marido perfecto y una hija angelical? ¿O está repitiendo la sórdida historia de su madre y su abuela, marcada por el desapego y el maltrato? ¿Es Fox, su marido, el compañero y padre ideal, o tiene una vida paralela que cada día lo aleja más de su casa? Su hija Violet ¿es una niña brillante y complicada, que solo quiere que su madre le preste más atención, o es malvada de nacimiento? Depende del momento y de cómo se mire, todo y nada puede parecer verdad o parecer una trampa."
  },
  {
    name: "el poder del perro",
    genero: "suspenso y drama",
    id: 191,
    autor: "don winslow",
    imagen: "suspensoydrama/elpoderdelperro.jpg",
    price: 9000,
    descripcion: "Década de los setenta. El gobierno de los Estados Unidos emprende una lucha sin cuartel contra el narcotráfico en México. Art Keller, un joven agente de la DEA de origen hispano no tarda en obtener resultados y acabar con el patrón local."
  },
  {
    name: "el reino",
    genero: "suspenso y drama",
    id: 192,
    autor: "jo nesbo",
    imagen: "suspensoydrama/elreino.jpg",
    price: 8000,
    descripcion:"En lo alto de una montaña, en los páramos de Noruega, hay un viejo caserón habitado por un hombre solitario. Se llama Roy, es experto en pájaros, lleva la gasolinera del pueblo y en cada casa corre un rumor sobre el. "
  },
  {
    name: "el secreto",
    genero: "suspenso y drama",
    id: 193,
    autor: "donna tartt",
    imagen: "suspensoydrama/elsecreto.jpg",
    price: 8700,
    descripcion: "La vida no es fácil en un college de Nueva Inglaterra si eres un chico modesto y falto de afecto que llega de California, y Richard Papen lo sabe; por eso agradece que lo admitan en un pequeño grupo de cinco estudiantes capitaneados por un profesor de literatura clásica con mucho carisma y pocos escrúpulos."
  },
  {
    name: "huye rapido, vete lejos",
    genero: "suspenso y drama",
    id: 194,
    autor: "fred vargas",
    imagen: "suspensoydrama/hoyerapido.jpg",
    price: 8808,
    descripcion: "París, una ciudad invadida por el miedo. El comisario Adamsberg investiga las apariciones de unas extrañas inscripciones en las puertas de un edificio parisino: un cuatro invertido y debajo tres letras, CLT. ¿Una mente diabólica, una broma o una amenaza? Joss, un viejo marino bretón, recibe misivas que le avisan dónde estarán las siguientes pintadas. Pánico, rumores, rencor, asesinatos y desconfianza tejen esta memorable intriga policíaca."
  },
  {
    name: "la paciente silenciosa",
    genero: "suspenso y drama",
    id: 195,
    autor: "alex michaelides",
    imagen: "suspensoydrama/lapacientesilenciosa.jpg",
    price: 7620,
    descripcion: "Alicia Berenson, una pintora de exito, dispara cinco tiros en la cabeza de su marido, y no vuelve a hablar nunca más. Su negativa a emitir palabra alguna convierte una tragedia domestica en un misterio que atrapa la imaginación de toda Inglaterra."
  },
  {
    name: "la puerta de los angeles",
    genero: "suspenso y drama",
    id: 196,
    autor: "penelope fitzgerald",
    imagen: "suspensoydrama/lapuertadelosangeles.jpg",
    price: 8412,
    descripcion: "Fred Fairly, un brillante joven, tiene ante sí un prometedor futuro como profesor de Ciencias en Cambridge, siempre y cuando respete una de las normas ancestrales del college al que pertenece. El St. Angelicus, como el Monte Athos, se caracteriza por no haber permitido que ninguna mujer traspase sus muros desde hace más de quinientos años. Por tanto, el matrimonio es algo impensable."
  },
  {
    name: "la nagre no miente",
    genero: "suspenso y drama",
    id: 197,
    autor: "walter kirn",
    imagen: "suspensoydrama/lasangrenomiente.jpg",
    price: 9999,
    descripcion: "Un thriller en la estela de A sangre fría, El talento de Mr. Ripley y El impostor. En el verano de 1988, Walter Kirn (entonces un aspirante a escritor que hacía frente a un padre complicado y un matrimonio en crisis) se disponía a realizar un encargo de lo más peculiar que cambiaría su destino para siempre: llevar personalmente un perro tullido desde su casa en Montana hasta un apartamento en Nueva York propiedad de Clark Rockefeller, un misterioso joven, banquero y coleccionista de arte que acababa de adoptar el perro por internet."
    },
  {
    name: "las aventuras de sherlock holmes",
    genero: "suspenso y drama",
    id: 198,
    autor: "arthur conan doyle",
    imagen: "suspensoydrama/lasaventuras.jpg",
    price: 8412,
    descripcion: "Antes de aparecer en un solo volumen, las historias recogidas en este libro fueron publicadas individualmente en la revista Strand entre 1891 y 1892. Su autor alcanzó una enorme popularidad gracias a la publicación de los relatos, y a finales de 1892 se reunieron en un libro con el título de Las aventuras de Sherlock Holmes. Conan Doyle ya había presentado en Estudio en escarlata y El signo de los cuatro al brillante y extravagante detective del número 221 B de Baker Street, y a su fiel y valioso compañero, el doctor Watson. No obstante, no sería hasta la publicación de las presentes aventuras que el detective se convertiría en el investigador más famoso de la historia. En los doce relatos que siguen Sherlock Holmes despliega toda su genialidad y potencial de razonamiento y, junto a Watson, forman una de las parejas más célebres que ha engendrado la ficción."
  },
  {
    name: "la suerte del enano",
    genero: "suspenso y drama",
    id: 199,
    autor: "cesar perez gellida",
    imagen: "suspensoydrama/lasuertedelenano.jpg",
    price: 12300,
    descripcion: "Valladolid, 2019. Sara Robles es una inspectora singular. Encargada de  resolver un macabro crimen, además tiene que lidiar con sus problemas  cotidianos, estrechamente relacionados con la adicción al sexo y con un  pasado que no termina de curar. Mientras tanto, El  Espantapájaros, una  misteriosa cabeza pensante, ha orquestado el robo perfecto junto a un  exminero, un pocero y un sicario, y está  a punto de llevarlo a cabo a traves del alcantarillado de la ciudad."
  },
  {
    name: "loba negra",
    genero: "suspenso y drama",
    id: 200,
    autor: "juan gomez jurado",
    imagen: "suspensoydrama/loba.jpg",
    price: 17000,
    descripcion: "NUNCA FUE Pero hay alguien más peligroso que ella. Alguien que podría vencerla. TAN DIFÍCIL La Loba negra está cada vez más cerca. Y Antonia, por primera vez, está asustada."
  },
  {
    name: "otra vuelta de tuerca",
    genero: "suspenso y drama",
    id: 201,
    autor: "henry james",
    imagen: "suspensoydrama/otravuelta.jpg",
    price: 78000,
    descripcion: "Una joven inglesa llega a una vieja mansión en el campo para encargarse de la educación de un niño y de una niña que han quedado huérfanos. Poco tiempo después de su llegada, descubre que los niños reciben periódicas visitas de sus antiguos preceptores, un hombre y una mujer muertos un año atrás. La institutriz, horrorizada, decide hacer lo posible para defender a los niños, cuya custodia se le había encomendado, y trata de interponerse entre ellos y los fantasmas."
  },
  {
    name: "el sueño chandler",
    genero: "suspenso y drama",
    id: 202,
    autor: "raymond chandler",
    imagen: "suspensoydrama/unsueñoeterno.jpg",
    price: 7262,
    descripcion: "el detective Philip Marlowe se enfrenta a un caso que promete ser  sencillo: el viejo general Sternwood, paralítico y extremadamente rico,  ha recibido una nota de chantaje que concierne a su hija menor, la salvaje Carmen."
  },
];

function mostrarLibros() {
    let contenedor = document.querySelector('#productos');
    contenedor.innerHTML ='';
    libros.forEach(producto => {
        let productoHTML = `
        
        <div class="container-product d-flex p-5 col-sm-6 col-md-4 col-xl-3">
        <div class="row justify-content-center">
            <a class="book-container" target="_blank" rel="noreferrer noopener">
                <div class="book">
                    <img alt="${producto.name}" src="assets/${producto.imagen}">
                </div>
            </a>
            <div class="descripcion-product col-12 mt-4 text-center">
                <h3 class="title-product montserrat-title">${producto.name}</h3>
                <h4 class="autor-product oswald-author">${producto.autor}</h4>
                <div class="d-flex price-btn-product justify-content-around align-items-center">
                    <p class="price-product">$${producto.price}</p>
                    <button id="addToCartBtn" class="btn-product mx-1 border d-inline" onclick="agregarAlCarrito()">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
        `;
        contenedor.innerHTML += productoHTML;
    });
}
mostrarLibros();


function displayProductDetails() {
  // Obtener los detalles del producto desde el localStorage (o desde otro origen de datos)
  let producto = JSON.parse(localStorage.getItem('productToDisplay'));

  // Verificar si hay datos válidos del producto
  if (producto) {
      // Mostrar los detalles del producto en la página shop.html
      document.getElementById('productImage').setAttribute('src', `../assets/${producto.imagen}`);
      document.getElementById('productName').textContent = producto.nombre;
      document.getElementById('productAutor').textContent = producto.autor;
      document.getElementById('productPrice').textContent = `$${producto.precio}`;
      document.getElementById('productDescripcion').textContent = producto.descripcion;

      // Establecer el enlace del producto con su ID
      document.getElementById('productLink').setAttribute('data-id', producto.id);
    } else {
        // Manejar el caso donde no se encuentren datos del producto
        console.error('No se encontraron datos del producto para mostrar.');
    }
}

// Función para agregar el producto al carrito
function agregarAlCarrito() {
    // Obtener los detalles del producto actualmente mostrado
    let id = document.getElementById('productLink').getAttribute('data-id');
    let nombre = document.getElementById('productName').textContent;
    let autor = document.getElementById('productAutor').textContent;
    let precio = document.getElementById('productPrice').textContent.replace('$', ''); // Quitar el símbolo de $
    let imagen = document.getElementById('productImage').getAttribute('src');
    let descripcion = document.getElementById('productDescripcion').textContent;

    // Crear un objeto con los detalles del producto
    let producto = {
        id: id,
        nombre: nombre,
        autor: autor,
        precio: parseFloat(precio), // Convertir a número
        imagen: imagen,
        descripcion: descripcion,
        cantidad: 1 // Puedes agregar más propiedades según sea necesario
    };

    // Obtener el array de productos del localStorage o inicializarlo si está vacío
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito (usando el ID como identificador único)
    let productoExistente = productosEnCarrito.find(item => item.id === producto.id);

    if (productoExistente) {
        // Si el producto ya existe, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo
        productosEnCarrito.push(producto);
    }

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));

    // Mostrar un mensaje de confirmación (opcional)
    alert(`El producto "${nombre}" se agregó al carrito.`);

    // Opcional: Redirigir a la página del carrito o actualizar la interfaz de usuario
    // window.location.href = 'ruta-a-la-pagina-del-carrito.html';
}

// Función para redirigir a la página de productos
function redirectToShop(id, nombre, autor, precio, imagen, descripcion) {
    // Guardar los detalles del producto seleccionado en el localStorage
    let productToDisplay = {
        id: id,
        nombre: nombre,
        autor: autor,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion
    };

    // Guardar en localStorage para mostrar en shop.html
    localStorage.setItem('productToDisplay', JSON.stringify(productToDisplay));
}




document.addEventListener('DOMContentLoaded', function () {
  var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
  var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    offcanvasEl.addEventListener('hide.bs.offcanvas', function () {
      offcanvasEl.style.transform = 'translateX(-100%)';
    });
    offcanvasEl.addEventListener('show.bs.offcanvas', function () {
      offcanvasEl.style.transform = 'translateX(0%)';
    });
    return new bootstrap.Offcanvas(offcanvasEl);
  });
});




