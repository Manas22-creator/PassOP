// Manager.jsx
import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";


import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getPasswords = async () => {
    let req = await fetch("https://passop-7qba.onrender.com/")
    let password = await req.json();
    setPasswordArray(password);

  }


  useEffect(() => {
    getPasswords()

  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const showPassword = () => {
    if (!passwordRef.current || !ref.current) return;

    // Get current image filename (works even if browser converts it to an absolute URL)
    const currentSrc = ref.current.src.split("/").pop();

    if (currentSrc === "eye.png") {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    }
  };


 const savePassword = async () => {
  if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
    // If editing an existing password (has an id)
    if (form.id) {
      await fetch("https://passop-7qba.onrender.com/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: form.id }),
      });
    }

    // Now save new/updated entry
    const newItem = { ...form, id: uuidv4() };
    const newPasswords = [...passwordArray, newItem];
    setPasswordArray(newPasswords);

    await fetch("https://passop-7qba.onrender.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    setform({ site: "", username: "", password: "" });
    toast.success("Password saved!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  } else {
    toast.error("Please fill all the fields correctly!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  }
};


  const deletePassword = async (id) => {
    const c = confirm("Are you sure you want to delete this password?");
    if (c) {
      const updated = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(updated);
      // localStorage.setItem("passwords", JSON.stringify(updated));
      let res = await fetch("https://passop-7qba.onrender.com/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
      toast.error("Password Deleted!", { position: "top-right", autoClose: 3000, theme: "dark" });
    }
  };

  const editPassword = (id) => {
    const toEdit = passwordArray.find((item) => item.id === id);
    setform(toEdit);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    passwordRef.current.focus();
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Single ToastContainer. Use string 'bounce' to avoid bundler export issues in some setups */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
      </div>

      <div className="p-3 md:mycontainer min-h-[88.2vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-blue-950"> &lt;</span>
          Pass<span className="text-blue-900">OP/&gt;</span>
        </h1>
        <p className="text-blue-700 text-lg text-center">Your Own Password Manager</p>

        <div className="text-black flex flex-col p-4 gap-5 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-blue-950 w-full p-4 py-1 max-w-3xl"
            type="text"
            name="site"
            id="site"
          />

          {/* Inputs stack on small screens, align side-by-side on md */}
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 justify-between max-w-3xl">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-blue-950 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />

            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-blue-950 w-full p-4 py-1"
                type="password"
                name="password"
                id="password"
              />
              <span className="absolute right-1 top-1 cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-blue-600 hover:bg-blue-400 border-2 border-blue-900 rounded-full px-6 py-2 gap-2"
          >
            <lord-icon src="https://cdn.lordicon.com/vjgknpfx.json" trigger="hover" stroke="bold" state="hover-swirl" />
            Save Password
          </button>
        </div>

        <div className="passwords mt-6">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>

          {passwordArray.length === 0 && <div>No password to show</div>}

          {/* TABLE for md+ screens */}
          {passwordArray.length !== 0 && (
            <>
              <div className="hidden md:block overflow-x-auto">
                <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="py-2">Site</th>
                      <th className="py-2">Username</th>
                      <th className="py-2">Password</th>
                      <th className="py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-blue-200">
                    {passwordArray.map((item) => (
                      <tr key={item.id} className="align-middle">
                        <td className="text-center py-2 border border-white">
                          <div className="flex items-center justify-center gap-2">
                            <a href={item.site} target="_blank" rel="noreferrer" className="truncate max-w-xs">
                              {item.site}
                            </a>
                            <button className="p-1" onClick={() => copyText(item.site)} aria-label="Copy site">
                              <img className="w-6 h-6" src="icons/copy-solid-full.svg" alt="copy icon" />
                            </button>
                          </div>
                        </td>

                        <td className="text-center py-2 border border-white">
                          <div className="flex items-center justify-center gap-2">
                            <span className="truncate max-w-xs">{item.username}</span>
                            <button className="p-1" onClick={() => copyText(item.username)} aria-label="Copy username">
                              <img className="w-6 h-6" src="icons/copy-solid-full.svg" alt="copy icon" />
                            </button>
                          </div>
                        </td>

                        <td className="text-center py-2 border border-white">
                          <div className="flex items-center justify-center gap-2">
                            <span className="truncate max-w-xs">{"*".repeat(item.password.length)}</span>
                            <button className="p-1" onClick={() => copyText(item.password)} aria-label="Copy password">
                              <img className="w-6 h-6" src="icons/copy-solid-full.svg" alt="copy icon" />
                            </button>
                          </div>
                        </td>

                        <td className="text-center py-2 border border-white">
                          <div className="flex items-center justify-center gap-2">
                            <button onClick={() => editPassword(item.id)} aria-label="Edit" className="p-1">
                              <lord-icon src="https://cdn.lordicon.com/exymduqj.json" trigger="hover" stroke="bold" state="hover-line" colors="primary:#121331,secondary:#104891" style={{ width: "25px", height: "25px" }} />
                            </button>
                            <button onClick={() => deletePassword(item.id)} aria-label="Delete" className="p-1">
                              <lord-icon src="https://cdn.lordicon.com/jzinekkv.json" trigger="morph" stroke="bold" state="morph-trash-in" colors="primary:#121331,secondary:#0a2e5c" style={{ width: "25px", height: "25px" }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CARD list for small screens (mobile / small tablets) */}
              <div className="md:hidden flex flex-col gap-4">
                {passwordArray.map((item) => (
                  <div key={item.id} className="bg-blue-100 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-700 font-semibold truncate">{item.site}</div>
                        <div className="text-sm text-gray-600 truncate">User: {item.username}</div>
                        <div className="text-sm text-gray-600 truncate">Pass: {item.password}</div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-1">
                          <button onClick={() => copyText(item.site)} aria-label="Copy site" className="p-1">
                            <img className="w-6 h-6" src="icons/copy-solid-full.svg" alt="copy" />
                          </button>
                          <button onClick={() => copyText(item.username)} aria-label="Copy username" className="p-1">
                            <img className="w-6 h-6" src="icons/copy-solid-full.svg" alt="copy" />
                          </button>
                          <button onClick={() => copyText(item.password)} aria-label="Copy password" className="p-1">
                            <img className="w-6 h-6" src="icons/copy-solid-full.svg" alt="copy" />
                          </button>
                        </div>

                        <div className="flex gap-2 mt-1">
                          <button onClick={() => editPassword(item.id)} aria-label="Edit" className="p-1">
                            <lord-icon src="https://cdn.lordicon.com/exymduqj.json" trigger="hover" stroke="bold" state="hover-line" colors="primary:#121331,secondary:#104891" style={{ width: "22px", height: "22px" }} />
                          </button>
                          <button onClick={() => deletePassword(item.id)} aria-label="Delete" className="p-1">
                            <lord-icon src="https://cdn.lordicon.com/jzinekkv.json" trigger="morph" stroke="bold" state="morph-trash-in" colors="primary:#121331,secondary:#0a2e5c" style={{ width: "22px", height: "22px" }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
