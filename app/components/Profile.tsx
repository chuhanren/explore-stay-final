"use client";
import React from "react";
import Container from "./Container";
import Button from "./Button";

interface UserCardProps {
  userId?: string;
  name?: string;
  email?: string;
  disabled?: boolean;
  onSubmit: () => void;
}

const Profile: React.FC<UserCardProps> = ({
  userId,
  name,
  email,
  disabled,
  onSubmit,
}) => {
  return (
    <Container>
      <div className="font-medium text-sm"> User Page</div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="text-gray-600">UserId: {userId}</div>
        <div className="text-gray-600">Name: {name}</div>
        <div className="text-gray-600">Email: {email}</div>
      </div>
      <div className="p-4">
        <Button disabled={disabled} label="update" onClick={onSubmit} />
      </div>
    </Container>
  );
};

export default Profile;
