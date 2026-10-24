import {
  socialLeadIntro,
  socialLeadChannels,
  socialLeadSteps,
  socialLeadFunnel,
  socialLeadCases,
  socialLeadFaqs,
} from '../content/social-media-leads.js';

// Keep translation keys tied to the shared English content used by the page.
const localizedCopy = {
  es: {
    intro: [
      'Generación de clientes potenciales en redes sociales',
      'Convierte los comentarios relevantes en Reddit e Instagram en oportunidades comerciales. Citevia también te ayuda a llegar a compradores en LinkedIn, X, YouTube y Medium.',
    ],
    channels: [
      [
        'Llega a personas que comparan opciones, piden recomendaciones y resuelven problemas en comunidades relevantes.',
        'Conversación en una comunidad · recomendaciones de software',
        'Comparando soluciones',
        'Las hojas de cálculo ya se nos quedan cortas. ¿Qué CRM recomendaríais para una agencia de cinco personas?',
        'Empieza por un embudo compartido, un historial de correos y recordatorios de seguimiento. Trabajo con [Brand]; su CRM sencillo puede encajar en una agencia pequeña. Compara sus informes y precios con los de tus otras opciones antes de decidir.',
        'Una comparación útil que da al comprador un motivo para conocer tu producto.',
      ],
      [
        'Participa en conversaciones de descubrimiento de productos en publicaciones y Reels relevantes, donde una pregunta puede convertirse en una decisión de compra.',
        'Reel de viajes · descubrimiento de productos',
        'Buscando un producto',
        '¿Recomendáis alguna mochila de cabina con espacio para un portátil y una escapada de fin de semana?',
        'Comprueba las medidas de la aerolínea, que tenga un compartimento independiente para el portátil y que se abra como una maleta. Diseñamos las bolsas de [Brand] para este tipo de viaje. La guía de tallas puede ayudarte a comprobar si alguna encaja con tu aerolínea y tu equipaje.',
        'Responde a la pregunta práctica y abre la puerta a una consulta sobre el producto.',
      ],
      [
        'Conecta con responsables de decisiones que debaten retos empresariales, eligen colaboradores y piden consejo a su red.',
        'Conversación profesional · búsqueda de un proveedor',
        'Buscando un servicio',
        '¿Alguien puede recomendar un proveedor de atención al cliente para cubrir los fines de semana sin contratar un equipo completo?',
        'Pregunta por la dotación de personal los fines de semana, quién gestiona las incidencias escaladas y el acceso a tu sistema de soporte. Mi equipo en [Brand] ofrece este tipo de cobertura. Puedo compartir una lista para que compares proveedores con los mismos criterios.',
        'Conecta una necesidad empresarial concreta con una conversación de seguimiento relevante.',
      ],
      [
        'Detecta solicitudes recientes de alternativas y recomendaciones y responde mientras la conversación sigue activa.',
        'Publicación pública · búsqueda de alternativas',
        'Evaluando alternativas',
        'Buscamos una herramienta de analítica más sencilla para un equipo pequeño. ¿Qué deberíamos probar?',
        '¿Qué informes utilizáis realmente cada semana? Si lo principal es la adquisición y la conversión, empieza por ahí. Trabajo en [Brand]; nuestra herramienta se centra en esas funciones esenciales. Compara también los límites de eventos y las opciones para exportar datos.',
        'Convierte una petición general de recomendaciones en una conversación concreta sobre el producto.',
      ],
      [
        'Ayuda a quienes hacen preguntas sobre productos o su implementación en vídeos relacionados con tu oferta.',
        'Comentarios de un tutorial · pregunta sobre un flujo de trabajo',
        'Resolviendo un problema',
        'Gran tutorial. ¿Podemos automatizar el informe semanal en lugar de copiarlo todo a mano?',
        'Utiliza una exportación programada si tu herramienta lo permite y comprueba los campos antes de conectar un panel. Nuestro equipo en [Brand] ayuda a configurar este tipo de flujos de informes. Empieza por identificar los pasos manuales que quieres eliminar.',
        'Ofrece un siguiente paso práctico justo cuando alguien necesita ayuda.',
      ],
      [
        'Aporta respuestas fundamentadas a artículos relevantes y conecta con lectores que investigan un problema en profundidad.',
        'Respuesta a un artículo · pregunta de implementación',
        'Investigando un enfoque',
        '¿Cómo adaptarías este proceso a un equipo pequeño sin una persona dedicada a operaciones?',
        'Asigna a una persona la responsabilidad de la lista de tareas y empieza por automatizar una sola tarea repetitiva. En [Brand], ayudamos a equipos pequeños a simplificar estos traspasos de trabajo. Un breve mapa del proceso suele mostrar por dónde empezar sin añadir otro puesto.',
        'Consigue que valoren tu marca con una respuesta útil a una pregunta detallada.',
      ],
    ],
    steps: [
      [
        'Encuentra las señales de compra',
        'Define tu oferta, tus competidores y las preguntas de tus compradores. Encuentra conversaciones relevantes en los canales que utiliza tu audiencia.',
      ],
      [
        'Elige las conversaciones adecuadas',
        'Revisa la intención, la relevancia, el momento y las normas de la comunidad. Prioriza a quienes buscan una solución que realmente puedes ofrecer.',
      ],
      [
        'Haz que el comentario sea útil',
        'Redacta una respuesta útil con la voz de tu marca. Revisamos juntos el texto y el enfoque de publicación antes de publicarlo, indicando claramente la relación con la marca cuando corresponda.',
      ],
      [
        'Sigue el recorrido hasta el contacto comercial',
        'Informa sobre los enlaces a los comentarios, las respuestas, las visitas atribuibles y las consultas cualificadas. Utiliza las preguntas que recibes para mejorar la siguiente ronda.',
      ],
    ],
    funnel: [
      'Conversaciones revisadas',
      'Oportunidades relevantes',
      'Respuestas aprobadas',
      'Consultas cualificadas',
    ],
    cases: [
      {
        sector: 'Software B2B',
        title: 'De una comparación de herramientas a una conversación sobre una demo',
        challenge:
          'Una pequeña marca de CRM necesita llegar a propietarios de agencias que están sustituyendo sus hojas de cálculo.',
        approach:
          'Encuentra peticiones de recomendaciones, explica las ventajas y limitaciones y presenta el producto indicando claramente tu relación con la marca. Propón una demo solo cuando el comprador quiera continuar.',
        labels: ['Conversaciones relevantes', 'Respuestas aprobadas', 'Consultas sobre demos'],
        measurement:
          'Relaciona las solicitudes de demo con las visitas etiquetadas y las fuentes de descubrimiento declaradas por los propios contactos en el CRM.',
      },
      {
        sector: 'Marca de consumo',
        title: 'De una pregunta sobre un producto a una consulta de compra',
        challenge:
          'Una marca de accesorios de viaje quiere conectar con compradores que investigan su próxima bolsa de cabina.',
        approach:
          'Responde a preguntas sobre tamaño, equipaje y medidas de aerolíneas en contenido de viajes relevante. Dirige a los compradores interesados a la información adecuada del producto cuando la plataforma lo permita.',
        labels: ['Conversaciones relevantes', 'Respuestas aprobadas', 'Consultas sobre productos'],
        measurement:
          'Mide las visitas atribuibles a páginas de producto y las consultas; registra las compras por separado cuando exista atribución.',
      },
    ],
    faqs: [
      [
        '¿Con qué plataformas trabajáis?',
        'Reddit e Instagram son el punto de partida. También trabajamos en LinkedIn, X, YouTube y Medium, con una combinación de canales basada en dónde hacen preguntas tus compradores y buscan recomendaciones.',
      ],
      [
        '¿Cómo puede un comentario generar un cliente potencial?',
        'Un comentario útil puede ayudar a alguien que compara productos o busca un servicio a descubrir tu marca. Puede responder, visitar tu perfil o tu web, o hacer una consulta. Distinguimos las oportunidades de conversación de los contactos cualificados y medimos los pasos que pueden atribuirse.',
      ],
      [
        '¿Podemos revisar los comentarios antes de que se publiquen?',
        'Sí. Acordamos contigo los temas, el tono, las afirmaciones sobre la marca y el enfoque de publicación. Los comentarios se revisan antes de publicarlos. Las respuestas deben ayudar al lector, describir tu oferta con precisión y revelar la relación con tu marca cuando corresponda.',
      ],
      [
        '¿Qué incluyen los informes?',
        'El informe acordado puede incluir conversaciones seleccionadas, comentarios aprobados y publicados, enlaces de publicación, respuestas y consultas atribuibles. El seguimiento de la web y del CRM puede conectar la actividad con los contactos cuando sea posible. Los comentarios eliminados y las lagunas de atribución deben seguir siendo visibles.',
      ],
      [
        '¿Son publicaciones reales y casos de estudio de clientes?',
        'Las conversaciones, respuestas, el embudo y los casos de estudio de esta página son ejemplos ficticios que muestran el servicio. Las cifras son sintéticas y no representan resultados de clientes de Citevia ni previsiones. Tu campaña comienza con una investigación de tu propio mercado.',
      ],
      [
        '¿Garantizáis clientes potenciales o posiciones en búsquedas con IA?',
        'No. El volumen de contactos depende de las conversaciones relevantes, tu oferta y la respuesta de los compradores. Los comentarios pueden contribuir al descubrimiento de la marca, pero no se garantizan la visibilidad en plataformas, la indexación en buscadores, las citas de IA ni las ventas. El alcance y la medición se acuerdan antes de comenzar la campaña.',
      ],
    ],
  },
  tr: {
    intro: [
      'Sosyal medyadan potansiyel müşteri kazanımı',
      'Reddit ve Instagram’daki ilgili yorumları potansiyel müşteri fırsatlarına dönüştürün. Citevia, LinkedIn, X, YouTube ve Medium’daki alıcılara ulaşmanıza da yardımcı olur.',
    ],
    channels: [
      [
        'İlgili topluluklarda seçenekleri karşılaştıran, öneri isteyen ve sorunlarına çözüm arayan kişilere ulaşın.',
        'Topluluk tartışması · yazılım önerileri',
        'Çözümleri karşılaştırıyor',
        'Elektronik tablolar artık bize yetmiyor. Beş kişilik bir ajans için hangi CRM’leri önerirsiniz?',
        'Ortak bir satış süreci, e-posta geçmişi ve takip hatırlatıcılarıyla başlayın. [Brand] ile çalışıyorum; sade CRM’i küçük bir ajansa uygun olabilir. Karar vermeden önce raporlama özelliklerini ve fiyatlarını diğer seçeneklerinizle karşılaştırın.',
        'Alıcıya ürününüzü incelemesi için bir neden sunan yararlı bir karşılaştırma.',
      ],
      [
        'Bir sorunun satın alma kararına dönüşebildiği ilgili gönderi ve Reels’lerde ürün keşfi sohbetlerine katılın.',
        'Seyahat Reels’i · ürün keşfi',
        'Ürün arıyor',
        'Dizüstü bilgisayar ve hafta sonu seyahati için eşya alabilen bir kabin sırt çantası öneriniz var mı?',
        'Havayolunun ölçü sınırlarını, ayrı bir bilgisayar bölmesini ve valiz gibi açılabilmesini kontrol edin. [Brand] çantalarını bu tür seyahatler için üretiyoruz. Ölçü rehberi, çantalardan birinin havayolunuza ve eşya listenize uygun olup olmadığını görmenize yardımcı olabilir.',
        'Pratik soruyu yanıtlayın ve bir ürün talebine kapı açın.',
      ],
      [
        'İş sorunlarını tartışan, iş ortağı seçen ve çevresinden tavsiye isteyen karar vericilerle buluşun.',
        'Profesyonel tartışma · iş ortağı arayışı',
        'Hizmet arıyor',
        'Tam bir ekip işe almadan hafta sonu desteği sağlayabilecek bir müşteri hizmetleri ortağı önerebilir misiniz?',
        'Hafta sonu personel planını, üst seviyeye taşınan taleplerden kimin sorumlu olduğunu ve destek sisteminize erişimi sorun. [Brand] ekibimiz bu tür destek sunuyor. Sağlayıcıları aynı ölçütlerle karşılaştırabilmeniz için bir kontrol listesi paylaşabilirim.',
        'Belirli bir iş ihtiyacını ilgili bir sonraki görüşmeyle buluşturun.',
      ],
      [
        'Güncel alternatif ve tavsiye taleplerini tespit edin, sohbet devam ederken yanıt verin.',
        'Herkese açık gönderi · alternatif arayışı',
        'Alternatifleri değerlendiriyor',
        'Küçük bir ekip için daha basit bir analitik aracı arıyoruz. Ne denemeliyiz?',
        'Her hafta gerçekten hangi raporları kullanıyorsunuz? Asıl ihtiyacınız müşteri kazanımı ve dönüşümse oradan başlayın. [Brand] bünyesindeyim; aracımız bu temel ihtiyaçlara odaklanıyor. Olay sınırlarını ve veri dışa aktarma seçeneklerini de karşılaştırın.',
        'Genel bir tavsiye talebini odaklı bir ürün görüşmesine dönüştürün.',
      ],
      [
        'Teklifinizle ilgili videoların altında uygulama ve ürün soruları soran izleyicilere yardımcı olun.',
        'Eğitim videosu yorumları · iş akışı sorusu',
        'Sorun çözüyor',
        'Harika bir eğitim. Her şeyi elle kopyalamak yerine haftalık raporlama adımını otomatikleştirebilir miyiz?',
        'Aracınız destekliyorsa zamanlanmış dışa aktarma kullanın ve bir panoya bağlamadan önce alanları kontrol edin. [Brand] ekibimiz bu tür raporlama akışlarını kurmaya yardımcı oluyor. Önce ortadan kaldırmak istediğiniz manuel adımları belirleyin.',
        'Birinin yardıma ihtiyaç duyduğu anda uygulanabilir bir sonraki adım sunun.',
      ],
      [
        'İlgili makalelere bilgiye dayalı yanıtlar ekleyin ve bir sorunu derinlemesine araştıran okurlarla bağlantı kurun.',
        'Makale yanıtı · uygulama sorusu',
        'Bir yaklaşımı araştırıyor',
        'Bu süreci, özel bir operasyon sorumlusu olmayan küçük bir ekibe nasıl uyarlarsınız?',
        'Kontrol listesinin sorumluluğunu bir kişiye verin ve önce tekrar eden tek bir görevi otomatikleştirin. [Brand] olarak küçük ekiplerin bu iş devirlerini sadeleştirmesine yardımcı oluyoruz. Kısa bir süreç haritası, yeni bir pozisyon açmadan nereden başlayabileceğinizi genellikle gösterir.',
        'Ayrıntılı bir soruya yararlı bir yanıt vererek markanızın değerlendirilmesini sağlayın.',
      ],
    ],
    steps: [
      [
        'Satın alma sinyallerini bulun',
        'Teklifinizi, rakiplerinizi ve alıcı sorularını belirleyin. Hedef kitlenizin kullandığı kanallarda ilgili sohbetleri bulun.',
      ],
      [
        'Doğru sohbetleri seçin',
        'Niyeti, ilgiyi, zamanlamayı ve topluluk kurallarını inceleyin. Gerçekten sunabildiğiniz bir çözümü arayan kişilere öncelik verin.',
      ],
      [
        'Yorumu yararlı hale getirin',
        'Markanızın üslubuyla yardımcı bir yanıt hazırlayın. Yayımlamadan önce metni ve paylaşım yaklaşımını birlikte gözden geçirin; ilgili durumlarda markayla ilişkiyi açıkça belirtin.',
      ],
      [
        'Potansiyel müşteriye giden yolu izleyin',
        'Yorum bağlantılarını, yanıtları, ilişkilendirilebilen ziyaretleri ve nitelikli talepleri raporlayın. İnsanların sorularından yararlanarak bir sonraki çalışmayı geliştirin.',
      ],
    ],
    funnel: ['İncelenen sohbet', 'İlgili fırsat', 'Onaylanan yanıt', 'Nitelikli talep'],
    cases: [
      {
        sector: 'B2B yazılım',
        title: 'Araç karşılaştırmasından demo görüşmesine',
        challenge:
          'Küçük bir CRM markası, elektronik tabloları bırakıp yeni bir araca geçmek isteyen ajans sahiplerine ulaşmak istiyor.',
        approach:
          'Tavsiye taleplerini bulun, avantajları ve sınırlamaları açıklayın, markayla ilişkinizi açıkça belirterek ürünü tanıtın. Alıcı devam etmek istediğinde demo önerin.',
        labels: ['İlgili sohbet', 'Onaylanan yanıt', 'Demo talebi'],
        measurement:
          'Demo taleplerini, CRM’deki etiketlenmiş ziyaretler ve kişilerin belirttiği keşif kaynaklarıyla eşleştirin.',
      },
      {
        sector: 'Tüketici markası',
        title: 'Ürün sorusundan satın alma talebine',
        challenge:
          'Bir seyahat aksesuarı markası, bir sonraki kabin çantasını araştıran alıcılarla buluşmak istiyor.',
        approach:
          'İlgili seyahat içeriklerinin altında boyut, eşya yerleşimi ve havayolu ölçülerine uygunluk sorularını yanıtlayın. Platform izin verdiğinde ilgili alıcıları doğru ürün bilgisine yönlendirin.',
        labels: ['İlgili sohbet', 'Onaylanan yanıt', 'Ürün talebi'],
        measurement:
          'İlişkilendirilebilen ürün sayfası ziyaretlerini ve talepleri takip edin; kaynak ilişkilendirmesi mümkün olduğunda satın alımları ayrı kaydedin.',
      },
    ],
    faqs: [
      [
        'Hangi platformlarla çalışıyorsunuz?',
        'Başlangıç noktası Reddit ve Instagram’dır. LinkedIn, X, YouTube ve Medium’da da çalışırız. Kanal dağılımını, alıcılarınızın nerede soru sorduğuna ve tavsiye aradığına göre belirleriz.',
      ],
      [
        'Bir yorum nasıl potansiyel müşteri kazandırabilir?',
        'Yararlı bir yorum, ürünleri karşılaştıran veya hizmet arayan birinin markanızı keşfetmesine yardımcı olabilir. Bu kişi yanıt verebilir, profilinizi veya web sitenizi ziyaret edebilir ya da talepte bulunabilir. Sohbet fırsatlarıyla nitelikli potansiyel müşterileri birbirinden ayırır ve ilişkilendirilebilen adımları takip ederiz.',
      ],
      [
        'Yorumları yayımlanmadan önce inceleyebilir miyiz?',
        'Evet. Konuları, üslubu, markayla ilgili iddiaları ve paylaşım yaklaşımını sizinle birlikte belirleriz. Yorumlar yayımlanmadan önce incelenir. Yanıtlar okura yardımcı olmalı, teklifinizi doğru açıklamalı ve ilgili durumlarda markanızla olan ilişkiyi belirtmelidir.',
      ],
      [
        'Raporlama neleri içerir?',
        'Mutabık kalınan rapor; seçilen sohbetleri, onaylanan ve yayımlanan yorumları, paylaşım bağlantılarını, yanıtları ve ilişkilendirilebilen talepleri içerebilir. Web sitesi ve CRM takibi, mümkün olduğunda etkinliği potansiyel müşterilerle ilişkilendirebilir. Kaldırılan yorumlar ve kaynak ilişkilendirmesindeki boşluklar görünür kalmalıdır.',
      ],
      [
        'Bunlar gerçek gönderiler ve müşteri vaka çalışmaları mı?',
        'Bu sayfadaki sohbetler, yanıtlar, dönüşüm hunisi ve vaka çalışmaları, hizmeti açıklayan kurgusal örneklerdir. Rakamlar sentetiktir; Citevia müşteri sonuçları veya tahminleri değildir. Kampanyanız, kendi pazarınıza yönelik araştırmayla başlar.',
      ],
      [
        'Potansiyel müşteri veya yapay zekâ aramalarında sıralama garantisi veriyor musunuz?',
        'Hayır. Potansiyel müşteri sayısı ilgili sohbetlere, teklifinize ve alıcıların yanıtına bağlıdır. Yorumlar markanın keşfedilmesine katkı sağlayabilir ancak platform görünürlüğü, arama indeksleme, yapay zekâ alıntıları ve satışlar garanti edilmez. Kapsam ve ölçüm, kampanya başlamadan önce kararlaştırılır.',
      ],
    ],
  },
};

