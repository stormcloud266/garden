import type { NextPage } from "next";
import Title from "@components/title";
import Section from "@components/section";
import Wrapper from "@components/wrapper";

const Home: NextPage = () => {
  return (
    <Section>
      <Wrapper small>
        <Title tag="h1">Hey baby</Title>
      </Wrapper>
    </Section>
  );
};

export default Home;
