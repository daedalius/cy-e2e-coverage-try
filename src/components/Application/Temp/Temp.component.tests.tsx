import * as React from 'react';
import { mount } from '@cypress/react';

import Temp from './index';

describe('Temp component', () => {
  it('renders ololo', () => {
    mount(<Temp />);
    cy.contains('ololo').should('be.visible');
  });
});