function buildContentTranslations(copy) {
  const entries = [
    [socialLeadIntro.title, copy.intro[0]],
    [socialLeadIntro.description, copy.intro[1]],
  ];
  const channelFields = ['description', 'context', 'intent', 'question', 'reply', 'action'];
  socialLeadChannels.forEach((channel, index) => {
    channelFields.forEach((field, fieldIndex) => {
      entries.push([channel[field], copy.channels[index][fieldIndex]]);
    });
  });
  socialLeadSteps.forEach((step, index) => {
    entries.push([step.title, copy.steps[index][0]], [step.body, copy.steps[index][1]]);
  });
  socialLeadFunnel.forEach((item, index) => entries.push([item.label, copy.funnel[index]]));
  socialLeadCases.forEach((example, index) => {
    for (const field of ['sector', 'title', 'challenge', 'approach', 'measurement']) {
      entries.push([example[field], copy.cases[index][field]]);
    }
    example.metrics.forEach((metric, metricIndex) => {
      entries.push([metric.label, copy.cases[index].labels[metricIndex]]);
    });
  });
  socialLeadFaqs.forEach((faq, index) => {
    entries.push([faq.q, copy.faqs[index][0]], [faq.a, copy.faqs[index][1]]);
  });
  return Object.fromEntries(entries);
}

