import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const bingNotIndexing = {
  translations,
  slug: 'bing-not-indexing',
  category: 'TECHNICAL SEO',
  published: '2026-11-16',
  updated: '2026-11-16',
  relatedService: 'seo',
  title: copy(
    'Bing not indexing your site? Check before resubmitting',
    '¿Bing no indexa tu web? Qué revisar antes de reenviar',
    'Bing sitenizi dizine eklemiyor mu? Yeniden göndermeden önce kontrol edin',
  ),
  seoTitle: copy(
    'Bing Not Indexing? Check Before Resubmitting',
    '¿Bing no indexa tu web? Qué revisar',
    'Bing dizine eklemiyor: Neleri kontrol etmeli?',
  ),
  focusKeyphrase: copy('Bing not indexing', 'Bing no indexa', 'Bing dizine eklemiyor'),
  description: copy(
    'Bing not indexing your site after IndexNow submissions? Compare the index record with a live test, choose the next action and check AI citations separately.',
    '¿Bing no indexa tu web tras los envíos de IndexNow? Compara el registro del índice con la prueba en vivo, decide qué corregir y revisa las citas de IA aparte.',
    'IndexNow bildirimlerine rağmen Bing dizine eklemiyor mu? Dizin kaydını canlı testle karşılaştırın, sonraki adımı seçin ve yapay zekâ atıflarını ayrı izleyin.',
  ),
  takeaway: copy(
    'If Bing is not indexing a page, inspect that exact URL in Bing Webmaster Tools before submitting it again. Compare the Index card with the Live URL test. Repair a failed fetch, investigate an exclusion, or review search performance if the page is already indexed. An IndexNow receipt confirms a notification; it does not confirm indexing or an AI citation.',
    'Si Bing no indexa una página, inspecciona esa URL exacta en Bing Webmaster Tools antes de volver a enviarla. Compara la tarjeta de índice con la prueba de URL en vivo. Corrige un fallo de acceso, investiga una exclusión o revisa el rendimiento en búsquedas si la página ya está indexada. El acuse de IndexNow confirma una notificación; no confirma la indexación ni una cita en una respuesta de IA.',
    'Bing bir sayfayı dizine eklemiyorsa yeniden göndermeden önce tam adresini Bing Webmaster Tools içinde inceleyin. Dizin kartını canlı URL testiyle karşılaştırın. Erişim hatasını giderin, hariç bırakılma nedenini araştırın veya sayfa zaten dizindeyse arama performansına bakın. IndexNow alındısı bir bildirimi doğrular; dizine eklenmeyi ya da yapay zekâ yanıtında kaynak gösterilmeyi doğrulamaz.',
  ),
  sections: [
    {
      id: 'inspect-one-url',
      title: copy(
        'Start a Bing indexing check with one exact URL',
        'Comprueba la indexación en Bing de una URL concreta',
        'Bing dizin kontrolüne tek bir adresle başlayın',
      ),
      paragraphs: [
        copy(
          'Choose a public page that matters to a buyer, such as an implementation guide. Copy the final address from a signed-out visit. Record the host, path and any redirect. Checking a different version of the address can make two reports appear to contradict each other.',
          'Elige una página pública útil para un comprador, como una guía de implementación. Copia la dirección final desde una visita sin sesión iniciada. Anota el dominio, la ruta y cualquier redirección. Consultar otra versión de la dirección puede hacer que dos informes parezcan contradictorios.',
          'Bir kurulum rehberi gibi müşteriye yardımcı olan herkese açık bir sayfa seçin. Oturum açmadan ziyaret edin ve ulaştığınız son adresi kopyalayın. Alan adını, yolu ve varsa yönlendirmeyi kaydedin. Adresin farklı bir sürümünü kontrol etmek, iki rapor arasında çelişki varmış izlenimi yaratabilir.',
        ),
        copy(
          'In the verified property, inspect the address and save the Index card’s status and crawl date. Then run Live URL and inspect its HTTP response and HTML. [Bing’s URL Inspection guide](https://www.bing.com/webmasters/help/URL-Inspection-55a30305) distinguishes the index record from this fresh fetch. The live test reports redirects separately; inspect the destination too. Keep the two results with their timestamps.',
          'Dentro de la propiedad verificada, inspecciona la dirección y guarda el estado y la fecha de rastreo de la tarjeta de índice. Después ejecuta la prueba de URL en vivo y revisa la respuesta HTTP y el HTML. La [guía de inspección de URLs de Bing](https://www.bing.com/webmasters/help/URL-Inspection-55a30305) distingue el registro del índice de esta consulta actual. La prueba muestra las redirecciones por separado; inspecciona también el destino. Conserva ambos resultados con sus fechas y horas.',
          'Doğrulanmış site mülkünde adresi inceleyin; dizin kartındaki durumu ve tarama tarihini saklayın. Ardından canlı URL testini çalıştırıp HTTP yanıtına ve HTML içeriğine bakın. [Bing’in URL inceleme rehberi](https://www.bing.com/webmasters/help/URL-Inspection-55a30305), dizin kaydı ile bu yeni isteği ayrı ele alır. Canlı test yönlendirmeleri ayrıca bildirir; hedef adresi de inceleyin. İki sonucu da zaman bilgisiyle kaydedin.',
        ),
      ],
    },
    {
      id: 'choose-next-action',
      title: copy(
        'Let the finding determine your next action',
        'Elige el siguiente paso según el resultado',
        'Sonraki adımı bulguya göre seçin',
      ),
      paragraphs: [
        copy(
          'A green live test and an absent index record describe different stages. Avoid turning either into a diagnosis of a penalty. Use the evidence to choose a bounded task.',
          'Una prueba en vivo correcta y la ausencia en el índice describen etapas distintas. Ninguna basta para diagnosticar una penalización. Usa los datos para definir una tarea concreta.',
          'Başarılı bir canlı test ile dizin kaydının bulunmaması farklı aşamaları anlatır. Bunlardan birini ceza kanıtı saymayın. Bulgulara dayanarak kapsamı belli bir iş belirleyin.',
        ),
      ],
      bullets: [
        copy(
          'The live fetch fails or returns the wrong content. Give the developer the response, URL and test time. Check the failing route or hosting rule. Our [guide to verifying crawler access](/blog/ai-crawler-policy-training-search) explains why a permissive robots.txt file cannot override a firewall block.',
          'La consulta en vivo falla o devuelve otro contenido. Entrega al equipo técnico la respuesta, la URL y la hora de la prueba. Revisa la ruta o la regla del alojamiento que falla. Nuestra [guía para verificar el acceso de rastreadores](/blog/ai-crawler-policy-training-search) explica por qué un archivo robots.txt permisivo no anula un bloqueo del cortafuegos.',
          'Canlı istek başarısız oluyor veya yanlış içerik döndürüyor. Geliştiriciye yanıtı, adresi ve test saatini verin. Sorunlu yolu veya barındırma kuralını kontrol edin. [Tarayıcı erişimini doğrulama rehberimiz](/blog/ai-crawler-policy-training-search), izin veren bir robots.txt dosyasının güvenlik duvarı engelini neden kaldıramadığını açıklar.',
        ),
        copy(
          'The page loads, but the index record shows an exclusion. Follow any specific explanation. Check for an unintended noindex, a canonical pointing elsewhere, duplicate versions or missing internal links. [Bing’s webmaster guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) cover these controls and content quality. A generic warning is a reason to investigate, not proof of which condition caused it.',
          'La página carga, pero el registro del índice indica una exclusión. Sigue la explicación concreta que aparezca. Busca un noindex involuntario, un canonical hacia otra página, versiones duplicadas o falta de enlaces internos. Las [directrices de Bing para webmasters](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) explican estos controles y la calidad del contenido. Un aviso genérico invita a investigar; no demuestra qué condición causó el problema.',
          'Sayfa açılıyor ancak dizin kaydı hariç bırakıldığını gösteriyor. Varsa belirtilen açıklamayı izleyin. Yanlışlıkla eklenmiş noindex, başka adrese işaret eden canonical, yinelenen sürümler veya eksik iç bağlantılar arayın. [Bing’in site yöneticisi yönergeleri](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) bu ayarları ve içerik kalitesini ele alır. Genel bir uyarı araştırma gerektirir; hangi koşulun soruna yol açtığını kanıtlamaz.',
        ),
        copy(
          'The URL is indexed, but impressions are missing. Save that as a visibility question. Check the date range and filters, then collect representative searches. Another submission count will not explain why a particular query did not show the page.',
          'La URL está indexada, pero no registra impresiones. Trátalo como una cuestión de visibilidad. Comprueba el periodo y los filtros; después recoge búsquedas representativas. Aumentar el número de envíos no explicará por qué una consulta concreta no mostró la página.',
          'Adres dizinde ancak gösterim yok. Bunu görünürlük sorusu olarak kaydedin. Tarih aralığını ve filtreleri kontrol edin, ardından örnek aramaları toplayın. Gönderim sayısını artırmak, belirli bir sorguda sayfanın neden görünmediğini açıklamaz.',
        ),
      ],
    },
    {
      id: 'read-submission-receipt',
      title: copy(
        'Read an IndexNow receipt for what it confirms',
        'Interpreta qué confirma el acuse de IndexNow',
        'IndexNow alındısının neyi doğruladığına bakın',
      ),
      paragraphs: [
        copy(
          '[IndexNow’s protocol documentation](https://www.indexnow.org/documentation) says HTTP 200 means the URL was received. HTTP 202 means key validation is pending. These are responses from the submission endpoint, not the page’s own HTTP response. Keep the submitted URL, time and result together so the technical owner can check the notification separately from page delivery.',
          '[La documentación del protocolo IndexNow](https://www.indexnow.org/documentation) indica que HTTP 200 confirma la recepción de la URL. HTTP 202 significa que la validación de la clave está pendiente. Son respuestas del punto de envío, no de la propia página. Guarda la URL enviada, la hora y el resultado para que el responsable técnico pueda comprobar la notificación por separado de la entrega de la página.',
          '[IndexNow protokol belgesine](https://www.indexnow.org/documentation) göre HTTP 200, adresin alındığını belirtir. HTTP 202 ise anahtar doğrulamasının beklediği anlamına gelir. Bunlar gönderim uç noktasının yanıtlarıdır; sayfanın kendi HTTP yanıtı değildir. Gönderilen adresi, zamanı ve sonucu birlikte saklayın. Böylece teknik sorumlu, bildirimi sayfanın sunumundan ayrı kontrol edebilir.',
        ),
        copy(
          'Notify participating engines when content is added, changed or removed. The [official IndexNow FAQ](https://www.indexnow.org/faq) advises against repeatedly submitting unchanged URLs and makes clear that indexing is not guaranteed. Keep a current sitemap as well. Our [guide to sitemaps and discovery files](/blog/robots-sitemap-llms-explained) explains the inventory that remains useful between changes.',
          'Notifica a los motores participantes cuando añadas, modifiques o retires contenido. Las [preguntas frecuentes oficiales de IndexNow](https://www.indexnow.org/faq) desaconsejan reenviar URLs sin cambios y aclaran que la indexación no está garantizada. Mantén también un sitemap actualizado. Nuestra [guía de sitemaps y archivos de descubrimiento](/blog/robots-sitemap-llms-explained) explica el inventario que sigue siendo útil entre actualizaciones.',
          'İçerik eklendiğinde, değiştiğinde veya kaldırıldığında katılımcı arama motorlarına bildirin. [IndexNow’un resmî sık sorulan soruları](https://www.indexnow.org/faq), değişmeyen adresleri tekrar tekrar göndermemeyi önerir ve dizine eklenmenin garanti olmadığını açıklar. Site haritanızı da güncel tutun. [Site haritaları ve keşif dosyaları rehberimiz](/blog/robots-sitemap-llms-explained), değişiklikler arasında da işe yarayan adres listesini anlatır.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: an installation guide',
          'Ejemplo ilustrativo: una guía de instalación',
          'Temsilî örnek: bir kurulum rehberi',
        ),
        text: copy(
          'A fictional supplier submits a new guide and receives HTTP 200 from IndexNow. Its page also returns 200, but a copied template marks the guide noindex. The developer removes that unintended instruction, checks the published response and notifies the change. The editor records “instruction corrected” and later checks the index record. Neither receipt establishes that the guide appeared in an AI answer.',
          'Un proveedor ficticio envía una guía nueva y recibe HTTP 200 de IndexNow. La página también devuelve 200, pero una plantilla copiada marca la guía con noindex. El desarrollador elimina esa instrucción involuntaria, comprueba la respuesta publicada y notifica el cambio. El editor registra «instrucción corregida» y más adelante consulta el índice. Ninguno de los acuses demuestra que la guía haya aparecido en una respuesta de IA.',
          'Hayalî bir tedarikçi yeni rehberini gönderir ve IndexNow’dan HTTP 200 alır. Sayfa da 200 döndürür; ancak kopyalanmış şablon rehberi noindex olarak işaretler. Geliştirici bu yanlış talimatı kaldırır, yayımlanan yanıtı kontrol eder ve değişikliği bildirir. Editör “talimat düzeltildi” diye kaydeder, daha sonra dizin kaydına bakar. İki başarılı yanıt da rehberin bir yapay zekâ yanıtında yer aldığını göstermez.',
        ),
      },
    },
    {
      id: 'prepare-evidence',
      title: copy(
        'Escalate an unresolved case with evidence',
        'Escala un caso sin resolver con datos concretos',
        'Çözülemeyen durumu kanıtlarıyla desteğe iletin',
      ),
      paragraphs: [
        copy(
          '[A site-owner question dated October 23, 2026](https://learn.microsoft.com/en-ca/answers/questions/6047713/new-site-shows-as-indexed-in-bing-webmaster-tools) describes indexed URLs, no impressions and active IndexNow notifications. The owner suspects the domain’s previous history. That is a hypothesis, not a confirmed cause. A useful support request preserves the conflicting observations without presenting a suspected penalty as fact.',
          '[Una consulta de un propietario del 23 de octubre de 2026](https://learn.microsoft.com/en-ca/answers/questions/6047713/new-site-shows-as-indexed-in-bing-webmaster-tools) describe URLs indexadas, ausencia de impresiones y notificaciones activas de IndexNow. El propietario sospecha del historial anterior del dominio. Es una hipótesis, no una causa confirmada. Una solicitud de soporte útil conserva las observaciones contradictorias sin presentar una posible penalización como un hecho.',
          '[23 Ekim 2026 tarihli bir site sahibi sorusu](https://learn.microsoft.com/en-ca/answers/questions/6047713/new-site-shows-as-indexed-in-bing-webmaster-tools), adreslerin dizinde göründüğünü, gösterim olmadığını ve IndexNow bildirimlerinin çalıştığını anlatıyor. Site sahibi alan adının geçmişinden şüpheleniyor. Bu, doğrulanmış neden değil, bir varsayım. Yararlı bir destek talebi, şüphe edilen cezayı gerçek gibi sunmadan çelişen gözlemleri korur.',
        ),
        copy(
          'Follow [Bing’s webmaster support guidance](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf) if the documented checks leave the case unresolved. Send a small representative sample and retain the case reference. Use this checklist to make the issue reproducible:',
          'Si las comprobaciones documentadas no resuelven el caso, sigue la [guía de soporte de Bing para webmasters](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf). Envía una pequeña muestra representativa y conserva la referencia del caso. Usa esta lista para que el problema se pueda reproducir:',
          'Belgelerdeki kontroller sorunu açıklamıyorsa [Bing’in site yöneticisi destek rehberini](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf) izleyin. Küçük, temsilî bir örnek grubu gönderin ve başvuru numarasını saklayın. Sorunun yeniden incelenebilmesi için şu listeyi kullanın:',
        ),
      ],
      bullets: [
        copy(
          'Exact URLs, expected public content and the last relevant release date.',
          'URLs exactas, contenido público esperado y fecha del último cambio relevante.',
          'Tam adresler, beklenen açık içerik ve son ilgili yayının tarihi.',
        ),
        copy(
          'Index status, crawl date, live response and screenshots with test times.',
          'Estado del índice, fecha de rastreo, respuesta en vivo y capturas con la hora de las pruebas.',
          'Dizin durumu, tarama tarihi, canlı yanıt ve test saatlerini içeren ekran görüntüleri.',
        ),
        copy(
          'Relevant directives, canonical target, internal link and submission receipt.',
          'Directivas pertinentes, destino canonical, enlace interno y acuse de envío.',
          'İlgili talimatlar, canonical hedefi, iç bağlantı ve gönderim alındısı.',
        ),
        copy(
          'Corrections already verified and the question that remains unanswered.',
          'Correcciones ya verificadas y la pregunta que sigue sin respuesta.',
          'Doğrulanmış düzeltmeler ve hâlâ yanıtlanmamış soru.',
        ),
      ],
    },
    {
      id: 'check-ai-separately',
      title: copy(
        'Check AI citations as a separate outcome',
        'Comprueba las citas de IA como un resultado aparte',
        'Yapay zekâ atıflarını ayrı bir sonuç olarak kontrol edin',
      ),
      paragraphs: [
        copy(
          'Bing’s [AI Performance announcement](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) describes citation reporting across supported Microsoft and partner experiences. That is different evidence from an indexing status. If your concern is a particular assistant, save its answer and cited URL directly. A Bing index record cannot establish what that assistant will recommend.',
          'El [anuncio de AI Performance de Bing](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) describe informes de citas en experiencias compatibles de Microsoft y sus socios. Es un dato distinto del estado de indexación. Si te preocupa un asistente concreto, guarda directamente su respuesta y la URL citada. Un registro en el índice de Bing no determina qué recomendará ese asistente.',
          'Bing’in [AI Performance duyurusu](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), desteklenen Microsoft ve iş ortağı deneyimlerindeki kaynak gösterimlerinin raporlanmasını anlatır. Bu, dizin durumundan farklı bir kanıttır. Belirli bir asistanı inceliyorsanız yanıtını ve kaynak adresini doğrudan kaydedin. Bing dizin kaydı, o asistanın ne önereceğini belirleyemez.',
        ),
        copy(
          'Close the technical task when the intended page and controls are correct. Keep indexing, citations and visits as separate observations with dates. Our [AI visibility measurement framework](/blog/measuring-ai-search-visibility) helps report those outcomes without turning a successful repair into a ranking guarantee.',
          'Cierra la tarea técnica cuando la página y sus controles sean correctos. Registra la indexación, las citas y las visitas por separado y con fecha. Nuestro [marco de medición de visibilidad en IA](/blog/measuring-ai-search-visibility) ayuda a informar de esos resultados sin convertir una reparación correcta en una garantía de posicionamiento.',
          'İlgili sayfa ve ayarları doğru olduğunda teknik işi tamamlayın. Dizine eklenmeyi, atıfları ve ziyaretleri tarihleriyle ayrı gözlemler olarak tutun. [Yapay zekâ görünürlüğünü ölçme çerçevemiz](/blog/measuring-ai-search-visibility), başarılı bir onarımı sıralama garantisine dönüştürmeden sonuçları raporlamanıza yardımcı olur.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Questions about Bing indexing and IndexNow',
      'Preguntas sobre indexación en Bing e IndexNow',
      'Bing dizini ve IndexNow hakkında sorular',
    ),
    items: [
      {
        question: copy(
          'Should I resubmit every URL each day until Bing indexes it?',
          '¿Debo reenviar todas las URLs a diario hasta que Bing las indexe?',
          'Bing dizine ekleyene kadar tüm adresleri her gün göndermeli miyim?',
        ),
        answer: copy(
          'No. Use IndexNow for real additions, updates and removals. Repeating unchanged URLs does not supply new content or fix an exclusion. Check the submission result once, then investigate the page’s index and live records. Keep your sitemap current for ongoing discovery.',
          'No. Usa IndexNow para altas, cambios y retiradas reales. Repetir URLs sin cambios no aporta contenido nuevo ni corrige una exclusión. Comprueba el resultado del envío y después investiga los registros del índice y de la prueba en vivo. Mantén actualizado el sitemap para facilitar el descubrimiento continuo.',
          'Hayır. IndexNow’u gerçek ekleme, güncelleme ve kaldırmalar için kullanın. Değişmeyen adresleri tekrarlamak yeni içerik sağlamaz veya hariç bırakılmayı gidermez. Gönderim sonucunu kontrol edin, ardından sayfanın dizin ve canlı test kayıtlarını inceleyin. Keşfin devamı için site haritanızı güncel tutun.',
        ),
      },
      {
        question: copy(
          'Does a successful Live URL test mean the page is indexed?',
          '¿Una prueba de URL en vivo correcta significa que la página está indexada?',
          'Başarılı canlı URL testi sayfanın dizinde olduğu anlamına gelir mi?',
        ),
        answer: copy(
          'No. It describes the fresh fetch and checks shown by that test. Read the Index card separately to see the recorded indexing status. Save both dates: a repaired page today may differ from the version represented by an older crawl record.',
          'No. Describe la consulta actual y las comprobaciones de esa prueba. Lee por separado la tarjeta de índice para conocer el estado registrado. Guarda ambas fechas: una página reparada hoy puede diferir de la versión que refleja un rastreo anterior.',
          'Hayır. Testin yaptığı yeni isteği ve gösterdiği kontrolleri anlatır. Kayıtlı dizin durumunu görmek için dizin kartına ayrıca bakın. İki tarihi de saklayın; bugün düzeltilen sayfa, eski tarama kaydındaki sürümden farklı olabilir.',
        ),
      },
      {
        question: copy(
          'What should I check when IndexNow returns 403?',
          '¿Qué debo revisar si IndexNow devuelve 403?',
          'IndexNow 403 döndürdüğünde neyi kontrol etmeliyim?',
        ),
        answer: copy(
          'The protocol identifies this as a key-validation problem. Ask the integration owner to check that the hosted key file is reachable and contains the matching key. This is a submission failure, not evidence that Bing rejected the quality of your article.',
          'El protocolo lo identifica como un problema de validación de la clave. Pide al responsable de la integración que compruebe si el archivo de clave es accesible y contiene la clave correspondiente. Es un fallo de envío, no una prueba de que Bing haya rechazado la calidad del artículo.',
          'Protokol bunu anahtar doğrulama sorunu olarak tanımlar. Entegrasyon sorumlusundan, sunucudaki anahtar dosyasına erişilebildiğini ve eşleşen anahtarı içerdiğini kontrol etmesini isteyin. Bu bir gönderim hatasıdır; Bing’in makalenin kalitesini reddettiğini göstermez.',
        ),
      },
      {
        question: copy(
          'Google shows the page. Does that rule out a Bing problem?',
          'Google muestra la página. ¿Eso descarta un problema en Bing?',
          'Google sayfayı gösteriyorsa Bing tarafında sorun yok diyebilir miyim?',
        ),
        answer: copy(
          'No. Check Bing’s own evidence for the same address. Different engines make their own indexing decisions, and crawler-specific rules can differ. Google visibility is useful context for the investigation, but it cannot replace a Bing inspection or identify the cause of a missing page.',
          'No. Consulta los datos de Bing para la misma dirección. Cada motor toma sus decisiones de indexación y las reglas específicas para cada rastreador pueden variar. La visibilidad en Google aporta contexto, pero no sustituye una inspección en Bing ni identifica la causa de una página ausente.',
          'Hayır. Aynı adres için Bing’in kendi verilerine bakın. Arama motorları dizine ekleme kararlarını ayrı verir; tarayıcıya özel kurallar da farklı olabilir. Google görünürlüğü araştırmaya bağlam sağlar ancak Bing incelemesinin yerini tutmaz ve eksik sayfanın nedenini belirlemez.',
        ),
      },
      {
        question: copy(
          'Should I rewrite the article if the tool gives no specific cause?',
          '¿Debo reescribir el artículo si la herramienta no indica una causa concreta?',
          'Araç belirli bir neden göstermiyorsa makaleyi yeniden yazmalı mıyım?',
        ),
        answer: copy(
          'First identify a real problem: missing information, an unintended directive or duplicated content. Fix what you can demonstrate. If the page is useful and the checks remain inconclusive, preserve the evidence and request support. A generic status does not justify inventing a cause or changing the URL repeatedly.',
          'Primero identifica un problema real: información ausente, una directiva involuntaria o contenido duplicado. Corrige lo que puedas demostrar. Si la página es útil y las comprobaciones no aclaran el caso, conserva los datos y solicita soporte. Un estado genérico no justifica inventar una causa ni cambiar la URL repetidamente.',
          'Önce gerçek bir sorun belirleyin: eksik bilgi, yanlış talimat veya yinelenen içerik. Gösterebildiğiniz sorunu düzeltin. Sayfa yararlıysa ve kontroller sonuçsuz kalıyorsa kanıtları koruyup destek isteyin. Genel bir durum mesajı, neden uydurmayı veya adresi sürekli değiştirmeyi haklı çıkarmaz.',
        ),
      },
    ],
  },
};

copy(
  `${bingNotIndexing.seoTitle} | Citevia`,
  `${translations.es[bingNotIndexing.seoTitle]} | Citevia`,
  `${translations.tr[bingNotIndexing.seoTitle]} | Citevia`,
);

export const bingIndexingTranslations = translations;
export const bingIndexingFragments = fragments;
