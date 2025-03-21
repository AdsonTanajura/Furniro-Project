import '@testing-library/jest-dom';
import 'fast-text-encoding';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder as any;
global.TextDecoder = class TextDecoder {
  decode(input?: ArrayBuffer | DataView | Uint8Array): string {
    if (!input) return '';
    if (input instanceof Uint8Array) return Buffer.from(input).toString();
    if (input instanceof ArrayBuffer)
      return Buffer.from(new Uint8Array(input)).toString();
    if (input instanceof DataView)
      return Buffer.from(new Uint8Array(input.buffer)).toString();
    return '';
  }
} as any;
