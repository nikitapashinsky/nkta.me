export default function Index() {
  return (
    <div>
      <div className="flex max-w-xs flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-medium ">Nikita Pashinsky</h1>
          <small className="text-xs text-neutral-500">
            Product designer & developer
          </small>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm ">Hi, thanks for visiting!</p>
          <p className="text-sm ">This website is under construction.</p>
          <p className="text-sm ">
            In the meantime, email me at{" "}
            <a
              href="mailto:n@nkta.me"
              className="underline decoration-neutral-200 decoration-2 underline-offset-4 transition-all hover:text-sky-600 hover:decoration-sky-500 hover:underline-offset-[6px] dark:decoration-neutral-700 dark:hover:text-sky-400 dark:hover:decoration-sky-400"
            >
              n@nkta.me
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
