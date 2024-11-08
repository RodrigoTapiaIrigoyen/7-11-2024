import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGamepad, 
  FaTrophy, 
  FaWallet, 
  FaQuestionCircle, 
  FaChevronDown, 
  FaChevronUp,
  FaPaypal,
  FaCreditCard,
  FaBitcoin
} from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const HowToPlay = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-gradient">How to Play</h1>
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      {/* Getting Started */}
      <Section
        title="Getting Started"
        icon={<FaGamepad />}
        content={[
          {
            title: "Create Your Account",
            steps: [
              "Sign up with your email",
              "Verify your account",
              "Add funds to start playing"
            ]
          },
          {
            title: "Choose Your Game Mode",
            steps: [
              "1v1 Matches - Direct competition against another player",
              "Tournaments - Compete in organized brackets",
              "Practice Mode - Warm up without betting (coming soon)"
            ]
          }
        ]}
      />

      {/* How to Challenge Players */}
      <Section
        title="How to Challenge Players"
        icon={<FaGamepad />}
        content={[
          {
            title: "1v1 Matches",
            steps: [
              "Select your game from the available options",
              "Choose your bet amount",
              "Find opponents in the matchmaking lobby",
              "Send or accept challenge requests",
              "Winner takes the prize pool minus platform fee"
            ]
          },
          {
            title: "Match Rules",
            steps: [
              "Both players must accept the match and bet amount",
              "Game settings must follow standard competitive rules",
              "Results are automatically verified through our system",
              "Disputes are handled by our 24/7 support team"
            ]
          }
        ]}
      />

      {/* Tournament System */}
      <Section
        title="Tournament System"
        icon={<FaTrophy />}
        content={[
          {
            title: "Tournament Types",
            steps: [
              "Daily Tournaments - Quick brackets with smaller prizes",
              "Weekly Championships - Larger tournaments with bigger prizes",
              "Special Events - Themed tournaments with unique rewards"
            ]
          },
          {
            title: "Prize Distribution",
            steps: [
              "1st Place: 50% of prize pool",
              "2nd Place: 30% of prize pool",
              "3rd Place: 15% of prize pool",
              "4th Place: 5% of prize pool"
            ]
          }
        ]}
      />

      {/* Payment Methods */}
      <Section
        title="Deposits and Withdrawals"
        icon={<FaWallet />}
        content={[
          {
            title: "Deposit Methods",
            steps: [
              "Credit/Debit Cards - Instant processing",
              "PayPal - Fast and secure",
              "Cryptocurrency - Bitcoin, Ethereum, and more",
              "Minimum deposit: $5"
            ]
          },
          {
            title: "Withdrawal Options",
            steps: [
              "Bank Transfer - 2-3 business days",
              "PayPal - Within 24 hours",
              "Cryptocurrency - Usually within 1 hour",
              "Minimum withdrawal: $10"
            ]
          }
        ]}
      />

      {/* FAQ Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
          <FaQuestionCircle />
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <FAQItem
            question="How are matches verified?"
            answer="Our system automatically verifies match results through game APIs and screenshot verification. In case of disputes, our support team reviews game footage and chat logs."
          />
          
          <FAQItem
            question="What happens if I lose connection during a match?"
            answer="If you disconnect during a match, you have 5 minutes to reconnect. If you can't reconnect, the match may be forfeit. In case of server issues, the match will be cancelled and bets refunded."
          />
          
          <FAQItem
            question="How long do withdrawals take to process?"
            answer="Withdrawal processing times vary by method: PayPal (24 hours), Bank Transfer (2-3 business days), Cryptocurrency (1 hour). All withdrawals are subject to security verification."
          />
          
          <FAQItem
            question="What is your fee structure?"
            answer="We charge a 5% platform fee on match winnings and tournament prizes. Deposit fees vary by payment method. Withdrawal fees are covered by the platform for most methods."
          />
          
          <FAQItem
            question="How do you prevent cheating?"
            answer="We use a combination of automated detection systems, player reports, and manual review by our anti-cheat team. Confirmed cheaters are permanently banned and forfeit their balance."
          />
        </div>
      </div>

      {/* Support Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gradient mb-4">Need More Help?</h2>
        <p className="text-gray-300 mb-4">
          Our support team is available 24/7 to assist you with any questions or concerns.
        </p>
        <div className="flex space-x-4">
          <Button>Contact Support</Button>
          <Button variant="secondary">View Full Rules</Button>
        </div>
      </Card>
    </div>
  );
};

const Section = ({ title, icon, content }) => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-gradient flex items-center gap-2 mb-6">
        {icon}
        {title}
      </h2>
      <div className="space-y-6">
        {content.map((item, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <ul className="space-y-2">
              {item.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-center space-x-2 text-gray-300">
                  <div className="h-2 w-2 bg-game-accent rounded-full"></div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-200">
      <button
        className="w-full p-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-game-accent" />
        ) : (
          <FaChevronDown className="text-game-accent" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-300">
          {answer}
        </div>
      )}
    </Card>
  );
};

export default HowToPlay;