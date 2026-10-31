import { partnerDescription, partnerFaqs, partnerSteps } from '../content/partners.js';

const copy = [
  ['Your name', 'Tu nombre', 'Adınız'],
  ['Partners', 'Colaboradores', 'İş ortakları'],
  ['Referral partners', 'Programa de referidos', 'Yönlendirme ortakları'],
  ['Partner referral', 'Contacto referido por un colaborador', 'İş ortağı yönlendirmesi'],
  [
    partnerDescription,
    'Recomienda un contacto a Citevia y gana el 10% de su pago mensual cuando se convierta en cliente. Tú haces la presentación; nosotros nos encargamos del resto.',
    'Citevia’ya bir potansiyel müşteri yönlendirin; ödeme yapan müşteriye dönüştüğünde aylık ödemesinin %10’unu kazanın. Siz tanıştırın, gerisini biz halledelim.',
  ],
  [
    'CITEVIA PARTNER PROGRAM',
    'PROGRAMA DE COLABORADORES DE CITEVIA',
    'CITEVIA İŞ ORTAKLIĞI PROGRAMI',
  ],
  ['Bring a lead.', 'Recomienda un contacto.', 'Bir müşteri adayı yönlendirin.'],
  ['Earn every month.', 'Gana cada mes.', 'Her ay kazanın.'],
  [
    'Introduce us to our next client and earn 10% of their monthly payment. You bring the lead. We handle the rest.',
    'Preséntanos a nuestro próximo cliente y gana el 10% de su pago mensual. Tú aportas el contacto. Nosotros nos encargamos del resto.',
    'Bizi bir sonraki müşterimizle tanıştırın ve aylık ödemesinin %10’unu kazanın. Siz yönlendirin, gerisini biz halledelim.',
  ],
  ['Refer a lead', 'Recomendar un contacto', 'Müşteri adayı yönlendir'],
  ['Referral commission', 'Comisión por recomendación', 'Yönlendirme komisyonu'],
  [
    'YOUR INTRODUCTION. YOUR REWARD.',
    'TU PRESENTACIÓN. TU RECOMPENSA.',
    'SİZİN TANIŞTIRMANIZ. SİZİN KAZANCINIZ.',
  ],
  [
    'of the client’s monthly payment',
    'del pago mensual del cliente',
    'müşterinin aylık ödemesinden',
  ],
  [
    'Earn a recurring commission when your lead becomes a paying Citevia client.',
    'Gana una comisión recurrente cuando tu contacto se convierta en un cliente de pago de Citevia.',
    'Yönlendirdiğiniz kişi ödeme yapan bir Citevia müşterisi olduğunda düzenli komisyon kazanın.',
  ],
  ['One introduction.', 'Una presentación.', 'Bir tanışma.'],
  ['Ongoing rewards.', 'Recompensas recurrentes.', 'Düzenli kazanç.'],
  [partnerSteps[0].title, 'Recomiéndanos un contacto', 'Bize bir müşteri adayı yönlendirin'],
  [
    partnerSteps[0].copy,
    '¿Conoces una empresa a la que podamos ayudar? Comparte sus datos de contacto y algo de contexto, o preséntanos por correo electrónico.',
    'Yardımcı olabileceğimiz bir işletme tanıyor musunuz? İletişim bilgilerini ve kısa bir açıklamayı paylaşın veya bizi e-postayla tanıştırın.',
  ],
  [partnerSteps[1].title, 'Nosotros nos encargamos', 'Gerisini biz hallederiz'],
  [
    partnerSteps[1].copy,
    'Nuestro equipo se ocupa de la conversación, la propuesta y el trabajo para el cliente. Tú solo tienes que hacer la presentación.',
    'Ekibimiz görüşmeyi, teklifi ve müşteri çalışmalarını yürütür. Sizin tek yapmanız gereken bizi tanıştırmak.',
  ],
  [partnerSteps[2].title, 'Gana el 10% cada mes', 'Her ay %10 kazanın'],
  [
    partnerSteps[2].copy,
    'Cuando tu contacto se convierta en cliente de pago, ganarás el 10% de su pago mensual a Citevia.',
    'Yönlendirdiğiniz kişi ödeme yapan müşteriye dönüştüğünde Citevia’ya yaptığı aylık ödemenin %10’unu kazanırsınız.',
  ],
  ['MAKE THE INTRODUCTION', 'HAZ LA PRESENTACIÓN', 'BİZİ TANIŞTIRIN'],
  ['Know someone', '¿Conoces a alguien', 'Tanışmamız gereken'],
  ['we should meet?', 'a quien deberíamos conocer?', 'birini tanıyor musunuz?'],
  [
    'Share your details so we can credit the referral to you, then tell us who to contact. That’s all you need to get started.',
    'Comparte tus datos para que podamos atribuirte la recomendación y dinos con quién contactar. Eso es todo lo que necesitas para empezar.',
    'Yönlendirmeyi sizin adınıza kaydedebilmemiz için bilgilerinizi paylaşın, ardından kiminle iletişime geçeceğimizi belirtin. Başlamak için hepsi bu.',
  ],
  ['Your email', 'Tu correo electrónico', 'E-posta adresiniz'],
  ['Lead’s company', 'Empresa del contacto', 'Aday müşterinin şirketi'],
  ['Lead’s contact name', 'Nombre de la persona de contacto', 'Aday müşterinin adı'],
  ['Lead’s email', 'Correo electrónico del contacto', 'Aday müşterinin e-postası'],
  ['Sending your referral…', 'Enviando tu recomendación…', 'Yönlendirmeniz gönderiliyor…'],
  ['Send referral', 'Enviar recomendación', 'Yönlendirmeyi gönder'],
  ['Prepare referral email', 'Preparar correo de presentación', 'Yönlendirme e-postası hazırla'],
  [
    '* Required fields. Share contact details you have permission to pass on. Read our',
    '* Campos obligatorios. Comparte solo los datos que tengas permiso para facilitar. Consulta nuestro',
    '* Zorunlu alanlar. Paylaşma izniniz olan iletişim bilgilerini iletin. Lütfen okuyun:',
  ],
  [
    'Your referral email draft is ready. Review and send it in your email app to complete the introduction.',
    'Tu borrador de presentación está listo. Revísalo y envíalo desde tu aplicación de correo para completar la presentación.',
    'Yönlendirme e-posta taslağınız hazır. Tanıştırmayı tamamlamak için e-posta uygulamanızda inceleyip gönderin.',
  ],
  [
    'Your referral has been delivered. We’ll follow up using the email you provided.',
    'Tu recomendación se ha enviado. Te contactaremos en el correo electrónico que has indicado.',
    'Yönlendirmeniz iletildi. Verdiğiniz e-posta adresinden sizinle iletişime geçeceğiz.',
  ],
  [
    'Email your introduction to',
    'Envía tu presentación a',
    'Tanıştırma e-postanızı şu adrese gönderin:',
  ],
  [
    'with your name and the lead’s contact details.',
    'con tu nombre y los datos de la persona de contacto.',
    'adınızı ve aday müşterinin iletişim bilgilerini ekleyin.',
  ],
  [
    'Please enter the lead’s contact name (2–100 characters).',
    'Introduce el nombre de la persona de contacto (2–100 caracteres).',
    'Lütfen aday müşterinin adını girin (2–100 karakter).',
  ],
  [
    'Please enter a valid email address for the lead.',
    'Introduce un correo electrónico válido para el contacto.',
    'Lütfen aday müşteri için geçerli bir e-posta adresi girin.',
  ],
  [
    'Please enter the lead’s company name (2–150 characters).',
    'Introduce el nombre de la empresa del contacto (2–150 caracteres).',
    'Lütfen aday müşterinin şirket adını girin (2–150 karakter).',
  ],
  [
    'Please keep referral notes under 1,500 characters.',
    'Las notas de la recomendación no deben superar los 1.500 caracteres.',
    'Lütfen yönlendirme notlarını 1.500 karakterle sınırlayın.',
  ],
  ['A FEW DETAILS', 'ALGUNOS DETALLES', 'BİRKAÇ AYRINTI'],
  ['Partner questions,', 'Preguntas de colaboradores,', 'İş ortağı soruları,'],
  ['answered.', 'resueltas.', 'yanıtlandı.'],
  [partnerFaqs[0].q, '¿Qué tengo que hacer?', 'Ne yapmam gerekiyor?'],
  [
    partnerFaqs[0].a,
    'Solo tienes que aportarnos un contacto. Comparte el nombre de la empresa, una persona de contacto y su correo electrónico, o preséntanos directamente por email. Citevia se encarga de la conversación comercial y del trabajo para el cliente.',
    'Bize bir müşteri adayı yönlendirmeniz yeterli. İşletmenin adını, iletişime geçilecek kişiyi ve e-posta adresini paylaşın ya da bizi doğrudan e-postayla tanıştırın. Citevia satış görüşmesini ve müşteri çalışmalarını yürütür.',
  ],
  [partnerFaqs[1].q, '¿Cuánto ganaré?', 'Ne kadar kazanırım?'],
  [
    partnerFaqs[1].a,
    'Ganas el 10% del pago mensual del cliente a Citevia. Por ejemplo, si el cliente paga 3.000 USD al mes, tu comisión será de 300 USD al mes. Es un ejemplo ilustrativo; tu comisión depende del pago mensual real del cliente.',
    'Müşterinin Citevia’ya yaptığı aylık ödemenin %10’unu kazanırsınız. Örneğin müşteri ayda 3.000 ABD doları ödüyorsa komisyonunuz ayda 300 ABD doları olur. Bu yalnızca bir örnektir; komisyonunuz müşterinin gerçek aylık ödemesine bağlıdır.',
  ],
  [partnerFaqs[2].q, '¿Cuándo gano una comisión?', 'Ne zaman komisyon kazanırım?'],
  [
    partnerFaqs[2].a,
    'La comisión se genera cuando el contacto que has recomendado se convierte en cliente de pago y realiza un pago mensual a Citevia. Compartir un contacto por sí solo no genera una comisión.',
    'Komisyon, yönlendirdiğiniz kişi ödeme yapan müşteriye dönüşüp Citevia’ya aylık ödeme yaptığında kazanılır. Yalnızca bir müşteri adayı paylaşmak komisyon kazandırmaz.',
  ],
];

export const partnerTranslations = Object.fromEntries(
  ['es', 'tr'].map((language, index) => [
    language,
    Object.fromEntries(copy.map(([english, ...translations]) => [english, translations[index]])),
  ]),
);
