import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();
copy('. Updated', '. Actualizado', '. Güncellendi');
copy(
  'Hands using a keyboard in blue light',
  'Manos usando un teclado bajo una luz azul',
  'Mavi ışıkta klavye kullanan eller',
);

export const aiCrawlerPolicy = {
  translations,
  slug: 'ai-crawler-policy-training-search',
  title: copy(
    'AI crawler policy: block training, keep search access',
    'Política de rastreadores de IA: separar entrenamiento y búsqueda',
    'Yapay zekâ tarayıcı politikası: eğitim ve aramayı ayırın',
  ),
  seoTitle: copy(
    'AI Crawler Policy: Training vs. Search',
    'Rastreadores de IA: entrenamiento y búsqueda',
    'Yapay Zekâ Tarayıcıları: Eğitim ve Arama',
  ),
  focusKeyphrase: copy(
    'AI crawler policy',
    'política de rastreadores de IA',
    'yapay zekâ tarayıcı politikası',
  ),
  description: copy(
    'Build an AI crawler policy that separates training from search. Check provider rules, firewall access and verified logs before changing your site.',
    'Define una política de rastreadores de IA que separe entrenamiento y búsqueda. Revisa reglas, cortafuegos y registros antes de cambiar tu sitio.',
    'Eğitim ve aramayı ayıran bir yapay zekâ tarayıcı politikası oluşturun. Değişiklikten önce sağlayıcı kurallarını, güvenlik duvarını ve kayıtları inceleyin.',
  ),
  category: 'TECHNICAL SEO',
  published: '2026-10-16',
  updated: '2026-10-16',
  relatedService: 'seo',
  takeaway: copy(
    'An AI crawler policy can restrict training while preserving selected search access, where the provider offers separate controls. Decide by purpose and provider, then check both robots.txt and your hosting rules. Access makes retrieval possible; it does not guarantee a citation, recommendation or visit.',
    'Una política de rastreadores de IA puede restringir el entrenamiento y conservar el acceso de búsqueda cuando el proveedor ofrece controles separados. Decide según la finalidad y el proveedor; después revisa robots.txt y las reglas de alojamiento. El acceso permite recuperar contenido, pero no garantiza citas, recomendaciones ni visitas.',
    'Bir yapay zekâ tarayıcı politikası, sağlayıcı ayrı kontroller sunuyorsa eğitimi kısıtlarken seçili arama erişimini koruyabilir. Amaca ve sağlayıcıya göre karar verin; ardından robots.txt dosyasını ve barındırma kurallarını kontrol edin. Erişim, içeriğin alınmasını mümkün kılar; alıntı, öneri veya ziyaret garantisi vermez.',
  ),
  sections: [
    {
      id: 'policy-purpose',
      title: copy(
        'Start an AI crawler policy with three decisions',
        'Empieza la política con tres decisiones',
        'Tarayıcı politikasına üç kararla başlayın',
      ),
      paragraphs: [
        copy(
          'A marketing team may want its product pages found in AI search without approving every use of its content. An SEO team may also need to control unwanted server load. Those goals need a written access policy before someone changes a broad bot setting.',
          'Un equipo de marketing puede querer que sus páginas de producto aparezcan en búsquedas con IA sin aprobar todos los usos de su contenido. El equipo de SEO también puede necesitar controlar la carga del servidor. Conviene definir una política de acceso antes de cambiar un ajuste general de bots.',
          'Bir pazarlama ekibi, içeriğinin her türlü kullanımını onaylamadan ürün sayfalarının yapay zekâ aramalarında bulunmasını isteyebilir. SEO ekibinin de gereksiz sunucu yükünü kontrol etmesi gerekebilir. Genel bir bot ayarını değiştirmeden önce bu hedefler için yazılı bir erişim politikası belirleyin.',
        ),
        copy(
          'A [September 27, 2026 content-marketing discussion](https://www.reddit.com/r/content_marketing/comments/1wrk1ru/has_anyone_checked_whether_their_site_is_blocking/) asks whether teams distinguish training crawlers from search access. A [July 9, 2026 technical SEO discussion](https://www.reddit.com/r/TechSEO/comments/1urkpk3/how_are_you_guys_measuring_bot_traffic_for_seo/) asks which bots to allow, block or monitor. These are public questions, not evidence that any particular policy improves visibility.',
          'Un [debate de marketing de contenidos del 27 de septiembre de 2026](https://www.reddit.com/r/content_marketing/comments/1wrk1ru/has_anyone_checked_whether_their_site_is_blocking/) pregunta si los equipos distinguen los rastreadores de entrenamiento del acceso de búsqueda. Un [debate de SEO técnico del 9 de julio de 2026](https://www.reddit.com/r/TechSEO/comments/1urkpk3/how_are_you_guys_measuring_bot_traffic_for_seo/) plantea qué bots permitir, bloquear o supervisar. Son preguntas públicas, no pruebas de que una política concreta mejore la visibilidad.',
          'Bir [27 Eylül 2026 tarihli içerik pazarlaması tartışması](https://www.reddit.com/r/content_marketing/comments/1wrk1ru/has_anyone_checked_whether_their_site_is_blocking/) ekiplerin eğitim tarayıcıları ile arama erişimini ayırt edip etmediğini soruyor. Bir [9 Temmuz 2026 tarihli teknik SEO tartışması](https://www.reddit.com/r/TechSEO/comments/1urkpk3/how_are_you_guys_measuring_bot_traffic_for_seo/) ise hangi botlara izin verileceğini, hangilerinin engelleneceğini veya izleneceğini sorguluyor. Bunlar kamuya açık sorulardır; belirli bir politikanın görünürlüğü artırdığının kanıtı değildir.',
        ),
      ],
      bullets: [
        copy(
          'Training: which documented model-development uses will you permit?',
          'Entrenamiento: ¿qué usos documentados para desarrollar modelos permitirás?',
          'Eğitim: Belgelenmiş hangi model geliştirme kullanımlarına izin vereceksiniz?',
        ),
        copy(
          'Search: which services should be able to discover your public pages?',
          'Búsqueda: ¿qué servicios deberían poder descubrir tus páginas públicas?',
          'Arama: Hangi hizmetler herkese açık sayfalarınızı keşfedebilmeli?',
        ),
        copy(
          'User requests: which assistants may fetch a page on someone’s behalf?',
          'Solicitudes de usuarios: ¿qué asistentes pueden recuperar una página por encargo de una persona?',
          'Kullanıcı istekleri: Hangi asistanlar bir kişi adına sayfa alabilmeli?',
        ),
      ],
    },
    {
      id: 'provider-controls',
      title: copy(
        'Check the provider, not just the bot name',
        'Revisa el proveedor y la función de cada bot',
        'Yalnızca bot adına değil, sağlayıcıya da bakın',
      ),
      paragraphs: [
        copy(
          '[OpenAI’s crawler documentation](https://developers.openai.com/api/docs/bots) separates GPTBot training controls from OAI-SearchBot search controls. ChatGPT-User handles user-triggered visits; its robots.txt behavior differs and it does not control search inclusion. Record these as separate decisions.',
          '[La documentación de rastreadores de OpenAI](https://developers.openai.com/api/docs/bots) separa los controles de entrenamiento de GPTBot de los controles de búsqueda de OAI-SearchBot. ChatGPT-User realiza visitas iniciadas por usuarios; su comportamiento ante robots.txt es distinto y no controla la inclusión en búsquedas. Registra estas decisiones por separado.',
          '[OpenAI tarayıcı belgeleri](https://developers.openai.com/api/docs/bots), GPTBot eğitim kontrollerini OAI-SearchBot arama kontrollerinden ayırır. ChatGPT-User, kullanıcıların başlattığı ziyaretleri gerçekleştirir; robots.txt davranışı farklıdır ve aramaya dahil edilmeyi kontrol etmez. Bunları ayrı kararlar olarak kaydedin.',
        ),
        copy(
          '[Google’s Google-Extended documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended) describes a control covering future Gemini training and certain grounding uses. It does not control Google Search inclusion or ranking. Do not describe this as a universal training-only switch: grounding is also within its documented scope.',
          '[La documentación de Google sobre Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended) describe un control que abarca el entrenamiento de futuras generaciones de Gemini y ciertos usos de fundamentación con fuentes. No controla la inclusión ni la posición en Google Search. No lo presentes como un interruptor exclusivo de entrenamiento: la fundamentación también forma parte de su alcance.',
          '[Google’ın Google-Extended belgeleri](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended), gelecekteki Gemini eğitimi ve belirli kaynakla destekleme kullanımlarını kapsayan bir kontrolü açıklar. Bu kontrol Google Arama’ya dahil edilmeyi veya sıralamayı belirlemez. Bunu yalnızca eğitimi etkileyen evrensel bir anahtar olarak tanımlamayın; kaynakla destekleme de belgelenmiş kapsamına girer.',
        ),
        copy(
          '[Perplexity’s crawler guidance](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) distinguishes PerplexityBot search discovery from Perplexity-User requests. For Google AI Overviews and AI Mode, consult [Google’s AI search requirements](https://developers.google.com/search/docs/appearance/ai-features). Keep each provider’s rules attached to its own entry in your policy.',
          '[La guía de rastreadores de Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) distingue el descubrimiento para búsquedas de PerplexityBot de las solicitudes de Perplexity-User. Para AI Overviews y AI Mode de Google, consulta [los requisitos de búsqueda con IA de Google](https://developers.google.com/search/docs/appearance/ai-features). Asocia las reglas de cada proveedor a su propia entrada en la política.',
          '[Perplexity tarayıcı rehberi](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), PerplexityBot’un arama amaçlı keşfini Perplexity-User isteklerinden ayırır. Google AI Overviews ve AI Mode için [Google’ın yapay zekâ arama gereksinimlerine](https://developers.google.com/search/docs/appearance/ai-features) bakın. Her sağlayıcının kurallarını politikanızdaki ilgili kayda ekleyin.',
        ),
      ],
    },
    {
      id: 'hosting-check',
      title: copy(
        'Reconcile robots.txt with hosting controls',
        'Alinea robots.txt con los controles de alojamiento',
        'robots.txt ile barındırma kontrollerini uyumlu hale getirin',
      ),
      paragraphs: [
        copy(
          'Your policy needs to cover the content delivery network (CDN), web application firewall (WAF) and origin server. A permissive robots.txt file cannot undo a blocked request at the hosting layer. Our [guide to robots.txt, sitemaps and llms.txt](/blog/robots-sitemap-llms-explained) explains what the discovery files themselves can do.',
          'La política debe abarcar la red de distribución de contenidos (CDN), el cortafuegos de aplicaciones web (WAF) y el servidor de origen. Un archivo robots.txt permisivo no puede desbloquear una solicitud bloqueada por el alojamiento. Nuestra [guía sobre robots.txt, sitemaps y llms.txt](/blog/robots-sitemap-llms-explained) explica la función de esos archivos de descubrimiento.',
          'Politikanız içerik dağıtım ağını (CDN), web uygulaması güvenlik duvarını (WAF) ve kaynak sunucuyu kapsamalıdır. İzin veren bir robots.txt dosyası, barındırma katmanında engellenmiş bir isteği açamaz. [robots.txt, site haritaları ve llms.txt rehberimiz](/blog/robots-sitemap-llms-explained), keşif dosyalarının kendi işlevlerini açıklar.',
        ),
        copy(
          '[Cloudflare’s AI bot policy documentation](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/) distinguishes Search, Agent and Training behavior. It also describes mixed-purpose crawlers. Inspect your actual settings and rule matches; the label “block training” is not enough to establish which search access remains.',
          '[La documentación de políticas de bots de IA de Cloudflare](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/) distingue las funciones de búsqueda, agente y entrenamiento. También describe rastreadores con varias finalidades. Revisa tus ajustes reales y las reglas que se aplican; la etiqueta «bloquear entrenamiento» no basta para determinar qué acceso de búsqueda se conserva.',
          '[Cloudflare’ın yapay zekâ bot politikası belgeleri](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/), Arama, Ajan ve Eğitim davranışlarını ayırır. Birden fazla amaca hizmet eden tarayıcıları da açıklar. Gerçek ayarlarınızı ve eşleşen kuralları inceleyin; “eğitimi engelle” etiketi hangi arama erişiminin korunduğunu belirlemek için yeterli değildir.',
        ),
        copy(
          'Before editing, save the current configuration and choose a few public pages to test. Include the homepage, a service page and an article. Ask the technical owner to review crawler-specific groups and path restrictions together. Keep private areas protected by authentication.',
          'Antes de editar, guarda la configuración actual y elige algunas páginas públicas para probar. Incluye la portada, una página de servicio y un artículo. Pide al responsable técnico que revise conjuntamente los grupos de rastreadores y las restricciones de rutas. Protege las áreas privadas mediante autenticación.',
          'Düzenleme öncesinde mevcut yapılandırmayı kaydedin ve test için birkaç herkese açık sayfa seçin. Ana sayfayı, bir hizmet sayfasını ve bir makaleyi dahil edin. Teknik sorumludan tarayıcıya özel grupları ve yol kısıtlamalarını birlikte incelemesini isteyin. Özel alanları kimlik doğrulamayla koruyun.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a software vendor',
          'Ejemplo ilustrativo: un proveedor de software',
          'Temsili örnek: bir yazılım sağlayıcısı',
        ),
        text: copy(
          'A fictional vendor wants search access to its public integration guide but declines a provider’s training use. The owner records the separate controls, checks the CDN policy and reviews verified requests to that guide. If a search request meets a blocking rule, the team investigates that rule before rewriting the article. This is a proposed workflow, not a Citevia client result.',
          'Un proveedor ficticio quiere permitir el acceso de búsqueda a su guía pública de integración, pero rechaza el uso para entrenamiento de un proveedor. El responsable registra los controles separados, revisa la política de CDN y examina las solicitudes verificadas a la guía. Si una regla bloquea una solicitud de búsqueda, el equipo investiga esa regla antes de reescribir el artículo. Es un proceso propuesto, no un resultado de un cliente de Citevia.',
          'Kurgusal bir sağlayıcı, herkese açık entegrasyon rehberine arama erişimi isterken bir sağlayıcının eğitim kullanımını reddeder. Sorumlu kişi ayrı kontrolleri kaydeder, CDN politikasını kontrol eder ve rehbere gelen doğrulanmış istekleri inceler. Bir arama isteği engelleme kuralına takılırsa ekip, makaleyi yeniden yazmadan önce bu kuralı araştırır. Bu önerilen bir iş akışıdır; Citevia müşteri sonucu değildir.',
        ),
      },
    },
    {
      id: 'verify-access',
      title: copy(
        'Verify access before reporting visibility',
        'Verifica el acceso antes de informar sobre visibilidad',
        'Görünürlüğü raporlamadan önce erişimi doğrulayın',
      ),
      paragraphs: [
        copy(
          'Collect a dated request sample at the CDN or server. Separate claimed bot names from verified identities. Perplexity’s linked guidance recommends combining user-agent and published IP checks. A request that merely copies a bot’s user-agent string is not proof of that provider’s access.',
          'Recoge una muestra fechada de solicitudes en la CDN o el servidor. Separa los nombres de bot declarados de las identidades verificadas. La guía de Perplexity enlazada recomienda combinar el agente de usuario con las IP publicadas. Una solicitud que copia el agente de usuario de un bot no demuestra que ese proveedor haya accedido.',
          'CDN veya sunucudan tarihli bir istek örneklemi toplayın. Beyan edilen bot adlarını doğrulanmış kimliklerden ayırın. Bağlantısını verdiğimiz Perplexity rehberi, kullanıcı aracısı ile yayımlanan IP kontrollerinin birlikte kullanılmasını önerir. Bir botun kullanıcı aracısı bilgisini kopyalayan istek, sağlayıcının eriştiğini kanıtlamaz.',
        ),
        copy(
          'Check the response body as well as the status. A successful status carrying a challenge page does not deliver the article. Preserve the matched rule and redirect chain when available. If no verified request appears, report access as unobserved rather than inventing a crawl outcome.',
          'Revisa el cuerpo de la respuesta además del código de estado. Un estado correcto con una página de verificación no entrega el artículo. Conserva la regla aplicada y la cadena de redirecciones cuando estén disponibles. Si no aparece ninguna solicitud verificada, indica que el acceso no se ha observado en lugar de inventar un resultado de rastreo.',
          'Durum kodunun yanında yanıt gövdesini de kontrol edin. Doğrulama sayfası içeren başarılı bir durum kodu, makaleyi sunmuş sayılmaz. Varsa eşleşen kuralı ve yönlendirme zincirini saklayın. Doğrulanmış istek yoksa bir tarama sonucu varsaymak yerine erişimin gözlemlenmediğini belirtin.',
        ),
      ],
      bullets: [
        copy(
          'Record: time, hostname, path, claimed agent and identity-verification method.',
          'Registra: hora, nombre de host, ruta, agente declarado y método de verificación de identidad.',
          'Kaydedin: zaman, ana makine adı, yol, beyan edilen aracı ve kimlik doğrulama yöntemi.',
        ),
        copy(
          'Inspect: response status, actual content, redirects and the rule responsible for any block.',
          'Inspecciona: estado de respuesta, contenido real, redirecciones y regla responsable de cualquier bloqueo.',
          'İnceleyin: yanıt durumu, gerçek içerik, yönlendirmeler ve engellemeye neden olan kural.',
        ),
        copy(
          'Decide: keep, narrow or reverse the change using the agreed policy and observed evidence.',
          'Decide: mantener, limitar o revertir el cambio según la política acordada y las pruebas observadas.',
          'Karar verin: üzerinde anlaşılan politika ve gözlemlenen kanıtlara göre değişikliği koruyun, daraltın veya geri alın.',
        ),
      ],
    },
    {
      id: 'review-policy',
      title: copy(
        'Give the policy an owner and review trigger',
        'Asigna un responsable y un motivo de revisión',
        'Politikaya bir sorumlu ve inceleme koşulu atayın',
      ),
      paragraphs: [
        copy(
          'Keep one record per provider: purpose, affected paths, chosen control, source documentation, owner and review date. Revisit it after a hosting change or provider update. Where a control combines training and retrieval, record the tradeoff instead of promising both outcomes.',
          'Mantén un registro por proveedor: finalidad, rutas afectadas, control elegido, documentación, responsable y fecha de revisión. Revísalo tras un cambio de alojamiento o del proveedor. Si un control combina entrenamiento y recuperación de contenido, registra la contrapartida en vez de prometer ambos resultados.',
          'Her sağlayıcı için amaç, etkilenen yollar, seçilen kontrol, kaynak belgeler, sorumlu ve inceleme tarihini kaydedin. Barındırma değişikliği veya sağlayıcı güncellemesi sonrasında kaydı gözden geçirin. Bir kontrol eğitim ile içerik alımını birleştiriyorsa her iki sonucu da vaat etmek yerine ödünleşimi kaydedin.',
        ),
        copy(
          'Use our [AI visibility audit playbook](/blog/ai-visibility-audit-playbook) to investigate answers after access checks. Report crawling, citations and visits separately with the [AI visibility measurement guide](/blog/measuring-ai-search-visibility). Citevia’s [SEO service](/services/seo) can help coordinate the technical review. The first deliverable is a verified access decision, not a promised ranking.',
          'Usa nuestro [plan de auditoría de visibilidad en IA](/blog/ai-visibility-audit-playbook) para investigar respuestas después de comprobar el acceso. Informa por separado sobre rastreo, citas y visitas con la [guía de medición de visibilidad en IA](/blog/measuring-ai-search-visibility). El [servicio de SEO de Citevia](/services/seo) puede ayudar a coordinar la revisión técnica. El primer entregable es una decisión de acceso verificada, no una posición prometida.',
          'Erişim kontrollerinden sonra yanıtları incelemek için [yapay zekâ görünürlük denetimi rehberimizi](/blog/ai-visibility-audit-playbook) kullanın. [Yapay zekâ görünürlük ölçümü rehberiyle](/blog/measuring-ai-search-visibility) tarama, alıntı ve ziyaretleri ayrı raporlayın. [Citevia SEO hizmeti](/services/seo) teknik incelemeyi koordine etmeye yardımcı olabilir. İlk çıktı, vaat edilmiş bir sıralama değil, doğrulanmış bir erişim kararıdır.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'AI crawler policy: practical questions',
      'Política de rastreadores de IA: dudas prácticas',
      'Yapay zekâ tarayıcı politikası: pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Does blocking GPTBot also block ChatGPT search?',
          '¿Bloquear GPTBot también bloquea la búsqueda de ChatGPT?',
          'GPTBot’u engellemek ChatGPT aramasını da engeller mi?',
        ),
        answer: copy(
          'No. OpenAI documents separate controls for GPTBot and OAI-SearchBot. Review both entries and the hosting rules before concluding that search access is open. Allowing access still does not guarantee inclusion.',
          'No. OpenAI documenta controles separados para GPTBot y OAI-SearchBot. Revisa ambas entradas y las reglas de alojamiento antes de concluir que la búsqueda tiene acceso. Permitir el acceso no garantiza la inclusión.',
          'Hayır. OpenAI, GPTBot ve OAI-SearchBot için ayrı kontroller belgeler. Arama erişiminin açık olduğu sonucuna varmadan önce iki kaydı ve barındırma kurallarını inceleyin. Erişime izin vermek dahil edilme garantisi değildir.',
        ),
      },
      {
        question: copy(
          'Should I allow a bot just because it identifies itself by name?',
          '¿Debo permitir un bot solo porque se identifica por su nombre?',
          'Bir botun adını belirtmesi ona izin vermek için yeterli mi?',
        ),
        answer: copy(
          'No. Check the provider’s current verification guidance, including published IP ranges where available. Keep unverified requests separate. A broad exception based only on a claimed name can admit unrelated traffic.',
          'No. Consulta las instrucciones actuales de verificación del proveedor, incluidos los rangos de IP publicados cuando existan. Separa las solicitudes no verificadas. Una excepción amplia basada solo en un nombre declarado puede admitir tráfico ajeno.',
          'Hayır. Varsa yayımlanan IP aralıkları dahil, sağlayıcının güncel doğrulama rehberini kontrol edin. Doğrulanmamış istekleri ayrı tutun. Yalnızca beyan edilen ada dayanan geniş bir istisna, ilgisiz trafiği de içeri alabilir.',
        ),
      },
      {
        question: copy(
          'Can robots.txt protect confidential documents?',
          '¿Puede robots.txt proteger documentos confidenciales?',
          'robots.txt gizli belgeleri koruyabilir mi?',
        ),
        answer: copy(
          'No. Use authentication and access controls for private documents. A crawler preference is not an access barrier. Review public files and downloads separately from the pages that link to them.',
          'No. Usa autenticación y controles de acceso para los documentos privados. Una preferencia de rastreo no es una barrera de acceso. Revisa los archivos públicos y las descargas por separado de las páginas que los enlazan.',
          'Hayır. Özel belgeler için kimlik doğrulama ve erişim kontrolleri kullanın. Tarayıcı tercihi bir erişim engeli değildir. Herkese açık dosyaları ve indirmeleri, onlara bağlantı veren sayfalardan ayrı inceleyin.',
        ),
      },
      {
        question: copy(
          'Why do I still see no citations after allowing search crawlers?',
          '¿Por qué sigo sin ver citas tras permitir rastreadores de búsqueda?',
          'Arama tarayıcılarına izin verdikten sonra neden hâlâ alıntı görmüyorum?',
        ),
        answer: copy(
          'Access is only one condition. Confirm actual retrieval first, then inspect the relevance and accuracy of your pages against a documented question sample. No observed citation does not, by itself, prove that a crawler was blocked.',
          'El acceso es solo una condición. Confirma primero la recuperación real del contenido; después compara la relevancia y exactitud de tus páginas con una muestra documentada de preguntas. No observar citas no demuestra, por sí solo, que un rastreador estuviera bloqueado.',
          'Erişim koşullardan yalnızca biridir. Önce içeriğin gerçekten alındığını doğrulayın; ardından sayfalarınızın ilgililiğini ve doğruluğunu belgelenmiş bir soru örneklemine göre inceleyin. Alıntı gözlemlenmemesi, tek başına tarayıcının engellendiğini kanıtlamaz.',
        ),
      },
      {
        question: copy(
          'What should a small team check first?',
          '¿Qué debería revisar primero un equipo pequeño?',
          'Küçük bir ekip önce neyi kontrol etmeli?',
        ),
        answer: copy(
          'Choose one important public page and one provider. Compare the intended policy, deployed robots.txt and hosting rules, then inspect verified requests. Save the evidence and assign an owner before expanding to more providers.',
          'Elige una página pública importante y un proveedor. Compara la política deseada, el robots.txt publicado y las reglas de alojamiento; después inspecciona las solicitudes verificadas. Guarda las pruebas y asigna un responsable antes de ampliar el trabajo a más proveedores.',
          'Önemli bir herkese açık sayfa ve bir sağlayıcı seçin. Hedeflenen politikayı, yayımlanan robots.txt dosyasını ve barındırma kurallarını karşılaştırın; ardından doğrulanmış istekleri inceleyin. Daha fazla sağlayıcıya geçmeden önce kanıtları saklayın ve bir sorumlu atayın.',
        ),
      },
    ],
  },
};

// Social metadata uses the complete title, while document.title translates its parts.
copy(
  `${aiCrawlerPolicy.seoTitle} | Citevia`,
  `${translations.es[aiCrawlerPolicy.seoTitle]} | Citevia`,
  `${translations.tr[aiCrawlerPolicy.seoTitle]} | Citevia`,
);

export const aiCrawlerTranslations = translations;
export const aiCrawlerFragments = fragments;
