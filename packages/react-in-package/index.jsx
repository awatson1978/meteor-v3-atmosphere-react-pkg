import React from 'react';

import SamplePage from './client/SamplePage';
import BorkedPage from './client/BorkedPage';

var DynamicRoutes = [{
    'name': 'SamplePage',
    'path': '/sample',
    'element': <SamplePage />
  }, {
    'name': 'Claims Processing Pipeline',
    'path': '/borked',
    'element': <BorkedPage />
}];

export { 
  DynamicRoutes, 
  SidebarWorkflows,
  SamplePage,
  BorkedPage
};

