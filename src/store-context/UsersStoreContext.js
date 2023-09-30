import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const UsersStoreContext = React.createContext({
  addNewUserHandler: () => {},
  logUserOutFunc: () => {},
  logUserInFunc: () => {},
  editUserisActiveHandler: () => {},
  submitEditUserHandler: () => {},
  users: [{}],
  currentUserSession: {},
  editUser: {},
  loginCurrentUser: () => {},
  editUserPageActive: Boolean,
  loginButtonIsToched: Boolean,
  onLogout: () => {},
  setLoginButtonIsToched: () => {},
});

export const UsersStoreContextProvider = (props) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUserSession, setcurrentUserSession] = useState(null);
  const [editUserPageActive, setEditUserPageActive] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [loginButtonIsToched, setLoginButtonIsToched] = useState(false);

  const location = useLocation();
  const currentLocation = location.pathname.endsWith("/");

  const logUserInFunc = () => {
    setIsUserLogged(true);
  };

  const logUserOutFunc = () => {
    setIsUserLogged(false);
  };
  const loginCurrentUser = (user) => {
    setcurrentUserSession(user);
    logUserInFunc();
  };
  const logoutCurrentUser = () => {
    localStorage.removeItem("firebaseKey");
    localStorage.removeItem("firebaseKeyExpiration");
    setcurrentUserSession(null);
    logUserOutFunc();
  };

  // const addNewUserHandler = (newUser) => {
  //   setUsers((prev) => [...prev, newUser]);
  // };
  const addNewUserHandler = async (newUser) => {
    await fetch(
      `https://react-course-http-bce24-default-rtdb.firebaseio.com/users.json`,
      {
        method: "POST",
        body: JSON.stringify(newUser),
      }
    );
    // setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      // setIsLoading(true);
      const response = await fetch(
        "https://react-course-http-bce24-default-rtdb.firebaseio.com/users.json"
      );
      if (!response.ok) {
        throw new Error("Что то пошло не так");
      }
      const responseData = await response.json();
      // console.log(responseData);
      const loadedUsers = [];
      for (const key in responseData) {
        loadedUsers.push({
          id: key,
          name: responseData[key].name,
          lastName: responseData[key].lastName,
          email: responseData[key].email,
          password: responseData[key].password,
          userCards: responseData[key].userCards,
        });
      }
      return loadedUsers;
    };
    fetchUsers().then((loadedUsers) => {
      // Обновляем состояние users с помощью полученных данных
      setUsers(loadedUsers);
    });
    // console.log(fetchUsers().PromiseResult);
  }, [currentLocation]);

  const editUserisActiveHandler = () => {
    setEditUser(currentUserSession);
    setEditUserPageActive(true);
  };

  const submitEditUserHandler = (edditedUser) => {
    setcurrentUserSession(edditedUser);

    const updatedUSerList = users.map((user) =>
      user.id === edditedUser.id ? edditedUser : user
    );
    setUsers(updatedUSerList);
    setEditUserPageActive(false);
  };

  // console.log(editUser);
  // console.log(currentUserSession, !!currentUserSession);

  return (
    <UsersStoreContext.Provider
      value={{
        logUserOutFunc,
        logUserInFunc,
        addNewUserHandler,
        editUserisActiveHandler,
        users,
        currentUserSession,
        loginCurrentUser,
        editUserPageActive,
        editUser,
        submitEditUserHandler,
        onLogout: logoutCurrentUser,
        setLoginButtonIsToched,
        loginButtonIsToched,
      }}
    >
      {props.children}
    </UsersStoreContext.Provider>
  );
};
export default UsersStoreContext;
