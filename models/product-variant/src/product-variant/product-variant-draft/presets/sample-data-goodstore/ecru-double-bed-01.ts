import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ecruDoubleBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SQB-034')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(89900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(89900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Ecru%20Twin%20Bed-q6309G4v.jpeg'
        )
        .dimensions({ w: 2000, h: 2000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes with pillow-top headboard\n- Assembly included',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
        'en-US':
          'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
        'de-DE':
          'Ein Doppelbett mit Sofakopfteil ist ein einzigartiges und vielseitiges Möbelstück, das den Komfort eines Bettes mit der Funktionalität eines Sofas verbindet. Der Bettrahmen ist rechteckig und groß genug, um eine Standard-Doppelmatratze aufzunehmen. Das Kopfteil hat die Form eines Sofas, das oben am Bettrahmen befestigt ist. Das Kopfteil des Sofas bietet eine bequeme Rückenlehne zum Sitzen im Bett, um zu lesen, fernzusehen oder an einem Laptop zu arbeiten. Das Kopfteil des Sofas ist mit einem weichen und strapazierfähigen Stoff bezogen und bietet eine bequeme Sitzfläche. Insgesamt ist ein Queensize-Bett mit Sofa-Kopfteil ein praktisches und stilvolles Möbelstück, das jedem Schlafzimmer sowohl Komfort als auch Funktionalität verleiht.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default ecruDoubleBed01;
