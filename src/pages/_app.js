// this 2 css is for banner slider and can delete if unwanted
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// the main css file
import '@/styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { StoreProvider } from 'utils/Store';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
      {Component.auth ? (
              <Auth adminOnly={Component.auth.adminOnly}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=لطفا وارد شوید');
    },
  });
  if (status === 'loading') {
    return <div>در حال بارگذاری...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=باید بصورت ادمین وارد شوید');
  }

  return children;
}
export default MyApp;
