import styled from 'styled-components';

export interface ButtonProps {
  text?: string;
}

const StyledButton = styled.div`
  color: #08109c;
`;

export function Button({ text }: ButtonProps) {
  return (
    <StyledButton>
      <h1>{text ? text : 'Welcome to Button!'}</h1>
    </StyledButton>
  );
}

export default Button;
