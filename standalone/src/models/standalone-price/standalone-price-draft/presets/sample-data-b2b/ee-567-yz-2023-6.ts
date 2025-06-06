import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ee567Yz20236 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ee567-yz-2023-6')
    .sku('ee567-yz-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1600000))
    .country('ES')
    .channel(KeyReferenceDraft.presets.channel().key('spain'))
    .active(true);

export default ee567Yz20236;
