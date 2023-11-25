import './App.css';
import { Container, Title, MantineProvider } from '@mantine/core';
import AppHeader from './components/AppHeader';
import VideoBox from './components/VideoBox';

function App() {
  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: 'Open Sans, sans-serif',
          headings: { fontFamily: 'Open Sans, sans-serif' },
        }}
        withGlobalStyles
      >
        <Container size='md' px='md'>
          <AppHeader />
<script type="text/javascript">
	atOptions = {
		'key' : 'b4ef067457404016b24f0d768e328a82',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//identicaldrench.com/b4ef067457404016b24f0d768e328a82/invoke.js"></scr' + 'ipt>');
</script>
         

          <VideoBox />
        </Container>
      </MantineProvider>
    </>
  );
}

export default App;
