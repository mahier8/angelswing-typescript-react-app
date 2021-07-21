import React, {FC} from 'react'
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiGolfFlag } from "react-icons/gi";

const InfoParagraph = styled.p`
  width: 85px;
  height: 22px;
  margin-top: 10px;
  margin-left: 17px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #4d4c4c;
`;

const InfoDivLat = styled.div`
  padding: 5px;
  margin-top: 10px;
`;

const InfoLabelLat = styled.label`
  width: 21px;
  height: 19px;
  left: 83px;
  top: 62px;
  margin-left: 20px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  color: #4d4c4c;
`;

const InfoLabelLong = styled.label`
  width: 22px;
  height: 19px;
  left: 83px;
  top: 62px;
  margin-left: 22px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  /* identical to box height */

  color: #4d4c4c;
`;

const InfoInput = styled.input`
  width: 147px;
  height: 33px;
  left: 120px;
  top: 54px;

  border: 0.5px solid #c7c7c7;
  box-sizing: border-box;
  border-radius: 5px;

  margin-left: 20px;
`;

const HorizontalDivider = styled.hr`
  width: 306px;
  height: 0px;
  left: 60px;
  top: 278px;

  border: 1px solid #f4f4f4;
`;


const SideBarInfo: FC = () => {
    return (
        <IconContext.Provider value={{ color: "#59AC64"}}>
        <div>
        <InfoParagraph>
          <GiGolfFlag /> Location 1
        </InfoParagraph>
        <form>
          <InfoDivLat>
            <InfoLabelLat>Lat</InfoLabelLat>
            <InfoInput></InfoInput>
          </InfoDivLat>
          <div>
            <InfoLabelLong>Lon</InfoLabelLong>
            <InfoInput></InfoInput>
          </div>
        </form>
        <br />
        <HorizontalDivider />
        <InfoParagraph>
          <GiGolfFlag /> Location 2
        </InfoParagraph>
        <form>
          <InfoDivLat>
            <InfoLabelLat>Lat</InfoLabelLat>
            <InfoInput></InfoInput>
          </InfoDivLat>
          <div>
            <InfoLabelLong>Lon</InfoLabelLong>
            <InfoInput></InfoInput>
          </div>
        </form>
        <br />
        <HorizontalDivider />
        <InfoParagraph>
          <GiGolfFlag /> Location 3
        </InfoParagraph>
        <form>
          <InfoDivLat>
            <InfoLabelLat>Lat</InfoLabelLat>
            <InfoInput></InfoInput>
          </InfoDivLat>
          <div>
            <InfoLabelLong>Lon</InfoLabelLong>
            <InfoInput></InfoInput>
          </div>
        </form>
        <br />
        <HorizontalDivider />
      </div>
      </IconContext.Provider>
    )
}

export default SideBarInfo
