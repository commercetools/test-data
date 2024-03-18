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
  .vv234Wx01()
  .build<TProductVariantDraft>();

const vv234WxRed3 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('vv234-wx-red-3')
    .sku(variant.sku!)
    .value(MoneyDraft.random().currencyCode('USD').centAmount(5280000))
    .channel(KeyReferenceDraft.presets.channel().key(channel.key!))
    .active(true);

export default vv234WxRed3;
