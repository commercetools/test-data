import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ashenRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ARG-56')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(19999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(19999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(25000))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458700-8eM42pqK.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458689-9cU_vBM2.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- 5ft x 7ft\n- Dry-clean only',
          'en-US': '- 5ft x 7ft\n- Dry-clean only',
          'de-DE': '- 180cm x 180cm\n- Kann nur chemisch gereinigt werden',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.',
          'en-US':
            'A modern shag carpet is a type of rug or carpet with a long, plush pile that is known for its softness and comfort. Unlike traditional shag carpets, which were popular in the 1970s and had a somewhat shaggy and unkempt appearance, modern shag carpets are more refined and have a sleek, contemporary look.  In addition to their softness and comfort, modern shag carpets are also known for their ability to absorb sound and create a cozy, inviting atmosphere. They are often used in living rooms, bedrooms, and other spaces where comfort and style are important.  Overall, a modern shag carpet is a luxurious and stylish addition to any home. Its soft, plush texture and sleek, contemporary look make it a popular choice for those looking to add comfort and style to their living space.',
          'de-DE':
            'Ein moderner Shag-Teppich ist eine Art Vorleger oder Teppich mit langem Plüschflor, der für seine Weichheit und seinen Komfort bekannt ist. Im Gegensatz zu traditionellen Shag-Teppichen, die in den 1970er Jahren beliebt waren und ein etwas zotteliges und ungepflegtes Aussehen hatten, sind moderne Shag-Teppiche raffinierter und haben ein elegantes, zeitgemäßes Aussehen.  Neben ihrer Weichheit und ihrem Komfort sind moderne Hochflorteppiche auch für ihre Fähigkeit bekannt, Schall zu absorbieren und eine gemütliche, einladende Atmosphäre zu schaffen. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen Komfort und Stil wichtig sind.  Ein moderner Hochflorteppich ist eine luxuriöse und stilvolle Ergänzung für jedes Zuhause. Seine weiche, plüschige Textur und sein schlankes, modernes Aussehen machen ihn zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum Komfort und Stil verleihen möchten.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#E3E4E4', 'de-DE': '#E3E4E4', 'en-US': '#E3E4E4' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Ashen', 'de-DE': 'Aschfahl', 'en-US': 'Ashen' }),
    ]);

export default ashenRug01;
