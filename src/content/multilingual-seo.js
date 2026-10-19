import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();
copy(
  'A traveler using a phone in an airport lounge',
  'Un viajero usando el móvil en una sala de espera del aeropuerto',
  'Havalimanı salonunda telefon kullanan bir yolcu',
);

export const multilingualSeo = {
  translations,
  slug: 'multilingual-seo-ai-search',
  title: copy(
    'Multilingual SEO for AI search: beyond a language switcher',
    'SEO multilingüe para búsquedas con IA: más allá del selector de idioma',
    'Yapay zekâ aramaları için çok dilli SEO: dil seçicinin ötesi',
  ),
  seoTitle: copy(
    'Multilingual SEO for AI Search: A Practical Guide',
    'SEO multilingüe para búsquedas con IA',
    'Yapay Zekâ Aramaları İçin Çok Dilli SEO',
  ),
  focusKeyphrase: copy('multilingual SEO', 'SEO multilingüe', 'çok dilli SEO'),
  description: copy(
    'Plan multilingual SEO for AI search. Check translated URLs, canonical tags, local buyer questions and a practical launch checklist before expanding.',
    'Planifica el SEO multilingüe para búsquedas con IA. Revisa URL, etiquetas canónicas y preguntas locales con una lista de comprobación antes de expandirte.',
    'Yapay zekâ aramaları için çok dilli SEO planlayın. Yeni pazarlara açılmadan önce URL, kanonik etiket ve yerel alıcı sorularını kontrol listesiyle inceleyin.',
  ),
  category: 'TECHNICAL SEO',
  published: '2026-10-19',
  updated: '2026-10-19',
  relatedService: 'seo',
  takeaway: copy(
    'Multilingual SEO starts with a decision: are you helping existing visitors read, or trying to earn search visibility for each language? A language switcher can help readers without creating separate indexable pages. For a search expansion, plan accessible language URLs, complete local content and a way to measure each market. None of these steps guarantees an AI citation.',
    'El SEO multilingüe empieza con una decisión: ¿quieres ayudar a los visitantes actuales a leer o ganar visibilidad en búsquedas para cada idioma? Un selector puede ayudar al lector sin crear páginas indexables independientes. Para expandirte en buscadores, planifica URL accesibles por idioma, contenido local completo y una forma de medir cada mercado. Ninguno de estos pasos garantiza una cita de IA.',
    'Çok dilli SEO bir kararla başlar: Mevcut ziyaretçilerin okumasını mı kolaylaştırıyorsunuz, yoksa her dilde arama görünürlüğü mü hedefliyorsunuz? Dil seçici, ayrı dizine eklenebilir sayfalar oluşturmadan okuyuculara yardımcı olabilir. Aramada büyümek için erişilebilir dil URL’leri, eksiksiz yerel içerik ve her pazarı ölçme yöntemi planlayın. Bu adımların hiçbiri yapay zekâ yanıtlarında kaynak gösterilmeyi garanti etmez.',
  ),
  sections: [
    {
      id: 'reading-or-discovery',
      title: copy(
        'Give multilingual SEO a clear job',
        'Define el objetivo del SEO multilingüe',
        'Çok dilli SEO için net bir amaç belirleyin',
      ),
      paragraphs: [
        copy(
          'In a [September 11, 2026 SEO discussion](https://www.reddit.com/r/SEO/comments/1wdqbc5/href_lang_for_deepl_translated_pages/), a site owner asks whether serving translations differs from visitors using browser translation. An [October 16 discussion about language switchers](https://www.reddit.com/r/Wordpress/comments/1x7670t/do_visitors_actually_use_language_switchers_on/) raises the same tension between reading convenience and search benefits. These questions identify a planning problem; the comments do not establish ranking effects.',
          'En un [debate de SEO del 11 de septiembre de 2026](https://www.reddit.com/r/SEO/comments/1wdqbc5/href_lang_for_deepl_translated_pages/), el propietario de un sitio pregunta si ofrecer traducciones difiere de que los visitantes usen la traducción del navegador. Un [debate del 16 de octubre sobre selectores de idioma](https://www.reddit.com/r/Wordpress/comments/1x7670t/do_visitors_actually_use_language_switchers_on/) plantea la misma tensión entre facilitar la lectura y obtener beneficios de búsqueda. Las preguntas revelan un problema de planificación; los comentarios no demuestran efectos en el posicionamiento.',
          'Bir [11 Eylül 2026 tarihli SEO tartışmasında](https://www.reddit.com/r/SEO/comments/1wdqbc5/href_lang_for_deepl_translated_pages/) site sahibi, çeviri sunmanın ziyaretçinin tarayıcı çevirisi kullanmasından farklı olup olmadığını soruyor. Bir [16 Ekim tarihli dil seçici tartışması](https://www.reddit.com/r/Wordpress/comments/1x7670t/do_visitors_actually_use_language_switchers_on/) da okuma kolaylığı ile arama faydaları arasındaki aynı ayrımı gündeme getiriyor. Bu sorular bir planlama sorununa işaret ediyor; yorumlar sıralama etkilerini kanıtlamıyor.',
        ),
        copy(
          'Open a translated page in a fresh browser session and copy its address. Does that address directly return the chosen language, or must someone click a control first? Record the initial content, visible translation and URL separately. A translated reading experience on one URL is useful, but it should not be reported as several independently indexed pages.',
          'Abre una página traducida en una sesión nueva del navegador y copia su dirección. ¿Esa dirección devuelve directamente el idioma elegido o hay que pulsar primero un control? Registra por separado el contenido inicial, la traducción visible y la URL. Leer traducciones en una sola URL es útil, pero no debe presentarse como varias páginas indexadas de forma independiente.',
          'Çevrilmiş bir sayfayı yeni bir tarayıcı oturumunda açıp adresini kopyalayın. Bu adres seçilen dili doğrudan sunuyor mu, yoksa önce bir düğmeye basmak mı gerekiyor? İlk içeriği, görünür çeviriyi ve URL’yi ayrı kaydedin. Tek URL üzerinden çevrilmiş içerik okumak faydalıdır; ancak bunu birbirinden bağımsız dizine eklenmiş birkaç sayfa olarak raporlamayın.',
        ),
      ],
    },
    {
      id: 'language-urls',
      title: copy(
        'Choose URLs that expose the translated page',
        'Elige URL que den acceso a la página traducida',
        'Çevrilmiş sayfaya doğrudan erişim sağlayan URL’ler seçin',
      ),
      paragraphs: [
        copy(
          '[Google’s multilingual site guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) recommends different URLs for language versions. It warns that content selected through cookies or browser settings may not all be crawled. Keep a visible route to each available version so a visitor can choose it directly.',
          '[La guía de Google para sitios multilingües](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) recomienda URL distintas para cada versión lingüística. Advierte que quizá no se rastreen todas las variantes seleccionadas mediante cookies o ajustes del navegador. Mantén un enlace visible a cada versión disponible para que el visitante pueda elegirla directamente.',
          '[Google’ın çok dilli site rehberi](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), dil sürümleri için farklı URL’ler önerir. Çerezler veya tarayıcı ayarlarıyla seçilen tüm içeriklerin taranamayabileceği konusunda uyarır. Ziyaretçinin doğrudan seçebilmesi için mevcut her sürüme görünür bir bağlantı sunun.',
        ),
        copy(
          'If separate search entry points are the goal, ask the technical owner to show how each language URL works without a saved preference. Check the main text, navigation and contact path. For an established site, plan redirects and link updates before changing URLs; a publishing task alone is not a reason to reorganize the whole site.',
          'Si el objetivo es tener entradas independientes desde buscadores, pide al responsable técnico que muestre cómo funciona cada URL de idioma sin preferencias guardadas. Revisa el texto principal, la navegación y el contacto. En un sitio existente, planifica las redirecciones y los enlaces antes de cambiar URL; publicar un artículo no justifica reorganizar todo el sitio.',
          'Hedef, aramadan ayrı giriş noktaları oluşturmaksa teknik sorumludan her dil URL’sinin kayıtlı tercih olmadan nasıl çalıştığını göstermesini isteyin. Ana metni, gezinmeyi ve iletişim yolunu kontrol edin. Mevcut bir sitede URL’leri değiştirmeden önce yönlendirmeleri ve bağlantı güncellemelerini planlayın; tek bir yayın işi tüm siteyi yeniden düzenleme gerekçesi değildir.',
        ),
      ],
    },
    {
      id: 'language-signals',
      title: copy(
        'Align hreflang and canonical decisions',
        'Coordina hreflang y las etiquetas canónicas',
        'hreflang ve kanonik kararlarını uyumlu hale getirin',
      ),
      paragraphs: [
        copy(
          'Use [Google’s localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions) when real alternate URLs exist. Each version should reference itself and its equivalents, with reciprocal links. Choose language-only or language-and-region codes according to the audience you actually serve. Do not invent regional versions just to fill a tag list.',
          'Sigue [la guía de Google sobre versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions) cuando existan URL alternativas reales. Cada versión debe referenciarse a sí misma y a sus equivalentes, con enlaces recíprocos. Elige códigos de idioma o de idioma y región según el público al que realmente te diriges. No inventes versiones regionales solo para completar etiquetas.',
          'Gerçek alternatif URL’ler varsa [Google’ın yerelleştirilmiş sürüm rehberini](https://developers.google.com/search/docs/specialty/international/localized-versions) izleyin. Her sürüm kendisine ve eşdeğerlerine karşılıklı bağlantılarla işaret etmelidir. Dil veya dil ve bölge kodlarını gerçekten hizmet verdiğiniz kitleye göre seçin. Etiket listesini doldurmak için bölgesel sürümler uydurmayın.',
        ),
        copy(
          'A canonical identifies the preferred URL among duplicate or similar pages. It is a different decision from identifying language alternatives. [Google’s canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) says to specify a canonical in the same language when using hreflang. For a unique Spanish translation, review a self-referencing Spanish canonical instead of automatically pointing it to English.',
          'La etiqueta canónica identifica la URL preferida entre páginas duplicadas o similares. Es una decisión distinta de identificar alternativas lingüísticas. [La guía de Google sobre URL canónicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) indica que, al usar hreflang, se debe especificar una canónica en el mismo idioma. Para una traducción española única, revisa una canónica española que apunte a sí misma en lugar de dirigirla automáticamente al inglés.',
          'Kanonik etiket, yinelenen veya benzer sayfalar arasında tercih edilen URL’yi belirtir. Bu, dil alternatiflerini tanımlamaktan farklı bir karardır. [Google’ın kanonik URL rehberi](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), hreflang kullanırken aynı dilde bir kanonik belirtilmesini söyler. Benzersiz bir İspanyolca çeviri için otomatik olarak İngilizceye yöneltmek yerine kendisine işaret eden İspanyolca kanoniği değerlendirin.',
        ),
        copy(
          'Neither annotation creates a translation or forces indexing. Test actual destinations, not just the presence of tags. Our [discovery-files guide](/blog/robots-sitemap-llms-explained) explains how sitemap entries and internal links support that review.',
          'Ninguna de estas anotaciones crea una traducción ni obliga a indexar. Comprueba los destinos reales, no solo la presencia de etiquetas. Nuestra [guía de archivos de descubrimiento](/blog/robots-sitemap-llms-explained) explica cómo ayudan los sitemaps y los enlaces internos en esa revisión.',
          'Bu işaretlemelerin hiçbiri çeviri oluşturmaz veya dizine eklenmeyi zorunlu kılmaz. Yalnızca etiketlerin varlığını değil, gerçek hedeflerini test edin. [Keşif dosyaları rehberimiz](/blog/robots-sitemap-llms-explained), site haritası kayıtları ve dahili bağlantıların bu incelemeyi nasıl desteklediğini açıklar.',
        ),
      ],
    },
    {
      id: 'local-buyer-needs',
      title: copy(
        'Localize the buying decision, not just the words',
        'Adapta la decisión de compra al mercado',
        'Satın alma kararını yerel ihtiyaçlara uyarlayın',
      ),
      paragraphs: [
        copy(
          'Choose the market and reader before choosing a translated keyphrase. Review local search wording and approved sales or support questions. A language is not a country: Spanish-speaking buyers may face different availability, currencies and support arrangements. Preserve the offer’s real limits in every version.',
          'Elige el mercado y el lector antes de traducir la frase clave. Revisa las expresiones de búsqueda locales y las preguntas de ventas o soporte autorizadas para este uso. Un idioma no equivale a un país: los compradores hispanohablantes pueden tener distinta disponibilidad, moneda y soporte. Conserva los límites reales de la oferta en cada versión.',
          'Anahtar ifadeyi çevirmeden önce pazarı ve okuyucuyu seçin. Yerel arama ifadelerini ve bu kullanım için onaylanmış satış veya destek sorularını inceleyin. Dil, ülke demek değildir: İspanyolca konuşan alıcıların ürün erişimi, para birimi ve destek koşulları farklı olabilir. Her sürümde teklifin gerçek sınırlarını koruyun.',
        ),
        copy(
          'Translate the complete decision path: title, answer, examples, FAQs, image alternatives and next step. Check sentences containing links after rendering; translating a full paragraph in a dictionary may leave text around its anchors unchanged. Use the [citable-content checklist](/blog/anatomy-of-a-citable-page) to review evidence and clarity in each language.',
          'Traduce todo el recorrido de decisión: título, respuesta, ejemplos, preguntas frecuentes, textos alternativos de imágenes y siguiente paso. Revisa las frases con enlaces una vez renderizadas; traducir un párrafo completo en un diccionario puede dejar sin traducir el texto que rodea los enlaces. Usa la [lista para crear contenido citable](/blog/anatomy-of-a-citable-page) para revisar las pruebas y la claridad en cada idioma.',
          'Karar yolculuğunun tamamını çevirin: başlık, yanıt, örnekler, sık sorulan sorular, görsel alternatif metinleri ve sonraki adım. Bağlantı içeren cümleleri sayfa oluşturulduktan sonra kontrol edin; sözlükte tüm paragrafı çevirmek, bağlantı çevresindeki metni değiştirmeyebilir. Her dilde kanıt ve açıklığı incelemek için [kaynak gösterilebilir içerik kontrol listesini](/blog/anatomy-of-a-citable-page) kullanın.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: an integration guide',
          'Ejemplo ilustrativo: una guía de integración',
          'Temsili örnek: bir entegrasyon rehberi',
        ),
        text: copy(
          'A fictional software vendor has an English guide and wants to help Spanish-speaking evaluators. The team first verifies which integrations and support hours apply to that audience. It translates the guide and contact path, then tests a direct Spanish URL if independent search discovery is required. The release succeeds when the intended content is accessible and correct; a later citation is a separate observation. This is a proposed workflow, not a Citevia client result.',
          'Un proveedor ficticio de software tiene una guía en inglés y quiere ayudar a evaluadores hispanohablantes. Primero verifica qué integraciones y horarios de soporte corresponden a ese público. Traduce la guía y el contacto; después prueba una URL española directa si necesita que la versión se descubra de forma independiente en buscadores. La publicación cumple su objetivo cuando el contenido previsto es accesible y correcto; una cita posterior es una observación aparte. Es un proceso propuesto, no un resultado de un cliente de Citevia.',
          'Kurgusal bir yazılım sağlayıcısının İngilizce rehberi vardır ve İspanyolca konuşan değerlendiricilere yardımcı olmak ister. Ekip önce bu kitle için hangi entegrasyonların ve destek saatlerinin geçerli olduğunu doğrular. Rehberi ve iletişim yolunu çevirir; bağımsız arama keşfi gerekiyorsa doğrudan bir İspanyolca URL’yi test eder. Amaçlanan içerik erişilebilir ve doğru olduğunda yayın hedefini karşılar; daha sonra kaynak gösterilmesi ayrı bir gözlemdir. Bu önerilen bir iş akışıdır, Citevia müşteri sonucu değildir.',
        ),
      },
    },
    {
      id: 'measure-by-market',
      title: copy(
        'Evaluate AI search separately for each market',
        'Evalúa las búsquedas con IA por mercado',
        'Yapay zekâ aramalarını her pazar için ayrı değerlendirin',
      ),
      paragraphs: [
        copy(
          'For Google AI Overviews and AI Mode, [Google’s eligibility requirements for AI search](https://developers.google.com/search/docs/appearance/ai-features) still require a supporting page to be indexed and eligible for a snippet. There is no special multilingual AI schema that replaces those conditions. This guidance describes Google; do not assume every assistant uses the same retrieval process.',
          'Para AI Overviews y AI Mode, [los requisitos de búsqueda con IA de Google](https://developers.google.com/search/docs/appearance/ai-features) siguen exigiendo que una página de apoyo esté indexada y pueda mostrarse con un fragmento. Ningún esquema especial de IA multilingüe sustituye esas condiciones. Esta guía describe Google; no supongas que todos los asistentes recuperan información del mismo modo.',
          'Google AI Overviews ve AI Mode için [Google’ın yapay zekâ arama gereksinimleri](https://developers.google.com/search/docs/appearance/ai-features), kaynak sayfanın dizine eklenmiş ve arama snippet’iyle gösterilmeye uygun olmasını hâlâ gerektirir. Bu koşulların yerini alan özel bir çok dilli yapay zekâ şeması yoktur. Bu rehber Google’ı açıklar; her asistanın aynı bilgi alma sürecini kullandığını varsaymayın.',
        ),
        copy(
          'Build a small question set for each language and market. Preserve the same buying intent where it makes sense, but use natural local phrasing. Save the exact question, date, assistant, available settings, answer and cited URL. Record the answer language and source language separately: a translated answer does not prove that your translated page was retrieved.',
          'Crea un pequeño conjunto de preguntas para cada idioma y mercado. Conserva la misma intención de compra cuando tenga sentido, pero usa expresiones locales naturales. Guarda la pregunta exacta, la fecha, el asistente, los ajustes disponibles, la respuesta y la URL citada. Registra por separado el idioma de respuesta y el de la fuente: una respuesta traducida no demuestra que se haya recuperado tu página traducida.',
          'Her dil ve pazar için küçük bir soru kümesi oluşturun. Uygun olduğunda aynı satın alma niyetini koruyun, ancak doğal yerel ifadeler kullanın. Sorunun tam metnini, tarihi, asistanı, görünen ayarları, yanıtı ve kaynak URL’sini kaydedin. Yanıt dilini ve kaynak dilini ayrı kaydedin: Çevrilmiş bir yanıt, çevrilmiş sayfanızın alındığını kanıtlamaz.',
        ),
        copy(
          'Compare repeated observations within each market before combining totals. Keep unknown source languages and uncited answers visible. Our [guide to measuring AI visibility by evidence type](/blog/measuring-ai-search-visibility) explains the distinction between sampled answers, observed visits and business outcomes. Treat a change after translation as a finding to investigate, not proof of causation.',
          'Compara observaciones repetidas dentro de cada mercado antes de sumar resultados. Identifica las fuentes cuyo idioma se desconoce y las respuestas sin citas. Nuestra [guía de medición de visibilidad en IA](/blog/measuring-ai-search-visibility) distingue entre muestras de respuestas, visitas observadas y resultados de negocio. Un cambio posterior a la traducción es un hallazgo que investigar, no una prueba de causalidad.',
          'Toplamları birleştirmeden önce her pazardaki tekrarlanan gözlemleri karşılaştırın. Dili bilinmeyen kaynakları ve kaynak göstermeyen yanıtları belirtin. [Yapay zekâ görünürlük ölçümü rehberimiz](/blog/measuring-ai-search-visibility), örneklenen yanıtlar, gözlemlenen ziyaretler ve iş sonuçları arasındaki farkı açıklar. Çeviri sonrasındaki değişimi, nedensellik kanıtı değil araştırılacak bir bulgu olarak değerlendirin.',
        ),
      ],
    },
    {
      id: 'launch-checklist',
      title: copy(
        'Use a small multilingual launch checklist',
        'Usa una lista breve de comprobación antes de publicar',
        'Kısa bir çok dilli yayın kontrol listesi kullanın',
      ),
      paragraphs: [
        copy(
          'Start with one important buyer journey and assign a content owner plus a technical owner. If you need help reviewing the URL and access decisions, Citevia’s [SEO service](/services/seo) covers that foundation. Expand after the team can maintain the first translated journey.',
          'Empieza con un recorrido de compra importante y asigna un responsable de contenido y otro técnico. Si necesitas ayuda para revisar las URL y el acceso, el [servicio de SEO de Citevia](/services/seo) cubre esa base. Amplía el trabajo cuando el equipo pueda mantener el primer recorrido traducido.',
          'Önemli bir alıcı yolculuğuyla başlayın ve bir içerik sorumlusu ile bir teknik sorumlu belirleyin. URL ve erişim kararlarını incelemek için yardıma ihtiyacınız varsa [Citevia SEO hizmeti](/services/seo) bu temeli kapsar. Ekip ilk çevrilmiş yolculuğu sürdürebildiğinde kapsamı genişletin.',
        ),
      ],
      bullets: [
        copy(
          'Purpose: name the audience, language, market and intended search entry point.',
          'Objetivo: define el público, el idioma, el mercado y la entrada prevista desde buscadores.',
          'Amaç: Kitleyi, dili, pazarı ve hedeflenen arama giriş noktasını belirtin.',
        ),
        copy(
          'Access: open each intended language URL without cookies or a saved preference.',
          'Acceso: abre cada URL de idioma prevista sin cookies ni preferencias guardadas.',
          'Erişim: Hedeflenen her dil URL’sini çerez veya kayıtlı tercih olmadan açın.',
        ),
        copy(
          'Signals: check status codes, indexing rules, canonical targets and reciprocal language links.',
          'Señales: revisa los códigos de estado, las reglas de indexación, los destinos canónicos y los enlaces lingüísticos recíprocos.',
          'Sinyaller: Durum kodlarını, dizin kurallarını, kanonik hedefleri ve karşılıklı dil bağlantılarını kontrol edin.',
        ),
        copy(
          'Content: review the entire page, metadata, FAQs, source labels and contact journey in the chosen language.',
          'Contenido: revisa toda la página, los metadatos, las preguntas frecuentes, los textos de las fuentes y el contacto en el idioma elegido.',
          'İçerik: Tüm sayfayı, meta verileri, sık sorulan soruları, kaynak etiketlerini ve iletişim yolculuğunu seçilen dilde inceleyin.',
        ),
        copy(
          'Maintenance: record who updates every version when the offer changes and when you will review each market’s evidence.',
          'Mantenimiento: registra quién actualiza cada versión cuando cambia la oferta y cuándo revisarás las pruebas de cada mercado.',
          'Bakım: Teklif değiştiğinde her sürümü kimin güncelleyeceğini ve her pazarın kanıtlarını ne zaman inceleyeceğinizi kaydedin.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Multilingual SEO: practical questions',
      'SEO multilingüe: dudas prácticas',
      'Çok dilli SEO: pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Can I keep a language switcher on one URL?',
          '¿Puedo mantener un selector de idioma en una sola URL?',
          'Tek URL üzerinde dil seçici kullanabilir miyim?',
        ),
        answer: copy(
          'Yes, if the goal is a translated reading experience. Document that limitation clearly. When independent search discovery for each language is the goal, plan distinct accessible URLs; the switcher alone does not establish separate indexing.',
          'Sí, si el objetivo es ofrecer una experiencia de lectura traducida. Documenta claramente esa limitación. Cuando quieras que cada idioma se descubra de forma independiente en buscadores, planifica URL accesibles distintas; el selector por sí solo no demuestra una indexación separada.',
          'Evet, amaç çevrilmiş bir okuma deneyimiyse kullanabilirsiniz. Bu sınırı açıkça belgeleyin. Her dilin aramada bağımsız keşfedilmesi hedefleniyorsa farklı, erişilebilir URL’ler planlayın; dil seçici tek başına ayrı dizine eklenmeyi sağlamaz.',
        ),
      },
      {
        question: copy(
          'Should every translation point its canonical to English?',
          '¿Debe apuntar al inglés la etiqueta canónica de cada traducción?',
          'Her çevirinin kanonik etiketi İngilizceye mi işaret etmeli?',
        ),
        answer: copy(
          'No. Do not automatically consolidate complete translations into English. Review the preferred URL within each language. A distinct translated page will commonly use its own canonical, while hreflang describes its relationship to real equivalent language pages.',
          'No. No consolides automáticamente en inglés las traducciones completas. Revisa la URL preferida dentro de cada idioma. Una página traducida independiente suele usar su propia canónica, mientras hreflang describe su relación con páginas equivalentes reales en otros idiomas.',
          'Hayır. Tam çevirileri otomatik olarak İngilizcede birleştirmeyin. Her dilde tercih edilen URL’yi inceleyin. Ayrı bir çevrilmiş sayfa genellikle kendi kanoniğini kullanır; hreflang ise diğer dillerdeki gerçek eşdeğer sayfalarla ilişkisini tanımlar.',
        ),
      },
      {
        question: copy(
          'Do I need a separate page for every country speaking the language?',
          '¿Necesito una página para cada país que habla el idioma?',
          'Aynı dili konuşan her ülke için ayrı sayfa gerekir mi?',
        ),
        answer: copy(
          'Not automatically. Start with the audience and offer. Add regional versions when availability, terms or buyer needs require meaningfully different information and your team can maintain it. A shared language version may be enough when those details are the same.',
          'No necesariamente. Empieza por el público y la oferta. Añade versiones regionales cuando la disponibilidad, las condiciones o las necesidades del comprador requieran información realmente distinta y puedas mantenerla. Una versión compartida puede bastar si esos detalles son iguales.',
          'Otomatik olarak gerekmez. Kitle ve teklifle başlayın. Ürün erişimi, koşullar veya alıcı ihtiyaçları anlamlı biçimde farklı bilgi gerektiriyorsa ve ekibiniz bunu sürdürebiliyorsa bölgesel sürümler ekleyin. Bu ayrıntılar aynıysa ortak bir dil sürümü yeterli olabilir.',
        ),
      },
      {
        question: copy(
          'Will hreflang make an AI assistant cite the translated page?',
          '¿Hará hreflang que un asistente de IA cite la página traducida?',
          'hreflang, yapay zekâ asistanının çevrilmiş sayfayı kaynak göstermesini sağlar mı?',
        ),
        answer: copy(
          'No citation is guaranteed. Hreflang describes language alternatives for systems that use it; it is not an instruction to recommend your business. Inspect the actual cited URL and its content rather than inferring the source from the language of the answer.',
          'No hay ninguna cita garantizada. Hreflang describe alternativas lingüísticas para los sistemas que lo usan; no es una instrucción para recomendar tu empresa. Inspecciona la URL citada y su contenido en lugar de deducir la fuente por el idioma de respuesta.',
          'Kaynak gösterilme garantisi yoktur. Hreflang, onu kullanan sistemler için dil alternatiflerini tanımlar; işletmenizi önermeleri yönünde bir talimat değildir. Yanıt dilinden kaynak çıkarsamak yerine gerçekten gösterilen URL’yi ve içeriğini inceleyin.',
        ),
      },
      {
        question: copy(
          'Must a small team translate the entire archive first?',
          '¿Debe un equipo pequeño traducir primero todo el archivo?',
          'Küçük bir ekip önce tüm arşivi çevirmek zorunda mı?',
        ),
        answer: copy(
          'No. Prioritize a complete journey around a demonstrated buyer need: the useful guide, relevant offer and next step. Assign an owner for updates in every published language. A manageable set of accurate pages is a better starting point than an archive the team cannot maintain.',
          'No. Prioriza un recorrido completo en torno a una necesidad demostrada del comprador: la guía útil, la oferta pertinente y el siguiente paso. Asigna un responsable de las actualizaciones en cada idioma publicado. Un conjunto manejable de páginas precisas es un mejor punto de partida que un archivo que el equipo no puede mantener.',
          'Hayır. Kanıtlanmış bir alıcı ihtiyacı etrafındaki tam yolculuğa öncelik verin: faydalı rehber, ilgili teklif ve sonraki adım. Yayımlanan her dilde güncellemeler için sorumlu belirleyin. Yönetilebilir sayıda doğru sayfa, ekibin bakımını yapamadığı bir arşivden daha iyi bir başlangıçtır.',
        ),
      },
    ],
  },
};

copy(
  `${multilingualSeo.seoTitle} | Citevia`,
  `${translations.es[multilingualSeo.seoTitle]} | Citevia`,
  `${translations.tr[multilingualSeo.seoTitle]} | Citevia`,
);
export const multilingualSeoTranslations = translations;
export const multilingualSeoFragments = fragments;
