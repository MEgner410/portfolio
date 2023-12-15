import React from "react";
import { AppContainer, Heading, Paragraph } from './styles/StyledComponent.js.';


function AppWithStyledComponents() { 
  return (
    <AppContainer>
      <Heading>Michael Portfolio</Heading>
      <Paragraph>Welcome to my Portfolio! This is the start of something great...</Paragraph>
    </AppContainer>
  )
}

function AppWithoutStyledComponents() {
  return (
  <div className="App">
    <h1>Michael's Portfolio</h1>
  <p>Welcome to my Portfolio! This is the start of something great...</p>
</div>

);

}

export default AppWithStyledComponents;