import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
    text-align:center;
    p {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size: 2rem;
    }
    h2 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size: 5rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
        text-tranform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        p {
            font-size: 1.2rem;
        }
        h2 {
            font-size: 3.6rem;
        }
    }
    `;

function SectionTitle({
    subtitle = "this is Subtitle",
    title = "This is Title",
}) {
  return (
    <SectionTitleStyle>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </SectionTitleStyle>
  )
}

export default SectionTitle;