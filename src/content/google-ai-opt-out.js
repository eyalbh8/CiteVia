import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const googleAiOptOut = {
  translations,
  slug: 'google-ai-opt-out',
  category: 'STRATEGY',
  published: '2026-11-20',
  updated: '2026-11-20',
  relatedService: 'seo',
  title: copy(
    'Google AI opt-out: check the scope before you switch',
    'Excluir tu web de la IA de Google: revisa el alcance',
    'Google yapay zekâ kapsamından çıkma: önce kapsamı kontrol edin',
  ),
  seoTitle: copy(
    'Google AI Opt-Out: What to Check First',
    'Excluir tu web de la IA de Google: qué revisar',
    'Google yapay zekâ kapsamından çıkma rehberi',
  ),
  focusKeyphrase: copy(
    'Google AI opt-out',
    'excluir tu web de la IA de Google',
    'Google yapay zekâ kapsamından çıkma',
  ),
  description: copy(
    'Considering the Google AI opt-out? Check property inheritance, training controls and the evidence to save before changing your search visibility.',
    'Antes de excluir tu web de la IA de Google, revisa la herencia entre propiedades, los controles de entrenamiento y las pruebas que conviene guardar.',
    'Google yapay zekâ kapsamından çıkma kararından önce mülkler arası ayar aktarımını, eğitim kontrollerini ve saklamanız gereken verileri inceleyin.',
  ),
  takeaway: copy(
    'Use the Google AI opt-out when you intend to exclude your content and links from the covered Search AI features. First check the selected property, its inherited setting and any child overrides. Decide what the change should accomplish and save a baseline. Exclusion is a content-use choice; it is not a promised way to recover clicks.',
    'Usa la opción de exclusión si quieres retirar tu contenido y tus enlaces de las funciones de IA de la Búsqueda que abarca. Primero revisa la propiedad seleccionada, el ajuste heredado y las excepciones de sus propiedades secundarias. Define el objetivo y guarda una referencia inicial. Excluir tu web de la IA de Google es una decisión sobre el uso del contenido; no promete recuperar clics.',
    'Google yapay zekâ kapsamından çıkma seçeneğini, içeriğinizi ve bağlantılarınızı ilgili Arama yapay zekâ özelliklerinden çıkarmak istediğinizde kullanın. Önce seçili mülkü, üst mülkten aldığı ayarı ve alt mülk istisnalarını kontrol edin. Değişikliğin amacını belirleyip başlangıç verilerini saklayın. Bu, içerik kullanımına ilişkin bir karardır; tıklamaları geri kazanma sözü değildir.',
  ),
  sections: [
    {
      id: 'opt-out-purpose',
      title: copy(
        'Give the Google AI opt-out a specific purpose',
        'Define por qué quieres excluir tu web de la IA de Google',
        'Google yapay zekâ kapsamından çıkma amacınızı belirleyin',
      ),
      paragraphs: [
        copy(
          '[A November 13, 2026 SEO discussion about AI click data](https://www.reddit.com/r/SEO/comments/1xv2ktq/anyone_else_excited_to_see_googles_ai_click_data/) asks how publishers can judge an opt-out with incomplete traffic evidence. Participants disagree about the value of visibility without a visit. Their experiences explain the decision teams face; they do not establish that exclusion restores traffic.',
          '[Una conversación de SEO del 13 de noviembre de 2026 sobre clics de IA](https://www.reddit.com/r/SEO/comments/1xv2ktq/anyone_else_excited_to_see_googles_ai_click_data/) plantea cómo evaluar la exclusión con datos de tráfico incompletos. Los participantes discrepan sobre el valor de aparecer sin recibir una visita. Sus experiencias muestran la decisión que afrontan los equipos; no demuestran que excluirse recupere tráfico.',
          '[13 Kasım 2026 tarihli yapay zekâ tıklama verileri tartışması](https://www.reddit.com/r/SEO/comments/1xv2ktq/anyone_else_excited_to_see_googles_ai_click_data/), yayıncıların eksik trafik verileriyle kapsamdan çıkmayı nasıl değerlendireceğini soruyor. Katılımcılar, ziyaret getirmeyen görünürlüğün değeri konusunda farklı düşünüyor. Deneyimleri ekiplerin karşılaştığı kararı gösterir; kapsamdan çıkmanın trafiği geri getirdiğini kanıtlamaz.',
        ),
        copy(
          'Write the intended outcome before opening a setting. A publisher may have decided against this use of its articles. A service business may instead want more qualified inquiries. The first is a participation decision. The second needs evidence about visitors and inquiries before a visibility change can be judged useful.',
          'Escribe el resultado buscado antes de abrir un ajuste. Un editor puede haber decidido que no quiere ese uso de sus artículos. Una empresa de servicios quizá busque más consultas cualificadas. Lo primero es una decisión de participación. Lo segundo requiere pruebas sobre visitas y consultas para valorar si cambiar la visibilidad resulta útil.',
          'Ayarı açmadan önce hedeflediğiniz sonucu yazın. Bir yayıncı, yazılarının bu şekilde kullanılmasını istemiyor olabilir. Bir hizmet işletmesi ise daha fazla nitelikli başvuru arıyor olabilir. İlki bir katılım kararıdır. İkincisinde, görünürlük değişikliğinin yararını değerlendirmek için ziyaret ve başvuru verileri gerekir.',
        ),
      ],
    },
    {
      id: 'property-scope',
      title: copy(
        'Check the property and its inherited setting',
        'Revisa la propiedad y el ajuste que hereda',
        'Mülkü ve üst mülkten aldığı ayarı kontrol edin',
      ),
      paragraphs: [
        copy(
          '[Google’s Search generative AI control documentation](https://support.google.com/webmasters/answer/16908024?hl=en) covers AI Overviews, AI Mode and generative AI features in Discover. In Search Console, open Settings, then Search generative AI. Review whether the property includes content, excludes it or inherits a parent’s choice. Google says this control is not a ranking or inclusion signal for other parts of Search.',
          '[La documentación de Google sobre el control de IA generativa de la Búsqueda](https://support.google.com/webmasters/answer/16908024?hl=en) abarca AI Overviews, el Modo IA y las funciones de IA generativa de Discover. En Search Console, abre Configuración y luego el control de IA generativa de la Búsqueda. Revisa si la propiedad incluye contenido, lo excluye o hereda la elección de una propiedad superior. Google indica que este control no influye en la clasificación ni en la inclusión en otras partes de la Búsqueda.',
          '[Google’ın Arama üretken yapay zekâ kontrolü belgesi](https://support.google.com/webmasters/answer/16908024?hl=en), AI Overviews, Yapay Zekâ Modu ve Discover’ın üretken yapay zekâ özelliklerini kapsar. Search Console’da Ayarlar bölümünden Arama üretken yapay zekâ kontrolünü açın. Mülkün içeriği dahil ettiğini, hariç tuttuğunu veya üst mülkün seçimini devraldığını kontrol edin. Google, bu kontrolün Arama’nın diğer bölümlerinde sıralama veya dahil edilme sinyali olmadığını belirtir.',
        ),
        copy(
          'The current guide also documents child-property overrides, including URL-prefix properties. Check the effective setting for the section you intend to change, not just the domain-level screen. Record the exact property and any override. An owner of the top-level domain can see a notification when a child property overrides its setting.',
          'La guía actual también explica las excepciones en propiedades secundarias, incluidas las de prefijo de URL. Comprueba el ajuste efectivo de la sección que quieres cambiar, además de la pantalla del dominio. Registra la propiedad exacta y cualquier excepción. El propietario del dominio principal recibe una notificación cuando una propiedad secundaria cambia el ajuste heredado.',
          'Güncel rehber, URL ön eki mülkleri dahil alt mülklerin farklı ayar kullanmasını da açıklar. Yalnızca alan adı ekranını değil, değiştirmek istediğiniz bölümde geçerli olan ayarı kontrol edin. Tam mülk adını ve varsa istisnayı kaydedin. Üst düzey alan adı sahibi, bir alt mülk ayarı değiştirdiğinde bildirim görür.',
        ),
      ],
    },
    {
      id: 'matching-control',
      title: copy(
        'Choose the control that matches the problem',
        'Elige el control que corresponda al problema',
        'Soruna uygun kontrolü seçin',
      ),
      paragraphs: [
        copy(
          '[Google’s overview of content controls](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share) separates AI participation, search exclusion and restricted access. Do not add several restrictions at once just because they all mention bots. Each one has a different consequence.',
          '[El resumen de Google sobre controles de contenido](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share) distingue la participación en IA, la exclusión de la Búsqueda y el acceso restringido. No combines varias restricciones solo porque todas mencionen robots. Cada una tiene consecuencias distintas.',
          '[Google’ın içerik kontrolleri özeti](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share), yapay zekâ katılımını, aramadan çıkarılmayı ve erişim kısıtlamasını ayırır. Hepsi botlardan söz ediyor diye birden fazla kısıtlamayı aynı anda uygulamayın. Her birinin sonucu farklıdır.',
        ),
        copy(
          'For text previews, [Google’s robots metadata specification](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#nosnippet) explains that nosnippet also removes ordinary text snippets and prevents direct use of the page content in AI Overviews and AI Mode. It is broader than an AI-only choice. A developer can review data-nosnippet when the concern is a particular passage, including its effect on search snippets.',
          'Para las vistas previas, [la especificación de metadatos robots de Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#nosnippet) explica que nosnippet también elimina los fragmentos de texto habituales e impide usar directamente el contenido de la página en AI Overviews y el Modo IA. Su alcance supera la IA. Si preocupa un pasaje concreto, un desarrollador puede revisar data-nosnippet y su efecto en los fragmentos de búsqueda.',
          'Metin önizlemeleri için [Google’ın robots meta verisi belirtimi](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#nosnippet), nosnippet ayarının normal metin snippet’lerini de kaldırdığını ve sayfa içeriğinin AI Overviews ile Yapay Zekâ Modu’nda doğrudan kullanılmasını engellediğini açıklar. Bu seçenek yalnızca yapay zekâyı kapsamaz. Sorun belirli bir metin parçasıysa geliştirici, data-nosnippet seçeneğini ve arama snippet’lerine etkisini inceleyebilir.',
        ),
      ],
      bullets: [
        copy(
          'Training concern: review the separate provider controls in our [AI crawler policy guide](/blog/ai-crawler-policy-training-search). A Search AI opt-out does not stop AI training.',
          'Entrenamiento: revisa los controles de cada proveedor en nuestra [guía de políticas de rastreadores de IA](/blog/ai-crawler-policy-training-search). Excluirse de la IA de la Búsqueda no detiene el entrenamiento.',
          'Eğitim endişesi: [Yapay zekâ tarayıcı politikası rehberimizdeki](/blog/ai-crawler-policy-training-search) sağlayıcıya özel kontrolleri inceleyin. Arama yapay zekâ kapsamından çıkmak eğitimi durdurmaz.',
        ),
        copy(
          'Search removal: noindex addresses inclusion in Google Search overall. Do not use it when the intention is to keep ordinary search eligibility.',
          'Retirada de la Búsqueda: noindex afecta a la inclusión en Google Search en general. No lo uses si quieres conservar la posibilidad de aparecer en la búsqueda habitual.',
          'Aramadan kaldırma: noindex, Google Arama genelinde dahil edilmeyi etkiler. Normal arama uygunluğunu korumak istiyorsanız bu seçeneği kullanmayın.',
        ),
        copy(
          'Private material: protect access to the content itself. Neither a search setting nor a crawler preference makes a public document confidential.',
          'Material privado: protege el acceso al contenido. Ni un ajuste de búsqueda ni una preferencia de rastreo convierten un documento público en confidencial.',
          'Özel içerik: içeriğin kendisine erişimi koruyun. Bir arama ayarı veya tarayıcı tercihi, herkese açık belgeyi gizli hâle getirmez.',
        ),
      ],
    },
    {
      id: 'decision-record',
      title: copy(
        'Save a baseline and a reason to reconsider',
        'Guarda una referencia y un motivo para reconsiderar',
        'Başlangıç verilerini ve yeniden değerlendirme nedenini kaydedin',
      ),
      paragraphs: [
        copy(
          '[Google’s generative AI performance report guide](https://support.google.com/webmasters/answer/16984139?hl=en) describes impressions and page, country, device and date views. Inspect the metrics actually available in your property. Our [Search Console AI reporting guide](/blog/search-console-ai-report) explains why impressions alone cannot tell you how many qualified inquiries those appearances produced.',
          '[La guía de Google del informe de rendimiento de IA generativa](https://support.google.com/webmasters/answer/16984139?hl=en) describe impresiones y vistas por página, país, dispositivo y fecha. Revisa las métricas disponibles en tu propiedad. Nuestra [guía de informes de IA de Search Console](/blog/search-console-ai-report) explica por qué las impresiones por sí solas no revelan cuántas consultas cualificadas generaron esas apariciones.',
          '[Google’ın üretken yapay zekâ performans raporu rehberi](https://support.google.com/webmasters/answer/16984139?hl=en), gösterimleri ve sayfa, ülke, cihaz, tarih görünümlerini açıklar. Mülkünüzde gerçekten bulunan metrikleri inceleyin. [Search Console yapay zekâ raporlama rehberimiz](/blog/search-console-ai-report), gösterimlerin tek başına kaç nitelikli başvuru getirdiğini neden açıklayamadığını anlatır.',
        ),
        copy(
          'Save comparable completed periods for the affected pages, alongside overall Search clicks and confirmed business actions. Note campaigns, seasonal demand and site changes. Choose a review date and a reason to restore inclusion before making the change. A before-and-after difference remains observational when other conditions changed too.',
          'Guarda periodos completos comparables de las páginas afectadas, junto con los clics totales de la Búsqueda y las acciones comerciales confirmadas. Anota campañas, estacionalidad y cambios del sitio. Antes de modificar el ajuste, fija una fecha de revisión y un motivo para volver a incluir el contenido. Una diferencia posterior sigue siendo observacional si también cambiaron otras condiciones.',
          'Etkilenen sayfalar için karşılaştırılabilir tamamlanmış dönemleri, toplam Arama tıklamaları ve doğrulanmış iş sonuçlarıyla birlikte saklayın. Kampanyaları, mevsimsel talebi ve site değişikliklerini not edin. Ayarı değiştirmeden önce bir inceleme tarihi ve yeniden dahil etme gerekçesi belirleyin. Diğer koşullar da değiştiyse önce ve sonra arasındaki fark yalnızca gözlemsel kalır.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a publisher with two sections',
          'Ejemplo ilustrativo: una web con dos secciones',
          'Açıklayıcı örnek: iki bölümlü bir yayıncı sitesi',
        ),
        text: copy(
          'A fictional publisher wants its public research excluded from Search AI features but wants its service pages included. Before changing the domain setting, the owner checks the research URL-prefix property and its inheritance. The decision record names that section, the owner and the review date. It records exclusion as the intended result, without forecasting extra sales.',
          'Una web ficticia quiere excluir sus investigaciones públicas de las funciones de IA de la Búsqueda y mantener incluidas sus páginas de servicios. Antes de cambiar el ajuste del dominio, el responsable revisa la propiedad de prefijo de URL de investigación y su herencia. Registra la sección, el responsable y la fecha de revisión. El resultado buscado es la exclusión, sin pronosticar más ventas.',
          'Kurgusal bir yayıncı, herkese açık araştırmalarını Arama yapay zekâ özelliklerinden çıkarmak, hizmet sayfalarını ise dahil tutmak istiyor. Alan adı ayarını değiştirmeden önce sorumlu kişi, araştırma bölümünün URL ön eki mülkünü ve devraldığı ayarı kontrol ediyor. Karar kaydında bölüm, sorumlu ve inceleme tarihi belirtiliyor. Beklenen sonuç kapsamdan çıkarılma; ek satış tahmini yapılmıyor.',
        ),
      },
    },
    {
      id: 'verify-decision',
      title: copy(
        'Verify the decision at the agreed scope',
        'Verifica la decisión en el ámbito acordado',
        'Kararı belirlenen kapsamda doğrulayın',
      ),
      paragraphs: [
        copy(
          'After saving, reopen the relevant property and check its effective choice. Allow for propagation and caching rather than declaring failure from an immediate search. Keep dated observations of the affected section and one section meant to remain included. Record the exact cited URL: another publisher’s page is outside your property’s control.',
          'Después de guardar, vuelve a abrir la propiedad y comprueba su elección efectiva. Ten en cuenta la propagación y la caché antes de declarar un fallo por una búsqueda inmediata. Conserva observaciones fechadas de la sección afectada y de otra que deba seguir incluida. Registra la URL citada exacta: una página de otro editor queda fuera del control de tu propiedad.',
          'Kaydettikten sonra ilgili mülkü yeniden açıp geçerli seçimi kontrol edin. Hemen yaptığınız aramayı başarısızlık saymadan önce yayılma ve önbellek süresini hesaba katın. Etkilenen bölümün ve dahil kalması gereken bir bölümün tarihli gözlemlerini saklayın. Kaynak gösterilen tam URL’yi kaydedin: başka bir yayıncının sayfası sizin mülk ayarınızın dışındadır.',
        ),
        copy(
          'At the review, separate whether the setting matches your policy from whether the business outcome improved. A missing citation in one answer cannot prove complete exclusion. If the scope is wrong, correct the responsible property setting and record the new date. Citevia’s [technical SEO service](/services/seo) can help connect the intended policy with the site checks.',
          'En la revisión, distingue si el ajuste cumple tu política de si mejoró el resultado comercial. La ausencia de una cita en una respuesta no prueba una exclusión completa. Si el alcance es incorrecto, corrige el ajuste de la propiedad responsable y registra la nueva fecha. El [servicio de SEO técnico de Citevia](/services/seo) puede ayudarte a conectar la política deseada con las comprobaciones del sitio.',
          'İncelemede, ayarın politikanıza uyup uymadığını iş sonucunun iyileşip iyileşmediğinden ayrı değerlendirin. Tek bir yanıtta atıf olmaması tam dışlanmayı kanıtlamaz. Kapsam yanlışsa ilgili mülk ayarını düzeltip yeni tarihi kaydedin. [Citevia’nın teknik SEO hizmeti](/services/seo), hedeflenen politikayı site kontrolleriyle ilişkilendirmenize yardımcı olabilir.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Practical questions before a Google AI opt-out',
      'Preguntas antes de excluir tu web de la IA de Google',
      'Google yapay zekâ kapsamından çıkmadan önce sorulan sorular',
    ),
    items: [
      {
        question: copy(
          'Can I change one section without excluding the whole domain?',
          '¿Puedo cambiar una sección sin excluir todo el dominio?',
          'Tüm alan adını çıkarmadan bir bölümü değiştirebilir miyim?',
        ),
        answer: copy(
          'Google currently documents overrides for child properties, including URL-prefix properties. Check the intended section’s property and inherited value before changing it. Coordinate with the domain owner and verify the effective settings for both the changed section and the sections meant to remain included.',
          'Google documenta actualmente excepciones para propiedades secundarias, incluidas las de prefijo de URL. Revisa la propiedad de la sección y el valor heredado antes de cambiarlo. Coordínate con el propietario del dominio y comprueba los ajustes efectivos tanto de la sección modificada como de las que deben seguir incluidas.',
          'Google şu anda URL ön eki mülkleri dahil alt mülkler için farklı ayar kullanımını belgeliyor. Değişiklikten önce ilgili bölümün mülkünü ve devraldığı değeri kontrol edin. Alan adı sahibiyle koordinasyon kurun; hem değişen bölümün hem de dahil kalması gereken bölümlerin geçerli ayarlarını doğrulayın.',
        ),
      },
      {
        question: copy(
          'Does this also stop model training or other assistants?',
          '¿Esto también detiene el entrenamiento o afecta a otros asistentes?',
          'Bu işlem model eğitimini veya diğer asistanları da durdurur mu?',
        ),
        answer: copy(
          'No. This setting governs the listed Google Search AI features. Review Google-Extended for the Google uses it covers, and each other provider’s documented controls separately. Keep training and search decisions in different fields so an owner can see what each choice actually permits.',
          'No. Este ajuste regula las funciones indicadas de IA de Google Search. Revisa Google-Extended para los usos de Google que abarca y, por separado, los controles documentados de los demás proveedores. Registra entrenamiento y búsqueda en campos distintos para que el responsable vea qué permite cada elección.',
          'Hayır. Bu ayar, listelenen Google Arama yapay zekâ özelliklerini yönetir. Google-Extended’in kapsadığı Google kullanımlarını ve diğer sağlayıcıların belgelenmiş kontrollerini ayrı ayrı inceleyin. Sorumlunun her seçimin neye izin verdiğini görebilmesi için eğitim ve arama kararlarını farklı alanlara kaydedin.',
        ),
      },
      {
        question: copy(
          'Does a missing AI report mean we have already opted out?',
          '¿La ausencia del informe de IA significa que ya estamos excluidos?',
          'Yapay zekâ raporu görünmüyorsa zaten kapsam dışında mıyız?',
        ),
        answer: copy(
          'Not necessarily. Google says insufficient impressions are a usual reason the report is absent. Read the effective control setting directly. Then check the correct property and reporting period. A missing report alone cannot tell you whether an exclusion, low visibility or another condition explains the absence.',
          'No necesariamente. Google indica que la falta de impresiones suficientes suele explicar que el informe no aparezca. Consulta directamente el ajuste efectivo. Después verifica la propiedad y el periodo correctos. La ausencia del informe no permite distinguir por sí sola entre exclusión, poca visibilidad u otra condición.',
          'Şart değil. Google, raporun görünmemesinin yaygın nedeninin yetersiz gösterim olduğunu belirtir. Geçerli kontrol ayarını doğrudan okuyun. Ardından doğru mülkü ve raporlama dönemini kontrol edin. Raporun olmaması tek başına dışlanma, düşük görünürlük veya başka bir koşul arasında ayrım yapmaz.',
        ),
      },
      {
        question: copy(
          'Why might an answer still mention our brand after exclusion?',
          '¿Por qué una respuesta puede seguir mencionando la marca tras excluirnos?',
          'Kapsamdan çıktıktan sonra bir yanıt neden markamızdan söz edebilir?',
        ),
        answer: copy(
          'A third-party source can still discuss your business. Save the answer, date and linked source before concluding the control failed. Your setting does not remove other publishers’ pages or erase your brand from discussion. Investigate a remaining link to your own content against the relevant property scope and change time.',
          'Una fuente externa puede seguir hablando de tu negocio. Guarda la respuesta, la fecha y la fuente enlazada antes de concluir que el control falló. Tu ajuste no retira páginas ajenas ni borra la marca de las conversaciones. Si queda un enlace a tu contenido, comprueba el alcance de la propiedad y cuándo cambió el ajuste.',
          'Üçüncü taraf bir kaynak işletmenizden söz etmeye devam edebilir. Kontrolün çalışmadığına karar vermeden önce yanıtı, tarihi ve bağlantı verilen kaynağı saklayın. Ayarınız diğer yayıncıların sayfalarını kaldırmaz veya markanızı tartışmalardan silmez. Kendi içeriğinize kalan bağlantıyı ilgili mülk kapsamı ve değişiklik zamanıyla karşılaştırın.',
        ),
      },
      {
        question: copy(
          'Will switching back restore our previous citations?',
          '¿Volver a incluirnos recuperará nuestras citas anteriores?',
          'Yeniden dahil olmak önceki atıflarımızı geri getirir mi?',
        ),
        answer: copy(
          'Do not promise that result. Restoring inclusion changes the participation choice; it does not reserve a place in future answers. Save the reversal date, verify the effective setting and review later observations under the same conditions. Keep ordinary search performance and business outcomes separate from sampled citations.',
          'No prometas ese resultado. Volver a incluir el contenido cambia la decisión de participación; no reserva un lugar en futuras respuestas. Guarda la fecha, verifica el ajuste efectivo y revisa observaciones posteriores en condiciones comparables. Separa el rendimiento de la búsqueda habitual y los resultados comerciales de las citas observadas.',
          'Bu sonucu vaat etmeyin. Yeniden dahil olmak katılım tercihini değiştirir; gelecekteki yanıtlarda yer ayırmaz. Geri dönüş tarihini saklayın, geçerli ayarı doğrulayın ve sonraki gözlemleri aynı koşullarda inceleyin. Normal arama performansını ve iş sonuçlarını örneklemdeki atıflardan ayrı tutun.',
        ),
      },
    ],
  },
};

copy(
  `${googleAiOptOut.seoTitle} | Citevia`,
  `${translations.es[googleAiOptOut.seoTitle]} | Citevia`,
  `${translations.tr[googleAiOptOut.seoTitle]} | Citevia`,
);

export const googleAiOptOutTranslations = translations;
export const googleAiOptOutFragments = fragments;
