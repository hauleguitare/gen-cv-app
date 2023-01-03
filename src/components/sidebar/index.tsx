import * as React from "react";
import { AVATAR_CALLBACK } from "../../assets";
import useAppProvider from "../../context/appContext";
import Avatar from "../avatar";
import FieldSidebarChangeState from "../FieldSidebarContainer";
import MappinIcon from "../icon";
import { FieldGroupSidebar, FieldSidebar, NameSidebar } from "../sidebar-field";

interface ISidebarProps {
  limitSkill?: number | null;
  email?: string | null;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const {email, limitSkill} = props;
  const { Context } = useAppProvider();


  const handleSpliceSkill = (data: string[]) => {
    if (!limitSkill){
      return data;
    }
    const spliceData = data.splice(0, data.length - limitSkill);
    return spliceData;
  };

  return (
    <Context.Consumer>
      {(data) =>
        data && (
          <React.Fragment>
            <aside className="flex-1 max-w-[280px] bg-cyan-900">
              <div className="p-4 flex flex-col gap-4">
                {data.avata && <Avatar src={data.avata} />}
                <FieldGroupSidebar title="Contact">
                  <FieldSidebar href={data.linkedinurl} />
                  <FieldSidebar title={data.cvjson.userProfile.location.city} />
                  <FieldSidebar title={data.cvjson.userProfile.location.country} />
                  {email && <FieldSidebar title={email}/>}
                </FieldGroupSidebar>

                <FieldSidebarChangeState defaultData={handleSpliceSkill(data.cvjson.skills)} title="Top Skills" />

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
