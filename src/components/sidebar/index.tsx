import * as React from "react";
import { AVATAR_CALLBACK } from "../../assets";
import useAppProvider from "../../context/appContext";
import Avatar from "../avatar";
import FieldSidebarChangeState from "../FieldSidebarContainer";
import MappinIcon from "../icon";
import { FieldGroupSidebar, FieldSidebar, NameSidebar } from "../sidebar-field";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const { Context } = useAppProvider();
  return (
    <Context.Consumer>
      {(data) =>
        data && (
          <React.Fragment>
            <aside className="flex-1 max-w-[280px] bg-cyan-900">
              <div className="p-4 flex flex-col gap-4">
                {data.avata && <Avatar src={data.avata || AVATAR_CALLBACK} />}
                {/* <NameSidebar name="Gurleen Singh" /> */}
                <FieldGroupSidebar title="Contract">
                  <FieldSidebar href={data.linkedinurl} />
                  <FieldSidebar title={data.cvjson.userProfile.location.city} />
                  <FieldSidebar title={data.cvjson.userProfile.location.country} />
                </FieldGroupSidebar>

                <FieldSidebarChangeState defaultData={data.cvjson.skills} title="Top Skills" />

                {/* <FieldSidebarChangeState defaultData={["Swimming", "Play guitar", "Read book"]} title="Activities" /> */}
              </div>
            </aside>
          </React.Fragment>
        )
      }
    </Context.Consumer>
  );
};

export default Sidebar;

{
  /* <FieldGroupSidebar title="Language">
                    <FieldSidebar title="HTML" />
                    <FieldSidebar title="CSS" />
                    <FieldSidebar title="JavaScript" />
                  </FieldGroupSidebar> */
}
