// app/global-error.tsx
"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <html>
        <body>
        <h2>Unexpected error occurred!</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Try Again</button>
        </body>
        </html>
    );
}
