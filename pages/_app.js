import {SessionProvider, useSession} from 'next-auth/react';
import '../styles/globals.css';
import {StoreProvider} from '../utils/Store';
import {useRouter} from 'next/router';
import store from '../store';
import {Provider} from 'react-redux';

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  // console.log(Component.auth);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
function Auth({children, adminOnly}) {
  const router = useRouter();

  const {status, data: session} = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }
  return children;
}

export default MyApp;
