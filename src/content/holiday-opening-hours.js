import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const holidayOpeningHours = {
  translations,
  slug: 'holiday-opening-hours',
  category: 'STRATEGY',
  published: '2026-11-11',
  updated: '2026-11-11',
  relatedService: 'seo',
  title: copy(
    'How to publish holiday opening hours for Maps and AI search',
    'Cómo publicar tus horarios festivos para mapas y buscadores con IA',
    'Haritalar ve yapay zekâ aramaları için tatil saatleri nasıl yayımlanır?',
  ),
  seoTitle: copy(
    'Holiday opening hours for Maps and AI search',
    'Horarios festivos en mapas y búsquedas con IA',
    'Harita ve yapay zekâ aramalarında tatil saatleri',
  ),
  focusKeyphrase: copy('holiday opening hours', 'horarios festivos', 'tatil saatleri'),
  description: copy(
    'Publish holiday opening hours for each branch on your website, Google and Apple Maps. Check what visitors see when AI gives a different closing time.',
    'Publica los horarios festivos de cada local en tu web, Google y Apple Maps. Comprueba qué ve el cliente si una respuesta de IA da otra hora de cierre.',
    'Her şubenin tatil saatlerini sitenizde, Google ve Apple Haritalar’da yayımlayın. Yapay zekâ farklı bir saat verirse müşterinin ne gördüğünü kontrol edin.',
  ),
  takeaway: copy(
    'Start with the person who will unlock the door. Confirm the branch, date and hours with them, then publish those holiday opening hours on the branch page and its map listings. If an AI answer still gives the usual closing time, check which location, date and service it describes before changing a correct listing.',
    'Empieza por quien abrirá la puerta ese día. Confirma con esa persona el local, la fecha y el horario. Publica esos horarios festivos en la página del local y en sus fichas de mapas. Si una IA sigue dando la hora de cierre habitual, comprueba a qué local, fecha y servicio se refiere antes de modificar una ficha correcta.',
    'Önce o gün kapıyı açacak kişiyle konuşun. Şubeyi, tarihi ve saatleri teyit edin. Ardından tatil saatlerini şubenin web sayfasında ve harita kayıtlarında yayımlayın. Yapay zekâ hâlâ olağan kapanış saatini veriyorsa doğru bir kaydı değiştirmeden önce yanıtın hangi şube, tarih ve hizmetten söz ettiğine bakın.',
  ),
  sections: [
    {
      id: 'branch-schedule',
      title: copy(
        'Give each branch a dated holiday schedule',
        'Indica las fechas y los horarios festivos de cada local',
        'Her şube için tarihleri belirten bir tatil programı hazırlayın',
      ),
      paragraphs: [
        copy(
          'A customer asking “Can I still collect my order?” needs more than the store’s closing time. The collection desk might close an hour earlier. Ask the branch manager to confirm when people can enter, which services will run and when normal hours resume. Include the year so last December’s notice cannot pass for this year’s timetable.',
          'A quien pregunta «¿Aún puedo recoger mi pedido?» no le basta saber a qué hora cierra la tienda. El mostrador de recogida podría cerrar una hora antes. Confirma con el responsable cuándo se puede entrar, qué servicios funcionarán y cuándo volverá el horario habitual. Incluye el año para que nadie confunda el aviso de diciembre pasado con el de este año.',
          '“Siparişimi hâlâ teslim alabilir miyim?” diye soran müşteri için mağazanın kapanış saati yetmez. Teslim noktası bir saat önce kapanabilir. Şube sorumlusundan kapıların hangi saatlerde açık olacağını, hangi hizmetlerin verileceğini ve normal düzene ne zaman dönüleceğini öğrenin. Geçen aralık ayının duyurusuyla karışmaması için yılı da yazın.',
        ),
        copy(
          'Put the exception beside the regular hours on the page people reach from the map pin. Name the branch and use local time. If people book visits at their own address, our [guide to service areas and booking hours](/blog/service-area-business-seo-ai-search) explains how to describe that arrangement.',
          'Pon la excepción junto al horario habitual en la página a la que lleva el marcador del mapa. Identifica el local y usa la hora local. Si atiendes a domicilio, nuestra [guía sobre zonas de servicio y horarios de reserva](/blog/service-area-business-seo-ai-search) explica cómo comunicarlo.',
          'İstisnayı, harita kaydından açılan sayfada normal saatlerin yanına yazın. Şubeyi belirtin ve yerel saati kullanın. Müşterilerin adresine gidiyorsanız [hizmet bölgeleri ve randevu saatleri rehberimiz](/blog/service-area-business-seo-ai-search) bu çalışma biçimini nasıl açıklayabileceğinizi anlatır.',
        ),
      ],
      example: {
        title: copy(
          'Example notice for a fictional bookshop',
          'Ejemplo de aviso para una librería ficticia',
          'Hayalî bir kitapçı için örnek duyuru',
        ),
        text: copy(
          'Harbour Street branch · Thursday 24 December 2026. Shop open 09:00–14:00. Collect reserved books by 13:00. Closed Friday 25 December. Our usual Saturday hours, 10:00–17:00, resume on 26 December. A visitor arriving at 13:30 on the 24th can browse but has missed collection.',
          'Local de la calle del Puerto · Jueves 24 de diciembre de 2026. Tienda abierta de 09:00 a 14:00. Recogida de libros reservados hasta las 13:00. Cerrado el viernes 25. El sábado 26 vuelve el horario habitual de 10:00 a 17:00. Quien llegue a las 13:30 del día 24 podrá visitar la librería, pero ya habrá terminado la recogida.',
          'Liman Caddesi şubesi · 24 Aralık 2026 Perşembe. Mağaza 09.00–14.00 arası açık. Ayırttığınız kitapları 13.00’e kadar teslim alabilirsiniz. 25 Aralık Cuma kapalıyız. 26 Aralık Cumartesi günü olağan 10.00–17.00 düzenine dönüyoruz. Ayın 24’ünde saat 13.30’da gelen biri raflara bakabilir, ancak kitap teslim saati geçmiştir.',
        ),
      },
    },
    {
      id: 'map-listings',
      title: copy(
        'Set the exception on Google and Apple Maps',
        'Registra la excepción en Google Maps y Apple Maps',
        'Google Haritalar ve Apple Haritalar’da istisnayı girin',
      ),
      paragraphs: [
        copy(
          'For Google, open the branch’s Business Profile and edit its hours. Under Special hours, select the date and enter the opening and closing times, or mark it closed for the whole day. Google requires the profile to be open with main hours for special hours to appear. Its [instructions for date-specific hours](https://support.google.com/business/answer/6303076) also explain how to add a second interval if the doors close for a break.',
          'En Google, abre el Perfil de Empresa del local y edita el horario. En el apartado de horarios especiales, elige la fecha e introduce la apertura y el cierre, o indica que el local estará cerrado todo el día. Para mostrar la excepción, Google exige que el perfil figure como abierto con un horario principal. Sus [instrucciones para fechas concretas](https://support.google.com/business/answer/6303076) también explican cómo añadir un segundo tramo si hay una pausa.',
          'Google’da şubenin İşletme Profili’ni açıp çalışma saatlerini düzenleyin. Özel çalışma saatleri bölümünde tarih seçin. Açılış ve kapanış saatlerini girin ya da şubeyi o gün için kapalı işaretleyin. İstisnanın görünmesi için profilde işletmenin ana çalışma saatleriyle açık olduğu belirtilmelidir. Google’ın [belirli tarihlere saat girme talimatları](https://support.google.com/business/answer/6303076) gün içinde ara verirseniz ikinci saat aralığını nasıl ekleyeceğinizi de açıklar.',
        ),
        copy(
          'In Apple Business, choose the location and set temporary hours for the holiday dates. Check the place card preview against the branch page. Apple’s [guide to location hours and services](https://support.apple.com/guide/business/configure-location-attributes-abcbdc543423/web) distinguishes temporary hours from hours for a particular service. A pickup counter that closes early is a reason to label pickup explicitly.',
          'En Apple Business, selecciona el local y configura el horario temporal para las fechas festivas. Compara la vista previa de la ficha con la página del local. La [guía de Apple sobre horarios y servicios por local](https://support.apple.com/guide/business/configure-location-attributes-abcbdc543423/web) distingue los horarios temporales de los que corresponden a un servicio concreto. Si el mostrador de recogida cierra antes, identifica ese horario como tal.',
          'Apple Business’ta şubeyi seçip tatil tarihleri için geçici saatleri girin. Yer kartının önizlemesini şubenin sayfasıyla karşılaştırın. Apple’ın [konum ve hizmet saatleri rehberi](https://support.apple.com/guide/business/configure-location-attributes-abcbdc543423/web) geçici çalışma saatleri ile belirli bir hizmetin saatlerini ayrı ele alır. Teslim noktası erken kapanıyorsa bu saatin hangi hizmet için geçerli olduğunu açıkça yazın.',
        ),
      ],
    },
    {
      id: 'website-hours',
      title: copy(
        'Check what your website says after the holiday',
        'Comprueba qué dirá tu web después del festivo',
        'Tatilden sonra sitenizde hangi saatlerin görüneceğini kontrol edin',
      ),
      paragraphs: [
        copy(
          'If your location page already publishes structured data, ask the person who maintains it to check the dates against the visible notice. In its [LocalBusiness hours examples](https://developers.google.com/search/docs/appearance/structured-data/local-business#business-hours), Google shows a seasonal closure with validFrom and validThrough and both opens and closes set to 00:00. Match the start and end dates to the actual closure. A shortened trading day needs its actual opening and closing times.',
          'Si la página del local ya publica datos estructurados, pide a quien los mantenga que contraste las fechas con el aviso visible. En sus [ejemplos de horarios para LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business#business-hours), Google muestra un cierre de temporada con validFrom y validThrough y con opens y closes a las 00:00. Usa como límites las fechas reales del cierre. Para una jornada reducida, indica las horas reales de apertura y cierre.',
          'Şube sayfanızda yapılandırılmış veri varsa bakımını yapan kişiden tarihleri sayfada görünen duyuruyla karşılaştırmasını isteyin. Google’ın [LocalBusiness çalışma saati örnekleri](https://developers.google.com/search/docs/appearance/structured-data/local-business#business-hours) süreli bir kapanışta validFrom ve validThrough alanlarını, opens ve closes için de 00:00 değerini gösterir. Başlangıç ve bitiş tarihlerini gerçek kapanışa göre girin. Şube o gün kısa süre açık kalacaksa gerçek açılış ve kapanış saatlerini yazın.',
        ),
        copy(
          'Read the page as if you were planning three visits. Check the day before the exception, the holiday itself and the first ordinary trading day afterward. Can you tell when the door opens on each? Give someone at the branch a reminder to take down the expired notice and check the public listings on reopening day.',
          'Lee la página como si planearas una visita en tres fechas distintas. Comprueba la víspera, el propio festivo y el primer día de actividad normal. ¿Queda claro cuándo se abren las puertas en cada caso? Pide a alguien del local que retire el aviso caducado y revise las fichas públicas el día de la reapertura.',
          'Sayfaya üç farklı gün için ziyaret planlayan bir müşteri gibi bakın. Tatilden önceki günü, tatil gününü ve sonrasındaki ilk normal iş gününü kontrol edin. Her biri için kapının kaçta açılacağı belli mi? Şubeden birine, yeniden açılış gününde eski duyuruyu kaldırmayı ve herkese açık harita kayıtlarını kontrol etmeyi hatırlatın.',
        ),
      ],
    },
    {
      id: 'conflicting-answer',
      title: copy(
        'Trace a conflicting “open now” answer',
        'Averigua por qué discrepa un «abierto ahora»',
        '“Şu an açık” yanıtındaki uyuşmazlığı inceleyin',
      ),
      paragraphs: [
        copy(
          'In August 2026, a restaurant owner [reported a closure attributed to the wrong year](https://support.google.com/business/thread/456629854/google-ai-search-incorrectly-says-our-restaurant-is-temporarily-closed-for-renovations-in-2026?hl=en). The owner said the renovations happened in 2024 and the restaurant was taking reservations. That distinction matters when checking a holiday answer. A notice can describe the right place and the right month and still be two years out of date.',
          'En agosto de 2026, una persona al frente de un restaurante [señaló que la IA situaba un cierre en el año equivocado](https://support.google.com/business/thread/456629854/google-ai-search-incorrectly-says-our-restaurant-is-temporarily-closed-for-renovations-in-2026?hl=en). Según explicó, las obras se hicieron en 2024 y el restaurante aceptaba reservas. Ese detalle importa al comprobar un horario festivo. Un aviso puede referirse al local y al mes correctos y aun así llevar dos años desfasado.',
          'Ağustos 2026’da bir restoran sahibi [kapanışın yanlış yıla ait gösterildiğini bildirdi](https://support.google.com/business/thread/456629854/google-ai-search-incorrectly-says-our-restaurant-is-temporarily-closed-for-renovations-in-2026?hl=en). İşletme sahibi tadilatın 2024’te yapıldığını ve restoranın rezervasyon aldığını belirtti. Tatil saatlerini araştırırken bu ayrıntı önemlidir. Duyurudaki yer ve ay doğru olsa bile duyuru iki yıl öncesine ait olabilir.',
        ),
        copy(
          'Ask about the named branch, date and service. In the bookshop example, try “Can I collect a reserved book at the Harbour Street shop at 13:30 on 24 December 2026?” Save the answer, its links, the local time of the check and the hours shown on the public map card. Our [guide to recording AI answer evidence](/blog/ai-visibility-audit-playbook) explains how to make a later check comparable.',
          'Pregunta por el local, la fecha y el servicio concretos. Para la librería del ejemplo, prueba con «¿Puedo recoger un libro reservado en el local de la calle del Puerto a las 13:30 del 24 de diciembre de 2026?». Guarda la respuesta, sus enlaces, la hora local de la consulta y el horario de la ficha pública. Nuestra [guía para documentar respuestas de IA](/blog/ai-visibility-audit-playbook) explica cómo repetir la comprobación en condiciones comparables.',
          'Şubeyi, tarihi ve hizmeti belirterek sorun. Kitapçı örneğinde “24 Aralık 2026 saat 13.30’da Liman Caddesi şubesinden ayırttığım kitabı teslim alabilir miyim?” diye sorabilirsiniz. Yanıtı, bağlantılarını, sorgunun yerel saatini ve herkese açık harita kartında görünen saatleri kaydedin. [Yapay zekâ yanıtlarını belgeleme rehberimiz](/blog/ai-visibility-audit-playbook) sonraki kontrolü benzer koşullarda nasıl yapacağınızı açıklar.',
        ),
      ],
      bullets: [
        copy(
          'Wrong branch or service? Make the distinction clear on the linked page. A correct closing time for the shop can still give the wrong answer about pickup.',
          '¿Es otro local u otro servicio? Aclara la diferencia en la página enlazada. La hora de cierre de la tienda puede ser correcta y aun así inducir a error sobre la recogida.',
          'Şube veya hizmet mi karışmış? Bağlantının açtığı sayfada ayrımı açıkça belirtin. Mağazanın kapanış saati doğru olsa bile teslim alma konusunda yanlış yönlendirebilir.',
        ),
        copy(
          'Outdated source? Correct a page you manage, or send its publisher the dated branch notice. Check the public version once the publisher confirms the edit.',
          '¿Está desactualizada la fuente? Corrige la página si la gestionas tú o envía al responsable el aviso del local con su fecha. Comprueba la versión pública cuando te confirmen el cambio.',
          'Kaynak eski mi? Sayfayı siz yönetiyorsanız düzeltin. Başkası yönetiyorsa tarihli şube duyurusunu o kişiye gönderin. Değişikliği teyit ettiğinde herkese açık sürümü kontrol edin.',
        ),
        copy(
          'All published sources agree? Record the mismatch and use the answer’s feedback option if available. A later correct answer tells you what appeared in that check. The reason for the earlier error may remain unknown.',
          '¿Coinciden las fuentes publicadas? Registra la discrepancia y, si la respuesta permite enviar comentarios, comunica el error. Una respuesta correcta posterior documenta lo que apareció en esa consulta. La causa del error anterior puede seguir sin conocerse.',
          'Yayımlanan kaynaklar birbiriyle uyumlu mu? Çelişkiyi kaydedin ve varsa yanıtın geri bildirim seçeneğini kullanın. Sonraki doğru yanıt yalnızca o kontrolde ne gördüğünüzü gösterir. İlk hatanın nedeni belirsiz kalabilir.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Questions about holiday opening hours',
      'Preguntas sobre los horarios festivos',
      'Tatil saatleri hakkında sorular',
    ),
    items: [
      {
        question: copy(
          'Should I confirm a holiday if we keep our usual hours?',
          '¿Debo confirmar el festivo si mantenemos el horario habitual?',
          'Tatilde saatlerimiz aynı kalacaksa yine de teyit etmeli miyim?',
        ),
        answer: copy(
          'Yes. Google recommends confirming official holiday hours even when they match the regular schedule. Enter those hours for the holiday date. Customers wondering whether to make the trip can then see that you accounted for that day.',
          'Sí. Google recomienda confirmar el horario de los festivos oficiales aunque coincida con el habitual. Introduce esas horas para la fecha concreta. Así, quien esté pensando en desplazarse podrá ver que has tenido en cuenta ese día.',
          'Evet. Google, normal saatlerle aynı olsa bile resmî tatil saatlerini teyit etmenizi önerir. Saatleri tatilin olduğu tarih için girin. Böylece yola çıkmayı düşünen müşteriler o günü hesaba kattığınızı görebilir.',
        ),
      },
      {
        question: copy(
          'Which Google setting fits a ten-day closure?',
          '¿Qué opción de Google corresponde a un cierre de diez días?',
          'On günlük bir kapanışta Google’da hangi seçeneği kullanmalıyım?',
        ),
        answer: copy(
          'Mark the branch temporarily closed. Google directs businesses to use that status for closures of seven consecutive days or more, or when the reopening date is unknown. Use special hours for closures of up to six consecutive days. Assign someone to reopen the listing when the doors open again.',
          'Marca el local como cerrado temporalmente. Google indica ese estado para cierres de siete días consecutivos o más, o si se desconoce la fecha de reapertura. Para cierres de hasta seis días seguidos, usa horarios especiales. Encarga a alguien que vuelva a marcar el local como abierto cuando se reanude la actividad.',
          'Şubeyi geçici olarak kapalı işaretleyin. Google, art arda en az yedi gün süren veya bitiş tarihi belli olmayan kapanışlarda bu durumu kullanmanızı önerir. En fazla altı günlük kesintisiz kapanışlar için özel çalışma saatlerini kullanın. Kapılar açıldığında kaydı yeniden açık olarak işaretleyecek kişiyi belirleyin.',
        ),
      },
      {
        question: copy(
          'What if the shop closes for lunch and opens again?',
          '¿Y si el local cierra para comer y vuelve a abrir?',
          'Öğle arasında kapanıp tekrar açılıyorsak saatleri nasıl girmeliyiz?',
        ),
        answer: copy(
          'Enter two intervals for that date in Google’s special hours. Show both on the branch page too. For example, a bakery open 08:00–12:00 and 14:00–17:00 should show both intervals so a visitor can see the two-hour break.',
          'Añade dos tramos para esa fecha en los horarios especiales de Google. Publica ambos también en la página del local. Por ejemplo, una panadería que abre de 08:00 a 12:00 y de 14:00 a 17:00 debe mostrar los dos tramos para que se aprecie la pausa de dos horas.',
          'Google’da o tarihin özel çalışma saatlerine iki ayrı aralık girin. İkisini de şube sayfasında gösterin. Örneğin 08.00–12.00 ve 14.00–17.00 arasında açık bir fırının müşterileri, her iki aralığı gördüklerinde iki saatlik molayı hesaba katabilir.',
        ),
      },
      {
        question: copy(
          'Our branches follow different schedules. Is one holiday banner enough?',
          'Nuestros locales tienen horarios distintos. ¿Basta con un aviso general?',
          'Şubelerimiz farklı saatlerde çalışıyor. Tek bir tatil duyurusu yeterli mi?',
        ),
        answer: copy(
          'Use a shared banner to point people to the branch list. Give each affected location its own dated hours beside its address and update its individual map card. Test with two branches that close at different times. A reader should be able to tell which closing time applies before choosing directions.',
          'Usa el aviso general para dirigir a la lista de locales. En cada local afectado, publica el horario con su fecha junto a la dirección y actualiza su ficha de mapas. Haz la prueba con dos locales que cierren a horas distintas. Antes de consultar la ruta, el lector debería poder identificar la hora de cierre que le corresponde.',
          'Genel duyurudan şube listesine bağlantı verin. Etkilenen her şubenin tarihli saatlerini adresinin yanına yazıp kendi harita kartını güncelleyin. Farklı saatlerde kapanan iki şubeyle kontrol edin. Müşteri yol tarifi almadan önce gideceği şubenin kaçta kapanacağını anlayabilmeli.',
        ),
      },
    ],
  },
};

copy(
  `${holidayOpeningHours.seoTitle} | Citevia`,
  `${translations.es[holidayOpeningHours.seoTitle]} | Citevia`,
  `${translations.tr[holidayOpeningHours.seoTitle]} | Citevia`,
);

export const holidayHoursTranslations = translations;
export const holidayHoursFragments = fragments;
