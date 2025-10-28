/*
 * Script principal pour le site portfolio IA.
 * Gère la messagerie interactive et quelques animations simples.
 */

document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chatWindow');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');

  /**
   * Ajoute un message dans la fenêtre de chat.
   * @param {string} content Le texte du message
   * @param {string} sender  'user' ou 'ai'
   */
  function appendMessage(content, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = content;
    chatWindow.appendChild(msg);
    // Faire défiler vers le bas pour voir le dernier message
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  /**
   * Génère une réponse simplifiée de l'IA en fonction du contenu du message.
   * @param {string} message
   * @returns {string} Réponse de l'IA
   */
  function getAIResponse(message) {
    const m = message.toLowerCase();
    if (m.includes('bonjour') || m.includes('salut') || m.includes('hello')) {
      return 'Bonjour ! Comment puis-je vous aider ?';
    }
    if (m.includes('projet') || m.includes('portfolio')) {
      return 'Vous pouvez découvrir mes projets dans la section portfolio ci ‑dessus.';
    }
    if (m.includes('contact')) {
      return 'Envoyez-moi un message via la section contact et je reviendrai vers vous !';
    }
    if (m.includes('qui') && m.includes('es')) {
      return "Je suis un assistant IA rudimentaire intégré à ce site pour des démonstrations.";
    }
    // réponses aléatoires génériques
    const responses = [
      'Intéressant !',
      'Pouvez-vous développer votre pensée ?',
      'Je suis une IA simplifiée, mais je fais de mon mieux pour vous répondre.',
      "Expliquez-moi votre question et j'essaierai de vous aider.",
      'Désolé, je n’ai pas compris. Pouvez-vous reformuler ?'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  /**
   * Traite l'envoi d'un message de l'utilisateur.
   */
  function handleSend() {
    const message = chatInput.value.trim();
    if (message !== '') {
      appendMessage(message, 'user');
      chatInput.value = '';
      // Générer la réponse de l'IA après un léger délai pour plus de réalisme
      setTimeout(() => {
        const reply = getAIResponse(message);
        appendMessage(reply, 'ai');
      }, 600);
    }
  }

  // Événement clic sur le bouton envoyer
  sendBtn.addEventListener('click', handleSend);

  // Événement entrée dans le champ de texte
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  });

  // Bouton Explore pour faire défiler jusqu'au portfolio
  const exploreBtn = document.getElementById('explore');
  exploreBtn.addEventListener('click', () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
