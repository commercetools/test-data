import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import {
  KeyReferenceDraft,
  MoneyDraft,
} from '@commercetools-test-data/commons';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const channel = ChannelDraft.presets.sampleDataB2B
  .spain()
  .build<TChannelDraft>();
const variant = ProductVariantDraft.presets.sampleDataB2B
  .ww567Yz03()
  .build<TProductVariantDraft>();

const ww567YzGreen6 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ww567-yz-green-6')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(3600000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default ww567YzGreen6;
