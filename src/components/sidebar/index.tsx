import * as React from "react";
import Avatar from "../avatar";
import { FieldGroupSidebar, FieldSidebar, NameSidebar } from "../sidebar-field";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <aside className="flex-1 max-w-[280px] bg-cyan-900">
      <div className="p-4 flex flex-col gap-4">
        <Avatar src="https://znews-photo.zingcdn.me/w660/Uploaded/aobovhp/2019_12_14/101.jpg" />
        {/* <NameSidebar name="Gurleen Singh" /> */}
        <FieldGroupSidebar title="Contract">
          <FieldSidebar href="https://github.com/hauleguitare" />
          <FieldSidebar title="0938365004" />
        </FieldGroupSidebar>
        <FieldGroupSidebar title="Language">
          <FieldSidebar title="HTML" />
          <FieldSidebar title="CSS" />
          <FieldSidebar title="JavaScript" />
        </FieldGroupSidebar>
        <FieldGroupSidebar title="Activities">
          <FieldSidebar title="Swimming" />
          <FieldSidebar title="Play guitare" />
          <FieldSidebar title="Read book" />
        </FieldGroupSidebar>
      </div>
    </aside>
  );
};

export default Sidebar;
