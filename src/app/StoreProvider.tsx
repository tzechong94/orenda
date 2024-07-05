"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { setUser } from "../lib/features/users/usersSlice";

export default function StoreProvider({
  children,
  userId,
}: {
  userId: string | null;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setUser(userId));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
