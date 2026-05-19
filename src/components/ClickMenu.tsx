import { useState, useEffect, useRef } from "react";
import { Code, Github, Linkedin, Mail, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClickMenu = () => {
  const { toast } = useToast();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && menuRef.current.contains(e.target as Node)) {
        return;
      }
      setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    {
      icon: <Code className="w-5 h-5 mr-3" />,
      label: "Source Code",
      action: () => window.open("https://github.com/sohamchavan07/portfolio", "_blank"),
    },
    {
      icon: <Github className="w-5 h-5 mr-3" />,
      label: "GitHub Profile",
      action: () => window.open("https://github.com/sohamchavan07", "_blank"),
    },
    {
      icon: <Linkedin className="w-5 h-5 mr-3" />,
      label: "LinkedIn Profile",
      action: () => window.open("https://www.linkedin.com/in/sohamchavan07/", "_blank"),
    },
    {
      icon: <Mail className="w-5 h-5 mr-3" />,
      label: "Copy E-Mail",
      action: () => {
        navigator.clipboard.writeText("sohamchavan.sc07@gmail.com");
        toast({
          title: "Copied!",
          description: "Email address copied to clipboard.",
        });
      },
    },
    {
      icon: <Share className="w-5 h-5 mr-3" />,
      label: "Share",
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Copied!",
          description: "Portfolio link copied to clipboard.",
        });
      },
    },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed z-[100] bg-zinc-200/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl p-2 w-[220px] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      style={{
        left: Math.min(position.x, window.innerWidth - 240),
        top: Math.min(position.y, window.innerHeight - 300),
      }}
    >
      <div className="flex flex-col gap-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.action();
              setIsOpen(false);
            }}
            className="flex items-center w-full px-3 py-2.5 text-sm font-bold text-black dark:text-white bg-white dark:bg-zinc-900 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors shadow-sm"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClickMenu;
