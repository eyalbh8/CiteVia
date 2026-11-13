import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const brandConfusion = {
  translations,
  slug: 'brand-confusion-ai-search',
  category: 'STRATEGY',
  published: '2026-11-13',
  updated: '2026-11-13',
  relatedService: 'brand-reputation-management',
  title: copy(
    'What to do when AI search confuses your brand with another company',
    'Qué hacer si un buscador con IA confunde tu marca con otra empresa',
    'Yapay zekâ aramalarında markanız başka bir şirketle karıştırılırsa ne yapmalısınız?',
  ),
  seoTitle: copy(
    'How to resolve brand confusion in AI search',
    'Qué hacer si la IA confunde tu marca con otra',
    'Yapay zekâ aramalarında marka karışıklığı',
  ),
  focusKeyphrase: copy(
    'brand confusion in AI search',
    'confusión de marcas en búsquedas con IA',
    'yapay zekâ aramalarında marka karışıklığı',
  ),
  description: copy(
    'Trace brand confusion in AI search to one wrong detail. Check the cited page, find who can correct it, and test where buyers land.',
    'Si un buscador con IA confunde tu marca con otra, revisa la afirmación y su fuente. Localiza a quien pueda corregirla y comprueba adónde llega el cliente.',
    'Yapay zekâ aramalarında marka karışıklığı varsa hatalı bilgiyi kaynağında inceleyin. Kimin düzeltebileceğini ve müşterinin nereye ulaştığını kontrol edin.',
  ),
  takeaway: copy(
    'To investigate brand confusion in AI search, pick one detail a buyer could act on. Open the quoted support link, check who answers the phone or read the product description on the cited page. If a directory sends customers to another company, give its editor the exact field and the correct destination. If the source is accurate, keep it intact and record where the answer mixed up the businesses.',
    'Para investigar una confusión de marcas en búsquedas con IA, elige un dato que pueda guiar al cliente. Abre el enlace de soporte, comprueba a qué empresa corresponde el teléfono o lee la descripción del producto en la página citada. Si un directorio envía clientes a otra empresa, indica al editor qué campo debe corregir y cuál es el destino correcto. Si la fuente es exacta, consérvala y anota dónde mezcló el buscador los datos de las dos empresas.',
    'Yapay zekâ aramalarında marka karışıklığını incelerken müşterinin kararını etkileyen bir bilgiden başlayın. Verilen destek bağlantısını açın, telefonun hangi şirkete ait olduğunu kontrol edin veya kaynak sayfadaki ürün açıklamasını okuyun. Bir rehber müşterileri başka bir şirkete yönlendiriyorsa editöre hatalı alanı ve doğru adresi iletin. Kaynak doğruysa sayfayı olduğu gibi bırakın ve yanıtın iki şirketi nerede karıştırdığını kaydedin.',
  ),
  sections: [
    {
      id: 'check-the-claim',
      title: copy(
        'Trace brand confusion in AI search one claim at a time',
        'Investiga la confusión entre marcas dato por dato',
        'Marka karışıklığını her bilgi için ayrı inceleyin',
      ),
      paragraphs: [
        copy(
          'Save the buyer’s exact question and the answer that caused trouble. Beside the disputed detail, record the cited URL, the company that page describes and the page on your own site that settles the question. A correct logo beside the wrong support link still sends the buyer to the wrong desk.',
          'Guarda la pregunta exacta del comprador y la respuesta que causó el problema. Junto al dato en duda, anota la URL citada, la empresa que describe y la página de tu web que aclara la cuestión. Aunque aparezca el logotipo correcto, un enlace de soporte equivocado lleva al cliente a otro equipo.',
          'Müşterinin sorusunu ve sorun yaratan yanıtı olduğu gibi saklayın. Kuşkulu bilginin yanına kaynak adresini, sayfanın hangi şirketi anlattığını ve kendi sitenizde doğru bilgiyi gösteren sayfayı yazın. Logo doğru olsa bile yanlış destek bağlantısı müşteriyi başka bir ekibe götürür.',
        ),
        copy(
          'Try the original question again in a fresh conversation. In another, add only the official domain. Keep the language and search setting the same. If the domain resolves the mix-up, a buyer who knows only the name still faces a problem. The extra clue changed the question. Our [guide to running an AI visibility audit](/blog/ai-visibility-audit-playbook) explains how to preserve comparable observations.',
          'Repite la pregunta original en una conversación nueva. En otra, añade solo el dominio oficial. Mantén el idioma y la misma opción de búsqueda. Si con el dominio se resuelve la confusión, el comprador que solo conoce el nombre sigue expuesto al error. Esa pista cambió la pregunta. Nuestra [guía para auditar la visibilidad en buscadores con IA](/blog/ai-visibility-audit-playbook) explica cómo guardar observaciones comparables.',
          'İlk soruyu yeni bir sohbette tekrarlayın. Ayrı bir sohbette soruya yalnızca resmî alan adını ekleyin. Dili ve arama ayarını aynı tutun. Alan adı karışıklığı giderse bile sadece marka adını bilen müşteri hâlâ yanlış yönlenebilir. Eklediğiniz ipucu soruyu değiştirdi. [Yapay zekâ aramalarında görünürlük denetimi rehberimiz](/blog/ai-visibility-audit-playbook) karşılaştırılabilir gözlemleri nasıl kaydedeceğinizi açıklar.',
        ),
      ],
      example: {
        title: copy(
          'Worked example with two fictional businesses',
          'Ejemplo con dos empresas ficticias',
          'İki hayalî şirket üzerinden bir örnek',
        ),
        text: copy(
          'Linden Loom repairs weaving equipment. Linden Loom Studio teaches weaving. A buyer asks where to send a broken loom and gets the studio’s class booking link. The cited trade directory lists the repair shop’s name and the studio’s website in the same row. Send the directory editor that row and the repair shop’s intake page. The studio’s booking page is accurate and needs no edit.',
          'Linden Loom repara telares. Linden Loom Studio da clases de tejido. Una persona pregunta adónde enviar su telar averiado y recibe el enlace para reservar una clase. El directorio profesional citado muestra en la misma fila el nombre del taller y la web del estudio. Envía esa fila al editor junto con la página de recepción de reparaciones. La página de reservas del estudio es correcta y puede quedarse como está.',
          'Linden Loom dokuma tezgâhlarını onarıyor. Linden Loom Studio ise dokuma dersleri veriyor. Tezgâhı bozulan biri nereye göndereceğini sorunca karşısına stüdyonun ders kayıt bağlantısı çıkıyor. Kaynak gösterilen meslek rehberinde atölyenin adı ile stüdyonun sitesi aynı satırda. Rehberin editörüne o satırı ve atölyenin tamir başvuru sayfasını gönderin. Stüdyonun ders kayıt sayfası doğru ve değişiklik gerektirmiyor.',
        ),
      },
    },
    {
      id: 'choose-the-correction',
      title: copy(
        'Choose who can correct the record',
        'Localiza a quien puede corregir el dato',
        'Bilgiyi kimin düzeltebileceğini belirleyin',
      ),
      paragraphs: [
        copy(
          'Follow the customer’s route from the answer to the point of contact. Check the name above the link and the business at the destination. These three findings call for different actions.',
          'Sigue el recorrido del cliente desde la respuesta hasta el punto de contacto. Comprueba el nombre que aparece sobre el enlace y a qué empresa lleva. Según lo que encuentres, la acción cambia.',
          'Müşterinin yanıttan iletişim noktasına kadar izlediği yolu takip edin. Bağlantının üzerindeki adı ve açılan sayfanın hangi işletmeye ait olduğunu kontrol edin. Sonuca göre şu yollardan birini izleyebilirsiniz.',
        ),
      ],
      bullets: [
        copy(
          'Your page leaves the identity unclear. Put the trading name, what the business does and the correct contact route together where buyers land. Check the About page and any profile your team controls for an old domain or an unexplained abbreviation.',
          'Tu página no deja claro de qué empresa se trata. Reúne el nombre comercial, la actividad y el contacto correcto en la página de llegada. Revisa si en la página de la empresa o en los perfiles que gestionas queda un dominio antiguo o una sigla sin explicar.',
          'Sizin sayfanızda işletmenin kimliği belirsiz. Müşterinin ulaştığı sayfada ticari adı, yaptığınız işi ve doğru iletişim yolunu bir arada gösterin. Hakkımızda sayfasında ve yönettiğiniz profillerde eski bir alan adı veya açıklanmamış bir kısaltma kalmış mı bakın.',
        ),
        copy(
          'A third party combined two records. Quote the precise field, supply its replacement and link to a public source that verifies it. Ask for separate entries if the directory has joined the two companies. Save the corrected listing URL when the editor responds.',
          'Un tercero ha mezclado dos fichas. Cita el campo exacto, facilita el dato correcto y enlaza una fuente pública que lo acredite. Si el directorio ha unido las empresas, solicita dos fichas independientes. Guarda la URL de la ficha corregida cuando responda el editor.',
          'Başka bir yayıncı iki kaydı birleştirmiş. Hatalı alanı aynen belirtin, doğru değeri verin ve bunu doğrulayan açık bir kaynağa bağlantı ekleyin. Rehber iki şirketi bir araya getirmişse ayrı kayıtlar isteyin. Editör yanıt verdiğinde düzeltilen kaydın adresini saklayın.',
        ),
        copy(
          'The cited page accurately describes the other company, or the answer has no source. Save the mismatch and use the answer’s feedback option if available. An accurate page about a namesake gives you no basis to ask its owner to change it. A citation alone cannot establish what produced the error.',
          'La página citada describe correctamente a la otra empresa o la respuesta carece de fuente. Guarda el error y, si la respuesta admite comentarios, comunícalo allí. Si la página de la empresa homónima es correcta, no hay motivo para pedirle cambios. La cita por sí sola tampoco demuestra el origen del error.',
          'Kaynak sayfa diğer şirketi doğru tanıtıyor veya yanıtta kaynak yok. Hatalı eşleşmeyi kaydedin ve varsa yanıtın geri bildirim seçeneğini kullanın. Adaş işletmenin sayfasındaki bilgiler doğruysa sahibinden değişiklik istemek için gerekçe yoktur. Bir kaynağın gösterilmesi tek başına hatanın nasıl oluştuğunu kanıtlamaz.',
        ),
      ],
    },
    {
      id: 'identify-the-organization',
      title: copy(
        'Check which business your website identifies',
        'Comprueba a qué empresa identifica tu web',
        'Sitenizin hangi işletmeyi tanıttığını kontrol edin',
      ),
      paragraphs: [
        copy(
          'Read the homepage as someone seeing the name for the first time. Could they tell whether to book a class or request a repair? Give them a plain sentence and a link to the right service. Then compare the public name and domain with the Organization markup. [Google’s guide to organization details](https://developers.google.com/search/docs/appearance/structured-data/organization) explains how the name and website help Google distinguish businesses. Use legalName for the registered name when it differs from the public name.',
          'Lee la portada como si acabaras de descubrir el nombre. ¿Sabrías si puedes reservar una clase o solicitar una reparación? Incluye una frase clara y un enlace al servicio adecuado. Después compara el nombre público y el dominio con los datos estructurados de Organization. La [guía de Google sobre los datos de la empresa](https://developers.google.com/search/docs/appearance/structured-data/organization) explica cómo el nombre y la web ayudan a Google a distinguir empresas. Usa legalName para el nombre registrado cuando difiera del nombre comercial.',
          'Ana sayfanızı, adı ilk kez duyan biri gibi okuyun. Ders kaydı mı yapacağınızı, onarım mı isteyeceğinizi anlayabiliyor musunuz? İşinizi yalın bir cümleyle anlatın ve ilgili hizmete bağlantı verin. Ardından görünen ad ile alan adını Organization yapılandırılmış verileriyle karşılaştırın. [Google’ın kuruluş bilgileri rehberi](https://developers.google.com/search/docs/appearance/structured-data/organization) adın ve sitenin işletmeleri ayırt etmeye nasıl yardımcı olduğunu açıklar. Kayıtlı unvan görünen addan farklıysa unvanı legalName alanına yazın.',
        ),
        copy(
          'Open each sameAs link yourself. Does the profile identify this exact organization? A founder’s personal account, a parent company and a near-identical handle can each refer to someone else. Keep only references you can verify against [Schema.org’s definition of sameAs](https://schema.org/sameAs). This check tells you what your site asserts. You still need to observe what an assistant actually says.',
          'Abre cada enlace de sameAs. ¿Identifica el perfil exactamente a esta organización? La cuenta personal del fundador, la empresa matriz o un perfil de nombre casi idéntico pueden corresponder a otra entidad. Conserva solo las referencias que cumplan la [definición de sameAs de Schema.org](https://schema.org/sameAs). Así compruebas qué declara tu web. Aún queda observar la respuesta del asistente.',
          'Her sameAs bağlantısını açın. Profil tam olarak bu kuruluşu mu tanıtıyor? Kurucunun kişisel hesabı, ana şirket veya çok benzer adlı bir hesap başka bir kişi ya da kuruluşu tanıtabilir. Yalnızca [Schema.org’un sameAs tanımına](https://schema.org/sameAs) uyan, doğrulayabildiğiniz adresleri kullanın. Böylece sitenizin hangi kimliği bildirdiğini görürsünüz. Asistanın gerçekte ne söylediğini ayrıca kontrol edin.',
        ),
        copy(
          'For a wrong detail in the Google knowledge panel about your company, follow [Google’s panel feedback instructions](https://support.google.com/knowledgepanel/answer/7534842). Point to the field and supply a public page that shows the correct information.',
          'Si el panel de información de Google sobre tu empresa contiene un error, sigue las [instrucciones de Google para enviar comentarios sobre el panel](https://support.google.com/knowledgepanel/answer/7534842). Indica el campo y aporta una página pública que muestre el dato correcto.',
          'Şirketinizle ilgili Google bilgi panelinde bir hata varsa [Google’ın panel için geri bildirim adımlarını](https://support.google.com/knowledgepanel/answer/7534842) izleyin. Alanı belirtin ve doğru bilgiyi gösteren herkese açık bir sayfa paylaşın.',
        ),
      ],
    },
    {
      id: 'test-the-buyer-route',
      title: copy(
        'Retest the route a buyer would take',
        'Vuelve a probar el recorrido del cliente',
        'Müşterinin izleyeceği yolu yeniden deneyin',
      ),
      paragraphs: [
        copy(
          'Once the changed page is public, repeat the name-only and domain-qualified questions. For each answer record whose business it describes, whose page it cites and where the buyer ends up. Mark the source correction complete when the right details are visible there. Keep the answer check open if it still points buyers elsewhere. One correct reply gives you one dated observation.',
          'Cuando el cambio sea público, repite las preguntas con el nombre solo y con el dominio. Anota qué empresa describe cada respuesta, qué página cita y adónde llega el comprador. Da por corregida la fuente cuando muestre los datos correctos. Si la respuesta aún desvía al cliente, mantén abierta esa comprobación. Una respuesta correcta aporta una observación con fecha.',
          'Değişiklik yayımlandığında hem yalnızca adı içeren hem de alan adını belirten soruyu yeniden sorun. Her yanıt için tanıtılan işletmeyi, kaynak sayfanın sahibini ve müşterinin ulaştığı yeri yazın. Doğru bilgiler kaynakta görünüyorsa o düzeltmeyi tamamlanmış sayın. Yanıt müşteriyi hâlâ başka yere gönderiyorsa takibe devam edin. Tek bir doğru yanıt, o tarihteki tek bir gözlemdir.',
        ),
        copy(
          'A buyer may now reach your business yet choose another supplier. Treat that as a separate question. Our [guide to why known brands get missed](/blog/recommendation-gap-known-vs-selected) covers what to investigate once the answer identifies the right company.',
          'Puede que el comprador ya llegue a tu empresa y aun así elija otro proveedor. Es una cuestión distinta. Nuestra [guía sobre por qué se omiten marcas conocidas](/blog/recommendation-gap-known-vs-selected) explica qué investigar una vez que la respuesta identifica a la empresa correcta.',
          'Müşteri artık işletmenize ulaşsa da başka bir tedarikçiyi seçebilir. Bunu ayrı değerlendirin. [Bilinen markaların neden önerilmediğini ele alan rehberimiz](/blog/recommendation-gap-known-vs-selected) yanıt doğru şirketi tanıttıktan sonra neleri inceleyebileceğinizi anlatır.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Questions about mistaken brand identity',
      'Preguntas sobre marcas que se confunden',
      'Birbirine karıştırılan markalar hakkında sorular',
    ),
    items: [
      {
        question: copy(
          'Does an accurate answer with our domain settle the issue?',
          '¿Basta con que la respuesta sea correcta al incluir nuestro dominio?',
          'Alan adımızı ekleyince doğru yanıt çıkması yeterli mi?',
        ),
        answer: copy(
          'It settles only that version of the question. Check the wording from the buyer’s original message. If the buyer used only your name, repeat that version and follow the contact link. Report the two outcomes separately so the extra clue does not hide a misdirected customer.',
          'Solo aclara esa versión de la pregunta. Revisa cómo la formuló el comprador. Si solo usó el nombre, repite esa versión y sigue el enlace de contacto. Registra los dos resultados por separado para que la pista adicional no oculte un desvío del cliente.',
          'Yalnızca sorunun o biçimi için yeterlidir. Müşterinin ilk mesajındaki ifadeye bakın. Sadece adınızı kullandıysa o soruyu tekrarlayın ve iletişim bağlantısını açın. Ek ipucunun yanlış yönlenen müşteriyi gözden kaçırmanıza yol açmaması için iki sonucu ayrı kaydedin.',
        ),
      },
      {
        question: copy(
          'What if the cited directory lists both companies correctly?',
          '¿Y si el directorio citado distingue bien a las dos empresas?',
          'Kaynak gösterilen rehber iki şirketi de doğru tanıtıyorsa ne yapmalıyız?',
        ),
        answer: copy(
          'Check which entry the citation opens. If it opens the namesake’s accurate entry, record a wrong destination. If it opens a shared results page, save the links to both individual profiles. Those details let you explain the mismatch without asking the editor to rewrite correct information.',
          'Comprueba qué ficha abre la cita. Si lleva a la ficha correcta de la empresa homónima, registra el destino equivocado. Si abre una lista de resultados, guarda los enlaces a ambas fichas. Así podrás explicar la confusión sin pedir al editor que modifique información correcta.',
          'Kaynak bağlantısının hangi kaydı açtığına bakın. Adaş işletmenin doğru kaydını açıyorsa yanlış hedef olarak kaydedin. Ortak sonuç sayfası açılıyorsa iki işletmenin ayrı profil adreslerini saklayın. Bu ayrıntılar, editörden doğru bilgileri değiştirmesini istemeden hatayı anlatmanızı sağlar.',
        ),
      },
      {
        question: copy(
          'Should a brand link to its parent company with sameAs?',
          '¿Debe una marca enlazar a su empresa matriz con sameAs?',
          'Marka, ana şirkete sameAs ile bağlantı vermeli mi?',
        ),
        answer: copy(
          'Use that link only if the destination unambiguously identifies the same entity. A group page covering several subsidiaries may describe an owner while leaving the individual business unclear. Explain the ownership relationship in visible text and link buyers to the profile for the business they need.',
          'Úsalo solo si el destino identifica sin dudas a la misma entidad. Una página del grupo que abarca varias filiales puede describir al propietario sin identificar bien al negocio concreto. Explica la relación en el texto visible y enlaza el perfil de la empresa que busca el cliente.',
          'Yalnızca hedef sayfa açıkça aynı kuruluşu tanıtıyorsa kullanın. Birden çok iştiraki kapsayan grup sayfası şirket sahibini gösterebilir ama ilgili işletmeyi belirsiz bırakabilir. Sahiplik ilişkisini görünür metinde açıklayın ve müşteriyi aradığı işletmenin profiline yönlendirin.',
        ),
      },
      {
        question: copy(
          'Can we correct a Google knowledge panel separately?',
          '¿Podemos corregir por separado un panel de información de Google?',
          'Google bilgi panelini ayrıca düzelttirebilir miyiz?',
        ),
        answer: copy(
          'Yes. If the panel about your business contains the other company’s details, submit feedback on the specific field and supply a public URL that supports the correction. Google can prioritize feedback from verified representatives. Record the panel and any AI answer separately so you can tell which one changed.',
          'Sí. Si el panel de tu negocio incluye datos de otra empresa, envía comentarios sobre ese campo y aporta una URL pública que respalde la corrección. Google puede dar prioridad a los comentarios de representantes verificados. Lleva registros separados del panel y de la respuesta de IA para saber cuál cambió.',
          'Evet. İşletmenizin panelinde diğer şirkete ait bir bilgi varsa ilgili alan için geri bildirim gönderin ve düzeltmeyi destekleyen herkese açık bir adres verin. Google, doğrulanmış temsilcilerin geri bildirimine öncelik verebilir. Hangisinin değiştiğini görebilmek için paneli ve yapay zekâ yanıtını ayrı kaydedin.',
        ),
      },
    ],
  },
};

copy(
  `${brandConfusion.seoTitle} | Citevia`,
  `${translations.es[brandConfusion.seoTitle]} | Citevia`,
  `${translations.tr[brandConfusion.seoTitle]} | Citevia`,
);

export const brandConfusionTranslations = translations;
export const brandConfusionFragments = fragments;
