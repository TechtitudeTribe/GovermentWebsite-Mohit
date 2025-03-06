import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Spinner } from "@chakra-ui/react";

export default function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user, setUser } = useContext(AuthContext);
  const [timer, setTimer] = useState(3);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  if (timer <= 0) {
    navigate("/dashboard");
  }
  useEffect(() => {
    let interval;
    if (user) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [user]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null)
    const email = event.target[0].value;
    const password = event.target[1].value;
    if (!email || !password) {
      alert("Please provide valid email and password");
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        localStorage.setItem("auth", JSON.stringify(response.data));
        setUser(response.data);
        navigate("/dashboard");
      } else {
        if (user) setUser(null);
        setMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      if (user) setUser(null);
      setMessage(error.response?.data.message||error.message);
    }finally{

      setLoading(false);
    }
    
  };
  return (
    <div>
      {user ? (
        <div className="text-center">
          <h3 className="text-3xl my-4">You are already logged</h3>
          <p className="text-xl">Redirecting to dashboard in {timer}s</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-10 p-4"
        >
          <input
            className="p-1 placeholder:text-black border-2 border-black rounded-2xl pl-4 text-xl"
            type="email"
            placeholder="Enter E-mail ID"
            required
          />
          <input
            className="p-1 placeholder:text-black border-2 border-black rounded-2xl pl-4 text-xl"
            type="password"
            placeholder="Enter Password"
            required
          />
          {message && <p className="text-xl text-red-500">{message}</p>}
          {isLoading ? (
            <Spinner
              thickness="4px"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <button
              className="p-2 px-6  bg-primary text-white text-2xl rounded-xl"
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      )}
    </div>
  );
}
