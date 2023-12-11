"use client";
import { useRouter } from "next/router";
import Profile from "@/app/components/Profile";
// import Button from "../components/Button";

interface ProfileClientProps {
  userId?: string;
  username?: string;
  email?: string;
}

const ProfileClient: React.FC<ProfileClientProps> = ({
  userId,
  username,
  email,
}) => {
  // const router = useRouter();

  try {
    if (userId && username && email) {
      // If all required props are available, render the profile
      return (
        <div>
          <Profile
            userId={userId}
            name={username}
            email={email}
            onSubmit={() => {}}
          />
          {/* Uncomment the button when you want to use it */}
          {/* <Button label="edit" onClick={() => router.push("/profile/edit")} /> */}
        </div>
      );
    } else {
      // Handle the case where some required props are not available
      return (
        <div>
          <h1>User Page</h1>
          <p>User information is incomplete</p>
        </div>
      );
    }
  } catch (error) {
    // Handle errors thrown in the try block
    console.error("Error rendering user profile:", error);
    return (
      <div>
        <h1>User Page</h1>
        <p>Error rendering user profile</p>
      </div>
    );
  }
};

export default ProfileClient;
