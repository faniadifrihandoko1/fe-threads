import React from "react";
import SetLayout from "../layout/SetLayout";
import MyProfile from "../features/user/components/MyProfile";
import MyThread from "../features/myThread/Component/MyThread";

export default function OtherProfile() {
  return (
    <SetLayout>
      <MyProfile />
      <MyThread />
    </SetLayout>
  );
}
