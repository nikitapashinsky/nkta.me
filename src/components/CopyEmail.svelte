<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintIn, quintOut } from "svelte/easing";
  import { email } from "../data/contact";

  let isCopied = false;

  async function handleCopy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 1500);
    } catch (error) {
      // Fix annoying red squiggle: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
      let message;
      if (error instanceof Error) message = error.message;
      console.error(message);
    }
  }
</script>

<div class="relative">
  {#if isCopied}
    <div
      in:fly={{
        y: 12,
        duration: 400,
        easing: quintOut,
      }}
      out:fly={{
        y: 8,
        duration: 200,
        easing: quintIn,
      }}
      class="absolute -top-8 left-1/2 z-10 flex -translate-x-1/2 rounded-md bg-stone-600 px-2 py-1 text-center text-xs font-medium text-white shadow-xl shadow-stone-950/10 dark:bg-neutral-700 dark:shadow-neutral-950/50"
    >
      <span class="text-shadow">&check;&nbsp;Copied</span>
    </div>
  {/if}
  <button
    class="group relative flex aspect-square w-10 items-center justify-center rounded-lg bg-stone-200 text-sm transition-transform hover:bg-stone-300 active:scale-90 active:bg-stone-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:active:bg-neutral-700"
    on:click={() => handleCopy(email)}
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="fill-stone-400 group-hover:fill-stone-600 group-active:fill-stone-600 dark:fill-neutral-500 dark:group-hover:fill-neutral-200 dark:group-active:fill-neutral-200"
    >
      <path d="M4 4H14V8H8V14H4V4Z" />
      <path d="M20 10H10V20H20V10Z" />
    </svg>
  </button>
</div>

<style>
  .text-shadow {
    text-shadow: 0.5px 0.5px 1px rgb(28 25 23 / 0.35);
  }

  button {
    -webkit-tap-highlight-color: rgb(0 0 0 / 0);
  }
</style>
