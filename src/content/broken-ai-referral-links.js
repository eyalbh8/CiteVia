import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const brokenAiReferralLinks = {
  translations,
  slug: 'broken-ai-referral-links',
  category: 'TECHNICAL SEO',
  published: '2026-11-09',
  updated: '2026-11-09',
  relatedService: 'seo',
  title: copy(
    'How to fix broken AI referral links that send visitors to a 404',
    'Cómo reparar los enlaces de la IA que llevan a un error 404',
    'Ziyaretçileri 404 sayfasına götüren yapay zekâ bağlantıları nasıl düzeltilir?',
  ),
  seoTitle: copy(
    'How to fix broken AI referral links',
    'Cómo reparar los enlaces rotos de la IA',
    'Yapay zekâdan gelen kırık bağlantıları düzeltme',
  ),
  focusKeyphrase: copy(
    'broken AI referral links',
    'enlaces rotos de la IA',
    'yapay zekâdan gelen kırık bağlantılar',
  ),
  description: copy(
    'Trace broken AI referral links to the exact URL. Learn when to repair a page, add a permanent redirect or keep a 404 that helps visitors find their way.',
    'Rastrea los enlaces rotos de la IA hasta la URL exacta. Decide cuándo reparar la página, añadir una redirección o mantener un 404 que oriente al visitante.',
    'Yapay zekâdan gelen kırık bağlantının hedefini bulun. Sayfayı ne zaman onaracağınızı, yeni adrese yönlendireceğinizi veya 404 yanıtını koruyacağınızı öğrenin.',
  ),
  takeaway: copy(
    'To fix broken AI referral links, start with the exact address the visitor opened and what they expected to find. Repair a real page that fails, redirect a moved page to its equivalent, and keep a useful 404 when you have no matching content. A 404 alone cannot tell you who created the link.',
    'Para reparar los enlaces rotos de la IA, averigua qué dirección abrió el visitante y qué esperaba encontrar. Repara las páginas que fallan y redirige las que se han trasladado a su equivalente. Si no tienes contenido que responda a la petición, conserva un 404 útil. El error por sí solo no revela quién creó el enlace.',
    'Yapay zekâdan gelen kırık bağlantıları düzeltmek için önce ziyaretçinin hangi adresi açtığını ve orada ne bulmayı beklediğini öğrenin. Çalışması gereken sayfayı onarın. Taşınan sayfayı yeni adresine yönlendirin. Sitede karşılığı yoksa ziyaretçiye yol gösteren bir 404 sayfası sunun. Tek başına 404 hatası, bağlantıyı kimin oluşturduğunu göstermez.',
  ),
  sections: [
    {
      id: 'trace-the-request',
      title: copy(
        'Trace a broken AI referral link to the first request',
        'Localiza la primera petición de un enlace roto de la IA',
        'Yapay zekâdan gelen kırık bağlantının ilk isteğini bulun',
      ),
      paragraphs: [
        copy(
          'A report that “the AI sent me to a dead page” gives you two leads. Ask for the link and, if available, the sentence around it. A visitor promised a size chart has a different problem from someone looking for the store’s returns policy, even if both arrive on the same error screen.',
          'Cuando alguien dice «la IA me envió a una página que no existe», tienes dos pistas que pedirle. Pide el enlace y, si lo conserva, la frase que lo acompañaba. Quien buscaba una guía de tallas necesita algo distinto de quien quería consultar las devoluciones, aunque ambos hayan visto el mismo error.',
          'Bir ziyaretçi “Yapay zekânın verdiği sayfa açılmadı” dediğinde iki şey isteyin. Bağlantıyı ve elinde varsa bağlantının geçtiği cümleyi alın. Aynı hata ekranını görmüş olsalar bile beden tablosu arayan biriyle iade koşullarını merak eden birinin ihtiyacı farklıdır.',
        ),
        copy(
          'Open the link while signed out. In the browser’s Network panel, reload and inspect the document request. Record the requested path, each redirect, the final status and the page heading. If the error comes and goes, keep the time of a failed request so the site operator can match it to delivery logs.',
          'Abre el enlace sin iniciar sesión. En el panel Red del navegador, recarga la página e inspecciona la petición del documento. Anota la ruta solicitada, cada redirección, el estado final y el encabezado de la página. Si el error es intermitente, guarda la hora de un fallo para que el equipo técnico pueda localizar la petición en sus registros.',
          'Hesabınızdan çıkış yapıp bağlantıyı açın. Tarayıcının Ağ panelinde sayfayı yenileyip belge isteğini inceleyin. İstenen yolu, her yönlendirmeyi, son durum kodunu ve sayfanın başlığını kaydedin. Hata ara sıra oluyorsa başarısız isteğin saatini de yazın. Siteyi işleten ekip bu sayede ilgili kaydı bulabilir.',
        ),
        copy(
          'If all you have is a server log, label the source as observed, reported or unknown. A referring domain is a clue. The original answer can confirm that it displayed that particular link. Use our [AI referral tracking guide](/blog/ai-referrals-to-qualified-inquiries) when you need to connect those visits with later inquiries.',
          'Si solo dispones del registro del servidor, indica si el origen se observó, lo comunicó un visitante o se desconoce. El dominio de referencia es una pista. La respuesta original permite comprobar si incluía ese enlace concreto. Consulta nuestra [guía de seguimiento de visitas desde la IA](/blog/ai-referrals-to-qualified-inquiries) para relacionar esas visitas con consultas comerciales posteriores.',
          'Elinizde yalnızca sunucu kaydı varsa kaynağı nasıl öğrendiğinizi belirtin. Kaynağı kayıtta görmüş, ziyaretçiden duymuş veya hiç saptayamamış olabilirsiniz. Yönlendiren alan adı bir ipucudur. Asıl yanıtı görmek, o bağlantının yanıtta yer aldığını doğrulamanızı sağlar. Bu ziyaretlerden hangilerinin satış talebine dönüştüğünü izlemek için [yapay zekâ kaynaklı trafiği ölçme rehberimizden](/blog/ai-referrals-to-qualified-inquiries) yararlanabilirsiniz.',
        ),
      ],
    },
    {
      id: 'choose-a-response',
      title: copy(
        'Choose a response the destination can justify',
        'Elige una respuesta acorde con lo que ofrece el sitio',
        'Sitenizdeki içeriğe göre nasıl yanıt vereceğinizi seçin',
      ),
      paragraphs: [
        copy(
          'Check the publishing history, old redirects and current catalog before deciding what the URL meant. Ask the person who owns the content whether a reader could complete the promised task on the proposed destination. Similar words in two addresses can hide a difference in model, market or language.',
          'Revisa el historial de publicación, las redirecciones anteriores y el catálogo actual para averiguar a qué correspondía la URL. Pregunta al responsable del contenido si el lector podría completar la tarea prometida en el destino propuesto. Dos direcciones parecidas pueden corresponder a modelos, mercados o idiomas distintos.',
          'Adresin neye karşılık geldiğini anlamak için yayın geçmişini, eski yönlendirmeleri ve güncel kataloğu inceleyin. İçerikten sorumlu kişiye, ziyaretçinin önerilen sayfada beklediği işi yapıp yapamayacağını sorun. İki adresteki benzer sözcükler farklı modelleri, pazarları veya dilleri ifade edebilir.',
        ),
        copy(
          'If the archive confirms a deliberate removal, the [HTTP definition of 410 Gone](https://www.rfc-editor.org/rfc/rfc9110.html#name-410-gone) gives you a way to signal that the loss is likely permanent. For a path with no reliable history, use the checks below.',
          'Si el archivo confirma que la retirada fue intencionada, la [definición del código HTTP 410 Gone](https://www.rfc-editor.org/rfc/rfc9110.html#name-410-gone) indica cómo comunicar que probablemente sea permanente. Si desconoces el historial de la ruta, sigue estas comprobaciones.',
          'Arşiv, içeriğin bilerek kaldırıldığını doğruluyorsa [HTTP standardındaki 410 Gone tanımı](https://www.rfc-editor.org/rfc/rfc9110.html#name-410-gone) kaldırma işleminin büyük olasılıkla kalıcı olduğunu nasıl bildirebileceğinizi açıklar. Yolun geçmişi belirsizse aşağıdaki kontrolleri yapın.',
        ),
      ],
      bullets: [
        copy(
          'A current page sometimes fails. Give the failing path and timestamp to the site operator. Check the route, cache and upstream response before changing the address visitors use.',
          'Una página vigente falla a veces. Facilita al equipo técnico la ruta y la hora del fallo. Revisa el enrutamiento, la caché y la respuesta del servidor de origen antes de cambiar la dirección que usan los visitantes.',
          'Güncel bir sayfa ara sıra hata veriyorsa sorunlu yolu ve hatanın saatini teknik ekibe iletin. Ziyaretçilerin kullandığı adresi değiştirmeden önce rota yapılandırmasını, önbelleği ve kaynak sunucunun yanıtını inceleyin.',
        ),
        copy(
          'The content moved permanently. Send the old path straight to the matching live page. [Google’s redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects) lists HTTP 301 and 308 for a permanent move. Update links you control to point directly to the destination.',
          'El contenido se ha trasladado definitivamente. Envía la ruta antigua directamente a la página equivalente. [La guía de redirecciones de Google](https://developers.google.com/search/docs/crawling-indexing/301-redirects) recoge los códigos HTTP 301 y 308 para traslados permanentes. Actualiza los enlaces que controlas para que apunten al nuevo destino.',
          'İçerik kalıcı olarak taşındıysa eski yolu doğrudan ilgili yeni sayfaya yönlendirin. [Google’ın yönlendirme kılavuzu](https://developers.google.com/search/docs/crawling-indexing/301-redirects) kalıcı taşımalar için HTTP 301 ve 308 kodlarını belirtir. Denetiminizdeki bağlantılarda doğrudan yeni adresi kullanın.',
        ),
        copy(
          'There is no equivalent. Return HTTP 404 and offer a route back to the catalog, help center or site search. In its [guide to soft 404 errors](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#soft-404-errors), Google explains why an error message served with a success status can cause indexing problems.',
          'No existe una página equivalente. Devuelve HTTP 404 y ofrece acceso al catálogo, al centro de ayuda o al buscador del sitio. En su [guía sobre los errores soft 404](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#soft-404-errors), Google explica por qué devolver un código de éxito junto a un mensaje de error puede causar problemas de indexación.',
          'Eşdeğer içerik yoksa HTTP 404 döndürün. Ziyaretçiye kataloğa, yardım merkezine veya site içi aramaya ulaşabileceği bir yol sunun. Google, [soft 404 hataları kılavuzunda](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors#soft-404-errors) hata mesajıyla birlikte başarı kodu göndermenin dizine eklemede neden sorun yaratabileceğini açıklar.',
        ),
      ],
    },
    {
      id: 'test-the-match',
      title: copy(
        'Test the match with the promise in the link',
        'Comprueba si el destino cumple lo que promete el enlace',
        'Hedef sayfayı bağlantının verdiği sözle karşılaştırın',
      ),
      paragraphs: [
        copy(
          'A shop may have a live product page and still lack the document a visitor needs. Read the link in its original sentence, then try to do that one task at the proposed destination. If you cannot find the answer there, offer navigation on the error page while the content owner investigates.',
          'Una tienda puede tener una ficha de producto activa y carecer del documento que busca el visitante. Lee la frase original del enlace e intenta completar esa tarea en el destino propuesto. Si allí no encuentras la respuesta, incluye opciones de navegación en la página de error mientras el responsable revisa el contenido.',
          'Mağazanın ürün sayfası açık olsa da ziyaretçinin aradığı belge sitede bulunmayabilir. Bağlantının geçtiği cümleyi okuyun, ardından önerilen adreste tam olarak o işi yapmayı deneyin. Aranan bilgi yoksa içerik sorumlusu konuyu incelerken hata sayfasında ziyaretçiye başka yollar sunun.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example with two manual links',
          'Ejemplo ilustrativo con dos enlaces a manuales',
          'İki kılavuz bağlantısı üzerinden temsili örnek',
        ),
        text: copy(
          'A fictional lamp shop receives a request for /manuals/arc-mini. The editor finds the same model’s manual at /support/arc-mini/manual and confirms the old address in a release note. A permanent redirect fits. Another link promises an outdoor installation guide for the same lamp. The lamp is indoor-only. Keep the missing guide’s 404 and offer a link to the product specifications.',
          'Una tienda ficticia de lámparas recibe una petición para /manuals/arc-mini. La editora encuentra el manual del mismo modelo en /support/arc-mini/manual y confirma la ruta antigua en una nota de versión. Corresponde una redirección permanente. Otro enlace promete una guía para instalar esa lámpara al aire libre. Es un modelo de interior. Conviene mantener el 404 de la guía inexistente y ofrecer un enlace a la ficha técnica.',
          'Hayali bir aydınlatma mağazasına /manuals/arc-mini adresi için bir istek gelir. Editör aynı modelin kılavuzunu /support/arc-mini/manual adresinde bulur ve eski adresi bir sürüm notunda doğrular. Kalıcı yönlendirme uygundur. Başka bir bağlantı aynı lambanın dış mekân kurulum kılavuzunu vaat eder. Model yalnızca iç mekân içindir. Olmayan kılavuz için 404 yanıtını koruyup ürünün teknik özelliklerine bağlantı vermek uygundur.',
        ),
      },
    },
    {
      id: 'verify-the-repair',
      title: copy(
        'Verify what changed for the next visitor',
        'Verifica qué encontrará el siguiente visitante',
        'Sonraki ziyaretçinin ne göreceğini doğrulayın',
      ),
      paragraphs: [
        copy(
          'Reopen the original address after release. For a redirect, look for one permanent hop to a working page that delivers the promised information. For a missing page, confirm the 404 status and follow one of the suggested links. Also try an unrelated nonexistent address to catch a rule that redirects too broadly.',
          'Tras publicar el cambio, vuelve a abrir la dirección original. Si hay una redirección, comprueba que llega en un solo salto permanente a una página que ofrece la información prometida. Si la página no existe, confirma el estado 404 y prueba uno de los enlaces sugeridos. Abre también otra dirección inexistente para detectar reglas demasiado amplias.',
          'Değişiklik yayına girince ilk adresi yeniden açın. Yönlendirme varsa tek bir kalıcı adımda vaat edilen bilgiyi sunan sayfaya ulaştığınızı doğrulayın. Eksik sayfada 404 kodunu kontrol edin ve önerilen bağlantılardan birini açın. Kuralın kapsamını sınamak için ilgisiz, var olmayan bir adresi de deneyin.',
        ),
        copy(
          'Record two dates if you have them. One marks when the original path began handling the visit correctly. The other marks when you observed an assistant using a different link. You can close the site repair as soon as the first test passes. Our [guide to auditing AI answers](/blog/ai-visibility-audit-playbook) shows how to document later answer samples.',
          'Anota dos fechas si dispones de ellas. Una corresponde al momento en que la ruta original empezó a atender bien la visita. La otra indica cuándo observaste que un asistente usaba otro enlace. Puedes cerrar la reparación del sitio en cuanto pase la primera prueba. Nuestra [guía de auditoría de visibilidad en IA](/blog/ai-visibility-audit-playbook) explica cómo documentar las respuestas que observes más adelante.',
          'Elinizde varsa iki tarihi kaydedin. İlki eski adresin ziyaretçiyi doğru şekilde karşılamaya başladığı gündür. İkincisi, bir asistanın farklı bir bağlantı verdiğini gördüğünüz gündür. İlk test başarılı olduğunda sitedeki onarım kaydını kapatabilirsiniz. [Yapay zekâ görünürlük denetimi rehberimiz](/blog/ai-visibility-audit-playbook) daha sonra gözlemlediğiniz yanıtları nasıl belgeleyeceğinizi anlatır.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Questions about AI links that return 404',
      'Preguntas sobre los enlaces de la IA que devuelven un 404',
      '404 hatası veren yapay zekâ bağlantıları hakkında sorular',
    ),
    items: [
      {
        question: copy(
          'Can I tell whether an assistant invented the URL?',
          '¿Puedo saber si un asistente se inventó la URL?',
          'Adresi asistanın uydurduğunu anlayabilir miyim?',
        ),
        answer: copy(
          'A saved answer can show that the assistant supplied the link. Look for the path in old site exports, redirect maps and public references before calling it invented. If its history is uncertain, record “unknown origin” and choose the response that helps someone opening it today.',
          'Una respuesta guardada puede demostrar que el asistente facilitó el enlace. Busca la ruta en copias antiguas del sitio, mapas de redirecciones y referencias públicas antes de darla por inventada. Si quedan dudas, anota «origen desconocido» y elige la respuesta que ayude a quien abra el enlace hoy.',
          'Kaydedilmiş bir yanıt, bağlantıyı asistanın verdiğini gösterebilir. Adresin uydurulduğuna karar vermeden önce eski site kopyalarını, yönlendirme listelerini ve herkese açık kaynakları inceleyin. Geçmişi belirsizse “kökeni bilinmiyor” diye kaydedin ve bugün adresi açan kişiye uygun yanıtı seçin.',
        ),
      },
      {
        question: copy(
          'Should every bad link go to the homepage?',
          '¿Conviene enviar todos los enlaces rotos a la portada?',
          'Her kırık bağlantıyı ana sayfaya yönlendirmeli miyim?',
        ),
        answer: copy(
          'Use a direct redirect when you can identify a genuine replacement. A homepage rarely delivers a specific manual, price list or policy. Keep the error response for unmatched paths and give visitors a clearly labeled homepage link they can choose.',
          'Usa una redirección directa cuando identifiques un sustituto adecuado. La portada rara vez ofrece el manual, la tarifa o la política que se buscaba. Mantén la respuesta de error en las rutas sin equivalente y ofrece un enlace claro a la portada para quien quiera usarlo.',
          'Gerçek bir karşılık bulduğunuzda doğrudan o sayfaya yönlendirin. Ana sayfa genellikle aranan kılavuzu, fiyat listesini veya koşulları sunmaz. Karşılığı olmayan adreslerde hata yanıtını koruyun ve isteyen ziyaretçiler için adı açıkça belirtilmiş bir ana sayfa bağlantısı ekleyin.',
        ),
      },
      {
        question: copy(
          'When does a 410 make sense?',
          '¿Cuándo tiene sentido devolver un 410?',
          '410 yanıtı ne zaman uygundur?',
        ),
        answer: copy(
          'Use 410 when you know the resource was withdrawn and the removal is likely permanent. If the history is unclear or the path appears never to have existed, 404 is appropriate. Both responses can display helpful navigation.',
          'Usa el 410 cuando sepas que se retiró el recurso y que probablemente no volverá. Si desconoces su historial o parece que la ruta nunca existió, corresponde un 404. En ambos casos puedes mostrar opciones de navegación útiles.',
          'Kaynağın kaldırıldığını ve bu kararın büyük olasılıkla kalıcı olduğunu biliyorsanız 410 kullanın. Geçmiş belirsizse veya adres hiç var olmamış görünüyorsa 404 uygundur. Her iki yanıtta da gezinmeyi kolaylaştıran bağlantılar sunabilirsiniz.',
        ),
      },
      {
        question: copy(
          'Do repeated requests justify publishing the missing page?',
          '¿Justifican las peticiones repetidas crear la página que falta?',
          'Yinelenen istekler eksik sayfayı yayımlamak için yeterli mi?',
        ),
        answer: copy(
          'Check what people are trying to do. Match the request with support questions, on-site searches or direct feedback. A new guide is worthwhile when the need is real and someone can maintain an accurate answer. Repeated automated requests alone give you little evidence of reader demand.',
          'Averigua qué quieren hacer los visitantes. Contrasta la petición con preguntas de soporte, búsquedas internas o comentarios directos. Una guía merece la pena si responde a una necesidad real y alguien puede mantenerla al día. Las peticiones automáticas repetidas por sí solas dicen poco sobre la demanda de los lectores.',
          'Ziyaretçilerin ne yapmak istediğini araştırın. İstekleri destek sorularıyla, site içi aramalarla veya doğrudan geri bildirimle karşılaştırın. Gerçek bir ihtiyaç ve yanıtı güncel tutabilecek bir sorumlu varsa yeni bir rehber anlamlıdır. Tekrarlanan otomatik istekler tek başına okur talebine dair çok az bilgi verir.',
        ),
      },
    ],
  },
};

copy(
  `${brokenAiReferralLinks.seoTitle} | Citevia`,
  `${translations.es[brokenAiReferralLinks.seoTitle]} | Citevia`,
  `${translations.tr[brokenAiReferralLinks.seoTitle]} | Citevia`,
);

export const brokenLinkTranslations = translations;
export const brokenLinkFragments = fragments;