const interfaceCopy = [
  ['Social media leads', 'Leads en redes sociales', 'Sosyal medya müşteri kazanımı'],
  [
    'Social Media Leads — Reddit & Instagram',
    'Leads en redes sociales — Reddit e Instagram',
    'Sosyal medyadan müşteri kazanımı — Reddit ve Instagram',
  ],
  [
    'Social Media Leads — Reddit & Instagram | Citevia',
    'Leads en redes sociales — Reddit e Instagram | Citevia',
    'Sosyal medyadan müşteri kazanımı — Reddit ve Instagram | Citevia',
  ],
  [
    'Citevia connects AI search strategy, social media lead generation, SEO, content, reputation, and measurement to help brands become easier to find, understand, and choose.',
    'Citevia conecta la estrategia de búsqueda con IA, la generación de clientes potenciales en redes sociales, el SEO, el contenido, la reputación y la medición para que las marcas sean más fáciles de encontrar, entender y elegir.',
    'Citevia, markaların bulunmasını, anlaşılmasını ve seçilmesini kolaylaştırmak için yapay zekâ arama stratejisini, sosyal medyadan müşteri kazanımını, SEO’yu, içeriği, itibarı ve ölçümü birleştirir.',
  ],
  [
    'Turn comments into lead opportunities',
    'Convierte comentarios en oportunidades comerciales',
    'Yorumları potansiyel müşteri fırsatlarına dönüştürün',
  ],
  ['Featured channels', 'Canales destacados', 'Öne çıkan kanallar'],
  ['Built around buying intent', 'Basado en la intención de compra', 'Satın alma niyetine odaklı'],
  ['Example brand reply', 'Ejemplo de respuesta de marca', 'Örnek marka yanıtı'],
  [
    'The right conversation. A useful reply.',
    'La conversación adecuada. Una respuesta útil.',
    'Doğru sohbet. Yararlı bir yanıt.',
  ],
  [
    'Illustrative conversations and replies. Not live posts.',
    'Conversaciones y respuestas ilustrativas. No son publicaciones reales.',
    'Açıklayıcı sohbet ve yanıt örnekleri. Gerçek gönderiler değildir.',
  ],
  [
    'Your next customer is already in the comments.',
    'Tu próximo cliente ya está en los comentarios.',
    'Bir sonraki müşteriniz şimdiden yorumlarda.',
  ],
  [
    'Turn Reddit and Instagram conversations into lead opportunities.',
    'Convierte las conversaciones de Reddit e Instagram en oportunidades comerciales.',
    'Reddit ve Instagram sohbetlerini potansiyel müşteri fırsatlarına dönüştürün.',
  ],
  [
    'We find people asking for recommendations, comparing products, and looking for help. Then we create useful, relevant comments that give them a reason to discover your brand.',
    'Encontramos a personas que piden recomendaciones, comparan productos y buscan ayuda. Después creamos comentarios útiles y relevantes que les dan un motivo para descubrir tu marca.',
    'Tavsiye isteyen, ürün karşılaştıran ve yardım arayan kişileri buluruz. Ardından markanızı keşfetmeleri için bir neden sunan yararlı ve ilgili yorumlar hazırlarız.',
  ],
  [
    'Explore social media leads',
    'Descubre los leads en redes sociales',
    'Sosyal medyadan müşteri kazanımını keşfedin',
  ],
  ['Also on', 'También en', 'Diğer kanallar'],
  ['See the opportunity', 'Descubre la oportunidad', 'Fırsatı görün'],
  [
    'From a question to a conversation.',
    'De una pregunta a una conversación.',
    'Bir sorudan sohbete.',
  ],
  [
    'Explore how the approach changes across six channels. Each sample is a fictional conversation and a proposed reply, using [Brand] as a placeholder.',
    'Descubre cómo cambia el enfoque en seis canales. Cada muestra es una conversación ficticia con una propuesta de respuesta, utilizando [Brand] como marcador de posición.',
    'Yaklaşımın altı kanalda nasıl değiştiğini keşfedin. Her örnek, yer tutucu olarak [Brand] kullanılan kurgusal bir sohbet ve önerilen bir yanıttır.',
  ],
  ['Choose a sample platform', 'Elige una plataforma de ejemplo', 'Örnek platform seçin'],
  ['Illustrative opportunity', 'Oportunidad ilustrativa', 'Açıklayıcı fırsat örneği'],
  [
    'A sample campaign, made visible.',
    'Una campaña de ejemplo, a la vista.',
    'Örnek bir kampanyayı görün.',
  ],
  [
    'Synthetic demonstration data. Not client results or a forecast.',
    'Datos sintéticos de demostración. No son resultados de clientes ni previsiones.',
    'Sentetik gösterim verileri. Müşteri sonuçları veya tahmin değildir.',
  ],
  [
    'An opportunity becomes a lead only when someone makes a relevant enquiry. Published comments and qualified leads are reported separately.',
    'Una oportunidad se convierte en un contacto comercial solo cuando alguien hace una consulta relevante. Los comentarios publicados y los contactos cualificados se informan por separado.',
    'Bir fırsat, ancak biri ilgili bir talepte bulunduğunda potansiyel müşteriye dönüşür. Yayımlanan yorumlar ve nitelikli potansiyel müşteriler ayrı raporlanır.',
  ],
  [
    'Citevia helps your brand join the conversations that matter: recommendations, comparisons, and questions from people looking for a solution. Start with Reddit and Instagram. Reach further with LinkedIn, X, YouTube, and Medium.',
    'Citevia ayuda a tu marca a participar en las conversaciones que importan: recomendaciones, comparaciones y preguntas de personas que buscan una solución. Empieza por Reddit e Instagram. Amplía tu alcance con LinkedIn, X, YouTube y Medium.',
    'Citevia, markanızın önemli sohbetlere katılmasına yardımcı olur: çözüm arayan kişilerin tavsiyeleri, karşılaştırmaları ve soruları. Reddit ve Instagram ile başlayın. LinkedIn, X, YouTube ve Medium ile daha fazla kişiye ulaşın.',
  ],
  ['Discuss my campaign', 'Hablemos de mi campaña', 'Kampanyamı görüşelim'],
  ['Explore the samples', 'Explora los ejemplos', 'Örnekleri keşfedin'],
  [
    'Your audience. Their channels.',
    'Tu audiencia. Sus canales.',
    'Hedef kitleniz. Kullandıkları kanallar.',
  ],
  [
    'Reddit + Instagram first. More ways to be discovered.',
    'Primero Reddit e Instagram. Más formas de que te descubran.',
    'Önce Reddit + Instagram. Keşfedilmek için daha fazla yol.',
  ],
  [
    'We build the channel mix around your audience, your offer, and the conversations worth joining.',
    'Definimos la combinación de canales según tu audiencia, tu oferta y las conversaciones en las que merece la pena participar.',
    'Kanal dağılımını hedef kitlenize, teklifinize ve katılmaya değer sohbetlere göre oluştururuz.',
  ],
  ['Priority channel', 'Canal prioritario', 'Öncelikli kanal'],
  ['How it works', 'Cómo funciona', 'Nasıl çalışır'],
  [
    'Find the intent. Earn the next step.',
    'Encuentra la intención. Gánate el siguiente paso.',
    'Niyeti bulun. Sonraki adım için güven kazanın.',
  ],
  [
    'A focused process that connects relevant conversations to useful comments and measurable enquiries.',
    'Un proceso centrado en conectar conversaciones relevantes con comentarios útiles y consultas medibles.',
    'İlgili sohbetleri yararlı yorumlara ve ölçülebilir taleplere bağlayan odaklı bir süreç.',
  ],
  ['Illustrative case studies', 'Casos de estudio ilustrativos', 'Açıklayıcı vaka örnekleri'],
  [
    'What this could look like for your brand.',
    'Cómo podría funcionar para tu marca.',
    'Markanız için nasıl görünebilir?',
  ],
  [
    'Two fictional campaign scenarios show the approach and how we would measure it. All figures below are synthetic examples, not achieved results.',
    'Dos escenarios de campañas ficticias muestran el enfoque y cómo lo mediríamos. Todas las cifras siguientes son ejemplos sintéticos, no resultados obtenidos.',
    'İki kurgusal kampanya senaryosu, yaklaşımı ve nasıl ölçeceğimizi gösterir. Aşağıdaki tüm rakamlar sentetik örneklerdir; elde edilmiş sonuçlar değildir.',
  ],
  [
    'Illustrative case study · synthetic data',
    'Caso de estudio ilustrativo · datos sintéticos',
    'Açıklayıcı vaka örneği · sentetik veriler',
  ],
  ['The approach', 'El enfoque', 'Yaklaşım'],
  ['How we would measure it', 'Cómo lo mediríamos', 'Nasıl ölçerdik'],
  ['Clear reporting', 'Informes claros', 'Açık raporlama'],
  [
    'See the work. Follow the lead.',
    'Conoce el trabajo. Sigue el contacto comercial.',
    'Çalışmayı görün. Potansiyel müşteriyi takip edin.',
  ],
  [
    'Know which conversations we chose, what was published, and what happened next.',
    'Conoce qué conversaciones elegimos, qué se publicó y qué ocurrió después.',
    'Hangi sohbetleri seçtiğimizi, nelerin yayımlandığını ve sonrasında neler olduğunu öğrenin.',
  ],
  [
    'Conversation and comment links',
    'Enlaces a conversaciones y comentarios',
    'Sohbet ve yorum bağlantıları',
  ],
  [
    'Review the context, approved wording, and placement status.',
    'Revisa el contexto, el texto aprobado y el estado de publicación.',
    'Bağlamı, onaylanan metni ve paylaşım durumunu inceleyin.',
  ],
  [
    'Replies, visits, and enquiries',
    'Respuestas, visitas y consultas',
    'Yanıtlar, ziyaretler ve talepler',
  ],
  [
    'Connect activity to website and CRM data where tracking is available.',
    'Relaciona la actividad con los datos de la web y del CRM cuando haya seguimiento disponible.',
    'Takip olanağı varsa etkinliği web sitesi ve CRM verileriyle ilişkilendirin.',
  ],
  ['What we learn next', 'Qué aprendemos para seguir mejorando', 'Öğrendiklerimizle sonraki adım'],
  [
    'Use buyer questions and campaign feedback to refine the approach.',
    'Utiliza las preguntas de los compradores y las conclusiones de la campaña para mejorar el enfoque.',
    'Yaklaşımı geliştirmek için alıcı sorularından ve kampanya geri bildirimlerinden yararlanın.',
  ],
  [
    'A clearer view of comment-led growth.',
    'Una visión más clara del crecimiento a través de comentarios.',
    'Yorumlarla büyümeye daha net bir bakış.',
  ],
  [
    'Be part of the next buying conversation.',
    'Participa en la próxima conversación de compra.',
    'Bir sonraki satın alma sohbetinde yer alın.',
  ],
  [
    'Let’s map your audience, your channels, and the questions your brand can answer.',
    'Definamos tu audiencia, tus canales y las preguntas que tu marca puede responder.',
    'Hedef kitlenizi, kanallarınızı ve markanızın yanıtlayabileceği soruları belirleyelim.',
  ],
  [
    'Plan my social lead campaign',
    'Planifica mi campaña de leads en redes',
    'Sosyal medya kampanyamı planlayın',
  ],
];

export const socialMediaLeadTranslations = {
  es: {
    ...buildContentTranslations(localizedCopy.es),
    ...Object.fromEntries(interfaceCopy.map(([english, spanish]) => [english, spanish])),
  },
  tr: {
    ...buildContentTranslations(localizedCopy.tr),
    ...Object.fromEntries(interfaceCopy.map(([english, , turkish]) => [english, turkish])),
  },
};
