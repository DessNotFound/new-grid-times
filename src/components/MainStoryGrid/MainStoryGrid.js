import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <LineWrapper>
              <SecondaryStory key={story.id} {...story} />
            </LineWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpnionLineWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpnionLineWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    display: grid;
    gap: 48px 0;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 6fr 4fr 3fr;
    gap: 16px 0;
    grid-template-areas:
      "main-story secondary-stories opinion-stories "
      "main-story advertisement advertisement";
  }
`;

const LineWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const OpnionLineWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);

    @media (${QUERIES.tabletOnly}) {
      padding-bottom: revert;
      margin-bottom: revert;
      border-bottom: revert;
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media (${QUERIES.tabletAndUp}) {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media (${QUERIES.tabletAndUp}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media (${QUERIES.laptopAndUp}) {
    margin-top: -8px;
    padding-left: 16px;
    margin-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media (${QUERIES.laptopAndUp}) {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
