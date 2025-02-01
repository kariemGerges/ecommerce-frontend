import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const moveRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(100vw); }
`;

const DoodlesContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    background: #f0f4ff;
    overflow: hidden;
`;

const Doodle = styled.svg`
    position: absolute;
    animation: ${float} 4s ease-in-out infinite;
    opacity: 0.3;
`;

const MovingLine = styled.div`
    position: absolute;
    height: 2px;
    background: rgba(100, 100, 255, 0.2);
    animation: ${moveRight} 20s linear infinite;
`;

const BoxDoodle = () => (
    <Doodle width="60" height="60" viewBox="0 0 60 60">
        <path
            d="M10 10L50 10L50 50L10 50Z"
            fill="none"
            stroke="#4a90e2"
            strokeWidth="2"
        />
        <path
            d="M15 15L45 15L45 45L15 45Z"
            fill="none"
            stroke="#4a90e2"
            strokeWidth="2"
        />
    </Doodle>
);

const CartDoodle = () => (
    <Doodle width="60" height="60" viewBox="0 0 60 60">
        <path
            d="M20 45L45 45M15 30L40 30M10 15L35 15"
            stroke="#6c5ce7"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <circle cx="50" cy="45" r="5" fill="#6c5ce7" />
    </Doodle>
);

const ArrowDoodle = () => (
    <Doodle width="60" height="60" viewBox="0 0 60 60">
        <path
            d="M10 30H50M50 30L35 15M50 30L35 45"
            stroke="#00b894"
            strokeWidth="3"
            fill="none"
        />
    </Doodle>
);

const generateRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
});

const DoodlesBackground = () => {
    return (
        <DoodlesContainer>
            {[...Array(15)].map((_, i) => {
                const Component = [BoxDoodle, CartDoodle, ArrowDoodle][i % 3];
                return <Component key={i} style={generateRandomPosition()} />;
            })}
            {[...Array(5)].map((_, i) => (
                <MovingLine
                    key={`line-${i}`}
                    style={{
                        top: `${(i + 1) * 15}%`,
                        width: `${30 + i * 10}%`,
                        animationDelay: `${i * 2}s`,
                    }}
                />
            ))}
        </DoodlesContainer>
    );
};

export default DoodlesBackground;
