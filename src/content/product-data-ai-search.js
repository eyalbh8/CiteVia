import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();
copy(
  'Two people studying data visualizations on a wall of screens',
  'Dos personas observan visualizaciones de datos en una pared de pantallas',
  'Ekranlarla kaplı bir duvardaki veri görselleştirmelerini inceleyen iki kişi',
);

export const productDataAiSearch = {
  slug: 'product-data-ai-search',
  title: copy(
    'Product data for AI search: fix price and stock mismatches',
    'Datos de producto para búsquedas con IA: corrige precios y stock',
    'Yapay zekâ araması için ürün verileri: fiyat ve stok tutarsızlıkları',
  ),
  seoTitle: copy(
    'Product Data for AI Search: Price and Stock',
    'Datos de producto para IA: precio y stock',
    'Yapay Zekâ İçin Ürün Verileri: Fiyat ve Stok',
  ),
  focusKeyphrase: copy(
    'product data for AI search',
    'datos de producto para búsquedas con IA',
    'yapay zekâ araması için ürün verileri',
  ),
  description: copy(
    'Improve product data for AI search. Reconcile prices, stock and variants across pages, schema and merchant feeds with a practical checklist for your team.',
    'Mejora los datos de producto para búsquedas con IA. Revisa precios, stock y variantes en páginas, marcado y feeds con una lista práctica para tu equipo.',
    'Yapay zekâ araması için ürün verilerini iyileştirin. Sayfa, şema ve ürün akışlarındaki fiyat, stok ve varyantları ekibiniz için pratik bir listeyle denetleyin.',
  ),
  category: 'TECHNICAL SEO',
  published: '2026-10-30',
  updated: '2026-10-30',
  relatedService: 'seo',
  translations,
  takeaway: copy(
    'Product data for AI search should describe the same purchasable item wherever it appears. Start with one variant and market, then compare its visible page, initial HTML, structured data and merchant feed. Correct conflicting prices, currencies and stock states before adding promotional copy. Consistency helps shoppers evaluate an offer; it does not guarantee an AI recommendation.',
    'Los datos de producto para búsquedas con IA deben describir el mismo artículo comprable dondequiera que aparezcan. Empieza por una variante y un mercado; compara su página visible, HTML inicial, datos estructurados y feed comercial. Corrige precios, monedas y estados de stock contradictorios antes de añadir texto promocional. La coherencia ayuda a evaluar la oferta, pero no garantiza recomendaciones de IA.',
    'Yapay zekâ araması için ürün verileri, göründükleri her yerde satın alınabilen aynı ürünü tanımlamalıdır. Bir varyant ve pazar seçerek başlayın; görünen sayfayı, ilk HTML yanıtını, yapılandırılmış verileri ve ürün akışını karşılaştırın. Tanıtım metni eklemeden önce çelişen fiyatları, para birimlerini ve stok durumlarını düzeltin. Tutarlılık, alıcıların teklifi değerlendirmesini sağlar; yapay zekâ önerisini garanti etmez.',
  ),
  sections: [
    {
      id: 'one-product-record',
      title: copy(
        'Start product data checks with one exact offer',
        'Empieza la revisión de datos con una oferta concreta',
        'Ürün verilerini belirli bir teklif üzerinden kontrol edin',
      ),
      paragraphs: [
        copy(
          '[An October 14, 2026 product-page discussion](https://www.reddit.com/r/SEO/comments/1x5puub/how_would_you_optimize_an_ecommerce_product_page/) asks which SEO and AI-search improvements to prioritize. A [September 28 technical discussion](https://www.reddit.com/r/TechSEO/comments/1ws7wy2/google_can_see_your_product_an_ai_crawler_might/) asks how to inspect missing product fields and stale responses. These are useful questions, not verified evidence of ranking effects.',
          '[Un debate sobre páginas de producto del 14 de octubre de 2026](https://www.reddit.com/r/SEO/comments/1x5puub/how_would_you_optimize_an_ecommerce_product_page/) pregunta qué mejoras priorizar para SEO y búsquedas con IA. Un [debate técnico del 28 de septiembre](https://www.reddit.com/r/TechSEO/comments/1ws7wy2/google_can_see_your_product_an_ai_crawler_might/) plantea cómo inspeccionar campos ausentes y respuestas desactualizadas. Son preguntas útiles, no pruebas verificadas de efectos en el posicionamiento.',
          '[14 Ekim 2026 tarihli ürün sayfası tartışması](https://www.reddit.com/r/SEO/comments/1x5puub/how_would_you_optimize_an_ecommerce_product_page/), SEO ve yapay zekâ aramasında hangi iyileştirmelere öncelik verilmesi gerektiğini soruyor. [28 Eylül tarihli teknik tartışma](https://www.reddit.com/r/TechSEO/comments/1ws7wy2/google_can_see_your_product_an_ai_crawler_might/) ise eksik ürün alanlarının ve eski yanıtların nasıl inceleneceğini ele alıyor. Bunlar yararlı sorulardır; sıralama etkilerine ilişkin doğrulanmış kanıtlar değildir.',
        ),
        copy(
          'Choose a product with a recent price or stock change. Record the exact variant, product identifier, landing URL, target market, currency and check time. Ask the catalog owner to confirm the intended offer. Comparing a blue large jacket with the default black small jacket can create a false mismatch.',
          'Elige un producto cuyo precio o stock haya cambiado recientemente. Anota la variante exacta, el identificador, la URL de destino, el mercado, la moneda y la hora de revisión. Pide al responsable del catálogo que confirme la oferta prevista. Comparar una chaqueta azul grande con la negra pequeña predeterminada puede crear una discrepancia falsa.',
          'Fiyatı veya stok durumu yakın zamanda değişen bir ürün seçin. Varyantı, ürün kimliğini, açılış adresini, hedef pazarı, para birimini ve kontrol zamanını kaydedin. Katalog sorumlusundan geçerli teklifi doğrulamasını isteyin. Büyük beden mavi ceketi varsayılan küçük beden siyah ceketle karşılaştırmak, gerçekte olmayan bir tutarsızlık yaratabilir.',
        ),
      ],
      bullets: [
        copy(
          'Page: what a signed-out shopper sees for that selected variant.',
          'Página: lo que ve un comprador sin sesión para esa variante seleccionada.',
          'Sayfa: oturum açmamış alıcının seçili varyant için gördükleri.',
        ),
        copy(
          'HTML and schema: the fields delivered by the server, plus any later browser changes.',
          'HTML y marcado: los campos enviados por el servidor y los cambios posteriores del navegador.',
          'HTML ve şema: sunucunun gönderdiği alanlar ve tarayıcıda sonradan oluşan değişiklikler.',
        ),
        copy(
          'Feed: the submitted item and the merchant platform’s current processed values.',
          'Feed: el artículo enviado y los valores actuales procesados por la plataforma comercial.',
          'Ürün akışı: gönderilen ürün kaydı ve ticaret platformunun işlediği güncel değerler.',
        ),
      ],
    },
    {
      id: 'delivered-content',
      title: copy(
        'Inspect the delivered product facts',
        'Inspecciona los datos que realmente se entregan',
        'Gerçekte sunulan ürün bilgilerini inceleyin',
      ),
      paragraphs: [
        copy(
          'Ask your developer to save the initial HTML response and compare it with the rendered page. Check the selected item’s name, price, currency and availability in both. A screenshot alone cannot establish what arrived before scripts ran. If the response is stale, investigate the cache and update process with its owner.',
          'Pide al desarrollador que guarde la respuesta HTML inicial y la compare con la página renderizada. Revisa el nombre, precio, moneda y disponibilidad del artículo seleccionado en ambas. Una captura no demuestra qué llegó antes de ejecutar los scripts. Si la respuesta está desactualizada, investiga la caché y el proceso de actualización con su responsable.',
          'Geliştiriciden ilk HTML yanıtını kaydedip tarayıcıda oluşan sayfayla karşılaştırmasını isteyin. Seçili ürünün adını, fiyatını, para birimini ve bulunabilirliğini iki yerde de kontrol edin. Ekran görüntüsü, betikler çalışmadan önce ne geldiğini göstermez. Yanıt eskiyse sorumlu kişiyle önbelleği ve güncelleme sürecini inceleyin.',
        ),
        copy(
          '[Google’s merchant-listing guidance](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing) recommends Product markup in the initial HTML. It warns that JavaScript-generated markup can make Shopping crawls less reliable for changing price and availability. This is specific guidance for Google Shopping; it does not prove that every AI crawler behaves identically.',
          '[La guía de Google sobre fichas de comerciantes](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing) recomienda incluir el marcado Product en el HTML inicial. Advierte de que generarlo con JavaScript puede reducir la fiabilidad del rastreo de Shopping cuando cambian precios y disponibilidad. Esta orientación se refiere a Google Shopping; no demuestra que todos los rastreadores de IA actúen igual.',
          '[Google’ın satıcı listelemeleri rehberi](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing), Product işaretlemesini ilk HTML yanıtına eklemeyi önerir. JavaScript ile üretilen işaretlemenin, fiyat ve bulunabilirlik değiştiğinde Shopping taramalarını daha az güvenilir kılabileceğini belirtir. Bu, Google Shopping’e özgü bir rehberdir; tüm yapay zekâ tarayıcılarının aynı davrandığını kanıtlamaz.',
        ),
        copy(
          'If a request receives a block or challenge instead of the product, resolve access separately. Our [provider-specific crawler policy workflow](/blog/ai-crawler-policy-training-search) explains how to check permissions and verified requests. An allowed request, a complete product record and a recommendation are separate observations.',
          'Si una solicitud recibe un bloqueo o una comprobación de acceso en vez del producto, resuelve el acceso por separado. Nuestro [procedimiento de políticas por rastreador](/blog/ai-crawler-policy-training-search) explica cómo revisar permisos y solicitudes verificadas. Una solicitud permitida, un registro completo y una recomendación son observaciones distintas.',
          'Bir istek ürün yerine engelleme veya doğrulama sayfası alıyorsa erişim sorununu ayrıca çözün. [Sağlayıcıya göre tarayıcı politikası iş akışımız](/blog/ai-crawler-policy-training-search), izinleri ve doğrulanmış istekleri incelemeyi açıklar. İzin verilen istek, eksiksiz ürün kaydı ve öneri ayrı gözlemlerdir.',
        ),
      ],
    },
    {
      id: 'variant-selection',
      title: copy(
        'Make the variant link select the right item',
        'Haz que el enlace seleccione la variante correcta',
        'Varyant bağlantısının doğru ürünü seçmesini sağlayın',
      ),
      paragraphs: [
        copy(
          '[Google’s product-variant documentation](https://developers.google.com/search/docs/appearance/structured-data/product-variants) describes grouping variants with ProductGroup and giving each variant a unique identifier. It also requires a distinct URL that preselects the variant with the correct image, price and availability. A different URL label is insufficient if it opens the default item.',
          '[La documentación de Google sobre variantes](https://developers.google.com/search/docs/appearance/structured-data/product-variants) explica cómo agruparlas con ProductGroup y asignar un identificador único a cada una. También exige una URL distinta que preseleccione la variante con su imagen, precio y disponibilidad correctos. Una dirección diferente no basta si abre el artículo predeterminado.',
          '[Google’ın ürün varyantı belgeleri](https://developers.google.com/search/docs/appearance/structured-data/product-variants), varyantları ProductGroup ile gruplamayı ve her birine benzersiz kimlik vermeyi açıklar. Ayrıca doğru görsel, fiyat ve bulunabilirlikle varyantı önceden seçen ayrı bir adres gerektirir. Farklı adres varsayılan ürünü açıyorsa yeterli değildir.',
        ),
        copy(
          'Open the submitted link in a fresh session. Confirm the selected size or configuration before checking its offer. Then follow the cart step without placing an order. Record where selection is lost. Review canonical decisions with your technical owner; a testable variant URL does not automatically require a separately indexed page.',
          'Abre el enlace enviado en una sesión nueva. Confirma la talla o configuración seleccionada antes de revisar la oferta. Después llega al carrito sin realizar un pedido. Anota dónde se pierde la selección. Revisa las decisiones canónicas con el responsable técnico: una URL de variante comprobable no exige automáticamente una página indexada por separado.',
          'Gönderilen bağlantıyı yeni bir oturumda açın. Teklifi kontrol etmeden önce seçili bedeni veya yapılandırmayı doğrulayın. Ardından sipariş vermeden sepet adımına ilerleyin. Seçimin nerede kaybolduğunu kaydedin. Standart URL kararlarını teknik sorumluyla değerlendirin; test edilebilir varyant adresi, mutlaka ayrı dizine eklenmiş sayfa gerektirmez.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: a fictional jacket store',
          'Ejemplo ilustrativo: una tienda ficticia de chaquetas',
          'Açıklayıcı örnek: kurgusal bir ceket mağazası',
        ),
        text: copy(
          'A fictional store submits a blue large jacket at €90, out of stock. Its link opens a black small jacket at €80, in stock. The editor should not rewrite the description to explain away the conflict. The team fixes variant selection, checks that the blue item’s page and offer data agree, then resubmits the matching record. These invented figures illustrate a diagnosis, not a Citevia result.',
          'Una tienda ficticia envía una chaqueta azul grande a 90 €, agotada. Su enlace abre una negra pequeña a 80 €, disponible. El editor no debe reescribir la descripción para justificar el conflicto. El equipo corrige la selección, comprueba que la página y los datos de oferta de la chaqueta azul coincidan y vuelve a enviar el registro correspondiente. Estas cifras inventadas ilustran un diagnóstico, no un resultado de Citevia.',
          'Kurgusal bir mağaza, büyük beden mavi ceketi 90 € fiyatla ve stokta yok olarak gönderir. Bağlantı, küçük beden siyah ceketi 80 € fiyatla ve stokta olarak açar. Editör, çelişkiyi gerekçelendirmek için açıklamayı yeniden yazmamalıdır. Ekip varyant seçimini düzeltir, mavi ürünün sayfasıyla teklif verilerinin uyumunu kontrol eder ve eşleşen kaydı yeniden gönderir. Bu uydurma rakamlar bir teşhisi açıklar; Citevia sonucu değildir.',
        ),
      },
    },
    {
      id: 'update-timing',
      title: copy(
        'Trace a mismatch to its update step',
        'Localiza el paso de actualización que causa la discrepancia',
        'Tutarsızlığın oluştuğu güncelleme adımını bulun',
      ),
      paragraphs: [
        copy(
          '[Google’s price-mismatch troubleshooting guide](https://support.google.com/merchants/answer/12159029?hl=en) identifies update delays, incorrect markup and sale timing as possible causes. Save the issue timestamp before changing anything. Compare the catalog change, page refresh and feed processing times; the current page may already differ from the version originally checked.',
          '[La guía de Google para discrepancias de precio](https://support.google.com/merchants/answer/12159029?hl=en) señala como posibles causas los retrasos de actualización, el marcado incorrecto y los horarios de ofertas. Guarda la hora del aviso antes de cambiar nada. Compara el cambio del catálogo, la renovación de la página y el procesamiento del feed; la página actual puede diferir de la versión revisada originalmente.',
          '[Google’ın fiyat uyuşmazlığı rehberi](https://support.google.com/merchants/answer/12159029?hl=en), güncelleme gecikmelerini, hatalı işaretlemeyi ve indirim zamanlamasını olası nedenler arasında sayar. Değişiklik yapmadan önce sorunun zaman damgasını kaydedin. Katalog değişikliğini, sayfa yenilenmesini ve akışın işlenme zamanını karşılaştırın; güncel sayfa ilk kontrol edilen sürümden farklı olabilir.',
        ),
        copy(
          'Give each broken step an owner: catalog data, page delivery, schema generation or feed export. Fix the process that produced the wrong value, then check the next update cycle. Manually correcting one displayed number can leave the next scheduled export ready to restore the error.',
          'Asigna un responsable a cada paso defectuoso: datos del catálogo, entrega de la página, generación del marcado o exportación del feed. Corrige el proceso que produjo el valor erróneo y revisa el siguiente ciclo. Cambiar manualmente una cifra visible puede dejar preparada la próxima exportación para restaurar el error.',
          'Hatalı her adıma sorumlu atayın: katalog verisi, sayfa sunumu, şema üretimi veya akış dışa aktarımı. Yanlış değeri üreten süreci düzeltin, sonra bir sonraki güncelleme döngüsünü kontrol edin. Görünen tek bir sayıyı elle düzeltmek, sonraki planlı aktarımın hatayı geri getirmesini engellemeyebilir.',
        ),
        copy(
          '[Google’s automatic product updates](https://support.google.com/merchants/answer/12157888?hl=en) can address some discrepancies using landing-page information. Google explicitly says they do not replace regular product-data updates. Treat them as a supporting control, with someone still responsible for accurate source records.',
          '[Las actualizaciones automáticas de productos de Google](https://support.google.com/merchants/answer/12157888?hl=en) pueden corregir algunas discrepancias con información de la página de destino. Google aclara que no sustituyen las actualizaciones periódicas de datos. Úsalas como apoyo y mantén un responsable de la exactitud de los registros originales.',
          '[Google’ın otomatik ürün güncellemeleri](https://support.google.com/merchants/answer/12157888?hl=en), açılış sayfasındaki bilgilerle bazı tutarsızlıkları giderebilir. Google, bunların düzenli ürün verisi güncellemelerinin yerini almadığını açıkça belirtir. Bunları destekleyici bir kontrol olarak kullanın; kaynak kayıtların doğruluğundan yine bir kişi sorumlu olsun.',
        ),
      ],
    },
    {
      id: 'release-checklist',
      title: copy(
        'Release a consistent offer, then observe AI answers',
        'Publica una oferta coherente y después observa las respuestas de IA',
        'Tutarlı teklifi yayımlayın, ardından yapay zekâ yanıtlarını gözlemleyin',
      ),
      paragraphs: [
        copy(
          '[Google’s AI-search guidance for merchants](https://developers.google.com/search/docs/appearance/ai-features) includes keeping Merchant Center information current. It requires supporting pages to meet indexing and snippet conditions, without special AI schema. These checks establish a sound publication baseline; they cannot force source selection.',
          '[La orientación de Google sobre búsqueda con IA para comerciantes](https://developers.google.com/search/docs/appearance/ai-features) incluye mantener actualizada la información de Merchant Center. Exige que las páginas fuente cumplan las condiciones de indexación y fragmentos, sin marcado especial para IA. Estas comprobaciones establecen una base editorial sólida, pero no fuerzan la selección de fuentes.',
          '[Google’ın satıcılar için yapay zekâ araması rehberi](https://developers.google.com/search/docs/appearance/ai-features), Merchant Center bilgilerinin güncel tutulmasını da içerir. Kaynak sayfaların özel yapay zekâ şeması olmadan dizine eklenme ve arama özeti koşullarını karşılamasını gerektirir. Bu kontroller sağlam bir yayın temeli oluşturur; kaynak seçimini zorlayamaz.',
        ),
        copy(
          'Use the checklist below for a small sample before rolling the fix across the catalog. Our [AI visibility audit method](/blog/ai-visibility-audit-playbook) helps record later answers and their sources. Citevia’s [technical SEO review](/services/seo) can connect product-data findings with implementation tasks. Keep completed corrections separate from observed citation changes.',
          'Usa esta lista en una muestra pequeña antes de extender la corrección al catálogo. Nuestro [método de auditoría de visibilidad en IA](/blog/ai-visibility-audit-playbook) ayuda a registrar respuestas posteriores y sus fuentes. La [revisión técnica de SEO de Citevia](/services/seo) conecta los hallazgos con tareas de implementación. Separa las correcciones completadas de los cambios observados en citas.',
          'Düzeltmeyi kataloğa yaymadan önce aşağıdaki listeyi küçük bir örneklemde kullanın. [Yapay zekâ görünürlüğü denetim yöntemimiz](/blog/ai-visibility-audit-playbook), sonraki yanıtları ve kaynaklarını kaydetmeye yardımcı olur. [Citevia’nın teknik SEO incelemesi](/services/seo), ürün verisi bulgularını uygulama görevlerine bağlayabilir. Tamamlanan düzeltmeleri gözlemlenen kaynak gösterimi değişikliklerinden ayrı tutun.',
        ),
      ],
      bullets: [
        copy(
          'Identity: the URL selects the intended variant and market without a saved session.',
          'Identidad: la URL selecciona la variante y el mercado previstos sin una sesión guardada.',
          'Kimlik: adres, kayıtlı oturum olmadan doğru varyantı ve pazarı seçer.',
        ),
        copy(
          'Agreement: price, currency and stock describe the same offer across every checked surface.',
          'Coincidencia: precio, moneda y stock describen la misma oferta en todos los puntos revisados.',
          'Uyum: fiyat, para birimi ve stok, incelenen her yerde aynı teklifi tanımlar.',
        ),
        copy(
          'Timing: a real price or stock change survives the next page and feed update.',
          'Tiempo: un cambio real de precio o stock se conserva tras actualizar la página y el feed.',
          'Zamanlama: gerçek fiyat veya stok değişikliği sonraki sayfa ve akış güncellemesinde korunur.',
        ),
        copy(
          'Evidence: save the checked values, timestamps, remaining errors and responsible owners.',
          'Pruebas: guarda los valores revisados, las horas, los errores pendientes y sus responsables.',
          'Kanıt: kontrol edilen değerleri, zamanları, kalan hataları ve sorumluları kaydedin.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Product data: practical questions',
      'Datos de producto: preguntas prácticas',
      'Ürün verileri: uygulamaya yönelik sorular',
    ),
    items: [
      {
        question: copy(
          'My schema validates. Why can the offer still be wrong?',
          'Mi marcado es válido. ¿Por qué puede seguir siendo incorrecta la oferta?',
          'Şemam doğrulanıyor. Teklif yine de neden yanlış olabilir?',
        ),
        answer: copy(
          'A validator can check structure without confirming the current commercial facts. Compare its values with the exact selected variant and the catalog owner’s approved record. An old but well-formed price is still wrong. Retest after the next update, not only immediately after a manual correction.',
          'Un validador puede revisar la estructura sin confirmar los datos comerciales actuales. Compara sus valores con la variante seleccionada y el registro aprobado por el responsable del catálogo. Un precio antiguo bien formado sigue siendo incorrecto. Repite la prueba tras la siguiente actualización, no solo después de una corrección manual.',
          'Doğrulayıcı, güncel ticari bilgileri teyit etmeden yapıyı kontrol edebilir. Değerleri seçili varyantla ve katalog sorumlusunun onayladığı kayıtla karşılaştırın. Doğru biçimlendirilmiş eski fiyat yine de yanlıştır. Yalnızca elle düzeltmenin hemen ardından değil, sonraki güncellemeden sonra da test edin.',
        ),
      },
      {
        question: copy(
          'Should I remove JavaScript from the entire store?',
          '¿Debo eliminar JavaScript de toda la tienda?',
          'Mağazanın tamamından JavaScript’i kaldırmalı mıyım?',
        ),
        answer: copy(
          'No blanket rewrite follows from this audit. First identify which required product facts are missing or stale in the delivered response. Ask the developer for a focused fix and keep useful shopping interactions. Verify the resulting HTML and browser view before deciding whether broader architecture work is necessary.',
          'Esta auditoría no implica rehacer toda la tienda. Primero identifica qué datos necesarios faltan o están desactualizados en la respuesta entregada. Pide una corrección concreta y conserva las interacciones útiles de compra. Verifica el HTML y la vista del navegador antes de decidir si hace falta un cambio de arquitectura mayor.',
          'Bu denetim tüm mağazayı yeniden yazmayı gerektirmez. Önce sunulan yanıtta hangi gerekli ürün bilgilerinin eksik veya eski olduğunu belirleyin. Geliştiriciden belirli bir düzeltme isteyin ve yararlı alışveriş etkileşimlerini koruyun. Daha geniş mimari çalışma gerekip gerekmediğine karar vermeden önce HTML’yi ve tarayıcı görünümünü doğrulayın.',
        ),
      },
      {
        question: copy(
          'Which items should a small team test first?',
          '¿Qué artículos debería probar primero un equipo pequeño?',
          'Küçük bir ekip önce hangi ürünleri test etmeli?',
        ),
        answer: copy(
          'Start with an important product that recently changed, then include a different variant and an out-of-stock item. Add a sale or another currency if your store uses them. This is a diagnostic sample, not proof that the entire catalog is correct. Expand checks when you find a shared template or export problem.',
          'Empieza con un producto importante que haya cambiado recientemente; incluye después otra variante y un artículo agotado. Añade una oferta u otra moneda si las usas. Es una muestra diagnóstica, no una prueba de que todo el catálogo sea correcto. Amplía las revisiones si detectas un problema común de plantilla o exportación.',
          'Yakın zamanda değişen önemli bir ürünle başlayın; ardından farklı bir varyantı ve stokta olmayan bir ürünü ekleyin. Mağazada kullanılıyorsa indirimli ürün veya başka para birimi de ekleyin. Bu teşhis amaçlı örneklemdir; tüm kataloğun doğru olduğunu kanıtlamaz. Ortak şablon veya dışa aktarım sorunu bulursanız kontrolleri genişletin.',
        ),
      },
      {
        question: copy(
          'Can automatic updates replace the feed maintenance task?',
          '¿Las actualizaciones automáticas sustituyen el mantenimiento del feed?',
          'Otomatik güncellemeler akış bakımının yerini alabilir mi?',
        ),
        answer: copy(
          'No. Google describes automatic updates as support for occasional discrepancies. Keep a maintained source record and a reliable publishing process. If the same error returns, find the step that reintroduces it instead of relying on the platform to repair each recurrence.',
          'No. Google describe las actualizaciones automáticas como apoyo para discrepancias ocasionales. Mantén un registro original actualizado y un proceso de publicación fiable. Si el error vuelve, localiza el paso que lo reintroduce en vez de depender de que la plataforma repare cada repetición.',
          'Hayır. Google, otomatik güncellemeleri ara sıra oluşan tutarsızlıklar için destek olarak tanımlar. Güncel kaynak kaydı ve güvenilir yayın süreci sağlayın. Aynı hata geri geliyorsa platformun her seferinde düzeltmesine güvenmek yerine hatayı yeniden üreten adımı bulun.',
        ),
      },
      {
        question: copy(
          'What if an assistant still quotes the old price?',
          '¿Qué hago si un asistente sigue citando el precio antiguo?',
          'Asistan hâlâ eski fiyatı veriyorsa ne yapmalıyım?',
        ),
        answer: copy(
          'Save the question, answer, date and cited URL. Check whether the source describes the same variant, market and offer period. Correct a stale source you control or request a correction from its publisher. If the answer has no traceable source, record that uncertainty. A published correction does not promise an immediate assistant update.',
          'Guarda la pregunta, respuesta, fecha y URL citada. Comprueba si la fuente describe la misma variante, mercado y periodo de oferta. Corrige una fuente propia desactualizada o solicita la corrección a su editor. Si no hay una fuente identificable, registra esa incertidumbre. Publicar una corrección no promete una actualización inmediata del asistente.',
          'Soruyu, yanıtı, tarihi ve gösterilen kaynak adresini kaydedin. Kaynağın aynı varyantı, pazarı ve teklif dönemini tanımlayıp tanımlamadığını kontrol edin. Denetiminizdeki eski kaynağı düzeltin veya yayıncısından düzeltme isteyin. Yanıtın izlenebilir kaynağı yoksa belirsizliği kaydedin. Yayımlanan düzeltme, asistanın hemen güncelleneceği anlamına gelmez.',
        ),
      },
    ],
  },
};

copy(
  `${productDataAiSearch.seoTitle} | Citevia`,
  `${translations.es[productDataAiSearch.seoTitle]} | Citevia`,
  `${translations.tr[productDataAiSearch.seoTitle]} | Citevia`,
);
export const productDataTranslations = translations;
export const productDataFragments = fragments;
