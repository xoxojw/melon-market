import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch("/api/users/me").then(res => res.json()).then((data) => {
      if (!data.ok) return router.replace("/login");
      setUser(data.userProfile);
    });
  }, [router]);
  return user;
};

export default useUser;