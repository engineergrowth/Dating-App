import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout, userId, profileId } = useAuth();

  const [hasProfile, setHasProfile] = useState(false);

  const fetchProfileData = async () => {
    try {
      const response = await fetch(`/api/profile/${profileId}`);
      if (response.ok) {
        const data = await response.json();
        setHasProfile(true);
      } else {
        alert("Profile not found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProfileData();
    }
  }, [userId, isLoggedIn]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 flex justify-between items-center p-2 text-white shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="logohearts.png"
            alt="Pucker Up Logo"
            className="max-h-[100px] h-auto ml-4"
          />
        </Link>
      </div>
      {isLoggedIn && (
        <div className="flex items-center space-x-4 mr-4">
          {hasProfile ? (
            <>
              <Link
                to="/discover"
                className="text-white hover:text-red-500 transition duration-300"
              >
                Discover
              </Link>
              <Link
                to="/matches"
                className="text-white hover:text-red-500 transition duration-300"
              >
                Matches
              </Link>

              <Link
                to="/notifications"
                className="text-white hover:text-red-500 transition duration-300"
              >
                Notifications
              </Link>
              <Link
                to="/dms"
                className="text-white hover:text-red-500 transition duration-300"
              >
                DMs
              </Link>

              <Link
                to="/profile"
                className="text-white hover:text-red-500 transition duration-300"
              >
                Profile
              </Link>
            </>
          ) : (
            <Link
              to="/createprofile"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Create Profile
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="text-red-500 px-2 py-1 rounded-md hover:text-red-600 hover:bg-gray-800 transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
