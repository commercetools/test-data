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
  .defaultChannel()
  .build<TChannelDraft>();
const variant = ProductVariantDraft.presets.sampleDataB2B
  .uu789Uv01()
  .build<TProductVariantDraft>();

const uu789UvRed1 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-red-1')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2750000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default uu789UvRed1;
