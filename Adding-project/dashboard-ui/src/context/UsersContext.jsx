import { createContext, useContext, useMemo, useState } from "react";

const UsersContext = createContext(null);

const initialUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Editor",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@example.com",
    role: "Viewer",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "David Green",
    email: "david@example.com",
    role: "Viewer",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

export function UsersProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (user) => {
    setUsers((prev) => {
      const newId = prev.length ? Math.max(...prev.map((u) => u.id)) + 1 : 1;
      const fallbackAvatar = `https://i.pravatar.cc/100?img=${
        (newId % 70) + 1
      }`;
      const avatar =
        user.avatar && user.avatar.trim() ? user.avatar.trim() : fallbackAvatar;
      const { avatar: _omit, ...rest } = user;
      return [...prev, { id: newId, avatar, ...rest }];
    });
  };

  const value = useMemo(() => ({ users, addUser }), [users]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export function useUsers() {
  const ctx = useContext(UsersContext);
  if (!ctx) throw new Error("useUsers must be used within UsersProvider");
  return ctx;
}
