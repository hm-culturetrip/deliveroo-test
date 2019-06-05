import styled from "styled-components";

import { colors, fonts } from "../../base/constants";

export const Body = styled.span`
  font-family: ${ fonts.plex };
  font-size: 16px;
`;

export const BodySemi = styled.span`
  color: ${ colors.blackSemiTransparent };
`;

export const BodyLink = styled(Body)`
  color: ${ colors.primaryDark };
`;

export const BodyBold = styled(Body)`
  color: ${ colors.secondary };
  font-family: ${ fonts.plexBold };
`;

export const Heading = styled.span`
  font-family: ${ fonts.stratos };
  font-size: 34px;
  color: ${ colors.white };
`;

export const HeadingSmall = styled(Heading)`
  font-size: 22px;
  color: ${ colors.black };
`;

export const Mini = styled.span`
  font-family: ${ fonts.plex };
  font-size: 14px;
`;

export const MiniSecondary = styled(Mini)`
  color: ${ colors.secondary };
`;