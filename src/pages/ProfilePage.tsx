import React from "react";
import SetLayout from "../layout/SetLayout";

import MyProfile from "../components/MyProfile";
import MyThread from "../components/MyThread";

export default function ProfilePage() {
  return (
    <>
      <SetLayout>
        <MyProfile />
        <MyThread />
      </SetLayout>
    </>
  );
}
