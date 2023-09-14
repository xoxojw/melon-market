import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const useUser = () => {
  const { data, error } = useSWR("/api/users/me");

  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      return router.replace("/login");
    }
  }, [data, router])
  return { user: data?.userProfile, isLoading: !data && !error };
};

export default useUser;