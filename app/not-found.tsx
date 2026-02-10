import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function NotFound() {
    return (
        <>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

               

                .notFoundContainer {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #FFF9EE;
                    position: fixed;
                    top: 0;
                    left: 0;
                    overflow: hidden;
                }

                .centeredContainer {
                    width: 100%;
                    height: 100%;
                    max-width: 90vw;
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    text-align: center;
                    overflow: visible;
                    position: relative;
                    padding: 1rem;
                }

                .numberContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    flex-shrink: 0;
                }

                .errorNumber {
                    font-weight: 700;
                    font-size: 140px;
                    color: #6C3E1A;
                    font-family: var(--font-montserrat), sans-serif;
                    line-height: 1;
                    letter-spacing: -2px;
                    text-shadow: 2px 2px 4px rgba(108, 62, 26, 0.1);
                }

                .decorativeLine {
                    width: clamp(60px, 20vw, 120px);
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #EDD5A9, transparent);
                    margin: 0 auto;
                }

                .contentCard {
                    background-color: white;
                    border-radius: 12px;
                    border: 1px solid #F8DEAE;
                    padding: clamp(1rem, 4vw, 2rem);
                    display: flex;
                    flex-direction: column;
                    gap: clamp(0.75rem, 2vw, 1.25rem);
                    width: 100%;
                    max-width: min(600px, 90vw);
                    flex-shrink: 0;
                    box-shadow: 0 8px 24px rgba(108, 62, 26, 0.08);
                }

                .heading {
                    font-weight: 700;
                    font-size: clamp(20px, 5vw, 36px);
                    color: #6C3E1A;
                    font-family: var(--font-montserrat), sans-serif;
                    line-height: 1.2;
                }

                .description {
                    font-weight: 400;
                    font-size: clamp(13px, 3vw, 16px);
                    color: #333;
                    font-family: var(--font-open-sans), sans-serif;
                    line-height: 1.6;
                    max-width: 90%;
                    margin: 0 auto;
                }

                .buttonsContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: clamp(0.75rem, 2vw, 1rem);
                    width: 100%;
                    max-width: min(600px, 90vw);
                    flex-shrink: 0;
                }

                .linkWrapper {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    text-decoration: none;
                    border: none;
                    outline: none;
                }

                .linkWrapper:focus,
                .linkWrapper:active,
                .linkWrapper:visited {
                    text-decoration: none;
                    border: none;
                    outline: none;
                }

                .primaryButton, .secondaryButton {
                    cursor: pointer;
                    width: 100%;
                    max-width: min(280px, 80vw);
                    height: clamp(44px, 10vh, 52px);
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0 1.5rem;
                    font-family: var(--font-open-sans), sans-serif;
                    font-weight: 700;
                    font-size: clamp(13px, 3vw, 15px);
                    transition: all 0.3s ease;
                    border: none;
                    position: relative;
                    overflow: hidden;
                }

                .primaryButton {
                    background: linear-gradient(135deg, #6C3E1A, #8B5A2B);
                    color: white;
                    box-shadow: 0 4px 12px rgba(108, 62, 26, 0.2);
                }

                .primaryButton:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(108, 62, 26, 0.3);
                    background: linear-gradient(135deg, #8B5A2B, #6C3E1A);
                }

                .primaryButton:active {
                    transform: translateY(0);
                }

                .secondaryButton {
                    background: transparent;
                    color: #6C3E1A;
                    border: 2px solid #6C3E1A;
                }

                .secondaryButton:hover {
                    background: rgba(108, 62, 26, 0.08);
                    transform: translateY(-2px);
                }

                .buttonIcon {
                    width: clamp(18px, 4vw, 22px);
                    height: clamp(18px, 4vw, 22px);
                    transition: transform 0.3s ease;
                }

                .primaryButton:hover .buttonIcon {
                    transform: translateX(4px) translateY(-4px);
                }

                .buttonText,
                .secondaryButtonText {
                    text-decoration: none;
                    border: none;
                    outline: none;
                    margin: 0;
                    padding: 0;
                }

                .buttonText:focus,
                .buttonText:active,
                .buttonText:visited,
                .secondaryButtonText:focus,
                .secondaryButtonText:active,
                .secondaryButtonText:visited {
                    text-decoration: none;
                    border: none;
                    outline: none;
                }

                .decorativeContainer {
                    position: absolute;
                    bottom: clamp(1rem, 5vh, 2rem);
                    flex-shrink: 0;
                    z-index: -1;
                }

                .decorativeCircle {
                    width: clamp(120px, 25vw, 200px);
                    height: clamp(120px, 25vw, 200px); 
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center; 
                }

                .decorativeInnerCircle {
                    width: clamp(100px, 20vw, 160px);
                    height: clamp(100px, 20vw, 160px);
                    border-radius: 50%;
                    opacity: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                /* Background decorative elements */
                .bgElement {
                    position: absolute;
                    border-radius: 50%;
                    z-index: -1;
                }

                .bgElement1 {
                    width: clamp(100px, 30vw, 200px);
                    height: clamp(100px, 30vw, 200px);
                    background: radial-gradient(circle, rgba(237, 213, 169, 0.1), transparent 70%);
                    top: 5%;
                    left: 5%;
    @media (max-width: 768px) {
        display: none;
    }
                }

                .bgElement2 {
                    width: clamp(80px, 25vw, 150px);
                    height: clamp(80px, 25vw, 150px);
                    background: radial-gradient(circle, rgba(108, 62, 26, 0.05), transparent 70%);
                    bottom: 10%;
                    right: 8%;
    @media (max-width: 768px) {
        display: none;
    }
                }

          

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.15;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.2;
                    }
                }

                /* Responsive adjustments */
                @media (min-width: 640px) {
                    .centeredContainer {
                        gap: clamp(2rem, 5vh, 3rem);
                        padding: 2rem;
                    }

                    .buttonsContainer {
                        flex-direction: row;
                        gap: clamp(1rem, 3vw, 1.5rem);
                    }

                    .linkWrapper {
                        width: auto;
                    }

                    .primaryButton, .secondaryButton {
                        width: auto;
                        min-width: clamp(180px, 25vw, 220px);
                    }

                    .decorativeContainer {
                        position: relative;
                        bottom: auto; 
                    }

                    .decorativeCircle {
                        width: clamp(140px, 28vw, 220px);
                        height: clamp(140px, 28vw, 220px);
                    }

                    .decorativeInnerCircle {
                        width: clamp(120px, 23vw, 180px);
                        height: clamp(120px, 23vw, 180px);
                    }
                }

                @media (min-width: 1024px) {
                    .centeredContainer {
                        max-width: 85vw;
                        max-height: 85vh;
                    }

                    .contentCard {
                        padding: clamp(1.5rem, 4vw, 3rem);
                    }

                    .description {
                        max-width: 80%;
                    }

                    .decorativeCircle {
                        width: clamp(160px, 30vw, 160px);
                        height: clamp(160px, 30vw, 160px);
                    }

                    .decorativeInnerCircle {
                        width: clamp(140px, 25vw, 220px);
                        height: clamp(140px, 25vw, 220px);
                    }
                }

                @media (orientation: landscape) and (max-height: 600px) {
                    .centeredContainer {
                        flex-direction: row;
                        gap: clamp(2rem, 5vw, 3rem);
                    }

                    .numberContainer {
                        flex: 1;
                    }

                    .contentSection {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;
                    }

                    .contentCard {
                        width: 100%;
                    }

                    .buttonsContainer {
                        flex-direction: row;
                        width: 100%;
                    }

                    .decorativeContainer {
                        display: none;
                    }
                }

                /* Touch device optimizations */
                @media (hover: none) and (pointer: coarse) {
                    .primaryButton, .secondaryButton {
                        min-height: 48px;
                    }

                    .primaryButton:active, .secondaryButton:active {
                        transform: scale(0.98);
                    }
                }
                    .decorativeInnerCircleImg {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        display: block;
                    }

                /* Reduced motion preference */
                @media (prefers-reduced-motion: reduce) {
                    .decorativeCircle,
                    .decorativeInnerCircle,
                    .primaryButton,
                    .secondaryButton {
                        animation: none;
                        transition: none;
                    }

                    .primaryButton:hover,
                    .secondaryButton:hover {
                        transform: none;
                    }
                }

                /* Dark mode support */
                @media (prefers-color-scheme: dark) {
                    .notFoundContainer {
                        background-color: #1A1206;
                    }

                    .contentCard {
                        background-color: #2A1E0E;
                        border-color: #4A3519;
                    }

                    .errorNumber, .heading {
                        color: #EDD5A9;
                    }

                    .description {
                        color: #D4C5A8;
                    }

                    .primaryButton {
                        background: linear-gradient(135deg, #8B5A2B, #6C3E1A);
                    }

                    .secondaryButton {
                        color: #EDD5A9;
                        border-color: #8B5A2B;
                    }

                    .secondaryButton:hover {
                        background: rgba(139, 90, 43, 0.2);
                    }
                }

                .decorativeInnerCircleImg {
                    display: block;
                    animation: rotateAnim 10s linear infinite;
                }

                @keyframes rotateAnim {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @media (max-width: 1023px) {
                .decorativeContainer {
                    display: none;
                }
                }
            `}</style>
            
            <div className="notFoundContainer">
                {/* Background decorative elements */}
                <div className="bgElement bgElement1"></div>
                <div className="bgElement bgElement2"></div>
                
                {/* Centered Container */}
                <div className="centeredContainer">
                    {/* 404 Number */}
                    <div className="numberContainer">
                        <h1 className="errorNumber">
                            404
                        </h1>
                        
                        {/* Decorative Line */}
                        <div className="decorativeLine"></div>
                    </div>

                    {/* Content Card */}
                    <div className="contentCard">
                        <h2 className="heading">
                            Page Not Found
                        </h2>
                        <p className="description">
                            The page you're looking for doesn't exist or has been moved. Let's guide you back to our authentic Rudraksha collection.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="buttonsContainer">
                        <Link href="/" className="linkWrapper" >
                            <button className="primaryButton">
                                <p className="buttonText">Return to Home</p>
                                <MdOutlineArrowOutward className="buttonIcon" />
                            </button>
                        </Link>
                        
                        <Link href="/products" className="linkWrapper">
                            <button className="secondaryButton">
                                <p className="secondaryButtonText">Explore Products</p>
                            </button>
                        </Link>
                    </div>

                    {/* Decorative Element */}
                    <div className="decorativeContainer">
                        <div className="decorativeCircle">
                            <div className="decorativeInnerCircle">
                                <img src="/images/404/404-img.png" alt="404" className="decorativeInnerCircleImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}