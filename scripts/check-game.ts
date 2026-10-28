import assert from 'node:assert/strict';
import { judge, H } from '../src/scripts/firewall.ts';

const shield = { x: 100, w: 48 };
assert.equal(judge({ x: 110, y: 172, bad: true }, shield.x, shield.w), 'blocked');
assert.equal(judge({ x: 110, y: 172, bad: false }, shield.x, shield.w), 'wrong-block');
assert.equal(judge({ x: 10, y: H, bad: true }, shield.x, shield.w), 'breach');
assert.equal(judge({ x: 10, y: H, bad: false }, shield.x, shield.w), 'passed');
assert.equal(judge({ x: 10, y: 50, bad: true }, shield.x, shield.w), 'falling');
assert.equal(judge({ x: 92, y: 172, bad: true }, shield.x, shield.w), 'falling', 'edge: 92+8 touches but does not overlap');
console.log('game: judge rules hold');
