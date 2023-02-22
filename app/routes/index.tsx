export default function Index() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex max-w-xs flex-col gap-6">
        <div className="space-y-1">
          <h1 className="text-sm font-medium ">Nikita Pashinsky</h1>
          <p className="text-xs text-neutral-500">
            Product designer & developer
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm leading-normal">Hi, and thanks for visiting!</p>
          <p className="text-sm leading-normal">
            There is not much to see here currently,
            <br />
            but I'm actively working on this website :)
          </p>
          <p className="text-sm leading-normal">
            In the meantime, feel free to email me
            <br /> at{" "}
            <a
              href="mailto:n@nkta.me"
              className="underline decoration-neutral-200 decoration-2 underline-offset-4 transition-all hover:text-sky-600 hover:decoration-sky-500 hover:underline-offset-[6px] active:text-sky-600 active:decoration-sky-500 active:underline-offset-[6px] dark:decoration-neutral-700 dark:hover:text-sky-400 dark:hover:decoration-sky-400  dark:active:text-sky-400 dark:active:decoration-sky-400"
            >
              n@nkta.me
            </a>
            .
          </p>
        </div>
      </div>
      <p className="text-xs text-neutral-500">
        Each day is a small lifetime. Have a good life today!
      </p>
    </div>
  );
}
