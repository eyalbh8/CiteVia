import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const googleReviewRequests = {
  translations,
  slug: 'google-review-requests',
  category: 'STRATEGY',
  published: '2026-11-18',
  updated: '2026-11-18',
  relatedService: 'brand-reputation-management',
  title: copy(
    'Google review requests: what to ask when AI visibility matters',
    'Cómo pedir reseñas en Google cuando importa la visibilidad en IA',
    'Yapay zekâ görünürlüğü için Google yorumu nasıl istenir?',
  ),
  seoTitle: copy(
    'Google Review Requests for AI Search',
    'Pedir reseñas en Google para búsquedas con IA',
    'Yapay zekâ araması için Google yorumu isteme',
  ),
  focusKeyphrase: copy('Google review requests', 'pedir reseñas en Google', 'Google yorumu isteme'),
  description: copy(
    'Improve Google review requests with a neutral message and a tested link. Learn what to avoid, how to reply and why reviews cannot guarantee AI visibility.',
    'Aprende a pedir reseñas en Google con un mensaje neutral y un enlace probado. Revisa qué evitar, cómo responder y los límites de la visibilidad en IA.',
    'Google yorumu isteme sürecini tarafsız bir mesaj ve çalışan bağlantıyla kurun. Nelerden kaçınmalı, nasıl yanıt vermeli? Yapay zekâ görünürlüğünün sınırlarını öğrenin.',
  ),
  takeaway: copy(
    'Google review requests should invite honest feedback and make it easy to reach the right business profile. Leave the rating and wording to the customer. Do not supply keywords, a ready-made review or a reward. If AI visibility is the goal, inspect actual answers and their sources separately: collecting reviews does not guarantee a recommendation.',
    'Al pedir reseñas en Google, invita a compartir una opinión sincera y facilita el acceso al perfil correcto del negocio. Deja la puntuación y las palabras en manos del cliente. No le des palabras clave, una reseña ya escrita ni una recompensa. Si buscas visibilidad en IA, revisa las respuestas y sus fuentes por separado: conseguir reseñas no garantiza una recomendación.',
    'Google yorumu isteme süreci, müşteriyi dürüst geri bildirim vermeye davet etmeli ve doğru işletme profiline ulaşmasını kolaylaştırmalıdır. Puanı ve ifadeleri müşteriye bırakın. Anahtar kelime, hazır yorum veya ödül sunmayın. Hedef yapay zekâ görünürlüğüyse yanıtları ve kaynaklarını ayrıca inceleyin: yorum toplamak önerilmeyi garanti etmez.',
  ),
  sections: [
    {
      id: 'review-request-boundaries',
      title: copy(
        'Keep Google review requests free of suggested keywords',
        'Pide reseñas en Google sin sugerir palabras clave',
        'Google yorumu isterken anahtar kelime önermeyin',
      ),
      paragraphs: [
        copy(
          '[An October 24, 2026 discussion about review keywords](https://www.reddit.com/r/localseo/comments/1xefb43/how_much_do_keywords_in_google_reviews_impact_seo/) asks whether words in customer reviews and owner replies affect SEO. The replies include claims about AI summaries. These are practitioner questions and opinions, not controlled evidence that a phrase improves visibility.',
          '[Una conversación del 24 de octubre de 2026 sobre palabras clave en reseñas](https://www.reddit.com/r/localseo/comments/1xefb43/how_much_do_keywords_in_google_reviews_impact_seo/) pregunta si las palabras de los clientes y las respuestas del negocio influyen en el SEO. Los comentarios incluyen afirmaciones sobre resúmenes de IA. Son preguntas y opiniones de profesionales, no pruebas controladas de que una frase mejore la visibilidad.',
          '[24 Ekim 2026 tarihli yorumlarda anahtar kelime tartışması](https://www.reddit.com/r/localseo/comments/1xefb43/how_much_do_keywords_in_google_reviews_impact_seo/), müşteri yorumlarının ve işletme yanıtlarının SEO üzerindeki etkisini soruyor. Katılımcılar yapay zekâ özetleri hakkında da iddialar paylaşıyor. Bunlar uygulayıcıların soruları ve görüşleridir; bir ifadenin görünürlüğü artırdığına dair kontrollü kanıt değildir.',
        ),
        copy(
          '[Google’s Maps contribution policy](https://support.google.com/contributionpolicy/answer/7400114?hl=en) says merchants should not request specific content in reviews. It also prohibits incentives and selectively soliciting positive reviews. A request to mention a service, town or employee therefore needs removing from your template, even if an SEO supplier recommended it.',
          '[La política de contribuciones de Google Maps](https://support.google.com/contributionpolicy/answer/7400114?hl=en) indica que los negocios no deben pedir contenido específico en las reseñas. También prohíbe los incentivos y solicitar opiniones positivas de forma selectiva. Por tanto, elimina de la plantilla cualquier petición de mencionar un servicio, una localidad o un empleado, aunque la haya recomendado un proveedor de SEO.',
          '[Google Maps katkı politikası](https://support.google.com/contributionpolicy/answer/7400114?hl=en), işletmelerin yorumlarda belirli içerikler istememesi gerektiğini belirtir. Teşvikleri ve seçici biçimde olumlu yorum istemeyi de yasaklar. Bu nedenle bir SEO sağlayıcısı önermiş olsa bile hizmet, şehir veya çalışan adı belirtme talebini mesaj şablonundan çıkarın.',
        ),
      ],
    },
    {
      id: 'neutral-invitation',
      title: copy(
        'Use one neutral invitation and test its destination',
        'Usa una invitación neutral y comprueba el destino',
        'Tarafsız bir davet kullanın ve hedefini kontrol edin',
      ),
      paragraphs: [
        copy(
          'Choose a consistent moment after a real customer interaction, such as a completed appointment. Apply the same invitation rule regardless of the satisfaction score. Let customers decide whether to participate. Keep a support contact available to everyone without making a private feedback form the gate to a public review.',
          'Elige un momento coherente después de una interacción real, como una cita terminada. Aplica la misma regla de invitación sea cual sea la puntuación de satisfacción. Deja que el cliente decida si participa. Ofrece un contacto de soporte a todos, sin convertir un formulario privado en el filtro de acceso a una reseña pública.',
          'Tamamlanan bir randevu gibi gerçek bir müşteri etkileşiminden sonra tutarlı bir zaman seçin. Memnuniyet puanından bağımsız olarak aynı davet kuralını uygulayın. Katılıp katılmamaya müşteri karar versin. Özel geri bildirim formunu herkese açık yorumun ön koşulu yapmadan destek iletişimini herkes için erişilebilir tutun.',
        ),
        copy(
          '[Google’s review-link instructions](https://support.google.com/business/answer/16816815) explain how to get a link or QR code from the Business Profile. Use a computer browser to generate the QR code. Before printing a batch of cards, scan one with a phone and confirm the business name and branch. Test the link as a customer, away from the account that manages the profile.',
          '[Las instrucciones de Google para crear enlaces de reseñas](https://support.google.com/business/answer/16816815) explican cómo obtener un enlace o código QR desde el Perfil de Empresa. Genera el QR con un navegador de ordenador. Antes de imprimir tarjetas, escanea una con el móvil y confirma el nombre y la sucursal. Prueba el enlace como cliente, sin usar la cuenta que administra el perfil.',
          '[Google’ın yorum bağlantısı oluşturma talimatları](https://support.google.com/business/answer/16816815), İşletme Profili üzerinden bağlantı veya QR kodu almayı açıklar. QR kodunu bilgisayar tarayıcısında oluşturun. Kartları topluca basmadan önce birini telefonla tarayıp işletme adını ve şubeyi doğrulayın. Bağlantıyı profili yöneten hesap dışında, bir müşteri gibi deneyin.',
        ),
      ],
      example: {
        title: copy(
          'Example invitation for a fictional repair shop',
          'Invitación de ejemplo para un taller ficticio',
          'Kurgusal bir tamir dükkânı için örnek davet',
        ),
        text: copy(
          '“Thank you for choosing Cedar Repairs. If you would like to share your experience, you can leave an honest review on Google using the link below. Taking part is optional.” Add the verified review link after the message. This is a request template, not a customer testimonial; it supplies no rating, service keyword or suggested verdict.',
          '«Gracias por elegir Cedar Repairs. Si quieres compartir tu experiencia, puedes dejar una reseña sincera en Google mediante el enlace de abajo. Participar es opcional». Añade el enlace verificado después del mensaje. Es una plantilla de solicitud, no un testimonio de cliente: no propone puntuación, palabra clave del servicio ni valoración.',
          '“Cedar Repairs’i tercih ettiğiniz için teşekkür ederiz. Deneyiminizi paylaşmak isterseniz aşağıdaki bağlantıdan Google’da dürüst bir yorum bırakabilirsiniz. Katılım isteğe bağlıdır.” Mesajın altına doğrulanmış yorum bağlantısını ekleyin. Bu bir davet şablonudur, müşteri görüşü değildir; puan, hizmet anahtar kelimesi veya önerilen değerlendirme içermez.',
        ),
      },
    },
    {
      id: 'test-the-workflow',
      title: copy(
        'Check the whole request process before launch',
        'Revisa todo el proceso antes de activarlo',
        'Başlatmadan önce tüm davet sürecini kontrol edin',
      ),
      paragraphs: [
        copy(
          'A neutral email can still sit inside a biased workflow. Preview every branch of your messaging tool with test records. A low satisfaction score must not hide the Google link while a high score reveals it. Assign one owner to check templates, printed cards and any agency-managed follow-up together.',
          'Un correo neutral puede formar parte de un proceso sesgado. Usa registros de prueba para recorrer todas las variantes de tu herramienta de mensajes. Una puntuación baja no debe ocultar el enlace de Google mientras una alta lo muestra. Asigna a una persona la revisión conjunta de plantillas, tarjetas y seguimientos gestionados por una agencia.',
          'Tarafsız bir e-posta bile yanlı bir sürecin parçası olabilir. Test kayıtlarıyla mesajlaşma aracınızdaki her akışı inceleyin. Yüksek memnuniyet puanı Google bağlantısını gösterirken düşük puan onu gizlememelidir. Şablonları, basılı kartları ve ajansın takip mesajlarını birlikte kontrol edecek bir sorumlu belirleyin.',
        ),
      ],
      bullets: [
        copy(
          'Audience: the invitation rule depends on the interaction, not predicted praise.',
          'Destinatarios: la regla depende de la interacción, no de los elogios previstos.',
          'Kitle: davet kuralı beklenen övgüye değil, etkileşime dayanır.',
        ),
        copy(
          'Message: no required wording, star target, incentive or pressure to post immediately.',
          'Mensaje: sin palabras obligatorias, objetivo de estrellas, incentivos ni presión para publicar al momento.',
          'Mesaj: zorunlu ifade, yıldız hedefi, teşvik veya hemen yayınlama baskısı içermez.',
        ),
        copy(
          'Destination: the link and printed QR code reach the intended branch.',
          'Destino: el enlace y el QR impreso llevan a la sucursal prevista.',
          'Hedef: bağlantı ve basılı QR kodu doğru şubeye ulaşır.',
        ),
        copy(
          'Ownership: someone handles complaints, broken links and future template changes.',
          'Responsable: alguien atiende las quejas, los enlaces rotos y los cambios de plantilla.',
          'Sorumluluk: şikâyetleri, bozuk bağlantıları ve sonraki şablon değişikliklerini bir kişi üstlenir.',
        ),
      ],
    },
    {
      id: 'use-the-feedback',
      title: copy(
        'Respond to the experience and repair unclear information',
        'Responde a la experiencia y aclara la información',
        'Deneyime yanıt verin ve belirsiz bilgileri düzeltin',
      ),
      paragraphs: [
        copy(
          '[Google’s guidance on review replies](https://support.google.com/business/answer/3474122?hl=en) recommends helpful, relevant responses and protecting private information. Address the concern a reader can see. Move account details to a private support channel. A reply should explain what happens next, not become a paragraph of location keywords.',
          '[La guía de Google para responder a reseñas](https://support.google.com/business/answer/3474122?hl=en) recomienda respuestas útiles y pertinentes, protegiendo la información privada. Atiende el problema visible para el lector. Trata los datos de la cuenta por un canal privado. Explica el siguiente paso en lugar de llenar la respuesta de palabras clave geográficas.',
          '[Google’ın yorum yanıtlama rehberi](https://support.google.com/business/answer/3474122?hl=en), yararlı ve ilgili yanıtlar vermeyi, özel bilgileri korumayı önerir. Okuyucunun gördüğü sorunu ele alın. Hesap ayrıntılarını özel destek kanalına taşıyın. Yanıtı konum anahtar kelimeleriyle doldurmak yerine sonraki adımı açıklayın.',
        ),
        copy(
          'Use recurring feedback to inspect your own pages. If customers repeatedly misunderstand collection times, check the booking confirmation and opening-hours notice. Correct an unclear promise where it originates. Our [guide to accurate branch and service hours](/blog/holiday-opening-hours) shows how to separate a shop’s opening time from a particular service’s availability.',
          'Usa los comentarios recurrentes para revisar tus páginas. Si los clientes confunden los horarios de recogida, comprueba la confirmación de reserva y el aviso de horarios. Corrige la promesa ambigua en su origen. Nuestra [guía sobre horarios de sucursales y servicios](/blog/holiday-opening-hours) explica cómo distinguir la apertura del local de la disponibilidad de un servicio.',
          'Tekrarlanan geri bildirimlerle kendi sayfalarınızı inceleyin. Müşteriler teslim alma saatlerini sürekli yanlış anlıyorsa rezervasyon onayını ve saat duyurusunu kontrol edin. Belirsiz vaadi kaynağında düzeltin. [Şube ve hizmet saatlerini doğru yayınlama rehberimiz](/blog/holiday-opening-hours), dükkânın açık olduğu saatlerle belirli bir hizmetin sunulduğu saatleri ayırmayı açıklar.',
        ),
      ],
    },
    {
      id: 'separate-ai-evidence',
      title: copy(
        'Keep review collection separate from AI evidence',
        'Separa la recogida de reseñas de las pruebas sobre IA',
        'Yorum toplamayı yapay zekâ bulgularından ayrı tutun',
      ),
      paragraphs: [
        copy(
          '[An August 2, 2026 discussion about a testimonials page](https://www.reddit.com/r/localseo/comments/1vdmkdp/i_gave_chatgpt_and_gemini_better_context_about/) reports different assistant answers after reviews were published on a website. That observation does not isolate the cause or establish a repeatable gain. Publishing selected testimonials also does not turn them into independent coverage of your business.',
          '[Una conversación del 2 de agosto de 2026 sobre una página de testimonios](https://www.reddit.com/r/localseo/comments/1vdmkdp/i_gave_chatgpt_and_gemini_better_context_about/) relata respuestas distintas de asistentes tras publicar reseñas en una web. Esa observación no aísla la causa ni demuestra una mejora repetible. Publicar testimonios seleccionados tampoco los convierte en cobertura independiente de tu negocio.',
          '[2 Ağustos 2026 tarihli müşteri görüşleri sayfası tartışmasında](https://www.reddit.com/r/localseo/comments/1vdmkdp/i_gave_chatgpt_and_gemini_better_context_about/), yorumlar bir sitede yayınlandıktan sonra asistan yanıtlarının değiştiği bildiriliyor. Bu gözlem nedeni ayırmaz veya tekrarlanabilir bir kazanımı kanıtlamaz. Seçilmiş müşteri görüşlerini yayınlamak da onları işletmeniz hakkında bağımsız bir değerlendirmeye dönüştürmez.',
        ),
        copy(
          '[Google’s review-snippet rules](https://developers.google.com/search/docs/appearance/structured-data/review-snippet#self-serving) make reviews of your own LocalBusiness or Organization ineligible for the star feature when you control the page. This includes embedded third-party reviews. Do not treat a review widget as a shortcut to stars or AI recommendations.',
          '[Las reglas de Google sobre fragmentos de reseñas](https://developers.google.com/search/docs/appearance/structured-data/review-snippet#self-serving) excluyen de la función de estrellas las reseñas de tu propio LocalBusiness u Organization cuando controlas la página. Esto incluye reseñas externas insertadas. Un widget no es un atajo para conseguir estrellas ni recomendaciones de IA.',
          '[Google’ın yorum snippet’i kuralları](https://developers.google.com/search/docs/appearance/structured-data/review-snippet#self-serving), sayfayı siz kontrol ettiğinizde kendi LocalBusiness veya Organization işletmeniz hakkındaki yorumları yıldız özelliğine uygun saymaz. Buna üçüncü taraflardan gömülen yorumlar da dahildir. Yorum bileşenini yıldızlara veya yapay zekâ önerilerine kestirme yol olarak görmeyin.',
        ),
        copy(
          'Save the question, answer, date and cited page when reviewing AI visibility. Check whether the source actually supports the summary. Our [guide to reviewing AI visibility evidence](/blog/measuring-ai-search-visibility) keeps sampled citations separate from visits and inquiries. For help reviewing public reputation sources, see Citevia’s [brand reputation management service](/services/brand-reputation-management). Start by fixing one request flow you can verify.',
          'Guarda la pregunta, la respuesta, la fecha y la página citada al revisar la visibilidad en IA. Comprueba si la fuente respalda el resumen. Nuestra [guía de medición de visibilidad en IA](/blog/measuring-ai-search-visibility) separa las citas observadas de las visitas y consultas. Para revisar fuentes públicas sobre reputación, consulta el [servicio de gestión de reputación de marca de Citevia](/services/brand-reputation-management). Empieza por corregir un proceso de solicitud que puedas verificar.',
          'Yapay zekâ görünürlüğünü incelerken soruyu, yanıtı, tarihi ve kaynak gösterilen sayfayı saklayın. Kaynağın özeti gerçekten destekleyip desteklemediğini kontrol edin. [Yapay zekâ görünürlüğünü ölçme rehberimiz](/blog/measuring-ai-search-visibility), örneklemdeki atıfları ziyaretlerden ve başvurulardan ayırır. Herkese açık itibar kaynaklarını incelemek için [Citevia’nın marka itibarı yönetimi hizmetine](/services/brand-reputation-management) bakabilirsiniz. Önce doğrulayabileceğiniz tek bir davet sürecini düzeltin.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Practical questions about Google review requests',
      'Preguntas prácticas sobre cómo pedir reseñas en Google',
      'Google yorumu isteme hakkında pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Can we offer a discount for any review, even a negative one?',
          '¿Podemos dar un descuento por cualquier reseña, aunque sea negativa?',
          'Olumsuz yorumlar dahil her yorum için indirim sunabilir miyiz?',
        ),
        answer: copy(
          'No. Google’s prohibition covers incentives for any review, not only positive ones. Remove the reward from the request. Resolve customer-service issues on their own merits without tying a remedy to posting, changing or deleting a review.',
          'No. Google prohíbe los incentivos por cualquier reseña, no solo por las positivas. Elimina la recompensa de la solicitud. Resuelve los problemas de atención al cliente sin condicionar la solución a publicar, modificar o borrar una reseña.',
          'Hayır. Google’ın yasağı yalnızca olumlu yorumları değil, her yorum için sunulan teşvikleri kapsar. Ödülü davetten çıkarın. Müşteri hizmetleri sorunlarını, çözümü yorum yayınlama, değiştirme veya silme şartına bağlamadan ele alın.',
        ),
      },
      {
        question: copy(
          'Can a satisfaction survey decide who gets the Google link?',
          '¿Puede una encuesta de satisfacción decidir quién recibe el enlace de Google?',
          'Memnuniyet anketi Google bağlantısının kime gideceğini belirleyebilir mi?',
        ),
        answer: copy(
          'Do not use it to route only satisfied customers to public reviews. Test the low-score path as well as the high-score path. A private support route can remain available, but it should not replace the review opportunity only for unhappy customers.',
          'No la uses para dirigir únicamente a los clientes satisfechos a las reseñas públicas. Prueba tanto el recorrido de puntuación baja como el de puntuación alta. Puedes mantener un canal privado de soporte, pero no debe sustituir la posibilidad de reseñar solo para quienes están descontentos.',
          'Yalnızca memnun müşterileri herkese açık yorumlara yönlendirmek için kullanmayın. Yüksek puanlı akışın yanında düşük puanlı akışı da test edin. Özel destek kanalı açık kalabilir; ancak yalnızca memnun olmayan müşteriler için yorum fırsatının yerini almamalıdır.',
        ),
      },
      {
        question: copy(
          'Should our team write a review for the customer to approve?',
          '¿Debe nuestro equipo escribir una reseña para que el cliente la apruebe?',
          'Ekibimiz müşterinin onaylaması için bir yorum yazmalı mı?',
        ),
        answer: copy(
          'Keep the customer’s account in their own words. Give them a working link and help with navigation if needed, rather than a prepared verdict. The invitation template is for your message to the customer; it is not text for them to publish as their experience.',
          'Deja que el cliente relate su experiencia con sus propias palabras. Dale un enlace que funcione y, si hace falta, ayuda para navegar, en lugar de una valoración preparada. La plantilla sirve para tu mensaje al cliente; no es un texto que deba publicar como experiencia propia.',
          'Müşteri deneyimini kendi sözleriyle anlatsın. Hazır değerlendirme yerine çalışan bir bağlantı ve gerekirse gezinme desteği sunun. Davet şablonu sizin müşteriye gönderdiğiniz mesaj içindir; müşterinin kendi deneyimi olarak yayınlayacağı metin değildir.',
        ),
      },
      {
        question: copy(
          'Do customers need a Gmail address to leave a review?',
          '¿Necesitan los clientes una dirección de Gmail para reseñar?',
          'Müşterilerin yorum bırakmak için Gmail adresine ihtiyacı var mı?',
        ),
        answer: copy(
          'They need to sign in to a Google Account, but Google says that account can use a non-Gmail email address. Explain the sign-in requirement if someone gets stuck. Do not create accounts or post reviews on the customer’s behalf.',
          'Deben iniciar sesión con una cuenta de Google, pero Google indica que esta puede usar una dirección ajena a Gmail. Explica ese requisito si alguien se atasca. No crees cuentas ni publiques reseñas en nombre del cliente.',
          'Bir Google Hesabı ile oturum açmaları gerekir; ancak Google bu hesapta Gmail dışı bir e-posta adresinin kullanılabileceğini belirtir. Takılan müşteriye oturum açma gerekliliğini açıklayın. Müşteri adına hesap oluşturmayın veya yorum yayınlamayın.',
        ),
      },
      {
        question: copy(
          'What if an AI answer repeats an old complaint after we fixed it?',
          '¿Y si una respuesta de IA repite una queja antigua que ya resolvimos?',
          'Sorunu çözdükten sonra yapay zekâ eski bir şikâyeti tekrarlarsa ne yapmalıyız?',
        ),
        answer: copy(
          'Save the answer and inspect its cited source and date. Publish an accurate public reply where appropriate, and correct any outdated service information you control. Do not treat a resolved issue as proof that the original review was false. Recheck the answer later; a correction cannot force every assistant to update.',
          'Guarda la respuesta e inspecciona la fuente citada y su fecha. Publica una respuesta precisa cuando corresponda y corrige la información desactualizada del servicio que controles. Resolver un problema no demuestra que la reseña original fuera falsa. Vuelve a comprobar la respuesta más adelante: una corrección no obliga a todos los asistentes a actualizarse.',
          'Yanıtı saklayıp gösterdiği kaynağı ve tarihi inceleyin. Uygun olduğunda doğru bir açık yanıt yayınlayın ve kontrolünüzdeki güncelliğini yitirmiş hizmet bilgilerini düzeltin. Sorunun çözülmesini ilk yorumun yanlış olduğunun kanıtı saymayın. Daha sonra yanıtı yeniden kontrol edin; düzeltme, her asistanı güncellemeye zorlayamaz.',
        ),
      },
    ],
  },
};

copy(
  `${googleReviewRequests.seoTitle} | Citevia`,
  `${translations.es[googleReviewRequests.seoTitle]} | Citevia`,
  `${translations.tr[googleReviewRequests.seoTitle]} | Citevia`,
);

export const reviewRequestTranslations = translations;
export const reviewRequestFragments = fragments;
