import { createArticleCopy } from '../i18n/article-copy.js';
const { copy, translations, fragments } = createArticleCopy();

export const searchConsoleAiReport = {
  translations,
  slug: 'search-console-ai-report',
  title: copy(
    'Search Console AI report: turn impressions into decisions',
    'Informe de IA de Search Console: de impresiones a decisiones',
    'Search Console yapay zekâ raporu: gösterimlerden kararlara',
  ),
  seoTitle: copy(
    'Search Console AI Report: A Practical Guide',
    'Informe de IA de Search Console: guía práctica',
    'Search Console Yapay Zekâ Raporu Rehberi',
  ),
  focusKeyphrase: copy(
    'Search Console AI report',
    'informe de IA de Search Console',
    'Search Console yapay zekâ raporu',
  ),
  description: copy(
    'Use the Search Console AI report to review visible pages, compare consistent periods and investigate changes without mistaking impressions for traffic.',
    'Usa el informe de IA de Search Console para revisar páginas, comparar periodos e investigar cambios sin confundir las impresiones con visitas al sitio.',
    'Search Console yapay zekâ raporuyla sayfaları inceleyin, tutarlı dönemleri karşılaştırın ve gösterimleri ziyaret sanmadan değişimlerin nedenini araştırın.',
  ),
  category: 'MEASUREMENT',
  published: '2026-11-06',
  updated: '2026-11-06',
  relatedService: 'geo-reporting-and-analytics',
  takeaway: copy(
    'Use the Search Console AI report to find pages worth reviewing and to monitor their Google AI visibility under consistent filters. Its impressions do not measure visits, leads or the accuracy of an answer. Keep those questions separate, investigate changes before rewriting content, and finish each review with one evidence-backed action.',
    'Usa el informe de IA de Search Console para identificar páginas que conviene revisar y seguir su visibilidad en la IA de Google con filtros consistentes. Las impresiones no miden visitas, oportunidades comerciales ni la exactitud de una respuesta. Separa esas preguntas, investiga los cambios antes de reescribir contenido y termina cada revisión con una acción respaldada por evidencia.',
    'Search Console yapay zekâ raporunu, incelenecek sayfaları bulmak ve Google yapay zekâ görünürlüğünü tutarlı filtrelerle izlemek için kullanın. Gösterimler; ziyaretleri, satış fırsatlarını veya bir yanıtın doğruluğunu ölçmez. Bu soruları ayrı değerlendirin, içeriği yeniden yazmadan önce değişimleri araştırın ve her incelemeyi kanıta dayalı tek bir eylemle tamamlayın.',
  ),
  sections: [
    {
      id: 'report-boundaries',
      title: copy(
        'Read the Search Console AI report within its limits',
        'Interpreta el informe de IA de Search Console dentro de sus límites',
        'Search Console yapay zekâ raporunun sınırlarını bilin',
      ),
      paragraphs: [
        copy(
          'An [August 17, 2026 discussion about using the report](https://www.reddit.com/r/DigitalMarketing/comments/1vqyhav/has_anyone_started_using_googles_generative_ai/) asks whether it changes real SEO decisions. An [August 22 request for a clicks column](https://support.google.com/webmasters/thread/461417137/clicks-column-should-be-mention-in-generative-ai-feature-tab-in-gsc-next-to-impressions?hl=en) exposes a related reporting gap. These are public questions, not evidence that more impressions produce more business.',
          'Un [debate del 17 de agosto de 2026 sobre el uso del informe](https://www.reddit.com/r/DigitalMarketing/comments/1vqyhav/has_anyone_started_using_googles_generative_ai/) pregunta si cambia decisiones reales de SEO. Una [petición del 22 de agosto para añadir una columna de clics](https://support.google.com/webmasters/thread/461417137/clicks-column-should-be-mention-in-generative-ai-feature-tab-in-gsc-next-to-impressions?hl=en) revela una carencia relacionada. Son preguntas públicas, no pruebas de que más impresiones generen más negocio.',
          'Bir [17 Ağustos 2026 tarihli rapor kullanımı tartışması](https://www.reddit.com/r/DigitalMarketing/comments/1vqyhav/has_anyone_started_using_googles_generative_ai/), raporun gerçek SEO kararlarını değiştirip değiştirmediğini soruyor. Bir [22 Ağustos tarihli tıklama sütunu talebi](https://support.google.com/webmasters/thread/461417137/clicks-column-should-be-mention-in-generative-ai-feature-tab-in-gsc-next-to-impressions?hl=en) ise ilgili bir raporlama eksikliğini gösteriyor. Bunlar kamuya açık sorulardır; daha fazla gösterimin daha fazla iş getirdiğinin kanıtı değildir.',
        ),
        copy(
          '[Google’s report documentation](https://support.google.com/webmasters/answer/16984139?hl=en) covers AI Overviews and AI Mode together, with impressions grouped by page, country, device or date. It does not supply a query list or a separate clicks metric. Treat it as a view of displayed links, not a transcript of what an assistant said about your brand.',
          '[La documentación del informe de Google](https://support.google.com/webmasters/answer/16984139?hl=en) reúne AI Overviews y AI Mode, con impresiones agrupadas por página, país, dispositivo o fecha. No ofrece una lista de consultas ni una métrica de clics separada. Trátalo como una vista de enlaces mostrados, no como una transcripción de lo que un asistente dijo sobre tu marca.',
          '[Google’ın rapor dokümantasyonu](https://support.google.com/webmasters/answer/16984139?hl=en), AI Overviews ve AI Mode verilerini birlikte ele alır; gösterimleri sayfa, ülke, cihaz veya tarihe göre gruplar. Sorgu listesi veya ayrı bir tıklama metriği sunmaz. Raporu, asistanın markanız hakkında söylediklerinin dökümü olarak değil, gösterilen bağlantıların bir görünümü olarak değerlendirin.',
        ),
        copy(
          '[Google’s launch announcement](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) says this data is already included in overall performance reporting. Do not add the AI total to the overall total as extra reach. The announcement’s August 31, 2026 update confirms worldwide rollout; an older article describing a limited test may now mislead your team.',
          '[El anuncio de lanzamiento de Google](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) indica que estos datos ya forman parte del informe general de rendimiento. No sumes el total de IA al total general como alcance adicional. La actualización del 31 de agosto de 2026 confirma el despliegue mundial; un artículo antiguo que describa una prueba limitada puede confundir al equipo.',
          '[Google’ın kullanıma sunma duyurusu](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), bu verilerin genel performans raporuna zaten dahil olduğunu belirtir. Yapay zekâ toplamını ek erişim olarak genel toplama eklemeyin. Duyurunun 31 Ağustos 2026 güncellemesi dünya çapında kullanıma açıldığını doğrular; sınırlı bir denemeyi anlatan eski bir yazı artık ekibinizi yanıltabilir.',
        ),
      ],
    },
    {
      id: 'consistent-comparison',
      title: copy(
        'Save a comparison you can repeat',
        'Guarda una comparación que puedas repetir',
        'Tekrarlayabileceğiniz bir karşılaştırma kaydedin',
      ),
      paragraphs: [
        copy(
          'Start with one business area, such as your implementation guides. Choose comparable completed periods and record the exact report settings with the export. Exclude preliminary dates from a firm conclusion. If a seasonal event or campaign changes demand, note it before attributing the movement to a page edit.',
          'Empieza por un área del negocio, como tus guías de implementación. Elige periodos completos y comparables, y registra la configuración exacta junto con la exportación. Excluye las fechas provisionales de una conclusión firme. Si un evento estacional o una campaña cambia la demanda, anótalo antes de atribuir el movimiento a una edición.',
          'Uygulama rehberleriniz gibi tek bir iş alanıyla başlayın. Tamamlanmış ve karşılaştırılabilir dönemler seçin; dışa aktarılan verilerle birlikte rapor ayarlarını da kaydedin. Kesin bir sonuca varırken geçici verileri dışarıda bırakın. Mevsimsel bir olay veya kampanya talebi değiştiriyorsa hareketi sayfa düzenlemesine bağlamadan önce bunu not edin.',
        ),
        copy(
          'Keep page rows separate from the unfiltered property total: their counting units differ. Two pages appearing in the same result can contribute to two page rows but one property impression. Also check the canonical URL before concluding that a renamed or redirected page disappeared from reporting.',
          'Separa las filas de páginas del total de la propiedad sin filtrar: usan unidades de recuento distintas. Dos páginas en un mismo resultado pueden contribuir a dos filas, pero a una sola impresión de la propiedad. Comprueba también la URL canónica antes de concluir que una página renombrada o redirigida desapareció del informe.',
          'Sayfa satırlarını filtresiz mülk toplamından ayrı tutun; sayım birimleri farklıdır. Aynı sonuçta görünen iki sayfa, iki sayfa satırına ancak tek bir mülk gösterimine katkıda bulunabilir. Yeniden adlandırılan veya yönlendirilen bir sayfanın rapordan kaybolduğu sonucuna varmadan önce kanonik adresi de kontrol edin.',
        ),
      ],
      bullets: [
        copy(
          'Scope: property, page group and reporting question.',
          'Alcance: propiedad, grupo de páginas y pregunta que quieres resolver.',
          'Kapsam: mülk, sayfa grubu ve raporun yanıtlayacağı soru.',
        ),
        copy(
          'Filters: search type, country, device and any URL restriction.',
          'Filtros: tipo de búsqueda, país, dispositivo y cualquier restricción de URL.',
          'Filtreler: arama türü, ülke, cihaz ve varsa adres kısıtlaması.',
        ),
        copy(
          'Period: matching date windows, export date and preliminary-data status.',
          'Periodo: intervalos comparables, fecha de exportación y estado de los datos provisionales.',
          'Dönem: karşılaştırılabilir tarih aralıkları, dışa aktarma tarihi ve geçici veri durumu.',
        ),
        copy(
          'Context: releases, redirects, campaigns and known reporting incidents.',
          'Contexto: publicaciones, redirecciones, campañas e incidencias conocidas del informe.',
          'Bağlam: yayınlar, yönlendirmeler, kampanyalar ve bilinen raporlama olayları.',
        ),
      ],
    },
    {
      id: 'clicks-and-outcomes',
      title: copy(
        'Compare clicks without inventing an AI click-through rate',
        'Compara clics sin inventar una tasa de clics de IA',
        'Yapay zekâ tıklama oranı uydurmadan tıklamaları karşılaştırın',
      ),
      paragraphs: [
        copy(
          '[Google’s performance counting rules](https://support.google.com/webmasters/answer/7042828?hl=en) count clicks on external links in both AI Overviews and AI Mode. Those clicks belong in broader Search reporting. Dividing all Search clicks by the dedicated AI impressions mixes different populations, so the result is not an AI click-through rate.',
          '[Las reglas de recuento de rendimiento de Google](https://support.google.com/webmasters/answer/7042828?hl=en) contabilizan los clics en enlaces externos tanto en AI Overviews como en AI Mode. Esos clics pertenecen al informe general de Search. Dividir todos los clics de Search entre las impresiones específicas de IA mezcla poblaciones distintas, por lo que no produce una tasa de clics de IA.',
          '[Google’ın performans sayım kuralları](https://support.google.com/webmasters/answer/7042828?hl=en), hem AI Overviews hem de AI Mode içindeki dış bağlantı tıklamalarını sayar. Bu tıklamalar genel Arama raporlamasına dahildir. Tüm Arama tıklamalarını özel yapay zekâ gösterimlerine bölmek farklı kitleleri karıştırır; sonuç yapay zekâ tıklama oranı değildir.',
        ),
        copy(
          'Review overall clicks for the same pages and periods alongside AI impressions, with separate labels. Then inspect actual visits and confirmed inquiries in your own measurement system. Our [guide to separating visibility metrics](/blog/measuring-ai-search-visibility) explains the datasets; our [inquiry qualification workflow](/blog/ai-referrals-to-qualified-inquiries) covers what happens after arrival.',
          'Revisa los clics generales de las mismas páginas y periodos junto a las impresiones de IA, con etiquetas separadas. Después examina las visitas reales y las consultas comerciales confirmadas en tu sistema de medición. Nuestra [guía para separar métricas de visibilidad](/blog/measuring-ai-search-visibility) explica los conjuntos de datos; nuestro [proceso de cualificación de consultas comerciales](/blog/ai-referrals-to-qualified-inquiries) cubre lo que ocurre tras la llegada.',
          'Aynı sayfa ve dönemlerin genel tıklamalarını yapay zekâ gösterimleriyle birlikte, ayrı etiketlerle inceleyin. Ardından kendi ölçüm sisteminizde gerçek ziyaretleri ve doğrulanmış iş taleplerini değerlendirin. [Görünürlük metriklerini ayırma rehberimiz](/blog/measuring-ai-search-visibility) veri kümelerini açıklar; [iş taleplerini değerlendirme sürecimiz](/blog/ai-referrals-to-qualified-inquiries) ise ziyaret sonrasını ele alır.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: two signals, one review',
          'Ejemplo ilustrativo: dos señales, una revisión',
          'Temsili örnek: iki sinyal, tek inceleme',
        ),
        text: copy(
          'A fictional supplier records rising AI impressions for an installation guide while total Search clicks fall. The team checks country and device changes, compares the guide’s search performance and reviews its next-step link. It improves a confusing compatibility explanation because the page needs it. It does not report that AI caused the click decline or that the edit will reverse it. This is an invented scenario, not a Citevia result.',
          'Un proveedor ficticio registra más impresiones de IA para una guía de instalación mientras bajan los clics totales de Search. El equipo comprueba los cambios por país y dispositivo, compara el rendimiento de la guía y revisa su enlace al siguiente paso. Mejora una explicación confusa de compatibilidad porque la página lo necesita. No afirma que la IA causara la caída ni que la edición vaya a revertirla. Es un escenario inventado, no un resultado de Citevia.',
          'Kurgusal bir tedarikçinin kurulum rehberinde yapay zekâ gösterimleri artarken toplam Arama tıklamaları düşer. Ekip, ülke ve cihaz değişimlerini kontrol eder, rehberin arama performansını karşılaştırır ve sonraki adım bağlantısını inceler. Sayfanın ihtiyacı olduğu için anlaşılmayan uyumluluk açıklamasını iyileştirir. Tıklama düşüşüne yapay zekânın yol açtığını veya düzenlemenin bunu tersine çevireceğini iddia etmez. Bu kurgu senaryo, bir Citevia sonucu değildir.',
        ),
      },
    },
    {
      id: 'diagnose-change',
      title: copy(
        'Check reporting changes before changing the page',
        'Comprueba el informe antes de cambiar la página',
        'Sayfayı değiştirmeden önce raporlamayı kontrol edin',
      ),
      paragraphs: [
        copy(
          'Before reacting to a sharp drop, consult [Google’s Search Console data-anomaly log](https://support.google.com/webmasters/answer/6211453?hl=en). It records an August 13–17, 2026 logging issue affecting generative AI Search impressions, with missing data subsequently restored. That historical incident does not diagnose today’s change; it shows why reporting health belongs in the checklist.',
          'Antes de reaccionar a una caída brusca, consulta el [registro de anomalías de datos de Search Console de Google](https://support.google.com/webmasters/answer/6211453?hl=en). Documenta un problema de registro del 13 al 17 de agosto de 2026 que afectó a las impresiones de IA generativa en Search; después se restauraron los datos. Ese incidente histórico no explica el cambio actual, pero muestra por qué conviene comprobar el estado del informe.',
          'Ani bir düşüşe tepki vermeden önce [Google’ın Search Console veri anormallikleri kaydını](https://support.google.com/webmasters/answer/6211453?hl=en) inceleyin. Kayıtta, 13–17 Ağustos 2026 tarihlerinde Arama üretken yapay zekâ gösterimlerini etkileyen ve eksik verileri daha sonra geri yüklenen bir kayıt sorunu yer alır. Bu geçmiş olay bugünkü değişimi açıklamaz; raporlamanın sağlığını neden kontrol etmeniz gerektiğini gösterir.',
        ),
        copy(
          'Next, check whether the change affects one page or a wider group. Confirm that important pages still open correctly and that no release changed their indexing, canonical or access settings. If access is uncertain, use our [AI visibility investigation playbook](/blog/ai-visibility-audit-playbook) to organize the evidence. Keep an unexplained change open instead of assigning it a convenient cause.',
          'Después, comprueba si el cambio afecta a una página o a un grupo más amplio. Confirma que las páginas importantes abren correctamente y que ninguna publicación cambió su indexación, canonical o acceso. Si tienes dudas sobre el acceso, usa nuestro [método para investigar la visibilidad en IA](/blog/ai-visibility-audit-playbook) para organizar la evidencia. Mantén abierto un cambio sin explicar en lugar de atribuirle una causa conveniente.',
          'Ardından değişimin tek bir sayfayı mı, daha geniş bir grubu mu etkilediğini kontrol edin. Önemli sayfaların doğru açıldığını ve hiçbir yayının dizine ekleme, kanonik adres veya erişim ayarlarını değiştirmediğini doğrulayın. Erişim belirsizse kanıtları düzenlemek için [yapay zekâ görünürlüğü inceleme planımızı](/blog/ai-visibility-audit-playbook) kullanın. Açıklanamayan bir değişime uygun görünen bir neden atamak yerine incelemeyi açık tutun.',
        ),
      ],
    },
    {
      id: 'choose-action',
      title: copy(
        'Choose an action the evidence supports',
        'Elige una acción respaldada por la evidencia',
        'Kanıtın desteklediği bir eylem seçin',
      ),
      paragraphs: [
        copy(
          'Use impressions to prioritize inspection, then choose the action from what you find. Correct an outdated fact. Repair a broken next step. Improve an explanation that buyers cannot use. Leave a useful, accurate page alone when the only concern is a short fluctuation. The report is a starting point for judgment, not an instruction to publish more pages.',
          'Usa las impresiones para priorizar la revisión y elige la acción según lo que encuentres. Corrige un dato desactualizado. Repara un siguiente paso que no funciona. Mejora una explicación que no ayuda al comprador. Conserva una página útil y correcta cuando la única preocupación sea una fluctuación breve. El informe ayuda a decidir; no ordena publicar más páginas.',
          'Gösterimleri inceleme önceliğini belirlemek için kullanın; eylemi bulgulara göre seçin. Eski bir bilgiyi düzeltin. Çalışmayan sonraki adımı onarın. Alıcıların kullanamadığı bir açıklamayı iyileştirin. Tek endişe kısa süreli dalgalanmaysa yararlı ve doğru bir sayfayı değiştirmeyin. Rapor, değerlendirme için başlangıç noktasıdır; daha fazla sayfa yayımlama talimatı değildir.',
        ),
        copy(
          'Close with the observation, proposed explanation, supporting evidence, owner and review date. Label an untested explanation as a hypothesis. Citevia’s [reporting and analytics service](/services/geo-reporting-and-analytics) can help connect those records to a maintainable review. No impression trend or editorial checklist guarantees future citations, rankings or revenue.',
          'Cierra con la observación, la explicación propuesta, la evidencia, el responsable y la fecha de revisión. Identifica como hipótesis una explicación sin comprobar. El [servicio de informes y analítica de Citevia](/services/geo-reporting-and-analytics) puede conectar esos registros con una revisión sostenible. Ninguna tendencia de impresiones ni lista editorial garantiza citas, posiciones o ingresos futuros.',
          'Gözlem, önerilen açıklama, destekleyici kanıt, sorumlu ve inceleme tarihiyle bitirin. Sınanmamış açıklamayı hipotez olarak işaretleyin. Citevia’nın [raporlama ve analitik hizmeti](/services/geo-reporting-and-analytics), bu kayıtları sürdürülebilir bir incelemeye bağlamanıza yardımcı olabilir. Hiçbir gösterim eğilimi veya editoryal kontrol listesi gelecekteki atıfları, sıralamaları ya da geliri garanti etmez.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Search Console AI reporting: practical questions',
      'Informes de IA en Search Console: preguntas prácticas',
      'Search Console yapay zekâ raporlaması: pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Why can I not see the generative AI report?',
          '¿Por qué no veo el informe de IA generativa?',
          'Üretken yapay zekâ raporunu neden göremiyorum?',
        ),
        answer: copy(
          'Google says insufficient impressions are a usual reason. Check the correct property and whether your site is included in Search generative AI features. A missing report alone does not identify a technical fault or prove that no buyer has encountered your business through AI.',
          'Google indica que una causa habitual es no tener suficientes impresiones. Comprueba la propiedad correcta y si tu sitio está incluido en las funciones de IA generativa de Search. La ausencia del informe no identifica por sí sola un fallo técnico ni demuestra que ningún comprador haya encontrado tu negocio mediante IA.',
          'Google, yeterli gösterim olmamasını yaygın bir neden olarak belirtir. Doğru mülkü ve sitenizin Arama üretken yapay zekâ özelliklerine dahil olup olmadığını kontrol edin. Raporun bulunmaması tek başına teknik arızayı belirlemez veya hiçbir alıcının işletmenizle yapay zekâ üzerinden karşılaşmadığını kanıtlamaz.',
        ),
      },
      {
        question: copy(
          'Can I calculate AI click-through rate from total Search clicks?',
          '¿Puedo calcular la tasa de clics de IA con los clics totales de Search?',
          'Toplam Arama tıklamalarından yapay zekâ tıklama oranını hesaplayabilir miyim?',
        ),
        answer: copy(
          'No. Total Search clicks and dedicated AI impressions do not describe the same set of results. Show them separately. A ratio between them would not establish how often people clicked the AI links they saw.',
          'No. Los clics totales de Search y las impresiones específicas de IA no describen el mismo conjunto de resultados. Muéstralos por separado. Dividirlos no permite saber con qué frecuencia se hizo clic en los enlaces de IA mostrados.',
          'Hayır. Toplam Arama tıklamaları ve özel yapay zekâ gösterimleri aynı sonuç kümesini tanımlamaz. Bunları ayrı gösterin. Aralarındaki oran, insanların gördükleri yapay zekâ bağlantılarına ne sıklıkla tıkladığını ortaya koymaz.',
        ),
      },
      {
        question: copy(
          'Why do page rows add up differently from the chart?',
          '¿Por qué las filas de páginas suman algo distinto al gráfico?',
          'Sayfa satırlarının toplamı neden grafikten farklı?',
        ),
        answer: copy(
          'The unfiltered chart aggregates by property, while page rows aggregate by page. Several pages in one result can therefore produce different totals. Preserve the aggregation and filters in your report before treating a discrepancy as lost data.',
          'El gráfico sin filtrar agrupa por propiedad, mientras que las filas agrupan por página. Varias páginas en un resultado pueden producir totales distintos. Conserva la agrupación y los filtros en tu informe antes de interpretar la diferencia como una pérdida de datos.',
          'Filtresiz grafik mülk bazında, sayfa satırları ise sayfa bazında toplar. Tek sonuçtaki birden fazla sayfa bu nedenle farklı toplamlar oluşturabilir. Farkı veri kaybı olarak değerlendirmeden önce toplama biçimini ve filtreleri raporunuzda koruyun.',
        ),
      },
      {
        question: copy(
          'Does an impression prove Google recommended my company?',
          '¿Una impresión demuestra que Google recomendó mi empresa?',
          'Bir gösterim Google’ın şirketimi önerdiğini kanıtlar mı?',
        ),
        answer: copy(
          'No. A displayed link does not establish the wording, factual accuracy or commercial recommendation in an answer. If those matter, collect a separate documented answer sample and inspect its sources. Do not claim that your sample recreates the exact historical impressions in Search Console.',
          'No. Un enlace mostrado no establece el texto, la exactitud ni la recomendación comercial de una respuesta. Si necesitas saberlo, recoge una muestra documentada de respuestas e inspecciona sus fuentes. No afirmes que reproduce las impresiones históricas exactas de Search Console.',
          'Hayır. Gösterilen bağlantı, yanıtın ifadelerini, doğruluğunu veya ticari önerisini ortaya koymaz. Bunlar önemliyse ayrı ve belgelenmiş bir yanıt örneklemi toplayıp kaynaklarını inceleyin. Örneklemin Search Console’daki geçmiş gösterimleri tam olarak yeniden oluşturduğunu iddia etmeyin.',
        ),
      },
      {
        question: copy(
          'Should I rewrite every page with declining AI impressions?',
          '¿Debo reescribir todas las páginas con menos impresiones de IA?',
          'Yapay zekâ gösterimleri düşen her sayfayı yeniden yazmalı mıyım?',
        ),
        answer: copy(
          'No. First rule out changed filters, incomplete dates, reporting incidents and URL changes. Then review the page’s usefulness and actual business role. Make a focused correction when you find a real problem; otherwise monitor comparable periods before committing to a rewrite.',
          'No. Descarta primero cambios de filtros, fechas incompletas, incidencias del informe y cambios de URL. Después revisa la utilidad de la página y su función real en el negocio. Haz una corrección concreta si encuentras un problema; de lo contrario, observa periodos comparables antes de reescribirla.',
          'Hayır. Önce değişen filtreleri, tamamlanmamış tarihleri, raporlama sorunlarını ve adres değişikliklerini kontrol edin. Ardından sayfanın yararını ve işletmedeki gerçek rolünü inceleyin. Gerçek bir sorun bulursanız odaklı bir düzeltme yapın; aksi halde yeniden yazmaya karar vermeden önce karşılaştırılabilir dönemleri izleyin.',
        ),
      },
    ],
  },
};

copy(
  `${searchConsoleAiReport.seoTitle} | Citevia`,
  `${translations.es[searchConsoleAiReport.seoTitle]} | Citevia`,
  `${translations.tr[searchConsoleAiReport.seoTitle]} | Citevia`,
);

export const searchConsoleTranslations = translations;
export const searchConsoleFragments = fragments;
