import { createArticleCopy } from '../i18n/article-copy.js';

const { copy, translations, fragments } = createArticleCopy();

export const aiSeoAudit = {
  slug: 'ai-seo-audit',
  category: 'STRATEGY',
  published: '2026-11-23',
  updated: '2026-11-23',
  relatedService: 'seo',
  title: copy(
    'AI SEO audit: which recommendations should you act on?',
    'Auditoría SEO con IA: ¿qué recomendaciones conviene aplicar?',
    'Yapay zekâ ile SEO denetimi: hangi öneriler uygulanmalı?',
  ),
  seoTitle: copy(
    'AI SEO Audit: Check Before You Change Your Site',
    'Auditoría SEO con IA: qué comprobar primero',
    'Yapay zekâ ile SEO denetimi: önce doğrulayın',
  ),
  focusKeyphrase: 'AI SEO audit',
  description: copy(
    'Review an AI SEO audit before changing your site. Verify the evidence, keep intentional settings and turn real problems into clear repair tasks.',
    'Revisa tu auditoría SEO con IA antes de cambiar la web. Verifica las pruebas, conserva los ajustes intencionados y define tareas para los problemas reales.',
    'Sitenizi değiştirmeden önce yapay zekâ ile SEO denetimini inceleyin. Kanıtları doğrulayın, bilinçli ayarları koruyun ve gerçek sorunlar için görevler belirleyin.',
  ),
  takeaway: copy(
    'Treat an AI SEO audit as a list of claims to verify. Before changing a page, ask for the exact URL, observed evidence and current guidance behind each recommendation. Act on a reproduced problem, preserve an intentional setting and investigate unsupported claims. A higher audit score alone is not a business outcome.',
    'Trata una auditoría SEO con IA como una lista de afirmaciones que debes verificar. Antes de cambiar una página, pide la URL exacta, las pruebas observadas y la documentación actual que respalda cada recomendación. Corrige los problemas reproducibles, conserva los ajustes intencionados e investiga las afirmaciones sin respaldo. Una puntuación más alta no es, por sí sola, un resultado de negocio.',
    'Yapay zekâ ile SEO denetimini doğrulanacak iddialar listesi olarak ele alın. Bir sayfayı değiştirmeden önce her öneri için tam URL’yi, gözlenen kanıtı ve güncel rehberi isteyin. Yeniden gözleyebildiğiniz sorunu düzeltin, bilinçli ayarı koruyun ve dayanağı olmayan iddiaları araştırın. Daha yüksek denetim puanı tek başına bir iş sonucu değildir.',
  ),
  sections: [
    {
      id: 'audit-inputs',
      title: copy(
        'Find out what the AI SEO audit actually inspected',
        'Averigua qué examinó realmente la auditoría SEO con IA',
        'Yapay zekâ ile SEO denetiminin neyi incelediğini öğrenin',
      ),
      paragraphs: [
        copy(
          'Practitioners in a [November 18, 2026 discussion about AI-generated SEO advice](https://www.reddit.com/r/SEO/comments/1xzks3a/to_what_level_is_seo_knowledge_in_llms_poisoned/) describe clients bringing them audits with questionable recommendations. One comment reports advice that every page should be indexed. These accounts identify a review problem; they do not measure how often AI audits are wrong.',
          'Profesionales que participan en un [debate del 18 de noviembre de 2026 sobre consejos SEO generados por IA](https://www.reddit.com/r/SEO/comments/1xzks3a/to_what_level_is_seo_knowledge_in_llms_poisoned/) describen auditorías que les envían sus clientes con recomendaciones dudosas. Un comentario menciona el consejo de indexar todas las páginas. Estos relatos señalan un problema de revisión; no miden la frecuencia de los errores en las auditorías con IA.',
          'Uzmanlar, [yapay zekânın ürettiği SEO önerileri hakkında 18 Kasım 2026 tarihli bir tartışmada](https://www.reddit.com/r/SEO/comments/1xzks3a/to_what_level_is_seo_knowledge_in_llms_poisoned/), müşterilerinden gelen denetimlerdeki tartışmalı önerileri anlatıyor. Bir yorum, her sayfanın dizine eklenmesi gerektiği yönündeki tavsiyeyi aktarıyor. Bu anlatımlar bir inceleme ihtiyacını gösterir; yapay zekâ denetimlerinin ne sıklıkla yanıldığını ölçmez.',
        ),
        copy(
          'Ask what the tool received: a screenshot, copied text, a crawl export, live HTML or Search Console data. Save the input date and pages covered. A screenshot cannot establish a response header. A homepage fetch cannot establish that every product page lacks a canonical. Keep the conclusion within the evidence supplied.',
          'Pregunta qué recibió la herramienta: una captura, texto copiado, una exportación de rastreo, HTML en vivo o datos de Search Console. Guarda la fecha de los datos y las páginas cubiertas. Una captura no demuestra una cabecera de respuesta. Consultar la portada no demuestra que todas las fichas de producto carezcan de canonical. Limita la conclusión a las pruebas disponibles.',
          'Aracın ne aldığını sorun: ekran görüntüsü, kopyalanmış metin, tarama dışa aktarımı, canlı HTML veya Search Console verisi. Girdinin tarihini ve kapsanan sayfaları kaydedin. Ekran görüntüsü yanıt başlığını doğrulayamaz. Ana sayfanın alınması, tüm ürün sayfalarında canonical bulunmadığını göstermez. Sonucu sunulan kanıtın sınırları içinde tutun.',
        ),
      ],
    },
    {
      id: 'verify-finding',
      title: copy(
        'Separate the observation from the diagnosis',
        'Separa la observación del diagnóstico',
        'Gözlemi teşhisten ayırın',
      ),
      paragraphs: [
        copy(
          '“The fetched text does not contain the delivery policy” is an observation. “The site has no delivery policy” is a broader claim. Open the exact page and check the original response and rendered content. Our [guide to comparing HTML with the browser page](/blog/javascript-seo-ai-search) explains that check. If the tool received a challenge or incomplete extract, investigate its access before commissioning new copy.',
          '«El texto obtenido no contiene la política de entrega» es una observación. «La web no tiene política de entrega» es una afirmación más amplia. Abre la página exacta y comprueba la respuesta original y el contenido renderizado. Nuestra [guía para comparar el HTML con la página del navegador](/blog/javascript-seo-ai-search) explica esa comprobación. Si la herramienta recibió un bloqueo o un extracto incompleto, investiga su acceso antes de encargar contenido nuevo.',
          '“Alınan metinde teslimat politikası yok” bir gözlemdir. “Sitede teslimat politikası yok” daha geniş bir iddiadır. Tam sayfayı açıp ilk yanıtı ve tarayıcıda oluşturulan içeriği kontrol edin. [HTML ile tarayıcıdaki sayfayı karşılaştırma rehberimiz](/blog/javascript-seo-ai-search) bu kontrolü açıklar. Araç bir doğrulama engeli veya eksik alıntı aldıysa yeni metin sipariş etmeden önce erişimini araştırın.',
        ),
        copy(
          'For a traffic or ranking claim, return to the underlying report. Confirm the property, dates, filters and metric. Ask the author to identify the row that supports the number. An unexplained estimate should remain unverified even when it appears in a polished chart.',
          'Para una afirmación sobre tráfico o posiciones, vuelve al informe original. Confirma la propiedad, las fechas, los filtros y la métrica. Pide al autor que identifique la fila que respalda la cifra. Una estimación sin explicación sigue sin verificar aunque aparezca en un gráfico cuidado.',
          'Trafik veya sıralama iddiası için kaynak rapora dönün. Mülkü, tarihleri, filtreleri ve metriği doğrulayın. Yazardan sayıyı destekleyen satırı göstermesini isteyin. Açıklanmayan bir tahmin, şık bir grafikte yer alsa da doğrulanmış sayılmaz.',
        ),
      ],
      bullets: [
        copy(
          'Observed: what the saved response or report actually shows.',
          'Observado: lo que muestra la respuesta o el informe guardado.',
          'Gözlenen: kaydedilen yanıtın veya raporun gerçekten gösterdiği durum.',
        ),
        copy(
          'Expected: what this page should do for its intended visitor.',
          'Esperado: lo que debe hacer esta página para su visitante.',
          'Beklenen: sayfanın hedef ziyaretçi için yapması gereken şey.',
        ),
        copy(
          'Uncertain: what still needs a fresh check or an owner’s explanation.',
          'Incierto: lo que exige una comprobación nueva o la explicación del responsable.',
          'Belirsiz: yeni bir kontrol veya sorumlunun açıklaması gereken konu.',
        ),
      ],
    },
    {
      id: 'check-the-rule',
      title: copy(
        'Check the rule before accepting the fix',
        'Comprueba la regla antes de aceptar la solución',
        'Düzeltmeyi kabul etmeden önce kuralı kontrol edin',
      ),
      paragraphs: [
        copy(
          '[Google’s guidance for evaluating SEO services](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) recommends checking significant third-party audit recommendations against official documentation. Open the cited guidance yourself and check that it covers the named engine and feature. A real source can still be attached to a conclusion it does not support.',
          '[La guía de Google para evaluar servicios SEO](https://developers.google.com/search/docs/fundamentals/do-i-need-seo) recomienda contrastar las recomendaciones importantes de auditorías externas con la documentación oficial. Abre tú mismo la fuente citada y comprueba que cubre el buscador y la función mencionados. Una fuente real también puede acompañar una conclusión que no respalda.',
          '[Google’ın SEO hizmetlerini değerlendirme rehberi](https://developers.google.com/search/docs/fundamentals/do-i-need-seo), üçüncü taraf denetimlerin önemli önerilerini resmî belgelerle karşılaştırmayı önerir. Kaynağı kendiniz açın; belirtilen arama motorunu ve özelliği kapsadığını kontrol edin. Gerçek bir kaynak, desteklemediği bir sonuca da eklenmiş olabilir.',
        ),
      ],
      bullets: [
        copy(
          '“Index every URL.” [Google’s Page indexing report guidance](https://support.google.com/webmasters/answer/7440203?hl=en) says not to expect every URL to be indexed. Check whether the affected URL is an important canonical page or an intentional duplicate or exclusion before changing its controls.',
          '«Indexa todas las URL». [La guía del informe de indexación de páginas de Google](https://support.google.com/webmasters/answer/7440203?hl=en) indica que no debes esperar que se indexen todas las URL. Antes de cambiar los controles, comprueba si la URL afectada es una página canónica importante, un duplicado o una exclusión intencionada.',
          '“Her URL’yi dizine ekleyin.” [Google’ın Sayfa dizine ekleme raporu rehberi](https://support.google.com/webmasters/answer/7440203?hl=en), her URL’nin dizine eklenmesini beklememenizi söyler. Kontrolleri değiştirmeden önce ilgili URL’nin önemli bir standart sayfa mı, yinelenen sürüm mü yoksa bilinçli bir hariç tutma mı olduğunu kontrol edin.',
        ),
        copy(
          '“Add special schema to unlock AI citations.” [Google’s AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features) requires no special AI schema. Ask which visible information the proposed markup describes and what documented requirement it meets. Another assistant needs its own evidence; Google’s guidance is not a universal provider rule.',
          '«Añade un marcado especial para conseguir citas de IA». [La guía de Google sobre sus funciones de IA](https://developers.google.com/search/docs/appearance/ai-features) no exige un marcado especial para IA. Pregunta qué información visible describe el marcado propuesto y qué requisito documentado cumple. Otro asistente necesita sus propias pruebas; la guía de Google no es una regla universal.',
          '“Yapay zekâ atıfları için özel şema ekleyin.” [Google’ın yapay zekâ özellikleri rehberi](https://developers.google.com/search/docs/appearance/ai-features) özel yapay zekâ şeması gerektirmez. Önerilen işaretlemenin hangi görünür bilgiyi anlattığını ve hangi belgelenmiş şartı karşıladığını sorun. Başka bir asistan için ayrı kanıt gerekir; Google’ın rehberi tüm sağlayıcıları kapsamaz.',
        ),
      ],
    },
    {
      id: 'repair-brief',
      title: copy(
        'Turn one verified finding into a repair brief',
        'Convierte un hallazgo verificado en una tarea concreta',
        'Doğrulanan bir bulguyu net bir düzeltme görevine dönüştürün',
      ),
      paragraphs: [
        copy(
          'Give each recommendation a disposition: fix, keep as intended, or investigate. For a fix, record the affected URL or template, proposed change, owner and acceptance check. Save the current setting so the team can reverse the change if it causes a problem. Start with a verified issue that blocks an important visitor task.',
          'Asigna una decisión a cada recomendación: corregir, mantener por ser intencionado o investigar. Para una corrección, registra la URL o plantilla, el cambio propuesto, el responsable y la comprobación final. Guarda el ajuste actual para poder revertirlo si causa un problema. Empieza por un fallo verificado que impida una tarea importante del visitante.',
          'Her öneriye bir karar atayın: düzelt, amaçlandığı gibi koru veya araştır. Düzeltme için etkilenen URL’yi ya da şablonu, önerilen değişikliği, sorumluyu ve kabul kontrolünü kaydedin. Sorun çıkarsa geri dönebilmek için mevcut ayarı saklayın. Önemli bir ziyaretçi görevini engelleyen doğrulanmış sorunla başlayın.',
        ),
      ],
      example: {
        title: copy(
          'Illustrative example: two noindex findings',
          'Ejemplo ilustrativo: dos hallazgos de noindex',
          'Açıklayıcı örnek: iki noindex bulgusu',
        ),
        text: copy(
          'A fictional supplier’s audit flags a product guide and a form-confirmation page as noindex. The owner confirms that the guide should be searchable, while the confirmation page should stay excluded. The developer removes the unintended instruction from the guide only. The acceptance check verifies both responses and the guide’s canonical. A blanket removal would undo a deliberate choice.',
          'La auditoría de un proveedor ficticio detecta noindex en una guía de producto y una página de confirmación de formulario. El responsable confirma que la guía debe aparecer en búsquedas y la confirmación debe seguir excluida. El desarrollador elimina la instrucción accidental solo de la guía. La comprobación final verifica ambas respuestas y el canonical de la guía. Eliminarla en todas partes anularía una decisión deliberada.',
          'Kurgusal bir tedarikçinin denetimi, ürün rehberi ile form onay sayfasında noindex bulur. Sorumlu, rehberin aranabilir olmasını, onay sayfasının ise hariç kalmasını istediğini doğrular. Geliştirici yanlışlıkla eklenen talimatı yalnızca rehberden kaldırır. Kabul kontrolü iki yanıtı ve rehberin canonical adresini doğrular. Talimatı her yerden kaldırmak bilinçli bir tercihi bozardı.',
        ),
      },
    },
    {
      id: 'close-with-evidence',
      title: copy(
        'Close the task with evidence someone else can check',
        'Cierra la tarea con pruebas que otra persona pueda comprobar',
        'Görevi başkasının da kontrol edebileceği kanıtla kapatın',
      ),
      paragraphs: [
        copy(
          'After release, rerun the original check and test a page that should remain unchanged. Save the before-and-after evidence with the release date. A concise stakeholder note can say: “The guide’s accidental exclusion is corrected; the confirmation page remains excluded; later indexing is still to be checked.” That is more useful than announcing that the score turned green.',
          'Después de publicar, repite la comprobación original y prueba una página que deba seguir igual. Guarda las pruebas anteriores y posteriores con la fecha de publicación. Una nota breve puede decir: «Se corrigió la exclusión accidental de la guía; la confirmación sigue excluida; falta comprobar la indexación posterior». Eso resulta más útil que anunciar una puntuación en verde.',
          'Yayımdan sonra ilk kontrolü tekrarlayın ve değişmeden kalması gereken bir sayfayı test edin. Önceki ve sonraki kanıtı yayım tarihiyle saklayın. Ekibe kısa bir not yeterli olabilir: “Rehberin yanlışlıkla hariç tutulması düzeltildi; onay sayfası hariç kalıyor; sonraki dizin durumu henüz kontrol edilmedi.” Bu, puanın yeşile döndüğünü duyurmaktan daha yararlıdır.',
        ),
        copy(
          'If the objective is accurate representation in AI answers, use our [workflow for sampling AI answers](/blog/ai-visibility-audit-playbook) to save and review those answers separately. Reviewing a generated SEO report checks the advice you received; sampling assistant answers checks how your business appears. Citevia’s [technical SEO implementation service](/services/seo) can help turn verified site issues into implementation tasks. Neither a completed repair nor a clean audit guarantees rankings or citations.',
          'Si buscas una representación precisa en respuestas de IA, usa nuestro [método de auditoría de visibilidad en IA](/blog/ai-visibility-audit-playbook) para guardar y revisar esas respuestas por separado. Revisar un informe SEO generado comprueba el consejo recibido; analizar respuestas de asistentes comprueba cómo aparece tu negocio. El [servicio de SEO técnico de Citevia](/services/seo) puede convertir problemas verificados en tareas de implementación. Ni una reparación ni una auditoría sin avisos garantizan posiciones o citas.',
          'Amaç yapay zekâ yanıtlarında doğru temsil edilmekse yanıtları ayrıca kaydedip incelemek için [yapay zekâ görünürlük denetimi rehberimizi](/blog/ai-visibility-audit-playbook) kullanın. Üretilen SEO raporunu incelemek aldığınız öneriyi kontrol eder; asistan yanıtlarını örneklemek işletmenizin nasıl göründüğünü inceler. Citevia’nın [teknik SEO hizmeti](/services/seo), doğrulanmış site sorunlarını uygulama görevlerine dönüştürmeye yardımcı olabilir. Tamamlanan düzeltme veya hatasız denetim, sıralama ya da atıf garantisi vermez.',
        ),
      ],
    },
  ],
  faq: {
    title: copy(
      'Practical questions about AI SEO audits',
      'Preguntas prácticas sobre auditorías SEO con IA',
      'Yapay zekâ ile SEO denetimleri hakkında pratik sorular',
    ),
    items: [
      {
        question: copy(
          'Can a homepage-only audit diagnose the whole site?',
          '¿Una auditoría de la portada puede diagnosticar toda la web?',
          'Yalnızca ana sayfayı incelemek tüm siteyi teşhis eder mi?',
        ),
        answer: copy(
          'It can identify findings on that page and suggest what to inspect next. It cannot establish the condition of pages it never checked. Request a sample from each relevant template, such as products, services and articles, before accepting a site-wide conclusion. Record any pages the tool could not access.',
          'Puede detectar hallazgos en esa página y sugerir qué revisar después. No demuestra el estado de páginas que nunca examinó. Pide una muestra de cada plantilla relevante, como productos, servicios y artículos, antes de aceptar una conclusión sobre toda la web. Registra las páginas a las que la herramienta no pudo acceder.',
          'O sayfadaki bulguları belirleyebilir ve sırada neyin inceleneceğini önerebilir. Hiç kontrol etmediği sayfaların durumunu ortaya koyamaz. Site genelinde bir sonucu kabul etmeden önce ürün, hizmet ve yazı gibi ilgili her şablondan örnek isteyin. Aracın erişemediği sayfaları kaydedin.',
        ),
      },
      {
        question: copy(
          'Do two models agreeing confirm a recommendation?',
          '¿La coincidencia de dos modelos confirma una recomendación?',
          'İki modelin aynı fikirde olması öneriyi doğrular mı?',
        ),
        answer: copy(
          'Agreement is a reason to check, not independent proof. Both answers may repeat the same assumption or source. Ask for the actual response, report row or documented rule behind the recommendation. A reproducible finding is stronger evidence than another confident summary of it.',
          'La coincidencia invita a comprobar, pero no es una prueba independiente. Ambas respuestas pueden repetir la misma suposición o fuente. Pide la respuesta original, la fila del informe o la regla documentada que respalda la recomendación. Un hallazgo reproducible aporta más evidencia que otro resumen convincente.',
          'Uzlaşma, kontrol etmek için bir sebeptir; bağımsız kanıt değildir. İki yanıt da aynı varsayımı veya kaynağı tekrarlayabilir. Önerinin dayandığı gerçek yanıtı, rapor satırını ya da belgelenmiş kuralı isteyin. Tekrarlanabilen bir bulgu, kendinden emin başka bir özetten daha güçlü kanıttır.',
        ),
      },
      {
        question: copy(
          'Should the auditing tool also have editing permission?',
          '¿La herramienta de auditoría también debe tener permiso de edición?',
          'Denetim aracının düzenleme izni de olmalı mı?',
        ),
        answer: copy(
          'An initial evidence review usually needs read access or exports. Google recommends read access to Search Console at the audit stage when hiring an SEO. Decide implementation access separately, with an agreed scope and a way to review and reverse changes. Receiving a report does not require granting broad publishing permissions.',
          'Una revisión inicial suele necesitar acceso de lectura o exportaciones. Google recomienda acceso de lectura a Search Console durante la auditoría al contratar un SEO. Decide por separado el acceso para implementar cambios, con un alcance acordado y una forma de revisarlos y revertirlos. Recibir un informe no exige permisos amplios de publicación.',
          'İlk kanıt incelemesi genellikle okuma erişimi veya dışa aktarımlar gerektirir. Google, SEO uzmanı tutarken denetim aşamasında Search Console’a okuma erişimi verilmesini önerir. Uygulama erişimini, üzerinde anlaşılan kapsam ve değişiklikleri inceleyip geri alma yöntemiyle ayrıca belirleyin. Rapor almak geniş yayım izinleri vermeyi gerektirmez.',
        ),
      },
      {
        question: copy(
          'What if a plausible recommendation has no supporting evidence?',
          '¿Qué hago si una recomendación parece razonable pero no tiene pruebas?',
          'Makul görünen bir önerinin kanıtı yoksa ne yapmalıyım?',
        ),
        answer: copy(
          'Keep it as an investigation with a named owner and a specific next check. For “buyers cannot find pricing,” ask which buyer task fails and test that route. If the page already answers the question, record why no change is needed. Do not turn missing evidence into a development ticket by adding an urgency label.',
          'Déjala como investigación, con un responsable y una comprobación concreta. Ante «los compradores no encuentran los precios», pregunta qué tarea falla y prueba ese recorrido. Si la página ya responde, registra por qué no hace falta cambiarla. Una etiqueta de urgencia no convierte la falta de pruebas en una tarea de desarrollo.',
          'Bir sorumlu ve belirli bir sonraki kontrol atayarak araştırma olarak tutun. “Alıcılar fiyatları bulamıyor” iddiasında hangi görevin aksadığını sorun ve o yolu deneyin. Sayfa soruyu zaten yanıtlıyorsa değişiklik gerekmemesinin nedenini kaydedin. Acil etiketi eklemek, eksik kanıtı geliştirme görevine dönüştürmez.',
        ),
      },
      {
        question: copy(
          'What if the audit score falls after a useful change?',
          '¿Y si la puntuación baja después de un cambio útil?',
          'Yararlı bir değişiklikten sonra denetim puanı düşerse ne olur?',
        ),
        answer: copy(
          'Inspect which check changed and whether the input or scoring rules changed too. Retest the visitor task and any relevant technical condition. Correct a real regression, but document an intentional exception when the rule does not fit the page. Report the verified outcome alongside the score so a reviewer can understand the tradeoff.',
          'Revisa qué comprobación cambió y si también cambiaron los datos o las reglas de puntuación. Vuelve a probar la tarea del visitante y las condiciones técnicas pertinentes. Corrige una regresión real, pero documenta una excepción intencionada si la regla no encaja con la página. Informa del resultado verificado junto con la puntuación para explicar la decisión.',
          'Hangi kontrolün değiştiğini, girdi veya puanlama kurallarının da değişip değişmediğini inceleyin. Ziyaretçi görevini ve ilgili teknik koşulları yeniden test edin. Gerçek bir gerilemeyi düzeltin; kural sayfaya uymuyorsa bilinçli istisnayı belgeleyin. İnceleyen kişinin tercihi anlayabilmesi için puanın yanında doğrulanan sonucu da raporlayın.',
        ),
      },
    ],
  },
  translations,
};

copy(
  `${aiSeoAudit.seoTitle} | Citevia`,
  `${translations.es[aiSeoAudit.seoTitle]} | Citevia`,
  `${translations.tr[aiSeoAudit.seoTitle]} | Citevia`,
);

export const aiSeoAuditTranslations = translations;
export const aiSeoAuditFragments = fragments;
