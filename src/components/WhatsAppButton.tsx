import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse em conhecer mais sobre a GRUMINS e entender como podemos desenvolver uma parceria estratégica."
    );
    window.open(`https://wa.me/5531995376067?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] text-white rounded-full shadow-lg hover:bg-[hsl(142_70%_40%)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-card text-foreground text-sm px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
        Fale conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;
