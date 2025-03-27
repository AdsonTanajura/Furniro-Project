/**
 * @jest-environment jsdom
 */
console.log('Estou falando do setup-test.ts do <rootDir>');
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import 'fast-text-encoding';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = require('util').TextDecoder;
}

jest.mock('@clerk/clerk-react', () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useUser: jest.fn(() => ({
    isSignedIn: true,
    user: { id: '123', firstName: 'John' },
  })),
  useAuth: jest.fn(() => ({
    getToken: jest.fn(),
    sessionId: 'session123',
  })),
  SignedIn: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  SignedOut: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  UserButton: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <button data-testid="clerk-sign-in-button">{children}</button>
  ),
}));
