import React, { useEffect, useState } from "react";
import styled from "styled-components";

// utilities
import { timeformater } from "../../utils/timeFormatter";

const StyledDiv = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  color: #eee;
  display: flex;
  font-size: 12px;
  height: 20px;
  justify-content: space-between;
  padding: 0 5px;
  width: 100%;
`;

const Header = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <StyledDiv>
      <div>
        {timeformater(time.getHours())}:{timeformater(time.getMinutes())}
      </div>
      <div></div>
      <div className="battery-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledDiv>
  );
};

export default Header;
