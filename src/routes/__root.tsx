import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { PageTransition } from "@/components/site/PageTransition";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="kicker mx-auto">Lost in the bazaar</p>
        <h1 className="mt-6 font-display italic text-7xl">404.</h1>
        <p className="mt-4 text-sm text-muted-foreground">This page doesn't exist — try the index, or head back home.</p>
        <Link to="/" className="btn btn-primary mt-8">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load.</h1>
        <p className="mt-3 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn btn-primary">Try again</button>
          <a href="/" className="btn btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oxbow Creatives — Branding, Web & Performance Marketing | Jaipur" },
      { name: "description", content: "Oxbow Creatives is a Jaipur-based studio building brand identity, websites, Shopify stores and performance marketing — as one in-house system." },
      { name: "theme-color", content: "#0B0B0B" },
      { property: "og:title", content: "Oxbow Creatives — Studio from Jaipur" },
      { property: "og:description", content: "Brand, web, Shopify and performance marketing, built as one system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@300;400;500;600;700;800&family=Baloo+2:wght@600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Mark lazy images as loaded → triggers CSS fade-in
  useEffect(() => {
    const imgs = document.querySelectorAll<HTMLImageElement>("img[loading=\"lazy\"]");
    imgs.forEach((img) => {
      if (img.complete) img.classList.add("loaded");
      else img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
    });
    // Re-run on route changes
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLImageElement>("img[loading=\"lazy\"]:not(.loaded)").forEach((img) => {
        if (img.complete) img.classList.add("loaded");
        else img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Navbar />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
