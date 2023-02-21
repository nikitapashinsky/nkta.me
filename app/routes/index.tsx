export default function Index() {
  return (
    <div>
      <div className="flex max-w-xs flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-medium text-neutral-800">
            Nikita Pashinsky
          </h1>
          <small className="text-xs text-neutral-500">
            Product designer & developer
          </small>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-800">
            Hi, thanks for visiting! This website is under construction.
          </p>
          <p className="text-sm text-neutral-800">
            In the meantime, email me at{" "}
            <a
              href="mailto:n@nkta.me"
              className="underline decoration-neutral-200 decoration-2 underline-offset-4 transition-all hover:text-sky-600 hover:decoration-sky-500 hover:underline-offset-[6px]"
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
