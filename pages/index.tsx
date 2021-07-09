import Head from "next/head";

type Props = {
  html: string;
  css: string;
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/google-font-preconnect */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="font" />
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>
      <main>
        <header>
          <h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://firebase-kanvas.imgix.net/warga_bantu_warga/hero_banner.png?auto=format,compress,enhance&fm=pjpg&cs=tinysrgb&fit=scale"
              alt="Warga Bantu Warga"
              height="291"
              width="650"
              style={{ maxWidth: 650, height: "auto", width: "100%" }}
            />
          </h1>
        </header>
        <article dangerouslySetInnerHTML={{ __html: props.html }}></article>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const data = require("../data/wbw.json");
  return { html: data.html, css: data.css };
};
