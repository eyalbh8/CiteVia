import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();
copy(
  'Hands using a keyboard in blue light',
  'Manos usando un teclado bajo una luz azul',
  'Mavi ışıkta klavye kullanan eller',
);

export const javascriptSeoAiSearch = {
  translations,
  slug: 'javascript-seo-ai-search',
  title: copy(
    'JavaScript SEO for AI search: check what arrives',
    'SEO con JavaScript para búsquedas con IA: comprueba qué llega',
    'Yapay zekâ araması için JavaScript SEO: ulaşan içeriği kontrol edin',
  ),
  seoTitle: copy(
    'JavaScript SEO for AI Search: What Arrives?',
    'SEO con JavaScript: contenido que llega a la IA',
    'JavaScript SEO: Yapay Zekâ Hangi İçeriği Alır?',
  ),
  focusKeyphrase: copy('JavaScript SEO', 'SEO con JavaScript', 'JavaScript SEO çalışması'),
  description: copy(
    'Check JavaScript SEO for AI search. Compare delivered HTML with the browser page, find interaction-dependent content and give developers a clear repair brief.',
    'Revisa el SEO con JavaScript para búsquedas con IA. Compara el HTML y la página, detecta contenido que exige interacción y define una reparación concreta.',
    'Yapay zekâ aramaları için JavaScript SEO çalışması yapın. HTML ile tarayıcıyı karşılaştırın, etkileşime bağlı içeriği bulun ve düzeltme görevini belirleyin.',
  ),
  category: 'TECHNICAL SEO',
  published: '2026-11-02',
  updated: '2026-11-02',
  relatedService: 'seo',
  takeaway: copy(
    'JavaScript SEO for AI search starts with a delivery check. Compare the HTML returned by the server with the page people see after scripts run. Put essential public answers and navigation in reliable, readable HTML where practical. Keep useful interactions, and test specific services separately: a working browser page does not establish what every assistant retrieved.',
    'El SEO con JavaScript para búsquedas con IA empieza comprobando la entrega. Compara el HTML del servidor con la página que ven las personas después de ejecutar los scripts. Siempre que sea viable, entrega las respuestas públicas esenciales y la navegación como HTML legible y fiable. Conserva las interacciones útiles y prueba cada servicio por separado: una página funcional no demuestra qué recuperó cada asistente.',
    'Yapay zekâ aramaları için JavaScript SEO çalışması, sunulan içeriği kontrol etmekle başlar. Sunucunun döndürdüğü HTML ile betikler çalıştıktan sonra görünen sayfayı karşılaştırın. Mümkün olduğunda temel herkese açık yanıtları ve gezinme bağlantılarını güvenilir, okunabilir HTML olarak sunun. Yararlı etkileşimleri koruyun ve hizmetleri ayrı test edin: tarayıcıda çalışan bir sayfa, her asistanın hangi içeriği aldığını göstermez.',
  ),
  sections: [
    {
      id: 'delivery-question',
      title: copy(
        'Start JavaScript SEO with one missing answer',
        'Empieza el SEO con JavaScript por una respuesta ausente',
        'JavaScript SEO çalışmasına eksik bir yanıtla başlayın',
      ),
      paragraphs: [
        copy(
          'An [October 22, 2026 rendering discussion](https://www.reddit.com/r/TechSEO/comments/1xck8xm/csr_sites_are_invisible_to_ai_i_tested_it/) asks whether assistants can read facts delivered through scripts. A [September 1 discussion about crawler evidence](https://www.reddit.com/r/SEO/comments/1w496ve/has_anyone_retested_whether_ai_crawlers_render/) questions repeated claims about JavaScript support and timeouts. These discussions show uncertainty; their small tests and comments do not establish universal crawler behavior.',
          'Un [debate sobre renderizado del 22 de octubre de 2026](https://www.reddit.com/r/TechSEO/comments/1xck8xm/csr_sites_are_invisible_to_ai_i_tested_it/) pregunta si los asistentes pueden leer datos entregados mediante scripts. Otro [debate sobre pruebas de rastreo del 1 de septiembre](https://www.reddit.com/r/SEO/comments/1w496ve/has_anyone_retested_whether_ai_crawlers_render/) cuestiona afirmaciones repetidas sobre JavaScript y tiempos de espera. Muestran incertidumbre; sus pequeñas pruebas y comentarios no establecen un comportamiento universal.',
          'Bir [22 Ekim 2026 tarihli sayfa oluşturma tartışması](https://www.reddit.com/r/TechSEO/comments/1xck8xm/csr_sites_are_invisible_to_ai_i_tested_it/), asistanların betiklerle sunulan bilgileri okuyup okuyamadığını soruyor. Diğer bir [1 Eylül tarihli tarayıcı kanıtları tartışması](https://www.reddit.com/r/SEO/comments/1w496ve/has_anyone_retested_whether_ai_crawlers_render/), JavaScript desteği ve zaman aşımı iddialarını sorguluyor. Bu tartışmalar belirsizliği gösterir; küçük testler ve yorumlar evrensel tarayıcı davranışını kanıtlamaz.',
        ),
        copy(
          'Choose one important public page and three facts a buyer needs from it. For a software integration guide, those might be supported systems, setup requirements and the documentation link. Save the URL, language, date and signed-out browser state. Start with the missing information, not a decision to replace the entire website.',
          'Elige una página pública importante y tres datos que necesite un comprador. En una guía de integración, podrían ser los sistemas compatibles, los requisitos de instalación y el enlace a la documentación. Guarda la URL, el idioma, la fecha y el estado del navegador sin sesión iniciada. Empieza por la información ausente, sin decidir de antemano sustituir todo el sitio.',
          'Önemli bir herkese açık sayfa ve alıcının ihtiyaç duyduğu üç bilgiyi seçin. Bir entegrasyon rehberinde bunlar desteklenen sistemler, kurulum gereksinimleri ve belge bağlantısı olabilir. Adresi, dili, tarihi ve oturum açılmamış tarayıcı durumunu kaydedin. Tüm siteyi değiştirme kararıyla değil, eksik bilgiyle başlayın.',
        ),
      ],
    },
    {
      id: 'compare-delivery',
      title: copy(
        'Compare the response with the rendered page',
        'Compara la respuesta con la página renderizada',
        'Sunucu yanıtını oluşturulan sayfayla karşılaştırın',
      ),
      paragraphs: [
        copy(
          'Ask your developer to save the document response from the browser’s Network panel, then inspect the page’s live document tree in Elements. The first shows delivered HTML; the second includes browser changes. Reload without a saved login, and record any redirect or challenge. A screenshot alone cannot show where the words came from.',
          'Pide al desarrollador que guarde la respuesta del documento desde el panel Red del navegador y revise después el árbol del documento en Elementos. La primera muestra el HTML entregado; el segundo incluye cambios del navegador. Recarga sin sesión guardada y registra redirecciones o verificaciones. Una captura no revela de dónde proceden las palabras.',
          'Geliştiriciden tarayıcının Ağ panelindeki belge yanıtını kaydetmesini, ardından Öğeler panelinde sayfanın güncel belge ağacını incelemesini isteyin. İlki sunulan HTML’yi, ikincisi tarayıcı değişikliklerini de gösterir. Kayıtlı oturum olmadan yeniden yükleyin; yönlendirmeleri veya doğrulama sayfalarını kaydedin. Ekran görüntüsü tek başına sözcüklerin kaynağını göstermez.',
        ),
        copy(
          'Locate each selected fact in actual content elements. A matching phrase inside a script, a JSON payload or a template is not enough to establish that it is readable page text. Check the heading, paragraph or link that presents it. If the server streams the response, inspect the completed response and distinguish real content from loading placeholders.',
          'Localiza cada dato en elementos de contenido reales. Encontrar una frase dentro de un script, un bloque JSON o una plantilla no demuestra que sea texto legible de la página. Comprueba el encabezado, párrafo o enlace que la presenta. Si el servidor envía la respuesta por partes, inspecciona la respuesta completa y distingue el contenido de los indicadores de carga.',
          'Seçtiğiniz her bilgiyi gerçek içerik öğelerinde bulun. Bir ifadenin betik, JSON verisi veya şablon içinde bulunması, okunabilir sayfa metni olduğunu göstermez. Bilgiyi sunan başlığı, paragrafı veya bağlantıyı kontrol edin. Sunucu yanıtı parça parça gönderiyorsa tamamlanmış yanıtı inceleyin; gerçek içeriği yükleme yer tutucularından ayırın.',
        ),
        copy(
          '[Google’s JavaScript processing guide](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) separates crawling, rendering and indexing. Google can execute JavaScript, while its guidance still recommends considering server-side or pre-rendering because not all bots can. That supports checking delivery; it does not justify a claim that every AI service always ignores scripts.',
          '[La guía de procesamiento de JavaScript de Google](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) distingue rastreo, renderizado e indexación. Google puede ejecutar JavaScript, pero recomienda considerar el renderizado en servidor o previo porque no todos los bots pueden hacerlo. Esto justifica revisar la entrega, no afirmar que todos los servicios de IA ignoran siempre los scripts.',
          '[Google’ın JavaScript işleme rehberi](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), tarama, sayfa oluşturma ve dizine ekleme aşamalarını ayırır. Google JavaScript çalıştırabilir; ancak tüm botlar bunu yapamadığından sunucuda veya önceden sayfa oluşturmayı değerlendirmeyi önerir. Bu, içerik teslimini kontrol etmeyi destekler; her yapay zekâ hizmetinin betikleri daima yok saydığı iddiasını desteklemez.',
        ),
      ],
      bullets: [
        copy(
          'Present in content HTML: record the element and verify the same fact in the browser.',
          'Presente en el HTML de contenido: registra el elemento y verifica el mismo dato en el navegador.',
          'İçerik HTML’sinde mevcut: öğeyi kaydedin ve tarayıcıda aynı bilgiyi doğrulayın.',
        ),
        copy(
          'Present only after scripts run: identify the component and data request that supply it.',
          'Presente solo tras ejecutar scripts: identifica el componente y la solicitud de datos que lo aportan.',
          'Yalnızca betiklerden sonra mevcut: bilgiyi sağlayan bileşeni ve veri isteğini belirleyin.',
        ),
        copy(
          'Missing from both: check the content record, URL and access state before diagnosing rendering.',
          'Ausente en ambos: revisa el contenido, la URL y el acceso antes de diagnosticar el renderizado.',
          'İkisinde de eksik: sayfa oluşturmayı incelemeden önce içerik kaydını, adresi ve erişim durumunu kontrol edin.',
        ),
      ],
    },
    {
      id: 'interactions-and-links',
      title: copy(
        'Check content behind interactions and navigation',
        'Revisa el contenido que depende de interacciones y enlaces',
        'Etkileşimlere ve gezinmeye bağlı içeriği kontrol edin',
      ),
      paragraphs: [
        copy(
          'Open tabs, expand answers and try any “load more” control. Record whether each action merely reveals existing content or fetches new text. [Google’s lazy-loading guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) says Search does not interact with pages. It recommends persistent, linked page URLs for chunks in an infinite-scroll collection. Do not make an essential answer depend solely on a click that fetches it.',
          'Abre pestañas, despliega respuestas y prueba cualquier control de «cargar más». Registra si cada acción revela contenido existente o solicita texto nuevo. [La guía de carga diferida de Google](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) indica que Search no interactúa con las páginas. Recomienda URLs persistentes y enlazadas para los bloques de una colección con desplazamiento infinito. Evita que una respuesta esencial dependa solo de un clic para recuperarla.',
          'Sekmeleri açın, yanıtları genişletin ve varsa “daha fazla yükle” denetimini deneyin. İşlemin mevcut içeriği mi gösterdiğini, yoksa yeni metin mi aldığını kaydedin. [Google’ın gecikmeli yükleme rehberi](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading), Arama’nın sayfalarla etkileşime girmediğini belirtir. Sonsuz kaydırma koleksiyonundaki bölümler için kalıcı, bağlantılarla erişilebilen adresler önerir. Temel bir yanıtın alınmasını yalnızca tıklamaya bağlamayın.',
        ),
        copy(
          'Inspect the link to the next useful page as well. [Google’s crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) calls for an anchor element with an href that resolves to a real address. A clickable card can look correct while relying only on a script event. Test its destination directly, including a refresh, rather than judging the animation.',
          'Inspecciona también el enlace a la siguiente página útil. [La guía de enlaces rastreables de Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) pide un elemento de enlace con un href que apunte a una dirección real. Una tarjeta puede parecer correcta y depender solo de un evento de script. Prueba directamente su destino, incluida una recarga, en lugar de evaluar la animación.',
          'Sonraki yararlı sayfaya giden bağlantıyı da inceleyin. [Google’ın taranabilir bağlantı rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), gerçek bir adrese yönelen href öznitelikli bağlantı öğesi ister. Tıklanabilir bir kart doğru görünüp yalnızca bir betik olayına dayanabilir. Animasyona bakmak yerine hedefi doğrudan açın ve yeniden yükleyin.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: an integration directory',
          'Ejemplo ilustrativo: un directorio de integraciones',
          'Temsili örnek: bir entegrasyon dizini',
        ),
        text: copy(
          'A fictional vendor’s page shows supported integrations only after someone opens a filter. The server response contains a loading message and the names inside a script. The team publishes the core compatibility explanation as readable HTML and adds ordinary links to maintained detail pages. The filter remains for visitors. This is a proposed repair, not a measured Citevia result.',
          'Una página de un proveedor ficticio muestra las integraciones compatibles solo al abrir un filtro. La respuesta del servidor contiene un mensaje de carga y los nombres dentro de un script. El equipo publica la explicación básica de compatibilidad como HTML legible y añade enlaces normales a páginas de detalle mantenidas. Conserva el filtro para los visitantes. Es una reparación propuesta, no un resultado medido de Citevia.',
          'Kurgusal bir sağlayıcının sayfası, desteklenen entegrasyonları ancak filtre açılınca gösterir. Sunucu yanıtında bir yükleme mesajı ve betik içinde adlar vardır. Ekip, temel uyumluluk açıklamasını okunabilir HTML olarak yayımlar ve güncel ayrıntı sayfalarına normal bağlantılar ekler. Filtre ziyaretçiler için kalır. Bu önerilen bir düzeltmedir; ölçülmüş bir Citevia sonucu değildir.',
        ),
      },
    },
    {
      id: 'provider-evidence',
      title: copy(
        'Keep Google tests and assistant observations separate',
        'Separa las pruebas de Google y las observaciones de asistentes',
        'Google testlerini ve asistan gözlemlerini ayrı tutun',
      ),
      paragraphs: [
        copy(
          'For your own site, use [Search Console’s URL Inspection documentation](https://support.google.com/webmasters/answer/9012289?hl=en) to compare indexed information with a live test and inspect the tested page’s HTML. Save which mode you used. A successful live test does not guarantee indexing, and Google’s rendering result does not establish another provider’s behavior.',
          'En tu sitio, utiliza [la documentación de Inspección de URLs de Search Console](https://support.google.com/webmasters/answer/9012289?hl=en) para comparar la información indexada con una prueba en vivo y revisar el HTML probado. Guarda el modo utilizado. Una prueba en vivo correcta no garantiza la indexación, y el resultado de Google no establece el comportamiento de otro proveedor.',
          'Kendi sitenizde, dizine eklenmiş bilgileri canlı testle karşılaştırmak ve test edilen HTML’yi incelemek için [Search Console URL Denetimi belgelerini](https://support.google.com/webmasters/answer/9012289?hl=en) kullanın. Hangi modu kullandığınızı kaydedin. Başarılı canlı test dizine eklenmeyi garanti etmez; Google’ın sonucu başka bir sağlayıcının davranışını göstermez.',
        ),
        copy(
          'If you ask an assistant to read a supplied URL, label the result as that specific reading test. It does not prove discovery in an unprompted search. When requests are blocked, our [crawler-access policy guide](/blog/ai-crawler-policy-training-search) covers verification. When studying answers, our [documented AI audit workflow](/blog/ai-visibility-audit-playbook) helps preserve the question, conditions and cited sources.',
          'Si pides a un asistente que lea una URL proporcionada, etiqueta el resultado como esa prueba concreta de lectura. No demuestra que descubra la página en una búsqueda sin darle el enlace. Ante solicitudes bloqueadas, nuestra [guía de políticas de acceso para rastreadores](/blog/ai-crawler-policy-training-search) explica la verificación. Para estudiar respuestas, nuestro [proceso documentado de auditoría de IA](/blog/ai-visibility-audit-playbook) ayuda a conservar la pregunta, las condiciones y las fuentes citadas.',
          'Bir asistandan verdiğiniz adresi okumasını isterseniz sonucu o belirli okuma testi olarak etiketleyin. Bu, adresi vermediğiniz bir aramada sayfanın keşfedildiğini kanıtlamaz. Engellenen isteklerde [tarayıcı erişim politikası rehberimiz](/blog/ai-crawler-policy-training-search) doğrulamayı açıklar. Yanıtları incelerken [belgelenmiş yapay zekâ denetim sürecimiz](/blog/ai-visibility-audit-playbook) soruyu, koşulları ve gösterilen kaynakları korumanıza yardımcı olur.',
        ),
      ],
    },
    {
      id: 'repair-brief',
      title: copy(
        'Give developers a bounded repair brief',
        'Entrega al equipo técnico una tarea acotada',
        'Geliştiricilere sınırları belli bir düzeltme görevi verin',
      ),
      paragraphs: [
        copy(
          'Prefer a focused change to the affected template. [Google’s dynamic-rendering guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering) treats bot-specific rendering as a workaround with added complexity, and recommends server rendering, static rendering or hydration instead. Keep the public facts consistent for people and crawlers. Ask the technical owner to choose an implementation the team can maintain.',
          'Prioriza un cambio concreto en la plantilla afectada. [La guía de renderizado dinámico de Google](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering) considera el renderizado específico para bots una solución provisional con complejidad añadida; recomienda renderizado en servidor, estático o hidratación. Mantén los mismos datos públicos para personas y rastreadores. Pide al responsable técnico una implementación que el equipo pueda mantener.',
          'Etkilenen şablonda odaklı bir değişikliği tercih edin. [Google’ın dinamik sayfa oluşturma rehberi](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering), botlara özel sayfa oluşturmayı ek karmaşıklık getiren geçici bir çözüm olarak ele alır; sunucuda veya statik oluşturmayı ya da hydration yöntemini önerir. Herkese açık bilgileri insanlar ve tarayıcılar için tutarlı tutun. Teknik sorumludan ekibin sürdürebileceği bir uygulama seçmesini isteyin.',
        ),
        copy(
          '[Google’s AI-feature requirements](https://developers.google.com/search/docs/appearance/ai-features) still require supporting pages to be indexed and eligible for a snippet. Better delivery alone cannot guarantee a citation. Citevia’s [SEO implementation review](/services/seo) can help turn the evidence into tasks. Close the repair when the agreed content checks pass, then record later search and assistant observations separately.',
          '[Los requisitos de las funciones de IA de Google](https://developers.google.com/search/docs/appearance/ai-features) siguen exigiendo páginas indexadas y aptas para mostrar un fragmento. Mejorar la entrega no garantiza una cita. La [revisión de implementación SEO de Citevia](/services/seo) puede convertir las pruebas en tareas. Da por terminada la reparación cuando supere las comprobaciones acordadas y registra por separado las observaciones posteriores de búsqueda y asistentes.',
          '[Google’ın yapay zekâ özelliklerinin gereksinimleri](https://developers.google.com/search/docs/appearance/ai-features), kaynak sayfaların dizine eklenmiş ve arama özeti göstermeye uygun olmasını gerektirir. Daha iyi içerik teslimi tek başına alıntı garantilemez. [Citevia SEO uygulama incelemesi](/services/seo), kanıtları görevlere dönüştürmeye yardımcı olabilir. Kararlaştırılan içerik kontrolleri geçince düzeltmeyi tamamlayın; sonraki arama ve asistan gözlemlerini ayrı kaydedin.',
        ),
      ],
      bullets: [
        copy(
          'Evidence: URL, check time, expected facts, response sample and browser comparison.',
          'Pruebas: URL, hora, datos esperados, muestra de respuesta y comparación del navegador.',
          'Kanıt: adres, kontrol zamanı, beklenen bilgiler, yanıt örneği ve tarayıcı karşılaştırması.',
        ),
        copy(
          'Change: name the missing content, affected template and responsible developer.',
          'Cambio: identifica el contenido ausente, la plantilla afectada y el desarrollador responsable.',
          'Değişiklik: eksik içeriği, etkilenen şablonu ve sorumlu geliştiriciyi belirleyin.',
        ),
        copy(
          'Acceptance: verify complete answers, usable links and consistent facts after a direct reload.',
          'Aceptación: verifica respuestas completas, enlaces útiles y datos coherentes tras una recarga directa.',
          'Kabul: doğrudan yeniden yüklemeden sonra tam yanıtları, kullanılabilir bağlantıları ve tutarlı bilgileri doğrulayın.',
        ),
        copy(
          'Regression: retest another page using the template and the next ordinary content update.',
          'Regresión: prueba otra página con la misma plantilla y la siguiente actualización habitual de contenido.',
          'Gerileme kontrolü: aynı şablonu kullanan başka bir sayfayı ve sonraki olağan içerik güncellemesini yeniden test edin.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'JavaScript SEO: practical questions',
      'SEO con JavaScript: preguntas prácticas',
      'JavaScript SEO: uygulamaya yönelik sorular',
    ),
    items: [
      {
        question: copy(
          'Must I rebuild a JavaScript site to appear in AI search?',
          '¿Debo reconstruir un sitio con JavaScript para aparecer en búsquedas con IA?',
          'Yapay zekâ aramalarında görünmek için JavaScript sitemi yeniden kurmalı mıyım?',
        ),
        answer: copy(
          'Not automatically. First check whether essential public content is missing from the delivered HTML or depends on an interaction. A change to one shared template may resolve the issue while preserving the site’s framework and useful controls. Confirm the actual output before commissioning a wider rebuild.',
          'No necesariamente. Primero comprueba si falta contenido público esencial en el HTML entregado o si depende de una interacción. Cambiar una plantilla compartida puede resolverlo conservando el framework y los controles útiles. Confirma el resultado real antes de encargar una reconstrucción amplia.',
          'Otomatik olarak gerekmez. Önce temel herkese açık içeriğin sunulan HTML’de eksik olup olmadığını veya etkileşime bağlılığını kontrol edin. Ortak bir şablondaki değişiklik, kullanılan çerçeveyi ve yararlı denetimleri koruyarak sorunu çözebilir. Daha kapsamlı yeniden yapım istemeden önce gerçek çıktıyı doğrulayın.',
        ),
      },
      {
        question: copy(
          'Is finding the answer somewhere in page source enough?',
          '¿Basta con encontrar la respuesta en el código fuente?',
          'Yanıtı sayfa kaynağının herhangi bir yerinde bulmak yeterli mi?',
        ),
        answer: copy(
          'No. The match may sit only inside a script or serialized data rather than a paragraph readers can use. Identify the content element that presents the answer, then compare it with the rendered page. A text search is a starting point, not a complete rendering test.',
          'No. La coincidencia puede estar solo dentro de un script o de datos serializados, en vez de un párrafo utilizable. Identifica el elemento que presenta la respuesta y compáralo con la página renderizada. Buscar texto es un punto de partida, no una prueba completa de renderizado.',
          'Hayır. Eşleşme, okuyucunun kullanabileceği bir paragraf yerine yalnızca betik veya serileştirilmiş veri içinde olabilir. Yanıtı sunan içerik öğesini belirleyin ve oluşturulmuş sayfayla karşılaştırın. Metin araması başlangıçtır; tam bir sayfa oluşturma testi değildir.',
        ),
      },
      {
        question: copy(
          'Can I keep tabs and collapsed FAQs?',
          '¿Puedo conservar pestañas y preguntas frecuentes plegadas?',
          'Sekmeleri ve daraltılmış sık sorulan soruları koruyabilir miyim?',
        ),
        answer: copy(
          'Yes. Separate revealing existing text from fetching it only after a click. Keep important answers available in the document and make the controls usable by keyboard. Test the complete answer after opening it. A collapsed layout alone does not establish that the content is missing.',
          'Sí. Distingue entre mostrar texto existente y recuperarlo solo tras un clic. Mantén las respuestas importantes en el documento y permite usar los controles con teclado. Comprueba la respuesta completa al abrirla. Una presentación plegada no demuestra por sí sola que falte contenido.',
          'Evet. Mevcut metni göstermek ile metni yalnızca tıklamadan sonra almak farklıdır. Önemli yanıtları belgede bulundurun ve denetimleri klavyeyle kullanılabilir yapın. Açıldığında tam yanıtı test edin. Daraltılmış düzen tek başına içeriğin eksik olduğunu göstermez.',
        ),
      },
      {
        question: copy(
          'Does a successful Google live test confirm ChatGPT access?',
          '¿Una prueba en vivo de Google correcta confirma el acceso de ChatGPT?',
          'Başarılı bir Google canlı testi ChatGPT erişimini doğrular mı?',
        ),
        answer: copy(
          'No. It describes the Google test and its documented scope. Record another service’s access or reading test separately, with the date and conditions. Supplying a URL to an assistant also differs from the assistant discovering it during search. Neither result promises future citations.',
          'No. Describe la prueba de Google y su alcance documentado. Registra por separado las pruebas de acceso o lectura de otro servicio, con fecha y condiciones. Dar una URL a un asistente también difiere de que la descubra al buscar. Ningún resultado promete citas futuras.',
          'Hayır. Google testini ve belgelenmiş kapsamını tanımlar. Başka bir hizmetin erişim veya okuma testini tarih ve koşullarıyla ayrı kaydedin. Asistana adres vermek de asistanın aramada adresi keşfetmesinden farklıdır. İki sonuç da gelecekteki alıntıları garanti etmez.',
        ),
      },
      {
        question: copy(
          'Should bots receive a separate version with extra answers?',
          '¿Deben recibir los bots otra versión con respuestas adicionales?',
          'Botlara ek yanıtlar içeren ayrı bir sürüm sunulmalı mı?',
        ),
        answer: copy(
          'Keep the substantive public information consistent for visitors and crawlers. Google describes dynamic rendering as a workaround, not its recommended long-term solution. A bot-only copy adds another version to maintain and can drift. Repair the shared content delivery before creating a separate publishing process.',
          'Mantén la información pública sustancial coherente para visitantes y rastreadores. Google describe el renderizado dinámico como una solución provisional, no como su recomendación a largo plazo. Una copia exclusiva para bots añade otra versión que mantener y puede divergir. Repara la entrega compartida antes de crear otro proceso editorial.',
          'Temel herkese açık bilgileri ziyaretçiler ve tarayıcılar için tutarlı tutun. Google dinamik sayfa oluşturmayı önerilen uzun vadeli çözüm değil, geçici çözüm olarak tanımlar. Yalnızca botlara yönelik kopya bakım gerektiren başka bir sürüm yaratır ve zamanla farklılaşabilir. Ayrı bir yayın süreci oluşturmadan önce ortak içerik teslimini düzeltin.',
        ),
      },
    ],
  },
};
copy(
  `${javascriptSeoAiSearch.seoTitle} | Citevia`,
  `${translations.es[javascriptSeoAiSearch.seoTitle]} | Citevia`,
  `${translations.tr[javascriptSeoAiSearch.seoTitle]} | Citevia`,
);
export const javascriptSeoTranslations = translations;
export const javascriptSeoFragments = fragments;
