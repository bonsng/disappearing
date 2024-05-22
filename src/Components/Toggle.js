import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem;
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer onClick={toggleTheme}>
            {theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
        </ToggleContainer>
    );
};

export default Toggle;
