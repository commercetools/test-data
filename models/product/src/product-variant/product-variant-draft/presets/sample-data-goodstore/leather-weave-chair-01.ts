import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const leatherWeaveChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BA-092')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(34900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_426344321-mhfsESbj.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
        'en-US':
          "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
        'de-DE':
          'Der Holzstuhl mit Ledergeflechtbezug ist ein schönes und funktionelles Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bildet. Die Sitzfläche und die Rückenlehne des Stuhls sind aus eng gewebten Lederstreifen gefertigt, die eine einzigartige und auffällige Textur erzeugen, die den Stuhl noch attraktiver macht. Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die es leicht macht, ihn in eine Vielzahl von Einrichtungsstilen zu integrieren. Die Beine des Stuhls sind für mehr Stabilität leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden. Insgesamt ist ein Holzstuhl mit Ledergeflechtbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Struktur und visuelles Interesse verleihen kann. Die Kombination aus natürlichen Materialien und luxuriösen Details macht ihn zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Oak', 'de-DE': 'Eiche', 'en-US': 'Oak' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Tan', 'de-DE': 'Bräunen', 'en-US': 'Tan' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#BC5724', 'de-DE': '#BC5724', 'en-US': '#BC5724' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#E3AF81', 'en-US': '#E3AF81', 'de-DE': '#E3AF81' }),
    ]);

export default leatherWeaveChair01;
