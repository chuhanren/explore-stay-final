import axios from "axios";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Profile from "../components/Profile";
import ProfileClient from "./ProfileClient";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
// import { useRouter } from "next/navigation";

const ProfilePage = async () => {
  // try {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    const userId: string = currentUser.id;
    const username: string = currentUser.name || ""; // Use an empty string as a default value
    const email: string = currentUser.email || ""; // Use an empty string as a default value

    //     return (
    //       <div>
    //         <Avatar src={currentUser?.image} />
    //         <Profile userId={userId} name={username} email={email} />
    //         <Button label="edit" onClick={() => router.push("/profile")} />
    //       </div>
    //     );
    //   } else {
    //     // Handle the case where currentUser is not available
    //     return (
    //       <div>
    //         <h1>User Page</h1>
    //         <p>User not found</p>
    //       </div>
    //     );
    //   }
    // } catch (error) {
    //   console.error("Error fetching user information:", error);
    //   // Handle the error, for example, redirect to an error page
    //   return (
    //     <div>
    //       <h1>User Page</h1>
    //       <p>Error fetching user information</p>
    //     </div>
    //   );
    return <ProfileClient userId={userId} username={username} email={email} />;
  }
};

export default ProfilePage;
