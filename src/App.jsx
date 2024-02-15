// App.jsx
import React from 'react';
import FaqItem from './FaqItem'; // Stellen Sie sicher, dass der Pfad korrekt ist

const faqs = [
  {
    frage: 'Beschreiben Sie den Unterschied zwischen TCP und UDP.',
    antwort: `• TCP ist verbindungsorientiert, während UDP verbindungslos ist.\n• TCP stellt sicher, dass alle Pakete in der richtigen Reihenfolge ankommen, während UDP dies nicht überprüft.\n• TCP bietet eine zuverlässige Datenübertragung mit Fehlererkennung und -korrektur, während UDP keine solche Mechanismen hat und daher schneller, aber weniger zuverlässig ist.`,
  },
  // Fügen Sie hier weitere FAQs hinzu
];

const App = () => {
  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <FaqItem key={index} frage={faq.frage} antwort={faq.antwort} />
      ))}
    </div>
  );
};

export default App;
