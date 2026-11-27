import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const videoSeo = {
  slug: 'video-seo-ai-search',
  category: 'CONTENT',
  published: '2026-11-27',
  updated: '2026-11-27',
  relatedService: 'content-creation',
  title: copy(
    'Video SEO for AI search: chapters, captions or clips?',
    'SEO de vídeo para búsquedas con IA: ¿capítulos, subtítulos o clips?',
    'Yapay zekâ araması için video SEO: bölüm, altyazı veya klip?',
  ),
  seoTitle: copy(
    'Video SEO for AI Search: Chapters or Clips?',
    'SEO de vídeo para IA: ¿capítulos o clips?',
    'Yapay Zekâ İçin Video SEO: Bölüm mü, Klip mi?',
  ),
  focusKeyphrase: copy(
    'video SEO for AI search',
    'SEO de vídeo para búsquedas con IA',
    'yapay zekâ araması için video SEO',
  ),
  description: copy(
    'Improve video SEO for AI search with checked captions, useful chapters and a clear publishing plan. Decide when a webinar needs clips or a watch page.',
    'Mejora el SEO de vídeo para búsquedas con IA: revisa subtítulos y capítulos, y decide cuándo un webinar necesita clips o una página para verlo.',
    'Yapay zekâ araması için video SEO: altyazı ve bölümleri kontrol edin; bir webinar için ne zaman klip veya ayrı izleme sayfası gerektiğine karar verin.',
  ),
  takeaway: copy(
    'Start video SEO for AI search with one useful recording. Check its captions, label the sections accurately and make the relevant answer easy to reach. Keep a long video when viewers need the whole explanation. Create a clip when one answer can stand alone without losing its conditions. These improvements help viewers; they do not guarantee AI citations.',
    'Empieza el SEO de vídeo para búsquedas con IA con una grabación útil. Revisa los subtítulos, nombra los capítulos con precisión y facilita el acceso a la respuesta. Conserva el vídeo largo si el público necesita la explicación completa. Crea un clip cuando una respuesta pueda entenderse sola sin perder sus condiciones. Estas mejoras ayudan al público; no garantizan citas de IA.',
    'Yapay zekâ araması için video SEO çalışmasına yararlı bir kayıtla başlayın. Altyazıları kontrol edin, bölümleri doğru adlandırın ve ilgili yanıta ulaşmayı kolaylaştırın. İzleyici tüm açıklamaya ihtiyaç duyuyorsa uzun videoyu koruyun. Bir yanıt, koşulları kaybolmadan tek başına anlaşılabiliyorsa klip oluşturun. Bu iyileştirmeler izleyiciye yardımcı olur; yapay zekâ atıflarını garanti etmez.',
  ),
  sections: [
    {
      id: 'choose-the-format',
      title: copy(
        'Choose the video format around one buyer question',
        'Elige el formato según una pregunta del comprador',
        'Video biçimini alıcının tek bir sorusuna göre seçin',
      ),
      paragraphs: [
        copy(
          'Marketers in an [August 26, 2026 discussion about video repurposing for AI search](https://www.reddit.com/r/SocialMediaManagers/comments/1vz7ndj/if_you_manage_videopodcast_content_theres_a/) debate whether teams should split webinars into short answers. Replies disagree about short clips versus chapters in long recordings. That disagreement identifies a publishing decision, not a proven duration that assistants prefer.',
          'Quienes participan en un [debate del 26 de agosto de 2026 sobre reutilizar vídeos para búsquedas con IA](https://www.reddit.com/r/SocialMediaManagers/comments/1vz7ndj/if_you_manage_videopodcast_content_theres_a/) se preguntan si conviene dividir los webinars en respuestas breves. Los participantes discrepan entre clips cortos y capítulos en grabaciones largas. Esa discrepancia muestra una decisión editorial, no una duración que los asistentes prefieran de forma demostrada.',
          'Pazarlamacılar, [26 Ağustos 2026 tarihli, videoları yapay zekâ araması için yeniden kullanma tartışmasında](https://www.reddit.com/r/SocialMediaManagers/comments/1vz7ndj/if_you_manage_videopodcast_content_theres_a/) webinarların kısa yanıtlara bölünüp bölünmemesi gerektiğini tartışıyor. Yanıtlar, kısa klipler ile uzun kayıtlardaki bölümler konusunda ayrılıyor. Bu anlaşmazlık bir yayın kararını ortaya koyar; asistanların tercih ettiği kanıtlanmış bir süreyi değil.',
        ),
        copy(
          'Pick a question your recording actually answers, such as whether a buyer can export their records. Note where the explanation starts and where its limitations appear. Keep the full recording if those parts depend on the wider demonstration. Make a separate clip only if it preserves the answer, relevant screen detail and restrictions. Use our [buyer-question research method](/blog/high-intent-prompt-intelligence) to choose a real need before commissioning more footage.',
          'Elige una pregunta que la grabación responda, como si el comprador puede exportar sus registros. Anota dónde empieza la explicación y dónde aparecen sus límites. Conserva la grabación completa si esas partes dependen de la demostración general. Haz un clip solo si mantiene la respuesta, los detalles relevantes de pantalla y las restricciones. Usa nuestro [método para investigar preguntas de compradores](/blog/high-intent-prompt-intelligence) para elegir una necesidad real antes de grabar más.',
          'Kaydın gerçekten yanıtladığı bir soruyu seçin; örneğin alıcının kayıtlarını dışa aktarıp aktaramayacağını. Açıklamanın başladığı yeri ve sınırlamaların belirtildiği anı not edin. Bu kısımlar gösterimin bütününe bağlıysa tam kaydı koruyun. Ayrı klip ancak yanıtı, ilgili ekran ayrıntılarını ve kısıtları koruyorsa hazırlayın. Daha fazla çekim yaptırmadan önce gerçek bir ihtiyaç seçmek için [alıcı sorularını araştırma yöntemimizi](/blog/high-intent-prompt-intelligence) kullanın.',
        ),
      ],
    },
    {
      id: 'check-the-captions',
      title: copy(
        'Check captions against the words and the screen',
        'Contrasta los subtítulos con el audio y la pantalla',
        'Altyazıları ses ve ekranla karşılaştırın',
      ),
      paragraphs: [
        copy(
          '[YouTube’s automatic-caption guidance](https://support.google.com/youtube/answer/6373554?hl=en) warns that generated captions can misrepresent speech and recommends reviewing them. Listen while reading. Check product names, numbers and words such as “not” that can reverse a claim. Review translated subtitle tracks separately; a correct original does not establish a correct translation.',
          '[La guía de YouTube sobre subtítulos automáticos](https://support.google.com/youtube/answer/6373554?hl=en) advierte de que pueden transcribir mal el audio y recomienda revisarlos. Escucha mientras lees. Comprueba nombres de productos, cifras y palabras como «no», que pueden invertir una afirmación. Revisa por separado las pistas traducidas: un original correcto no demuestra que la traducción también lo sea.',
          '[YouTube’un otomatik altyazı rehberi](https://support.google.com/youtube/answer/6373554?hl=en), üretilen altyazıların konuşmayı yanlış aktarabileceğini belirtir ve gözden geçirilmelerini önerir. Okurken dinleyin. Ürün adlarını, sayıları ve anlamı tersine çevirebilecek “değil” gibi sözcükleri kontrol edin. Çevrilmiş altyazı parçalarını ayrı inceleyin; doğru özgün metin, çevirinin de doğru olduğunu göstermez.',
        ),
        copy(
          'Distinguish a transcription error from an outdated statement. Fix captions that misheard the speaker. If the speaker gave an old price or an incorrect limit, keep the transcript faithful and add a clear, dated correction beside the recording. Replace or re-edit the video when the error would still mislead viewers. A silent caption rewrite cannot repair incorrect audio.',
          'Distingue un error de transcripción de una afirmación desactualizada. Corrige los subtítulos que interpretaron mal al hablante. Si este dio un precio antiguo o un límite incorrecto, mantén una transcripción fiel y añade una corrección clara y fechada junto a la grabación. Sustituye o reedita el vídeo si el error sigue confundiendo al público. Cambiar solo los subtítulos no corrige un audio erróneo.',
          'Yazıya aktarma hatası ile güncelliğini yitirmiş ifadeyi ayırın. Konuşmacıyı yanlış aktaran altyazıyı düzeltin. Konuşmacı eski bir fiyat veya yanlış bir sınır verdiyse dökümü aslına sadık tutun; kaydın yanında açık, tarihli bir düzeltme yayımlayın. Hata izleyiciyi hâlâ yanıltacaksa videoyu değiştirin veya yeniden düzenleyin. Yalnızca altyazıyı değiştirmek, yanlış sesi düzeltmez.',
        ),
      ],
    },
    {
      id: 'useful-chapters',
      title: copy(
        'Use chapters to expose complete answers',
        'Usa capítulos para acceder a respuestas completas',
        'Tam yanıtlara ulaşmak için bölümleri kullanın',
      ),
      paragraphs: [
        copy(
          'For manual YouTube chapters, add timestamps and titles to the description. [YouTube’s chapter instructions](https://support.google.com/youtube/answer/9884579?hl=en) require the list to begin at 00:00, contain at least three timestamps in ascending order, and give each chapter at least ten seconds. Manual chapters override automatic ones. These are chapter-format rules, not evidence of an ideal video length for AI search.',
          'Para añadir capítulos manuales en YouTube, incluye marcas de tiempo y títulos en la descripción. [Las instrucciones de YouTube para capítulos](https://support.google.com/youtube/answer/9884579?hl=en) exigen empezar en 00:00, incluir al menos tres marcas en orden ascendente y dar a cada capítulo un mínimo de diez segundos. Los capítulos manuales sustituyen a los automáticos. Son reglas de formato, no pruebas de una duración ideal para búsquedas con IA.',
          'YouTube’da elle bölüm eklemek için açıklamaya zaman damgaları ve başlıklar yazın. [YouTube’un bölüm ekleme yönergeleri](https://support.google.com/youtube/answer/9884579?hl=en), listenin 00:00’da başlamasını, artan sırada en az üç zaman damgası içermesini ve her bölümün en az on saniye olmasını ister. Elle eklenen bölümler otomatik bölümlerin yerini alır. Bunlar bölüm biçimi kurallarıdır; yapay zekâ araması için ideal video süresinin kanıtı değildir.',
        ),
        copy(
          'Choose labels that describe what the viewer will learn. Open every timestamp after saving and check that it lands before the necessary explanation. If you shorten the recording, check the times again. A chapter called “Export limits” should not start after the sentence that excludes attachments.',
          'Elige etiquetas que describan lo que aprenderá el público. Abre cada marca después de guardar y comprueba que lleva al inicio de la explicación necesaria. Si acortas la grabación, revisa los tiempos. Un capítulo llamado «Límites de exportación» no debería empezar después de la frase que excluye los archivos adjuntos.',
          'İzleyicinin ne öğreneceğini anlatan adlar seçin. Kaydettikten sonra her zaman damgasını açıp gerekli açıklamadan önceye götürdüğünü kontrol edin. Kaydı kısaltırsanız süreleri yeniden kontrol edin. “Dışa aktarma sınırları” adlı bölüm, eklerin kapsam dışında olduğunu söyleyen cümleden sonra başlamamalı.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a fictional software demo',
          'Ejemplo ilustrativo: una demostración de software ficticia',
          'Açıklayıcı örnek: kurgusal bir yazılım demosu',
        ),
        text: copy(
          'A twelve-minute demo uses three chapters: 00:00 “Who can export”, 02:20 “Download transaction records”, and 07:10 “Attachments and other exclusions”. The team keeps the full demo and creates a shorter export walkthrough only after including the administrator requirement and attachment exclusion. These invented timings illustrate an editing decision; they are not a citation formula or a Citevia result.',
          'Una demo de doce minutos tiene tres capítulos: 00:00 «Quién puede exportar», 02:20 «Descargar registros de transacciones» y 07:10 «Adjuntos y otras exclusiones». El equipo conserva la demo completa y crea un tutorial breve solo después de incluir el requisito de ser administrador y la exclusión de adjuntos. Estos tiempos inventados ilustran una decisión de edición; no son una fórmula para lograr citas ni un resultado de Citevia.',
          'On iki dakikalık bir demo üç bölüm kullanır: 00:00 “Kim dışa aktarabilir”, 02:20 “İşlem kayıtlarını indirme” ve 07:10 “Ekler ve diğer istisnalar”. Ekip tam demoyu korur; kısa dışa aktarma anlatımını ancak yönetici olma koşulunu ve eklerin kapsam dışında kaldığını dahil ettikten sonra oluşturur. Uydurulmuş bu zamanlar bir düzenleme kararını açıklar; atıf formülü veya Citevia sonucu değildir.',
        ),
      },
    },
    {
      id: 'publish-the-page',
      title: copy(
        'Decide what the page around the video should do',
        'Decide qué debe ofrecer la página del vídeo',
        'Videonun bulunduğu sayfanın amacını belirleyin',
      ),
      paragraphs: [
        copy(
          'For Google video features, [Google’s video SEO guidance](https://developers.google.com/search/docs/appearance/video) describes a dedicated watch page whose main purpose is showing one video. An article with a supporting embed has a different purpose and can still appear as a text result. Create a watch page when watching is the visitor’s main task; do not turn every article into one.',
          'Para las funciones de vídeo de Google, [la guía de Google sobre SEO de vídeo](https://developers.google.com/search/docs/appearance/video) describe una página dedicada cuyo objetivo principal es mostrar un solo vídeo. Un artículo con un vídeo de apoyo tiene otro propósito y puede aparecer como resultado de texto. Crea una página de visualización cuando ver el vídeo sea la tarea principal; no conviertas todos los artículos en una.',
          'Google’ın video özellikleri için [Google’ın video SEO rehberi](https://developers.google.com/search/docs/appearance/video), temel amacı tek bir videoyu izletmek olan ayrı bir sayfa tanımlar. Destekleyici video içeren bir makalenin amacı farklıdır ve metin sonucu olarak görünebilir. İzlemek ziyaretçinin temel işiyse ayrı izleme sayfası oluşturun; her makaleyi böyle bir sayfaya dönüştürmeyin.',
        ),
        copy(
          'On the page you maintain, name the subject, speaker or organization and recording date accurately. Add a useful written summary, the relevant conditions and links to current documentation. If you publish a transcript, identify it clearly and check it against the recording. The written explanation should help someone who cannot watch now. Ask the technical owner to check playback, thumbnail access and any VideoObject data against the actual video.',
          'En la página que mantienes, identifica con precisión el tema, el ponente o la organización y la fecha de grabación. Añade un resumen útil, las condiciones relevantes y enlaces a documentación actual. Si publicas una transcripción, identifícala y contrástala con la grabación. La explicación escrita debe ayudar a quien no puede ver el vídeo ahora. Pide al responsable técnico que compruebe la reproducción, el acceso a la miniatura y los datos VideoObject frente al vídeo real.',
          'Yönettiğiniz sayfada konuyu, konuşmacıyı veya kuruluşu ve kayıt tarihini doğru belirtin. Yararlı bir yazılı özet, ilgili koşullar ve güncel dokümantasyon bağlantıları ekleyin. Döküm yayımlıyorsanız bunu açıkça adlandırın ve kayıtla karşılaştırın. Yazılı açıklama, o anda izleyemeyen kişiye yardımcı olmalı. Teknik sorumludan oynatmayı, küçük resme erişimi ve varsa VideoObject verilerini gerçek videoyla karşılaştırmasını isteyin.',
        ),
      ],
    },
    {
      id: 'verify-and-observe',
      title: copy(
        'Finish the publishing checks, then observe AI search',
        'Completa la revisión editorial y después observa la búsqueda con IA',
        'Yayın kontrollerini tamamlayın, sonra yapay zekâ aramasını gözlemleyin',
      ),
      paragraphs: [
        copy(
          '[Google’s AI-search guidance](https://developers.google.com/search/docs/appearance/ai-features) requires no special AI schema and recommends making important information available in text. It does not establish that every assistant reads every video or transcript. Treat improved citation coverage as a hypothesis to observe, not the acceptance condition for a caption correction.',
          '[La guía de Google para búsquedas con IA](https://developers.google.com/search/docs/appearance/ai-features) no exige un esquema especial para IA y recomienda ofrecer la información importante en texto. No demuestra que todos los asistentes lean cada vídeo o transcripción. Trata una mayor presencia en citas como una hipótesis que observar, no como condición para dar por corregidos los subtítulos.',
          '[Google’ın yapay zekâ araması rehberi](https://developers.google.com/search/docs/appearance/ai-features), özel yapay zekâ şeması istemez ve önemli bilgilerin metin olarak sunulmasını önerir. Bu, her asistanın her videoyu veya dökümü okuduğunu göstermez. Atıf kapsamının artmasını gözlemlenecek bir varsayım olarak ele alın; altyazı düzeltmesinin kabul koşulu olarak değil.',
        ),
      ],
      bullets: [
        copy(
          'Meaning: captions, summary and clips preserve the same answer and qualifications.',
          'Sentido: subtítulos, resumen y clips mantienen la misma respuesta y sus condiciones.',
          'Anlam: altyazı, özet ve klipler aynı yanıtı ve koşulları korur.',
        ),
        copy(
          'Navigation: timestamps reach the intended sections and the next-step link works on mobile.',
          'Navegación: las marcas llevan a las secciones previstas y el enlace al siguiente paso funciona en móvil.',
          'Gezinme: zaman damgaları doğru bölümlere götürür ve sonraki adım bağlantısı mobilde çalışır.',
        ),
        copy(
          'Maintenance: an owner can update the recording, captions and companion page when facts change.',
          'Mantenimiento: un responsable puede actualizar grabación, subtítulos y página cuando cambian los datos.',
          'Bakım: bilgiler değiştiğinde bir sorumlu kaydı, altyazıları ve eşlik eden sayfayı güncelleyebilir.',
        ),
      ],
    },
    {
      id: 'record-the-destination',
      title: copy(
        'Record which destination an answer actually cites',
        'Anota qué destino cita realmente la respuesta',
        'Yanıtın gerçekte hangi adrese atıf yaptığını kaydedin',
      ),
      paragraphs: [
        copy(
          'Save the question, answer, date, assistant and exact cited URL before and after publication. Separate a YouTube link, your own watch page and a third-party article. Our [framework for reporting AI citations and visits separately](/blog/measuring-ai-search-visibility) explains those distinctions. Citevia’s [content creation service for buyer resources](/services/content-creation) can help plan the recording’s written companion. Start with one video your audience already needs, then expand when you can maintain the whole resource.',
          'Guarda la pregunta, la respuesta, la fecha, el asistente y la URL citada antes y después de publicar. Distingue un enlace de YouTube, tu página de visualización y un artículo ajeno. Nuestro [marco para informar de citas de IA y visitas por separado](/blog/measuring-ai-search-visibility) explica esas diferencias. El [servicio de creación de contenido de Citevia para compradores](/services/content-creation) puede ayudar a planificar el texto que acompaña a la grabación. Empieza con un vídeo que tu público ya necesite y amplía cuando puedas mantener todo el recurso.',
          'Yayından önce ve sonra soruyu, yanıtı, tarihi, asistanı ve atıf yapılan tam URL’yi saklayın. YouTube bağlantısını, kendi izleme sayfanızı ve üçüncü taraf makalesini ayırın. [Yapay zekâ atıflarını ve ziyaretleri ayrı raporlama çerçevemiz](/blog/measuring-ai-search-visibility) bu farkları açıklar. Citevia’nın [alıcılara yönelik içerik oluşturma hizmeti](/services/content-creation), kayda eşlik eden metni planlamaya yardımcı olabilir. Kitlenizin zaten ihtiyaç duyduğu tek bir videoyla başlayın; kaynağın tamamını güncel tutabildiğinizde kapsamı genişletin.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Practical questions about videos and AI search',
      'Preguntas prácticas sobre vídeos y búsquedas con IA',
      'Videolar ve yapay zekâ araması hakkında pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Is there a best clip length for AI citations?',
          '¿Hay una duración ideal de los clips para lograr citas de IA?',
          'Yapay zekâ atıfları için en iyi klip süresi var mı?',
        ),
        answer: copy(
          'The sources here establish no universal duration. Choose a length that preserves one complete explanation and its conditions. A short extract that omits an exception can be less useful than a clearly labeled chapter in a longer video. Test the viewer’s task before making more cuts.',
          'Estas fuentes no establecen una duración universal. Elige una que conserve una explicación completa y sus condiciones. Un extracto breve que omite una excepción puede ser menos útil que un capítulo bien identificado dentro de un vídeo largo. Prueba la tarea del público antes de hacer más cortes.',
          'Buradaki kaynaklar evrensel bir süre belirlemez. Tam bir açıklamayı ve koşullarını koruyan süreyi seçin. Bir istisnayı dışarıda bırakan kısa kesit, uzun videoda açıkça adlandırılmış bir bölümden daha az yararlı olabilir. Daha fazla kesmeden önce izleyicinin yapacağı işi sınayın.',
        ),
      },
      {
        question: copy(
          'Are a transcript and captions interchangeable?',
          '¿Son intercambiables la transcripción y los subtítulos?',
          'Döküm ile altyazı birbirinin yerine geçer mi?',
        ),
        answer: copy(
          'They serve different reading situations. Captions follow the video’s timing; a transcript lets someone read the content separately. Check both against the recording. A summary can explain the main answer more briefly, but label it as a summary rather than implying it contains every spoken detail.',
          'Sirven a situaciones de lectura distintas. Los subtítulos siguen el ritmo del vídeo; la transcripción permite leer el contenido por separado. Contrasta ambos con la grabación. Un resumen puede explicar la respuesta con brevedad, pero identifícalo como tal sin sugerir que incluye cada detalle hablado.',
          'Farklı okuma durumlarına hizmet ederler. Altyazı videonun zamanlamasını izler; döküm içeriği ayrı okumayı sağlar. İkisini de kayıtla karşılaştırın. Özet, temel yanıtı daha kısa anlatabilir; ancak söylenen her ayrıntıyı içerdiği izlenimini vermek yerine özet olduğunu belirtin.',
        ),
      },
      {
        question: copy(
          'Why are my manual YouTube chapters missing?',
          '¿Por qué no aparecen mis capítulos manuales de YouTube?',
          'Elle eklediğim YouTube bölümleri neden görünmüyor?',
        ),
        answer: copy(
          'Check the saved description first: start at 00:00, include at least three ascending timestamps and leave at least ten seconds per chapter. YouTube also points creators without chapter access to Advanced features. Confirm the published player rather than assuming that a saved description proves chapters appeared.',
          'Revisa primero la descripción guardada: empieza en 00:00, incluye al menos tres marcas ascendentes y deja diez segundos como mínimo por capítulo. YouTube también remite a las funciones avanzadas a quienes no tienen acceso a capítulos. Comprueba el reproductor público; guardar la descripción no demuestra que hayan aparecido.',
          'Önce kaydedilen açıklamayı kontrol edin: 00:00’da başlayın, artan sırada en az üç zaman damgası ekleyin ve her bölüme en az on saniye ayırın. YouTube, bölüm erişimi olmayan içerik üreticilerini Gelişmiş özelliklere de yönlendirir. Açıklamanın kaydedilmesi bölümlerin göründüğünü kanıtlamaz; yayımlanan oynatıcıyı kontrol edin.',
        ),
      },
      {
        question: copy(
          'Does “video is not the main content” mean the article cannot rank?',
          '¿Que el vídeo no sea el contenido principal impide posicionar el artículo?',
          '“Video ana içerik değil” uyarısı, makalenin sıralanamayacağı anlamına mı gelir?',
        ),
        answer: copy(
          'No. Google distinguishes eligibility for video features from ordinary text results. A helpful article can contain a supporting video without becoming a watch page. If video discovery is the goal, review a dedicated page where that video is the main reason to visit. Indexing and placement are still not guaranteed.',
          'No. Google distingue la elegibilidad para funciones de vídeo de los resultados de texto habituales. Un artículo útil puede incluir un vídeo de apoyo sin convertirse en una página de visualización. Si buscas descubrimiento del vídeo, evalúa una página dedicada donde verlo sea el motivo principal de la visita. La indexación y la aparición siguen sin estar garantizadas.',
          'Hayır. Google, video özelliklerine uygunluk ile normal metin sonuçlarını ayırır. Yararlı bir makale, izleme sayfasına dönüşmeden destekleyici video içerebilir. Amaç videonun keşfedilmesiyse temel ziyaret nedeni o videoyu izlemek olan ayrı bir sayfayı değerlendirin. Dizine eklenme ve sonuçlarda yer alma yine de garanti değildir.',
        ),
      },
      {
        question: copy(
          'If an assistant cites our YouTube upload, is that a visit to our website?',
          'Si un asistente cita nuestro vídeo de YouTube, ¿cuenta como visita a nuestra web?',
          'Asistan YouTube yüklememize atıf yaparsa bu, sitemize ziyaret sayılır mı?',
        ),
        answer: copy(
          'No. Record it as a citation to that YouTube URL. A brand mention, a link to a video and a recorded website visit are separate observations. Check your own referral and inquiry records before reporting traffic or leads. The cited destination matters even when your organization owns the channel.',
          'No. Regístralo como una cita a esa URL de YouTube. Una mención de marca, un enlace a un vídeo y una visita registrada a la web son observaciones distintas. Consulta tus registros de referencias y consultas antes de informar de tráfico o contactos. El destino citado importa aunque tu organización sea propietaria del canal.',
          'Hayır. Bunu ilgili YouTube URL’sine yapılan atıf olarak kaydedin. Marka anılması, videoya bağlantı ve kaydedilmiş web sitesi ziyareti ayrı gözlemlerdir. Trafik veya müşteri adayı raporlamadan önce kendi yönlendirme ve talep kayıtlarınızı kontrol edin. Kanal kuruluşunuza ait olsa da atıf yapılan hedef önemlidir.',
        ),
      },
    ],
  },
  translations,
};

copy(
  `${videoSeo.seoTitle} | Citevia`,
  `${translations.es[videoSeo.seoTitle]} | Citevia`,
  `${translations.tr[videoSeo.seoTitle]} | Citevia`,
);

export const videoSeoTranslations = translations;
export const videoSeoFragments = fragments;
