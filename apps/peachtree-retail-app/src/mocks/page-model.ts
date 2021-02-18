import { Item } from '@backbase/foundation-ang/web-sdk';
import * as modelMock from '../../../../dist/apps/peachtree-retail-app/page-model-mock.json';

export const pageModel: Item = {
  name: 'pt-peachtree-retail-app-ang-_-6b67a46a27a6',
  properties: {
    'render.requires': 'render-bb-ssr',
    src: '/api/portal/static/items/bb-peachtree-retail-app-ang/index.hbs',
    'render.strategy': 'render-bb-widget-3',
    label: 'Peachtree Retail App Container',
    title: 'Peachtree  Retail App Container',
    thumbnailUrl: '/api/portal/static/items/bb-peachtree-retail-app-ang/icon.png',
    area: '0',
    order: 0,
  },
  children: modelMock.children[0].children,
};
