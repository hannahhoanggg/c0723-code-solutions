import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  try {
    const msg = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  try {
    const msg = await fetch('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', msg);

    const msg1 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', msg1);

    const msg2 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', msg2);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const msg = await fetch('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', msg);

    const msg1 = await fetch(msg, true);
    console.log(elapsed(), 'throwChained2:', msg1);

    const msg2 = await fetch(msg1, true);
    console.log(elapsed(), 'throwChained3:', msg2);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();
