import { fake, Generator } from '@/core';
import { createRelatedDates, slugify } from '@/utils';
import { TCustomApplicationDeploymentPreview } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationDeploymentPreview>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    alias: fake((f) => slugify(f.lorem.word())),
    url: fake((f) => f.internet.url()),
  },
});

export default generator;
