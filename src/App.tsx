import React from 'react';
import GlobalStyles from './styles/global'
import { Container, Row, Column } from './styles/grid/'

function App() {
  return (
    <>
      <Container>
        <Column desktop={4} tablet={6} >
          <ul>
            <li>Desktop: 4</li>
            <li>Tablet: 6</li>
            <li>Mobile: 12</li>
          </ul>
        </Column>
        <Column desktop={4} tablet={6}>
          <ul>
            <li>Desktop: 4</li>
            <li>Tablet: 6</li>
            <li>Mobile: 12</li>
          </ul>
        </Column>
        <Column desktop={4} >
          <ul>
            <li>Desktop: 4</li>
            <li>Tablet: 12</li>
            <li>Mobile: 12</li>
          </ul>
        </Column>
        <Column desktop={10} tablet={12}>
          <Row>
            <Column desktop={6} tablet={6}>
              <ul>
                <li>Desktop: 6</li>
                <li>Tablet: 12</li>
                <li>Mobile: 12</li>
              </ul>
            </Column>
            <Column desktop={6} tablet={6}>
              <ul>
                <li>Desktop: 6</li>
                <li>Tablet: 12</li>
                <li>Mobile: 12</li>
              </ul>
            </Column>
          </Row>
        </Column>
        <Column desktop={2} tablet={6} mobile={4}>
          <ul>
            <li>Desktop: 2</li>
            <li>Tablet: 6</li>
            <li>Mobile: 4</li>
          </ul>
        </Column>
        <Column desktop={12} tablet={6} mobile={8}>
          <ul>
            <li>Desktop: 12</li>
            <li>Tablet: 6</li>
            <li>Mobile: 8</li>
          </ul>
        </Column>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
