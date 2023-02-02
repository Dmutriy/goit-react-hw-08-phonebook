import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #0a0a0a;
  font-weight: 500;
  font-size: 20px;
  &.active {
    color: #0e0ead;
  }
`;