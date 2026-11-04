import { createArticleCopy } from '../i18n/article-copy.js';
const { copy, translations, fragments } = createArticleCopy();

export const contentSyndicationAiSearch = {
  translations,
  slug: 'content-syndication-ai-search',
  title: copy(
    'Content syndication for AI search: choose what to share',
    'Sindicación de contenidos para IA: decide qué compartir',
    'Yapay zekâ için içerik sendikasyonu: ne paylaşmalı?',
  ),
  seoTitle: copy(
    'Content Syndication for AI Search: A Guide',
    'Sindicación de contenidos para IA: guía',
    'Yapay Zekâ İçin İçerik Sendikasyonu Rehberi',
  ),
  focusKeyphrase: copy('content syndication', 'sindicación de contenidos', 'içerik sendikasyonu'),
  description: copy(
    'Plan content syndication for AI search. Choose full copies or excerpts, agree indexing controls, and measure publisher citations separately from your own.',
    'Planifica la sindicación de contenidos para IA. Elige copias o extractos, acuerda la indexación y distingue las citas a terceros de las citas a tu sitio.',
    'Yapay zekâ için içerik sendikasyonu planlayın. Tam metin veya özet seçin, dizine ekleme kararını verin ve yayıncı atıflarını kendi sitenizden ayrı ölçün.',
  ),
  category: 'CONTENT',
  published: '2026-11-04',
  updated: '2026-11-04',
  relatedService: 'content-creation',
  takeaway: copy(
    'Content syndication can put your work in front of another publisher’s audience. It does not guarantee AI citations or credit to your original URL. Before sharing a full copy, agree where it will appear, whether it should be indexed, how readers reach the original and who handles corrections. Use an excerpt or a distinct contribution when that better serves the reader and your search goals.',
    'La sindicación de contenidos puede acercar tu trabajo al público de otro editor. No garantiza citas de IA ni atribución a tu URL original. Antes de compartir una copia completa, acuerda dónde aparecerá, si debe indexarse, cómo llegarán los lectores al original y quién gestionará las correcciones. Usa un extracto o una aportación distinta cuando sirva mejor al lector y a tus objetivos de búsqueda.',
    'İçerik sendikasyonu, çalışmanızı başka bir yayıncının okurlarına ulaştırabilir. Ancak yapay zekâ atıflarını veya özgün adresinize kaynak verilmesini garanti etmez. Tam metni paylaşmadan önce nerede yayımlanacağını, dizine eklenip eklenmeyeceğini, okurların özgün içeriğe nasıl ulaşacağını ve düzeltmeleri kimin yapacağını belirleyin. Okurun ihtiyacına ve arama hedeflerinize daha uygunsa özet veya farklı bir katkı sunun.',
  ),
  sections: [
    {
      id: 'distribution-format',
      title: copy(
        'Define the content syndication offer first',
        'Define primero la oferta de sindicación de contenidos',
        'Önce içerik sendikasyonu teklifini tanımlayın',
      ),
      paragraphs: [
        copy(
          'An [October 9, 2026 discussion about syndication and GEO](https://www.reddit.com/r/SEO/comments/1x1tgnq/does_content_syndication_matter_for_geo/) asks whether distribution partnerships should be judged by AI citations. The marketer mentions existing campaigns and an upcoming budget decision. That is evidence of a practical question, not proof that a particular channel improves citations.',
          'Un [debate del 9 de octubre de 2026 sobre sindicación y GEO](https://www.reddit.com/r/SEO/comments/1x1tgnq/does_content_syndication_matter_for_geo/) pregunta si las colaboraciones de distribución deben evaluarse por las citas de IA. La persona responsable de marketing menciona campañas existentes y una próxima decisión presupuestaria. Esto demuestra una duda práctica, no que un canal concreto mejore las citas.',
          'Bir [9 Ekim 2026 tarihli sendikasyon ve GEO tartışması](https://www.reddit.com/r/SEO/comments/1x1tgnq/does_content_syndication_matter_for_geo/), dağıtım ortaklıklarının yapay zekâ atıflarıyla değerlendirilip değerlendirilmemesi gerektiğini soruyor. Pazarlamacı mevcut kampanyalardan ve yaklaşan bütçe kararından söz ediyor. Bu, pratik bir sorunun kanıtıdır; belirli bir kanalın atıfları artırdığının değil.',
        ),
        copy(
          'Ask the partner to show a real example of the proposed placement. A promoted link sends people to your page. A syndicated article republishes the text elsewhere. An independently written article adds another publisher’s reporting or judgment. These are different deliverables, even when a proposal calls all of them distribution.',
          'Pide al socio un ejemplo real de la ubicación propuesta. Un enlace promocionado lleva a tu página. Un artículo sindicado republica el texto en otro sitio. Un artículo independiente añade la investigación o el criterio de otro editor. Son entregables distintos, aunque la propuesta los agrupe como distribución.',
          'İş ortağından önerilen yayın biçiminin gerçek bir örneğini isteyin. Tanıtılan bağlantı insanları sizin sayfanıza götürür. Sendikasyon, metni başka bir yerde yeniden yayımlar. Bağımsız bir yazı ise başka bir yayıncının araştırmasını veya değerlendirmesini ekler. Teklif hepsine dağıtım dese bile bunlar farklı çıktılardır.',
        ),
      ],
      bullets: [
        copy(
          'Full republication: useful when the partner’s readers need the complete article there.',
          'Republicación completa: útil si los lectores del socio necesitan allí el artículo entero.',
          'Tam metin: iş ortağının okurları yazının tamamına orada ihtiyaç duyuyorsa uygundur.',
        ),
        copy(
          'Excerpt with a source link: useful when readers need an introduction before visiting the original.',
          'Extracto con enlace a la fuente: útil si los lectores necesitan una introducción antes de visitar el original.',
          'Kaynak bağlantılı özet: okurlar özgün yazıya geçmeden önce bir girişe ihtiyaç duyuyorsa uygundur.',
        ),
        copy(
          'Distinct contribution: useful when the partner’s audience needs a different question answered with additional context.',
          'Aportación distinta: útil si el público del socio necesita resolver otra pregunta con contexto adicional.',
          'Farklı katkı: iş ortağının kitlesi ek bağlamla başka bir soruya yanıt arıyorsa uygundur.',
        ),
      ],
    },
    {
      id: 'indexing-decision',
      title: copy(
        'Agree which version should appear in search',
        'Acuerda qué versión debe aparecer en búsquedas',
        'Aramada hangi sürümün görünmesi gerektiğini belirleyin',
      ),
      paragraphs: [
        copy(
          'If the goal is to keep a partner’s full copy out of Google Search, a canonical tag is not a reliable exclusion control. [Google’s syndication troubleshooting guidance](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting) recommends that partners block indexing instead. Its separate [canonical URL guide](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) describes preference signals for duplicate or very similar pages; Google can choose another version.',
          'Si quieres excluir de Google Search la copia completa del socio, una etiqueta canonical no es un control de exclusión fiable. La [guía de Google para problemas de sindicación](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting) recomienda que los socios bloqueen la indexación. Su [guía de URL canónicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) describe señales de preferencia para páginas duplicadas o muy similares; Google puede elegir otra versión.',
          'Amaç iş ortağının tam kopyasını Google Arama dışında tutmaksa canonical etiketi güvenilir bir dışlama kontrolü değildir. [Google’ın sendikasyon sorunlarını giderme rehberi](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting), iş ortaklarının dizine eklemeyi engellemesini önerir. Ayrı [kanonik adres rehberi](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), aynı veya çok benzer sayfalar için tercih sinyallerini açıklar; Google başka bir sürüm seçebilir.',
        ),
        copy(
          '[Google’s publisher guidance](https://support.google.com/news/publisher-center/answer/9606800?hl=en) distinguishes Googlebot-News noindex, which excludes a copy from Google News, from Googlebot noindex, which excludes it from Google Search as well. Ask the technical owner to confirm the intended scope and inspect the published response. Do not accidentally apply the partner-copy instruction to your original.',
          '[La guía de Google para editores](https://support.google.com/news/publisher-center/answer/9606800?hl=en) distingue noindex para Googlebot-News, que excluye una copia de Google News, de noindex para Googlebot, que también la excluye de Google Search. Pide al responsable técnico que confirme el alcance y revise la respuesta publicada. No apliques por error al original la instrucción destinada a la copia.',
          '[Google’ın yayıncı rehberi](https://support.google.com/news/publisher-center/answer/9606800?hl=en), kopyayı Google Haberler dışında bırakan Googlebot-News noindex ile Google Arama dışında da bırakan Googlebot noindex talimatını ayırır. Teknik sorumludan kapsamı doğrulamasını ve yayımlanan yanıtı incelemesini isteyin. Kopya için seçilen talimatı yanlışlıkla özgün sayfaya uygulamayın.',
        ),
        copy(
          'For noindex to work, Google must be able to fetch the page and see the instruction, as its [indexing-control documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing) explains. A robots.txt block can prevent that. Agree this choice before distribution: a partner that requires an indexable full copy may not fit a campaign whose priority is excluding copies from Google.',
          'Para que noindex funcione, Google debe acceder a la página y leer la instrucción, según su [documentación sobre controles de indexación](https://developers.google.com/search/docs/crawling-indexing/block-indexing). Un bloqueo en robots.txt puede impedirlo. Acuerda esta decisión antes de distribuir: un socio que exija una copia completa indexable quizá no encaje si la prioridad es excluir las copias de Google.',
          'Google’ın [dizine ekleme kontrolü belgesinde](https://developers.google.com/search/docs/crawling-indexing/block-indexing) açıkladığı gibi, noindex talimatının işlemesi için sayfayı alıp talimatı görmesi gerekir. robots.txt engeli bunu önleyebilir. Dağıtımdan önce anlaşın: dizine eklenebilir tam kopya isteyen bir ortak, önceliği kopyaları Google dışında tutmak olan kampanyaya uygun olmayabilir.',
        ),
      ],
    },
    {
      id: 'ai-tradeoff',
      title: copy(
        'Make the AI-search tradeoff explicit',
        'Explica el compromiso para la búsqueda con IA',
        'Yapay zekâ aramasındaki ödünleşimi açıklayın',
      ),
      paragraphs: [
        copy(
          '[Google’s requirements for AI supporting links](https://developers.google.com/search/docs/appearance/ai-features) say a supporting link in AI Overviews or AI Mode must be indexed and eligible for a snippet. Excluding the partner copy from Google Search therefore conflicts with trying to make that same URL an eligible supporting link there. It can still serve the publisher’s readers. Other assistants need separate checks; Google’s controls do not establish every provider’s behavior.',
          '[Los requisitos de Google para funciones de IA](https://developers.google.com/search/docs/appearance/ai-features) indican que un enlace de apoyo en AI Overviews o AI Mode debe estar indexado y ser apto para mostrar un fragmento. Excluir la copia de Google Search entra, por tanto, en conflicto con intentar que esa URL sea elegible allí como enlace de apoyo. Puede seguir siendo útil para los lectores del editor. Otros asistentes requieren comprobaciones propias; los controles de Google no determinan el comportamiento de todos los proveedores.',
          '[Google’ın yapay zekâ özellikleri için gereksinimleri](https://developers.google.com/search/docs/appearance/ai-features), AI Overviews veya AI Mode içindeki destekleyici bağlantının dizine eklenmiş ve arama snippet’i göstermeye uygun olmasını ister. Dolayısıyla ortak kopyasını Google Arama dışında tutmak, aynı adresi burada destekleyici bağlantı yapma hedefiyle çelişir. Kopya yine de yayıncının okurlarına yarar sağlayabilir. Diğer asistanları ayrı kontrol edin; Google’ın kontrolleri tüm sağlayıcıların davranışını belirlemez.',
        ),
        copy(
          'Write the objective in plain language: reach relevant readers, earn an independent discussion, or test whether particular published URLs appear in an answer sample. Treat a possible citation benefit as a hypothesis. If your original lacks clear evidence, improve it with our [citable-content publishing checklist](/blog/anatomy-of-a-citable-page) before distributing the same weakness more widely.',
          'Describe el objetivo con claridad: llegar a lectores relevantes, conseguir una discusión independiente o probar si ciertas URL publicadas aparecen en una muestra de respuestas. Trata el posible beneficio en citas como una hipótesis. Si al original le faltan pruebas claras, mejóralo con nuestra [lista para publicar contenido citable](/blog/anatomy-of-a-citable-page) antes de distribuir esa misma carencia.',
          'Hedefi açık yazın: ilgili okurlara ulaşmak, bağımsız bir değerlendirme elde etmek veya belirli yayın adreslerinin yanıt örnekleminde görünüp görünmediğini test etmek. Olası atıf faydasını hipotez olarak ele alın. Özgün yazıda açık kanıt yoksa aynı eksikliği yaymadan önce [atıf yapılabilir içerik yayınlama kontrol listemizle](/blog/anatomy-of-a-citable-page) iyileştirin.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a fictional industry guide',
          'Ejemplo ilustrativo: una guía sectorial ficticia',
          'Temsili örnek: kurgusal bir sektör rehberi',
        ),
        text: copy(
          'A fictional supplier wants readers of a trade publication to discover its maintenance guide. Keeping the full guide on its own site is a priority, so the partner publishes a useful introductory excerpt with a direct source link. The team checks the live excerpt, attribution and destination. If an assistant later cites the trade publication, the report records that publisher URL, not an owned-site citation. This is a proposed workflow, not a Citevia result.',
          'Un proveedor ficticio quiere que los lectores de una publicación sectorial descubran su guía de mantenimiento. Su prioridad es conservar la guía completa en su sitio, así que el socio publica un extracto introductorio útil con enlace directo a la fuente. El equipo comprueba el extracto publicado, la atribución y el destino. Si después un asistente cita la publicación, el informe registra esa URL, no una cita al sitio propio. Es un proceso propuesto, no un resultado de Citevia.',
          'Kurgusal bir tedarikçi, sektör yayınının okurlarının bakım rehberini keşfetmesini istiyor. Tam rehberi kendi sitesinde tutmak öncelikli olduğu için iş ortağı doğrudan kaynak bağlantısı içeren yararlı bir giriş özeti yayımlıyor. Ekip canlı özeti, kaynak bilgisini ve hedef adresi kontrol ediyor. Bir asistan daha sonra sektör yayınını kaynak gösterirse rapora yayıncının adresi yazılıyor; şirkete ait siteye atıf olarak sayılmıyor. Bu, önerilen bir süreçtir; Citevia sonucu değildir.',
        ),
      },
    },
    {
      id: 'partner-checklist',
      title: copy(
        'Use a short partner checklist',
        'Usa una lista breve para el socio',
        'İş ortağı için kısa bir kontrol listesi kullanın',
      ),
      paragraphs: [
        copy(
          'Confirm the publication details before approving distribution, then reopen the live placement. A proposal or screenshot does not prove what readers and crawlers receive. Keep the original author, evidence and limitations attached to the claims, and agree how a later correction reaches every authorized copy.',
          'Confirma los detalles antes de aprobar la distribución y después abre la publicación real. Una propuesta o captura no demuestra qué reciben lectores y rastreadores. Conserva la autoría original, las pruebas y los límites junto a las afirmaciones, y acuerda cómo llegará una corrección a cada copia autorizada.',
          'Dağıtımı onaylamadan önce yayın ayrıntılarını doğrulayın, ardından canlı yayını açın. Teklif veya ekran görüntüsü, okurlara ve tarayıcılara ne ulaştığını kanıtlamaz. Özgün yazarı, kanıtları ve sınırlamaları iddialarla birlikte koruyun. Sonraki düzeltmelerin her izinli kopyaya nasıl ulaşacağını belirleyin.',
        ),
      ],
      bullets: [
        copy(
          'Placement: exact publisher, audience, format and expected URL.',
          'Ubicación: editor, público, formato y URL prevista concretos.',
          'Yayın: belirli yayıncı, hedef kitle, biçim ve beklenen adres.',
        ),
        copy(
          'Attribution: accurate byline, visible source link and clear sponsorship disclosure where applicable.',
          'Atribución: firma correcta, enlace visible a la fuente y patrocinio claramente indicado cuando corresponda.',
          'Kaynak bilgisi: doğru yazar adı, görünür kaynak bağlantısı ve gerektiğinde açık sponsorluk bildirimi.',
        ),
        copy(
          'Indexing: intended rules, responsible technical owner and a check of the actual page.',
          'Indexación: reglas acordadas, responsable técnico y revisión de la página real.',
          'Dizine ekleme: amaçlanan kurallar, teknik sorumlu ve gerçek sayfanın kontrolü.',
        ),
        copy(
          'Maintenance: correction contact, update process and a record of every copy.',
          'Mantenimiento: contacto para correcciones, proceso de actualización y registro de cada copia.',
          'Bakım: düzeltme iletişim kişisi, güncelleme süreci ve her kopyanın kaydı.',
        ),
      ],
    },
    {
      id: 'measure-placement',
      title: copy(
        'Measure the destination, not the distribution count',
        'Mide el destino, no el número de distribuciones',
        'Dağıtım sayısını değil, bağlantının hedefini ölçün',
      ),
      paragraphs: [
        copy(
          'Keep a stable question sample before and after the placement. Save each answer, date, assistant, language and cited URL. Classify links to your domain separately from links to partner copies and independent coverage. Record whether the answer names your business. Several copies of one statement are not several independent confirmations of it.',
          'Mantén una muestra estable de preguntas antes y después de publicar. Guarda cada respuesta, fecha, asistente, idioma y URL citada. Separa los enlaces a tu dominio de los enlaces a copias de socios y cobertura independiente. Registra si la respuesta nombra tu empresa. Varias copias de una afirmación no son varias confirmaciones independientes.',
          'Yayından önce ve sonra sabit bir soru örneklemi kullanın. Her yanıtı, tarihi, asistanı, dili ve kaynak adresini kaydedin. Kendi alan adınıza verilen bağlantıları ortak kopyalarından ve bağımsız haberlerden ayırın. Yanıtta şirketinizin adının geçip geçmediğini kaydedin. Bir ifadenin birkaç kopyası, birkaç bağımsız doğrulama değildir.',
        ),
        copy(
          'For the reporting definitions, consult our [guide to separate AI visibility measures](/blog/measuring-ai-search-visibility). Track observed referral visits and qualified inquiries separately. A citation after publication does not prove the placement caused it. Renew a partnership against the agreed audience and outcomes, with uncertainty visible; Citevia’s [content planning and creation service](/services/content-creation) can help define the underlying resource and review process.',
          'Para definir el informe, consulta nuestra [guía de métricas diferenciadas de visibilidad en IA](/blog/measuring-ai-search-visibility). Registra por separado las visitas de referencia observadas y las consultas cualificadas. Una cita posterior no demuestra que la publicación la causara. Renueva la colaboración según el público y los resultados acordados, mostrando la incertidumbre; el [servicio de planificación y creación de contenidos de Citevia](/services/content-creation) puede ayudar a definir el recurso y su revisión.',
          'Rapor tanımları için [ayrı yapay zekâ görünürlük ölçütleri rehberimizi](/blog/measuring-ai-search-visibility) kullanın. Gözlenen yönlendirme ziyaretlerini ve nitelikli talepleri ayrı izleyin. Yayından sonra gelen atıf, bunun yayından kaynaklandığını kanıtlamaz. Ortaklığı, belirsizliği göstererek üzerinde anlaşılan kitle ve sonuçlara göre yenileyin; [Citevia içerik planlama ve üretim hizmeti](/services/content-creation), temel kaynağı ve inceleme sürecini belirlemeye yardımcı olabilir.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Content syndication: practical questions',
      'Sindicación de contenidos: preguntas prácticas',
      'İçerik sendikasyonu: pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Will a canonical link make assistants credit my original?',
          '¿Un enlace canonical hará que los asistentes atribuyan el contenido al original?',
          'Canonical bağlantısı asistanların özgün yazımı kaynak göstermesini sağlar mı?',
        ),
        answer: copy(
          'No such guarantee follows from a canonical tag. Google treats canonical signals as preferences and may select another URL. Its syndication guidance recommends blocking partner-copy indexing when exclusion is the goal. Check actual answer links rather than assuming attribution passes through the canonical.',
          'Una etiqueta canonical no ofrece esa garantía. Google trata estas señales como preferencias y puede seleccionar otra URL. Su guía de sindicación recomienda bloquear la indexación de la copia cuando el objetivo es excluirla. Comprueba los enlaces reales de las respuestas sin asumir que la atribución se transmite mediante canonical.',
          'Canonical etiketi böyle bir garanti vermez. Google kanonik sinyalleri tercih olarak değerlendirir ve başka bir adres seçebilir. Sendikasyon rehberi, amaç dışlamaksa ortak kopyasının dizine eklenmesini engellemeyi önerir. Kaynak bilgisinin canonical üzerinden aktarıldığını varsaymak yerine yanıttaki gerçek bağlantıları kontrol edin.',
        ),
      },
      {
        question: copy(
          'Can a copy excluded from Google Search still be a Google AI supporting link?',
          '¿Una copia excluida de Google Search puede ser un enlace de apoyo en su IA?',
          'Google Arama dışında bırakılan kopya, Google yapay zekâsında destekleyici bağlantı olabilir mi?',
        ),
        answer: copy(
          'Google requires supporting pages in AI Overviews and AI Mode to be indexed and eligible for a snippet. A copy excluded from Google Search does not meet that condition. Choose the indexing policy accordingly. A Googlebot-News-only restriction has a narrower scope, and neither setting establishes another assistant’s behavior.',
          'Google exige que las páginas de apoyo de AI Overviews y AI Mode estén indexadas y sean aptas para mostrar un fragmento. Una copia excluida de Google Search no cumple esa condición. Elige la política en consecuencia. Una restricción solo para Googlebot-News tiene un alcance menor, y ninguna de las dos determina el comportamiento de otro asistente.',
          'Google, AI Overviews ve AI Mode için destekleyici sayfaların dizine eklenmesini ve snippet göstermeye uygun olmasını ister. Google Arama dışında bırakılan kopya bu koşulu karşılamaz. Politikayı buna göre seçin. Yalnızca Googlebot-News kısıtlaması daha dar kapsamlıdır; bu ayarların hiçbiri başka bir asistanın davranışını belirlemez.',
        ),
      },
      {
        question: copy(
          'Should every short excerpt point its canonical to the full article?',
          '¿Todo extracto breve debe apuntar su canonical al artículo completo?',
          'Her kısa özetin canonical adresi tam yazıyı mı göstermeli?',
        ),
        answer: copy(
          'No automatic rule applies. A short introduction with a different purpose may not be duplicate or very similar to the full article. Use a clear source link and review canonical choices against the actual content. Do not describe a link to the original as a guarantee that search systems will select it.',
          'No hay una regla automática. Una introducción breve con otro propósito quizá no sea duplicada ni muy similar al artículo completo. Usa un enlace claro a la fuente y revisa la elección canónica según el contenido real. No presentes el enlace al original como garantía de que los buscadores lo seleccionarán.',
          'Otomatik bir kural yoktur. Farklı amacı olan kısa bir giriş, tam yazıyla aynı veya çok benzer olmayabilir. Açık bir kaynak bağlantısı kullanın ve kanonik seçimini gerçek içeriğe göre değerlendirin. Özgün yazıya bağlantıyı, arama sistemlerinin onu seçeceğinin garantisi olarak sunmayın.',
        ),
      },
      {
        question: copy(
          'Do ten republished copies count as ten independent endorsements?',
          '¿Diez copias republicadas cuentan como diez recomendaciones independientes?',
          'Yeniden yayımlanan on kopya, on bağımsız onay sayılır mı?',
        ),
        answer: copy(
          'No. They may represent ten placements of the same source material. Record their shared origin and distinguish them from independent reporting. Count the observed cited URLs and brand mentions under a stated rule; publication volume alone does not establish trust, buyer reach or business impact.',
          'No. Pueden ser diez ubicaciones del mismo material. Registra su origen común y distínguelas de la investigación independiente. Cuenta las URL citadas y menciones observadas con una regla explícita; el volumen de publicaciones no demuestra por sí solo confianza, alcance entre compradores ni impacto comercial.',
          'Hayır. Aynı kaynak materyalin on ayrı yayını olabilirler. Ortak kökenlerini kaydedin ve bağımsız araştırmadan ayırın. Gözlenen kaynak adreslerini ve marka anılmalarını açık bir kurala göre sayın; yayın hacmi tek başına güveni, alıcılara erişimi veya ticari etkiyi kanıtlamaz.',
        ),
      },
      {
        question: copy(
          'What if a partner keeps an outdated version after I correct mine?',
          '¿Qué pasa si el socio conserva una versión antigua después de mi corrección?',
          'Ben düzelttikten sonra iş ortağı eski sürümü tutarsa ne yapmalıyım?',
        ),
        answer: copy(
          'Send the agreed correction contact the exact URL, affected claim and approved replacement. Record the request, then verify the public copy rather than marking it complete on submission. If the partner cannot maintain the full article, discuss replacing it with an accurate excerpt or removing it under the agreed process.',
          'Envía al contacto acordado la URL exacta, la afirmación afectada y el texto aprobado. Registra la solicitud y comprueba la copia pública antes de darla por resuelta. Si el socio no puede mantener el artículo completo, plantea sustituirlo por un extracto correcto o retirarlo mediante el proceso acordado.',
          'Belirlenen düzeltme kişisine tam adresi, ilgili iddiayı ve onaylı yeni metni gönderin. Talebi kaydedin; gönderildiğinde tamamlandı saymak yerine herkese açık kopyayı doğrulayın. İş ortağı tam yazıyı güncel tutamıyorsa doğru bir özetle değiştirmeyi veya anlaşılan süreçle kaldırmayı görüşün.',
        ),
      },
    ],
  },
};
export const syndicationTranslations = translations;
export const syndicationFragments = fragments;

copy(
  `${contentSyndicationAiSearch.seoTitle} | Citevia`,
  `${translations.es[contentSyndicationAiSearch.seoTitle]} | Citevia`,
  `${translations.tr[contentSyndicationAiSearch.seoTitle]} | Citevia`,
);
