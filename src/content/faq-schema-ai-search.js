import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();
copy(
  'Printed documents on a desk beneath a reading lamp',
  'Documentos impresos sobre un escritorio bajo una lámpara de lectura',
  'Okuma lambasının altında, masanın üzerindeki basılı belgeler',
);

export const faqSchemaAiSearch = {
  translations,
  slug: 'faq-schema-ai-search',
  title: copy(
    'FAQ schema for AI search: what to keep and what to fix',
    'Schema FAQ para búsquedas con IA: qué conservar y corregir',
    'Yapay zekâ aramaları için SSS şeması: neleri korumalı, neleri düzeltmeli?',
  ),
  seoTitle: copy(
    'FAQ Schema for AI Search: A Practical Guide',
    'Schema FAQ para búsquedas con IA',
    'Yapay Zekâ Aramaları İçin SSS Şeması',
  ),
  focusKeyphrase: copy('FAQ schema', 'schema FAQ', 'SSS şeması'),
  description: copy(
    'Review FAQ schema for AI search: decide what to keep, fix misleading markup, and check that visible answers and translations match the structured data.',
    'Revisa el schema FAQ para búsquedas con IA: decide qué conservar, corrige el marcado y comprueba que respuestas y traducciones coincidan con los datos.',
    'Yapay zekâ aramaları için SSS şemasını inceleyin. Hatalı işaretlemeyi düzeltin; görünür yanıtların ve çevirilerin yapılandırılmış verilerle uyumunu denetleyin.',
  ),
  category: 'TECHNICAL SEO',
  published: '2026-10-21',
  updated: '2026-10-21',
  relatedService: 'seo',
  takeaway: copy(
    'Keep FAQ schema when it accurately describes useful questions and answers that readers can access, and your team can maintain it. Fix mismatched or hidden answers before adding more markup. Google has retired FAQ rich results, and its AI search features do not require special schema. A valid FAQPage is not a promise of an AI citation.',
    'Conserva el schema FAQ si describe con precisión preguntas y respuestas útiles que los lectores pueden consultar y tu equipo puede mantenerlo. Corrige las respuestas que no coincidan o estén ocultas antes de añadir más marcado. Google ha retirado los resultados enriquecidos de FAQ y sus búsquedas con IA no requieren un schema especial. Un FAQPage válido no promete citas de IA.',
    'SSS şeması, okuyucuların erişebildiği yararlı soru ve yanıtları doğru biçimde açıklıyorsa ve ekibiniz onu güncel tutabiliyorsa koruyun. Daha fazla işaretleme eklemeden önce uyuşmayan veya gizli yanıtları düzeltin. Google, SSS zengin sonuçlarını kaldırdı; yapay zekâ arama özellikleri özel bir şema gerektirmiyor. Geçerli bir FAQPage, yapay zekânın sizi kaynak göstereceği anlamına gelmez.',
  ),
  sections: [
    {
      id: 'what-changed',
      title: copy(
        'Separate FAQ schema from Google’s search display',
        'Distingue el schema FAQ de su presentación en Google',
        'SSS şeması ile Google’daki arama görünümünü ayırın',
      ),
      paragraphs: [
        copy(
          '[Google’s documentation update log](https://developers.google.com/search/updates) records that FAQ rich results stopped appearing on May 7, 2026. Google removed the feature’s documentation on June 15. Do not budget for FAQ markup on the assumption that it will restore expandable FAQ results in Google Search.',
          '[El registro de actualizaciones de Google](https://developers.google.com/search/updates) indica que los resultados enriquecidos de FAQ dejaron de aparecer el 7 de mayo de 2026. Google retiró la documentación de esa función el 15 de junio. No asignes presupuesto al marcado FAQ suponiendo que recuperará esos resultados desplegables en Google Search.',
          '[Google’ın belge güncelleme kaydı](https://developers.google.com/search/updates), SSS zengin sonuçlarının 7 Mayıs 2026’da gösterimden kaldırıldığını belirtiyor. Google, özelliğin belgelerini 15 Haziran’da kaldırdı. SSS işaretlemesinin Google Arama’daki açılır SSS sonuçlarını geri getireceği varsayımıyla bütçe ayırmayın.',
        ),
        copy(
          '[Schema.org still defines FAQPage](https://schema.org/FAQPage) as a page presenting frequently asked questions. That vocabulary and Google’s display feature are separate things. Meanwhile, [Google’s generative AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says structured data is not required for generative AI search. These sources establish a format and a platform rule; they do not establish a citation uplift across assistants.',
          '[Schema.org sigue definiendo FAQPage](https://schema.org/FAQPage) como una página que presenta preguntas frecuentes. Ese vocabulario y la función visual de Google son cosas distintas. Además, [la guía de Google sobre optimización para IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) indica que esas búsquedas no requieren datos estructurados. Estas fuentes definen un formato y una regla de plataforma; no demuestran un aumento de citas en todos los asistentes.',
          '[Schema.org, FAQPage türünü hâlâ tanımlıyor](https://schema.org/FAQPage): sık sorulan soruları sunan bir sayfa. Bu sözlük ile Google’ın sonuç gösterim özelliği ayrı konulardır. Ayrıca [Google’ın üretken yapay zekâ optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), üretken yapay zekâ aramalarının yapılandırılmış veri gerektirmediğini belirtiyor. Bu kaynaklar bir biçimi ve platform kuralını açıklar; asistanlar genelinde kaynak gösterilme artışını kanıtlamaz.',
        ),
      ],
    },
    {
      id: 'choose-questions',
      title: copy(
        'Choose follow-up questions that change a decision',
        'Elige preguntas que ayuden a tomar una decisión',
        'Kararı etkileyen ek soruları seçin',
      ),
      paragraphs: [
        copy(
          '[A September 26, 2026 SEO discussion about FAQ blocks](https://www.reddit.com/r/seogrowth/comments/1wqomdc/are_faq_blocks_still_relevant/) asks whether copying questions from People Also Ask still helps. A [July 15 discussion about forced FAQs](https://www.reddit.com/r/AISEOforBeginners/comments/1ux28on/stuffing_faq_schema_on_every_page_for_ai/) questions adding them everywhere for citations. These are evidence of uncertainty, not proof of ranking effects.',
          '[Un debate de SEO del 26 de septiembre de 2026 sobre bloques FAQ](https://www.reddit.com/r/seogrowth/comments/1wqomdc/are_faq_blocks_still_relevant/) pregunta si copiar preguntas de «Otras preguntas de los usuarios» sigue siendo útil. Un [debate del 15 de julio sobre FAQ forzadas](https://www.reddit.com/r/AISEOforBeginners/comments/1ux28on/stuffing_faq_schema_on_every_page_for_ai/) cuestiona añadirlas en todas partes para conseguir citas. Reflejan incertidumbre, no demuestran efectos en el posicionamiento.',
          '[SSS blokları hakkında 26 Eylül 2026 tarihli bir SEO tartışması](https://www.reddit.com/r/seogrowth/comments/1wqomdc/are_faq_blocks_still_relevant/), «Diğer kullanıcılar bunları da sordu» bölümündeki soruları kopyalamanın hâlâ yararlı olup olmadığını soruyor. [Zorlama SSS bölümleri hakkında 15 Temmuz tarihli bir tartışma](https://www.reddit.com/r/AISEOforBeginners/comments/1ux28on/stuffing_faq_schema_on_every_page_for_ai/) ise kaynak gösterilmek için bunları her yere eklemeyi sorguluyor. Bunlar belirsizliğe işaret eder; sıralama etkilerini kanıtlamaz.',
        ),
        copy(
          'Use search suggestions as research leads, then check whether each question belongs on this page. Prefer an unresolved condition, objection or next step over a heading rewritten as a question. Our [framework for researching buyer questions](/blog/high-intent-prompt-intelligence) helps distinguish observed needs from editorial assumptions.',
          'Usa las sugerencias de búsqueda como pistas y comprueba si cada pregunta encaja en la página. Prioriza una condición pendiente, una objeción o un siguiente paso frente a reformular un encabezado como pregunta. Nuestro [método para investigar preguntas de compradores](/blog/high-intent-prompt-intelligence) ayuda a distinguir necesidades observadas de suposiciones editoriales.',
          'Arama önerilerini araştırma ipucu olarak kullanın; ardından her sorunun bu sayfaya uygunluğunu kontrol edin. Bir başlığı soruya çevirmek yerine açıklanmamış bir koşula, itiraza veya sonraki adıma öncelik verin. [Alıcı sorularını araştırma yöntemimiz](/blog/high-intent-prompt-intelligence), gözlemlenen ihtiyaçları editoryal varsayımlardan ayırmaya yardımcı olur.',
        ),
      ],
      bullets: [
        copy(
          'Relevance: would this answer help the page’s intended reader act?',
          'Relevancia: ¿ayuda la respuesta al lector previsto a actuar?',
          'Uygunluk: Bu yanıt, sayfanın hedef okuyucusunun harekete geçmesini sağlar mı?',
        ),
        copy(
          'Evidence: can an owner verify the answer and its exceptions?',
          'Pruebas: ¿puede un responsable verificar la respuesta y sus excepciones?',
          'Kanıt: Bir sorumlu, yanıtı ve istisnalarını doğrulayabilir mi?',
        ),
        copy(
          'Maintenance: will someone update it when the product or policy changes?',
          'Mantenimiento: ¿alguien la actualizará cuando cambie el producto o la política?',
          'Güncellik: Ürün veya politika değiştiğinde biri yanıtı güncelleyecek mi?',
        ),
      ],
    },
    {
      id: 'one-content-record',
      title: copy(
        'Publish the answer and markup from one record',
        'Publica la respuesta y el marcado desde un mismo registro',
        'Yanıtı ve işaretlemeyi aynı kayıttan yayımlayın',
      ),
      paragraphs: [
        copy(
          'Store each approved question and complete answer together. Use that record to render the visible FAQ and generate FAQPage mainEntity entries. Each entry uses Question for its type, name for the question, and acceptedAnswer containing an Answer with text. Keep the wording and qualifications consistent in both outputs.',
          'Guarda juntas cada pregunta aprobada y su respuesta completa. Usa ese registro para mostrar la FAQ y generar las entradas mainEntity de FAQPage. Cada entrada usa el tipo Question, name para la pregunta y acceptedAnswer con un Answer que contiene text. Mantén la misma redacción y las mismas condiciones en ambas salidas.',
          'Onaylanmış her soruyu ve tam yanıtını birlikte saklayın. Görünür SSS bölümünü ve FAQPage mainEntity kayıtlarını bu kayıttan oluşturun. Her kayıt, tür olarak Question, soru için name ve text içeren bir Answer için acceptedAnswer kullanır. Her iki çıktıda da ifadeleri ve koşulları tutarlı tutun.',
        ),
        copy(
          '[Google’s structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) require markup to reflect visible, relevant content. An answer only inside JSON-LD fails that check. Keep article authorship, dates and image information in the article schema as well; adding an FAQ does not replace the description of the article itself.',
          '[Las políticas de datos estructurados de Google](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) exigen que el marcado refleje contenido visible y relevante. Una respuesta que solo existe en JSON-LD no cumple esa condición. Conserva también autoría, fechas e imagen en el schema del artículo; añadir una FAQ no sustituye la descripción del propio artículo.',
          '[Google’ın yapılandırılmış veri politikaları](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), işaretlemenin görünür ve ilgili içeriği yansıtmasını ister. Yalnızca JSON-LD içinde bulunan bir yanıt bu koşulu karşılamaz. Yazar, tarih ve görsel bilgilerini makale şemasında da koruyun; SSS eklemek, makalenin kendisini açıklamanın yerini almaz.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a data-export question',
          'Ejemplo ilustrativo: una pregunta sobre exportación de datos',
          'Temsili örnek: veri dışa aktarma sorusu',
        ),
        text: copy(
          'A fictional software vendor answers “Can I export my records?” with “Yes, account administrators can export transaction records as CSV; uploaded attachments are excluded.” Its old schema says only “Export all your data.” Replace that broader claim with the approved visible answer in every language. This example illustrates a content mismatch, not a Citevia client result.',
          'Un proveedor ficticio de software responde «¿Puedo exportar mis registros?» con «Sí, los administradores pueden exportar los registros de transacciones en CSV; se excluyen los archivos adjuntos». Su antiguo schema solo dice «Exporta todos tus datos». Sustituye esa afirmación más amplia por la respuesta visible aprobada en cada idioma. El ejemplo ilustra una discrepancia de contenido, no un resultado de un cliente de Citevia.',
          'Kurgusal bir yazılım sağlayıcısı, «Kayıtlarımı dışa aktarabilir miyim?» sorusunu şöyle yanıtlar: «Evet, hesap yöneticileri işlem kayıtlarını CSV olarak dışa aktarabilir; yüklenen ekler buna dahil değildir.» Eski şemada yalnızca «Tüm verilerinizi dışa aktarın» yazar. Bu geniş iddiayı, her dilde onaylanmış görünür yanıtla değiştirin. Örnek, bir içerik uyuşmazlığını gösterir; Citevia müşteri sonucu değildir.',
        ),
      },
    },
    {
      id: 'validation-checklist',
      title: copy(
        'Check the rendered FAQ in every language',
        'Revisa la FAQ renderizada en cada idioma',
        'Oluşturulan SSS bölümünü her dilde kontrol edin',
      ),
      paragraphs: [
        copy(
          'Validate the generated markup with the [Schema.org validator](https://validator.schema.org/), then compare it with the actual page. A syntax check cannot decide whether an answer is true, complete or useful. Inspect the server response and the document after language switching when the site changes text in the browser.',
          'Valida el marcado generado con el [validador de Schema.org](https://validator.schema.org/) y compáralo con la página real. Una comprobación de sintaxis no determina si una respuesta es verdadera, completa o útil. Inspecciona la respuesta del servidor y el documento tras cambiar de idioma si el sitio traduce el texto en el navegador.',
          'Üretilen işaretlemeyi [Schema.org doğrulayıcısıyla](https://validator.schema.org/) kontrol edin; ardından gerçek sayfayla karşılaştırın. Sözdizimi kontrolü, bir yanıtın doğru, eksiksiz veya yararlı olduğuna karar veremez. Site metni tarayıcıda değiştiriyorsa sunucu yanıtını ve dil değişiminden sonraki belgeyi inceleyin.',
        ),
        copy(
          'Use ordinary question headings and readable answers, or test an accordion against [W3C’s accordion interaction pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). Readers must be able to reach the answer, including with a keyboard. Our [multilingual publishing guide](/blog/multilingual-seo-ai-search) explains why a translated browser view and a separate language URL need different checks.',
          'Usa encabezados para las preguntas y respuestas legibles, o prueba el acordeón según el [patrón de interacción de acordeones del W3C](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). Los lectores deben poder acceder a las respuestas también con teclado. Nuestra [guía de publicación multilingüe](/blog/multilingual-seo-ai-search) explica por qué una vista traducida en el navegador y una URL propia por idioma requieren comprobaciones distintas.',
          'Sorular için normal başlıklar ve okunabilir yanıtlar kullanın veya açılır bölümleri [W3C’nin akordeon etkileşim modeline](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) göre test edin. Okuyucular yanıta klavyeyle de erişebilmelidir. [Çok dilli yayın rehberimiz](/blog/multilingual-seo-ai-search), tarayıcıdaki çevrilmiş görünüm ile ayrı dil URL’sinin neden farklı kontroller gerektirdiğini açıklar.',
        ),
      ],
      bullets: [
        copy(
          'Match every question and complete answer, including limits and exceptions.',
          'Compara cada pregunta y respuesta completa, incluidos límites y excepciones.',
          'Sınırlar ve istisnalar dahil her soruyu ve tam yanıtını eşleştirin.',
        ),
        copy(
          'Translate the FAQ heading, questions, answers and any links readers use.',
          'Traduce el título de la sección, preguntas, respuestas y enlaces para los lectores.',
          'SSS başlığını, soruları, yanıtları ve okuyucuların kullandığı bağlantıları çevirin.',
        ),
        copy(
          'Check that inLanguage and schema text describe the document being served.',
          'Comprueba que inLanguage y el texto del schema describan el documento servido.',
          'inLanguage ile şema metninin sunulan belgeyi tanımladığını kontrol edin.',
        ),
        copy(
          'Inspect all schema blocks for stale or conflicting copies from templates and plugins.',
          'Revisa todos los bloques de schema para detectar copias antiguas o contradictorias de plantillas y plugins.',
          'Şablon ve eklentilerden gelen eski veya çelişen kopyalar için tüm şema bloklarını inceleyin.',
        ),
        copy(
          'Retest after an edit, language switch and navigation back to the page.',
          'Repite la prueba tras editar, cambiar de idioma y volver a la página.',
          'Düzenleme, dil değiştirme ve sayfaya geri dönme sonrasında yeniden test edin.',
        ),
      ],
    },
    {
      id: 'maintenance-decision',
      title: copy(
        'Decide what to keep, repair or remove',
        'Decide qué conservar, reparar o retirar',
        'Neyi koruyacağınıza, düzelteceğinize veya kaldıracağınıza karar verin',
      ),
      paragraphs: [
        copy(
          'Keep accurate markup when it has a clear maintenance owner and a useful purpose in your publishing system. Repair it when the visible answer, language or product conditions have changed. Remove obsolete FAQ markup when its corresponding questions have been removed; keep any useful visible answers while you fix their data.',
          'Conserva el marcado correcto si tiene un responsable y una función útil en tu sistema editorial. Repáralo cuando cambien la respuesta visible, el idioma o las condiciones del producto. Retira el marcado FAQ obsoleto cuando se hayan eliminado sus preguntas; conserva las respuestas visibles útiles mientras corriges sus datos.',
          'Doğru işaretlemeyi, bakım sorumlusu ve yayın sisteminizde yararlı bir amacı varsa koruyun. Görünür yanıt, dil veya ürün koşulları değiştiğinde düzeltin. İlgili sorular kaldırıldığında eski SSS işaretlemesini kaldırın; verilerini düzeltirken yararlı görünür yanıtları koruyun.',
        ),
        copy(
          'If you test whether a change affects AI visibility, save a baseline and record exactly what changed. Rewriting answers and adding schema together cannot isolate the effect of markup. Use our [guide to interpreting AI visibility evidence](/blog/measuring-ai-search-visibility) to keep sampled citations separate from visits and inquiries. Citevia’s [technical SEO service](/services/seo) can help review implementation; the first deliverable is consistent, usable content.',
          'Si pruebas el efecto de un cambio en la visibilidad en IA, guarda una referencia inicial y registra qué cambió. Reescribir respuestas y añadir schema a la vez no permite aislar el efecto del marcado. Nuestra [guía para interpretar pruebas de visibilidad en IA](/blog/measuring-ai-search-visibility) distingue citas observadas, visitas y consultas. El [servicio de SEO técnico de Citevia](/services/seo) puede ayudar a revisar la implementación; el primer entregable es contenido coherente y útil.',
          'Bir değişikliğin yapay zekâ görünürlüğüne etkisini test ediyorsanız başlangıç durumunu kaydedin ve neyin değiştiğini belirtin. Yanıtları yeniden yazıp aynı anda şema eklemek, işaretlemenin etkisini ayırmanızı sağlamaz. [Yapay zekâ görünürlüğü kanıtlarını yorumlama rehberimiz](/blog/measuring-ai-search-visibility), örneklemdeki kaynak gösterimlerini ziyaret ve taleplerden ayrı tutmanıza yardımcı olur. [Citevia’nın teknik SEO hizmeti](/services/seo) uygulamayı incelemeye yardımcı olabilir; ilk çıktı, tutarlı ve kullanılabilir içeriktir.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'FAQ schema: practical questions',
      'Schema FAQ: preguntas prácticas',
      'SSS şeması: uygulamaya yönelik sorular',
    ),
    items: [
      {
        question: copy(
          'Should I remove all existing FAQ markup?',
          '¿Debo eliminar todo el marcado FAQ existente?',
          'Mevcut SSS işaretlemesinin tamamını kaldırmalı mıyım?',
        ),
        answer: copy(
          'No blanket removal is necessary just because Google retired its FAQ display. Review whether the markup still describes real, accessible answers and whether you can maintain it. Remove obsolete or misleading entries. Do not promise an AI benefit merely because the remaining markup is valid.',
          'No hace falta eliminarlo todo porque Google haya retirado esa presentación. Revisa si el marcado sigue describiendo respuestas reales y accesibles, y si puedes mantenerlo. Retira las entradas obsoletas o engañosas. Que el marcado restante sea válido no justifica prometer beneficios en IA.',
          'Google’ın SSS görünümünü kaldırması, tüm işaretlemeyi silmenizi gerektirmez. İşaretlemenin hâlâ gerçek, erişilebilir yanıtları tanımlayıp tanımlamadığını ve güncel tutulup tutulamayacağını inceleyin. Eski veya yanıltıcı kayıtları kaldırın. Kalan işaretlemenin geçerli olması, yapay zekâ açısından yarar vaat etmeyi haklı çıkarmaz.',
        ),
      },
      {
        question: copy(
          'Can answers sit inside a collapsed accordion?',
          '¿Pueden estar las respuestas dentro de un acordeón cerrado?',
          'Yanıtlar kapalı bir açılır bölümde bulunabilir mi?',
        ),
        answer: copy(
          'Yes, readers can use an accordion to reveal answers. Make its controls understandable and keyboard accessible, and ensure the complete answer appears when opened. An answer stored only in structured data is different: the reader has no way to reveal it. Simple visible headings are also a useful option.',
          'Sí, los lectores pueden desplegar un acordeón para consultar las respuestas. Los controles deben ser comprensibles y accesibles con teclado, y mostrar la respuesta completa al abrirse. Una respuesta guardada solo en datos estructurados es distinta: el lector no puede verla. Los encabezados con respuestas visibles también son una opción útil.',
          'Evet, okuyucular yanıtları açılır bölümlerle görüntüleyebilir. Kontroller anlaşılır ve klavyeyle erişilebilir olmalı; açıldığında tam yanıt görünmelidir. Yalnızca yapılandırılmış veride saklanan bir yanıt farklıdır: okuyucunun onu görüntüleme yolu yoktur. Yanıtları doğrudan gösteren basit başlıklar da yararlı bir seçenektir.',
        ),
      },
      {
        question: copy(
          'Can I add extra keywords or answers only in JSON-LD?',
          '¿Puedo añadir palabras clave o respuestas solo en JSON-LD?',
          'Yalnızca JSON-LD içine ek anahtar kelimeler veya yanıtlar koyabilir miyim?',
        ),
        answer: copy(
          'Do not add claims or answers that readers cannot find on the page. Write useful, supported answers for readers first, then describe that content in the markup. Keep product restrictions and exceptions in both places instead of turning a qualified answer into a broader promotional claim.',
          'No añadas afirmaciones o respuestas que los lectores no puedan encontrar en la página. Primero escribe respuestas útiles y fundamentadas; después describe ese contenido en el marcado. Mantén las restricciones y excepciones del producto en ambos lugares, sin convertir una respuesta condicionada en una promesa comercial más amplia.',
          'Okuyucuların sayfada bulamadığı iddiaları veya yanıtları eklemeyin. Önce okuyucular için yararlı ve kanıtlı yanıtlar yazın; ardından bu içeriği işaretlemede tanımlayın. Koşullu bir yanıtı daha geniş bir tanıtım iddiasına dönüştürmek yerine ürün kısıtlarını ve istisnaları her iki yerde de koruyun.',
        ),
      },
      {
        question: copy(
          'Is there a required number of FAQ questions?',
          '¿Hay un número obligatorio de preguntas frecuentes?',
          'SSS için zorunlu bir soru sayısı var mı?',
        ),
        answer: copy(
          'Schema.org defines FAQPage around one or more frequently asked questions. That definition does not establish an ideal number for AI citations. Include enough questions to resolve relevant follow-up needs, and stop when additional answers would repeat the page or add filler.',
          'Schema.org define FAQPage como una página con una o más preguntas frecuentes. Esa definición no establece un número ideal para obtener citas de IA. Incluye las necesarias para resolver dudas relevantes y detente cuando las respuestas adicionales repitan la página o añadan relleno.',
          'Schema.org, FAQPage türünü bir veya daha fazla sık sorulan soruyu içeren sayfa olarak tanımlar. Bu tanım, yapay zekâ kaynak gösterimleri için ideal bir sayı belirlemez. İlgili ek ihtiyaçları karşılayacak kadar soru ekleyin; yeni yanıtlar sayfayı tekrar edecek veya dolgu içerik oluşturacaksa durun.',
        ),
      },
      {
        question: copy(
          'What if two plugins publish different FAQ answers?',
          '¿Qué ocurre si dos plugins publican respuestas FAQ distintas?',
          'İki eklenti farklı SSS yanıtları yayımlıyorsa ne yapmalıyım?',
        ),
        answer: copy(
          'Inspect the delivered page to identify which template or plugin creates each block. Choose one maintained source for each question-and-answer set, remove conflicting output, and retest the rendered page. Validate article and breadcrumb data too, so fixing FAQ duplication does not remove other accurate descriptions.',
          'Inspecciona la página entregada para identificar qué plantilla o plugin crea cada bloque. Elige una fuente mantenida para cada conjunto de preguntas y respuestas, elimina las salidas contradictorias y vuelve a probar la página. Valida también los datos del artículo y las migas de pan para conservar otras descripciones correctas.',
          'Her bloğu hangi şablonun veya eklentinin oluşturduğunu belirlemek için sunulan sayfayı inceleyin. Her soru-yanıt kümesi için güncel tutulan tek bir kaynak seçin, çelişen çıktıyı kaldırın ve oluşturulan sayfayı yeniden test edin. SSS tekrarını düzeltirken diğer doğru tanımları silmemek için makale ve gezinme yolu verilerini de doğrulayın.',
        ),
      },
    ],
  },
};

copy(
  `${faqSchemaAiSearch.seoTitle} | Citevia`,
  `${translations.es[faqSchemaAiSearch.seoTitle]} | Citevia`,
  `${translations.tr[faqSchemaAiSearch.seoTitle]} | Citevia`,
);
export const faqSchemaTranslations = translations;
export const faqSchemaFragments = fragments;
