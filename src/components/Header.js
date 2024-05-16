import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
// import lang from "../utils/languageConstants";
import { changeLangauge } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  // !----------its for LOGIN-------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
        dispatch(removeUser());
      }
    });
    // unSubscribing wher component is unmounting
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggling my GPt search page
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLangauge(e.target.value));
    // console.log(e.target.value);
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="HeaderMain flex-col md:flex-row w-screen flex justify-between  absolute px-8 py-2 bg-gradient-to-b from-black z-10 fixed top-0">
      <img className="mx-auto w-44 md:mx-0" src={LOGO} alt="NetflixLogo" />
      {user && (
        <div className="flex items-center justify-between space-x-4">
          {showGptSearch && (
            <select
              className="p-2 rounded-md m-2 bg-gray-900 border text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className={
              showGptSearch
                ? "py-2 px-3 m-2   bg-red-400 hover:bg-red-500 rounded-lg text-white font-semibold  sm:m-2 ml-[118px]"
                : "py-2 px-3 m-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold"
            }
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "🏠 Home" : "GPT Search"}
          </button>
          <section className="SignOutbtn flex gap-3">
            {!showGptSearch && (
              <button onClick={handleSignOut} className="font-bold p-0 m-0  text-white active:text-red-500 hover:text-gray-300">
                log out &nbsp;<i className="fa-solid fa-right-from-bracket fa-fade"></i>
              </button>
            )}
            {!showGptSearch && (
              <img
                className="w-12 h-12  border-2 p-0.5 bg-fuchsia-600"
                src={user?.photoURL}
              />
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default Header;
