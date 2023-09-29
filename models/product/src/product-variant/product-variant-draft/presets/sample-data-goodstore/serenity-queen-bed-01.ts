import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const serenityQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('IQB-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(99900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(99900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(99900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Serenity%20Quuen%20Bed-JxrePlGT.jpeg'
        )
        .dimensions({ w: 2000, h: 2000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Assembly included in delivery',
          'en-US': '- Assembly included in delivery',
          'de-DE': '- Montage im Lieferumfang enthalten',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.',
          'en-US':
            'A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.',
          'de-DE':
            'Das Queensize-Bett mit gepolstertem Kopfteil im industriellen Look hat ein einzigartiges und kantigen Design. Das Kopfteil ist mit einem robusten beigefarbenen Stoff bezogen und ist mit Lederriemen versehen, die ihm zusammen mit den freiliegenden Schrauben ein industrielles Aussehen verleihen. Der Rahmen ist mit dem gleichen Stoff wie das Kopfteil bespannt. Das französische Bett hat ein schlichtes, minimalistisches Design unterstützt durch den Holzrahmen und den geraden Linien, die das Statement des Kopfteils abrunden. Das Bett eignet sich ideal für all diejenigen, die ihrem Schlafzimmerdekor einen Hauch von industriellem Charme verleihen möchten.',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gray', 'de-DE': 'Grau', 'en-US': 'Gray' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#DFDFDD', 'de-DE': '#DFDFDD', 'en-US': '#DFDFDD' }),
    ]);

export default serenityQueenBed01;
