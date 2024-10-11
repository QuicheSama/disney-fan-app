<script lang='ts'>
	import type { Writable } from "svelte/store";

    export let store: Writable<string>;
    export let placeholder: string = "";

    let value: string = "";
    let timeout: number;

    const debounce = (value: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            $store = value
        }, 200)
    };

    $: debounce(value);

</script>
<input type="search" {placeholder} bind:value/>

<style>
    input {
        border-radius: 1rem;
        width: 100%;
        border:none;
        background: #F1F2F3;
        height: 2rem;
        padding-left: 1rem;
    }
</style>