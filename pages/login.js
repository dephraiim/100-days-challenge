import { Center, Text } from "@chakra-ui/react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

export default function Login() {
  const { user } = useUser();

  const createUser = async (user) => {
    console.log("user", user);

    if (user) {
      const userData = {
        name: user.name,
        avatar: user.picture,
        username: user.nickname,
        userId: user.sub,
        goal: "",
        dailyHabit: "",
        currentDay: 0,
        days: [],
      };

      const userDetails = await fetch("/api/createUser", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(await userDetails.json());
    }
  };

  useEffect(() => {
    createUser(user);
  }, []);

  return (
    <Center>
      <Text fontFamily="bungee" fontSize="3xl">
        Logging In
      </Text>
    </Center>
  );
}

export const getServerSideProps = withPageAuthRequired();
