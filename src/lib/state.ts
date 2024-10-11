import { writable } from 'svelte/store';

const nameToSearch = writable('');

export { nameToSearch };
