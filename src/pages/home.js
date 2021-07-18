import React from "react";
import { Header, Accordion, Section, Picture} from "../components";
import * as ROUTES from "../constants/routes";
import faqsData from "../fixtures/faq.json"
import accordion2 from "../fixtures/accordion2.json"
import { Theme2, DefaultTheme } from "../themes";

export default function Home() {
  return (
    <>
    <Section>
      <Header src="4">
        <Header.Frame>
          <Header.TextLink to={ROUTES.HOME} alt="Igor Voitenko">Igor Voitenko</Header.TextLink>
        </Header.Frame>

        <Header.Feature>
       
          <Header.FeatureCallOut>
            FREE YouTube Workout Program by Igor Voitenko
          </Header.FeatureCallOut>
          <Header.Text>
            The Proven Home Workout Programs To Get Shredded Physique, and Gain
            perfect Muscle Proportion.
          </Header.Text>
        <Header.ButtonLink href="#begin">BEGIN</Header.ButtonLink>
      
        </Header.Feature>

      </Header>
      </Section>
      <Section id="begin">
      <Header theme={Theme2} src="6">
        <Header.Feature>
          <Header.FeatureCallOut>
            Transform your Body at home
          </Header.FeatureCallOut>
          <Header.Text>
            The world around us is changing, so it's the best time to change
            yourself. Use this time to become the best version of yourself. With
            intensive home workout programs in just few months you will carve
            out a Greek sculpture from your body: elite, dried muscles, shredded
            abs, round shoulders and square chest. Become the Man, you always
            wanted to be.
          </Header.Text>
          <Header.Text>
            In the process of passing the programs, you will gain access to new
            workouts, so it will be fun, hard and very rewarding at the same
            time! Your first day begins now! Take a picture "BEFORE" and I'll
            see you at work!
          </Header.Text>
          <Header.Picture src="phonebefore" />
        </Header.Feature>
      </Header>
      </Section>
      <Accordion theme={DefaultTheme}>
        <Accordion.Title>Let's get the FAQ going!</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item color={"white"} key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      </Accordion>
    </>
  );
}
