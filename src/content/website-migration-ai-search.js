import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const websiteMigration = {
  slug: 'website-migration-ai-search',
  category: 'TECHNICAL SEO',
  published: '2026-11-25',
  updated: '2026-11-25',
  relatedService: 'seo',
  title: copy(
    'Website migration for AI search: should you rebuild?',
    'Migrar una web para la búsqueda con IA: ¿conviene?',
    'Yapay zekâ araması için site taşıma: gerekli mi?',
  ),
  seoTitle: copy(
    'Website Migration for AI Search: A Launch Plan',
    'Migración web para búsquedas con IA',
    'Yapay Zekâ Araması İçin Site Taşıma',
  ),
  focusKeyphrase: 'website migration for AI search',
  description: copy(
    'Considering a website migration for AI search? Define the reason, preserve useful URLs and content, and check launch readiness before switching platforms.',
    '¿Planeas migrar tu web para la búsqueda con IA? Define el motivo, conserva las URL y el contenido útiles y comprueba todo antes de cambiar de plataforma.',
    'Yapay zekâ araması için sitenizi taşımayı mı düşünüyorsunuz? Amacı belirleyin, yararlı URL ve içeriği koruyun, platform değişmeden yayına hazırlığı sınayın.',
  ),
  takeaway: copy(
    'A website migration for AI search needs a concrete reason beyond another site’s higher AI traffic. Confirm a publishing or delivery problem, compare a focused repair with a platform move, and define what must survive the change. Launch when the agreed page and visitor checks pass. A new platform cannot guarantee rankings or AI citations.',
    'Migrar una web para la búsqueda con IA exige un motivo concreto, más allá de que otra web reciba más tráfico de IA. Confirma un problema de publicación o entrega del contenido, compara una reparación puntual con el cambio de plataforma y define qué debe conservarse. Lanza la nueva versión cuando supere las comprobaciones acordadas. Ninguna plataforma garantiza posiciones ni citas en IA.',
    'Yapay zekâ araması için site taşıma kararı, başka bir sitenin daha fazla yapay zekâ trafiği almasına dayanmamalıdır. Önce yayınlama veya içerik sunumuyla ilgili somut bir sorunu doğrulayın. Hedefli bir düzeltmeyle platform değişikliğini karşılaştırın ve nelerin korunacağını belirleyin. Kararlaştırılan sayfa ve ziyaretçi kontrolleri geçildiğinde yayına alın. Yeni bir platform sıralama veya yapay zekâ atfı garantisi vermez.',
  ),
  sections: [
    {
      id: 'migration-reason',
      title: copy(
        'Give the website migration a testable purpose',
        'Define un objetivo comprobable para la migración web',
        'Site taşıma için sınanabilir bir amaç belirleyin',
      ),
      paragraphs: [
        copy(
          'A site owner in the [November 23, 2026 discussion about moving an established website](https://www.reddit.com/r/Agentic_SEO/comments/1y3a7tm/migrating_from_wordpress_to_nextjshtml_site/) asks whether easier editing and higher ChatGPT traffic on one site justify moving two others. The editing experience is a useful requirement. The traffic comparison does not isolate the platform: the sites also have different content and audiences.',
          'Un propietario en el [debate del 23 de noviembre de 2026 sobre migrar una web consolidada](https://www.reddit.com/r/Agentic_SEO/comments/1y3a7tm/migrating_from_wordpress_to_nextjshtml_site/) pregunta si la facilidad de edición y el mayor tráfico de ChatGPT en una web justifican migrar otras dos. La experiencia de edición es un requisito útil. La comparación de tráfico no aísla la plataforma: las webs también tienen contenidos y públicos distintos.',
          'Bir site sahibi, [yerleşik bir web sitesini taşıma hakkındaki 23 Kasım 2026 tarihli tartışmada](https://www.reddit.com/r/Agentic_SEO/comments/1y3a7tm/migrating_from_wordpress_to_nextjshtml_site/) bir sitesinde daha kolay düzenleme yapabilmesinin ve daha fazla ChatGPT trafiği almasının diğer iki siteyi taşımayı haklı çıkarıp çıkarmadığını soruyor. Düzenleme kolaylığı anlamlı bir gereksinimdir. Ancak sitelerin içerikleri ve kitleleri de farklıdır; trafik karşılaştırması platformun etkisini tek başına göstermez.',
        ),
        copy(
          'Write a requirement someone can demonstrate, such as “an editor can update the service conditions and publish the complete page without developer help.” If the concern is missing public text, use our [HTML and browser delivery checks](/blog/javascript-seo-ai-search) first. Ask for a repair estimate and a migration estimate against the same requirement, including maintenance and staff training.',
          'Redacta un requisito que pueda demostrarse, como «un editor puede actualizar las condiciones del servicio y publicar la página completa sin ayuda técnica». Si preocupa la ausencia de texto público, aplica primero nuestras [comprobaciones del HTML y del contenido en el navegador](/blog/javascript-seo-ai-search). Pide una estimación de reparación y otra de migración para el mismo requisito, incluidos el mantenimiento y la formación del equipo.',
          'Birinin gösterebileceği bir gereksinim yazın: “Editör, geliştirici yardımı almadan hizmet koşullarını güncelleyip sayfanın tamamını yayımlayabilmeli.” Sorun eksik kamuya açık metinse önce [HTML ve tarayıcı içeriği kontrollerimizi](/blog/javascript-seo-ai-search) uygulayın. Aynı gereksinim için hem düzeltme hem taşıma teklifi isteyin; bakım ve ekip eğitimini de hesaba katın.',
        ),
        copy(
          '[Google’s AI search eligibility guidance](https://developers.google.com/search/docs/appearance/ai-features) requires supporting pages to be indexed and eligible for a snippet, with no extra technical requirements. That does not establish a preferred content management system. Treat an expected AI benefit as a hypothesis, and evaluate other assistants separately.',
          '[Los requisitos de Google para aparecer en búsquedas con IA](https://developers.google.com/search/docs/appearance/ai-features) exigen que las páginas de apoyo estén indexadas y puedan mostrar un fragmento, sin requisitos técnicos adicionales. Eso no establece un gestor de contenidos preferido. Trata el posible beneficio en IA como una hipótesis y evalúa los demás asistentes por separado.',
          '[Google’ın yapay zekâ aramasında yer alma koşulları](https://developers.google.com/search/docs/appearance/ai-features), kaynak olarak gösterilen sayfaların dizine eklenmesini ve snippet gösterimine uygun olmasını gerektirir; ek teknik koşul yoktur. Bu, belirli bir içerik yönetim sisteminin tercih edildiği anlamına gelmez. Beklenen yapay zekâ faydasını bir hipotez olarak ele alın ve diğer asistanları ayrı değerlendirin.',
        ),
      ],
    },
    {
      id: 'page-inventory',
      title: copy(
        'Build the page inventory before choosing new URLs',
        'Haz el inventario de páginas antes de elegir nuevas URL',
        'Yeni URL seçmeden önce sayfa envanterini hazırlayın',
      ),
      paragraphs: [
        copy(
          'Combine a crawl with the content export, sitemap and important landing pages from your reports. Include downloads and older addresses that still receive visits. For each current URL, record its reader task, intended destination, essential facts and owner. A crawl alone can miss a page that has lost its internal links.',
          'Combina un rastreo con la exportación de contenidos, el sitemap y las páginas de entrada importantes de tus informes. Incluye las descargas y las direcciones antiguas que aún reciben visitas. Para cada URL actual, anota la tarea del lector, el destino previsto, los datos esenciales y el responsable. Un rastreo por sí solo puede omitir una página que haya perdido sus enlaces internos.',
          'Tarama sonuçlarını içerik dışa aktarımı, site haritası ve raporlardaki önemli giriş sayfalarıyla birleştirin. İndirilebilir dosyaları ve hâlâ ziyaret alan eski adresleri de ekleyin. Her mevcut URL için okuyucunun amacını, planlanan hedefi, temel bilgileri ve sorumluyu kaydedin. Yalnızca tarama yapmak, iç bağlantılarını kaybetmiş bir sayfayı gözden kaçırabilir.',
        ),
        copy(
          'Keep a working URL when the page’s purpose remains the same and the new system can serve it. If addresses must change, prepare the old-to-new mapping before launch. [Google’s site-move planning guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recommends separating major changes. Avoid bundling a platform move, domain change and wholesale copy rewrite unless there is a clear operational need.',
          'Conserva una URL que funciona cuando la página mantiene su finalidad y el nuevo sistema puede servirla. Si las direcciones deben cambiar, prepara la correspondencia entre las antiguas y las nuevas antes del lanzamiento. [La guía de Google para planificar una migración](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recomienda separar los cambios importantes. Evita combinar plataforma, dominio y una reescritura completa salvo que exista una necesidad operativa clara.',
          'Sayfanın amacı aynıysa ve yeni sistem mevcut URL’yi sunabiliyorsa çalışan adresi koruyun. Adreslerin değişmesi gerekiyorsa yayından önce eski ve yeni URL eşlemesini hazırlayın. [Google’ın site taşıma planlama rehberi](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) büyük değişiklikleri ayırmayı önerir. Açık bir operasyonel ihtiyaç yoksa platform taşıma, alan adı değişikliği ve tüm metinleri yeniden yazma işlerini birleştirmeyin.',
        ),
        copy(
          'Check [Google’s Change of Address tool scope](https://support.google.com/webmasters/answer/9370220?hl=en) if the domain changes. A platform switch that preserves public URLs does not need that tool.',
          'Consulta [el alcance de la herramienta Cambio de dirección de Google](https://support.google.com/webmasters/answer/9370220?hl=en) si cambia el dominio. Un cambio de plataforma que conserva las URL públicas no necesita esa herramienta.',
          'Alan adı değişiyorsa [Google’ın Adres Değişikliği aracının kapsamını](https://support.google.com/webmasters/answer/9370220?hl=en) kontrol edin. Kamuya açık URL’leri koruyan bir platform değişikliği bu aracı gerektirmez.',
        ),
      ],
    },
    {
      id: 'staging-checks',
      title: copy(
        'Compare the old site with the proposed release',
        'Compara la web actual con la versión preparada',
        'Mevcut siteyi yayına hazırlanmış sürümle karşılaştırın',
      ),
      paragraphs: [
        copy(
          'Use a protected test environment and compare the same pages on both versions. [Google’s hosting-move checks](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) include pages, images, forms, downloads and crawler access. Start with every shared template and the pages that support important inquiries. Then expand automated URL checks across the inventory; a good homepage does not validate an archive.',
          'Utiliza un entorno de pruebas protegido y compara las mismas páginas en ambas versiones. [Las comprobaciones de Google para cambiar de alojamiento](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) incluyen páginas, imágenes, formularios, descargas y acceso de rastreadores. Empieza por cada plantilla compartida y las páginas que generan consultas importantes. Después amplía las comprobaciones automáticas al inventario completo; una buena portada no valida todo el archivo.',
          'Korumalı bir test ortamında iki sürümün aynı sayfalarını karşılaştırın. [Google’ın barındırma değişikliği kontrolleri](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) sayfaları, görselleri, formları, indirmeleri ve tarayıcı botların erişimini kapsar. Önce her ortak şablonu ve önemli talepleri destekleyen sayfaları kontrol edin. Ardından otomatik URL kontrollerini tüm envantere genişletin; iyi bir ana sayfa arşivin tamamını doğrulamaz.',
        ),
      ],
      bullets: [
        copy(
          'Content: the same useful answer, qualifications, images and downloads remain available, including every supported language.',
          'Contenido: siguen disponibles la respuesta útil, sus condiciones, las imágenes y las descargas, en todos los idiomas admitidos.',
          'İçerik: yararlı yanıt, sınırlamalar, görseller ve indirmeler desteklenen her dilde erişilebilir kalır.',
        ),
        copy(
          'Search signals: check response status, title, description, canonical, indexing instructions and any existing language relationships. Record intentional changes.',
          'Señales de búsqueda: comprueba el estado HTTP, el título, la descripción, la canonical, las instrucciones de indexación y las relaciones entre idiomas existentes. Anota los cambios intencionados.',
          'Arama sinyalleri: yanıt durumunu, başlığı, açıklamayı, canonical adresini, dizine ekleme talimatlarını ve mevcut dil ilişkilerini kontrol edin. Bilinçli değişiklikleri kaydedin.',
        ),
        copy(
          'Reader journey: follow internal links, open downloads and test the contact or purchase path on mobile. Confirm receipt in the test system, not just a success message.',
          'Recorrido del lector: sigue los enlaces internos, abre las descargas y prueba el contacto o la compra en móvil. Confirma la recepción en el sistema de pruebas, además del mensaje de éxito.',
          'Okuyucu yolculuğu: iç bağlantıları izleyin, dosyaları açın ve mobilde iletişim veya satın alma akışını sınayın. Başarı mesajıyla yetinmeyin; test sisteminde kaydın alındığını doğrulayın.',
        ),
        copy(
          'Operations: make one ordinary content update, then verify the public output. Check that measurement and ownership-verification settings survive the move.',
          'Operación: realiza una actualización habitual de contenido y verifica el resultado publicado. Comprueba que se conservan la medición y la verificación de propiedad.',
          'İşleyiş: olağan bir içerik güncellemesi yapıp yayımlanan sonucu doğrulayın. Ölçüm ve sahiplik doğrulama ayarlarının taşındığını kontrol edin.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a supplier’s missing download',
          'Ejemplo ilustrativo: la descarga perdida de un proveedor',
          'Temsili örnek: tedarikçinin eksik indirme dosyası',
        ),
        text: copy(
          'A fictional supplier keeps its installation-guide URL during a rebuild. The new page looks correct, but the export omitted the compatibility PDF linked from it. The inventory names that download as essential to the buyer’s task. The team delays launch until the file and link work, then tests an editor’s next update. Preserving the page address alone would not have preserved the useful resource.',
          'Un proveedor ficticio conserva la URL de su guía de instalación durante una renovación. La página parece correcta, pero la exportación omitió el PDF de compatibilidad que enlazaba. El inventario identifica esa descarga como esencial para el comprador. El equipo aplaza el lanzamiento hasta reparar el archivo y el enlace, y después prueba la siguiente actualización del editor. Conservar solo la dirección no habría conservado el recurso útil.',
          'Kurgusal bir tedarikçi, siteyi yeniden kurarken kurulum rehberinin URL’sini korur. Yeni sayfa doğru görünür, ancak dışa aktarım sırasında bağlantı verilen uyumluluk PDF’si atlanmıştır. Envanter bu dosyayı alıcının işi için gerekli olarak tanımlar. Ekip, dosya ve bağlantı çalışana kadar yayını erteler; ardından editörün sonraki güncellemesini sınar. Yalnızca sayfa adresini korumak, yararlı kaynağı korumaya yetmezdi.',
        ),
      },
    },
    {
      id: 'launch-decision',
      title: copy(
        'Agree when to launch and when to stop',
        'Acuerda cuándo lanzar y cuándo detener el cambio',
        'Ne zaman yayına alınacağını ve ne zaman durulacağını kararlaştırın',
      ),
      paragraphs: [
        copy(
          'Name the person who makes the launch decision and the person who can restore the previous release. Write specific stop conditions: important pages missing, an unintended production noindex, broken inquiry delivery or redirects to unrelated pages. Keep a tested recovery plan and the old content export. Do not wait for a traffic chart to reveal a failure you can reproduce now.',
          'Designa a quien decide el lanzamiento y a quien puede restaurar la versión anterior. Escribe condiciones concretas para detenerlo: páginas importantes ausentes, un noindex accidental en producción, consultas que no llegan o redirecciones a páginas sin relación. Conserva un plan de recuperación probado y la exportación anterior. No esperes a que un gráfico de tráfico revele un fallo que ya puedes reproducir.',
          'Yayın kararını verecek kişiyi ve önceki sürümü geri getirebilecek kişiyi belirleyin. Somut durdurma koşulları yazın: eksik önemli sayfalar, canlı sitede istenmeyen noindex, iletilmeyen talepler veya ilgisiz sayfalara yönlendirmeler. Sınanmış bir geri dönüş planını ve eski içerik dışa aktarımını saklayın. Şimdi yeniden üretebildiğiniz bir hatayı trafik grafiğinin göstermesini beklemeyin.',
        ),
        copy(
          'For a permanent URL change, [Google’s redirect documentation](https://developers.google.com/search/docs/crawling-indexing/301-redirects) supports server-side 301 or 308 redirects. Test the old address through to the intended final page. Keep unchanged addresses working directly. Our [guide to choosing a useful redirect destination](/blog/broken-ai-referral-links) covers cases where a page has no genuine replacement.',
          'Para una URL que cambia de forma permanente, [la documentación de Google sobre redirecciones](https://developers.google.com/search/docs/crawling-indexing/301-redirects) contempla redirecciones 301 o 308 del servidor. Prueba la dirección antigua hasta la página final prevista. Mantén el acceso directo a las direcciones que no cambian. Nuestra [guía para elegir un destino de redirección útil](/blog/broken-ai-referral-links) aborda las páginas sin sustituto real.',
          'Kalıcı URL değişiklikleri için [Google’ın yönlendirme dokümantasyonu](https://developers.google.com/search/docs/crawling-indexing/301-redirects), sunucu tarafında 301 veya 308 yönlendirmelerini destekler. Eski adresten beklenen son sayfaya kadar tüm yolu sınayın. Değişmeyen adresler doğrudan çalışmaya devam etsin. [Yararlı bir yönlendirme hedefi seçme rehberimiz](/blog/broken-ai-referral-links), gerçek bir karşılığı bulunmayan sayfaları ele alır.',
        ),
      ],
    },
    {
      id: 'post-launch-review',
      title: copy(
        'Verify the live release before judging AI performance',
        'Verifica la versión pública antes de evaluar el rendimiento en IA',
        'Yapay zekâ performansını yorumlamadan canlı sürümü doğrulayın',
      ),
      paragraphs: [
        copy(
          'After switching, repeat the priority checks on the public hostname. Confirm that intended public pages have lost staging restrictions, while private areas remain protected. Check the sitemap, canonical destinations, forms and downloads again. Record the release time and any tracking changes so a measurement change cannot masquerade as a traffic improvement.',
          'Tras el cambio, repite las comprobaciones prioritarias en el dominio público. Confirma que las páginas que deben ser públicas ya no tienen restricciones de pruebas y que las zonas privadas siguen protegidas. Revisa de nuevo el sitemap, las canonical, los formularios y las descargas. Anota la hora del lanzamiento y cualquier cambio de medición para no confundirlo con una mejora de tráfico.',
          'Geçişten sonra öncelikli kontrolleri canlı alan adında tekrarlayın. Kamuya açık olması gereken sayfalarda test ortamı kısıtlarının kalktığını, özel alanların ise korunduğunu doğrulayın. Site haritasını, canonical hedeflerini, formları ve indirmeleri yeniden kontrol edin. Ölçüm değişikliğini trafik artışı sanmamak için yayın zamanını ve izleme değişikliklerini kaydedin.',
        ),
        copy(
          'Review search visits, completed inquiries and a stable sample of AI answers separately. Keep the exact questions and cited URLs from before the move. An answer may still link to an old address; check whether that visit works. Citevia’s [SEO service for site changes](/services/seo) can help turn the inventory into owned tasks. The first success criterion is a working migration with the promised editing improvement, not a guaranteed citation increase.',
          'Revisa por separado las visitas de búsqueda, las consultas recibidas y una muestra estable de respuestas de IA. Conserva las preguntas exactas y las URL citadas antes de la migración. Una respuesta puede seguir enlazando una dirección antigua; comprueba si esa visita funciona. El [servicio SEO de Citevia para cambios en la web](/services/seo) puede convertir el inventario en tareas con responsable. El primer criterio de éxito es una migración funcional con la mejora de edición prometida, no un aumento garantizado de citas.',
          'Arama ziyaretlerini, alınan talepleri ve sabit bir yapay zekâ yanıt örneklemini ayrı inceleyin. Taşımadan önceki soruların tam metnini ve atıf yapılan URL’leri saklayın. Bir yanıt hâlâ eski adrese bağlantı verebilir; ziyaretin çalışıp çalışmadığını kontrol edin. Citevia’nın [site değişikliklerine yönelik SEO hizmeti](/services/seo), envanteri sorumlusu belli işlere dönüştürmeye yardımcı olabilir. İlk başarı ölçütü, vaat edilen düzenleme kolaylığını sağlayan çalışan bir taşımadır; garantili atıf artışı değildir.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Practical questions before a website migration',
      'Preguntas prácticas antes de migrar una web',
      'Site taşıma öncesinde pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Should we move if the only evidence is another site’s AI traffic?',
          '¿Conviene migrar si la única prueba es el tráfico de IA de otra web?',
          'Tek kanıt başka bir sitenin yapay zekâ trafiğiyse taşınmalı mıyız?',
        ),
        answer: copy(
          'That comparison is not enough to identify the platform as the cause. Confirm an actual problem on your site and test whether a smaller repair resolves it. Easier maintenance can justify a move, but demonstrate it with a real editing task and account for training and ongoing support.',
          'Esa comparación no basta para identificar la plataforma como causa. Confirma un problema real en tu web y prueba si una reparación menor lo resuelve. Un mantenimiento más sencillo puede justificar la migración, pero demuéstralo con una tarea de edición real y contempla la formación y el soporte continuo.',
          'Bu karşılaştırma, nedeni platform olarak belirlemek için yeterli değildir. Kendi sitenizdeki gerçek bir sorunu doğrulayın ve daha küçük bir düzeltmenin işe yarayıp yaramadığını sınayın. Kolay bakım taşımayı haklı çıkarabilir; bunu gerçek bir düzenleme göreviyle gösterin, eğitimi ve sürekli desteği de hesaba katın.',
        ),
      },
      {
        question: copy(
          'Do unchanged URLs need migration redirects?',
          '¿Necesitan redirecciones las URL que no cambian?',
          'Değişmeyen URL’ler için taşıma yönlendirmesi gerekir mi?',
        ),
        answer: copy(
          'A URL that stays the same can continue serving its page directly. Preserve existing redirects from older addresses and test them on the new system. The change of platform alone does not require every live page to redirect somewhere else.',
          'Una URL que permanece igual puede seguir sirviendo su página directamente. Conserva las redirecciones existentes desde direcciones anteriores y pruébalas en el nuevo sistema. El cambio de plataforma no exige que todas las páginas activas redirijan a otro destino.',
          'Aynı kalan URL, sayfasını doğrudan sunmaya devam edebilir. Daha eski adreslerden gelen mevcut yönlendirmeleri koruyun ve yeni sistemde sınayın. Yalnızca platformun değişmesi, her canlı sayfanın başka bir yere yönlendirilmesini gerektirmez.',
        ),
      },
      {
        question: copy(
          'Do we need Google’s Change of Address tool for a new CMS?',
          '¿Necesitamos la herramienta Cambio de dirección de Google para cambiar de CMS?',
          'Yeni bir CMS için Google’ın Adres Değişikliği aracı gerekir mi?',
        ),
        answer: copy(
          'Not when the public URLs stay the same. Google’s tool is for eligible domain or subdomain moves, not a platform switch or path-only change. Follow the linked migration guidance for your actual scope and preserve Search Console ownership verification on the new site.',
          'No si las URL públicas siguen siendo las mismas. La herramienta de Google se aplica a migraciones de dominio o subdominio admitidas, no a cambiar de plataforma o solo de rutas. Sigue la guía enlazada según el alcance real y conserva la verificación de propiedad de Search Console en la nueva web.',
          'Kamuya açık URL’ler aynı kalıyorsa gerekmez. Google’ın aracı, uygun alan adı veya alt alan adı taşımaları içindir; platform ya da yalnızca yol değişiklikleri için değildir. Gerçek kapsamınıza uygun bağlantılı taşıma rehberini izleyin ve yeni sitede Search Console sahiplik doğrulamasını koruyun.',
        ),
      },
      {
        question: copy(
          'How long should old URL redirects remain?',
          '¿Cuánto tiempo deben mantenerse las redirecciones antiguas?',
          'Eski URL yönlendirmeleri ne kadar süre kalmalı?',
        ),
        answer: copy(
          'Google recommends keeping site-move redirects as long as possible, generally at least one year. Keep useful redirects longer when visitors still follow old links. Assign an owner to the old domain or routing configuration so a renewal or hosting change does not silently remove the handoff.',
          'Google recomienda mantener las redirecciones de una migración todo el tiempo posible, por lo general al menos un año. Conserva las útiles durante más tiempo si siguen llegando visitas desde enlaces antiguos. Asigna un responsable al dominio anterior o a las reglas de rutas para que una renovación o un cambio de alojamiento no eliminen el acceso sin aviso.',
          'Google, site taşıma yönlendirmelerini mümkün olduğunca uzun süre, genellikle en az bir yıl tutmayı önerir. Ziyaretçiler eski bağlantıları izliyorsa yararlı yönlendirmeleri daha uzun koruyun. Bir yenileme veya barındırma değişikliğinin geçişi fark edilmeden kaldırmaması için eski alan adına ya da yönlendirme yapılandırmasına sorumlu atayın.',
        ),
      },
      {
        question: copy(
          'Should a drop in sampled AI citations trigger a rollback?',
          '¿Una caída de citas en la muestra de IA exige volver a la versión anterior?',
          'Örneklenen yapay zekâ atıfları azalırsa önceki sürüme dönülmeli mi?',
        ),
        answer: copy(
          'Investigate before reversing the migration. First check for a reproducible delivery, content or indexing error and compare the same questions under the same conditions. Use the agreed recovery plan for a serious release failure. A fluctuating answer sample alone does not identify the platform as the cause.',
          'Investiga antes de revertir la migración. Primero busca un error reproducible de entrega, contenido o indexación y compara las mismas preguntas en las mismas condiciones. Aplica el plan de recuperación acordado ante un fallo grave del lanzamiento. Una muestra de respuestas variable no identifica por sí sola la plataforma como causa.',
          'Taşımayı geri almadan önce araştırın. Önce yeniden üretilebilir bir sunum, içerik veya dizine ekleme hatası arayın; aynı soruları aynı koşullarda karşılaştırın. Ciddi bir yayın hatasında kararlaştırılan geri dönüş planını uygulayın. Yanıt örnekleminin dalgalanması tek başına nedenin platform olduğunu göstermez.',
        ),
      },
    ],
  },
  translations,
};

copy(
  `${websiteMigration.seoTitle} | Citevia`,
  `${translations.es[websiteMigration.seoTitle]} | Citevia`,
  `${translations.tr[websiteMigration.seoTitle]} | Citevia`,
);

export const websiteMigrationTranslations = translations;
export const websiteMigrationFragments = fragments;
