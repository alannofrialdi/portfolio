import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });
// Can be imported from a shared config
const locales = ["en", "de"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
