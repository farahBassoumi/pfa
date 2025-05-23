import React, { useState } from "react";
import ArrowRight from "../assets/icons/ArrowRight.svg";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (formData.password.length < 4) {
      setError("Le mot de passe doit contenir au moins 4 caractères.");
      return;
    }
    if (formData.username.length < 4) {
      setError("Le nom d'utilisateur doit contenir au moins 4 caractères.");
      return;
    }

    setTimeout(() => {
      setSuccess("Inscription réussie !");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="  text-(--color-gray) cursor-pointer px-4  py-2  max-h-[40px]  max-w-[300px] w-full flex items-center justify-center bg-(--color-beige) text-[#242424] rounded-full"
      >
        <div>Inscription</div>
        <div>
          <div className="flex items-center justify-center size-[20px] mt-[5px] ">
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-(--color-beige) rounded-[40px]  py-10 px-20 w-[90%] max-w-[500px] shadow-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-center text-(--color-gray) text-[28px] font-bold mb-6">
              Devenir un éducateur
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="text-(--color-gray)">
                <label className="block  text-sm mb-1">Nom d'utilisateur</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-[40px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main)"
                  required
                />
              </div>

              <div className="text-(--color-gray)">
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-[40px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main)"
                  required
                />
              </div>

              <div className="text-(--color-gray)">
                <label className="block mb-1 text-sm">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-[40px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main)"
                  required
                />
              </div>

              <div className="text-(--color-gray)">
                <label className="block  mb-1 text-sm">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-[40px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--color-main)"
                  required
                />
              </div>

              {error && <p className="text-red-300 text-center ">{error}</p>}
              {success && (
                <p className="text-(--color-hover-main) text-center font-medium">
                  {success}
                </p>
              )}

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="text-(--color-beige) cursor-pointer px-6 py-2 max-h-[40px] h-full max-w-[150px] w-full flex items-center justify-center  bg-(--color-main) hover:bg-(--color-hover-main) rounded-full text-[16px]"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpPopup;
