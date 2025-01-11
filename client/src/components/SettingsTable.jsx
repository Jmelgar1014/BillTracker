import React from "react";
import SwitchToggle from "./SwitchToggle";
import SettingsRow from "./SettingsRow";

const SettingsTable = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="w-[600px]">
          <h1 className="mb-12 text-3xl">Account Preferences</h1>
          <SettingsRow title="Dark Mode" setting={<SwitchToggle />} />
        </div>
      </div>
    </>
  );
};

export default SettingsTable;
