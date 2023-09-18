import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const edgarArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('EARM-04')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_438943116-tYXWisJi.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Assembly on delivery' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.',
        'en-US':
          'An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.',
        'de-DE':
          'Ein Sessel im abstrakten modernen Stil mit Metallbeinen ist ein einzigartiges Möbelstück, das jedem Raum einen Hauch von Raffinesse verleiht. Der Stuhl ist mit klaren Linien und einem schlanken Profil gestaltet und verfügt über einen niedrigen, breiten Sitz und eine hohe Rückenlehne, die sich sanft um die Seiten des Stuhls krümmt. Der Sitz und die Rückenlehne sind mit einem strukturierten, strapazierfähigen Stoff bezogen, der dem klassischen Sesseldesign eine zeitgemäße Note verleiht. Die Metallbeine sind dünn und konisch zulaufend und bilden eine filigrane und dennoch stabile Basis für den Stuhl. Insgesamt ist dieser Sessel eine perfekte Mischung aus Stil und Komfort, was ihn zu einer großartigen Ergänzung für jeden modernen Wohnraum macht.',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Light Sage' }),
      AttributeDraft.random().name('color').value({ 'en-GB': '#B6C9B6' }),
      AttributeDraft.random().name('finishlabel').value({ 'en-GB': 'Iron' }),
      AttributeDraft.random().name('finish').value({ 'en-GB': '#000' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default edgarArmchair01;
