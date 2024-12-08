import { StrictMode, useState, MouseEvent } from 'react';
// import { BuyNow } from './BuyNow';
import './Styles/Knowledge.css';
import { Canvas } from '@react-three/fiber';
import { KnowledgeBackground } from './WebGLComponents/KnowledgeCanvas/KnowledgeBackground';

// Définition des types pour les props
interface KnowledgeProps {
  onFocusPageNumber: number;
}

// Composant Knowledge avec typage
export const Knowledge: React.FC<KnowledgeProps> = (props) => {
  const [showBuy, setShowBuy] = useState<boolean>(false);

  // Gestionnaires d'événements
  const handleMouseEnter = (event: MouseEvent) => {
    // Code pour gérer l'entrée de la souris
  };

  const handleMouseLeave = (event: MouseEvent) => {
    // Code pour gérer la sortie de la souris
  };

  const handleMouseDown = (event: MouseEvent) => {
    // Code pour gérer le clic souris
  };

  const handleMouseUp = (event: MouseEvent) => {
    // Code pour gérer le relâchement du clic souris
  };

  const handleBuyClick = () => {
    console.log("Want to buy?");
    setShowBuy(true);
  };

  const handleBackButton = () => {
    setShowBuy(false);
  };

  return (
    <>
      <StrictMode>
        <Canvas
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="canvas"
          style={{ width: '100%', height: '100%' }}
          gl={{
            powerPreference: 'high-performance',
            antialias: true,
          }}
          dpr={[0.5, 1.0]}
          performance={{ min: 0.2 }}
        >
          <KnowledgeBackground />
        </Canvas>
      </StrictMode>

      {/* Section commentée avec logique additionnelle */}
      {/*
      <div className="knowledge">
        <div className={`firstPanel ${showBuy ? 'hover' : ''}`}>
          <div className="container">
            <div className="box">
              <div className="buttonKnowledge" onClick={handleBuyClick}>
                Buy now
              </div>
            </div>
            <div className="box">
              <div className="buttonKnowledge" onClick={handleBuyClick}>
                Buy now
              </div>
            </div>
          </div>
          <div className="allHover">
            <div className="buttonKnowledge" onClick={handleBuyClick}>
              Buy now
            </div>
          </div>
          {props.onFocusPageNumber > 0 && <KnowledgeCanvas />}
        </div>
        <BuyNow visibility={showBuy} back={handleBackButton} />
      </div>
      */}
    </>
  );
};
