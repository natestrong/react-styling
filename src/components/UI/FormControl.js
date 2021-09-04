import styled from 'styled-components';

export const FormControl = styled.div`
  margin: 0.5rem 0;
    
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background: ${props => props.invalid ? '#ffc3c3' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: ${props => props.invalid ? '#ffc3c3' : '#fad0ec'};
    border-color: ${props => props.invalid ? 'red' : '#8b005d'};
  }
`;
