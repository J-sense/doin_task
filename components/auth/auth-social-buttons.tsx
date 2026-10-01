"use client";

export function AuthSocialButtons() {
  return (
    <div className="w-full inline-flex flex-col justify-start items-center gap-10">
      <div className="w-full max-w-[453px] inline-flex justify-center items-center gap-2.5">
        <div className="flex-1 h-px bg-neutral-300" />
        <div className="justify-start text-zinc-500 text-lg font-normal leading-7 px-1">
          or
        </div>
        <div className="flex-1 h-px bg-neutral-300" />
      </div>
      <div className="inline-flex justify-start items-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Google"
          className="size-16 rounded-3xl border border-neutral-300 hover:bg-neutral-50 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          <div className="size-10 relative overflow-hidden flex items-center justify-center">
            <svg className="size-6 fill-black" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.987 0 12.48 0 5.7 0 0 5.7 0 12.48S5.7 24.96 12.48 24.96c3.627 0 6.667-1.187 8.907-3.413 2.32-2.32 3.013-5.56 3.013-8.187 0-.747-.053-1.387-.16-1.92h-11.76z" />
            </svg>
          </div>
        </button>

        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="size-16 rounded-3xl border border-neutral-300 hover:bg-neutral-50 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          <div className="size-10 relative overflow-hidden flex items-center justify-center">
            <svg className="size-6 fill-black" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
