import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const hydraulicHose2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('hydraulic-hose-2')
    .sku('hydraulic-hose')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(7500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default hydraulicHose2;
