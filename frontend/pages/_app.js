import '../scss/main.scss'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)
