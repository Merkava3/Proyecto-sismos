import React from 'react';
import { render } from '@testing-library/react';
import Load from './Load';

describe('Load Component', () => {
  it('debería renderizar los elementos estructurales de carga', () => {
    const { container } = render(<Load />);
    
    // Check main container
    expect(container.querySelector('.LoadingContainer')).toBeInTheDocument();
    
    // Check pin loader
    expect(container.querySelector('.loader')).toBeInTheDocument();
    
    // Check generic ellipsis dots
    expect(container.querySelector('.lds-ellipsis')).toBeInTheDocument();
    expect(container.querySelectorAll('.lds-ellipsis div').length).toBe(4);
  });
});
