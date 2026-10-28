import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();
copy(
  'Printed documents on a desk beneath a reading lamp',
  'Documentos impresos sobre un escritorio bajo una lámpara de lectura',
  'Okuma lambasının altında, masanın üzerindeki basılı belgeler',
);

export const pdfSeoAiSearch = {
  translations,
  slug: 'pdf-seo-ai-search',
  title: copy(
    'PDF SEO for AI search: when to use HTML',
    'SEO para PDF y búsquedas con IA: cuándo usar HTML',
    'Yapay zekâ aramaları için PDF SEO: HTML ne zaman gerekir?',
  ),
  seoTitle: copy(
    'PDF SEO for AI Search: PDF, HTML or Both?',
    'SEO para PDF e IA: ¿PDF, HTML o ambos?',
    'Yapay Zekâ İçin PDF SEO: PDF mi, HTML mi?',
  ),
  focusKeyphrase: copy('PDF SEO', 'SEO para PDF', 'PDF için SEO'),
  description: copy(
    'Make PDF SEO useful for AI search. Choose PDF, HTML or both, handle duplicate versions, check download access and publish a report readers can actually use.',
    'Mejora el SEO para PDF en búsquedas con IA. Elige PDF, HTML o ambos, revisa versiones duplicadas y acceso, y publica informes que tus lectores puedan usar.',
    'Yapay zekâ aramalarında PDF SEO için PDF, HTML veya ikisini seçin. Yinelenen sürümleri ve dosya erişimini kontrol edip kullanışlı bir rapor yayımlayın.',
  ),
  category: 'TECHNICAL SEO',
  published: '2026-10-28',
  updated: '2026-10-28',
  relatedService: 'seo',
  takeaway: copy(
    'PDF SEO does not require converting every report into a web page. Google can index PDFs. Use HTML for information readers need to navigate or revisit as it changes; keep a PDF when a printable, downloadable edition serves a real purpose. If you publish both, decide whether they are equivalent versions or different resources before choosing indexing controls.',
    'El SEO para PDF no exige convertir cada informe en una página web. Google puede indexar archivos PDF. Usa HTML para información que los lectores necesitan consultar, recorrer o revisar cuando cambia; conserva el PDF si una edición imprimible y descargable resulta útil. Si publicas ambos formatos, decide si son versiones equivalentes o recursos distintos antes de elegir los controles de indexación.',
    'PDF SEO, her raporu web sayfasına dönüştürmenizi gerektirmez. Google PDF dosyalarını dizine ekleyebilir. Okurların gezinmesi veya değiştikçe yeniden incelemesi gereken bilgiler için HTML kullanın. Yazdırılabilir ve indirilebilir bir sürüm gerçek bir ihtiyacı karşılıyorsa PDF’yi koruyun. İkisini de yayımlıyorsanız dizine ekleme ayarlarını seçmeden önce bunların eşdeğer sürümler mi, farklı kaynaklar mı olduğuna karar verin.',
  ),
  sections: [
    {
      id: 'format-decision',
      title: copy(
        'Start PDF SEO with the reader’s task',
        'Empieza el SEO para PDF por la necesidad del lector',
        'PDF SEO’ya okurun ihtiyacıyla başlayın',
      ),
      paragraphs: [
        copy(
          '[An October 27, 2026 discussion about PDFs and AI search](https://www.reddit.com/r/seogrowth/comments/1xgthym/are_we_underestimating_pdfs_for_seo_and_ai_search/) asks whether teams optimize reports or treat them only as downloads. Replies raise printing, mobile reading, gated access and duplicate versions. Those are useful publication questions; the discussion is not evidence that PDFs earn more citations.',
          '[Un debate del 27 de octubre de 2026 sobre PDF y búsquedas con IA](https://www.reddit.com/r/seogrowth/comments/1xgthym/are_we_underestimating_pdfs_for_seo_and_ai_search/) pregunta si los equipos optimizan los informes o los tratan solo como descargas. Las respuestas plantean la impresión, la lectura móvil, el acceso restringido y las versiones duplicadas. Son preguntas editoriales útiles; el debate no demuestra que los PDF reciban más citas.',
          '[PDF ve yapay zekâ aramaları üzerine 27 Ekim 2026 tarihli bir tartışma](https://www.reddit.com/r/seogrowth/comments/1xgthym/are_we_underestimating_pdfs_for_seo_and_ai_search/), ekiplerin raporları optimize edip etmediğini veya yalnızca indirilecek dosyalar olarak görüp görmediğini sorguluyor. Yanıtlar yazdırma, mobil okuma, kısıtlı erişim ve yinelenen sürümleri gündeme getiriyor. Bunlar yararlı yayın sorularıdır; tartışma, PDF’lerin daha fazla kaynak gösterildiğini kanıtlamaz.',
        ),
        copy(
          'Choose HTML for a changing compatibility list, a comparison with several next steps, or a guide people need to read on a phone. Keep a PDF for a dated research edition or a worksheet designed for printing. Publish both only when each format has a job and someone can keep their facts aligned.',
          'Elige HTML para una lista de compatibilidad que cambia, una comparación con varios pasos siguientes o una guía que se leerá en el móvil. Conserva el PDF para una edición fechada de un estudio o una ficha imprimible. Publica ambos solo si cada formato cumple una función y alguien puede mantener sus datos coherentes.',
          'Değişen bir uyumluluk listesi, birkaç sonraki adım içeren bir karşılaştırma veya telefondan okunacak bir rehber için HTML seçin. Tarihli bir araştırma sürümü ya da yazdırılacak bir çalışma sayfası için PDF’yi koruyun. Her biçimin bir amacı varsa ve biri bilgileri tutarlı tutabilecekse ikisini birlikte yayımlayın.',
        ),
      ],
    },
    {
      id: 'indexing-and-ai',
      title: copy(
        'Separate format support from AI selection',
        'Distingue el formato admitido de la selección por IA',
        'Biçim desteğini yapay zekânın seçiminden ayırın',
      ),
      paragraphs: [
        copy(
          '[Google’s supported file types](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types) include PDF. Its documentation also explains that the response Content-Type helps identify the format. Ask your technical owner to inspect the actual file response, not just the page containing its download button.',
          '[Los tipos de archivo que admite Google](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types) incluyen PDF. Su documentación también explica que el Content-Type de la respuesta ayuda a identificar el formato. Pide al responsable técnico que revise la respuesta del propio archivo, además de la página con el botón de descarga.',
          '[Google’ın desteklediği dosya türleri](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types) arasında PDF de bulunur. Belgeler, yanıttaki Content-Type bilgisinin biçimi belirlemeye yardımcı olduğunu da açıklar. Teknik sorumludan indirme düğmesinin bulunduğu sayfanın yanı sıra dosyanın kendi yanıtını incelemesini isteyin.',
        ),
        copy(
          '[Google’s AI feature requirements](https://developers.google.com/search/docs/appearance/ai-features) require a supporting source to be indexed and eligible for a search snippet. Meeting those conditions does not guarantee selection. A supported file type is not an advantage by itself, and Google’s rules do not establish how every other assistant retrieves documents.',
          '[Los requisitos de Google para sus funciones de IA](https://developers.google.com/search/docs/appearance/ai-features) exigen que una fuente de apoyo esté indexada y pueda aparecer con un fragmento en los resultados. Cumplir esas condiciones no garantiza su selección. Que un formato sea compatible no supone una ventaja por sí solo, y las reglas de Google no describen cómo recuperan documentos todos los demás asistentes.',
          '[Google’ın yapay zekâ özellikleri için gereklilikleri](https://developers.google.com/search/docs/appearance/ai-features), destekleyici kaynağın dizine eklenmesini ve arama sonuçlarında özetle gösterilmeye uygun olmasını ister. Bu koşulları karşılamak seçilmeyi garanti etmez. Desteklenen bir dosya türü tek başına avantaj değildir; Google’ın kuralları diğer tüm asistanların belgeleri nasıl getirdiğini açıklamaz.',
        ),
      ],
    },
    {
      id: 'readable-report',
      title: copy(
        'Make the report readable before promoting it',
        'Haz que el informe sea legible antes de promocionarlo',
        'Raporu tanıtmadan önce okunabilir hâle getirin',
      ),
      paragraphs: [
        copy(
          'Try selecting and copying a representative page into plain text. Check headings, columns, footnotes and numbers. This is a quick diagnostic, not a complete accessibility audit. A visually polished report can still produce scrambled text or omit essential labels.',
          'Prueba a seleccionar y copiar una página representativa como texto sin formato. Revisa títulos, columnas, notas y cifras. Es una comprobación rápida, no una auditoría completa de accesibilidad. Un informe de diseño cuidado puede producir texto desordenado u omitir etiquetas esenciales.',
          'Temsilî bir sayfayı seçip düz metin olarak kopyalamayı deneyin. Başlıkları, sütunları, dipnotları ve sayıları kontrol edin. Bu hızlı bir tanılama yöntemidir; kapsamlı erişilebilirlik denetimi değildir. Görsel açıdan özenli bir raporun metni yine de karışabilir veya önemli etiketleri eksik kalabilir.',
        ),
        copy(
          '[W3C’s guidance on scanned PDFs](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7) explains how optical character recognition (OCR) can provide actual text. Verify the conversion and reading order rather than assuming OCR succeeded. Use the source document to repair errors when possible, and review the exported file again.',
          '[La guía del W3C sobre PDF escaneados](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7) explica cómo el reconocimiento óptico de caracteres (OCR) puede aportar texto real. Comprueba la conversión y el orden de lectura sin dar por hecho que el OCR funcionó. Corrige los errores en el documento original cuando sea posible y vuelve a revisar el archivo exportado.',
          '[W3C’nin taranmış PDF rehberi](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7), optik karakter tanımanın (OCR) gerçek metin sağlayabileceğini açıklar. OCR’ın başarılı olduğunu varsaymak yerine dönüşümü ve okuma sırasını doğrulayın. Mümkünse hataları kaynak belgede düzeltin ve dışa aktarılan dosyayı yeniden inceleyin.',
        ),
        copy(
          'Keep the authoring organization, edition date, method and limitations visible. Explain the important conclusion of each chart in nearby text. Our [guide to clear answers and supporting evidence](/blog/anatomy-of-a-citable-page) applies to the report’s substance as well as its web introduction.',
          'Mantén visibles la organización autora, la fecha de edición, el método y las limitaciones. Explica la conclusión importante de cada gráfico en texto cercano. Nuestra [guía de respuestas claras y pruebas que las respaldan](/blog/anatomy-of-a-citable-page) sirve tanto para el contenido del informe como para su presentación web.',
          'Hazırlayan kuruluşu, sürüm tarihini, yöntemi ve sınırlamaları görünür tutun. Her grafiğin önemli sonucunu yakındaki metinde açıklayın. [Açık yanıtlar ve destekleyici kanıtlar rehberimiz](/blog/anatomy-of-a-citable-page), raporun web tanıtımı kadar içeriği için de geçerlidir.',
        ),
      ],
    },
    {
      id: 'equivalent-versions',
      title: copy(
        'Choose a canonical only for equivalent versions',
        'Elige una URL canónica solo para versiones equivalentes',
        'Yalnızca eşdeğer sürümler için standart URL seçin',
      ),
      paragraphs: [
        copy(
          'When HTML and PDF contain duplicate or very similar content, choose the preferred search destination. [Google’s canonical documentation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) supports a rel="canonical" HTTP Link header for non-HTML files. Your developer can return that header with the PDF, pointing to the equivalent HTML URL. This is a preference signal, not a command.',
          'Si el HTML y el PDF contienen información duplicada o muy similar, elige el destino preferido para la búsqueda. [La documentación de Google sobre URL canónicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) admite un encabezado HTTP Link con rel="canonical" para archivos que no son HTML. Tu desarrollador puede devolverlo con el PDF, apuntando a la URL del HTML equivalente. Es una señal de preferencia, no una orden.',
          'HTML ve PDF aynı veya çok benzer içeriğe sahipse arama için tercih ettiğiniz hedefi seçin. [Google’ın standart URL belgeleri](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), HTML dışındaki dosyalar için rel="canonical" içeren HTTP Link başlığını destekler. Geliştiriciniz PDF yanıtında bu başlığı eşdeğer HTML adresine yönlendirebilir. Bu bir tercih sinyalidir, emir değildir.',
        ),
        copy(
          'A short landing-page summary is not automatically equivalent to a full report. If the PDF contains unique methods, findings or appendices, do not point it to that summary merely to funnel traffic. Give each resource a clear purpose and link them. Do not use noindex simply to express a canonical preference.',
          'Un resumen breve en una página de destino no equivale automáticamente al informe completo. Si el PDF contiene métodos, resultados o anexos exclusivos, no lo apuntes a ese resumen solo para canalizar tráfico. Asigna una función clara a cada recurso y enlázalos. No uses noindex solo para expresar una preferencia canónica.',
          'Bir açılış sayfasındaki kısa özet, raporun tamamına otomatik olarak eşdeğer değildir. PDF özgün yöntemler, bulgular veya ekler içeriyorsa yalnızca trafiği yönlendirmek için standart adresini bu özete çevirmeyin. Her kaynağa açık bir amaç verin ve aralarında bağlantı kurun. Sırf standart URL tercihini belirtmek için noindex kullanmayın.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a fictional industry report',
          'Ejemplo ilustrativo: un informe sectorial ficticio',
          'Açıklayıcı örnek: kurgusal bir sektör raporu',
        ),
        text: copy(
          'A fictional supplier publishes a full report as HTML and offers the same edition as a printable PDF. It chooses the HTML as the preferred search version and checks the PDF’s canonical response header. Its separate announcement contains only a short summary, so that announcement is not the target. An editor owns updates to both full versions. This is a proposed workflow, not a Citevia result.',
          'Un proveedor ficticio publica un informe completo en HTML y ofrece la misma edición en PDF imprimible. Elige el HTML como versión preferida para búsqueda y comprueba el encabezado canónico de la respuesta del PDF. Su anuncio independiente contiene solo un resumen breve, por lo que no es el destino. Un editor mantiene ambas versiones completas. Es un flujo propuesto, no un resultado de Citevia.',
          'Kurgusal bir tedarikçi, raporun tamamını HTML olarak yayımlar ve aynı sürümü yazdırılabilir PDF olarak sunar. Arama için HTML’yi tercih eder ve PDF yanıtındaki standart URL başlığını kontrol eder. Ayrı duyuru sayfası yalnızca kısa bir özet içerdiği için hedef o sayfa değildir. İki tam sürümün güncellemelerinden bir editör sorumludur. Bu önerilen bir iş akışıdır; Citevia sonucu değildir.',
        ),
      },
    },
    {
      id: 'download-access',
      title: copy(
        'Decide whether the file itself should be public',
        'Decide si el propio archivo debe ser público',
        'Dosyanın kendisinin herkese açık olup olmayacağına karar verin',
      ),
      paragraphs: [
        copy(
          'A form before a download does not establish that the file is private. Open the direct file URL in a signed-out session. If it remains accessible, anyone with that URL may be able to read it. For genuinely restricted material, protect the file itself with appropriate access controls.',
          'Un formulario previo a la descarga no demuestra que el archivo sea privado. Abre su URL directa sin iniciar sesión. Si sigue siendo accesible, cualquiera que tenga esa dirección podría leerlo. Para material realmente restringido, protege el propio archivo con controles de acceso adecuados.',
          'İndirmeden önce gösterilen bir form, dosyanın özel olduğunu kanıtlamaz. Dosyanın doğrudan adresini oturum açmadan ziyaret edin. Hâlâ erişilebiliyorsa adresi bilen herkes okuyabilir. Gerçekten kısıtlı materyaller için dosyanın kendisini uygun erişim kontrolleriyle koruyun.',
        ),
        copy(
          '[Google’s technical requirements](https://developers.google.com/search/docs/essentials/technical) explain that login-protected content is not crawled. If the report must stay restricted, publish an approved public explanation that stands on its own. Do not promise search access to evidence that visitors cannot reach.',
          '[Los requisitos técnicos de Google](https://developers.google.com/search/docs/essentials/technical) explican que no se rastrea el contenido protegido por inicio de sesión. Si el informe debe seguir restringido, publica una explicación pública aprobada que sea útil por sí misma. No prometas acceso desde búsquedas a pruebas que los visitantes no pueden consultar.',
          '[Google’ın teknik gereklilikleri](https://developers.google.com/search/docs/essentials/technical), oturum açma gerektiren içeriğin taranmadığını açıklar. Rapor kısıtlı kalacaksa tek başına yararlı, onaylanmış ve herkese açık bir açıklama yayımlayın. Ziyaretçilerin ulaşamadığı kanıtlara arama üzerinden erişim sözü vermeyin.',
        ),
        copy(
          'For a public PDF you intentionally want excluded from Google Search, [Google documents the X-Robots-Tag header](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag). A noindex instruction belongs on the PDF response, and Google must be able to crawl it to see that instruction. Noindex is not confidentiality protection. Our [crawler-policy guide](/blog/ai-crawler-policy-training-search) separates access decisions by provider and purpose.',
          'Para excluir deliberadamente de Google Search un PDF público, [Google documenta el encabezado X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag). La instrucción noindex debe estar en la respuesta del PDF, y Google debe poder rastrearlo para verla. Noindex no protege la confidencialidad. Nuestra [guía de políticas para rastreadores](/blog/ai-crawler-policy-training-search) distingue las decisiones de acceso según proveedor y finalidad.',
          'Herkese açık bir PDF’yi bilinçli olarak Google Arama dışında tutmak için [Google’ın belgelediği X-Robots-Tag başlığını](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) kullanabilirsiniz. noindex talimatı PDF yanıtında bulunmalı; Google da bu talimatı görmek için dosyayı tarayabilmelidir. noindex gizliliği korumaz. [Tarayıcı politikası rehberimiz](/blog/ai-crawler-policy-training-search), erişim kararlarını sağlayıcıya ve amaca göre ayırır.',
        ),
      ],
    },
    {
      id: 'release-checklist',
      title: copy(
        'Check one complete report journey',
        'Comprueba el recorrido completo de un informe',
        'Bir raporun tüm okuma yolculuğunu kontrol edin',
      ),
      paragraphs: [
        copy(
          'Start with one report buyers already use. Complete the checks below before expanding the archive. Citevia’s [SEO review service](/services/seo) can help connect the file-level checks with the surrounding website. Record any later citations separately; publication quality and observed AI selection are different outcomes.',
          'Empieza con un informe que tus compradores ya utilicen. Completa estas comprobaciones antes de ampliar el archivo. El [servicio de revisión SEO de Citevia](/services/seo) puede conectar las comprobaciones del archivo con el resto de la web. Registra las citas posteriores por separado: la calidad editorial y la selección observada por IA son resultados distintos.',
          'Alıcıların zaten kullandığı bir raporla başlayın. Arşivi genişletmeden önce aşağıdaki kontrolleri tamamlayın. [Citevia’nın SEO inceleme hizmeti](/services/seo), dosya kontrollerini web sitesinin geri kalanıyla birlikte değerlendirmenize yardımcı olabilir. Sonraki kaynak gösterimlerini ayrıca kaydedin; yayın kalitesi ve gözlemlenen yapay zekâ seçimi farklı sonuçlardır.',
        ),
      ],
      bullets: [
        copy(
          'Purpose: identify the reader, edition and reason for each format.',
          'Finalidad: identifica al lector, la edición y el motivo de cada formato.',
          'Amaç: okuru, sürümü ve her biçimin neden gerekli olduğunu belirleyin.',
        ),
        copy(
          'Content: check readable text, chart explanations, evidence and current links.',
          'Contenido: revisa el texto legible, las explicaciones de gráficos, las pruebas y los enlaces actuales.',
          'İçerik: okunabilir metni, grafik açıklamalarını, kanıtları ve güncel bağlantıları kontrol edin.',
        ),
        copy(
          'Access: inspect the final file URL, response headers and signed-out download.',
          'Acceso: inspecciona la URL final del archivo, los encabezados de respuesta y la descarga sin sesión.',
          'Erişim: son dosya adresini, yanıt başlıklarını ve oturum açmadan indirmeyi inceleyin.',
        ),
        copy(
          'Versions: confirm equivalent content before setting a canonical preference.',
          'Versiones: confirma que el contenido sea equivalente antes de definir una preferencia canónica.',
          'Sürümler: standart URL tercihi belirlemeden önce içeriklerin eşdeğer olduğunu doğrulayın.',
        ),
        copy(
          'Ownership: assign updates, preserve edition dates and check both formats after changes.',
          'Responsabilidad: asigna las actualizaciones, conserva las fechas de edición y revisa ambos formatos tras los cambios.',
          'Sorumluluk: güncellemeleri bir kişiye atayın, sürüm tarihlerini koruyun ve değişiklikten sonra iki biçimi de kontrol edin.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'PDF SEO: practical questions',
      'SEO para PDF: preguntas prácticas',
      'PDF SEO: uygulamaya yönelik sorular',
    ),
    items: [
      {
        question: copy(
          'Will converting a report to PDF earn more AI citations?',
          '¿Convertir un informe a PDF conseguirá más citas de IA?',
          'Bir raporu PDF’ye dönüştürmek daha fazla yapay zekâ kaynak gösterimi sağlar mı?',
        ),
        answer: copy(
          'There is no basis here for that promise. Google supports PDF indexing, but support does not guarantee indexing or selection as a source. Choose the format for the reader, then record actual citations with the question, date, assistant and source URL.',
          'No hay base aquí para prometerlo. Google admite la indexación de PDF, pero esa compatibilidad no garantiza la indexación ni la selección como fuente. Elige el formato pensando en el lector y registra las citas reales con la pregunta, fecha, asistente y URL de origen.',
          'Böyle bir söz vermek için burada bir dayanak yok. Google PDF dizine eklemeyi destekler; ancak bu destek dizine eklenmeyi veya kaynak olarak seçilmeyi garanti etmez. Biçimi okura göre seçin, ardından gerçek kaynak gösterimlerini soru, tarih, asistan ve kaynak adresiyle kaydedin.',
        ),
      },
      {
        question: copy(
          'Can a PDF use its short summary page as the canonical?',
          '¿Puede un PDF usar su página de resumen como URL canónica?',
          'Bir PDF’nin kısa özet sayfası standart URL olabilir mi?',
        ),
        answer: copy(
          'Only consider that relationship when the content is duplicate or very similar. A brief summary usually does not replace a full report with unique evidence. Link the two resources, or publish an equivalent full HTML version before choosing it as the preferred version.',
          'Considera esa relación solo cuando el contenido sea duplicado o muy similar. Un resumen breve normalmente no sustituye a un informe completo con pruebas exclusivas. Enlaza ambos recursos o publica una versión HTML completa y equivalente antes de elegirla como preferida.',
          'Bu ilişkiyi yalnızca içerik aynı veya çok benzerse değerlendirin. Kısa bir özet genellikle özgün kanıtlar içeren tam raporun yerini tutmaz. İki kaynağı birbirine bağlayın veya tercih edilen sürüm olarak seçmeden önce eşdeğer tam HTML sürümünü yayımlayın.',
        ),
      },
      {
        question: copy(
          'Does adding noindex to the download page exclude the PDF too?',
          '¿Poner noindex en la página de descarga excluye también el PDF?',
          'İndirme sayfasına noindex eklemek PDF’yi de arama dışında tutar mı?',
        ),
        answer: copy(
          'No. Inspect the PDF’s own response. For a non-HTML file, Google supports noindex through the X-Robots-Tag HTTP header. Keep the file crawlable so Google can read the instruction. Use access controls instead when the document must not be public.',
          'No. Inspecciona la respuesta del propio PDF. Para archivos que no son HTML, Google admite noindex mediante el encabezado HTTP X-Robots-Tag. Permite el rastreo del archivo para que Google lea la instrucción. Usa controles de acceso si el documento no debe ser público.',
          'Hayır. PDF’nin kendi yanıtını inceleyin. Google, HTML dışındaki dosyalarda HTTP X-Robots-Tag başlığı üzerinden noindex talimatını destekler. Google’ın talimatı okuyabilmesi için dosyayı taranabilir tutun. Belge herkese açık olmamalıysa erişim kontrolleri kullanın.',
        ),
      },
      {
        question: copy(
          'Is selectable text enough to make a PDF accessible?',
          '¿Basta con que el texto sea seleccionable para que un PDF sea accesible?',
          'Seçilebilir metin, bir PDF’nin erişilebilir olması için yeterli mi?',
        ),
        answer: copy(
          'No. It is a useful first check, not a full accessibility assessment. Review reading order, structure and the meaning of charts as well. After OCR, check for missing words and incorrect numbers; a successful conversion can still leave errors that change the report’s meaning.',
          'No. Es una primera comprobación útil, no una evaluación completa de accesibilidad. Revisa también el orden de lectura, la estructura y el significado de los gráficos. Tras el OCR, busca palabras ausentes y cifras incorrectas; una conversión puede dejar errores que alteren el significado del informe.',
          'Hayır. Bu yararlı bir ilk kontroldür; tam erişilebilirlik değerlendirmesi değildir. Okuma sırasını, yapıyı ve grafiklerin anlamını da inceleyin. OCR sonrasında eksik sözcükleri ve yanlış sayıları kontrol edin; tamamlanan bir dönüşümde raporun anlamını değiştiren hatalar kalabilir.',
        ),
      },
      {
        question: copy(
          'Can I keep a lead form and still publish a useful public resource?',
          '¿Puedo mantener un formulario comercial y ofrecer un recurso público útil?',
          'Talep formunu koruyup yine de yararlı bir açık kaynak yayımlayabilir miyim?',
        ),
        answer: copy(
          'Yes. Publish an approved explanation that answers a real question without requiring the download. Decide separately whether the full file is public or access-controlled. A form is a contact step, not proof of file protection, and a public summary does not make restricted evidence crawlable.',
          'Sí. Publica una explicación aprobada que responda a una pregunta real sin exigir la descarga. Decide por separado si el archivo completo será público o tendrá acceso controlado. El formulario es un paso de contacto, no una prueba de protección; un resumen público no hace rastreables las pruebas restringidas.',
          'Evet. İndirme gerektirmeden gerçek bir soruyu yanıtlayan, onaylanmış bir açıklama yayımlayın. Tam dosyanın açık mı yoksa erişim kontrollü mü olacağına ayrıca karar verin. Form bir iletişim adımıdır, dosya korumasının kanıtı değildir. Açık bir özet, kısıtlı kanıtları taranabilir hâle getirmez.',
        ),
      },
    ],
  },
};

copy(
  `${pdfSeoAiSearch.seoTitle} | Citevia`,
  `${translations.es[pdfSeoAiSearch.seoTitle]} | Citevia`,
  `${translations.tr[pdfSeoAiSearch.seoTitle]} | Citevia`,
);
export const pdfSeoTranslations = translations;
export const pdfSeoFragments = fragments;
