import { describe, expect, it } from '@jest/globals';
import NoodleSearch from './noodle-search';
import { render, screen } from '@testing-library/react';

describe('Noodle Search component tests', async () => {
    it('Noodle search renders', () => {
        render(<NoodleSearch />)

        expect(screen.findByTestId('noodle-button'));
    });
});