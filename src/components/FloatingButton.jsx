import { Link } from "react-scroll";

const FloatingButton = () => {
  return (
    <Link
      to="corrida"
      smooth={true}
      duration={500}
      className="fixed bottom-6 right-6 bg-purple-700 text-white px-5 py-3 rounded-full shadow-xl hover:bg-purple-800 transition z-50 cursor-pointer text-sm font-bold"
    >
      📝 Inscreva-se Agora
    </Link>
  );
};

export default FloatingButton;
