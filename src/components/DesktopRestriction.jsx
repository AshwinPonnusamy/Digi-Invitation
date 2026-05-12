import styled from "styled-components";

const DesktopRestriction = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 18V22M12 22H9M12 22H15M17 14V11M7 14V11M21 11C21 12.1046 20.1046 13 19 13H5C3.89543 13 3 12.1046 3 11V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V11ZM11 17L13 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13L8 16L12 17L16 16L15 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7.5L12 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 9L11 8M14 9L13 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="title">Mobile Only Experience</h1>
        <p className="message">
          This digital invitation is designed exclusively for mobile devices.
          Please open this link on your smartphone for the best experience.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-family: "Outfit", sans-serif;
  text-align: center;
  padding: 2rem;

  .content {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .icon {
    width: 80px;
    height: 80px;
    color: #ff4d4f;
    opacity: 0.8;
  }

  .title {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin: 0;
  }

  .message {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #aaa;
    font-weight: 300;
  }
`;

export default DesktopRestriction;
